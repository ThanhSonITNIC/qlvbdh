<?php

namespace App\Http\Requests\DocumentOrganize;

use Illuminate\Foundation\Http\FormRequest;
use App\Entities\DocumentOrganize;

class DestroyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return DocumentOrganize::find($this->document_organize)->document->creator_id == $this->user()->id;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
        ];
    }
}
