<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateDocumentsTable.
 */
class CreateDocumentsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('documents', function(Blueprint $table) {
            $table->string('id', 30)->primary();
			$table->text('abstract')->nullable();
			$table->text('content')->nullable();
			$table->unsignedInteger('book_id');
			$table->string('type_id', 2);
			$table->unsignedInteger('signer_id');
			$table->unsignedInteger('creator_id');
			$table->date('published_at');
			$table->date('arrival_at')->nullable();
			$table->unsignedInteger('publisher_id');
			$table->json('attachments')->nullable();
			$table->date('due_at')->nullable();
			$table->string('link_id', 30)->nullable();
			$table->timestamps();
			
			$table->foreign('book_id')
				->references('id')
				->on('books')
				->onUpdate('cascade');
			$table->foreign('type_id')
				->references('id')
				->on('document_types')
				->onUpdate('cascade');
			$table->foreign('signer_id')
				->references('id')
				->on('users')
				->onUpdate('cascade');
			$table->foreign('creator_id')
				->references('id')
				->on('users')
				->onUpdate('cascade');
			$table->foreign('publisher_id')
				->references('id')
				->on('publishers')
				->onUpdate('cascade');
		});

		Schema::table('documents', function (Blueprint $table) {
			$table->foreign('link_id')
				->references('id')
				->on('documents')
				->onUpdate('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('documents');
	}
}
