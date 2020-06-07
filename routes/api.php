<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->namespace('Api')->group(function(){
    Route::apiResource('books', 'BooksController');
    Route::apiResource('departments', 'DepartmentsController');
    Route::apiResource('documents', 'DocumentsController');
    Route::apiResource('attachments', 'AttachmentsController');
    Route::apiResource('document-types', 'DocumentTypesController');
    Route::apiResource('publishers', 'PublishersController');
    Route::apiResource('signers', 'SignersController');
    Route::apiResource('titles', 'TitlesController');
    Route::apiResource('users', 'UsersController');
    Route::apiResource('roles', 'RolesController');
    Route::apiResource('permissions', 'PermissionsController');

    Route::apiResource('document-receivers', 'DocumentReceiversController');
    Route::post('document-receivers-m', 'DocumentReceiversController@stores');
    Route::delete('document-receivers-m', 'DocumentReceiversController@destroys');
    
    Route::get('download/attachments/{attachment}', 'AttachmentsController@download');

    Route::post('users/{user}/roles/{role}', 'UsersController@giveRole');
    Route::delete('users/{user}/roles/{role}', 'UsersController@revokeRole');
    Route::post('users/{user}/permissions/{permission}', 'UsersController@givePermission');
    Route::delete('users/{user}/permissions/{permission}', 'UsersController@revokePermission');
    
    Route::prefix('me')->group(function(){
        Route::get('', 'MeController@show');
        Route::put('', 'MeController@update');
        
        Route::prefix('notifications')->group(function(){
            Route::get('all', 'NotificationsController@index');
            Route::get('read', 'NotificationsController@read');
            Route::get('unread', 'NotificationsController@unread');
            Route::put('read-all', 'NotificationsController@markAllAsRead');
            Route::put('read/{notification}', 'NotificationsController@markAsRead');
            Route::put('unread/{notification}', 'NotificationsController@markAsUnread');
            Route::delete('{notification}', 'NotificationsController@destroy');
        });
    });
});

Route::post('/sanctum/token', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
        'device_name' => 'required'
    ]);

    $user = \App\Entities\User::where('email', $request->email)->first();

    if (! $user || ! \Illuminate\Support\Facades\Hash::check($request->password, $user->password)) {
        throw \Illuminate\Validation\ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }

    return $user->createToken($request->device_name)->plainTextToken;
});