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
    select_box = false
    ;


$(document).ready(function(){

    getInitialData();
    modal = $('[data-remodal-id=modal2]').remodal({
        modifier: 'with-red-theme'
    });


    

    $( "#buscarpost" ).click(function() {
            
            var x = document.getElementById("postdls").options.length;
            var datalists = document.getElementById("postdls");
            var flag=0;
            for(con=0;con<x;con++){

                // var resultado = datalists.options.namedItem(this.value).value;
                // console.log(resultado);

                var valorbuscar = document.getElementById("buscar").value;   
                //console.log(valorbuscar);
                
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



function getInitialData(){


    $.get( url + 'initial-data', function(data){

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
    }

    this.showContent2 =  function(index,index2){

        //Esta funcion pintaria el contenido que hay cuando le damos clic al nuevo submenu
        var post = d.posts[index].children[index2]; //leo el hijo y ya tengo acceso a el

        //aqui ya pinto el contenido del texto
        $('#universidadShow .textoTituloUniversidad p').html(post.subtitle  ? post.subtitle : '');
        $('#universidadShow .descripcionTituloUniversidad-.ws').html(post.paragraph_1);


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

        

        $.each(post.children, function(index,child){
            html = html + '<div class="cuadrosVida">' +
                '<h6 class="azulFuerteInvetigacion">' + child.title + '</h6>' +
                '<p class="scroll-box-140">' +child.paragraph_1_html+ '</p>' +
                '</div>'
            ;
        });


        $('#vidaShow .ocultarContenidoSubMenu .container .row').html(html);

        cuadrosDeVida();
        ocultarCaorusel();

    }

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
        $("#myCarouselLaSalle").css({ 'display': "none" });
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

        
    }

    this.showContent2 =  function(index,index2){
		$('.descripcionTituloContacto').fadeIn('slow');	// Mostramos la descripcion del contacto
        //Esta funcion pintaria el contenido que hay cuando le damos clic al nuevo submenu
        var post = d.posts[index].children[index2]; //leo el hijo y ya tengo acceso a el
        // console.log(post);
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
            //console.log(tmp);

            marcaDiasCalendario(tmp);


        }
    });



    muestraPrevioEventos(initial_data.calendar);
    marcaDiasCalendario({month: initial_month, year: initial_year});
}

function muestraPrevioEventos(posts, custom_date){

    //console.log(current_posts);
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
        $(noticia + ' .title').html(post.title);
        $(noticia + ' .tituloCalendario').html(post.title.substring(0,30) + '...');
        $(noticia + ' .img-post').attr('src',post.picture_url);
        $(noticia + ' a').data('index',index);
        //console.log($(noticia + ' a').data('index'));


    });
}

function marcaDiasCalendario(aamm){

    if(!aamm) aamm=current_yymm;
    aamm.label_id = current_label;
    current_yymm = aamm;

    $.post( url + 'calendar-events', aamm, function(data){
        //console.log(data);
        current_posts = [];
        $(".responsive-calendar").responsiveCalendar('clearAll');
        $.each(data.posts, function(index,post){
            //calendar.events.push();
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
    //console.log(element.);

    post = tmp_posts[$(element).data('index')];
    //console.log(post);
    $('.custom-modal img').attr('src',post.picture_url);
    $('.custom-modal h5').html(post.title);
    // $('.custom-modal .text').html(post.paragraph_1_html);
	
    //$('#textogeneral').val(post.paragraph_1_html);
	$('#textogeneral').html(post.paragraph_1_html); // Se puso como div y no como textarea

    modal.open();
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
                //'<div class="desc_image"><img src="images/nuevosArtes/calendario/Button_more.png"></div>' +
            '</div>' +
            '</div>' +
                //'<img src="images/nuevosArtes/calendario/slider_congreso.png" alt=""  />' +
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
            // '<button class="btn_noticia_more" data-index="'+index+'"><img src="images/nuevosArtes/Noticias/icon_more.png"></button>'+
            '</div>'+
            '</div>';


        //console.log(count);

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
        /*tmp = tmp + '<div class="cuadrosVida">' +
            '<h6 class="azulFuerteInvetigacion">' + post.title + '</h6>' +
            '<p class="scroll-box-140">' +post.paragraph_1_html+ '</p>' +
            '</div>'*/
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

function lineatiempo(){


    var tmpSliceslt = '';
    var tmpindicator = '';

    var con=0;
    
    $('#myCarouselLaSalle').append('<ol id="indi" class="carousel-indicators"></ol><div id="clt" class="carousel-inner" role="listbox">');

    $.each(initial_data.categories[10].posts, function(index,post) {

        if(con=="" || con==0){
            tmpindicator = tmpindicator + '<li data-target="#myCarouselLaSalle" data-slide-to="'+con+'" class="active"></li>';
            
            }else{
            tmpindicator = tmpindicator +' <li data-target="#myCarouselLaSalle" data-slide-to="'+con+'" class=""></li> ';

        }
        con=con+1;

    });

    $('#indi').append(tmpindicator);

    con=0;

     $.each(initial_data.categories[10].posts, function(index,post) {

        if(con=="" || con==0){

            tmpSliceslt = '<div class="item active">'+
            '<img src="'+post.picture_url+'" alt="'+post.subtitle+'">'+
            '<div class="carousel-caption">'+
            '<h2>'+post.title+'</h2>'+
            '<p>'+post.paragraph_1+'</p> '+
            '</div></div>';

            $('#clt').append(tmpSliceslt);  
            
            }else{
            
            tmpSliceslt = '<div class="item ">'+
            '<img src="'+post.picture_url+'" alt="'+post.subtitle+'">'+
            '<div class="carousel-caption">'+
            '<h2>'+post.title+'</h2>'+
            '<p>'+post.paragraph_1+'</p> '+
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

    //document.getElementById("myCarouselLaSalle").style.display = "none";
}

function noticias(){


    // var container_pic_slider="";

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

        boton = '<button id="btn_more_slider_one" class="btn_slider"><img src="images/nuevosArtes/banner/icono_mas.png"></button>';

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
        var html = '<div class="slider1">';
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

                '<div class="overlayMenuBtn">' +
                '<div class="text_btn_menu_oferta">' +
                //'<h6>FACULTAD DE</h6>' +
                '<p><button class="btn_derecho" data-index="'+index2+'">'+title_1+'</button></p>' +
                '</div>' +
                '</div>' +

                '<img src="'+slider.picture_url+'" alt="">' +

                '</div>' +
                '</div>' +
                '</div>';


        });
        html = html + '</div>'

        //Cuando termine pinto el slider

        $('#ofertaAcademicaShow .parent_slider').html(html);

        if(is_showed) {
            console.log("ok");
            $('#ofertaAcademicaShow .slider1').bxSlider({
                slideWidth: 199,
                minSlides: 2,
                maxSlides: 5
            });
        }

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
                //console.log('valor del select');
                //console.log($(this).val());
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

