<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateDocumentReceiversTable.
 */
class CreateDocumentReceiversTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('document_receivers', function(Blueprint $table) {
            $table->increments('id');
			$table->unsignedInteger('user_id');
			$table->string('document_id', 30);
			$table->boolean('view_only')->default(true);
			$table->boolean('seen')->default(false);
			$table->boolean('done')->nullable();
			$table->unsignedInteger('group_id')->nullable();
			$table->string('department_id', 30)->nullable();
            $table->timestamps();
		
			$table->foreign('user_id')
				->references('id')
				->on('users')
				->onUpdate('cascade');
			$table->foreign('document_id')
				->references('id')
				->on('documents')
				->onUpdate('cascade')
				->onDelete('cascade');
			$table->foreign('group_id')
				->references('id')
				->on('groups')
				->onUpdate('cascade');
			$table->foreign('department_id')
				->references('id')
				->on('departments')
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
		Schema::drop('document_receivers');
	}
}
