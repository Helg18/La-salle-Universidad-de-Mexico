@extends('layouts.secure')

@section('content')

<h1>Editar Categorias del menu principal</h1>

<!-- tab style -->
<div class="clearfix tabs-linearrow">
        <ul class="nav nav-tabs">

        <li class="{{ isset($categorias)  ? 'active' : '' }}"><a href="{{url('categories')}}" href="#tab-linearrow-one" -data-toggle="tab">CONSULTAS</a></li>

        <li class="{{ !isset($categorias)  ? 'active' : '' }}"><a href="#tab-create" data-toggle="tab">{{ isset($categorias) ? 'NUEVO' : 'EDITAR' }}</a></li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane active" id="tab-linearrow-one">
        <div class="data-table">

         <div class="tab-pane " id="tab-create">
            <form role="form" class="form-horizontal" method="POST" action="{{url("categories/{$categories->id}/update")}}"">
            {!! csrf_field() !!}

               {{--  @if($record)
                <input type="hidden" name="_method" value="PUT">
                @endif --}}

                <br>
                <br>

                <div class="form-group">
                    <label class="col-md-2 control-label">Titulo</label>
                    <div class="col-md-10">
                        <input type="text" class="form-control" value="{{ $categories->name }}" name="title" autocomplete="off">
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
                        <option  @if($categories->language == 1){{'selected'}} @endif value="1">Español</option>
                        <option  @if($categories->language == 2){{'selected'}} @endif value="2">Ingles</option>
                    </select>             
                    </div>       
                </div>

                 <div class="form-group">
                    <label class="col-md-2 control-label">Order</label>
                    <div class="col-md-9">
                    <input type="text" class="form-control" value="{{ $categories->order }}" name="order" autocomplete="off">                              
                    </div>       
                </div>

                

                

                <div class="btn-group col-md-offset-2">                   
                    <button class="btn btn-success" type="submit">Guardar</button>
                </div>

            </form>

        </div>    

   
        @include('centro.modal')
        
        

    
</div>
<script>var change_menu='menu-printer';</script>
@endsection