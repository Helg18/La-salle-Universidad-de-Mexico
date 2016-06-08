@extends('layouts.secure')

@section('content')

<h1>Oferta Academica <!--{{$parent ? '- '.$parent->title : ''}}--> - {{$type}}</h1>


<!-- tab style -->
<div class="clearfix tabs-linearrow">
	<ul class="nav nav-tabs">
		<li class="{{ $record || count($errors)>0 || $new_tab ? '' : 'active' }}"><a href="{{url('academic')}}" hreff="#tab-linearrow-one" -data-toggle="tab">CONSULTAS</a></li>

		<li class="{{ $record || count($errors)>0 || $new_tab ? 'active' : '' }}"><a href="#tab-create" data-toggle="tab">{{ $record ? 'EDITAR' : 'NUEVO' }}</a></li>
	</ul>
	<div class="tab-content">
		<div class="tab-pane {{ $record|| count($errors)>0  || $new_tab  ? '' : 'active' }}" id="tab-linearrow-one">

<!-- Data Table -->


                            <div class="data-table">

									<div class="small text-bold left mt5">
										Mostrar&nbsp;
										<select class="lengthSelect" >
											<option value="5">5</option>
											<option value="10" selected>10</option>
											<option value="20">20</option>
											<option value="50">50</option>
										</select>
										&nbsp;registros
									</div>

									<form class="form-horizontal right col-lg-4" action="javascript:;">
										<input type="text" class="form-control input-sm searchInput" placeholder="Buscar">
									</form>-
                                <br />
                                <br />

							<!-- data table -->
							<table class="table table-bordered table-striped">
								<thead>
									<tr>
									    <th>
                                    		Titulo
                                    		<!--<div class="th">
                                    			<i class="fa fa-caret-up icon-up"></i>
                                    			<i class="fa fa-caret-down icon-down"></i>
                                    		</div>-->
                                    	</th>

										<th>Eliminar</th>

									</tr>
								</thead>
								<tbody>
									<!-- data initialize via script, can also be load via ajax -->

									@foreach($records as $u)
									<tr>
									    <td><a href="{{url("academic/{$u->id}/edit")}}">{{$u->title}}</a></td>

									    <td width="5%">
									        <a href="{{url("academic/{$u->id}")}}" data-method="delete" data-token="{{csrf_token()}}" data-confirm="Estas seguro?" class="md-fab md-primary md-button md-mini waves-effect"><i class="fa fa-remove"></i></a>
									    </td>
									</tr>
									@endforeach
								</tbody>
							</table>
							<!-- #end data table -->
							</div>



		</div>

		<div class="tab-pane {{ $record || count($errors)>0 || $new_tab  ? 'active' : '' }}" id="tab-create">
		    <form role="form" class="form-horizontal" method="POST" action="{{ url("academic") }}{{$record ? "/{$record->id}" : ''}}" enctype="multipart/form-data">
		    {!! csrf_field() !!}

		        @if($record)
		        <input type="hidden" name="_method" value="PUT">
		        @endif
                <input type="hidden" name="type" value="{{$type}}">

                <div class="form-group">
                    <label class="col-md-2 control-label">Titulo</label>
                    <div class="col-md-10">
                        <input type="text" class="form-control" value="{{$record ? $record->title : old('title')}}" name="title" autocomplete="off">
                        @if ($errors->has('title'))
                            <span class="alert alert-danger">
                                <strong>{{ $errors->first('title') }}</strong>
                            </span>
                        @endif
                    </div>

                </div>

                @if($type=='content' || $type=='gray_box')
                    <div class="form-group">
                        <label class="col-md-2 control-label">Subtitulo</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control" value="{{$record ? $record->subtitle : old('subtitle')}}" name="subtitle" autocomplete="off">
                            @if ($errors->has('subtitle'))
                                <span class="alert alert-danger">
                                <strong>{{ $errors->first('subtitle') }}</strong>
                            </span>
                            @endif
                        </div>

                    </div>
                @endif
                @if($type=='content')
                    <div class="form-group">
                        <label class="col-md-2 control-label">Parrafo principal</label>
                        <div class="col-md-10">


                            <textarea rows="8" name="paragraph_1" class="form-control">{{$record ? $record->paragraph_1 : old('paragraph_1')}}</textarea>
                            @if ($errors->has('paragraph_1'))
                                <span class="alert alert-danger">
                                <strong>{{ $errors->first('paragraph_1') }}</strong>
                            </span>
                            @endif
                        </div>

                    </div>

                    <div class="form-group">
                        <label class="col-md-2 control-label">Texto en la linea gris izquierda</label>
                        <div class="col-md-10">


                            <textarea rows="8" name="paragraph_2" class="form-control">{{$record ? $record->paragraph_2 : old('paragraph_2')}}</textarea>
                            @if ($errors->has('paragraph_2'))
                                <span class="alert alert-danger">
                                <strong>{{ $errors->first('paragraph_2') }}</strong>
                            </span>
                            @endif
                        </div>

                    </div>
                @endif

                @if($type=='slider' || $type=='sidebar')
                <div class="form-group">
                    <label class="col-md-2 control-label">Imagen</label>
                    <div class="col-md-7">
                        <div class="alert alert-info">
                            @if($type=='slider')
                            La imagen debe tener un tamaño de
                                176 x 424
                            pixeles
                            @elseif($type=='sidebar')
                                El icono  del sidebar debe tener un tamaño de
                                26 x 23 pixeles
                            @endif
                        </div>
                        <input type="file" class="form-control" value="{{$record ? $record->picture : old('picture')}}" name="picture" autocomplete="off">
                        @if ($errors->has('picture'))
                            <span class="alert alert-danger">
                                <strong>{{ $errors->first('picture') }}</strong>
                            </span>
                        @endif
                    </div>
                    <div class="col-md-2">
                        {!! $record ? $record->picture_html('100px') :'' !!}
                    </div>

                    <div class="col-md-1">
                        @if($record && $record->picture_html())
                            <a href="{{url("post/{$record->id}/deleteimage")}}" data-method="delete"
                               data-token="{{csrf_token()}}" data-confirm="Estas seguro?" class="btn btn-danger btn-sm"><i class="ion-icon ion-close-round"></i></a>
                        @endif
                    </div>
                </div>
                @endif

                        <div class="btn-group">
                            <!--<button class="btn btn-default">Borrar</button>-->
                            @if($record)
                            <a href="{{url("academic/{$record->id}")}}" data-method="delete"
                              data-token="{{csrf_token()}}" data-confirm="Estas seguro?" class="btn btn-default">Borrar</a>
                            @endif
                            <button class="btn btn-success" type="submit">Guardar</button>
                        </div>




		    </form>

            @if($record && $nextype)
            <hr/>

            <table class="table">
                <thead>
                    <tr>
                        <th><a href="{{url('academic?type='.$nextype)}}" class="btn btn-xs btn-info btn-rounded waves-effect" ><i class="fa fa-plus"></i></a> Agregar {{$nextype}}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($record->children() as $r)
                    <tr>
                        <td><a href="{{url("academic/{$r->id}/edit")}}">{{$r->title}}</a></td>
                        <td width="5%">
                            <a href="{{url("academic/{$r->id}")}}" data-method="delete" data-token="{{csrf_token()}}" data-confirm="Estas seguro?" class="md-fab md-primary md-button md-mini waves-effect"><i class="fa fa-remove"></i></a>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            @endif
		</div>
	</div>
</div>
<!-- tab style -->
<script>var change_menu='menu-user';</script>
@endsection