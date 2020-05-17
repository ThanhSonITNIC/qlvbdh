<?php

namespace App\Http\Requests\DocumentReceiver;

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
            'user_id' => 'required|exists:users,id',
            'document_id' => 'required|exists:documents,id',
            'view_only' => 'nullable|boolean',
            'seen' => 'nullable|boolean',
            'done' => 'nullable|boolean',
            'role_id' => 'nullable|exists:roles,id',
            'department_id' => 'nullable|exists:departments,id',
        ];
    }
}
