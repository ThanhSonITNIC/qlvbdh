<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Entities\DocumentReceiver;
use Faker\Generator as Faker;
use App\Entities\User;
use App\Entities\Department;
use App\Entities\Document;
use Spatie\Permission\Models\Role;



$factory->define(DocumentReceiver::class, function (Faker $faker) {
    return [
        'user_id' => User::all()->random()->id,
        'document_id' => Document::all()->random()->id,
        'seen' => rand(0, 1),
    ];
});