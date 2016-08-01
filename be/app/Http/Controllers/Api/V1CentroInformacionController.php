<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class V1CentroInformacionController extends Controller
{

    public function __construct()
    {
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Credentials: true');
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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
