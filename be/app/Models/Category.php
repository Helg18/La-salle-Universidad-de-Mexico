<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    
    public function posts(){
        return $this->belongsToMany('App\Models\Post');
    }

    public static function allForJson($lang){

        $data = [];

        foreach(self::all() as $c){

             if($c->language==$lang){
                $data[] = [
                    'id'        =>  $c->id,
                    'name'      =>  $c->name,
                    'posts'     =>  $c->posts
                ];
             }
        }


        return $data;

    }

    
    public static function ordered(){
        return self::orderBy('order','asc')->get();
    }
}
