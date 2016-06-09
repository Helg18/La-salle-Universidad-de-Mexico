<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AcademicOffer extends Model
{
    protected $appends = [

        'children'
    ];

    public function getChildrenAttribute(){
        return $this->children();
    }

    public static function sliders(){
        return self::where('parent_id',null)->get();
    }
    //
    private function path_image(){
        return base_path() . '/public/images/academic/';
    }

    public function upload($request){
        if($request->file('picture')) {

            $old = $this->path_image() . $this->picture;
            if(is_file($old)){
                unlink($old);
            }

            $imageName = time() . '.' .
                $request->file('picture')->getClientOriginalExtension();

            $request->file('picture')->move(
                $this->path_image(), $imageName
            );

            $this->picture = $imageName;
        }
    }

    public function delete_image(){
        $old = $this->path_image() . $this->picture;

        if(is_file($old)){
            unlink($old);
        }
        $this->picture = null;
        $this->save();
    }

    function picture_html($width='100%'){
        if(!$this->picture) return "";

        return "<center><img src=\"".  asset('images/academic/'.$this->picture) ."\" width=\"{$width}\"></center>";
    }

    public function children(){
        return self::where('parent_id',$this->id)->get();
    }

    public function parent(){
        return self::where('id',$this->parent_id)->first();
    }

    public function parent_info(){

        $tmp = [];
        if($p =$this->parent()){

            $tmp[] = $p->title;

            if($p2 = $p->parent()){
                $tmp[] = $p2->title;

                if($p3 = $p2->parent()){
                    $tmp[] = $p3->title;

                }
            }
        }


        return implode(", ",$tmp);
    }

    /*public static function to_json(){
        $tmp = [];

        foreach($this->sliders() as $x){

        }
    }*/

}
