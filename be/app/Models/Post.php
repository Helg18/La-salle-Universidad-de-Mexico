<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{


    protected $appends = [
        'paragraph_1_html',
        'paragraph_2_html',
        'video_iframe',
        'picture_html'
    ];
    //
    public function categories(){
        return $this->belongsToMany('App\Models\Category');
    }

    public function getParagraph1HtmlAttribute(){
        return nl2br($this->paragraph_1);
    }

    public function getParagraph2HtmlAttribute(){
        return nl2br($this->paragraph_2);
    }

    private function path_image(){
        return base_path() . '/public/images/posts/';
    }


    static function cleanYoutubeCode($txt){
        //https://youtu.be/ckdHyuPZY8s
        //https://www.youtube.com/watch?v=ckdHyuPZY8s

        $result = str_replace("https://youtu.be/","",$txt);
        $result = str_replace("https://www.youtube.com/watch?v=","",$txt);

        return $result;
    }

    public function getVideoIframeAttribute(){
        return $this->video_iframe();
    }

    public function video_iframe($width='960', $height=557){

        if(!$this->video) return "";

        return "<center><iframe width=\"{$width}\" height=\"{$height}\" src=\"https://www.youtube.com/embed/{$this->video}\" frameborder=\"0\" allowfullscreen></iframe></center>";

    }

    public function getPictureHtmlAttribute(){
        return $this->picture_html();
    }


    function picture_html($width='100%'){
        if(!$this->picture) return "";

        return "<center><img src=\"".  asset('images/posts/'.$this->picture) ."\" width=\"{$width}\"></center>";
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
}
