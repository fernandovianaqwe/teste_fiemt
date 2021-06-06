<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProdutosController;

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

//endpint para login
Route::post('login', [AuthController::class , 'login']);
//endpint para cadastro
Route::post('cadastro', [AuthController::class , 'register']);

Route::group(['middleware' => 'jwt', 'prefix' => 'auth'], function ($router) {
    //endpint para logout
    Route::post('logout', [AuthController::class , 'logout']);

    //endpoint para cadastro de produtos
    Route::post('addprodutos', [ProdutosController::class , 'addprodutos']);
    //Listando produtos cadastrados
    Route::get('listprodutos', [ProdutosController::class , 'listprodutos']);
    //deletando produtos
    Route::delete('delprodutos', [ProdutosController::class , 'delprodutos']);
 
});