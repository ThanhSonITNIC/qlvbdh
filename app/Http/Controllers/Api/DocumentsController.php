<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Contracts\Repositories\DocumentRepository;
use App\Http\Requests\Document\{
    IndexRequest,
    CreateRequest,
    ShowRequest,
    UpdateRequest,
    DestroyRequest,
};

/**
 * Class DocumentsController.
 *
 * @package namespace App\Http\Controllers\Api;
 */
class DocumentsController extends Controller
{
    /**
     * @var DocumentRepository
     */
    protected $repository;

    /**
     * DocumentsController constructor.
     *
     * @param DocumentRepository $repository
     */
    public function __construct(DocumentRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(IndexRequest $request)
    {
        $data = $this->repository->paginate();
        return $this->respond($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  $CLASS\CreateRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(CreateRequest $request)
    {
        if($request->has('attachments')){
            $attachments = $request->file('attachments')->store('attachments');
        }
        dd($request->all());
        $data = $this->repository->create($request->all());
        return $this->respondCreated($data);
    }

    /**
     * Display the specified resource.

     * @param  $CLASS\ShowRequest $request
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show(ShowRequest $request, $id)
    {
        $data = $this->repository->find($id);
        return $this->respond($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  $CLASS\UpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     */
    public function update(UpdateRequest $request, $id)
    {
        $data = $this->repository->update($request->all(), $id);
        return $this->respond($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  $CLASS\DestroyRequest $request
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(DestroyRequest $request, $id)
    {
        $this->repository->delete($id);
        return $this->respondNoContent();
    }
}
