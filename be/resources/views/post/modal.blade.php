<script type="text/ng-template" id="myModalContent.html">
    <div class="modal-header">
        <h3 class="modal-title">@{{title}}</h3>
    </div>
    <div class="modal-body">
        <div class="form-group form-group-sm">
            <label class="control-label small">Titulo.</label>
            <input type="text" class="form-control" placeholder="" ng-model="post.title">
        </div>


        <div class="form-group form-group-sm ng-hide" ng-show="parent_id == 1 || category_id == 1">
            <label class="control-label small">Subtitulo.</label>
            <input type="text" class="form-control" placeholder="" ng-model="post.subtitle">
        </div>

        <div class="form-group" >
            <label class="control-label small">Parrafo.</label>
            <textarea rows="4" class="form-control" width="100%" ng-model="post.paragraph_1"></textarea>
        </div>


        <div class="form-group">
            <label class="control-label small">Idioma</label>
        
            <select class="form-control" name="language" id="language">
                <option {{ $record && $record->language==1 ? 'selected':'' }} value="1">Español</option>
                <option {{ $record && $record->language==2 ? 'selected':'' }} value="2">Ingles</option>
            </select>             

    
        </div>

    </div>
    <div class="modal-footer">
        <button class="btn btn-primary" type="button" ng-click="ok()">Guardar</button>
        <button class="btn btn-default" type="button" ng-click="cancel()">Cancelar</button>
    </div>
</script>