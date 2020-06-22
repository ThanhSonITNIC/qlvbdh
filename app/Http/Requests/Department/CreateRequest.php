<?php

namespace App\Http\Requests\Department;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->hasPermissionTo('Quản lý phòng ban');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => 'required|string|alpha_dash|max:7|unique:departments,id,'.$this->department,
            'name' => 'required|string',
            'tel' => 'nullable|alpha_num|max:15|unique:departments,tel,'.$this->tel,
        ];
    }
}
