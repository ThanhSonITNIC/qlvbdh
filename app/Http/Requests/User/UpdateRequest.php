<?php

namespace App\Http\Requests\User;

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
            'id' => 'nullable|numeric|unique:users,id,'.$this->user,
            'name' => 'nullable|string',
            'email' => 'nullable|email|unique:users,email',
            'password' => 'nullable|confirmed',
            'tel' => 'nullable|alpha_num|max:15|unique:users,tel',
            'birthday' => 'nullable|date',
            'department_id' => 'nullable|exists:departments,id',
            'title_id' => 'nullable|exists:titles,id',
            'active' => 'nullable|boolean',
        ];
    }
}
