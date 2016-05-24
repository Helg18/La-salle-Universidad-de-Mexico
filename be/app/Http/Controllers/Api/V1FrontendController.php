<?php

namespace App\Http\Controllers\Api;

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

    //
    public function getInitialData(){

        $data = Category::allForJson();
        $labels = CalendarLabel::all();
        $calendar = Category::find(4)->posts()->limit(4)->orderBy('custom_date','desc')->get();

        return response()->json(['error'=>false,'categories'=>$data,'calendar_labels'=>$labels,'calendar'=>$calendar]);
    }




    public function postCalendarEvents(Request $request){

        return response()->json(['error'=>false,'posts'=>Post::forCalendar($request)]);

    }
}
