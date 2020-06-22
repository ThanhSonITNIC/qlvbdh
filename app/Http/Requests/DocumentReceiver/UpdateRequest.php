<?php

namespace App\Http\Requests\DocumentReceiver;

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
        return $this->user()->hasAnyPermission([
            'Quản lý văn bản đến', 
            'Quản lý văn bản đi', 
            'Quản lý văn bản nội bộ',
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id' => 'nullable|exists:users,id',
            'document_id' => 'nullable|exists:documents,id',
            'seen' => 'nullable|boolean',
        ];
    }
}
