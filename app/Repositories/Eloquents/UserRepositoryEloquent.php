<?php

namespace App\Repositories\Eloquents;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repositories\UserRepository;
use App\Entities\User;

/**
 * Class UserRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquents;
 */
class UserRepositoryEloquent extends BaseRepository implements UserRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'id' => '=',
        'name' => 'like',
        'email' => '=',
        'tel' => '=',
        'birthday' => '=',
        'department_id' => '=',
        'active' => '=',

        'groups.id' => '=',
        'groups.name' => 'like',

        'department.id' => '=',
        'department.name' => 'like',
        'department.tel' => '=',
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return User::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
