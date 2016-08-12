$(document).ready(function(){

    var lang = getUrlVars()["lang"];
    var id = 1;
    if(lang==0 || lang==""){lang=1;}

    getInitialData(lang,id);

});


function getInitialData(lang,id){

        if(lang==1 || lang=="" || lang==undefined){ruta = 'initial-data';}else{
            ruta = 'initial-data-e';
        }

        $.get( urlc + ruta +'/'+id, function(data){

            initial_data = data;
            

            $('#principal').html("<div id='conten' class='efectos-centro-info effects clearfix'></div>");
            html="";
             $.each(initial_data.subcategorias, function(index,subcategorias) {
                
                html = "<div class='col-sm-12 encabezados' >"+subcategorias.title+"</div>";
                html = html + "<div id='imgnot"+index+"' class='imgNoticia'><div>";
                $('#conten').append(html);
                $.each(initial_data.subsubcategorias, function(index,subsubcategorias) {

                    html = "<div class='overlayTituloNoticia'><h6>"+subsubcategorias.subtitle+"</h6></div>";
                    html = html + "<img src='../images/nuevosArtes/Noticias/image_news1.png' alt=''>"; 
                    html = html + "<div class='overlayNoticia'><h6>"+subsubcategorias.paragraph_1+"</h6><a href='editoriales.html' id='' class='btn_noticia_more'><img src='../images/nuevosArtes/Noticias/icon_more.png' class='encabezadosimg'></a></div>";
                    $('#imgnot'+index).append(html);

                });
                
             });

              // $('#principal').html(html);



        });
    }


// $("#imgnot0").mouseover(function() 
//   {
//     $( this ).addClass( 'imgNoticia hoverNoticia' );
//   }
//   );


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