<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateAttachmentsTable.
 */
class CreateAttachmentsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('attachments', function(Blueprint $table) {
            $table->increments('id');
			$table->string('document_id', 30);
			$table->string('name');
			$table->string('extension');
			$table->decimal('size', 5, 2);
			$table->text('path')->unique();
			$table->timestamps();
			
			$table->foreign('document_id')
				->references('id')
				->on('documents')
				->onUpdate('cascade')
				->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('attachments');
	}
}
