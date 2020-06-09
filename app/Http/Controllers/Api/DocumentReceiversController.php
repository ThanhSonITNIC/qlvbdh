<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Contracts\Repositories\DocumentReceiverRepository;
use App\Contracts\Repositories\DepartmentRepository;
use App\Http\Requests\DocumentReceiver\{
    IndexRequest,
    CreateRequest,
    CreatesRequest,
    ShowRequest,
    UpdateRequest,
    DestroyRequest,
    DestroysRequest,
};

/**
 * Class DocumentReceiversController.
 *
 * @package namespace App\Http\Controllers\Api;
 */
class DocumentReceiversController extends Controller
{
    /**
     * @var DocumentReceiverRepository
     */
    protected $repository;

    /**
     * @var DepartmentRepository
     */
    protected $departmentRepository;

    /**
     * DocumentReceiversController constructor.
     *
     * @param DocumentReceiverRepository $repository
     */
    public function __construct(
        DocumentReceiverRepository $repository, 
        DepartmentRepository $departmentRepository
    )
    {
        $this->repository = $repository;
        $this->departmentRepository = $departmentRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(IndexRequest $request)
    {
        $data = $this->repository->all();
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

    /**
     * Remove multiple receivers
     *
     * @param  $CLASS\DestroyRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function destroys(DestroysRequest $request){
        if($request->has('department_id'))
        {
            $usersInDepartment = $this->departmentRepository->find($request->department_id)->users;

            foreach ($usersInDepartment as $user) {
                $this->repository->deleteWhere([
                    'user_id' => $user->id,
                    'document_id' => $request->document_id,
                ]);
            }
        }elseif($request->has('user_id')){
            $this->repository->deleteWhere([
                'user_id' => $request->user_id,
                'document_id' => $request->document_id,
            ]);
        }

        return $this->respondNoContent();
    }

    /**
     * Store multiple receivers
     *
     * @param  $CLASS\CreatesRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function stores(CreatesRequest $request)
    {
        $usersInDepartment = $this->departmentRepository->find($request->department_id)->users;

        foreach ($usersInDepartment as $user) {
            $this->repository->create([
                'user_id' => $user->id,
                'document_id' => $request->document_id
            ]);
        }

        return $this->respondCreated(null);
    }

}
