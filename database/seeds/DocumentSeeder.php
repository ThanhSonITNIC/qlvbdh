<?php

use Illuminate\Database\Seeder;

class DocumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Entities\Document::class, 50)->create();
        factory(App\Entities\DocumentReceiver::class, 100)->create();
    }
}
