<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CalendarLabel extends Model
{
    //
    // protected $fillable = ['name'];


    public static function allForJsonCategorie($lang){

        $data = [];

        foreach(self::all() as $c){

             if($c->language==$lang){
                $data[] = [
                    'id'      =>  $c->id,
                    'name'      =>  $c->name,
                ];
             }
        }


        return $data;

    }


}
