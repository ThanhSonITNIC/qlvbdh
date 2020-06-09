<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class DocumentOrganize.
 *
 * @package namespace App\Entities;
 */
class DocumentOrganize extends Model implements Transformable
{
    use TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id', 'document_id', 'organize_id'];

    public $timestamps = false;

    public function document(){
        return $this->belongsTo(Document::class);
    }

    public function organize(){
        return $this->belongsTo(Organize::class);
    }

}
