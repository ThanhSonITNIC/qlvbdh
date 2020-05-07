<?php

use Illuminate\Database\Seeder;
use App\Entities\User;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $guard = config('auth.defaults.guard');

        DB::table(config('permission.table_names.permissions'))->insert([
            ['name' => 'Quản lý chức vụ', 'guard_name' => $guard],
            ['name' => 'Quản lý người dùng', 'guard_name' => $guard],
            ['name' => 'Quản lý nhân viên', 'guard_name' => $guard],
            ['name' => 'Quản lý phòng ban', 'guard_name' => $guard],
            ['name' => 'Quản lý nhóm', 'guard_name' => $guard],
            ['name' => 'Chỉ định chức vụ cho người dùng', 'guard_name' => $guard],
            ['name' => 'Thêm người dùng vào phòng ban', 'guard_name' => $guard],
            ['name' => 'Thêm nhân viên vào phòng ban', 'guard_name' => $guard],
            ['name' => 'Báo cáo thống kê', 'guard_name' => $guard],
            ['name' => 'Quản lý văn bản đến', 'guard_name' => $guard],
            ['name' => 'Quản lý văn bản đi', 'guard_name' => $guard],
            ['name' => 'Quản lý văn bản nội bộ', 'guard_name' => $guard],
            ['name' => 'Chuyển văn bản', 'guard_name' => $guard],
            ['name' => 'Xem văn bản', 'guard_name' => $guard],
            ['name' => 'Trả lời văn bản', 'guard_name' => $guard],
        ]);

        DB::table(config('permission.table_names.roles'))->insert([
            ['name' => 'Lãnh đạo phòng', 'guard_name' => $guard],
            ['name' => 'Chuyên viên', 'guard_name' => $guard],
            ['name' => 'Quản trị hệ thống', 'guard_name' => $guard],
            ['name' => 'Văn thư', 'guard_name' => $guard],
        ]);

        for ($i=0; $i < 100; $i++) { 
            User::all()->random()->assignRole(Role::all()->random()->id);
        }
    }
}
