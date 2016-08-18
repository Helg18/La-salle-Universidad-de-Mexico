<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterCategoriesCentroParrafo1InformacionTable extends Migration
{
    /**
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         Schema::table('categories_centro_informacion', function (Blueprint $table) {
             $table->string('paragraph_1')->after('title')->default('Detalles de Centro de Informacion');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       $table->dropColumn('paragraph_1');
    }
}
