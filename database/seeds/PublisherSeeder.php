<?php

use Illuminate\Database\Seeder;

class PublisherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('publishers')->insert([
            ['name' => 'Công ty Hải Sơn'],
            ['name' => 'Bộ quốc phòng'],
        ]);
    }
}
