<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterCategoriesCentroTitleInformacionTable extends Migration
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
             $table->string('title')->after('id')->default('Title');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       $table->dropColumn('title');
    }
}
