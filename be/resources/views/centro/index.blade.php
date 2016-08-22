@extends('layouts.secure')

@section('content')

<h1>Categorias de Centro de Información</h1>

<!-- tab style -->
<div class="clearfix tabs-linearrow">
    <ul class="nav nav-tabs">

        <li class="{{ isset($categorias)  ? 'active' : '' }}"><a href="{{url('centro')}}" href="#tab-linearrow-one" -data-toggle="tab">CONSULTAS</a></li>

        <li class="{{ !isset($categorias)  ? 'active' : '' }}"><a href="#tab-create" data-toggle="tab">{{ isset($categorias) ? 'NUEVO' : 'EDITAR' }}</a></li>
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

       

        @if(isset($categorias))
            <form class="form-horizontal right col-lg-4" action="javascript:;">
                <input type="text" class="form-control input-sm searchInput" placeholder="Buscar">
            </form>

            <div class="data-table">            
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Title</th>
                                <th>Order</th>
                                <th>Estado</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                @foreach($categorias as $r)
                                <tr>
                                    <td><a href="{{url("centro/{$r->id}/edit")}}" >{{$r->name}}</a></td>
                                    <td><a href="{{url("centro/{$r->id}/edit")}}" >{{$r->title}}</a></td>
                                    <td>{{ $r->order }}</td>
                                    <td>@if($r->estado == 1) {{'Activo'}} @else {{'No Activo'}} @endif</td>

                                    <td width="5%">
                                        <a href="{{url("centro/{$r->id}/delete")}}" data-method="delete" data-token="{{csrf_token()}}" data-confirm="Eliminará permanentemente el registro. ¿Desea continuar?" class="md-fab md-primary md-button md-mini waves-effect"><i class="fa fa-remove"></i></a>
                                    </td>
                                </tr>
                                @endforeach
                            
                            
                        </tbody>
                    </table>
            </div>
            </div>
            </div>

            <div class="tab-pane " id="tab-create">
            <form role="form" class="form-horizontal" method="POST" action="{{url("centro")}}""  enctype="multipart/form-data">
            {!! csrf_field() !!}

                <br>
                <br>
                <div class="form-group">
                    <label class="col-md-2 control-label">Estado</label>
                    <div class="col-md-9">
                    <select class="form-control" name="estado" id="estado">
                        <option  value="1">Activo</option>
                        <option  value="0">No ACtivo</option>
                    </select>             
                    </div>       
                </div>

                <div class="form-group">
                    <label class="col-md-2 control-label">Nombre</label>
                    <div class="col-md-10">
                        <input type="text" class="form-control" value="" name="name" autocomplete="off">
                        @if ($errors->has('name'))
                            <span class="alert alert-danger">
                                <strong></strong>
                            </span>
                        @endif
                    </div>
                </div>
                  <div class="form-group">
                    <label class="col-md-2 control-label">Titulo</label>
                    <div class="col-md-10">
                        <input type="text" class="form-control" value="" name="title" autocomplete="off">
                        @if ($errors->has('title'))
                            <span class="alert alert-danger">
                                <strong></strong>
                            </span>
                        @endif
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label">Parrafo</label>
                    <div class="col-md-10">
                        <textarea rows="4" class="form-control" width="100%" name="paragraph_1"></textarea>
                        @if ($errors->has('paragraph_1'))

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
                        <option  value="1">Español</option>
                        <option  value="2">Ingles</option>
                    </select>             
                    </div>       
                </div>

                 <div class="form-group">
                    <label class="col-md-2 control-label">Order</label>
                    <div class="col-md-9">
                    <input type="text" class="form-control" value="" name="order" autocomplete="off">                              
                    </div>       
                </div>

            

                <div class="btn-group col-md-offset-2">                   
                    <button class="btn btn-success" type="submit">Guardar</button>
                </div>

            </form>

        </div>

        @else

         <div class="tab-pane " id="tab-create">
            <form role="form" class="form-horizontal" method="POST" action="{{url("centro/{$categorias_edit->id}/update")}}"">
            {!! csrf_field() !!}

               {{--  @if($record)
                <input type="hidden" name="_method" value="PUT">
                @endif --}}

                <br>
                <br>
        
                <div class="form-group">
                    <label class="col-md-2 control-label">Estado</label>
                    <div class="col-md-9">
                    <select class="form-control" name="estado" id="estado">
                        <option  @if($categorias_edit->estado == 1){{'selected'}} @endif value="1">Activo</option>
                        <option  @if($categorias_edit->estado == 0){{'selected'}} @endif value="0">No Activo</option>
                    </select>             
                    </div>       
                </div>

                 <div class="form-group">
                    <label class="col-md-2 control-label">Nombre</label>
                    <div class="col-md-10">
                        <input type="text" class="form-control" value="{{ $categorias_edit->name }}" name="nombre" autocomplete="off">
                        @if ($errors->has('name'))
                            <span class="alert alert-danger">
                                <strong></strong>
                            </span>
                        @endif
                    </div>
                </div>



                <div class="form-group">
                    <label class="col-md-2 control-label">Titulo</label>
                    <div class="col-md-10">
                        <input type="text" class="form-control" value="{{ $categorias_edit->title }}" name="title" autocomplete="off">
                        @if ($errors->has('title'))
                            <span class="alert alert-danger">
                                <strong></strong>
                            </span>
                        @endif
                    </div>
                </div>

                 <div class="form-group">
                    <label class="col-md-2 control-label">Parrafo</label>
                    <div class="col-md-10">
                        <textarea rows="4" class="form-control" width="100%" name="paragraph_1">{{$categorias_edit->paragraph_1}}</textarea>
                        @if ($errors->has('paragraph_1'))

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
                        <option  @if($categorias_edit->language == 1){{'selected'}} @endif value="1">Español</option>
                        <option  @if($categorias_edit->language == 2){{'selected'}} @endif value="2">Ingles</option>
                    </select>             
                    </div>       
                </div>

                 <div class="form-group">
                    <label class="col-md-2 control-label">Order</label>
                    <div class="col-md-9">
                    <input type="text" class="form-control" value="{{ $categorias_edit->order }}" name="order" autocomplete="off">                              
                    </div>       
                </div>

                

                

                <div class="btn-group col-md-offset-2">                   
                    <button class="btn btn-success" type="submit">Guardar</button>
                </div>

            </form>

        </div>
        @endif        

        @if(isset($subcategorias_edit) && count($subcategorias_edit)>0 )
            <script>var id_catgories_centro_noticia = '{{ $categorias_edit->id }}'</script>
        

        <div ng-controller="CentroCtrl" class="ng-cloak">
            <hr />
            
            <table class="table">
                <thead>
                    <tr>
                    

                        {{-- <th><button type="button" class="btn btn-xs btn-info btn-rounded waves-effect" ng-click="modalCentros(false, 'Cuadro de información')"><i class="fa fa-plus"></i></button> Agregar SubCategorias</th> --}}
                        <th>
                        
                        {{-- <button type="button" class="btn btn-xs btn-info btn-rounded waves-effect" ><i class="fa fa-plus"></i></button> Agregar SubCategorias --}}
                        <a href="{{url("subcentro/$categorias_edit->id/new")}}" data-method="get" class="btn btn-xs btn-info btn-rounded waves-effect"><i class="fa fa-plus"></i>Agregar SubCategorias</a>
                        </th>
                        <th>Order</th>
                        <th>Agregar Secciones a las Sub-Categorias</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {{-- <tr ng-repeat="centro in centros"> --}}
                    @foreach($subcategorias_edit as $r)
                    {{-- <tr> --}}
                        {{-- <td><a href="javascript: void(0);" ng-click="modalCentros(centro, 'Cuadro de información')">@{{centro.title}}</a></td> --}}
                        {{-- <td><a href="{{url("subcentro/{$subcategorias_edit->pluck('id')->first()}/edit")}}" >@{{centro.title}}</a></td> --}}
                        {{-- <td>@{{centro.order}}</td> --}}
                        {{-- <td></td> --}}
                        {{-- <td><a href="{{url("subcentro/{$subcategorias_edit->pluck('id')->first()}/edit")}}" > @{{centro.title}}</a></td> --}}


                        
                        <td> <a href="{{ url("subcentro/{$r->id}/editcategoria") }}">{{ $r->title }}</a></td>
                        {{-- <td> <a href="{{ url("subcentro/{$subcategorias_edit->pluck('id')}/editcategoria") }}">{{ $subcategorias_edit->pluck('title') }}</a></td> --}}
                        <td>{{ $r->order }}</td>
                        {{-- <td>{{ $subcategorias_edit->pluck('order') }}</td> --}}
                        <td><a href="{{url("subcentro/{$r->id }/edit")}}" >Agregar Sección</a></td>
                        {{-- <td><a href="{{url("subcentro/{$subcategorias_edit->pluck('id') }/edit")}}" >Agregar Sección</a></td> --}}
                        {{-- <td width="1%"><button type="button" class="btn btn-danger btn-rounded btn-xs waves-effect" ng-confirm-click="Estas seguro?" ng-click="deleteCentros(centro)"><i class="fa fa-close"></i></button></td> --}}
                        <td width="5%">
                                <a href="{{url("subcentro/{$r->id}/delete")}}" data-method="delete" data-token="{{csrf_token()}}" data-confirm="Eliminará permanentemente el registro. ¿Desea continuar?" class="md-fab md-primary md-button md-mini waves-effect"><i class="fa fa-remove"></i></a>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

        @elseif(isset($subcategorias_edit) && count($subcategorias_edit)==0 )

        <script>var id_catgories_centro_noticia = '{{ $categorias_edit->id }}'</script>
        <div ng-controller="CentroCtrl" class="ng-cloak">

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
                        {{-- <td><a href="javascript: void(0);" >@{{centro.order}}</a></td> --}}
                        <td width="1%"><button type="button" class="btn btn-danger btn-rounded btn-xs waves-effect" ng-confirm-click="Estas seguro?" ng-click="deleteCentros(centro)"><i class="fa fa-close"></i></button></td>
                    </tr>
                </tbody>
        </table>
        </div>
        
        
        @endif 

        @include('centro.modal')
        
        

    
</div>
<script>var change_menu='menu-printer';</script>
@endsection