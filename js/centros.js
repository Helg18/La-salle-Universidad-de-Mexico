function getInitialData(lang,id){

    if(lang==1 || lang=="" || lang==undefined){ruta = 'initial-data';}else{
        ruta = 'initial-data-e';
    }

    $.get( urlc + ruta +'/'+id, function(data){

         // console.log(data);
        initial_data = data;

        

        // html = "<div id='effect-1' class='effects clearfix'></div>"
        // $('.col-sm-9').html("<div id='effect-1' class='effects clearfix'></div>");

         $.each(initial_data.subcategories, function(index,subcategorias) {
            // console.log(subcategorias);
            // html = html + "<div class='col-sm-12' style='background: #808080;text-align: center;color: #fff;'>"+subcategorias.title+"</div>"
            console.log(initial_data.subcategorias[index].title);
         });

         // $('.effects clearfix').html(html);



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