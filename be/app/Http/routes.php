<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::auth();


Route::get('/','HomeController@index');

Route::get('/home', 'HomeController@index');

Route::controllers([
    'api/v1/frontend'           =>  'Api\V1FrontendController',
]);

Route::group(['prefix' => 'config'], function () {
    Route::resource('user', 'UserController');
    Route::get('user/{id}/status', 'UserController@status');
});

Route::group(['prefix' => 'angular'], function () {
    Route::get('{id}/posts', 'AngularController@posts');
    Route::post('post', 'AngularController@save_post');
    Route::delete('{id}/post', 'AngularController@delete_post');
});

Route::delete('post/{id}/deleteimage', 'PostController@delete_image');
Route::resource('post', 'PostController');
Route::resource('academic', 'AcademicOfferController');
//Route::get('user/{id}/status', 'UserController@status');