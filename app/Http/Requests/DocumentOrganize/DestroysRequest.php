<?php

namespace App\Http\Requests\DocumentOrganize;

use Illuminate\Foundation\Http\FormRequest;
use App\Entities\DocumentOrganize;

class DestroysRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return DocumentOrganize::where('organize_id', $this->organize_id)
            ->where('document_id', $this->document_id)
            ->first()->document->creator_id == $this->user()->id;
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
