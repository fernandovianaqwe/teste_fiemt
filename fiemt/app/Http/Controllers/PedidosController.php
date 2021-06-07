<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pedidos;
use App\Models\PedidosProdutos;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class PedidosController extends Controller
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

    public function addPedido(Request $request)
    {
        //definindo as mensagem de erros
        $messages = [
            'cliente_id' => 'Campo cliente_id inválido.',
            'cliente_id.required' => 'O Campo cliente_id é obrigatório.',
            'produto_id' => 'Campo produto_id inválido.',
            'produto_id.required' => 'O Campo produto_id é obrigatório.',
            'valortotal' => 'Campo valortotal inválido.',
            'valortotal.required' => 'O Campo valortotal é obrigatório.',
        ];
         //verificando os parametros enviados
         $validator =  Validator::make($request->all(), [
              'cliente_id' => ['required', 'integer'],
              'produto_id' => ['required', 'integer'],
              'valortotal' => ['required', 'numeric'],
         ],$messages);

        //verificando se encontra erros nos paramtros enviados
         if ($validator->fails()) {
             return response()->json($validator->messages(), 200);
         }
        
        //validando pedidos
        $produtos = $request['produtos'];
        foreach ($produtos as $produto) {
            if(empty($produto['name']) || empty($produto['quantidade']) || empty($produto['valor'])){
                return response()->json(['error' => 'Produto com campo faltando!'], 200); 
            }
        }
        
        //insetindo o produto no banco
        $pedido_id = Pedidos::create([
            'cliente_id' => $request['cliente_id'],
            'produto_id' => $request['produto_id'],
            'valortotal' => $request['valortotal'],
        ])->id;

        var_dump($pedido_id);
         //insetindo o produto no banco
         foreach ($produtos as $produto) {
             PedidosProdutos::create([
                 'pedido_id' => $pedido_id,
                 'name' => $produto['name'],
                 'quantidade' => $produto['quantidade'],
                 'valor' => $produto['valor'],
             ]);
         }

        return response()->json(['message' => 'Cadastro Realizado com sucesso.']);
    }

    public function listPedido(Request $request){
        //fazendo busca no banco
        $pedido = DB::select("
            SELECT 
                p.id as id_pedido,
                c.id as id_cliente, 
                po.name as nome_produto, 
                pp.quantidade as quantidade, 
                po.valor as valor, 
                (pp.quantidade * po.valor) as valor_total 
            FROM pedidos_produtos pp 
            inner join pedidos p on pp.pedido_id = p.id 
            inner join produtos po on p.produto_id = po.id 
            inner join clientes c on c.id = p.cliente_id
        ");

        //verificando se a busca contem dados
        if(empty($pedido)){
            return response()->json(['error' => 'Nenhum resultado encontrado!'], 200);
        }

        return response()->json($pedido, 200);
    }

    public function delPedido(Request $request){

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
         DB::table('pedidos_produtos')->where('pedido_id', $request['id'])->delete();
         DB::table('pedidos')->where('id', $request['id'])->delete();

         return response()->json(['message' => 'Pedido deletado com sucesso.']);
    }
}
