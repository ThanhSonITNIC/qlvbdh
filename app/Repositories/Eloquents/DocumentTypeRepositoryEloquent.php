<?php

namespace App\Repositories\Eloquents;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repositories\DocumentTypeRepository;
use App\Entities\DocumentType;

/**
 * Class DocumentTypeRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquents;
 */
class DocumentTypeRepositoryEloquent extends BaseRepository implements DocumentTypeRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DocumentType::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
