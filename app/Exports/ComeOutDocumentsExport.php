<?php

namespace App\Exports;

use PhpOffice\PhpSpreadsheet\Shared\Date;

class ComeOutDocumentsExport extends BaseDocumentsExport
{
    public function headings(): array
    {
        return [
            'Ngày ban hành',
            'Ký hiệu',
            'Loại',
            'Trích yếu',
            'Nơi nhận',
        ];
    }

    /**
     * @param mixed $document
     *
     * @return array
     */
    public function map($document): array
    {
        return [
            Date::dateTimeToExcel($document->effective_at),
            $document->symbol,
            $document->type->name,
            $document->abstract,
            implode(', ', ($document->organizes->map(function($organize){
                return $organize->name;
            }))->toArray()),
        ];
    }

}
