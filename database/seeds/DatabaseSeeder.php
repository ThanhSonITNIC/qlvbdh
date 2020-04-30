<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(DepartmentSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(GroupSeeder::class);
        $this->call(PermissionSeeder::class);
        $this->call(BookSeeder::class);
        $this->call(DocumentTypeSeeder::class);
        $this->call(PublisherSeeder::class);
    }
}
