<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Entities\DocumentReceiver;
use Faker\Generator as Faker;
use App\Entities\User;
use App\Entities\Group;
use App\Entities\Department;
use App\Entities\Document;

$factory->define(DocumentReceiver::class, function (Faker $faker) {
    
    $document = Document::all()->random();
    
    $group_id = null;
    $department_id = null;
    
    switch (rand(0, 2)) {
        case 0: // select group
            $group = Group::all()->random();
            $user = $group->users->random();
            $group_id = $group->id;
            break;
        case 1: // select department
            $user = Department::all()->random()->users->random();
            $department_id = $user->department->id;
            break;
        default:
            $user = User::all()->random();
            break;
    }

    if(DocumentReceiver::where('user_id', $user->id)->where('document_id', $document->id)->first())
        return null;

    return [
        'user_id' => $user->id,
        'document_id' => $document->id,
        'view_only' => rand(0, 1),
        'seen' => rand(0, 1),
        'done' => rand(0, 1),
        'group_id' => $group_id,
        'department_id' => $department_id,
    ];
});