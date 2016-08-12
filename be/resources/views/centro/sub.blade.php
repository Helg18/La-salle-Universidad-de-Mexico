@extends('layouts.secure')

@section('content')

<?php use \Carbon\Carbon; ?>

<h1>Sub-Categorias de Centro de Informacion</h1>
<h1>{{ $subcategorias_edit->pluck('title')->first() }}</h1>

<!-- tab style -->
<div class="clearfix tabs-linearrow">
    <ul class="nav nav-tabs">
        <li class="{{''}}"><a href="{{url("centro/{$subcategorias_edit->pluck('id_catgories_centro_noticia')->first()}/edit")}}" href="#tab-linearrow-one" -data-toggle="tab">CATEGORIAS</a></li>
        <li class="{{ isset($subsubcategorias_edit)  ? 'active' : '' }}"><a href="{{url("subcentro/{$subcategorias_edit->pluck('id')->first()}/edit")}}" href="#tab-linearrow-one" -data-toggle="tab">CONSULTAS</a></li>

        <li class="{{ !isset($subsubcategorias_edit)  ? 'active' : '' }}"><a href="#tab-create" data-toggle="tab">{{ isset($subsubcategorias_edit) ? 'NUEVO' : 'EDITAR' }}</a></li>
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

       

        @if(isset($subsubcategorias_edit))
            <form class="form-horizontal right col-lg-4" action="javascript:;">
                <input type="text" class="form-control input-sm searchInput" placeholder="Buscar">
            </form>

            <div class="data-table">            
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Order</th>
                                <th>Estado</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                @foreach($subsubcategorias_edit as $r)
                                <tr>
                                    <td><a href="{{url("subcentro/{$r->id}/editsub")}}" >{{$r->title}}</a></td>
                                    <td>{{ $r->order }}</td>
                                     <td> @if($r->estado==1) {{ 'Activo' }} @else {{'No Activo'}} @endif </td>
                                    {{-- <td>{{ '' }}</td> --}}

                                    <td width="5%">
                                        <a href="{{url("subcentro/{$r->id}/delete")}}" data-method="delete" data-token="{{csrf_token()}}" data-confirm="Eliminará permanentemente el registro. ¿Desea continuar?" class="md-fab md-primary md-button md-mini waves-effect"><i class="fa fa-remove"></i></a>
                                    </td>
                                </tr>
                                @endforeach
                            
                            
                        </tbody>
                    </table>
            </div>
            </div>
            </div>

            <div class="tab-pane " id="tab-create">
            <form role="form" class="form-horizontal" method="POST" action="{{url("subcentro")}}""  enctype="multipart/form-data">
            {!! csrf_field() !!}

                <br>
                <br>

                <div class="form-group form-group-sm">
                    <label class="control-label small">Estado</label>
                    <select class="form-control" id="estado" name="estado">

                    <option @if( $subcategorias_edit->pluck('estado')->first()==0 )  {{ ' selected ' }} @endif value="0">No Activo</option>
                    <option @if( $subcategorias_edit->pluck('estado')->first()==1 )  {{ ' selected ' }} @endif value="1">Activo</option>

                    </select>  
                </div>
                
                <div class="form-group form-group-sm">
                    <label class="control-label small">Tipo.</label>
                    <select class="form-control" >

                    <option  value="1">Post</option>
                    <option  value="2">Calendar</option>

                    </select>  
                </div>

                <div class="form-group form-group-sm">
                <label class="control-label small">Order.</label>
                <input type="text" class="form-control" placeholder="" name="order">
                <input type="hidden" id="id_sub" name="id_sub" value="{{ $subcategorias_edit->pluck('id')->first() }}">
                <input type="hidden" id="id_categoria" name="id_categoria" value="{{ $subcategorias_edit->pluck('id_catgories_centro_noticia')->first() }}">
                
                </div>

                <div class="form-group form-group-sm">
                <label class="control-label small">Titulo.</label>
                <input type="text" class="form-control" placeholder="" name="title">
                </div>

                <br>
                <label class="control-label small">Ver Subtitulo.</label>
                <input type="checkbox" ng-model=" subhide " >
                <div ng-show=" subhide  " ng-hide=" !subhide " class="form-group form-group-sm">            
                <input type="text" class="form-control" placeholder="" name="subtitle">
                </div>

                <br>
                <label class="control-label small">Ver Parrafo.1</label>
                <input type="checkbox"  ng-model=" parr1 " >
                <div ng-show="parr1  " ng-hide="  !parr1  " class="form-group" >
                <textarea rows="4" class="form-control" width="100%" name="paragraph_1"></textarea>
                </div>

                <br>
                <label class="control-label small">Ver Parrafo.2</label>
                <input type="checkbox" ng-model=" parr2 " >
                <div ng-show="parr2 " ng-hide="  !parr2  " class="form-group" >
                <textarea rows="4" class="form-control" width="100%" name="paragraph_2"></textarea>
                </div>

                <br>
                <label class="control-label small">Ver Parrafo.3</label>
                <input type="checkbox" ng-model=" parr3 " >
                <div ng-show="parr3 " ng-hide="  !parr3  " class="form-group" >
                <textarea rows="4" class="form-control" width="100%" name="paragraph_3"></textarea>
                </div>


                <br>
                <label class="control-label small">Ver Imagen</label>
                <input type="checkbox"    ng-model=" imag " >
                <div ng-show="imag  " ng-hide="  !imag " class="form-group" >
                <input type="file" class="form-control" name="picture" size="20">
                </div>

                <br>
                <label class="control-label small">Ver Video</label>
                <input type="checkbox"    ng-model=" videos " >
                <div ng-show="videos " ng-hide="  !videos  " class="form-group" >
                <input type="text" class="form-control" placeholder="Video" name="video">
                </div>

                <br>    

                <label class="control-label small">Ver Fecha/Hora</label>

                <div class="form-group">


                <div class="input-group " >
                    <input type="text" class="form-control" id="fecha_evento" name="fecha_evento" value="{{ Carbon::now() }}" />
                    <span class="input-group-addon">
                        <i class=" ion ion-calendar"></i>
                    </span>
                </div>


                </div>

                <br>
                <div class="form-group">
                <label class="control-label small">Idioma</label>

                <select class="form-control" name="language">

                <option  value="1">Español</option>
                <option  value="2">Ingles</option>

                </select>             

                </div>

            

                <div class="btn-group col-md-offset-2">                   
                    <button class="btn btn-success" type="submit">Guardar</button>
                </div>

            </form>

        </div>

        @else

         <div class="tab-pane " id="tab-create">
            <form role="form" class="form-horizontal" method="POST" action="{{url("subcentro/{$subsubcategorias_edit->pluck('id')->first()}/update")}}""  enctype="multipart/form-data">
            {!! csrf_field() !!}

               {{--  @if($record)
                <input type="hidden" name="_method" value="PUT">
                @endif --}}

                <br>
                <br>

                <div class="form-group">
                    <label class="col-md-2 control-label">Titulo</label>
                    <div class="col-md-10">
                        <input type="text" class="form-control" value="{{ $subsubcategorias_edit->pluck('name')->first() }}" name="title" autocomplete="off">
                        @if ($errors->has('title'))
                            <span class="alert alert-danger">
                                <strong></strong>
                            </span>
                        @endif
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-md-2 control-label">Idioma</label>
                    <div class="col-md-9">
                    <select class="form-control" name="language" id="language">
                        <option  @if($subsubcategorias_edit->pluck('language')->first() == 1){{'selected'}} @endif value="1">Español</option>
                        <option  @if($subsubcategorias_edit->pluck('language')->first() == 2){{'selected'}} @endif value="2">Ingles</option>
                    </select>             
                    </div>       
                </div>

                 <div class="form-group">
                    <label class="col-md-2 control-label">Order</label>
                    <div class="col-md-9">
                    <input type="text" class="form-control" value="{{ $subsubcategorias_edit->pluck('order')->first() }}" name="order" autocomplete="off">                              
                    </div>       
                </div>

                

                

                <div class="btn-group col-md-offset-2">                   
                    <button class="btn btn-success" type="submit">Guardar</button>
                </div>

            </form>

        </div>
        @endif        

        @if(isset($subcategorias_edit) && count($subcategorias_edit)>0 )
            <script>var id_catgories_centro_noticia = '{{ $subsubcategorias_edit->pluck('order')->first() }}'</script>
        

        {{-- <div ng-controller="CentroCtrl" class="ng-cloak">
            <hr />
            
            <table class="table">
                <thead>
                    <tr>
                        <th><button type="button" class="btn btn-xs btn-info btn-rounded waves-effect" ng-click="modalCentros(false, 'Cuadro de información')"><i class="fa fa-plus"></i></button> Agregar Sub-Categorias</th>
                        <th>Order</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="centro in centros">
                        <td><a href="javascript: void(0);" ng-click="modalCentros(centro, 'Cuadro de información')">@{{centro.title}}</a></td>
                        <td><a href="javascript: void(0);" >@{{centro.order}}</a></td>
                        <td width="1%"><button type="button" class="btn btn-danger btn-rounded btn-xs waves-effect" ng-confirm-click="Estas seguro?" ng-click="deleteCentros(centro)"><i class="fa fa-close"></i></button></td>
                    </tr>
                </tbody>
            </table>
        </div> --}}

        @elseif(isset($subcategorias_edit) && count($subcategorias_edit)==0 )

        <script>var id_catgories_centro_noticia = '{{ $subsubcategorias_edit->pluck('id')->first() }}'</script>
       {{--  <div ng-controller="CentroCtrl" class="ng-cloak">

        <table class="table">
                <thead>
                    <tr>
                        <th><button type="button" class="btn btn-xs btn-info btn-rounded waves-effect" ng-click="modalCentros(false, 'Sub-Categorias')"><i class="fa fa-plus"></i></button> Agregar Sub-Categorias</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    <tr ng-repeat="centro in centros">
                        <td><a href="javascript: void(0);" ng-click="modalCentros(centro, 'Cuadro de información')">@{{centro.title}}</a></td>
                        <td width="1%"><button type="button" class="btn btn-danger btn-rounded btn-xs waves-effect" ng-confirm-click="Estas seguro?" ng-click="deleteCentros(centro)"><i class="fa fa-close"></i></button></td>
                    </tr>
                </tbody>
        </table> --}}
        </div>
        
        
        @endif 

        @include('centro.modal')
        
        

    
</div>
<script>var change_menu='menu-printer';</script>
@endsection