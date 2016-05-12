<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Models\Category;

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
        return response()->json(['error'=>false,'categories'=>$data]);
    }
}
