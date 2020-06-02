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
        factory(App\Entities\Document::class, 500)->create();
        factory(App\Entities\DocumentReceiver::class, 200)->create();
        factory(App\Entities\Attachment::class, 200)->create();
    }
}
