<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Models\CategoriasCentroInformacion;

use App\Models\CentroInformacion;


class CentroSubCategoriaController extends Controller
{
   

	 /**
	 * @param Request $request
	 * @return $this
	 */

    public function edit(Request $request){

    	$categorias_edit = CategoriasCentroInformacion::find($request->id);

     	$categorias_edit = CentroInformacion::where('id_sub_categoria', '=', $request->id)->get();
		return view('centro.sub')->with(compact('categorias_edit')); 

     }
}
