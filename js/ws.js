
var url = 'http://localhost:8000/api/v1/frontend/',
    initial_data = {},
    C1 = {};
    ;


$(document).ready(function(){

    getInitialData();

});


function getInitialData(){
    $.get( url + 'initial-data', function(data){
        initial_data =data;
        C1 = new Category1();
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