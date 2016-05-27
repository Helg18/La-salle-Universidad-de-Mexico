
var url = 'http://localhost:8000/api/v1/frontend/',
    initial_data = {},
    C1 = {},
    C2 = {},
    C3 = {},
    current_posts = [],
    current_label = false,
    current_yymm = false,
    tmp_posts = [],
    modal = ''
    ;


$(document).ready(function(){

    getInitialData();
    //cuadrosDeVida();


     modal = $('[data-remodal-id=modal2]').remodal({
        modifier: 'with-red-theme'
    });


});


function getInitialData(){
    $.get( url + 'initial-data', function(data){
        initial_data =data;
        C1 = new Category1();
        C2 = new Category2();
        C3 = new Category3();


        calendario();
        calendario_importante();
    });
}


function Category1(){
    /** Universidad La Salle **/


        var d       = initial_data.categories[0],
            html    = '',
            c       = {}
        ;


    this.show =  function(){
        //console.log('Universidad La Salle');
        //console.log(d.posts);
        $.each(d.posts, function(index,post){
            html = html + '<div class="subMenuUnoUniversidad" onclick="C1.showContent('+ index +')">' + post.title + '</div>';
        });

        $('.ten.columns.subMenuUniversidad').html(html);
        this.showContent(0);
    }

    this.showContent =  function(index){
        var post = d.posts[index];
        $('.textoTituloUniversidad p').html(post.subtitle);
        //console.log(post);
        //console.log($('.descripcionTituloUniversidad.ws').html());
        //console.log(post.paragraph1);
        $('.descripcionTituloUniversidad.ws').html(post.paragraph_1_html);
        $('.parrafoUniversidad.ws').html(post.paragraph_2_html);
        $('.seccion_1.ws').html(post.video_iframe +" "+post.picture_html);

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
        //console.log('Universidad La Salle');
        //console.log(d.posts);
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

        //$('.descripcionTituloUniversidad.ws').html(post.paragraph_1_html);
        //$('.parrafoUniversidad.ws').html(post.paragraph_2_html);
        //$('.seccion_1.ws').html(post.video_iframe +" "+post.picture_html);


        $.each(post.children, function(index,child){
            html = html + '<div class="cuadrosVida">' +
                '<h6 class="azulFuerteInvetigacion">' + child.title + '</h6>' +
                '<p>' +child.paragraph_1_html+ '</p>' +
                '</div>'
                ;
        });


        $('.ocultarContenidoSubMenu .container .row').html(html);

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
        //console.log(post);
        //console.log($('.descripcionTituloUniversidad.ws').html());
        //console.log(post.paragraph1);
        $('.descripcionTituloServicios.ws').html(post.paragraph_1_html);
        $('.parrafoServicios.ws').html(post.paragraph_2_html);
        $('.seccion_3.ws').html(post.video_iframe +" "+post.picture_html);

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
    $('.effects.clearfix').children('div').hide();

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
        $(noticia + ' .tituloCalendario').html(post.title);
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
    $('.custom-modal h5').attr('src',post.title);
    $('.custom-modal .text').attr('src',post.paragraph_1_html);



    modal.open();
}



function calendario_importante(){

}