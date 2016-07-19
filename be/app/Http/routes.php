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
	/**Post**/
    Route::get('{id}/posts', 'AngularController@posts');
    Route::post('post', 'AngularController@save_post');
    Route::delete('{id}/post', 'AngularController@delete_post');
	/**Post**/

	/**Centros**/
	Route::get('{id}/centros', 'AngularController@centros');
	Route::post('centros', 'AngularController@save_centros');
    Route::delete('{id}/centros', 'AngularController@delete_centros');
    /**Centros**/

});

Route::delete('post/{id}/deleteimage', 'PostController@delete_image');
Route::resource('post', 'PostController');
Route::resource('academic', 'AcademicOfferController');

Route::resource('buscar', 'CentroInformacionController');
Route::get('centro', 'CentroInformacionController@index');
Route::post('centro', 'CentroInformacionController@add');
Route::get('centro/{id}/edit', 'CentroInformacionController@edit');
Route::post('centro/{id}/update', 'CentroInformacionController@update');
Route::delete('centro/{id}/delete', 'CentroInformacionController@delete');
//Route::get('user/{id}/status', 'UserController@status');