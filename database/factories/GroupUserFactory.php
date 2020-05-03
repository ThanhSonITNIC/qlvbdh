<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Entities\GroupUser;
use Faker\Generator as Faker;
use App\Entities\User;
use App\Entities\Group;

$factory->define(GroupUser::class, function (Faker $faker) {
    $user = User::all()->random()->id;
    $group = Group::all()->random()->id;
    if(GroupUser::where('user_id', $user)->where('group_id', $group)->first())
        return null;
    return [
        'user_id' => $user,
        'group_id' => $group,
    ];
});
