$(document).ready(function(){

    var lang = getUrlVars()["lang"];
    var id = getUrlVars()["id"];

    if(id=="" || id==undefined){
      id=1;
    }

    if(lang==0 || lang==""){lang=1;}

    getInitialData(lang,id);

});


function getInitialData(lang,id){

        if(lang==1 || lang=="" || lang==undefined){ruta = 'initial-data';}else{
            ruta = 'initial-data-e';
        }
        con=1;
        $.get( urlc + ruta +'/'+id, function(data){

            initial_data = data;

            $('#principal').html("<div id='conten' class='efectos-centro-info effects clearfix'></div>");
            html="";
             $.each(initial_data.subcategorias, function(index,subcategorias) {
                
                html = "<div class='col-sm-12 encabezados' >"+subcategorias.title+"</div>";
                $('#conten').append(html);

                
                             
                $.each(initial_data.subsubcategorias, function(index2,subsubcategorias) {
                    html='';
                    

                    if(subsubcategorias.id_sub_categoria == subcategorias.id)
                    {

                      html = html + "<div id='imgnot"+con+"' class='imgNoticia'><div>";
                      $('#conten').append(html); 

                      html = "<div class='overlayTituloNoticia'><h6>"+subsubcategorias.subtitle+"</h6></div>";
                      html = html + "<img src='../be/public/images/centro/"+subsubcategorias.picture+"' alt=''>"; 
                      html = html + "<div class='overlayNoticia'><h6>"+subsubcategorias.paragraph_1+"</h6><a href='editoriales.html?id="+subsubcategorias.id+"' id='' class='btn_noticia_more'><img src='../images/nuevosArtes/Noticias/icon_more.png' class='encabezadosimg'></a></div>";
                      $('#imgnot'+con).append(html);
                      con=con+1;   
                    }
                    

                });
                
             
             });

             $('#menuPrincipalCentro').html("");

             $.each(initial_data.categorias, function(index,categorias) {

                html = '<li><button class="btnMenu btnMenubtn skip" id="botonAspirante" onmouseover="HacerEfecto(this);"  onclick="'+ "window.location.href='centro_info.html?id="+categorias.id+"';" +'">';
                html = html + '<span class="hover-bg reset">';
                html = html + '<span class="hover-text reset"></span>';
                html = html + '</span>'+categorias.title+'</button></li>';

                $('#menuPrincipalCentro').append(html);

                html="";


             });





        });
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
  
function HacerEfecto(dato){
	var id = dato.id;
	$('button#'+id).hover(
		function(){ 
			$('button#'+id).find( "span" ).addClass('enter');
			$('button#'+id).find( "span" ).removeClass('reset');
		},
		function(){
			$('button#'+id).find( "span" ).removeClass('enter');
		$('button#'+id).find( "span" ).addClass('reset');
		}
	);
}