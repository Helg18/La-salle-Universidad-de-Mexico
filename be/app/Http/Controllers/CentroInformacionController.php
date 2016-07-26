<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Models\CategoriasCentroInformacion;
use App\Models\CentroInformacion;
use Illuminate\Support\Collection;
use App\Http\Controllers\Controller;

class CentroInformacionController extends Controller
{

	
    public function index(){
 		$categorias = CategoriasCentroInformacion::all();
    	return view('centro.index')->with(compact('categorias'));
    }

    public function buscar(Request $request){
        $categorias = CategoriasCentroInformacion::find($request->id);
        return view('post.index')->with(compact('records','record','categorias'));
    }

    public function add(Request $request){

 		$categorias = new CategoriasCentroInformacion();
		$categorias->name = $request->title;
		$categorias->language = $request->language;
		$categorias->order = $request->order;
		$categorias->id_padre = "#";			
        $categorias->id_sub_categoria = "0";
		$categorias->save();
		$categorias = CategoriasCentroInformacion::all();
    	return view('centro.index')->with(compact('categorias'));
    }

    /**
     * @param Request $request
     * @return $this
     */
    public function edit(Request $request){
        

     	$categorias_edit = CategoriasCentroInformacion::find($request->id);

        $subcategorias_edit = CentroInformacion::where('id_catgories_centro_noticia', '=', $request->id)->get();
        
        
		return view('centro.index')->with(compact('categorias_edit','subcategorias_edit'));        

     }


    public function update(Request $request){

     

     	$categorias = CategoriasCentroInformacion::find($request->id);
     	$categorias->name = $request->title;
		$categorias->language = $request->language;
		$categorias->order = $request->order;
		$categorias->id_padre = "#";			
		$categorias->save();
		return redirect('centro')->with('success','Centro de  Informacion se registrado exitosamente');

     }  

     public function delete($id){

     	$categorias = CategoriasCentroInformacion::find($id);
        $categorias->delete();
		return redirect('centro')->with('success','Centro de  Informacion se elimino exitosamente');       

     }  

     public function news(){
        return $this->belongsToMany('App\Models\CentroInformacion');
    } 
         
}
