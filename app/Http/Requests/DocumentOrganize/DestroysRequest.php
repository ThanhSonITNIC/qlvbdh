<?php

namespace App\Http\Requests\DocumentOrganize;

use Illuminate\Foundation\Http\FormRequest;

class DestroysRequest extends FormRequest
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
            'organize_id' => 'required|exists:organizes,id',
            'document_id' => 'required|exists:documents,id',
        ];
    }
}
