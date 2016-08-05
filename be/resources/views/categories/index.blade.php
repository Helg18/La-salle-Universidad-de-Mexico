@extends('layouts.secure')

@section('content')

<h1>Categorias del menu principal</h1>

<!-- tab style -->
<div class="clearfix tabs-linearrow">
    <ul class="nav nav-tabs">

        <li class="{{ isset($categorias)  ? 'active' : '' }}"><a href="{{url('categories')}}" href="#tab-linearrow-one" -data-toggle="tab">CONSULTAS</a></li>

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
                                <th>Order</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                @foreach($categorias as $r)
                                <tr>
                                    <td><a href="{{url("categories/{$r->id}/edit")}}" >{{$r->name}}</a></td>
                                    <td>{{ $r->order }}</td>
                                    {{-- <td>{{ '' }}</td> --}}

                                    <td width="5%">
                                        <a href="{{url("categories/{$r->id}/delete")}}" data-method="delete" data-token="{{csrf_token()}}" data-confirm="Eliminará permanentemente el registro. ¿Desea continuar?" class="md-fab md-primary md-button md-mini waves-effect"><i class="fa fa-remove"></i></a>
                                    </td>
                                </tr>
                                @endforeach
                            
                            
                        </tbody>
                    </table>
            </div>
            </div>
            </div>

            <div class="tab-pane " id="tab-create">
            <form role="form" class="form-horizontal" method="POST" action="{{url("categories/add")}}""  enctype="multipart/form-data">
            {!! csrf_field() !!}

                <br>
                <br>

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
                    <label class="col-md-2 control-label">Titulo</label>
                    <div class="col-md-10">
                        <input type="text" class="form-control" value="{{ $categorias_edit->name }}" name="title" autocomplete="off">
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
                    

                        <th><button type="button" class="btn btn-xs btn-info btn-rounded waves-effect" ng-click="modalCentros(false, 'Cuadro de información')"><i class="fa fa-plus"></i></button> Agregar Seccion</th>
                        <th>Agregar Secciones de Sub-Categorias</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="centro in centros">
                        <td><a href="javascript: void(0);" ng-click="modalCentros(centro, 'Cuadro de información')">@{{centro.title}}</a></td>
                        {{-- <td><a href="{{url("subcentro/{$subcategorias_edit->pluck('id')->first()}/edit")}}" > @{{centro.title}}</a></td> --}}
                        <td><a href="{{url("subcentro/{$subcategorias_edit->pluck('id')->first()}/edit")}}" >Agregar Sección</a></td>
                        <td width="1%"><button type="button" class="btn btn-danger btn-rounded btn-xs waves-effect" ng-confirm-click="Estas seguro?" ng-click="deleteCentros(centro)"><i class="fa fa-close"></i></button></td>
                    </tr>
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

        @include('categories.modal')
        
        

    
</div>
<script>var change_menu='menu-printer';</script>
@endsection