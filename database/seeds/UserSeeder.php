<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Administrator', 
                'email' => 'admin@domain.com', 
                'password' => Hash::make('password'), 
                'tel' => '0376111000', 
                'birthday' => '1975-04-30', 
                'department_id' => null,
                'title_id' => null,
                'email_verified_at' => now(),
            ],
        ]);

        factory(App\Entities\User::class, 300)->create();
    }
}
