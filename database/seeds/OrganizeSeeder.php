<?php

use Illuminate\Database\Seeder;

class OrganizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('organizes')->insert([
            ['id' => 'HS', 'name' => 'Công ty Hải Sơn'],
            ['id' => 'BQP', 'name' => 'Bộ quốc phòng'],
            ['id' => 'SHC', 'name' => 'Sở Hành Chính thành phố Đà Nẵng'],
        ]);
    }
}
