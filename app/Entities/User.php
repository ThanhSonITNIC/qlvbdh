<?php

namespace App\Entities;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 
        'email', 
        'password',
        'tel',
        'birthday',
        'department_id',
        'active',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'active' => 'boolean',
        'birthday' => 'date',
    ];

    public function groups(){
        return $this->belongsToMany(Group::class, GroupUser::class);
    }

    public function department(){
        return $this->belongsTo(Department::class);
    }

    public function createdDocuments(){
        return $this->hasMany(Document::class, 'creator_id');
    }

    public function signedDocuments(){
        return $this->hasMany(Document::class, 'signer_id');
    }

    public function receivedDocuments(){
        return $this->belongsToMany(Document::class, DocumentReceiver::class);
    }
}
