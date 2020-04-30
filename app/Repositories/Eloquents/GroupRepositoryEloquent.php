<?php

namespace App\Repositories\Eloquents;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repositories\GroupRepository;
use App\Entities\Group;

/**
 * Class GroupRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquents;
 */
class GroupRepositoryEloquent extends BaseRepository implements GroupRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Group::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
