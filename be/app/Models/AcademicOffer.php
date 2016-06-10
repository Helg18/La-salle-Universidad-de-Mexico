<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AcademicOffer extends Model
{
    protected $appends = [

        'children',
        'picture_url',
        'picture_url_2',
        'picture_url_3',
        'paragraph_1_html',
        'paragraph_2_html',
    ];

    public function getChildrenAttribute(){
        return $this->children();
    }

    public function getParagraph1HtmlAttribute(){
        return nl2br($this->paragraph_1);
    }

    public function getParagraph2HtmlAttribute(){
        return nl2br($this->paragraph_2);
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

        if($request->file('picture_2')) {

            $old = $this->path_image() . $this->picture_2;
            if(is_file($old)){
                unlink($old);
            }

            $imageName = time() . '.' .
                $request->file('picture_2')->getClientOriginalExtension();

            $request->file('picture_2')->move(
                $this->path_image(), $imageName
            );

            $this->picture_2 = $imageName;
        }

        if($request->file('picture_3')) {

            $old = $this->path_image() . $this->picture_3;
            if(is_file($old)){
                unlink($old);
            }

            $imageName = time() . '.' .
                $request->file('picture_3')->getClientOriginalExtension();

            $request->file('picture_3')->move(
                $this->path_image(), $imageName
            );

            $this->picture_3 = $imageName;
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

    function picture_html2($width='100%'){
        if(!$this->picture_2) return "";

        return "<center><img src=\"".  asset('images/academic/'.$this->picture_2) ."\" width=\"{$width}\"></center>";
    }

    function picture_html3($width='100%'){
        if(!$this->picture_3) return "";

        return "<center><img src=\"".  asset('images/academic/'.$this->picture_3) ."\" width=\"{$width}\"></center>";
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


    public function getPictureUrlAttribute(){
        if(!$this->picture) return "";
        return asset('images/academic/' . $this->picture);
    }

    public function getPictureUrl2Attribute(){
        if(!$this->picture_2) return "";
        return asset('images/academic/' . $this->picture_2);
    }

    public function getPictureUrl3Attribute(){
        if(!$this->picture_3) return "";
        return asset('images/academic/' . $this->picture_3);
    }

}
