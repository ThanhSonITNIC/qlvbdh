<?php

namespace App\Repositories\Eloquents;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repositories\OrganizeRepository;
use App\Entities\Organize;

/**
 * Class OrganizeRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquents;
 */
class OrganizeRepositoryEloquent extends BaseRepository implements OrganizeRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'id' => '=',
        'name' => 'like',

        'publishedDocuments.id' => '=',
        'publishedDocuments.symbol' => 'like',
        'publishedDocuments.abstract' => 'like',
        'publishedDocuments.content' => 'like',
        'publishedDocuments.book_id' => '=',
        'publishedDocuments.type_id' => '=',
        'publishedDocuments.signer_id' => '=',
        'publishedDocuments.creator_id' => '=',
        'publishedDocuments.published_at' => 'like',
        'publishedDocuments.sign_at' => 'like',
        'publishedDocuments.publisher_id' => 'like',
        'publishedDocuments.due_at' => '=',
        'publishedDocuments.link_id' => '=',

        'receivedDocuments.id' => '=',
        'receivedDocuments.symbol' => 'like',
        'receivedDocuments.abstract' => 'like',
        'receivedDocuments.content' => 'like',
        'receivedDocuments.book_id' => '=',
        'receivedDocuments.type_id' => '=',
        'receivedDocuments.signer_id' => '=',
        'receivedDocuments.creator_id' => '=',
        'receivedDocuments.published_at' => 'like',
        'receivedDocuments.sign_at' => 'like',
        'receivedDocuments.publisher_id' => 'like',
        'receivedDocuments.due_at' => '=',
        'receivedDocuments.link_id' => '=',
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Organize::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}