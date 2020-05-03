<?php

namespace App\Repositories\Eloquents;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repositories\GroupUserRepository;
use App\Entities\GroupUser;

/**
 * Class GroupUserRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquents;
 */
class GroupUserRepositoryEloquent extends BaseRepository implements GroupUserRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'id' => '=',
        'user_id' => '=',
        'group_id' => '=',

        'user.id' => '=',
        'user.name' => 'like',
        'user.email' => '=',
        'user.tel' => '=',
        'user.birthday' => '=',
        'user.department_id' => '=',
        'user.active' => '=',

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
        return GroupUser::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
