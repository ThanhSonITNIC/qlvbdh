<?php

namespace App\Repositories\Eloquents;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repositories\PublisherRepository;
use App\Entities\Publisher;

/**
 * Class PublisherRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquents;
 */
class PublisherRepositoryEloquent extends BaseRepository implements PublisherRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Publisher::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
