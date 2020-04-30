<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateGroupUsersTable.
 */
class CreateGroupUsersTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('group_users', function(Blueprint $table) {
            $table->increments('id');
			$table->unsignedInteger('user_id');
			$table->unsignedInteger('group_id');
			$table->timestamps();
			
			$table->foreign('user_id')
				->references('id')
				->on('users')
				->onUpdate('cascade')
				->onDelete('cascade');
			$table->foreign('group_id')
				->references('id')
				->on('groups')
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
		Schema::drop('group_users');
	}
}
