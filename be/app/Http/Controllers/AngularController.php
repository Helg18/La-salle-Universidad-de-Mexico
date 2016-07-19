<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\CentroInformacion;
use App\Http\Requests;


class AngularController extends Controller
{
    //
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

   

    public function posts($id){

        $post = Post::find($id);
        return response()->json($post->posts());
    }

    public function save_post(Request $request){
        if(!$post = Post::find($request->id)){
            $post=new Post();
        }
        $post->title = $request->title;
        $post->subtitle = $request->subtitle;
        $post->paragraph_1 = $request->paragraph_1;
        $post->paragraph_2 = $request->paragraph_2;
        $post->paragraph_3 = $request->paragraph_3;
        $post->parent_id = $request->parent_id;
        $post->language = $request->languageModal;
        $post->save();

        return response()->json(['message'=>'Información guardada exitosamente']);
    }

    public function delete_post($id){
        $post = Post::find($id);
        $post->delete();
        return response()->json(['message'=>'Registro eliminado exitosamente']);
    }

    public function centros($id){

        $centros = CentroInformacion::where('id_catgories_centro_noticia', '=', $id);

        return response()->json($centros->get());
    }
    
    public function delete_centros($id){
        $centro = CentroInformacion::find($id);
        $centro->delete();
        return response()->json(['message'=>'Registro eliminado exitosamente']);
    }

    public function save_centros(Request $request){
        
        if(!$centro = CentroInformacion::find($request->id)){
            $centro=new CentroInformacion();
        }
        $centro->id_catgories_centro_noticia = $request->id_catgories_centro_noticia;
        $centro->title = $request->title;
        $centro->subtitle = $request->subtitle;
        $centro->paragraph_1 = $request->paragraph_1;
        $centro->paragraph_2 = $request->paragraph_2;
        $centro->paragraph_3 = $request->paragraph_3;
        $centro->language = $request->languageModal;
        $centro->video = '0';
        $centro->picture = '0';
        $centro->order = 0;
        $centro->save();

        return response()->json(['message'=>'Información guardada exitosamente']);
    }

}
