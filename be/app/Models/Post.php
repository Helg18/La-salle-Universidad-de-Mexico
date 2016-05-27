<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\CalendarLabel;
use App\Models\Category;
use DB;

class Post extends Model
{


    protected $appends = [
        'paragraph_1_html',
        'paragraph_2_html',
        'video_iframe',
        'picture_html',
        'picture_url',
        'children',
        'custom_date_split'
    ];
    //
    public function categories(){
        return $this->belongsToMany('App\Models\Category');
    }

    public function labels(){
        return $this->belongsToMany('App\Models\CalendarLabel');
    }

    public function posts(){
        //return $this->hasMany('App\Models\Post','id','parent_id');
        return self::where('parent_id',$this->id)->get();
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

    public function getPictureUrlAttribute(){
        if(!$this->picture) return "";
        return asset('images/posts/' . $this->picture);
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


    public function getChildrenAttribute(){
        return $this->posts();
    }

    public function calendarLabels($request){

        if(!$request->labels || !$this->categories()->find(4)) return;

        $ids = [];

        foreach($request->labels as $l){
            if(!CalendarLabel::find($l)){
                $temp = CalendarLabel::create(['name'=>$l]);
                $ids[] = $temp->id;
            }else{
                $ids[] = $l;
            }
        }

        $this->labels()->sync($ids);
    }

    public static function forCalendar($request){
        $tmp = Category::find(4)
            ->posts()
            ->whereRaw(DB::Raw("YEAR(custom_date) = '{$request->year}' AND MONTH(custom_date)='{$request->month}' "))
            ;

        if(CalendarLabel::find($request->label_id)){
            $tmp->whereRaw(DB::Raw("posts.id IN (SELECT post_id FROM calendar_label_post  WHERE calendar_label_id={$request->label_id}  )"));
        }

        return $tmp->get();
    }



    public function getCustomDateSplitAttribute(){
        if(!$this->custom_date) return [];
        $months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        $tmp = explode('-',$this->custom_date);
        $time = strtotime($this->custom_date);
        $day = date('d',$time);
        return [
            'month'=>$months[$tmp[1] -1],
            'year'=>date('Y',$time),
            'day_1'=>$day[0],
            'day_2'=>$day[1],
        ];


    }
}
