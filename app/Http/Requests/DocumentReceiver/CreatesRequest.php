<?php

namespace App\Http\Requests\DocumentReceiver;

use Illuminate\Foundation\Http\FormRequest;
use App\Entities\Document;

class CreatesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Document::find($this->document_id)->creator_id == $this->user()->id;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'document_id' => 'required|exists:documents,id',
            'department_id' => 'required|exists:departments,id',
        ];
    }
}
