<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Http\Requests\PostRequest;
use Illuminate\Support\Facades\Session;



class PostController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        //$this->middleware('module');

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        if($request->id) $request->session()->put('category_id', $request->id);
        return $this->customIndex();
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostRequest $request)
    {
        //
        $record = new Post();
        $record->title = $request->title;
        $record->subtitle = $request->subtitle;
        $record->paragraph_1 = $request->paragraph_1;
        $record->paragraph_2 = $request->paragraph_2;
        $record->paragraph_3 = $request->paragraph_3;
        $record->video = Post::cleanYoutubeCode($request->video);
        $record->upload($request);

        $record->save();

        if($id=Session::get('category_id')){
            $record->categories()->attach($id);
        }


        return \Redirect::route('post.index')->with('success','Post registrado exitosamente');
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
        $record = Post::find($id);
        return $this->customIndex($record);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PostRequest $request, $id)
    {
        //
        $record = Post::find($id);
        $record->title = $request->title;
        $record->subtitle = $request->subtitle;
        $record->paragraph_1 = $request->paragraph_1;
        $record->paragraph_2 = $request->paragraph_2;
        $record->paragraph_3 = $request->paragraph_3;
        $record->video = Post::cleanYoutubeCode($request->video);
        $record->upload($request);
        $record->save();

        return \Redirect::route('post.index')->with('success','Post actualizado exitosamente');
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
        $record = Post::find($id);
        $record->delete();
        return \Redirect::route('post.index')->with('success','Post eliminada exitosamente');
    }

    private function customIndex($record=false){

        if(Session::get('category_id')){
            $Category = Category::find(Session::get('category_id'));
            $records = $Category->posts()->get();
        }else{
            $records = Post::orderBy('id')->get();
            $Category = false;
        }

        return view('post.index')->with(compact('records','record','Category'));
    }



    public function delete_image($id){

        $record = Post::find($id);
        $record->delete_image();

        return \Redirect::route('post.edit',['id'=>$id])->with('success','Imagen eliminada exitosamente');

    }



}
