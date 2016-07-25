<script type="text/ng-template" id="myModal.html">
    <div class="modal-header">
        <h3 class="modal-title">@{{title}}</h3>
    </div>
    <div class="modal-body">
        <div class="form-group form-group-sm">
            <label class="control-label small">Titulo.</label>
            <input type="text" class="form-control" placeholder="" ng-model="centro.title">
        </div>
        
        <div class="form-group form-group-sm">
            <label class="control-label small">Subtitulo.</label>
            <input type="text" class="form-control" placeholder="" ng-model="centro.subtitle">
        </div>

        <div class="form-group" >
            <label class="control-label small">Parrafo.1</label>
            <textarea rows="4" class="form-control" width="100%" ng-model="centro.paragraph_1"></textarea>
        </div>
        <div class="form-group" >
            <label class="control-label small">Parrafo.2</label>
            <textarea rows="4" class="form-control" width="100%" ng-model="centro.paragraph_2"></textarea>
        </div>
        <div class="form-group" >
            <label class="control-label small">Parrafo.3</label>
            <textarea rows="4" class="form-control" width="100%" ng-model="centro.paragraph_3"></textarea>
        </div>
        <div class="form-group" >
            <label class="control-label small">Imagen</label>
            <input type="file" class="form-control" ng-model="centro.picture">
        </div>

        <div class="form-group" >
            <label class="control-label small">Video</label>
            <textarea rows="4" class="form-control" width="100%" ng-model="centro.video"></textarea>
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