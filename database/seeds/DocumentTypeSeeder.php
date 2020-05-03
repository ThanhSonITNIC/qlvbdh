<?php

use Illuminate\Database\Seeder;

class DocumentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('document_types')->insert([
            ['id' => 'De', 'name' => 'Văn bản đến'],
            ['id' => 'Di', 'name' => 'Văn bản đi'],
            ['id' => 'NB', 'name' => 'Văn bản nội bộ'],
            ['id' => 'BC', 'name' => 'Báo cáo'],
            ['id' => 'DT', 'name' => 'Dự thảo'],
        ]);
    }
}
