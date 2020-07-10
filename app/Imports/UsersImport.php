<?php

namespace App\Imports;

use App\Entities\User;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithMappedCells;
use Maatwebsite\Excel\Concerns\WithValidation;

class UsersImport
implements 
    ToModel, 
    WithHeadingRow,
    WithValidation,
    WithMappedCells
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new User([
            'name' => $row['name'],
            'email' => $row['email'],
            'tel' => $row['tel'],
            'birthday' => $row['birthday'],
            'title_id' => $row['title'],
            'department_id' => $row['department'],
            'active' => $row['active'],
            'password' => \Hash::make($row['password'] ?? 'password'),
        ]);
    }

    public function mapping(): array
    {
        return [
            'name' => 'B2',
            'email' => 'C2',
            'tel' => 'D2',
            'birthday' => 'E2',
            'title' => 'F2',
            'department' => 'G2',
            'active' => 'H2',
            'password' => 'I2',
        ];
    }

    public function headingRow(): int
    {
        return 1;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'nullable|string|min:6|max:32',
            'tel' => 'nullable|string|unique:users,tel',
            'birthday' => 'nullable|date',
            'department' => 'nullable|exists:departments,id',
            'title' => 'nullable|exists:titles,id',
            'active' => 'nullable|boolean',
        ];
    }

}
