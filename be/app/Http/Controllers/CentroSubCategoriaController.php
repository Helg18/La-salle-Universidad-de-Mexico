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
        $subcentro->id_catgories_centro_noticia = $request->id_categoria;
        $subcentro->id_sub_categoria = $request->id_sub;
        $subcentro->title = $request->title;
        $subcentro->subtitle = $request->subtitle;
        $subcentro->paragraph_1 = $request->paragraph_1;
        $subcentro->paragraph_2 = $request->paragraph_2;
        $subcentro->paragraph_3 = $request->paragraph_3;
        $subcentro->language = $request->language;
        $subcentro->video = $request->video;
        $subcentro->order = $request->order;
        $subcentro->tipo = $request->tipo;
        $subcentro->fecha_evento = $request->fecha_evento;
        $subcentro->save();
        $this->images($request, $request->id);

        $subsubcategorias_edit = CentroInformacion::where('id_sub_categoria', '=', $request->id_sub)->get();
        $subcategorias_edit = CentroInformacion::where('id', '=', $request->id_sub)->get();

        return redirect('subcentro/'.$request->id_sub.'/edit')->with(compact('subsubcategorias_edit','subcategorias_edit','success','La Sub-Categoria se modifico exitosamente'));

    }

    public function add(Request $request){

        // dd($request);

        $subcentro=new CentroInformacion();
        $subcentro->id_catgories_centro_noticia = $request->id_categoria;
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
        // $subcentro->picture = $request->picture;
        $subcentro->save();
        $this->images($request, $subcentro->id);
        
        $subsubcategorias_edit = CentroInformacion::where('id_sub_categoria', '=', $request->id_sub)->get();
        $subcategorias_edit = CentroInformacion::where('id', '=', $request->id_sub)->get();
        return redirect('subcentro/'.$request->id_sub.'/edit')->with(compact('subsubcategorias_edit','subcategorias_edit','success','Centro de  Informacion se registrado exitosamente'));

    }

    public function images(Request $request, $id){

        $subcentro= CentroInformacion::find($id);
        $files = $request->files;
        if($subcentro && $files){
            foreach($files as $k=>$file){
                $this->image($id,$file);
            }
        }

        return 1;
    }


    public function path_image(){
        return base_path() . env('PATH_IMAGES');
    }

     public function image($id=false, $file){

       $subcentro= CentroInformacion::find($id);

        if($file) {

            $old = $this->path_image() . $subcentro->picture;
            if(is_file($old)){
                unlink($old);
            }
           

            $imageName = sha1(time()."_".$file->getClientOriginalName()) . '.' .$file->getClientOriginalExtension();

            $subcentro->picture = $imageName;
            $subcentro->save();

            $file->move(
                $this->path_image(), $imageName
            );

        }
    }


}
