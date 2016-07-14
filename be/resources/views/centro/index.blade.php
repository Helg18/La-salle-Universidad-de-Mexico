@extends('layouts.secure')

@section('content')

<h1>Centro de Informacion</h1>

<!-- tab style -->
<div class="clearfix tabs-linearrow">
    <ul class="nav nav-tabs">
        <li class="active"><a href="{{url('centro')}}" hreff="#tab-linearrow-one" -data-toggle="tab">CONSULTAS</a></li>

        <li class=""><a href="#tab-create" data-toggle="tab">NUEVOS</a></li>
    </ul>

    <div class="tab-content">
        <div class="tab-pane active" id="tab-linearrow-one">

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

        <form class="form-horizontal right col-lg-4" action="javascript:;">
            <input type="text" class="form-control input-sm searchInput" placeholder="Buscar">
        </form>

        <div class="data-table">

           

          

        <!-- data table -->
        <table class="table table-bordered table-striped">
            <thead>
                <tr>

                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Padre</th>
                    <th>Configurar</th>
                </tr>
            </thead>
            <tbody>
                <!-- data initialize via script, can also be load via ajax -->
                
            </tbody>
        </table>
        <!-- #end data table -->
        </div>



        </div>

        <div class="tab-pane " id="tab-create">
            <form role="form" class="form-horizontal" method="POST" action=""  enctype="multipart/form-data">
            {!! csrf_field() !!}

               {{--  @if($record)
                <input type="hidden" name="_method" value="PUT">
                @endif --}}

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

                 

                     


                <div class="btn-group col-md-offset-2">
                    <!--<button class="btn btn-default">Borrar</button>-->
                    {{-- @if($record)
                        <a href="{{url("post/{$record->id}")}}" data-method="delete"
                           data-token="{{csrf_token()}}" data-confirm="Estas seguro?" class="btn btn-default">Borrar</a>
                    @endif --}}
                    <button class="btn btn-success" type="submit">Guardar</button>
                </div>

            </form>

            
        </div>

    </div>
</div>

@endsection