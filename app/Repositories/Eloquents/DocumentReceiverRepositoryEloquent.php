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
        'seen' => '=',

        'user.id' => '=',
        'user.name' => 'like',
        'user.email' => '=',
        'user.tel' => '=',
        'user.birthday' => '=',
        'user.department_id' => '=',
        'user.title_id' => '=',
        'user.active' => '=',

        'department.id' => '=',
        'department.name' => 'like',
        'department.tel' => '=',

        'role.id' => '=',
        'role.name' => 'like',
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
