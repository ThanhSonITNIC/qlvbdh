<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Entities\DocumentReceiver;
use Faker\Generator as Faker;
use App\Entities\User;
use App\Entities\Department;
use App\Entities\Document;
use Spatie\Permission\Models\Role;

$factory->define(DocumentReceiver::class, function (Faker $faker) {
    
    $document = Document::all()->random();
    
    $role_id = null;
    $department_id = null;
    
    switch (rand(0, 2)) {
        case 0: // select role
            $role = Role::all()->random();
            $user = User::role($role)->get()->random();
            $role_id = $role->id;
            break;
        case 1: // select department
            $user = Department::all()->random()->users->random();
            $department_id = $user->department->id;
            break;
        default:
            $user = User::all()->random();
            break;
    }

    return [
        'user_id' => $user->id,
        'document_id' => $document->id,
        'view_only' => rand(0, 1),
        'seen' => rand(0, 1),
        'done' => rand(0, 1),
        'role_id' => $role_id,
        'department_id' => $department_id,
    ];
});