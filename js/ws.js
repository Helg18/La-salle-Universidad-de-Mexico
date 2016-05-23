
var url = 'http://localhost:8000/api/v1/frontend/',
    initial_data = {},
    C1 = {},
    C2 = {},
    C3 = {}
    ;


$(document).ready(function(){

    getInitialData();
    //cuadrosDeVida();

});


function getInitialData(){
    $.get( url + 'initial-data', function(data){
        initial_data =data;
        C1 = new Category1();
        C2 = new Category2();
        C3 = new Category3();


        calendario();
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
        ul.append('<li><button class="seccion academicas" id="openUno">' + label.name+ '</button></li>');
    });

    //Escondiendo las 4 noticias
    $('.effects.clearfix').children('div').hide();

    //Mostrando solo las que existan
    $.each(initial_data.calendar, function(index,post){

        if(index==0){
            noticia = '.imgNoticiaCalendario';
        }else if(index==1){
            noticia = '.imgNoticiaCalendario2';
        }else if(index==2){
            noticia = '.imgNoticiaCalendario3';
        }else if(index==3){
            noticia = '.imgNoticiaCalendario4';
        }

        $(noticia).show();
        $(noticia + ' .title').html(post.title);
        $(noticia + ' .tituloCalendario').html(post.title);
        $(noticia + ' .img-post').attr('src',post.picture_url);




    });



}
