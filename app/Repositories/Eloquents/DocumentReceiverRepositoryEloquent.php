<?php

namespace App\Repositories\Eloquents;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repositories\DocumentReceiverRepository;
use App\Entities\DocumentReceiver;

/**
 * Class DocumentReceiverRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquents;
 */
class DocumentReceiverRepositoryEloquent extends BaseRepository implements DocumentReceiverRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'id' => '=',
        'user_id' => '=',
        'document_id' => '=',
        'view_only' => '=',
        'seen' => '=',
        'done' => '=',
        'group_id' => '=',
        'department_id' => '=',

        'user.id' => '=',
        'user.name' => 'like',
        'user.email' => '=',
        'user.tel' => '=',
        'user.birthday' => '=',
        'user.department_id' => '=',
        'user.active' => '=',

        'department.id' => '=',
        'department.name' => 'like',
        'department.tel' => '=',

        'group.id' => '=',
        'group.name' => 'like',
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DocumentReceiver::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
