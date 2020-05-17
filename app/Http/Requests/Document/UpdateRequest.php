<?php

namespace App\Http\Requests\Document;

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
            'id' => 'nullable|string|alpha_dash|max:30|unique:documents,id,'.$this->document,
            'abstract' => 'nullable|string',
            'content' => 'nullable|string',
            'book_id' => 'nullable|exists:books,id',
            'type_id' => 'nullable|exists:document_types,id',
            'signer_id' => 'nullable|exists:signers,id',
            'creator_id' => 'nullable|exists:users,id',
            'published_at' => 'nullable|date',
            'arrival_at' => 'nullable|date',
            'publisher_id' => 'nullable|exists:publishers,id',
            'attachments' => 'nullable|file',
            'due_at' => 'nullable|date',
            'link_id' => 'nullable|exists:documents,id',
        ];
    }
}
