<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class DocumentReceiver.
 *
 * @package namespace App\Entities;
 */
class DocumentReceiver extends Model implements Transformable
{
    use TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 
        'user_id', 
        'document_id', 
        'view_only', 
        'seen', 
        'done',
    ];

}
