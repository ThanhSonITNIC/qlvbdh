<?php

use Illuminate\Database\Seeder;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('groups')->insert([
            ['name' => 'Lãnh đạo phòng'],
            ['name' => 'Chuyên viên'],
            ['name' => 'Văn thư'],
            ['name' => 'Quản trị hệ thống'],
        ]);

        factory(App\Entities\GroupUser::class, 100)->create();
    }
}
