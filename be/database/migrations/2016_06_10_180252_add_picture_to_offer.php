<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddPictureToOffer extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('academic_offers', function (Blueprint $table) {
            //
            $table->string('picture_3')->nullable()->after('picture');
            $table->string('picture_2')->nullable()->after('picture');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('academic_offers', function (Blueprint $table) {
            //
            $table->dropColumn('picture_3');
            $table->dropColumn('picture_2');
        });
    }
}
