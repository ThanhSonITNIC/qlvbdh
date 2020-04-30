<?php

namespace App\Repositories\Eloquents;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repositories\DocumentRepository;
use App\Entities\Document;

/**
 * Class DocumentRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquents;
 */
class DocumentRepositoryEloquent extends BaseRepository implements DocumentRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Document::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
