<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="description" content="Materia - Admin Template">
	<meta name="keywords" content="materia, webapp, admin, dashboard, template, ui">
	<meta name="author" content="solutionportal">
	<!-- <base href="/"> -->

	<title>La Salle - Administrador</title>

	<link rel="stylesheet" href="{{ asset('css/all.css') }}">
	<link rel="stylesheet" href="{{ asset('css/app.css') }}">

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.4/build/jquery.datetimepicker.min.css">
	

	<script>var numeral_format='0,0.00';</script>
	<script>var url='{{url('/')}}/';</script>

	<link rel="icon" type="image/png" href="http://www.lasalle.mx/wp-content/themes/lasalle/images/favicon.ico">



</head>
<body id="app" class="app off-canvas theme-zero" data-ng-app="lasalle">
	<!-- header -->
	<header class="site-head" id="site-head">
		<ul class="list-unstyled left-elems">
			<!-- nav trigger/collapse -->
			<li>
				<a href="javascript:;" class="nav-trigger ion ion-drag"></a>
			</li>
			<!-- #end nav-trigger -->

			<!-- Search box -->
			<li>
				<div class="form-search hidden-xs">
					<form id="site-search" action="javascript:;">
						<input type="search" class="form-control" placeholder="Buscar proyecto por nombre de cliente">
						<button type="submit" class="ion ion-ios-search-strong"></button>
					</form>
				</div>
			</li>	<!-- #end search-box -->

			<!-- site-logo for mobile nav -->
			<!--<li>
				<div class="site-logo visible-xs">
					<a href="javascript:;" class="text-uppercase h3">
						<span class="text">Expopack</span>
					</a>
				</div>
			</li>--> <!-- #end site-logo -->


			<!-- fullscreen -->
			<li class="fullscreen hidden-xs">
				<a href="javascript:;"><i class="ion ion-qr-scanner"></i></a>

			</li>	<!-- #end fullscreen -->





			<!-- notification drop -->


		</ul>

		<ul class="list-unstyled right-elems">

            <li><a href="javascript:;" class="text-white">{{App\Util::dateSpanish()}}&nbsp;&nbsp;</a></li>
            <li class="profile-drop hidden-xs dropdown">
				<a href="javascript:;" data-toggle="dropdown" aria-expanded="true">
					<img src="{{asset('/')}}images/admin.jpg" alt="admin-pic">
				</a>
				<ul class="dropdown-menu dropdown-menu-right">
					<!--<li><a href="javascript:;"><span class="ion ion-person">&nbsp;&nbsp;</span>Profile</a></li>
					<li><a href="javascript:;"><span class="ion ion-settings">&nbsp;&nbsp;</span>Settings</a></li>
					<li class="divider"></li>
					<li><a href="javascript:;"><span class="ion ion-lock-combination">&nbsp;&nbsp;</span>Lock Screen</a></li>-->
					<li><a href="{{ url('/logout') }}"><span class="ion ion-power">&nbsp;&nbsp;</span>Cerrar sesión</a></li>
				</ul>
			</li>



		</ul>

	</header>
	<!-- #end header -->


	<!-- main-container -->
	<div class="main-container clearfix ">
		<!-- main-navigation -->
		<aside class="nav-wrap" id="site-nav" data-perfect-scrollbar>
			<div class="nav-head">
				<!-- site logo -->
				<a href="{{url('/')}}" class="site-logo text-uppercase">
					<img src="{{asset('images/logo35.png')}}" width="35px">
					<span class="text"><img src="{{asset('images/logoletras.png')}}" width="100px"></span>
				</a>
			</div>

			<!-- Site nav (vertical) -->

			<nav class="site-nav clearfix" role="navigation">
				<div class="profile clearfix mb15">
					<img src="{{asset('/')}}images/admin.jpg" alt="admin">
					<div class="group">
						<h5 class="name">{{Auth::user()->name}}</h5>
						<small class="desig text-uppercase"></small>
					</div>
				</div>

				<!-- navigation -->
				<ul class="list-unstyled clearfix nav-list mb15">

					<li class="menu-dashboard">
						<a href="{{url('categories')}}">
							<i class="ion ion-edit"></i>
							<span class="text">Categorias</span>
						</a>
					</li>

					@foreach(\App\Models\Category::ordered() as $c)
					<li class="menu-dashboard">
						<a href="{{url('post?id=' . $c->id)}}">
							<i class="ion ion-edit"></i>
							<span class="text">{{$c->name}}</span>
						</a>
					</li>
					@endforeach

						<li class="menu-home">
							<a href="{{url('academic')}}">
								<i class="ion ion-edit"></i>
								<span class="text">Oferta Academica</span>
							</a>
						</li>

						<li class="menu-home">
							<a href="{{url('centro')}}">
								<i class="ion ion-edit"></i>
								<span class="text">Centro de Infor.</span>
							</a>
						</li>

					<li class="menu-config">
						<a href="javascript:;">
							<i class="ion ion-ios-settings-strong"></i>
							<span class="text">Configuración</span>
							<i class="arrow ion-chevron-left"></i>
						</a>
						<ul class="inner-drop list-unstyled">
							<li><a href="{{url('config/user')}}">Usuarios</a></li>

						</ul>
						<ul class="inner-drop list-unstyled">
							<li><a href="{{url('config/user')}}">Campos</a></li>
						</ul>
					</li>



				</ul> <!-- #end navigation -->
			</nav>

			<!-- nav-foot -->
			<footer class="nav-foot">
				<p>{{date('Y')}} &copy; <span>Expopack</span></p>
			</footer>

		</aside>
		<!-- #end main-navigation -->

		<!-- content-here -->
		<div class="content-container" id="content">
            <div class="page page-ui-tabs">
                @if(Session::has('success'))
                    <div class="alert alert-success flash">{{ Session::get('success') }}</div>
                @endif

                @if(Session::has('error'))

                    <div class="alert alert-danger">
                    	<button type="button" class="close" data-dismiss="alert">
                    		<span aria-hidden="true">×</span>
                    	</button>
                    	<div>{{ Session::get('error') }}</div>
                    </div>
                @endif

                @yield('content')
            </div>
		</div> <!-- #end content-container -->

	</div> <!-- #end main-container -->


	<!-- theme settings -->
	<div class="site-settings clearfix hidden-xs" style="display: none !important;">
		<div class="settings clearfix">
			<div class="trigger ion ion-settings left"></div>
			<div class="wrapper left">
				<ul class="list-unstyled other-settings">
					<li class="clearfix mb10">
						<div class="left small">Nav Horizontal</div>
						<div class="md-switch right">
							<label>
								<input type="checkbox" id="navHorizontal">
								<span>&nbsp;</span>
							</label>
						</div>


					</li>
					<li class="clearfix mb10">
						<div class="left small">Fixed Header</div>
						<div class="md-switch right">
							<label>
								<input type="checkbox"  id="fixedHeader">
								<span>&nbsp;</span>
							</label>
						</div>
					</li>
					<li class="clearfix mb10">
						<div class="left small">Nav Full</div>
						<div class="md-switch right">
							<label>
								<input type="checkbox"  id="navFull">
								<span>&nbsp;</span>
							</label>
						</div>
					</li>
				</ul>
				<hr/>
				<ul class="themes list-unstyled" id="themeColor">
					<li data-theme="theme-zero" class="active"></li>
					<li data-theme="theme-one"></li>
					<li data-theme="theme-two"></li>
					<li data-theme="theme-three"></li>
					<li data-theme="theme-four"></li>
					<li data-theme="theme-five"></li>
					<li data-theme="theme-six"></li>
					<li data-theme="theme-seven"></li>
				</ul>
			</div>
		</div>
	</div>
	<!-- #end theme settings -->




	<!-- Dev only -->
	<!-- Vendors -->


	<script src="{{asset('/js/all.js')}}"></script>
	
	<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.4/build/jquery.datetimepicker.full.min.js'></script>
	
	

	@yield('script')

    <!-- PREVENT ENTER KEY ON FORMS -->
    <script>
    $(document).on('keyup keypress', 'form input', function(e) {
      if(e.which == 13) {
        e.preventDefault();
        return false;
      }
    });

    $('#custom_date').datetimepicker({
	formatTime:'h:i',
	formatDate:'d.m.Y',
	//defaultDate:'8.12.1986', // it's my birthday
	defaultDate:'+03.01.1970', // it's my birthday
	defaultTime:'10:00',
	timepickerScrollbar:true
});

 $('#fecha_evento').datetimepicker({
	formatTime:'h:i',
	formatDate:'d.m.Y',
	//defaultDate:'8.12.1986', // it's my birthday
	defaultDate:'+03.01.1970', // it's my birthday
	defaultTime:'10:00',
	timepickerScrollbar:true
});




 $('#fechae').datetimepicker({
	formatTime:'h:i',
	formatDate:'d.m.Y',
	//defaultDate:'8.12.1986', // it's my birthday
	defaultDate:'+03.01.1970', // it's my birthday
	defaultTime:'10:00',
	timepickerScrollbar:true
});

 

$.datetimepicker.setLocale('es');


$(function () {        
    $('#picture').change(function () {

        //because this is single file upload I use only first index
        var f = this.files[0]

        //here I CHECK if the FILE SIZE is bigger than 8 MB (numbers below are in bytes)
        if (f.size > 2388608 || f.fileSize > 2388608)
        {
           //show an alert to the user
           alert("Allowed file size exceeded. (Max. 2 MB)")

           //reset file upload control
           this.value = null;
        }
    })
});


    </script>
</body>
</html>