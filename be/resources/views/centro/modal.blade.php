<script type="text/ng-template" id="myModal.html">
    <div class="modal-header">
        <h3 class="modal-title">@{{title}}</h3>
    </div>
    <div class="modal-body">
        <div class="form-group form-group-sm">
            <label class="control-label small">Tipo.</label>
            <select class="form-control" ng-model="centro.tipo">

            <option ng-selected="centro.tipo==1" value="1">Post</option>
            <option ng-selected="centro.tipo==2" value="2">Calendar</option>

            </select>  
        </div>
        <div class="form-group form-group-sm">
            <label class="control-label small">Order.</label>
            <input type="text" class="form-control" placeholder="" ng-model="centro.order">
        </div>

        <div class="form-group form-group-sm">
            <label class="control-label small">Titulo.</label>
            <input type="text" class="form-control" placeholder="" ng-model="centro.title">
        </div>
        
        <br>
        <label class="control-label small">Ver Subtitulo.</label>
        <input type="checkbox" ng-model=" subhide " >
        <div ng-show=" subhide || centro.subtitle " ng-hide=" !subhide && !centro.subtitle " class="form-group form-group-sm">            
            <input type="text" class="form-control" placeholder="" ng-model="centro.subtitle">
        </div>

        <br>
        <label class="control-label small">Ver Parrafo.1</label>
        <input type="checkbox"  ng-model=" parr1 " >
        <div ng-show="parr1 || centro.paragraph_1 " ng-hide="  !parr1 && !centro.paragraph_1 " class="form-group" >
            <textarea rows="4" class="form-control" width="100%" ng-model="centro.paragraph_1"></textarea>
        </div>
        
        <br>
        <label class="control-label small">Ver Parrafo.2</label>
        <input type="checkbox" ng-model=" parr2 " >
        <div ng-show="parr2 || centro.paragraph_2 " ng-hide="  !parr2 && !centro.paragraph_2 " class="form-group" >
            <textarea rows="4" class="form-control" width="100%" ng-model="centro.paragraph_2"></textarea>
        </div>

        <br>
        <label class="control-label small">Ver Parrafo.3</label>
        <input type="checkbox" ng-model=" parr3 " >
        <div ng-show="parr3 || centro.paragraph_3 " ng-hide="  !parr3 && !centro.paragraph_3 " class="form-group" >
            <textarea rows="4" class="form-control" width="100%" ng-model="centro.paragraph_3"></textarea>
        </div>


        <br>
        <label class="control-label small">Ver Imagen</label>
        <input type="checkbox"    ng-model=" imag " >
        <div ng-show="imag || centro.picture " ng-hide="  !imag && !centro.picture " class="form-group" >
            <input type="file" class="form-control" ng-model="centro.picture">
        </div>

        <br>
        <label class="control-label small">Ver Video</label>
        <input type="checkbox"    ng-model=" videos " >
        <div ng-show="videos || centro.video " ng-hide="  !videos && !centro.video " class="form-group" >
            <input type="text" class="form-control" placeholder="Video" ng-model="centro.video">
        </div>
        
        <br>    

        <label class="control-label small">Ver Fecha/Hora</label>

        <div class="form-group">                
            <div class="input-group " >
                <input type="text" ng-click="open($event)" class="form-control" datepicker-popup="shortTime"  is-open="opened" uib-datepicker-popup  ng-model="centro.fecha_evento"  />
                <span class="input-group-addon">
                    <i ng-click="open($event)" class=" ion ion-calendar"></i>
                </span>
            </div>
        </div>
        
        <br>
        <div class="form-group">
            <label class="control-label small">Idioma</label>
        
            <select class="form-control" ng-model="centro.language">

            <option ng-selected="centro.language==1" value="1">Español</option>
            <option ng-selected="centro.language==2" value="2">Ingles</option>
                
            </select>             

        </div>
    </div>
    <div class="modal-footer">
        <button class="btn btn-primary" type="button" ng-click="ok()">Guardar</button>
        <button class="btn btn-default" type="button" ng-click="cancel()">Cancelar</button>
    </div>


</script>