<?php

namespace App\Repositories\Eloquents;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repositories\DocumentOrganizeRepository;
use App\Entities\DocumentOrganize;

/**
 * Class DocumentOrganizeRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquents;
 */
class DocumentOrganizeRepositoryEloquent extends BaseRepository implements DocumentOrganizeRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'id' => '=',
        'document_id' => '=',
        'organize_id' => '=',
    ];
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DocumentOrganize::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
