<?php

namespace App\Http\Requests\Document;

use Illuminate\Foundation\Http\FormRequest;
use App\Entities\DocumentType;
use Illuminate\Support\Str;

class CreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $typeName = Str::lower(DocumentType::find($this->type_id)->name);
        return $this->user()->hasPermissionTo('Quản lý '. $typeName);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => 'required|string|alpha_dash|max:30|unique:documents,id',
            'abstract' => 'nullable|string',
            'content' => 'nullable|string',
            'book_id' => 'required|exists:books,id',
            'type_id' => 'required|exists:document_types,id',
            'signer_id' => 'required|exists:signers,id',
            'creator_id' => 'required|exists:users,id',
            'published_at' => 'required|date',
            'arrival_at' => 'nullable|date',
            'publisher_id' => 'required|exists:publishers,id',
            'attachments' => 'nullable|file',
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
