<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Clientes;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class ClientesController extends Controller
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

    public function addCliente(Request $request)
    {
        //definindo as mensagem de erros
        $messages = [
            'name' => 'Campo name inválido.',
            'name.required' => 'O Campo Nome é obrigatório.',
            'data' => 'Campo data inválido.',
            'data.required' => 'O Campo data é obrigatório.',
        ];
         //verificando os parametros enviados
         $validator =  Validator::make($request->all(), [
              'name' => ['required', 'string', 'max:255'],
              'data' => ['required', 'date'],
         ],$messages);

        //verificando se encontra erros nos paramtros enviados
         if ($validator->fails()) {
             return response()->json($validator->messages(), 200);
         }

         //verificando idade
         $idade = $this->calcularIdade($request['data']);
         if($idade < 18){
            return response()->json(['error' => 'Menor de Idade.']);
         }

        //insetindo o produto no banco
        Clientes::create([
            'name' => $request['name'],
            'data' => date_create($request['data']),
        ]);
         
        return response()->json(['message' => 'Cadastro Realizado com sucesso.']);
    }

    public function listCliente(Request $request){
        //fazendo busca no banco
        $cliente = DB::table('clientes')->get();

        //verificando se a busca contem dados
        if(empty(json_decode($cliente))){
            return response()->json(['error' => 'Nenhum resultado encontrado!'], 200);
        }

        return response()->json($cliente, 200);
    }

    public function delCliente(Request $request){

        //definindo as mensagem de erros
        $messages = [
            'id.required' => 'O Campo id é obrigatório.',
        ];
         //verificando os parametros enviados
         $validator =  Validator::make($request->all(), [
              'id' => ['required', 'string'],
         ],$messages);

        //verificando se encontra erros nos paramtros enviados
         if ($validator->fails()) {
             return response()->json($validator->messages(), 200);
         }
         DB::table('clientes')->where('id', $request['id'])->delete();

         return response()->json(['message' => 'Produto deletado com sucesso.']);
    }

    public function updateCliente(Request $request){
        //definindo as mensagem de erros
        $messages = [
            'id' => 'Campo id inválido.',
            'id.required' => 'O Campo id é obrigatório.',
            'name' => 'Campo name inválido.',
            'name.required' => 'O Campo Nome é obrigatório.',
            'data' => 'Campo data inválido.',
            'data.required' => 'O Campo data é obrigatório.',
        ];
         //verificando os parametros enviados
         $validator =  Validator::make($request->all(), [
              'id' => ['required', 'string'],
              'name' => ['required', 'string', 'max:255'],
              'data' => ['required', 'date'],
         ],$messages);

        //verificando se encontra erros nos paramtros enviados
         if ($validator->fails()) {
             return response()->json($validator->messages(), 200);
         }

         //verificando idade
         //verificando idade
         $idade = $this->calcularIdade($request['data']);
         if($idade < 18){
            return response()->json(['error' => 'Menor de Idade.']);
         }

         DB::table('clientes')
              ->where('id', $request['id'])
              ->update(
                  [
                    'name' => $request['name'],
                    'data' => date_create($request['data']),
                  ]
                );

         return response()->json(['message' => 'Produto atualizado com sucesso.']);
    }

    function calcularIdade($data){
        $idade = 0;
        $data_nascimento = date('Y-m-d', strtotime($data));
        $data = explode("-",$data_nascimento);
        $anoNasc    = $data[0];
        $mesNasc    = $data[1];
        $diaNasc    = $data[2];
        
        $anoAtual   = date("Y");
        $mesAtual   = date("m");
        $diaAtual   = date("d");
        
        $idade      = $anoAtual - $anoNasc;
        if ($mesAtual > $mesNasc){
            $idade -= 1;
        } elseif ( ($mesAtual == $mesNasc) && ($diaAtual >= $diaNasc) ){
            $idade -= 1;
        }
        
        return $idade;
    }
}
