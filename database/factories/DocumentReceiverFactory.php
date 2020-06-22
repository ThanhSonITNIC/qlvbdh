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
    $user = User::all()->random();
    return [
        'user_id' => $user->id,
        'document_id' => $document->id,
        'seen' => rand(0, 1),
    ];
});