@extends('layouts.secure')

@section('content')

<h1>{{$Category ? $Category->name." - " : ''}}Posts</h1>

<!-- tab style -->
<div class="clearfix tabs-linearrow">
	<ul class="nav nav-tabs">
		<li class="{{ $record || count($errors)>0 ? '' : 'active' }}"><a href="{{url('post')}}" hreff="#tab-linearrow-one" -data-toggle="tab">CONSULTAS</a></li>

		<li class="{{ $record || count($errors)>0 ? 'active' : '' }}"><a href="#tab-create" data-toggle="tab">{{ $record ? 'EDITAR' : 'NUEVO' }}</a></li>
	</ul>
	<div class="tab-content">
		<div class="tab-pane {{ $record || count($errors)>0  ? '' : 'active' }}" id="tab-linearrow-one">

<!-- Data Table -->


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

                                <form class="form-horizontal right col-lg-4" action="javascript:;">
                                    <input type="text" class="form-control input-sm searchInput" placeholder="Buscar">
                                </form>
                                <br />
                                <br />

							<!-- data table -->
							<table class="table table-bordered table-striped">
								<thead>
									<tr>

										<th>Titulo</th>
										<th>Fecha</th>
                                        <th></th>
									</tr>
								</thead>
								<tbody>
									<!-- data initialize via script, can also be load via ajax -->
									@foreach($records as $r)
									<tr>
									    <td><a href="{{url("post/{$r->id}/edit")}}">{{$r->title}}</a></td>
									    <td>{{$r->categories()->find(4) ? $r->custom_date : $r->created_at}}</td>

									    <td width="5%">
									        <a href="{{url("post/{$r->id}")}}" data-method="delete" data-token="{{csrf_token()}}" data-confirm="Eliminará permanentemente el registro. ¿Desea continuar?" class="md-fab md-primary md-button md-mini waves-effect"><i class="fa fa-remove"></i></a>
									    </td>
									</tr>
									@endforeach
								</tbody>
							</table>
							<!-- #end data table -->
							</div>



		</div>

		<div class="tab-pane {{ $record || count($errors)>0  ? 'active' : '' }}" id="tab-create">
		    <form role="form" class="form-horizontal" method="POST" action="{{ url('post') }}{{$record ? "/{$record->id}" : ''}}"  enctype="multipart/form-data">
		    {!! csrf_field() !!}

		        @if($record)
		        <input type="hidden" name="_method" value="PUT">
		        @endif

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

                @if($Category->id != 1 && $Category->id != 5 && $Category->id != 7 && $Category->id != 8 && $Category->id != 9)
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

                @if($Category->id != 2 && $Category->id != 1 && $Category->id != 9)
                <div class="form-group">
                    <label class="col-md-2 control-label">Parrafo 1</label>
                    <div class="col-md-10">

                        <textarea rows="6" class="form-control" name="paragraph_1" autocomplete="off">{{$record ? $record->paragraph_1 : old('paragraph_1')}}</textarea>
                        @if ($errors->has('paragraph_1'))
                            <span class="alert alert-danger">
                                <strong>{{ $errors->first('paragraph_1') }}</strong>
                            </span>
                        @endif
                    </div>
                </div>
                @endif


                @if($Category->id != 2 && $Category->id != 1 && $Category->id != 4 && $Category->id != 5  && $Category->id != 7  && $Category->id != 8 && $Category->id != 9  && $Category->id != 10  && $Category->id != 11)
                <div class="form-group">
                    <label class="col-md-2 control-label">Parrafo 2</label>
                    <div class="col-md-10">

                        <textarea rows="6" class="form-control resize-v" name="paragraph_2" autocomplete="off">{{$record ? $record->paragraph_2 : old('paragraph_2')}}</textarea>
                        @if ($errors->has('paragraph_2'))
                            <span class="alert alert-danger">
                                <strong>{{ $errors->first('paragraph_2') }}</strong>
                            </span>
                        @endif
                    </div>
                </div>
                @endif



                @if($Category->id != 2 && $Category->id != 5  && $Category->id != 7  && $Category->id != 8 && $Category->id != 9  && $Category->id != 10 && $Category->id != 11)
                <div class="form-group">
                    <label class="col-md-2 control-label">Código video Youtube</label>
                    <div class="col-md-7">
                        <input type="text" class="form-control" value="{{$record ? $record->video : old('video')}}" name="video" autocomplete="off">
                        @if ($errors->has('video'))
                            <span class="alert alert-danger">
                                <strong>{{ $errors->first('video') }}</strong>
                            </span>
                        @endif
                    </div>
                    <div class="col-md-2">
                        {!! $record ? $record->video_iframe('100','100') :'' !!}
                    </div>
                </div>
                @endif

                <div class="form-group">
                    <label class="col-md-2 control-label">Idioma</label>
                    
                    <div class="col-md-9">
                    <select class="form-control" name="language" id="language">
                        <option {{ $record && $record->language==1 ? 'selected':'' }} value="1">Español</option>
                        <option {{ $record && $record->language==2 ? 'selected':'' }} value="2">Ingles</option>
                    </select>             

                   
                    </div>       
                </div>

                 @if($Category->id ==4)

                    



                    <div class="form-group">
                        <label class="col-md-2 control-label">Fecha/Hora</label>
                        <div class="col-md-10">
                            {{-- <input type="text" class="form-control date" value="{{$record ? $record->date : old('date')}}" name="date" autocomplete="off"> --}}
                            <div class="input-group " >
                                <input type="text" class="form-control" id='custom_date' name="custom_date" value="{{$record ? $record->custom_date : old('custom_date')}}" autocomplete="off"/>
                                <span class="input-group-addon">
                                    <i class=" ion ion-calendar"></i>
                                </span>
                            </div>
                            @if ($errors->has('custom_date'))
                                <span class="alert alert-danger">
                                <strong>{{ $errors->first('custom_date') }}</strong>
                            </span>
                            @endif
                        </div>
                    </div>




                @endif

                @if($Category->id != 2  && $Category->id != 7  && $Category->id != 8 && $Category->id != 9)
                <div class="form-group">
                    <label class="col-md-2 control-label">Imagen</label>
                    <div class="col-md-7">
                        <div class="alert alert-info">
                            La imagen debe tener un tamaño de
                            @if($Category->id ==10)
                                960 x 466
                            @elseif($Category->id ==4)
                                300x300
                            @elseif($Category->id ==5)
                                280x343 pixeles en imagen normal y 560x343 en imagen destacada
                            @endif
                            pixeles
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

                @if($Category->id ==4)

                    <div class="form-group">
                        <label class="col-md-2 control-label">Categorias del calendario</label>
                        <div class="col-md-9">
                            <select id="multiSelect" style="width: 100%" data-tags="true" multiple="multiple" name="labels[]">
                                @foreach($CalendarLabels as $c)
                                <option value="{{$c->id}}" {{$record && $record->labels()->find($c->id) ? 'selected' :''}}>{{$c->name}}</option>
                                @endforeach
                            </select>
                        </div>

                    </div>








                @endif
               


                @if($Category->id ==4 || $Category->id ==5)
                    <div class="form-group">
                        <label class="col-md-2 control-label">Es destacada</label>
                        <div class="col-md-9">
                            <div class="ui-checkbox ui-checkbox-success ui-checkbox-circle">
                                <label>
                                    <input type="checkbox"  name="is_important" {{$record && $record->is_important ? 'checked' : ''}}>
                                    <span></span>
                                </label>
                            </div>
                        </div>

                    </div>
                @endif

                


                <div class="btn-group col-md-offset-2">
                    <!--<button class="btn btn-default">Borrar</button>-->
                    @if($record)
                        <a href="{{url("post/{$record->id}")}}" data-method="delete"
                           data-token="{{csrf_token()}}" data-confirm="Estas seguro?" class="btn btn-default">Borrar</a>
                    @endif
                    <button class="btn btn-success" type="submit">Guardar</button>
                </div>

            </form>

            @if($record && ($Category->id ==2 || $Category->id == 1 || $Category->id == 9))
                 <script>var parent_id = '{{$record->id}}', category_id = '{{$Category->id}}';</script>
                <div ng-controller="PostCtrl" class="ng-cloak">
                    <hr />

                    <table class="table">
                        <thead>
                            <tr>
                                <th><button type="button" class="btn btn-xs btn-info btn-rounded waves-effect" ng-click="modalPost(false, 'Cuadro de información')"><i class="fa fa-plus"></i></button> Agregar cuadro de información</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr ng-repeat="post in posts">
                                <td><a href="javascript: void(0);" ng-click="modalPost(post, 'Cuadro de información')">@{{post.title}}</a></td>
                                <td width="1%"><button type="button" class="btn btn-danger btn-rounded btn-xs waves-effect" ng-confirm-click="Estas seguro?" ng-click="deletePost(post)"><i class="fa fa-close"></i></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                @include('post.modal')
            @endif


		</div>
	</div>
</div>
<!-- tab style -->
<script>var change_menu='menu-printer';</script>
@endsection