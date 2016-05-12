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