<?php
/**
 * Henry Leon
 */
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Http\Requests;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function index(){
        $categorias = Category::all();
        return view('categories.index')->with(compact('categorias'));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $categories           = new Category;
        $categories->name     = $request->title;
        $categories->order    = $request->order;
        $categories->language = $request->language;
        $categories->save();
        return redirect('categories')->with('success','Categoria creada exitosamente');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $categories = Category::findorfail($id);
        return view('categories.edit')->with(compact('categories'));
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
        $categories = Category::findorfail($id);
        $categories->name     = $request->title;
        $categories->order    = $request->order;
        $categories->language = $request->language;
        $categories->save();
        return redirect('categories')->with('success','Categoria actualizada satisfactoriamente');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $categories = Category::findorfail($id);
        $categories->delete();
        return redirect('categories')->with('success','Categoria eliminada satisfactoriamente');
    }
}
