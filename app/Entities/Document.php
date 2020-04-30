<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class Document.
 *
 * @package namespace App\Entities;
 */
class Document extends Model implements Transformable
{
    use TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'abstract',
        'content',
        'book_id',
        'type_id',
        'signer_id',
        'creator_id',
        'published_at',
        'arrival_at',
        'publisher_id',
        'attachments',
        'due_at',
        'link_id',
    ];

    protected $keyType = 'string';

    public $incrementing = false;

}
