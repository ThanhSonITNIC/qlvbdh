<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use App\Casts\Json;

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

    protected $casts = [
        'published_at' => 'date',
        'arrival_at' => 'date',
        'due_at' => 'date',
        'attachments' => Json::class,
    ];

    public function receivers(){
        return $this->hasMany(DocumentReceiver::class);
    }

    public function type(){
        return $this->belongsTo(DocumentType::class, 'type_id');
    }

    public function book(){
        return $this->belongsTo(Book::class);
    }

    public function publisher(){
        return $this->belongsTo(Publisher::class);
    }

    public function signer(){
        return $this->belongsTo(User::class, 'signer_id');
    }

    public function creator(){
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function link(){
        return $this->belongsTo(Document::class, 'link_id');
    }

}
