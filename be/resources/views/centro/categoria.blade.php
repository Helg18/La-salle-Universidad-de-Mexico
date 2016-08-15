@extends('layouts.secure')

@section('content')

<?php use \Carbon\Carbon; ?>

<h1>Sub-Categorias de Centro de Informacion</h1>

<!-- tab style -->
<div class="clearfix tabs-linearrow">
    <ul class="nav nav-tabs">

        <li class="{{ isset($subcategorias)  ? '' : '' }}"><a href="{{url("centro/{$subcategorias->pluck('id_catgories_centro_noticia')->first()}/edit")}}" href="#tab-linearrow-one" -data-toggle="tab">Consultas</a></li>

        <li class="{{ !isset($subcategorias)  ? 'active' : 'active' }}"><a href="#tab-create" data-toggle="tab">{{ isset($subcategorias) ? 'EDITAR' : 'EDITAR' }}</a></li>
    </ul>

    <div class="tab-content">
        <div class="tab-pane active" id="tab-linearrow-one">
        <div class="data-table">

        <div class="small text-bold left mt5">
            Mostrar&nbsp;
            <select class="lengthSelect ">
                <option value="5">5</option>
                <option value="10" selected>10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
            &nbsp;registros
        </div>

       

        

            <div class="tab-pane " id="tab-create">
            <form role="form" class="form-horizontal" method="POST" action="{{url("subcentro/{$subcategorias->pluck('id')->first()}/updatecategoria")}}""  enctype="multipart/form-data" >
            {!! csrf_field() !!}

                <br>
                <br>
                <div class="form-group form-group-sm">
                    <label class="control-label small">Estado</label>
                    <select class="form-control" id="estado" name="estado">

                    <option @if($subcategorias->pluck('estado')->first()==0)  {{ ' selected ' }} @endif value="0">No Activo</option>
                    <option @if($subcategorias->pluck('estado')->first()==1)  {{ ' selected ' }} @endif value="1">Activo</option>

                    </select>  
                </div>

                <div class="form-group form-group-sm">
                    <label class="control-label small">Tipo.</label>
                    <select class="form-control" id="tipo" name="tipo">

                    <option @if($subcategorias->pluck('tipo')->first()==1)  {{ ' selected ' }} @endif value="1">Post</option>
                    <option @if($subcategorias->pluck('tipo')->first()==2)  {{ ' selected ' }} @endif value="2">Calendar</option>

                    </select>  
                </div>

                <div class="form-group form-group-sm">
                <label class="control-label small">Order.</label>
                <input type="text" class="form-control" placeholder="" name="order" value="{{ $subcategorias->pluck('order')->first() }}">
                <input type="hidden" id="id_sub" name="id_sub" value="{{ $subcategorias->pluck('id')->first() }}">
                 <input type="hidden" id="id_categoria" name="id_categoria" value="{{ $subcategorias->pluck('id_catgories_centro_noticia')->first() }}">
                
                </div>

                <div class="form-group form-group-sm">
                <label class="control-label small">Titulo.</label>
                <input type="text" class="form-control" placeholder="" value="{{ $subcategorias->pluck('title')->first() }}" name="title">
                </div>

                <br>
                <label class="control-label small">Ver Subtitulo.</label>
                <input type="checkbox" ng-model=" subhide " >
                <div ng-show=" subhide  " ng-hide=" !subhide " class="form-group form-group-sm">            
                <input type="text" class="form-control" placeholder="" value="{{ $subcategorias->pluck('subtitle')->first() }}" name="subtitle">
                </div>

                <br>
                <label class="control-label small">Ver Parrafo.1</label>
                <input type="checkbox"  ng-model=" parr1 " >
                <div ng-show="parr1  " ng-hide="  !parr1  " class="form-group" >
                <textarea rows="4" class="form-control" width="100%" name="paragraph_1">{{ $subcategorias->pluck('paragraph_1')->first() }}</textarea>
                </div>

                <br>
                <label class="control-label small">Ver Parrafo.2</label>
                <input type="checkbox" ng-model=" parr2 " >
                <div ng-show="parr2 " ng-hide="  !parr2  " class="form-group" >
                <textarea rows="4" class="form-control" width="100%" name="paragraph_2">{{ $subcategorias->pluck('paragraph_2')->first() }}</textarea>
                </div>

                <br>
                <label class="control-label small">Ver Parrafo.3</label>
                <input type="checkbox" ng-model=" parr3 " >
                <div ng-show="parr3 " ng-hide="  !parr3  " class="form-group" >
                <textarea rows="4" class="form-control" width="100%" name="paragraph_3">{{$subcategorias->pluck('paragraph_3')->first()}}</textarea>
                </div>


                <br>
                <label class="control-label small">Ver Imagen</label>
                <input type="checkbox"    ng-model=" imag " >
                <div ng-show="imag  " ng-hide="  !imag " class="form-group" >
                <input type="file" class="form-control" name="picture" size="5120">
                </div>

                <br>
                <label class="control-label small">Ver Video</label>
                <input type="checkbox"    ng-model=" videos " >
                <div ng-show="videos " ng-hide="  !videos  " class="form-group" >
                <input type="text" class="form-control" placeholder="Video" name="video" value="{{$subcategorias->pluck('video')->first()}}">
                </div>

                <br>    

                <label class="control-label small">Ver Fecha/Hora</label>

                <div class="form-group">


                <div class="input-group " >
                    <input type="text" class="form-control" id="fecha_evento" name="fecha_evento" value="{{$subcategorias->pluck('fecha_evento')->first()}}" />
                    <span class="input-group-addon">
                        <i class=" ion ion-calendar"></i>
                    </span>
                </div>


                </div>

                <br>
                <div class="form-group">
                <label class="control-label small">Idioma</label>

                <select class="form-control" name="language">

                <option @if($subcategorias->pluck('language')->first()==1)  {{ ' selected ' }} @endif value="1">Español</option>
                <option  @if($subcategorias->pluck('language')->first()==2) {{ ' selected ' }} @endif value="2">Ingles</option>

                </select>             

                </div>

            

                                   
                    <button class="btn btn-success" type="submit">Guardar</button>
                    
            </form>

        </div>

                

        
        
        

    
</div>
<script>var change_menu='menu-printer';</script>
@endsection