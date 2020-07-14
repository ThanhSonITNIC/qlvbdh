<?php

namespace App\Http\Requests\DocumentReceiver;

use Illuminate\Foundation\Http\FormRequest;
use App\Entities\DocumentReceiver;

class DestroyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return DocumentReceiver::find($this->document_receiver)->document->creator_id == $this->user()->id;
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
