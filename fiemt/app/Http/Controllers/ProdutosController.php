<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produtos;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class ProdutosController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function __construct()
    {
        $this->middleware('jwt', ['except' => ['login','register']]);
    }

    public function addprodutos(Request $request)
    {
        //definindo as mensagem de erros
        $messages = [
            'name' => 'Campo name inválido.',
            'name.required' => 'O Campo Nome é obrigatório.',
            'categoria' => 'Campo categoria inválido.',
            'categoria.required' => 'O Campo categoria é obrigatório.',
            'descricao' => 'Campo descricao inválido.',
            'descricao.required' => 'O Campo descricao é obrigatório.',
            'valor' => 'Campo valor inválido.',
            'valor.required' => 'O Campo valor é obrigatório.',
        ];
         //verificando os parametros enviados
         $validator =  Validator::make($request->all(), [
              'name' => ['required', 'string', 'max:255'],
              'categoria' => ['required', 'integer'],
              'descricao' => ['required', 'string'],
              'valor' => ['required', 'numeric'],
         ],$messages);

        //verificando se encontra erros nos paramtros enviados
         if ($validator->fails()) {
             return response()->json($validator->messages(), 200);
         }

        //insetindo o produto no banco
        Produtos::create([
            'name' => $request['name'],
            'categoria_id' => $request['categoria'],
            'descricao' => $request['descricao'],
            'valor' => $request['valor']
        ]);
         
        return response()->json(['message' => 'Cadastro Realizado com sucesso.']);
    }

    public function listprodutos(Request $request){
        //fazendo busca no banco
        $produtos = DB::table('produtos')->get();

        //verificando se a busca contem dados
        if(empty(json_decode($produtos))){
            return response()->json(['error' => 'Nenhum resultado encontrado!'], 200);
        }

        return response()->json($produtos, 200);
    }
}
