<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Entities\Document;
use Faker\Generator as Faker;
use App\Entities\Book;
use App\Entities\DocumentType;
use App\Entities\User;
use App\Entities\Signer;
use App\Entities\Publisher;

$factory->define(Document::class, function (Faker $faker) {
    $pHCHCUsers = User::where('department_id', 'PHCHC')->get();
    return [
        'id' => $faker->bothify('##-??-???'),
        'abstract' => $faker->text(),
        'content' => $faker->text(500),
        'book_id' => Book::all()->random()->id,
        'type_id' => DocumentType::all()->random()->id,
        'signer_id' =>  Signer::all()->random()->id,
        'creator_id' => $pHCHCUsers->first() ? $pHCHCUsers->random()->id : 1,
        'published_at' => $faker->date(),
        'arrival_at' => $faker->date(),
        'publisher_id' => Publisher::all()->random()->id,
        'due_at' => $faker->date(),
        'link_id' => null,
    ];
});
