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
    Route::apiResource('document-types', 'DocumentTypesController');
    Route::apiResource('publishers', 'PublishersController');
    Route::apiResource('signers', 'SignersController');
    Route::apiResource('titles', 'TitlesController');
    Route::apiResource('users', 'UsersController');
});
