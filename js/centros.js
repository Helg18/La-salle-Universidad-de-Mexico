function getInitialData(lang,id){

    if(lang==1 || lang=="" || lang==undefined){ruta = 'initial-data';}else{
        ruta = 'initial-data-e';
    }

    $.get( urlc + ruta +'/'+id, function(data){

        // console.log(data);

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