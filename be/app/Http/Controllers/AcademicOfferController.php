<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Models\AcademicOffer;
use Session;

class AcademicOfferController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        return $this->customIndex(false, $request);
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
        //
        $record = new AcademicOffer();
        $record->title = $request->title;
        $record->subtitle = $request->subtitle;
        $record->paragraph_1 = $request->paragraph_1;
        $record->paragraph_2 = $request->paragraph_2;
        $record->type = $request->type;
        $record->language = $request->language;
        if($record->type!='gray_box'){
            $parent = Session::get('academic_last');
            $record->parent_id = $parent->id;
        }
        $record->upload($request);
        $record->save();


        return \Redirect::route('academic.index')->with('success','Información registrada exitosamente');
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
        $record = AcademicOffer::find($id);
        Session::put('academic_last',$record);
        return $this->customIndex($record);
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
        $record = AcademicOffer::find($id);
        $record->title = $request->title;
        $record->subtitle = $request->subtitle;
        $record->paragraph_1 = $request->paragraph_1;
        $record->paragraph_2 = $request->paragraph_2;
        $record->upload($request);
        $record->language = $request->language;
        $record->save();


        return \Redirect::route('academic.index')->with('success','Información registrada exitosamente');
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
        $record = AcademicOffer::find($id);
        $record->delete();
        return \Redirect::route('academic.index')->with('success','Información eliminada exitosamente');
    }

    private function customIndex($record=false,$request=false)
    {

        $records = AcademicOffer::sliders();

        if($record){
            $type = $record->type;
        }else{
            $type = $request && $request->type ? $request->type : 'gray_box';
        }


        $nextype=false;

        if($type=='gray_box'):
            $nextype = 'slider';

        elseif($type=='slider'):
            $nextype = 'list_box';

        elseif($type=='list_box'):
            $nextype = 'sidebar';

        elseif($type=='sidebar'):
            $nextype = false;
        /*    $nextype = 'content';

        elseif($type=='content'):
            $nextype = false;*/

        endif;




        $new_tab = false;
        if($request && $request->type){
            $new_tab = true;
        }

        $parent = Session::get('academic_last');
        //dd($parent);

        return view('academic.index')->with(compact('record','records','type','nextype','new_tab','parent'));
    }
}
