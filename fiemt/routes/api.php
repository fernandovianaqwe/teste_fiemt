<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProdutosController;
use App\Http\Controllers\ClientesController;
use App\Http\Controllers\PedidosController;

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
    Route::post('addprodutos', [ProdutosController::class , 'addProdutos']);
    //Listando produtos cadastrados
    Route::get('listprodutos', [ProdutosController::class , 'listProdutos']);
    //deletando produtos
    Route::delete('delprodutos', [ProdutosController::class , 'delProdutos']);
    //update produtos
    Route::put('updateprodutos', [ProdutosController::class , 'updateProdutos']);

    //endpoint para cadastro de Cliente
    Route::post('addcliente', [ClientesController::class , 'addCliente']);
    //Listando Clientes cadastrados
    Route::get('listcliente', [ClientesController::class , 'listCliente']);
    //deletando Cliente
    Route::delete('delcliente', [ClientesController::class , 'delCliente']);
    //update Cliente
    Route::put('updatecliente', [ClientesController::class , 'updateCliente']);
    
    //endpoint para cadastro de Pedidos
    Route::post('addpedido', [PedidosController::class , 'addPedido']);
    //Listando Pedidos cadastrados
    Route::get('listpedido', [PedidosController::class , 'listPedido']);
    //deletando Pedidos
    Route::delete('delpedido', [PedidosController::class , 'delPedido']);
 
});