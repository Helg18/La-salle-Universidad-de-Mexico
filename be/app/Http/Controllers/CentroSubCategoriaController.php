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

     	$subsubcategorias_edit = CentroInformacion::where('id_sub_categoria', '=', $request->id)->get();

     	$subcategorias_edit = CentroInformacion::where('id', '=', $request->id)->get();

		return view('centro.sub')->with(compact('subsubcategorias_edit','subcategorias_edit')); 

     }


      /**
     * @param Request $request
     * @return $this
     */

    public function editsub(Request $request){
        
        $subcategorias = CentroInformacion::find($request->id);
        $subcategorias_edit = CentroInformacion::where('id', '=', $subcategorias->id_sub_categoria)->get();
        return view('centro.editsub')->with(compact('subcategorias','subcategorias_edit'));  

     }

    public function delete($id){

        $categorias = CentroInformacion::find($id);
        
        $id_sub = $categorias->id_sub_categoria;
        $categorias->delete();

        $subsubcategorias_edit = CentroInformacion::where('id_sub_categoria', '=', $id_sub)->get();
        $subcategorias_edit = CentroInformacion::where('id', '=', $id_sub)->get();


        return redirect('subcentro/'.$id_sub.'/edit')->with(compact('subsubcategorias_edit','subcategorias_edit','success','Sub-Categoria se Elimino exitosamente'));      

     }  

    public function update(Request $request){

        $subcentro= CentroInformacion::find($request->id);
        $subcentro->id_catgories_centro_noticia = 0;
        $subcentro->id_sub_categoria = $request->id_sub;
        $subcentro->title = $request->title;
        $subcentro->subtitle = $request->subtitle;
        $subcentro->paragraph_1 = $request->paragraph_1;
        $subcentro->paragraph_2 = $request->paragraph_2;
        $subcentro->paragraph_3 = $request->paragraph_3;
        $subcentro->language = $request->language;
        $subcentro->video = $request->video;
        $subcentro->order = $request->order;
        $subcentro->fecha_evento = $request->fecha_evento;
        $subcentro->save();

        $subsubcategorias_edit = CentroInformacion::where('id_sub_categoria', '=', $request->id_sub)->get();
        $subcategorias_edit = CentroInformacion::where('id', '=', $request->id_sub)->get();

        return redirect('subcentro/'.$request->id_sub.'/edit')->with(compact('subsubcategorias_edit','subcategorias_edit','success','La Sub-Categoria se modifico exitosamente'));

    }

    public function add(Request $request){

        $subcentro=new CentroInformacion();
        $subcentro->id_catgories_centro_noticia = 0;
        $subcentro->id_sub_categoria = $request->id_sub;
        $subcentro->title = $request->title;
        $subcentro->subtitle = $request->subtitle;
        $subcentro->paragraph_1 = $request->paragraph_1;
        $subcentro->paragraph_2 = $request->paragraph_2;
        $subcentro->paragraph_3 = $request->paragraph_3;
        $subcentro->language = $request->language;
        $subcentro->video = $request->video;
        $subcentro->order = $request->order;
        $subcentro->fecha_evento = $request->fecha_evento;
        $subcentro->save();
        $subsubcategorias_edit = CentroInformacion::where('id_sub_categoria', '=', $request->id_sub)->get();
        $subcategorias_edit = CentroInformacion::where('id', '=', $request->id_sub)->get();
        return redirect('subcentro/'.$request->id_sub.'/edit')->with(compact('subsubcategorias_edit','subcategorias_edit','success','Centro de  Informacion se registrado exitosamente'));

    }
}
