<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Entities\GroupUser;
use Faker\Generator as Faker;
use App\Entities\Group;
use App\Entities\User;

$factory->define(GroupUser::class, function (Faker $faker) {
    return [
        'user_id' => User::all()->random()->id,
        'group_id' => Group::all()->random()->id,
    ];
});
