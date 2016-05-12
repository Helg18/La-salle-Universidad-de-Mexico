<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{

    protected $appends = [
        'paragraph_1_html',
        'paragraph_2_html',
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
}
