<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateCategoriaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categoria', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->timestamps();
        });

        DB::table('categoria')->insert(
            array(
                'name' => 'Categoria 01'
            )
        );
        DB::table('categoria')->insert(
            array(
                'name' => 'Categoria 02'
            )
        );
        DB::table('categoria')->insert(
            array(
                'name' => 'Categoria 03'
            )
        );
        DB::table('categoria')->insert(
            array(
                'name' => 'Categoria 04'
            )
        );
        DB::table('categoria')->insert(
            array(
                'name' => 'Categoria 05'
            )
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categoria');
    }
}
