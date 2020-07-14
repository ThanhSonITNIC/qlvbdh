<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Contracts\Repositories\DocumentRepository;
use App\Contracts\Repositories\BookRepository;
use App\Http\Requests\Document\{
    ExportRequest,
};

/**
 * Class ReportsControlle.
 *
 * @package namespace App\Http\Controllers\Api;
 */
class ReportsControlle extends Controller
{
    /**
     * @var DocumentRepository
     */
    protected $repository;

    /**
     * @var BookRepository
     */
    protected $bookRepository;

    /**
     * ReportsControlle constructor.
     *
     * @param DocumentRepository $repository
     */
    public function __construct(DocumentRepository $repository, BookRepository $bookRepository)
    {
        $this->repository = $repository;
        $this->bookRepository = $bookRepository;
    }

    /**
     * Download report
     *
     * @return \Illuminate\Http\Response
     */
    public function export(ExportRequest $request)
    {
        $books = $this->bookRepository->all();

        if($request->has('book')){
            $books = collect();
            $books->push($this->bookRepository->find($request->book));
        }
        
        $books->map(function ($book) use ($request)
        {
            $documents = $this->repository->scopeQuery(function($query) use ($request, $book)
            {
                $query->where('book_id', $book->id);
        
                if($request->has('type')){
                    $query->where('type_id', $request->type);
                }

                if($request->has('from')){
                    $request->to = $request->to ?: date('Y-m-d');
                    $query->whereBetween('effective_at', [$request->from, $request->to]);
                }

                $query
                ->with(['receivers.user', 'publisher', 'organizes'])
                ->orderBy('effective_at')
                ->orderBy('publisher_id');

                return $query;
            })->all();

            return $book->documents = $documents;
        });

        $name = auth()->user()->name . ' ' . date('d-m-Y');
        $fileName = $name . '.' . strtolower($request->export);
        $exporter = new \App\Exports\BooksExport($books, $request->from, $request->to);
        return \Excel::download($exporter, $fileName, $request->export);
    }

}