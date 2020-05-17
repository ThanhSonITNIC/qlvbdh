<?php

namespace App\Http\Requests\Department;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => 'nullable|string|alpha_dash|max:30|unique:departments,id,'.$this->department,
            'name' => 'nullable|string',
            'tel' => 'nullable|alpha_num|max:15|unique:departments,tel,'.$this->tel,
        ];
    }
}
