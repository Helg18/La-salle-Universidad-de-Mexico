<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Models\CategoriasCentroInformacion;


class CentroInformacionController extends Controller
{

	

    public function index(){
 		$categorias = CategoriasCentroInformacion::all();
    	return view('centro.index')->with(compact('categorias'));
    }

    public function add(Request $request){

 		$categorias = new CategoriasCentroInformacion();
		$categorias->name = $request->title;
		$categorias->language = $request->language;
		$categorias->order = $request->order;
		if($request->tipo==0){
			$categorias->id_padre = "#";	
		}else{
			$categorias->id_padre = $request->id_padre;
		}
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
		return view('centro.index')->with(compact('categorias_edit'));        


     }


    public function update(Request $request){

     	$categorias = CategoriasCentroInformacion::find($request->id);

     	$categorias->name = $request->title;
		$categorias->language = $request->language;
		$categorias->order = $request->order;
		if($request->tipo==0){
			$categorias->id_padre = "#";	
		}else{
			$categorias->id_padre = $request->id_padre;
		}
		$categorias->save();

		// return $this->index();
		// return view('centro.index')->with(compact('categorias_edit'));        
		return redirect('centro')->with('success','Centro de  Informacion se registrado exitosamente');


     }  

     public function delete($id){

     	$categorias = CategoriasCentroInformacion::find($id);
        $categorias->delete();
		return redirect('centro')->with('success','Centro de  Informacion se elimino exitosamente');       


     }   
     




    
}
