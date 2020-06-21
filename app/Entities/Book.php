<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class Book.
 *
 * @package namespace App\Entities;
 */
class Book extends Model implements Transformable
{
    use TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id', 'name'];

    public $timestamps = false;

    public const DI = 2;
    public const DEN = 1;
    public const NOIBO = 3;

    public function documents(){
        return $this->hasMany(Document::class);
    }

    public function isComeIn(){
        return $this->id == self::DEN;
    }

    public function isComeOut(){
        return $this->id == self::DI;
    }

    public function isPrivate(){
        return $this->id == self::NOIBO;
    }

}
