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
    WithValidation
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new User([
            'id' => $row['id'],
            'name' => $row['name'],
            'email' => $row['email'],
            'password' => $row['password'],
            'tel' => $row['tel'],
            'birthday' => $row['birthday'],
            'department_id' => $row['department'],
            'title_id' => $row['title'],
            'active' => $row['active'],
        ]);
    }

    public function headingRow(): int
    {
        return 1;
    }

    public function rules(): array
    {
        return [
            'id' => 'required|numeric|unique:users,id',
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6|max:32',
            'tel' => 'nullable|string|unique:users,tel',
            'birthday' => 'nullable|date',
            'department' => 'nullable|exists:departments,id',
            'title' => 'nullable|exists:titles,id',
            'active' => 'nullable|boolean',
        ];
    }

}
