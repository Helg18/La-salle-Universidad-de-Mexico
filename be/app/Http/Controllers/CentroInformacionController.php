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



    
}
