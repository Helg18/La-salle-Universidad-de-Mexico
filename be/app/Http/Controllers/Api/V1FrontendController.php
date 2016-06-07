<?php

namespace App\Http\Controllers\Api;

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

        $post->categories()->first();

        return response()->json(
            ['error'=>false,'notice'=>$post]
        );


    }

    public function getInitialData(){

        $data = Category::allForJson();
        $labels = CalendarLabel::all();
        $calendar = Category::find(4)->posts()->limit(4)->orderBy('custom_date','desc')->get();
        $calendar_important = Category::find(4)->posts()->where('is_important',true)->limit(4)->orderBy('custom_date','desc')->get();
        $blog = Category::find(5)->posts()->limit(9)->orderBy('created_at','desc')->get();

        /*$data = json_decode(json_encode($data),true, 512);

        foreach($data as $k=>$v){

            foreach($v['posts'] as $k2=>$v2):
                switch($v['id']):

                    case 1:
                    case 9:

                        unset($data[$k]['posts'][$k2]['subtitle']);
                        unset($data[$k]['posts'][$k2]['paragraph_1']);
                        unset($data[$k]['posts'][$k2]['paragraph_2']);
                        unset($data[$k]['posts'][$k2]['paragraph_3']);
                        unset($data[$k]['posts'][$k2]['custom_date']);
                        unset($data[$k]['posts'][$k2]['is_important']);
                        unset($data[$k]['posts'][$k2]['created_at']);
                        unset($data[$k]['posts'][$k2]['updated_at']);
                        unset($data[$k]['posts'][$k2]['paragraph_1_html']);
                        unset($data[$k]['posts'][$k2]['paragraph_2_html']);
                        unset($data[$k]['posts'][$k2]['custom_date_split']);
                        unset($data[$k]['posts'][$k2]['paragraph_1_small_html']);

                        foreach($data[$k]['posts'][$k2]['children'] as $k3=>$v3){
                            unset($data[$k]['posts'][$k2]['children'][$k3]['subtitle']);
                            unset($data[$k]['posts'][$k2]['children'][$k3]['paragraph_2']);
                            unset($data[$k]['posts'][$k2]['children'][$k3]['paragraph_3']);
                            unset($data[$k]['posts'][$k2]['children'][$k3]['custom_date']);
                            unset($data[$k]['posts'][$k2]['children'][$k3]['is_important']);
                            unset($data[$k]['posts'][$k2]['children'][$k3]['created_at']);
                            unset($data[$k]['posts'][$k2]['children'][$k3]['updated_at']);
                            unset($data[$k]['posts'][$k2]['children'][$k3]['paragraph_1_html']);
                            unset($data[$k]['posts'][$k2]['children'][$k3]['paragraph_2_html']);
                            unset($data[$k]['posts'][$k2]['children'][$k3]['custom_date_split']);
                            unset($data[$k]['posts'][$k2]['children'][$k3]['paragraph_1_small_html']);
                            unset($data[$k]['posts'][$k2]['children'][$k3]['picture']);
                            unset($data[$k]['posts'][$k2]['children'][$k3]['video']);
                            unset($data[$k]['posts'][$k2]['children'][$k3]['parent_id']);
                            unset($data[$k]['posts'][$k2]['children'][$k3]['video_iframe']);
                            unset($data[$k]['posts'][$k2]['children'][$k3]['picture_html']);
                            unset($data[$k]['posts'][$k2]['children'][$k3]['picture_url']);
                            unset($data[$k]['posts'][$k2]['children'][$k3]['children']);

                        }

                        break;
                endswitch;

                unset($data[$k]['posts'][$k2]['parent_id']);
                unset($data[$k]['posts'][$k2]['pivot']);
            endforeach;
        }*/

        //dd($data);

        return response()->json(
            ['error'=>false,'categories'=>$data,'calendar_labels'=>$labels,'calendar'=>$calendar,'calendar_important'=>$calendar_important, 'blog'=>$blog]
        );
    }




    public function postCalendarEvents(Request $request){

        return response()->json(['error'=>false,'posts'=>Post::forCalendar($request)]);

    }
}
