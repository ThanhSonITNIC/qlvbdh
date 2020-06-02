<?php

namespace App\Repositories\Eloquents;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repositories\DocumentRepository;
use App\Entities\Document;

/**
 * Class DocumentRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquents;
 */
class DocumentRepositoryEloquent extends BaseRepository implements DocumentRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'id' => '=',
        'abstract' => 'like',
        'content' => 'like',
        'book_id' => '=',
        'type_id' => '=',
        'signer_id' => '=',
        'creator_id' => '=',
        'published_at' => 'like',
        'arrival_at' => 'like',
        'publisher_id' => 'like',
        'due_at' => '=',
        'link_id' => '=',

        'attachments.id' => '=',
        'attachments.document_id' => '=',
        'attachments.name' => 'like',
        'attachments.ext' => '=',
        'attachments.size' => '=',
        'attachments.path' => 'like',

        'receivers.id' => '=',
        'receivers.user_id' => '=',
        'receivers.document_id' => '=',
        'receivers.view_only' => '=',
        'receivers.seen' => '=',
        'receivers.done' => '=',
        'receivers.role_id' => '=',
        'receivers.department_id' => '=',

        'type.id' => '=',
        'type.name' => 'like',

        'book.id' => '=',
        'book.name' => 'like',

        'publisher.id' => '=',
        'publisher.name' => 'like',

        'signer.id' => '=',
        'signer.name' => 'like',
        'signer.description' => 'like',

        'creator.id' => '=',
        'creator.name' => 'like',
        'creator.email' => '=',
        'creator.tel' => '=',
        'creator.birthday' => '=',
        'creator.department_id' => '=',
        'creator.title_id' => '=',
        'creator.active' => '=',

        'link.id' => '=',
        'link.abstract' => 'like',
        'link.content' => 'like',
        'link.book_id' => '=',
        'link.type_id' => '=',
        'link.signer_id' => '=',
        'link.creator_id' => '=',
        'link.published_at' => 'like',
        'link.arrival_at' => 'like',
        'link.publisher_id' => 'like',
        'link.attachments' => 'like',
        'link.due_at' => '=',
        'link.link_id' => '=',
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Document::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(\App\Criteria\DocumentCriteria::class);
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
