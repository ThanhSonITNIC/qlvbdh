<?php

namespace App\Http\Requests\Document;

use Illuminate\Foundation\Http\FormRequest;
use App\Entities\Document;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Document::find($this->document)->creator_id == $this->user()->id;
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
            'due_at' => 'nullable|date',
            'link_id' => 'nullable|exists:documents,id',
        ];
    }

    /**
     * Get all of the input and files for the request.
     *
     * @param  array|mixed|null  $keys
     * @return array
     */
    public function all($keys = null)
    {
        $data = parent::all($keys);
        $data['creator_id'] = $this->user()->id;
        return $data;
    }
}
