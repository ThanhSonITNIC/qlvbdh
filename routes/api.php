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
    Route::apiResource('document-receivers', 'DocumentReceiversController');
    Route::apiResource('documents', 'DocumentsController');
    Route::apiResource('attachments', 'AttachmentsController');
    Route::apiResource('document-types', 'DocumentTypesController');
    Route::apiResource('publishers', 'PublishersController');
    Route::apiResource('signers', 'SignersController');
    Route::apiResource('titles', 'TitlesController');
    Route::apiResource('users', 'UsersController');

    Route::get('me', 'MeController@show');
    Route::put('me', 'MeController@update');
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