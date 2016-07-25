<script type="text/ng-template" id="myModal.html">
    <div class="modal-header">
        <h3 class="modal-title">@{{title}}</h3>
    </div>
    <div class="modal-body">
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
        <input type="checkbox" ng-checked=" centro.subtitle !='' "   ng-model=" subhide " >
        <div ng-show=" subhide " ng-hide=" centro.subtitle =='' " class="form-group form-group-sm">            
            <input type="text" class="form-control" placeholder="" ng-model="centro.subtitle">
        </div>

        <br>
        <label class="control-label small">Ver Parrafo.1</label>
        <input type="checkbox"  ng-checked=" centro.paragraph_1 !='' "   ng-model=" parr1 " >
        <div ng-show="parr1 " ng-hide=" centro.paragraph_1 =='' " class="form-group" >
            <textarea rows="4" class="form-control" width="100%" ng-model="centro.paragraph_1"></textarea>
        </div>
        
        <br>
        <label class="control-label small">Ver Parrafo.2</label>
        <input type="checkbox" ng-checked=" centro.paragraph_2 !='' "   ng-model=" parr2 " >
        <div ng-show="parr2 "  ng-hide=" centro.paragraph_2 =='' " class="form-group" >
            <textarea rows="4" class="form-control" width="100%" ng-model="centro.paragraph_2"></textarea>
        </div>

        <br>
        <label class="control-label small">Ver Parrafo.3</label>
        <input type="checkbox" ng-checked=" centro.paragraph_3 !='' "   ng-model=" parr3 " >
        <div ng-show="parr3 " ng-hide=" centro.paragraph_3 =='' " class="form-group" >
            <textarea rows="4" class="form-control" width="100%" ng-model="centro.paragraph_3"></textarea>
        </div>


        <br>
        <label class="control-label small">Ver Imagen</label>
        <input type="checkbox" ng-checked=" centro.imag !='' "   ng-model=" imag " >
        <div ng-show="imag " ng-hide=" centro.picture =='' " class="form-group" >
            <input type="file" class="form-control" ng-model="centro.picture">
        </div>

        <br>
        <label class="control-label small">Ver Video</label>
        <input type="checkbox" ng-checked=" centro.video !='' "   ng-model=" videos " >
        <div ng-show="videos " ng-hide=" centro.video =='' "class="form-group" >
            <input type="text" class="form-control" placeholder="Video" ng-model="centro.video">
        </div>

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