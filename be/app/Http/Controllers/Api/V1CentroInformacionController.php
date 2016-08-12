<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\CategoriasCentroInformacion;
use App\Models\CentroInformacion;


class V1CentroInformacionController extends Controller
{

    public function __construct()
    {
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Credentials: true');
    }

    
    public function getInitialData($id){

        $subcategorias = CentroInformacion::where('id_catgories_centro_noticia', '=', $id)
        ->where('id_sub_categoria', '=', 0)
        ->orderBy('order','desc')->get();

        // dd($subcategorias);

        $subsubcategorias = array();
        $calendar = array();

        foreach ($subcategorias as $key) {
                $subsubcategorias = CentroInformacion::where('id_sub_categoria', '=', $key->id)->where('tipo', '=', 1)->get();
                $calendar = CentroInformacion::where('id_sub_categoria', '=', $key->id)->where('tipo', '=', 2)->orderBy('order', 'asc')->get();
        }   
        
       

        return response()->json(
            ['error'=>false,'subcategorias'=>$subcategorias,'calendar'=>$calendar,'subsubcategorias'=>$subsubcategorias]
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
