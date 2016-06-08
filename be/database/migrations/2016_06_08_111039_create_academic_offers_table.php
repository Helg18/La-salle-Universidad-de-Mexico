<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAcademicOffersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('academic_offers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('type');
            $table->integer('parent_id')->unsigned()->nullable();
            $table->foreign('parent_id')->references('id')->on('academic_offers')->onDelete('cascade');
            $table->string('title');
            $table->string('subtitle')->nullable();
            $table->string('picture')->nullable();
            $table->text('paragraph_1')->nullable();
            $table->text('paragraph_2')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('academic_offers');
    }
}
