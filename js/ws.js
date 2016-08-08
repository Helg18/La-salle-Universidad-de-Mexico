var initial_data = {},
    C1 = {},
    C2 = {},
    C3 = {},
    C6 = {},
    C9 = {},
    current_posts = [],
    current_label = false,
    current_yymm = false,
    tmp_posts = [],
    modal = '',
    blog = [],
    AO = {},
    offer = false,
    slider = false,
    select_box = false;


$(document).ready(function(){

    var id = getUrlVars()["id"];
    if(id==0 || id==""){id=1;}

    getInitialData(id);


    
    modal = $('[data-remodal-id=modal2]').remodal({
        modifier: 'with-red-theme'
    });
    

    $( "#buscarpost" ).click(function() {
            
            var x = document.getElementById("postdls").options.length;
            var datalists = document.getElementById("postdls");
            var flag=0;
            for(con=0;con<x;con++){

                
                var valorbuscar = document.getElementById("buscar").value;   
                
                
                if(datalists.options.namedItem(valorbuscar).value !== null && flag==0)
                {
                   var id = datalists.options.namedItem(valorbuscar).value;

                   $.post( url + 'posts',{id:id} ,function(data){

                    
                    if(data.rows>0){
                         window.location="notice.html?id="+id;
                    }

                   });

                   flag=1;
                }
        }

    });


    });



function getInitialData(lang){

    if(lang==1 || lang=="" || lang==undefined){ruta = 'initial-data';}else{
        ruta = 'initial-data-e';
    }

    $.get( url + ruta, function(data){

        initial_data = data;
        for (con=0;con<initial_data.categories.length;con++){

            var d = initial_data.categories[con];
            var datalist = $('#postdl');
            var datalists = $('#postdls');

            $.each(d.posts, function(id,post){
                var opt = $("<option  >"+ post.title +"</option>").attr("value", post.title );
                var opts = $("<option id='"+post.title+"' >"+ post.title +"</option>").attr("value", post.id );
                datalist.append(opt);    
                datalists.append(opts);    

            }); 

        }

        C1 = new Category1();
        C2 = new Category2();
        C3 = new Category3();
        C6 = new Category6();
        C9 = new Category9();
        AO = new AcademicOffer();


        calendario();
        calendario_importante();
        noticias_blog();
        vinculacion_empresarial();
        investigacion();
        noticias();
        lineatiempo();

        document.getElementById("myCarouselLaSalle").style.display = "none";

    });
}



function Category1(){
    /** Universidad La Salle **/


    var d       = initial_data.categories[0],
        html    = '',
        c       = {}
        ;

    

  //console.log(d);


    this.show =  function(){
       
        

        $.each(d.posts, function(index,post){
            html = html + '<div id="_btn_select'+index+'" class="subMenuUnoUniversidad" onclick="C1.showContent('+ index +')">' + post.title + '</div>';
        });

        $('.ten.columns.subMenuUniversidad').html(html);
        this.showContent(0);
    }



    this.showContent =  function(index){
        //Esta funcion pintaria el submenu
        var post = d.posts[index];

        //Comento lo que hacia originalmente
        //ya que necesitamos meter un nuevo submenu
        //***********
        //$('.textoTituloUniversidad p').html(post.subtitle);
        //$('.descripcionTituloUniversidad.ws').html(post.paragraph_1);
        //$('.parrafoUniversidad.ws').html(post.paragraph_1);
        //$('.seccion_1.ws').html(post.video_iframe + " " +post.picture_html);

        var html = '';
        //Recorremos a sus hijos
        //console.log(post);
        $.each(post.children, function(index2,kid){
            //Aqui armamos los cuadros del nuevo submenu el cual no existe
            //Con la variable kid tengo acceso a su hijo uno por uno

            //Ejemplo
            html = html + '<div class="cuadrosSubmenu" onclick="C1.showContent2('+ index+',' + index2 +')">' + kid.title + '</div>';


        });
        $('#universidadShow .ten.columns.submenu').html(html);
        this.showContent2(index,0);
        ocultarCaorusel();
		// Si es historia, va a quitar los submenus
			if(index == 6){		
				$(".cuadrosSubmenu").css("display","none");
			}else{
				$(".cuadrosSubmenu").css("display","inherit");
			}
		// Si es identidad va a mostrar un carousel
			if(index == 7){
				
			}else{
				
			}
    }

    this.showContent2 =  function(index,index2){

        //Esta funcion pintaria el contenido que hay cuando le damos clic al nuevo submenu
        var post = d.posts[index].children[index2]; //leo el hijo y ya tengo acceso a el

        //aqui ya pinto el contenido del texto
        $('#universidadShow .textoTituloUniversidad p').html(post.subtitle  ? post.subtitle : '');
        // $('#universidadShow .descripcionTituloUniversidad-.ws').html(post.paragraph_1);
        $('#universidadShow .descripcionTituloUniversidad-.ws ').html(post.paragraph_1);
		if(index == 0){ // Somos la salle
			$("#mosaico-somos-salle").css("display","inherit");
			$(".video-somos-salle").css("display","inherit");
			$("div#imagenes-relacionadas").css("display","inherit"); // imagenes
			$("div#links-referencia").css("display","inherit"); // Links
			$("div#descargables").css("display","none"); // Descargables
		}if(index == 1){ // Mision, Vision
			$("#mosaico-somos-salle").css("display","none");
			$(".video-somos-salle").css("display","none");
			$("div#imagenes-relacionadas").css("display","none"); // imagenes
			$("div#links-referencia").css("display","none"); // Links
			$("div#descargables").css("display","none"); // Descargables
		}
		if(index == 2){ // Modelo educativo
			$("#mosaico-somos-salle").css("display","inherit");
			$(".video-somos-salle").css("display","inherit");
			$("div#imagenes-relacionadas").css("display","none"); // imagenes
			$("div#links-referencia").css("display","none"); // Links
			$("div#descargables").css("display","inherit"); // Descargables
		}
		if(index == 3){	// Acreditaciones
			$("#mosaico-somos-salle").css("display","none");
			$(".video-somos-salle").css("display","none");
			$("div#imagenes-relacionadas").css("display","none"); // imagenes
			$("div#links-referencia").css("display","none"); // Links
			$("div#descargables").css("display","none"); // Descargables
			$("div#tabla-excel").css("display","inherit"); // Tabla en modal
			$(".acre-mosaico").css("display","inherit"); // Mosaico de acreditaciones
		}else{
			$("div#tabla-excel").css("display","none"); // Tabla en modal
			$(".acre-mosaico").css("display","none"); // Mosaico de acreditaciones
		}
		if(index == 4){	// PDI
			$("div#mosaico-somos-salle").css("display","inherit");
			$(".video-somos-salle").css("display","none");
			$("div#imagenes-relacionadas").css("display","none"); // imagenes
			$("div#links-referencia").css("display","none"); // Links
			$("div#descargables").css("display","inherit"); // Descargables
			//$(".carrusel-somos-salle").css("display","inherit"); // Carrusel
		}else{
			//$(".carrusel-somos-salle").css("display","none"); // Carrusel
		}		
		if(index == 5){	// Reglamentos
			$("#mosaico-somos-salle").css("display","inherit");
			$(".video-somos-salle").css("display","none");
			$("div#imagenes-relacionadas").css("display","none"); // imagenes
			$("div#links-referencia").css("display","none"); // Links
			$("div#descargables").css("display","inherit"); // Descargables
		}
		if(index == 6){	// Historia
			$("#mosaico-somos-salle").css("display","inherit");
			$(".video-somos-salle").css("display","none");
			$("div#imagenes-relacionadas").css("display","none"); // imagenes
			$("div#links-referencia").css("display","inherit"); // Links
			$("div#descargables").css("display","none"); // Descargables
		}
		if(index == 7){	// Identidad
			
			$(".video-somos-salle").css("display","none");
			$("div#imagenes-relacionadas").css("display","inherit"); // imagenes
			$("div#links-referencia").css("display","none"); // Links
			$("div#descargables").css("display","inherit"); // Descargables
			
			if(index2 == 4){ // Submenú - Monumentos
				$("#mosaico-somos-salle-monumentos").css("display","inherit");
				$("#mosaico-somos-salle").css("display","none");
			}else{
				$("#mosaico-somos-salle").css("display","inherit");
				$("#mosaico-somos-salle-monumentos").css("display","none");
			}
			
		}
		if(index == 8){
			$("#mosaico-somos-salle").css("display","none");
		}
		
		if(index == 9){	// Red La Salle
			if(index2 == 0){ // Universidades en mexico
				$(".descripcionTituloUniversidad-").append('<img src="images/nuevosArtes/servicio/mx.png" class="mapa-mx">');
				$(".pines-mapa-mx").css("display","inherit"); // Pines
				$(".row-mx").css("display","inherit");
				$(".row-mundo").css("display","none");
				$("#azules-red").css("display","inherit");
			}else{
				$(".mapa-mx").remove();
				$(".pines-mapa-mx").css("display","none");
			}
			if(index2 == 1){ // Universidades en el mundo
				$(".descripcionTituloUniversidad-").append('<img src="images/nuevosArtes/servicio/mapa-mundo.png" class="mapa-mundo">');
				$(".row-mundo").css("display","inherit");
				$(".ul-mundo").css("display","inherit");				
				$(".row-mx").css("display","none");		
				$("#azules-red").css("display","inherit");
				$(".pines-mapa-mundo").css("display","inherit"); // Pines
			}else{
				$(".pines-mapa-mundo").css("display","none");
				$(".mapa-mundo").remove();
			}
		}else{
			$("#azules-red").css("display","none");
			$(".ul-mundo").css("display","none");	
		}
    }

    this.show();
}

function Category2(){
    /** Vida Estudiantil **/


    var d       = initial_data.categories[1],
        html    = '',
        c       = {}
        ;


    this.show =  function(){
        
        $.each(d.posts, function(index,post){
            html = html + '<div class="subMenuUnoServicios" onclick="C2.showContent('+ index +')">' + post.title + '</div>';
            

        });

        $('.ten.columns.subMenuAccionSocial.vidaestudiantil').html(html);
        this.showContent(0);
    }

    this.showContent =  function(index){
        var post = d.posts[index]
        html = '';
        $('.textoTituloVida p').html(post.subtitle);

        html = html + '<section class="image-grid">';
        // html = html + '<ul id="og-grid" class="og-grid">';
        con=1;
        $.each(post.children, function(index,child){

            // html = html + '<div class="cuadrosVida">' +
            //     '<h6 class="azulFuerteInvetigacion">' + child.title + '</h6>' +
            //     '<p class="scroll-box-140">' +child.paragraph_1_html+ '</p>' +
            //     '</div>'
            // ;

            // html = html + '<li>'+                        
            //         '<a href="#" data-largesrc="images/nuevosArtes/vida_estudiantil/1.jpg" data-title="Azuki bean" data-description= ""'+
            //         '<span class="titulos-cuadros-azulitos">' + child.title + '</span><img src="images/nuevosArtes/vida_estudiantil/1.jpg" alt="img01"/>'+
            //         '</a>'+
            //         '</li>';

            html = html + '<article class="image__cell is-collapsed">'+
                          '<div class="image--basic">'+
                          '<span class="titulos-cuadros-azulitos">' + child.title + '</span>'+
                          '<a href="#expand-jump-0"><img id="expand-jump-0" class="basic__img" src="images/nuevosArtes/vida_estudiantil/'+con+'.jpg" alt="Fashion 8"></a>'+
                          '<div class="arrow--up"></div>'+
                          '</div>'+
                          '<div class="image--expand">'+
                          // '<a href="#close-jump-0" class="expand__close"></a>'+
                          '<img class="image--large" src="images/nuevosArtes/vida_estudiantil/'+con+'.jpg" alt="Fashion 8">'+
                          '<div class="descripcion-cuadros-azules">' +child.paragraph_1_html+ '</div>'+
                          '</div>'+
                          '</article>';
                    
                    con=con+1;

        });

        // html = html +'<ul></div>';
        html = html + '</section>';

        $('#vidaShow .ocultarContenidoSubMenu .container .row').html(html);

        // Grid.init();

         var $cell = $('.image__cell');

        $cell.find('.image--basic').click(function() {
          var $thisCell = $(this).closest('.image__cell');
          
          if ($thisCell.hasClass('is-collapsed')) {
          $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed');
          $thisCell.removeClass('is-collapsed').addClass('is-expanded');
          } else {
          $thisCell.removeClass('is-expanded').addClass('is-collapsed');
          }
        });

        $cell.find('.expand__close').click(function(){
          
          var $thisCell = $(this).closest('.image__cell');
          
          $thisCell.removeClass('is-expanded').addClass('is-collapsed');
        });

        cuadrosDeVida();
        ocultarCaorusel();

    }
        $("#myCarouselLaSalle").css({ 'display': "inherit" });
    this.show();
}

function cuadrosDeVida(){
    $('.cuadrosVida').hover( function(){
        $('.cuadrosVida').removeClass('cuadroVidaActivo');
        $(this).addClass('cuadroVidaActivo');
    }, function(){
        $('.cuadrosVida').removeClass('cuadroVidaActivo');
    });
}

function ocultarCaorusel(){

    $('#_btn_select0').click( function(){
        $("#myCarouselLaSalle").css({ 'display': "none" });
    });

    $('#_btn_select1').click( function(){
        $("#myCarouselLaSalle").css({ 'display': "none" });
    });
    $('#_btn_select2').click( function(){
        $("#myCarouselLaSalle").css({ 'display': "none" });
    });
    $('#_btn_select3').click( function(){
        $("#myCarouselLaSalle").css({ 'display': "none" });
    });
    $('#_btn_select4').click( function(){
        $("#myCarouselLaSalle").css({ 'display': "none" });
    });
    $('#_btn_select5').click( function(){
        $("#myCarouselLaSalle").css({ 'display': "none" });
    });
    $('#_btn_select7').click( function(){
        $("#myCarouselLaSalle").css({ 'display': "inherit" });	// Aqui se va a mostrar un carousel con diferente contenido, por ahora solo esta el mismo que el de la linea de tiempo, por eso se esta mostrando solo para verlo visualmente
    });
    $('#_btn_select8').click( function(){
        $("#myCarouselLaSalle").css({ 'display': "none" });
    });
    
}

function mostrarCaorusel(){
    
    $('#_btn_select6').click( function(){
        $("#myCarouselLaSalle").css({ 'display': "" });  
    });

}

function Category3(){
    /** Servicios **/


    var d       = initial_data.categories[2],
        html    = '',
        c       = {}
        ;


    this.show =  function(){
        //console.log('Universidad La Salle');
        //console.log(d.posts);
        $.each(d.posts, function(index,post){
            html = html + '<div class="subMenuUnoServicios" onclick="C3.showContent('+ index +')">' + post.title + '</div>';
            
        });

        $('.ten.columns.subMenuAccionSocial.servicios').html(html);
        this.showContent(0);
    }

    this.showContent =  function(index){
        var post = d.posts[index];
        $('.textoTituloServicios p').html(post.subtitle);
        
        $('.descripcionTituloServicios.ws').html(post.paragraph_1_html);
        $('.parrafoServicios.ws').html(post.paragraph_2_html);
        $('.seccion_3.ws').html(post.video_iframe +" "+post.picture_html);
		
        ocultarCaorusel();
		
		if(index == 1){
			// Insertamos subtitulos de ulsabus
			$(".contenedorDiagonaTextoServicios").append('<div class="contenedor-subtitulos-ulsabus"> <div class="subtitulos-ulsabus" onclick="ulsabus(1);">Ruta 1 <br>Glorieta Vaqueritos</div><div class="subtitulos-ulsabus" onclick="ulsabus(2);">Ruta 2 <br>Indios Verdes</div><div class="subtitulos-ulsabus" onclick="ulsabus(3);">Ruta 3 <br>Valle Dorado</div><div class="subtitulos-ulsabus" onclick="ulsabus(4);">Ruta 4 <br>Aragón</div><div class="subtitulos-ulsabus" onclick="ulsabus(5);">Ruta 5 <br>Perisur</div><div class="subtitulos-ulsabus" onclick="ulsabus(6);">Ruta 6 <br>Torres Lindavista</div><div class="subtitulos-ulsabus" onclick="ulsabus(7);">Ruta 7 <br>Mundo E</div><div class="subtitulos-ulsabus" onclick="ulsabus(8);">Ruta 8 <br>Ecatepec</div></div>');
			$('.seccion_3.ws').append('<div class="clearfix tabla-ulsabus" style="display: block;"><div class="alignleft"> <h4>Paradas de Venida</h4> <ul> <li> <div><strong>Miramontes y Periférico</strong></div><div>Bajando el puente viniendo de Xochimilco</div><div>Horario 5:50am</div></li><li> <div><strong>Miramontes y Calzada del Hueso</strong></div><div>En la parada del camión (Liverpool)</div><div>Horario 5:51am</div></li><li> <div><strong>Miramontes y Calzada de las Bombas</strong></div><div>En la esquina de la Alameda Sur</div><div>Horario 5:55am</div></li><li> <div><strong>Miramontes tienda Soriana</strong></div><div>En la Soriana en la parada del camión</div><div>Horario 5:58am</div></li><li> <div><strong>Miramontes y Calzada de la Virgen</strong></div><div>En la tienda del Oxxo</div><div>Horario 6:01am</div></li><li> <div><strong>Miramontes y Avenida Tasqueña</strong></div><div>En la Farmacia del Ahorro</div><div>Horario 6:04am</div></li><li> <div><strong>Miguel Ángel de Quevedo y Pacifico</strong></div><div>En la parada del camión de la Bahía</div><div>Horario 6:10am</div></li><li> <div><strong>Miguel Ángel de Quevedo y Melchor Ocampo</strong></div><div>Frente a la tienda Mega Comercial Mexicana</div><div>Horario 6:13am</div></li><li> <div><strong>Miguel Ángel de Quevedo y Av. Universidad</strong></div><div>En la parada del camión Esquina Av. Universidad</div><div>Horario 6:15am</div></li><li> <div><strong>Miguel Ángel de Quevedo y Av. Insurgentes</strong></div><div>Frente a la Europea</div><div>Horario 6:17am</div></li><li> <div><strong>Av. Insurgentes #1940</strong></div><div>En la panadería El Globo</div><div>Horario 6:18am</div></li><li> <div><strong>Av. Insurgentes y Calle Francia</strong></div><div>En la esquina de calle Francia</div><div>Horario 6:19am</div></li><li> <div><strong>Av. Insurgentes y Rio Mixcoac</strong></div><div>Frente a la Comercial Mexicana</div><div>Horario 6:20am</div></li><li> <div><strong>Río Mixcoac y Calle Cataluña</strong></div><div>En la esquina de calle Cataluña</div><div>Horario 6:22am</div></li><li> <div><strong>Av. Patriotismo y Río Mixcoac</strong></div><div>En el puente peatonal</div><div>Horario 6:25am</div></li><li> <div><strong>Av. Patriotismo y Calle 17</strong></div><div>En la esquina de calle 17</div><div>Horario 6:28am</div></li><li> <div><strong>Universidad La Salle</strong></div><div>Calle Benjamín Hill en la Biblioteca</div><div>Horario 6:30am</div></li></ul> </div><div class="alignleft"> <h4>Paradas de Regreso</h4> <ul> <li> <div><strong>Universidad La Salle</strong></div><div>Calle Benjamín Hill en la Biblioteca</div><div>Horario 14:15hrs</div></li><li> <div><strong>Avenida Revolución y Calle 2</strong></div><div>En la esquina de calle 2</div><div>Horario 14:27hrs</div></li><li> <div><strong>Avenida Revolución y Calle 17</strong></div><div>En el hotel Holiday Inn</div><div>Horario 14:29hrs</div></li><li> <div><strong>Río Mixcoac y Avenida Revolución</strong></div><div>En la Feria</div><div>Horario 14:31hrs</div></li><li> <div><strong>Río Mixcoac e Insurgentes</strong></div><div>En la tienda Interceramic</div><div>Horario 14:32hrs</div></li><li> <div><strong>Av. Universidad y Calle 5 de Mayo</strong></div><div>En la tienda Oxxo</div><div>Horario 14:34hrs</div></li><li> <div><strong>Av. Universidad y Minerva</strong></div><div>En el Samborns</div><div>Horario 14:36hrs</div></li><li> <div><strong>Av. Universidad y Miguel A. de Quevedo</strong></div><div>En la panadería Santo Domingo</div><div>Horario 14:40hrs</div></li><li> <div><strong>Miguel A. de Quevedo y Melchor Ocampo</strong></div><div>En la Mega Comercial parada del camión</div><div>Horario 14:48hrs</div></li><li> <div><strong>Miguel Ángel de Quevedo y Pacifico</strong></div><div>En la gasolinería en la esquina</div><div>Horario 14:51hrs</div></li><li> <div><strong>Metro Tasqueña</strong></div><div>En la bahía de trolebuses</div><div>Horario 14:56hrs</div></li><li> <div><strong>Miramontes y Tasqueña</strong></div><div>Frente a la Farmacia del Ahorro</div><div>Horario 14:57hrs</div></li><li> <div><strong>Miramontes y Calzada de la Virgen</strong></div><div>En la esquina de Calzada de la Virgen</div><div>Horario 14:59hrs</div></li><li> <div><strong>Miramontes tienda Soriana</strong></div><div>En la panadería La Estrella frente al Soriana</div><div>Horario 15:02hrs</div></li><li> <div><strong>Miramontes y Mar de la Tranquilidad</strong></div><div>En la nevería La Michoacana</div><div>Horario 15:05hrs</div></li><li> <div><strong>Miramontes y Av. Tzinas</strong></div><div>En la tienda del Oxxo</div><div>Horario 15:07hrs</div></li><li> <div><strong>Miramontes y Calzada de las Bombas</strong></div><div>En el banco Banorte</div><div>Horario 15:09</div></li><li> <div><strong>Miramontes y Calzada del Hueso</strong></div><div>En la Comercial Mexicana</div><div>Horario 15:15hrs</div></li><li> <div><strong>Miramontes y Avenida de las Brujas</strong></div><div>En la papelería Lumen</div><div>Horario 15:18hrs</div></li><li> <div><strong>Miramontes y Avenida Acoxpa</strong></div><div>En el Sanborns</div><div>Horario 15:20hrs</div></li><li> <div><strong>Glorieta de Vaqueritos</strong></div><div>Puente peatonal antes de subir los puentes de la glorieta</div><div>Horario 15:25</div></li></ul> </div></div>')
			$('.imagenes-servicios center img').attr('src','images/nuevosArtes/servicio/ulsabus/1.png');
			$("#mosaico-servicios").css("display","none");
			$('.contacto-form').css('display','none');
		}else{
			$(".contenedor-subtitulos-ulsabus").remove();
			$('div.tabla-ulsabus').remove();
		}
		if(index == 2){	// Hospedaje
			$("#mosaico-servicios").css("display","inherit");
			$('.contacto-form').css('display','none');
			$("#mosaico-servicios").append('<div class="row cuadros-grises-servicios"><div class="col-md-6"><h5>INFORMES</h5><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper eros id tortor lacinia, mollis iaculis metus lobortis.</span></div><div class="col-md-6"><h5>INFORMES</h5><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper eros id tortor lacinia, mollis iaculis metus lobortis.</span></div></div>');
		}else{
			$('.cuadros-grises-servicios').remove();
		}
		if(index == 3){ // Renta de instalaciones
			$('.contacto-form').css('display','inherit');
			$("#mosaico-servicios").css("display","inherit");
			$(".video-servicios").css("display","inherit");
		}else{
			$(".video-servicios").css("display","none");
		}
		if(index == 4){	// Estacionamiento
			
			$("#mosaico-servicios").css("display","none");
			$('.contacto-form').css('display','inherit');
			var imgEstacionamiento = $('<img src="images/nuevosArtes/servicio/estacionamiento.jpg" class="mapa-estacionamiento">');
			$(".descripcionTituloServicios").prepend(imgEstacionamiento);	 // Imagen (por ahora) de un mapa
			$(".descripcionTituloServicios").attr('style','width: 100%;margin: 0;');			
			$('#pines-estacionamiento').css('display','inherit');
		}else{
			$(".mapa-estacionamiento").remove();
			$(".descripcionTituloServicios").attr('style','');
			$('#pines-estacionamiento').css('display','none');
		}
		
	}
	

    this.show();
}

function Category6(){
    /** Acción social **/


    var d       = initial_data.categories[5],
        html    = '',
        c       = {}
        ;



    this.show =  function(){
        $.each(d.posts, function(index,post){
            html = html + '<div class="subMenuUnoAccionSocial" onclick="C6.showContent('+ index +'); ">' + post.title + '</div>';
        });

        $('.ten.subMenuAccionSocial.accion').html(html);
        this.showContent(0);
    }

    this.showContent =  function(index){

        var post = d.posts[index];
        $('.textoTituloAccionSocial p').html(post.subtitle);
        $('.descripcionTituloAccionSocial.ws').html(post.paragraph_1_html);
        $('.parrafoAccionSocial.ws').html(post.paragraph_2_html);
        $('.seccion_6.ws').html(post.video_iframe +" "+post.picture_html);

        mostrarCaorusel();

    }

    this.show();
	
	$('div.subMenuUnoAccionSocial').hide(); // No van submenus
	$('div#mosaico-accion-social').show();	// Mostramos cuadro tipo google
}

function Category9(){
    /** Contacto **/


    var d       = initial_data.categories[8],
        html    = '',
        htmls   = '',
        c       = {}
        ;

    this.show =  function(){

        $.each(d.posts, function(index,post){
            html = html + '<div class="subMenuUnoAccionSocial" onclick="C9.showContent('+ index +')">' + post.title + '</div>';
        });

        $('.ten.subMenuAccionSocial.contacto').html(html);
        this.showContent(0);
    }
    
    this.showContent =  function(index){
        htmls='';
        var post = d.posts[index];
        $('#contactoShow .textoTituloContacto p').html(post.title);
        $('#contactoShow .ten.columns.submenu').html(htmls);
        
        $.each(post.children, function(index2,kid){

            
            if(kid.title != ""){
                htmls = htmls + '<div class="cuadrosSubmenu" onclick="C9.showContent2('+ index+',' + index2 +')">' + kid.title + '</div>'; 
                $('#contactoShow .ten.columns.submenu').html(htmls);
            }else{$('#contactoShow .ten.columns.submenu').html('');}


        });
        ocultarCaorusel();
		
		$('.formContacto').hide();
		if(index == 0){
			$('#overs-atencion').show();
		}else{
			$('#overs-atencion').hide();
		}
        if(index == 2){
			$('#mosaico-contacto,.containerMapa').show();
		}else{
			$('#mosaico-contacto,.containerMapa').hide();
		}
		if(index == 3){
			$('.formContacto').show();
		}else{
			$('.formContacto').hide();
		}
    }

    this.showContent2 =  function(index,index2){
		$('.descripcionTituloContacto').fadeIn('slow');	// Mostramos la descripcion del contacto
        //Esta funcion pintaria el contenido que hay cuando le damos clic al nuevo submenu
        var post = d.posts[index].children[index2]; //leo el hijo y ya tengo acceso a el
        
        //aqui ya pinto el contenido del texto
        // $('#contenedorTituloContactoc p').html(post.paragraph_1_small_html  ? post.paragraph_1_small_html : '');
         $('.descripcionTituloContacto .contactoShow .contenedorDiagonalContacto  p').html(post.paragraph_1_small_html  ? post.paragraph_1_small_html : '');
        // $('#contactoShow .descripcionTituloUniversidad-.ws').html(post.paragraph_1);
		
		

    }

    this.show();
}


function calendario(){
    var ul = $('#calendario .menuSecciones ul')
    noticia = '';

    //Limpiando las categorias del calendario
    ul.html('');
    
    

    //Categorias del calendario
    ul.append('<li><button class="seccion academicas active" id="openUno" data-label-id="0"> Todos </button></li>');
    
    $.each(initial_data.calendar_labels, function(index,label){
        ul.append('<li><button class="seccion academicas" id="openUno" data-label-id="'+label.id+'">' + label.name+ '</button></li>');
    });


    $('.seccion.academicas').click(function(){

        element = this;

        if($(element).hasClass('active')){
            $(element).removeClass('active');
            current_label = false;
            marcaDiasCalendario();
        }else{
            $('.seccion.academicas').removeClass('active');
            $(element).addClass('active');
            current_label = $(element).data('label-id');
            marcaDiasCalendario();
        }


    })

    //Calendario de enmedio

    $(".responsive-calendar").responsiveCalendar({
        time: initial_date,
        /*events: {
         //"2016-01-18": {"number": 5, "url": ""},
         "2016-01-18": {"url": "http://kreativeco.com"},
         "2016-02-01": {"url": "javascript: alert('hola')"},
         "2016-06-12": {}
         },*/
        onMonthChange: function(){

            //console.log(this);

            var tmp = {
                    month: this.currentMonth,
                    year: this.currentYear
                }
                ;

            tmp.month = tmp.month+1;
            if(tmp.month==13){
                tmp.month==1;
                tmp.year = tmp.year+1;
            }
            

            marcaDiasCalendario(tmp);


        }
    });

    muestraPrevioEventos(initial_data.calendar_important);
    marcaDiasCalendario({month: initial_month, year: initial_year});
}

function muestraPrevioEventos(posts, custom_date){

    
    if(!posts && custom_date){
        posts = current_posts[custom_date];
    }

    //Escondiendo las 4 noticias
    $('.menuCalendario .effects.clearfix').children('div').hide();

    tmp_posts = posts;
    //Mostrando solo las que existan
    $.each(posts, function(index,post){

        if(index==0){
            noticia = '.imgNoticiaCalendario';
        }else if(index==1){
            noticia = '.imgNoticiaCalendario2';
        }else if(index==2){
            noticia = '.imgNoticiaCalendario3';
        }else if(index==3){
            noticia = '.imgNoticiaCalendario4';
        }else{
            noticia = 'yasepaso';
        }

        $(noticia).show();
		
        var NombresMeses = ["Enero", "Febrero", "Marzo","Abril", "Mayo", "Junio", "Julio","Agosto", "Septiembre", "Octubre","Noviembre", "Diciembre"];
        fecha_hora_mostrar = moment(post.custom_date).format('DD/MM/YYYY h:mm:ss a');  
		
		var solo_fecha = moment(post.custom_date).format('DD/MM/YYYY');  
		var solo_hora = moment(post.custom_date).format('h:mm a');  
		var fecha = new Date(fecha_hora_mostrar);
		var dia = moment(post.custom_date).format('DD');
		var mes = moment(post.custom_date).format('M');
		var mes_name = NombresMeses[mes - 1];
		var ano = moment(post.custom_date).format('YYYY');
		
		
     
       // $(noticia + ' .title').html(post.title+'<br>'+'Fecha:'+fecha_hora_mostrar);
		$(noticia + ' .title').html(post.title);
        //$(noticia + ' .tituloCalendario').html(post.title.substring(0,30) + '...');
		$(noticia + ' .tituloCalendario2').html(post.title + '<br>' + solo_fecha + '<br>' + solo_hora + '<br>' + post.paragraph_1_html.substring(0,50) + '...');
		$(".fecha-cal").html('<span class="dia-cal">' + dia + '</span> ' + mes_name +' ' + ano);
        $(noticia + ' .img-post').attr('src',post.picture_url);
        $(noticia + ' a').data('index',index);


    });
}

function marcaDiasCalendario(aamm){

    if(!aamm) aamm=current_yymm;
    aamm.label_id = current_label;
    current_yymm = aamm;

    $.post( url + 'calendar-events', aamm, function(data){
        
        current_posts = [];
        $(".responsive-calendar").responsiveCalendar('clearAll');
        $.each(data.posts, function(index,post){
            
            var obj = {};
            obj[post.custom_date] = {url: "javascript: muestraPrevioEventos(false,'" + post.custom_date + "')"};

            if (current_posts[post.custom_date]){
                current_posts[post.custom_date].push(post);
            }else{
                current_posts[post.custom_date] = [post];
            }
            $(".responsive-calendar").responsiveCalendar('edit',obj);
        });

    });
}

function open_modal(element){
    

 //    post = tmp_posts[$(element).data('index')];
    
 //    $('.custom-modal img').attr('src',post.picture_url);
 //    $('.custom-modal h5').html(post.title);
	// $('#textogeneral').html(post.paragraph_1_html); // Se puso como div y no como textarea

 //    modal.open();
}

function calendario_importante(){

    var tmp = '.bjqs';

    $(tmp).html('');
    var html = '';

    $.each(initial_data.calendar_important, function(index,post) {
        html = html +
            '<li>' +
            '<div class="overlayDateDestacado">' +
            '<div class="date_event_destacado"><p>'+post.custom_date_split.day_1+'</p><p><span>'+post.custom_date_split.day_2+'</span> '+post.custom_date_split.month+' '+post.custom_date_split.year+'</p></div>' +
            '<div class="desc_event_destacado">' +
            '<div class="desc_text"><p>'+post.title+'</p></div>' +
            '</div>' +
            '</div>' +
            '<img src="'+post.picture_url+'" alt=""  />' +
            '</li>';
    });


    $(tmp).html(html);

    slider_calendar(); //esta funcion viene de /js/slider/script.js
}


function noticias_blog(){
    $('.noticias').html('');
    var tmp = '<div id="effect-1" class="effects clearfix">'
    count = 0;

    $.each(initial_data.blog, function(index,post) {


        var tmp2 = post.is_important ? 'destacada' : '';

        if(post.is_important){
            count+=2;
        }else{
            count+=1;
        }

        if(count>5){
            tmp = tmp + '</div><div id="effect-1" class="effects clearfix">';
            count=0;
        }

        tmp = tmp +
            '<div class="imgNoticia '+tmp2+'">'+
            '<div class="overlayTituloNoticia">'+
            '<h6>'+post.title.substring(0,50)+'... </h6>'+
            '</div>'+
            '<img src="'+post.picture_url+'" alt="">'+
            '<div class="overlayNoticia">'+
            '<h6>'+post.title+'</h6>'+
            '<p>'+post.paragraph_1_html.substring(0,50)+'...</p>'+
            
            '</div>'+
            '</div>';


        

    });

    tmp = tmp + '</div>';
    $('.noticias').html(tmp);
    index(); 


    $(".btn_noticia_more").on( "click", function() {

        var index = $(this).data('index'),
            post = initial_data.blog[index];

        $('#desc_noticias h3').html(post.title);
        $('#desc_noticias .desc_desc').html(post.paragraph_1_html);



        if($('#desc_noticias').is(":visible") ){
            $('#desc_noticias').hide("slow");
        }else{
            $('#desc_noticias').show("slow");
            $("#changeTextTitulo").text('Noticias');
        }
    });


}

function vinculacion_empresarial(){


    $('#vinculacionEmpresarialShow .row').html('');
    var tmp = '<div class="contenedorFilaVinculacion">'
    count = 0;

    $.each(initial_data.categories[6].posts, function(index,post) {
        if(count>2){
            tmp = tmp + '</div><div class="contenedorFilaVinculacion">';
            count=0;
        }

        tmp = tmp +
            '<div class="segundaFilaVinculacion">'+
            '<div class="textoVinculacion">'+post.title+'</div>'+
            '<div class="textoVinculacionActive scroll-box-140">'+
            post.title+ '<br>'+
            '<p >'+ post.paragraph_1_html+ '</p>'+
            '</div>'+
            '</div>';
      
        ;
        count+=1;
    });

    tmp = tmp + '</div>';
    $('#vinculacionEmpresarialShow .row').html(tmp);


    $('#vinculacionEmpresarialShow .row .segundaFilaVinculacion').mouseenter(function(){

        $(this).addClass('activeVinculacion');

    }).mouseleave(function(){
        $(this).removeClass('activeVinculacion');
    });
}

function investigacion(){

	var submenus = '<div class="ten columns subMenuInvestigacion servicios"> <div class="subMenuUnoInvestigacion" onclick="SubmenuInvestigacion(0)">Investigadores</div><div class="subMenuUnoInvestigacion" onclick="SubmenuInvestigacion(1)">Grupos de Investigación</div><div class="subMenuUnoInvestigacion" onclick="SubmenuInvestigacion(2)">Proyectos de Investigación</div><div class="subMenuUnoInvestigacion" onclick="SubmenuInvestigacion(3)">Publicaciones</div></div>';
	$('div.headerSubMenuInvestigacion').append(submenus);
	
    var tmp = '<div class="contenedorFilaVinculacion">';
    $('#investigacionShow .ocultarContenidoSubMenu .row').html('');

    $.each(initial_data.categories[7].posts, function(index,post) {
        tmp = tmp +
            '<div class="cuadrosInvestigacion">'+
            '<h6>'+post.title+'</h6>'+
            '<p>'+ post.paragraph_1_html+ '</p>'+
            '</div>';
        
    });
    $('#investigacionShow .ocultarContenidoSubMenu .row').html(tmp);

    $('#investigacionShow .ocultarContenidoSubMenu .row .cuadrosInvestigacion').mouseenter(function(){

        $(this).addClass('cuadroInvestigacionActive');

    }).mouseleave(function(){
        $(this).removeClass('cuadroInvestigacionActive');
    });
}

function SubmenuInvestigacion(funcion){
	// 1. Investigadores - de las click al cuadro y te lleva am Catálogo de Docentes
	// 2. Grupos de Investigación - Información acomodada tipo oferta académica
	// 3. Proyectos de Investigación - Infomración acomodada tipo oferta académica
	// 4. Publicaciones - Texto con foto diagonal, abajo cuadros tipo oferta académica y abajo botón para que te lleve al repositorio de publicaciones
	var mosaico = $('#mosaico-investigacion');
	var repositorios = $('#descargar-repositorio-investigacion');
	var texto = $('.contenedorImagenTextoInvestigacion');
	
	if(funcion == 0){
		location.href = 'microsites/catalogo.html';
	}
	if(funcion == 1){
		$('.cuadrosInvestigacion').hide();
		mosaico.show();
	}
	if(funcion == 2){
		$('.cuadrosInvestigacion').hide();
		mosaico.show();
	}
	if(funcion == 3){
		$('.cuadrosInvestigacion').hide();
		texto.show();
		mosaico.show();
		repositorios.show();
	}else{
		texto.hide();
		repositorios.hide();
	}
}

function lineatiempo(){


    var tmpSliceslt = '';
    var tmpindicator = '';

    var con=0;
    
    // $('#myCarouselLaSalle').append('<ol id="indi" class="carousel-indicators"></ol><div id="clt" class="carousel-inner" role="listbox">');

    $('#myCarouselLaSalle').append('<div id="clt" class="carousel-inner" role="listbox">');

    // $.each(initial_data.categories[10].posts, function(index,post) {

    //     if(con=="" || con==0){
    //         tmpindicator = tmpindicator + '<li data-target="#myCarouselLaSalle" data-slide-to="'+con+'" class="active"></li>';
            
    //         }else{
    //         tmpindicator = tmpindicator +' <li data-target="#myCarouselLaSalle" data-slide-to="'+con+'" class=""></li> ';

    //     }
    //     con=con+1;

    // });

    // $('#indi').append(tmpindicator);

    con=0;

     $.each(initial_data.categories[10].posts, function(index,post) {

        if(con=="" || con==0){

            tmpSliceslt = '<div class="item active">'+
            // '<img src="'+post.picture_url+'" alt="'+post.subtitle+'">'+
            '<img src="'+post.picture_url+'" alt="">'+
            '<div class="carousel-caption">'+
            // '<h2>'+post.title+'</h2>'+
            '<h2></h2>'+
            // '<p>'+post.paragraph_1+'</p> '+
            '<p></p> '+
            '</div></div>';

            $('#clt').append(tmpSliceslt);  
            
            }else{
            
            tmpSliceslt = '<div class="item ">'+
            // '<img src="'+post.picture_url+'" alt="'+post.subtitle+'">'+
            '<img src="'+post.picture_url+'" alt="">'+
            '<div class="carousel-caption">'+
            // '<h2>'+post.title+'</h2>'+
            '<h2></h2>'+
            // '<p>'+post.paragraph_1+'</p> '+
            '<p></p> '+
            '</div></div>';
            $('#clt').append(tmpSliceslt);  

        }
        con=con+1;


    });

    control = '<a class="left carousel-control" href="#myCarouselLaSalle" role="button" data-slide="prev">'+
    '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>'+
    '<span class="sr-only">Previous</span>'+
    '</a>'+
    '<a class="right carousel-control" href="#myCarouselLaSalle" role="button" data-slide="next">'+
    '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>'+
    '<span class="sr-only">Next</span>'+
    '</a>';

    $('#myCarouselLaSalle').append(control);  

    
}



function noticias(){
   

    $('.slider3').html(''); 
    txt="";
    title_1="";
    detalle_p_html="";
    subtitle_1="";

    $.each(initial_data.categories[9].posts, function(index,post) {

        subtitle_1="";
        title_1="";

        body_slider = '<div class="container_pic_slider slide"><div id="effect-1" class="effects clearfix responsiveSliderPrincipal"> <div id="imgsn'+index+'" class="imgSliderNoticias"> <div class="barra_morada"><div class="container_imagen_titulo_section_slider"><div class="caption cap1"><a href="notice.html?id='+post.id+'"><img src="images/nuevosArtes/banner/icono_noticias.png"></a></div><p>NOTICIAS</p> </div></div></div></div></div>';
        
        $('.slider3').append(body_slider);  

        barra_gris = '<div class="barra_gris textRight"> <div id="ctds'+index+'"" class="container_titulo_description_slider"> </div></div>';

        $('#imgsn'+index).append(barra_gris);  

        if(post.title.length>25){
        
            var tmp = post.title.split(/[ ,]+/);

             $.each(tmp, function(i,word){
                txt = txt + " " + word;

                if(txt.length > 15 ){
                     title_1 = title_1+txt+"<br>";
                     txt = '';
                 }


            });

        }

        
        detalle_p = '<p style="font-size:150%;">'+title_1+'</p>';

        if(post.subtitle.length>35){
        
            var tmp = post.subtitle.split(/[ ,]+/);

             $.each(tmp, function(i,word){
                txt = txt + " " + word;

                if(txt.length > 25 ){
                    subtitle_1 = title_1+txt+"<br>";
                     txt = '';
                 }

            });


        }

        detalle_p_html = '<p>'+subtitle_1+'</p>';

        $('#ctds'+index).append(detalle_p);  
        $('#ctds'+index).append(detalle_p_html);  

        boton = '<button id="btn_more_slider_one" class="btn_slider"><a href="notice.html?id='+post.id+'"><img src="images/nuevosArtes/banner/icono_mas.png"></a></button>';

        $('#ctds'+index).append(boton);  

        imagen_mostrar = '<img src="'+post.picture_url+'"></img>';
        

        $('#imgsn'+index).append(imagen_mostrar);  


        
    });


    $('.slider3').bxSliderPrincipal({});

}

function AcademicOffer(){
    /** Oferta Academica **/

    var html    = ''
        parent = this;


    this.showContent =  function(index,is_showed){

        $('#container_menu_derecho').hide();
        $('#id_container_select_btn_oferta').hide();

        offer = initial_data.academic_offer[index];


        //Subtitulo
        $('#ofertaAcademicaShow .textoTituloUniversidad p').html(offer.subtitle);


        //Slider
        var html = '<div class="slider1" style="display:none">';	// Se oculta
        var txt="";
        var title_1="";


        $.each(offer.children, function(index2,slider){

            if(slider.title.length>16){
                var tmp = slider.title.split(/[ ,]+/);
                 $.each(tmp, function(i,word){
                    txt = txt + " " + word;
                    if(txt.length > 10 ){
                         title_1 = title_1+txt+"<br>";
                         txt = '';
                     }
                });
            }


            html = html + '<div class="container_btn_licenciaturas slide">' +
                '<div id="effect-1" class="effects clearfix">' +
                '<div class="imgMenuNavegacion">' +

                '<div class="overlayMenuBtn pp">' +
                '<div class="text_btn_menu_oferta">' +
                
                '<p><button class="btn_derecho" data-index="'+index2+'">'+title_1+'</button></p>' +
                '</div>' +
                '</div>' +

                '<img src="'+slider.picture_url+'" alt="">' +

                '</div>' +
                '</div>' +
                '</div>';


        });
        html = html + '</div>'
		
		// Preparatoria
        if(index==0){	
			//html = html + '<br/><ul class="thumbnails gallery"> <li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazulm"> <h6>Facultad de Ciencias</h6> <h5>Licenciatura en Ciencias</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazulm"> <h6>Facultad de Ciencias</h6> <h5>Licenciatura en Ciencias</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazulm"> <h6>Facultad de Ciencias</h6> <h5>Licenciatura en Ciencias</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazulm"> <h6>Facultad de Ciencias</h6> <h5>Licenciatura en Ciencias</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgrojo"> <h6>Facultad de Derecho</h6> <h5>Licenciatura en Derecho</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgrojo"> <h6>Facultad de Derecho</h6> <h5>Licenciatura en Derecho</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgrojo"> <h6>Facultad de Derecho</h6> <h5>Licenciatura en Derecho</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bggris"> <h6>FAMADYC</h6> <h5>Licenciatura en Arquitectura</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bggris"> <h6>FAMADYC</h6> <h5>Licenciatura en Arquitectura</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazulf"> <h6>Facultad de Humanidades</h6> <h5>Licenciatura en Filosof&iacute;a</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazulf"> <h6>Facultad de Humanidades</h6> <h5>Licenciatura en Filosof&iacute;a</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazul"> <h6>Facultad de Ingenier&iacute;a</h6> <h5>Licenciatura en Ingenier&iacute;a Civ&iacute;l</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazul"> <h6>Facultad de Ingenier&iacute;a</h6> <h5>Licenciatura en Ingenier&iacute;a Civ&iacute;l</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazul"> <h6>Facultad de Ingenier&iacute;a</h6> <h5>Licenciatura en Ingenier&iacute;a Civ&iacute;l</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazul"> <h6>Facultad de Ingenier&iacute;a</h6> <h5>Licenciatura en Ingenier&iacute;a Civ&iacute;l</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazul"> <h6>Facultad de Ingenier&iacute;a</h6> <h5>Licenciatura en Ingenier&iacute;a Civ&iacute;l</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgamarillo"> <h6>Facultad de Medicina</h6> <h5>Licenciatura en M&eacute;dico Cirujano</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgverde"> <h6>Facultad de Negocios</h6> <h5>Licenciatura en Contadur&iacute;a y Finanzas</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li></ul><div class="push"></div>';
			$("#mosaico-oferta-educativa-prepa").css('display','inherit');
		}else{
			$("#mosaico-oferta-educativa-prepa").css('display','none');
		}
		
		// Licenciatura
        if(index==1 || index >= 1){	// Solo por ahora para que tenga contenido, se le dejo que los demas submenus muestren el mismo mosaico
			//html = '<div class="pull-left cont-filtro"> <div class="cuadrosSubmenu mosaico-filtro-todos" onclick="CambiarMosaico();" data-toggle="portfilter" data-target="all">Todos</div><div class="cuadrosSubmenu mosaico-filtro-facultad" onclick="CambiarMosaico();" data-toggle="portfilter" data-target="facultad">Facultad</div></div>';
			//html = html + '<br/><ul class="thumbnails gallery"> <li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazulm"> <h6>Facultad de Ciencias</h6> <h5>Licenciatura en Ciencias</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazulm"> <h6>Facultad de Ciencias</h6> <h5>Licenciatura en Ciencias</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazulm"> <h6>Facultad de Ciencias</h6> <h5>Licenciatura en Ciencias</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazulm"> <h6>Facultad de Ciencias</h6> <h5>Licenciatura en Ciencias</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgrojo"> <h6>Facultad de Derecho</h6> <h5>Licenciatura en Derecho</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgrojo"> <h6>Facultad de Derecho</h6> <h5>Licenciatura en Derecho</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgrojo"> <h6>Facultad de Derecho</h6> <h5>Licenciatura en Derecho</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bggris"> <h6>FAMADYC</h6> <h5>Licenciatura en Arquitectura</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bggris"> <h6>FAMADYC</h6> <h5>Licenciatura en Arquitectura</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazulf"> <h6>Facultad de Humanidades</h6> <h5>Licenciatura en Filosof&iacute;a</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazulf"> <h6>Facultad de Humanidades</h6> <h5>Licenciatura en Filosof&iacute;a</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazul"> <h6>Facultad de Ingenier&iacute;a</h6> <h5>Licenciatura en Ingenier&iacute;a Civ&iacute;l</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazul"> <h6>Facultad de Ingenier&iacute;a</h6> <h5>Licenciatura en Ingenier&iacute;a Civ&iacute;l</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazul"> <h6>Facultad de Ingenier&iacute;a</h6> <h5>Licenciatura en Ingenier&iacute;a Civ&iacute;l</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazul"> <h6>Facultad de Ingenier&iacute;a</h6> <h5>Licenciatura en Ingenier&iacute;a Civ&iacute;l</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgazul"> <h6>Facultad de Ingenier&iacute;a</h6> <h5>Licenciatura en Ingenier&iacute;a Civ&iacute;l</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgamarillo"> <h6>Facultad de Medicina</h6> <h5>Licenciatura en M&eacute;dico Cirujano</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li><li class="span3" data-tag="facultad"> <div class="thumbnail"> <div class="imgNoticia"> <div class="overlayTituloNoticia bgverde"> <h6>Facultad de Negocios</h6> <h5>Licenciatura en Contadur&iacute;a y Finanzas</h5> </div><img src="images/nuevosArtes/Noticias/image_news1.png" alt=""> </div></div></li></ul><div class="push"></div>';
			$("#mosaico-oferta-educativa").css('display','inherit');
		}else{
			$("#mosaico-oferta-educativa").css('display','none');
		}
		
		
        //Cuando termine pinto el slider

        $('#ofertaAcademicaShow .parent_slider').html(html);

        // if(is_showed) {
        //     console.log("ok");
        //     $('#ofertaAcademicaShow .slider1').bxSlider({
        //         slideWidth: 199,
        //         minSlides: 2,
        //         maxSlides: 5
        //     });
        // }

        //Cuando doy click al titulo en el slider
        $("#ofertaAcademicaShow .btn_derecho").on( "click", function() {

            var index = $(this).data('index');

            slider = offer.children[index];


            //El titulo debe dividirse en dos lineas porque es un cuadro pequeño con letra grande
            //** funcion para dividir palabras
            var tmp = slider.title.split(/[ ,]+/),
                title_1 = false,
                title_2 = false,
                txt='';
            $.each(tmp, function(i,word){
                txt = txt + " " + word;
                if(txt.length>11 && !title_1){
                    title_1 = txt;
                    txt = '';
                }
            });
            title_2 = txt;
            //** Fin de funcion para dividir palabras

            //Reemplazo el texto que sale arriba del listbox
            $('#container_menu_derecho .textUno_title').html(title_1);
            $('#container_menu_derecho .textDos_title').html(title_2);


            //Reemplazo los valores del listbox
            html = '';
            $.each(slider.children, function(index_slider,list_box){
                html = html + '<option value="'+index_slider+'">'+list_box.title+'</option>';
            });
            $('#container_menu_derecho select').html(html);

            //Registro el evento onchange del select_box
            $('#container_menu_derecho select').on('change',function(){
                
               AO.showSidebar($(this).val());
            });



            //Mostrar/Ocultar el listbox y el menu
            if($('#container_menu_derecho').is(":visible")){
                $('#container_menu_derecho').hide("slow");
            }else{
                $('#container_menu_derecho').show("slow");
            }

            parent.showSidebar(0);
        });



    }

    this.showSidebar =  function(index){

        $('#id_container_select_btn_oferta').hide();
        console.log(slider);
        if(!slider) return false;

        var html = '';

        select_box = slider.children[index];
        $.each(select_box.children, function(index,sidebar){
            html = html + '<div class="button_menu_right btn_select_oferta_cou" data-index="'+index+'"><img src="'+ (sidebar.picture_url ? sidebar.picture_url : 'images/nuevosArtes/oferta_educativa/icono_btn_cuota.png')+'">'+sidebar.title+'</div>';
        });

        $('#container_menu_derecho .menu_option_right_oferta').html(html);

        $(".btn_select_oferta_cou").on( "click", function() {

            //Cambiando el contenido del detalle
            sidebar =  select_box.children[$(this).data('index')];
            console.log(sidebar);

            var e = '#id_container_select_btn_oferta';

            $(e + ' .container_desc_selection_skew p').html(sidebar.subtitle);
            $(e + ' .container_menu_select_skew_left').html(sidebar.paragraph_1_html);
            $(e + ' .container_title_icono_skew img').attr('src',sidebar.picture_url_2);
            $(e + ' .container_image_select_skew img').attr('src',sidebar.picture_url_3);



            if($('#id_container_select_btn_oferta').is(":visible")){
                $('#id_container_select_btn_oferta').hide("slow");
                $('#btn_select_oferta_cou').removeClass("button_menu_right_derecho_active");
            }else{
                $('#id_container_select_btn_oferta').show("slow");
                $('#btn_select_oferta_cou').addClass("button_menu_right_derecho_active");
            }
        });
    }


    $.each(initial_data.academic_offer, function(index,offer){
        html = html + '<div class="subMenuUnoOfertaAcademica" onclick="AO.showContent('+ index +', 1)">' + offer.title + '</div>';
    });

    $('#ofertaAcademicaShow .ten.columns.subMenuOfertaAcademica').html(html);
    this.showContent(0);
}



function getUrlVars()
  {
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for(var i = 0; i < hashes.length; i++)
      {
          hash = hashes[i].split('=');
          vars.push(hash[0]);
          vars[hash[0]] = hash[1];
      }
      return vars;
  }
function CambiarMosaico(){	// Funcion que debe cambiar el contenido del div #mosaico-oferta-educativa dependiendo el filtro seleccionado, por ahora solo hace un efecto que oculta y muestra lo mismo.
	$('div.items-oferta-educativa').hide().delay(200).fadeIn('slow');				
}

// Tabs de universidades en el mundo
	function FiltroMapas(filtro){
	//$(".seccion.academicas.tab").click(function(){
		if(filtro == 'todos'){
			$('a.asia,a.europe,a.north,a.south').show();
		}else{
			// Aqui se va a cambiar el contenido dinamico
			$('a.asia,a.europe,a.north,a.south').hide();
			$('a.'+filtro).fadeIn('slow');
		}
	}
// Pines de estacionamiento
	function OverPinEstacionamiento(elemento){
		var pin = elemento.id;
		$('img#' + pin).attr('src','images/nuevosArtes/servicio/pine2.png');
	}
	function NoOverPinEstacionamiento(elemento){
		var pin = elemento.id;
		if($('img#' + pin).hasClass("activo")){
		
		}else{
			$('#pines-estacionamiento img#' + pin).each(function() {
				$(this).attr('src','images/nuevosArtes/servicio/pine.png');
			});
		}
	}
	function Estacionamiento(elemento){
		$('#pines-estacionamiento img').each(function() {
			$(this).attr('src','images/nuevosArtes/servicio/pine.png');
		});
		var imagen = elemento.id;
		$('img#' + imagen).addClass('activo');
		$('img#' + imagen).attr('src','images/nuevosArtes/servicio/pine2.png');
		$('img.mapa-estacionamiento').attr('src','images/nuevosArtes/servicio/estacionamiento/' + imagen + '.png');
	}
// Ulsabus
	function ulsabus(ruta){
		if(ruta == 1){$('div.tabla-ulsabus').html('<div class="alignleft"> <h4>Paradas de Venida</h4> <ul> <li> <div><strong>Miramontes y Periférico</strong></div><div>Bajando el puente viniendo de Xochimilco</div><div>Horario 5:50am</div></li><li> <div><strong>Miramontes y Calzada del Hueso</strong></div><div>En la parada del camión (Liverpool)</div><div>Horario 5:51am</div></li><li> <div><strong>Miramontes y Calzada de las Bombas</strong></div><div>En la esquina de la Alameda Sur</div><div>Horario 5:55am</div></li><li> <div><strong>Miramontes tienda Soriana</strong></div><div>En la Soriana en la parada del camión</div><div>Horario 5:58am</div></li><li> <div><strong>Miramontes y Calzada de la Virgen</strong></div><div>En la tienda del Oxxo</div><div>Horario 6:01am</div></li><li> <div><strong>Miramontes y Avenida Tasqueña</strong></div><div>En la Farmacia del Ahorro</div><div>Horario 6:04am</div></li><li> <div><strong>Miguel Ángel de Quevedo y Pacifico</strong></div><div>En la parada del camión de la Bahía</div><div>Horario 6:10am</div></li><li> <div><strong>Miguel Ángel de Quevedo y Melchor Ocampo</strong></div><div>Frente a la tienda Mega Comercial Mexicana</div><div>Horario 6:13am</div></li><li> <div><strong>Miguel Ángel de Quevedo y Av. Universidad</strong></div><div>En la parada del camión Esquina Av. Universidad</div><div>Horario 6:15am</div></li><li> <div><strong>Miguel Ángel de Quevedo y Av. Insurgentes</strong></div><div>Frente a la Europea</div><div>Horario 6:17am</div></li><li> <div><strong>Av. Insurgentes #1940</strong></div><div>En la panadería El Globo</div><div>Horario 6:18am</div></li><li> <div><strong>Av. Insurgentes y Calle Francia</strong></div><div>En la esquina de calle Francia</div><div>Horario 6:19am</div></li><li> <div><strong>Av. Insurgentes y Rio Mixcoac</strong></div><div>Frente a la Comercial Mexicana</div><div>Horario 6:20am</div></li><li> <div><strong>Río Mixcoac y Calle Cataluña</strong></div><div>En la esquina de calle Cataluña</div><div>Horario 6:22am</div></li><li> <div><strong>Av. Patriotismo y Río Mixcoac</strong></div><div>En el puente peatonal</div><div>Horario 6:25am</div></li><li> <div><strong>Av. Patriotismo y Calle 17</strong></div><div>En la esquina de calle 17</div><div>Horario 6:28am</div></li><li> <div><strong>Universidad La Salle</strong></div><div>Calle Benjamín Hill en la Biblioteca</div><div>Horario 6:30am</div></li></ul> </div><div class="alignleft"> <h4>Paradas de Regreso</h4> <ul> <li> <div><strong>Universidad La Salle</strong></div><div>Calle Benjamín Hill en la Biblioteca</div><div>Horario 14:15hrs</div></li><li> <div><strong>Avenida Revolución y Calle 2</strong></div><div>En la esquina de calle 2</div><div>Horario 14:27hrs</div></li><li> <div><strong>Avenida Revolución y Calle 17</strong></div><div>En el hotel Holiday Inn</div><div>Horario 14:29hrs</div></li><li> <div><strong>Río Mixcoac y Avenida Revolución</strong></div><div>En la Feria</div><div>Horario 14:31hrs</div></li><li> <div><strong>Río Mixcoac e Insurgentes</strong></div><div>En la tienda Interceramic</div><div>Horario 14:32hrs</div></li><li> <div><strong>Av. Universidad y Calle 5 de Mayo</strong></div><div>En la tienda Oxxo</div><div>Horario 14:34hrs</div></li><li> <div><strong>Av. Universidad y Minerva</strong></div><div>En el Samborns</div><div>Horario 14:36hrs</div></li><li> <div><strong>Av. Universidad y Miguel A. de Quevedo</strong></div><div>En la panadería Santo Domingo</div><div>Horario 14:40hrs</div></li><li> <div><strong>Miguel A. de Quevedo y Melchor Ocampo</strong></div><div>En la Mega Comercial parada del camión</div><div>Horario 14:48hrs</div></li><li> <div><strong>Miguel Ángel de Quevedo y Pacifico</strong></div><div>En la gasolinería en la esquina</div><div>Horario 14:51hrs</div></li><li> <div><strong>Metro Tasqueña</strong></div><div>En la bahía de trolebuses</div><div>Horario 14:56hrs</div></li><li> <div><strong>Miramontes y Tasqueña</strong></div><div>Frente a la Farmacia del Ahorro</div><div>Horario 14:57hrs</div></li><li> <div><strong>Miramontes y Calzada de la Virgen</strong></div><div>En la esquina de Calzada de la Virgen</div><div>Horario 14:59hrs</div></li><li> <div><strong>Miramontes tienda Soriana</strong></div><div>En la panadería La Estrella frente al Soriana</div><div>Horario 15:02hrs</div></li><li> <div><strong>Miramontes y Mar de la Tranquilidad</strong></div><div>En la nevería La Michoacana</div><div>Horario 15:05hrs</div></li><li> <div><strong>Miramontes y Av. Tzinas</strong></div><div>En la tienda del Oxxo</div><div>Horario 15:07hrs</div></li><li> <div><strong>Miramontes y Calzada de las Bombas</strong></div><div>En el banco Banorte</div><div>Horario 15:09</div></li><li> <div><strong>Miramontes y Calzada del Hueso</strong></div><div>En la Comercial Mexicana</div><div>Horario 15:15hrs</div></li><li> <div><strong>Miramontes y Avenida de las Brujas</strong></div><div>En la papelería Lumen</div><div>Horario 15:18hrs</div></li><li> <div><strong>Miramontes y Avenida Acoxpa</strong></div><div>En el Sanborns</div><div>Horario 15:20hrs</div></li><li> <div><strong>Glorieta de Vaqueritos</strong></div><div>Puente peatonal antes de subir los puentes de la glorieta</div><div>Horario 15:25</div></li></ul> </div>');}
		if(ruta == 2){$('div.tabla-ulsabus').html('<div class="alignleft"> <h4>Paradas de Venida</h4> <ul> <li> <div><strong>Metro Indios Verdes</strong></div><div>En el Sanatorio Tepeyac</div><div>Horario 5:45am</div></li><li> <div><strong>Metro 18 de Marzo</strong></div><div>En la tienda de camisas Halston</div><div>Horario 05:47am</div></li><li> <div><strong>Metro Potrero</strong></div><div>En la Bodega Aurrera</div><div>Horario 5:55am</div></li><li> <div><strong>Av. Insurgentes y Av. Manuel González</strong></div><div>En la parada del camión en la ferretería Nonoalco</div><div>Horario 6:00am</div></li><li> <div><strong>Av. Insurgentes y Eje 1 Norte</strong></div><div>En la parada del camión Tienda Parisina</div><div>Horario 6:04am</div></li><li> <div><strong>Av. Insurgentes y Av. San Cosme</strong></div><div>En la parada del camión en el Toks</div><div>Horario 6:08am</div></li><li> <div><strong>Av. Insurgentes y Av. Reforma</strong></div><div>Junto a la gasolinería</div><div>Horario 6:11am</div></li><li> <div><strong>Glorieta del metro Insurgentes</strong></div><div>En el Banamex</div><div>6:15am</div></li><li> <div><strong>Av. Insurgentes y Av. Medellín</strong></div><div>En la parada del camión</div><div>Horario 6:23am</div></li><li> <div><strong>Av. Insurgentes y Av. Baja California</strong></div><div>Salida del metro Chilpancingo</div><div>Horario 6:27am</div></li><li> <div><strong>Av. Baja California y Nuevo León</strong></div><div>En la parada del camión</div><div>Horario 6:31am</div></li><li> <div><strong>Universidad La Salle</strong></div><div>Calle Benjamín en la biblioteca</div><div>Horario 6:36am</div></li></ul> </div><div class="alignleft"> <h4>Paradas de Regreso</h4> <ul> <li> <div><strong>Universidad La Salle</strong></div><div>Calle Benjamín Hillen en la biblioteca</div><div>Horario 14:15hrs</div></li><li> <div><strong>Circuito interior y Av. Sullivan</strong></div><div>Esquina Sullivan en el Oxxo (Galerías)</div><div>Horario 14:20hrs</div></li><li> <div><strong>Calle Alfonso Herrera y Calle Sadi Carnot</strong></div><div>En la nevería a una cuadra de Insurgentes</div><div>Horario 14:23hrs</div></li><li> <div><strong>Av. Insurgentes y Av. San Cosme</strong></div><div>En la parada del camión</div><div>Horario 14:25hrs</div></li><li> <div><strong>Av. Insurgentes y Eje 1 Norte</strong></div><div>En la parada del camión en el Restaurant El Portón</div><div>Horario 14:35hrs</div></li><li> <div><strong>Insurgentes y Av. Manuel González</strong></div><div>En la parada del camión puente peatonal</div><div>Horario 14:40hrs</div></li><li> <div><strong>Av. Insurgentes metro La Raza</strong></div><div>En el puente peatonal</div><div>Horario 14:45hrs</div></li><li> <div><strong>Av. Insurgentes y Av. Ingeniero Basiliso Romo</strong></div><div>En el restaurant El Nopalito</div><div>Horario 14:48hrs</div></li><li> <div><strong>Av. Insurgentes y Calle Victoria</strong></div><div>Parada del metro Potrero en la nevería</div><div>14:55hrs</div></li><li> <div><strong>Av. Insurgentes y Av. Euzcaro</strong></div><div>En la parada del camión</div><div>Horario 14:58hrs</div></li><li> <div><strong>Av. Insurgentes Metro 18 de Marzo</strong></div><div>En la parada del camión</div><div>Horario 15:00hrs</div></li><li> <div><strong>Av. Insurgentes y Av. Montevideo</strong></div><div>Pasando la Av. Montevideo en la gasolinería</div><div>Horario 15:05hrs</div></li><li> <div><strong>Av. Insurgentes y Calle de Cantera</strong></div><div>En la Mega Comercial Mexicana</div><div>Horario 15:10hrs</div></li><li> <div><strong>Metro Indios Verdes</strong></div><div>En el mercado</div><div>Horario 15:15hrs</div></li><li> <div><strong>Av. Ticoman y Río Bamba</strong></div><div>En la esquina en el semáforo</div><div>Horario 15:22hrs</div></li><li> <div><strong>Av. Río Bamba y Av. Sierravista</strong></div><div>En la esquina de Sierravista</div><div>Horario 15:23hrs</div></li></ul> </div>');}
		if(ruta == 3){$('div.tabla-ulsabus').html('<div class="alignleft"> <h4>Paradas de Venida</h4> <ul> <li> <div><strong>Gustavo Baz y Prolongación Toltecas</strong></div><div>Potzollcalli en el estacionamiento</div><div>Horario 5:41am</div></li><li> <div><strong>Gustavo Baz y Río Lerma</strong></div><div>Plaza arboledas en la Mega Comercial Mexicana</div><div>Horario 5:43hrs</div></li><li> <div><strong>Gustavo Baz y Prolongación Galeana</strong></div><div>En la gasolinería (Sitio de taxis prolongación Galeana)</div><div>Horario 5:45hrs</div></li><li> <div><strong>Gustavo Baz e Ignacio Zaragoza (Tule)</strong></div><div>Esquina de Ignacio Zaragoza tienda de camisas de cartón</div><div>Horario 5:48hrs</div></li><li> <div><strong>Gustavo Baz y Circuito de los Pintores</strong></div><div>Dentro de la Glorieta frente a los bomberos</div><div>Horario 5:50hrs</div></li><li> <div><strong>Gustavo Baz y Hda. de la Encarnación</strong></div><div>En helados Santa Clara</div><div>Horario 5:53hrs</div></li><li> <div><strong>Hda. la Huaracha y las Armas</strong></div><div>En el módulo de policía Tecalli II</div><div>Horario 5:57hrs</div></li><li> <div><strong>San Isidro y Santiago Ahuizotla</strong></div><div>En el Domino’s Pizza</div><div>Horario 6:01</div></li><li> <div><strong>San Isidro y Ave. Tezozomoc</strong></div><div>Cruzando Tezozomoc Fábrica de galletas Cuetara</div><div>Horario 6:03</div></li><li> <div><strong>San Isidro y Aquiles Serdán</strong></div><div>En la refaccionaría metro camarones</div><div>Horario 6:05</div></li><li> <div><strong>Legaría y Lago Superior</strong></div><div>En la mensajería Multipack</div><div>Horario 6:08am</div></li><li> <div><strong>Legaría y Allende</strong></div><div>En el Montepío al lado de la gasolinería</div><div>Horario 6:12am</div></li><li> <div><strong>Legaría y Panteón Francés</strong></div><div>Puerta del panteón Francés en el puesto de flores</div><div>Horario 6:13am</div></li><li> <div><strong>Río San Joaquín y Lago Onega</strong></div><div>Frente a la cervecería Corona</div><div>Horario 6:15am</div></li><li> <div><strong>Río San Joaquín y Arquímedes</strong></div><div>Esquina de Arquímedes en el semáforo</div><div>Horario 6:18am</div></li><li> <div><strong>Río San Joaquín y Thiers</strong></div><div>En la esquina antes de incorporarse a Thiers</div><div>Horario 6:19am</div></li><li> <div><strong>Thiers y Kelvin</strong></div><div>En la esquina de Kelvin</div><div>Horario 6:20am</div></li><li> <div><strong>Thiers y Gutemberg</strong></div><div>En el módulo de policía</div><div>Horario 6:22am</div></li><li> <div><strong>Circuito Interior y Metro Juanacatlan</strong></div><div>En el metro Juanacatlan</div><div>Horario 6:25hrs</div></li><li> <div><strong>Universidad La Salle</strong></div><div>Calle Benjamín Hill en la biblioteca</div><div>Horario 6:30am</div></li></ul> </div><div class="alignleft"> <h4>Paradas de Regreso</h4> <ul> <li> <div><strong>Universidad La Salle</strong></div><div>Calle Benjamín Hill en la biblioteca</div><div>Horario 14:15hrs</div></li><li> <div><strong>Av. Mariano Escobedo y Gutemberg</strong></div><div>En el semáforo</div><div>Horario 14:17hrs</div></li><li> <div><strong>Av. Mariano Escobedo y Kelvin</strong></div><div>En la esquina de Kelvin</div><div>Horario 14:20hrs</div></li><li> <div><strong>Av. Mariano Escobedo y Río San Joaquín</strong></div><div>Antes de subir a los puentes de río San Joaquín</div><div>Horario 14:23hrs</div></li><li> <div><strong>Río San Joaquín y Lago Alberto</strong></div><div>Esquina de Lago Alberto en el semáforo</div><div>Horario 14:27hrs</div></li><li> <div><strong>Legaría y Río San Joaquín</strong></div><div>En la esquina en la parada del camión</div><div>Horario 14:31hrs</div></li><li> <div><strong>Legaría y Lago Ginebra</strong></div><div>Glorieta frente al panteón Francés (Seguros Banorte)</div><div>Horario 14:32hrs</div></li><li> <div><strong>Legaría y Calle 2</strong></div><div>En la panadería Legaría</div><div>Horario 14:34hrs</div></li><li> <div><strong>Av. Aquiles Serdán y Manuel Acuña</strong></div><div>En el Wings (Metro Camarones)</div><div>Horario 14:39hrs</div></li><li> <div><strong>San Isidro y Poza Rica</strong></div><div>Frente a la gasolinería que está pasando Tezozomoc</div><div>Horario 14:43hrs</div></li><li> <div><strong>San Isidro y Renacimiento</strong></div><div>Esquina de Renacimiento en el semáforo</div><div>Horario 14:47hrs</div></li><li> <div><strong>San Isidro y Calzada de las Armas</strong></div><div>Esquina de Calzada de las Armas en el semáforo</div><div>Horario 14:51hrs</div></li><li> <div><strong>Encarnación y Cristóbal Colón</strong></div><div>En el módulo de policía</div><div>Horario 14:53hrs</div></li><li> <div><strong>Gustavo Baz y Hda. de la Encarnación</strong></div><div>Gustavo Baz frente al Toks</div><div>Horario 14:55hrs</div></li><li> <div><strong>Gustavo Baz y Circuito de los Pintores</strong></div><div>Dentro de la glorieta (Estación de bomberos)</div><div>Horario 15:00hrs</div></li><li> <div><strong>Periférico y Calle Viveros de la Hacienda</strong></div><div>En el parabus (Superama Viveros)</div><div>Horario 15:08hrs</div></li><li> <div><strong>Gustavo Baz y Filiberto Gómez</strong></div><div>Pasando Filiberto Gómez en la gasolinería</div><div>Horario 15:12hrs</div></li><li> <div><strong>Gustavo Baz y Río Lerma</strong></div><div>En Fantasías Miguel</div><div>Horario 15:15hrs</div></li><li> <div><strong>Gustavo Baz y Henry Ford</strong></div><div>En el centro comercial Costco</div><div>Horario 15:17hrs</div></li><li> <div><strong>Gustavo Baz y Toltecas</strong></div><div>Esquina de Toltecas en el semáforo</div><div>Horario 15:22hrs</div></li></ul> </div>');}
		if(ruta == 4){$('div.tabla-ulsabus').html('<div class="alignleft"> <h4>Paradas de Venida</h4> <ul> <li> <div><strong>Avenida Central y Avenida 412</strong></div><div>Frente al CETIS 54</div><div>Horario 5:45am</div></li><li> <div><strong>Avenida 412 y Avenida 1517</strong></div><div>En la casa #249</div><div>Horario 5:48am</div></li><li> <div><strong>Avenida 412 y Avenida 1501</strong></div><div>En la vulcanizadora a una cuadra de la Av. 499</div><div>Horario 5:50am</div></li><li> <div><strong>Avenida 412 y Calle 469</strong></div><div>A una cuadra de la Av. José Loreto Fabela</div><div>Horario 5:52</div></li><li> <div><strong>Avenida José Loreto Fabela y Avenida 608</strong></div><div>Junto al sitio de taxis</div><div>Horario 5:55am</div></li><li> <div><strong>Avenida Oceanía y Avenida Transval</strong></div><div>Esquina de avenida Transval</div><div>Horario 5:57am</div></li><li> <div><strong>Avenida Transval y Av. Damasco</strong></div><div>Frente a la tienda Oxxo</div><div>Horario 5:58am</div></li><li> <div><strong>Av. Eduardo Molina y Eje 2 Norte</strong></div><div>En pinturas Optimus sobre Eduardo Molina</div><div>Horario 5:59am</div></li><li> <div><strong>Av. Fco. del Paso y Troncoso y Av. Fray Servando</strong></div><div>En la Delegación Venustiano Carranza</div><div>Horario 6:04am</div></li><li> <div><strong>Av. Fco. del Paso y Troncoso y Av. del Taller</strong></div><div>Esquina de la avenida del taller en la estética</div><div>Horario 6:06am</div></li><li> <div><strong>Av. Congreso de la Unión y Av. Morelos</strong></div><div>Parada del metro Jamaica</div><div>Horario 6:10am</div></li><li> <div><strong>Av. Morelos (Eje 3 Sur) y Avenida de la Viga</strong></div><div>En la parada del camión</div><div>Horario 6:12am</div></li><li> <div><strong>Eje 3 Sur y Eje Central Lázaro Cárdenas</strong></div><div>Frente a la Bodega Aurrera</div><div>Horario 6:15am</div></li><li> <div><strong>Eje 3 Sur y Avenida Cuauhtémoc</strong></div><div>Metro Centro Médico en el hotel California</div><div>Horario 6:20am</div></li><li> <div><strong>Eje 3 Sur y Avenida Insurgentes</strong></div><div>Pasando Av. Insurgentes parada metro Chilpancingo</div><div>Horario 6:25am</div></li><li> <div><strong>Universidad La Salle</strong></div><div>Calle Benjamín Hill en la biblioteca</div><div>Horario 6:30am</div></li></ul> </div><div class="alignleft"> <h4>Paradas de Regreso</h4> <ul> <li> <div><strong>Universidad La Salle</strong></div><div>Calle Benjamín Hill en la biblioteca</div><div>Horario 14:15hrs</div></li><li> <div><strong>Metro Chapultepec</strong></div><div>Frente al paradero de microbuses</div><div>Horario 14:20hrs</div></li><li> <div><strong>Av. Chapultepec y Eje 2 Monterrey</strong></div><div>Frente al Kentucky Friend Chicken</div><div>Horario 14:25hrs</div></li><li> <div><strong>Metro Cuauhtémoc</strong></div><div>Frente a la parada del metro</div><div>Horario 14:30hrs</div></li><li> <div><strong>Av. Fray Servando y Av. Congreso de la Unión</strong></div><div>En la parada del camión</div><div>Horario 14:45hrs</div></li><li> <div><strong>Avenida Fray Servando y Cucurpe</strong></div><div>Esquina del parque puente peatonal</div><div>Horario 14:50</div></li><li> <div><strong>Av. Oceanía y Calle China</strong></div><div>En la gasolinería</div><div>Horario 14:55hrs</div></li><li> <div><strong>Avenida Oceanía y Calle Norte 166</strong></div><div>En el puente peatonal</div><div>Horario 15:00hrs</div></li><li> <div><strong>Deportivo Oceanía (Parada del metro)</strong></div><div>En la parada del camión</div><div>Horario 15:10hrs</div></li><li> <div><strong>Metro Bosques de Aragón</strong></div><div>En la parada del camión</div><div>Horario 15:15hrs</div></li><li> <div><strong>Av. 651 y Av. Central</strong></div><div>En la tienda de cocinas</div><div>Horario 15:18hrs</div></li><li> <div><strong>Metro Villa de Aragón</strong></div><div>En la parada del metro</div><div>Horario 15:20hrs</div></li><li> <div><strong>Avenida Central y Avenida 412</strong></div><div>Puente peatonal frente a la tienda La Lina</div><div>Horario 15:22hrs</div></li><li> <div><strong>Avenida Central tienda Comercial Mexicana</strong></div><div>En el restaurant California</div><div>Horario 15:25hrs</div></li><li> <div><strong>Metro Nezahualcóyotl</strong></div><div>En la gasolinería</div><div>Horario 15:30hrs</div></li><li> <div><strong>Blvd. Bosques de Los Continentes</strong></div><div>Retorno Blvd. Bosques de Los Continentes</div><div>Horario 15:33hrs</div></li></ul> </div>');}
		if(ruta == 5){$('div.tabla-ulsabus').html('<div class="alignleft"> <h4>Paradas de Venida</h4> <ul> <li> <div><strong>Av. Camino a Santa Teresa #230</strong></div><div>En el Colegio Simón Bolívar</div><div>Horario 5:40am</div></li><li> <div><strong>Periférico Sur</strong></div><div>En el Hotel Radisson</div><div>Horario 5:44am</div></li><li> <div><strong>Periférico y Coscomate</strong></div><div>Una cuadra antes de Renato Leduc</div><div>Horario 5:50am</div></li><li> <div><strong>Periférico y Viaducto Tlalpan</strong></div><div>Debajo del puente de Viaducto Tlalpan</div><div>Horario 5:54am</div></li><li> <div><strong>Viaducto Tlalpan y Calle Arenal</strong></div><div>En la esquina</div><div>Horario 5:57am</div></li><li> <div><strong>División del Norte y Calle del Museo</strong></div><div>Frente a CECATI #3</div><div>Horario 6:00am</div></li><li> <div><strong>División del Norte y Calle Árbol de Fuego</strong></div><div>En los Lab. de Comisión del Agua</div><div>Horario 6:02am</div></li><li> <div><strong>División del norte y Calle Pinos</strong></div><div>Frente al Oxxo</div><div>Horario 6:04am</div></li><li> <div><strong>División del Norte y América</strong></div><div>En la refaccionaría América</div><div>Horario 6:07am</div></li><li> <div><strong>División del Norte pasando Churubusco</strong></div><div>Frente a la alberca olímpica</div><div>Horario 6:08am</div></li><li> <div><strong>Zapata y División del Norte</strong></div><div>En la cresta automotriz Seat Ibiza</div><div>Horario 6:10am</div></li><li> <div><strong>Parroquia y Adolfo Prieto</strong></div><div>Frente a la Iglesia</div><div>Horario 6:16am</div></li><li> <div><strong>Adolfo Prieto y San Lorenzo</strong></div><div>Frente a los laboratorios farmacéuticos SOMAR</div><div>Horario 6:19am</div></li><li> <div><strong>Gabriel Mancera y Miguel Laurent</strong></div><div>Frente al Centro Universitario Incarnate Word</div><div>Horario 6:21am</div></li><li> <div><strong>Gabriel Mancera y Eugenia (Eje 5)</strong></div><div>En la tienda Soriana</div><div>Horario 6:23am</div></li><li> <div><strong>División del Norte y Amores</strong></div><div>Frente a la Comercial Azulejera</div><div>Horario 6:27am</div></li><li> <div><strong>División del Norte y Av. Coyoacán</strong></div><div>En la gasolinería</div><div>Horario 6:28am</div></li><li> <div><strong>Universidad La Salle</strong></div><div>Calle Benjamín Hill en la biblioteca</div><div>Horario 06:41am</div></li></ul> </div><div class="alignleft"> <h4>Paradas de Regreso</h4> <ul> <li> <div><strong>Universidad La Salle</strong></div><div>Calle Benjamín Hill en la biblioteca</div><div>Horario 3:15pm</div></li><li> <div><strong>Av. Coyoacán y Torres Adalid</strong></div><div>Frene al Oxxo</div><div>Horario 3:31pm</div></li><li> <div><strong>Av. Coyoacán y Eugenia (Ejes)</strong></div><div>Frente al Oxxo</div><div>Horario 3:34pm</div></li><li> <div><strong>Av. Coyoacán y Ángel Urraza (Eje 6)</strong></div><div>En la Secundaria Técnica #14</div><div>Horario 3:35pm</div></li><li> <div><strong>Av. Coyoacán y Pilares</strong></div><div>En la parada del camión</div><div>Horario 3:37pm</div></li><li> <div><strong>Av. Coyoacán y Felix Cuevas</strong></div><div>Frente al Hospital 20 de Noviembre del ISSSTE</div><div>Horario 3:40pm</div></li><li> <div><strong>José Ma. Rico (Eje 8) y Av. Universidad</strong></div><div>En la agencia automotriz Lincoln</div><div>Horario 3:45pm</div></li><li> <div><strong>José Ma. Rico y Prolongación Uxmal</strong></div><div>Frente a la fábrica Laposse</div><div>Horario 3:49pm</div></li><li> <div><strong>División del Norte y Churubusco</strong></div><div>En la alberca olímpica</div><div>Horario 3:51pm</div></li><li> <div><strong>División del norte y América</strong></div><div>Frente al Kentucky Friend Chicken</div><div>Horario 3:56pm</div></li><li> <div><strong>División del Norte y Pinos</strong></div><div>En el Oxxo</div><div>Horario 3:59pm</div></li><li> <div><strong>División del Norte y Árbol de Fuego</strong></div><div>Frente a los laboratorios de comisión de agua</div><div>Horario 4:00pm</div></li><li> <div><strong>División del Norte y Museo</strong></div><div>Frente a la Iglesia</div><div>Horario 4:02pm</div></li><li> <div><strong>Calzada de Tlalpan</strong></div><div>En la planta de Coca Cola</div><div>Horario 4:06pm</div></li><li> <div><strong>Viaducto Tlalpan y Calle Arenal</strong></div><div>En el puente peatonal</div><div>Horario 4:09pm</div></li><li> <div><strong>Periférico y Renato Leduc</strong></div><div>A un costado de la tienda Superama</div><div>Horario 4:11pm</div></li><li> <div><strong>Periférico y Gran Sur</strong></div><div>En el Hotel Fiesta Inn</div><div>Horario 4:13pm</div></li><li> <div><strong>Periférico, pasando Trébol de Insurgentes</strong></div><div>Perisur frente al Hotel Radisson</div><div>Horario 4:17pm</div></li><li> <div><strong>Av. Camino a Santa Tersa #230</strong></div><div>En el Colegio Simón Bolívar</div><div>Horario 4:28pm</div></li></ul> </div>');}
		if(ruta == 6){$('div.tabla-ulsabus').html('<div class="alignleft"> <h4>Paradas de Venida</h4> <ul> <li> <div><strong>Av. Othon de Mendizábal Frac. Torres Lindavista</strong></div><div>En el Fraccionamiento de Torres Lindavista</div><div>Horario 5:45am</div></li><li> <div><strong>Avenida Juan de Dios Batiz y Avenida I.P.N.</strong></div><div>En la tienda de Maestros del I.P.N</div><div>Horario 5:47am</div></li><li> <div><strong>Avenida Ticoman y Calle de Managua</strong></div><div>En el Oxxo</div><div>Horario 5:48am</div></li><li> <div><strong>Avenida Sierra Vista y Calle Arequipa</strong></div><div>Frente al módulo de vigilancia</div><div>Horario 5:50am</div></li><li> <div><strong>Universidad La Salle</strong></div><div>Calle Benjamín Hill en la biblioteca</div><div>Horario 06:36am</div></li></ul> </div><div class="alignleft"> <h4>Paradas de Regreso</h4> <ul> <li> <div><strong>Universidad La Salle</strong></div><div>Calle Benjamín Hill en la biblioteca</div><div>Horario 14:15hrs</div></li><li> <div><strong>Avenida Ticoman y Calle de Matanzas</strong></div><div>Frente al Oxxo</div><div>Horario 15:25pm</div></li><li> <div><strong>Avenida Juan de Dios Batiz y Avenida I.P.N</strong></div><div>En el puente peatonal antes de cruzar I.P.N</div><div>Horario 15:28hrs</div></li><li> <div><strong>Av. Miguel Bernad y Arrollo de Zacatenco</strong></div><div>En la esquina</div><div>Horario 15:30hrs</div></li><li> <div><strong>Av. Othon de Mendizábal y Calle Santa Ana</strong></div><div>En el fraccionamiento Torres Lindavista</div><div>Horario 15:32hrs</div></li></ul> </div>');}
		if(ruta == 7){$('div.tabla-ulsabus').html('<div class="alignleft"> <h4>Paradas de Venida</h4> <ul> <li> <div><strong>Periférico y Cuauhtémoc</strong></div><div>Mundo E en el parabus</div><div>Horario 5:30am</div></li><li> <div><strong>Periférico y Francisco I. Madero</strong></div><div>En el hotel Parque Satélite</div><div>Horario 5:33am</div></li><li> <div><strong>Manuel E. Isaguirre y Federico T. de la Chica</strong></div><div>En el minisuper “K”</div><div>Horario 5:42am</div></li><li> <div><strong>Universidad La Salle</strong></div><div>Calle Benjamín Hill en la biblioteca</div><div>Horario 6:30am</div></li></ul> </div><div class="alignleft"> <h4>Paradas de Regreso</h4> <ul> <li> <div><strong>Universidad La Salle</strong></div><div>Calle Benjamín Hill en la biblioteca</div><div>Horario 14:15hrs</div></li><li> <div><strong>Av. Marina y Circuitos Científicos</strong></div><div>A un costado del Walmart</div><div>Horario 15:08hrs</div></li><li> <div><strong>Calle Viveros de la Colina y Periférico</strong></div><div>Fraccionamiento Plazas de la Colina</div><div>Horario 15:18hrs</div></li><li> <div><strong>Calle Sor Juana Inés de la Cruz y Periférico</strong></div><div>En el puente peatonal de Mundo E</div><div>Horario 15:25hrs</div></li></ul> </div>');}
		if(ruta == 8){$('div.tabla-ulsabus').html('<div class="alignleft"> <h4>Paradas de Venida</h4> <ul> <li> <div><strong>Estación del metro Cd. Azteca</strong></div><div>En la dulcería La Abejita sobre Av. Central</div><div>Horario 05:20am</div></li><li> <div><strong>Estación del Metro Plaza Aragón</strong></div><div>Puente peatonal del IMSS – sobre Av. Central</div><div>Horario 05:23am</div></li><li> <div><strong>Estación del metro Olimpica</strong></div><div>Puente peatonal sobre Av. Central</div><div>Horario 05:27am</div></li><li> <div><strong>Estación del metro Ecatepec</strong></div><div>Puente peatonal sobre Av. Central</div><div>Horario 05:29am</div></li><li> <div><strong>Estación del metro Muzquiz</strong></div><div>Puente peatonal sobre Av. Central</div><div>Horario 05:33am</div></li><li> <div><strong>Estación del metro Río de los Remedios</strong></div><div>Puente peatonal sobre Av. Central</div><div>Horario 05:37am</div></li><li> <div><strong>Estación del metro Impulsora</strong></div><div>Bajo el puente peatonal sobre Av. Central</div><div>Horario 05:39am</div></li><li> <div><strong>Estación del metro Nezahualcóyotl</strong></div><div>Bajo el puente peatonal sobre Av. Central</div><div>Horario 05:42am</div></li><li> <div><strong>Universidad La Salle</strong></div><div>Calle Benjamín Hill – En la biblioteca</div><div>Horario 06:30am</div></li></ul> </div><div class="alignleft"> <h4>Paradas de Regreso</h4> <ul> <li> <div><strong>Universidad La Salle</strong></div><div>Calle Benjamín Hill en la biblioteca</div><div>Horario 14:15hrs</div></li><li> <div><strong>Estación del metro Nezahualcóyotl</strong></div><div>En la gasolinería sobre Av. Central</div><div>Horario 15:36hrs</div></li><li> <div><strong>Estación del metro Impulsora</strong></div><div>En el puente peatonal sobre Av. Central</div><div>Horario: 15:39hrs</div></li><li> <div><strong>Estación del metro Río de los Remedios</strong></div><div>Antes del puente peatonal sobre Av. Central</div><div>Horario 15:44hrs</div></li><li> <div><strong>Estación del metro Muzquiz</strong></div><div>En el puente peatonal sobre Av. Central</div><div>Horario 15:48hrs</div></li><li> <div><strong>Estación del metro Ecatepec</strong></div><div>En el puente peatonal sobre Av. Central</div><div>Horario 15:51hrs</div></li><li> <div><strong>Estación del metro Olimpica</strong></div><div>En el puente peatonal sobre Av. Central</div><div>Horario 15:54hrs</div></li><li> <div><strong>Estación del metro Plaza Aragón</strong></div><div>En el puente peatonal sobre Av. Central</div><div>Horario 15:57hrs</div></li><li> <div><strong>Estación del metro Cd. Azteca</strong></div><div>Pasando la estación del metro</div><div>Horario 14:00hrs</div></li></ul> </div>');}
		$('.imagenes-servicios center img').attr('src','images/nuevosArtes/servicio/ulsabus/' + ruta + '.png');
	}