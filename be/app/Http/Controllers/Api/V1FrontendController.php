<?php

namespace App\Http\Controllers\Api;

use App\Models\AcademicOffer;
use App\Util;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Models\Category;
use App\Models\CalendarLabel;
use App\Models\Post;

class V1FrontendController extends Controller
{

    public function __construct()
    {
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Credentials: true');
    }

    public function postPosts(Request $request){

        $post = Post::find($request->id);        

        
        if (count($post)) {

            $post->categories()->first(); 
            
            $children = $post->posts($request->id);

            return response()->json(
                ['error'=>false,'notice'=>$post,'rows'=>count($post),'children'=>$children]
            );
        } else{
            return response()->json(
                ['error'=>false,'rows'=>0,'children'=>0]
            );
        }
        
    }


    public function getInitialData(){

        $data = Category::allForJson(1);
        $labels = CalendarLabel::allForJsonCategorie(1);
        $calendar = Category::find(4)->posts()->where('language',2)->limit(4)->orderBy('custom_date','desc')->get();
        $calendar_important = Category::find(4)->posts()->where('is_important',true)->where('language',1)->limit(4)->orderBy('custom_date','desc')->get();
        $blog = Category::find(5)->posts()->where('language',1)->limit(9)->orderBy('created_at','desc')->get();
        $academic = AcademicOffer::sliders(1);
        
        return response()->json(
            ['error'=>false,'categories'=>$data,'calendar_labels'=>$labels,'calendar'=>$calendar,'calendar_important'=>$calendar_important, 'blog'=>$blog, 'academic_offer'=>$academic]
        );

        
    }

    public function getInitialDataE(){

        $data = Category::allForJson(2);
        $labels = CalendarLabel::allForJsonCategorie(2);
        $calendar = Category::find(4)->posts()->where('language',2)->limit(4)->orderBy('custom_date','desc')->get();
        $calendar_important = Category::find(4)->posts()->where('is_important',true)->where('language',2)->limit(4)->orderBy('custom_date','desc')->get();
        $blog = Category::find(5)->posts()->where('language',2)->limit(9)->orderBy('created_at','desc')->get();
        $academic = AcademicOffer::sliders(2);
        return response()->json(
            ['error'=>false,'categories'=>$data,'calendar_labels'=>$labels,'calendar'=>$calendar,'calendar_important'=>$calendar_important, 'blog'=>$blog, 'academic_offer'=>$academic]
        );
        
    }


    public function postCalendarEvents(Request $request){

        return response()->json(['error'=>false,'posts'=>Post::forCalendar($request)]);

    }
}
