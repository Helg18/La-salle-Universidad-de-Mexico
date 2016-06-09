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
    blog = []
    ;


$(document).ready(function(){

    getInitialData();
    //cuadrosDeVida();

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


        calendario();
        calendario_importante();
        noticias_blog();
        vinculacion_empresarial();
        investigacion();
        noticias();

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
            html = html + '<div id="_btn_select" class="subMenuUnoUniversidad" onclick="C1.showContent('+ index +')">' + post.title + '</div>';
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

        //Cuando termine pinto el nuevo submenu

        //console.log(html);
        $('#universidadShow .ten.columns.submenu').html(html);
        this.showContent2(index,0);
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
                '<p>' +child.paragraph_1_html+ '</p>' +
                '</div>'
            ;
        });


        $('#vidaShow .ocultarContenidoSubMenu .container .row').html(html);

        cuadrosDeVida();

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
            html = html + '<div class="subMenuUnoAccionSocial" onclick="C6.showContent('+ index +')">' + post.title + '</div>';
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

    }

    this.show();
}



function Category9(){
    /** Contacto **/


    var d       = initial_data.categories[8],
        html    = '',
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
        var post = d.posts[index];
        $('#contactoShow .textoTituloContacto p').html(post.paragraph_1_html);


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
    $('.custom-modal .text').html(post.paragraph_1_html);



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
            '<div class="textoVinculacionActive">'+
            post.title+ '<br><br>'+
            '<p>'+ post.paragraph_1_html+ '</p>'+
            '</div>'+
            '</div>';
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

function noticias(){


    var tmpSlices = '';
    var tmpindicator = '';

    var con=0;

    $('#myCarousel').append('<ol class="carousel-indicators"></ol>');

    $.each(initial_data.categories[9].posts, function(index,post) {

        if(con=="" || con==0){

            tmpindicator = tmpindicator + '<li data-target="#myCarousel" data-slide-to="'+con+'" class="active"></li>';
            
            }else{
            tmpindicator = tmpindicator +' <li data-target="#myCarousel" data-slide-to="'+con+'" class=""></li> ';

        }
        con=con+1;

    });

    $('.carousel-indicators').append(tmpindicator);

    con=0;

    $.each(initial_data.categories[9].posts, function(index,post) {

        if(con=="" || con==0){

            tmpSlices = '<div class="item active">'+
            '<img src="'+post.picture_url+'" alt="'+post.title+'">'+
            '<div class="carousel-caption">'+
            '<h3>'+post.title+'</h3>'+
            '<p>'+post.subtitle+'</p> '+
            '</div></div>';

            $('.carousel-inner').append(tmpSlices);  

            
            }else{
            
            tmpSlices = '<div class="item ">'+
            '<img src="'+post.picture_url+'" alt="'+post.title+'">'+
            '<div class="carousel-caption">'+
            '<h3>'+post.title+'</h3>'+
            '<p>'+post.subtitle+'</p> '+
            '</div></div>';

            

            $('.carousel-inner').append(tmpSlices);  
            

        }

        con=con+1;

    });

    control = '<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">'+
    '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>'+
    '<span class="sr-only">Previous</span>'+
    '</a>'+
    '<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">'+
    '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>'+
    '<span class="sr-only">Next</span>'+
    '</a>';

    $('#myCarousel').append(control);        

}



