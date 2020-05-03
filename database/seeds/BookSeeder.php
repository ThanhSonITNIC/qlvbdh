<?php

use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('books')->insert([
            ['name' => 'Giấy mời'],
            ['name' => 'Công văn đi'],
            ['name' => 'Công văn đến'],
            ['name' => 'Quyết định đi'],
            ['name' => 'Quyết định đến'],
        ]);
    }
}
