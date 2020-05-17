<?php

namespace App\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;
use App\Entities\DocumentType;

/**
 * Class DocumentCriteria.
 *
 * @package namespace App\Criteria;
 */
class DocumentCriteria implements CriteriaInterface
{
    /**
     * Apply criteria in query repository
     *
     * @param string              $model
     * @param RepositoryInterface $repository
     *
     * @return mixed
     */
    public function apply($model, RepositoryInterface $repository)
    {
        $model = $model->where(function($model){
            if(auth()->user()->hasPermissionTo('Quản lý văn bản đến')){
                $model->orWhere('type_id', DocumentType::DEN);
            }
    
            if(auth()->user()->hasPermissionTo('Quản lý văn bản đi')){
                $model->orWhere('type_id', DocumentType::DI);
            }
    
            if(auth()->user()->hasPermissionTo('Quản lý văn bản nội bộ')){
                $model->orWhere('type_id', DocumentType::NOIBO);
            }
        });

        $model = $model->orWhere(function($model){
            $ids = auth()->user()->documents->map->id;
            $model->orWhereIn('id', $ids);
        });

        return $model;
    }
}
