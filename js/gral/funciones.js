$(document).ready(function(){

    funciones();

});


function funciones(){
    $("#botonMenuRedesSociales").on( "click", function() {
        //$('#galeriaClientes').hide(); //oculto mediante id
        //$('.target').hide(); //muestro mediante clase
        if($('#contenedorBotonesRedesSociales').is(":visible") ){
            $('#contenedorBotonesRedesSociales').hide("slow");
        }else{
            $('#contenedorBotonesRedesSociales').show("slow");
        }
    });


    $("#botonUno").on( "click", function() {
        //$('#galeriaClientes').hide(); //oculto mediante id
        //$('.target').hide(); //muestro mediante clase
        if($('#universidadShow').is(":visible") ){
            $('#universidadShow').hide("slow");
            $('#opc_menu_principal').hide("slow");
        }else{
            $('html,body').animate({scrollTop: $("#MenuUbicacionPrincipal").offset().top}, 2000);
            $('#universidadShow').show("slow");
            $("#changeTextTitulo").text('Modelo Educativo');
            $('#opc_menu_principal').hide("slow");
        }

        if($('#ofertaAcademicaShow').is(":visible")) {
            $('#ofertaAcademicaShow').hide("slow");
        }

        if($('#vinculacionEmpresarialShow').is(":visible")) {
            $('#vinculacionEmpresarialShow').hide("slow");
        }

        if($('#accionsocialShow').is(":visible")) {
            $('#accionsocialShow').hide("slow");
        }

        if($('#vidaShow').is(":visible")) {
            $('#vidaShow').hide("slow");
        }

        if($('#serviciosShow').is(":visible")) {
            $('#serviciosShow').hide("slow");
        }

        if($('#investigacionShow').is(":visible")) {
            $('#investigacionShow').hide("slow");
        }

        if($('#contactoShow').is(":visible")) {
            $('#contactoShow').hide("slow");
        }

    });


    $("#botonDos").on( "click", function() {
        //$('#galeriaClientes').hide(); //oculto mediante id
        //$('.target').hide(); //muestro mediante clase
        if($('#ofertaAcademicaShow').is(":visible") ){
            $('#ofertaAcademicaShow').hide("slow");
        }else{
            $('#ofertaAcademicaShow').show("slow");
            $("#changeTextTitulo").text('Becas');
        }

        if($('#universidadShow').is(":visible")) {
            $('#universidadShow').hide("slow");
        }

        if($('#vinculacionEmpresarialShow').is(":visible")) {
            $('#vinculacionEmpresarialShow').hide("slow");
        }

        if($('#accionsocialShow').is(":visible")) {
            $('#accionsocialShow').hide("slow");
        }

        if($('#vidaShow').is(":visible")) {
            $('#vidaShow').hide("slow");
        }

        if($('#serviciosShow').is(":visible")) {
            $('#serviciosShow').hide("slow");
        }

        if($('#investigacionShow').is(":visible")) {
            $('#investigacionShow').hide("slow");
        }

        if($('#contactoShow').is(":visible")) {
            $('#contactoShow').hide("slow");
        }

    });

    $("#botonDos").click(function() {
        $('html,body').animate({scrollTop: $("#MenuUbicacionPrincipal").offset().top}, 2000);
    });




    $("#botonTres").on( "click", function() {
        //$('#galeriaClientes').hide(); //oculto mediante id
        //$('.target').hide(); //muestro mediante clase
        if($('#vidaShow').is(":visible") ){
            $('#vidaShow').hide("slow");
        }else{
            $('#vidaShow').show("slow");
            $("#changeTextTitulo").text('Arte y Cultura');
        }

        if($('#universidadShow').is(":visible")) {
            $('#universidadShow').hide("slow");
        }

        if($('#ofertaAcademicaShow').is(":visible")) {
            $('#ofertaAcademicaShow').hide("slow");
        }

        if($('#vinculacionEmpresarialShow').is(":visible")) {
            $('#vinculacionEmpresarialShow').hide("slow");
        }

        if($('#accionsocialShow').is(":visible")) {
            $('#accionsocialShow').hide("slow");
        }

        if($('#serviciosShow').is(":visible")) {
            $('#serviciosShow').hide("slow");
        }

        if($('#investigacionShow').is(":visible")) {
            $('#investigacionShow').hide("slow");
        }

        if($('#contactoShow').is(":visible")) {
            $('#contactoShow').hide("slow");
        }
    });

    $("#botonTres").click(function() {
        $('html,body').animate({scrollTop: $("#MenuUbicacionPrincipal").offset().top}, 2000);
    });

    $("#botonCuatro").on( "click", function() {
        //$('#galeriaClientes').hide(); //oculto mediante id
        //$('.target').hide(); //muestro mediante clase
        if($('#serviciosShow').is(":visible") ){
            $('#serviciosShow').hide("slow");
        }else{
            $('#serviciosShow').show("slow");
            $("#changeTextTitulo").text('servicios');
        }

        if($('#universidadShow').is(":visible")) {
            $('#universidadShow').hide("slow");
        }

        if($('#ofertaAcademicaShow').is(":visible")) {
            $('#ofertaAcademicaShow').hide("slow");
        }

        if($('#vinculacionEmpresarialShow').is(":visible")) {
            $('#vinculacionEmpresarialShow').hide("slow");
        }
        if($('#accionsocialShow').is(":visible")) {
            $('#accionsocialShow').hide("slow");
        }
        if($('#vidaShow').is(":visible")) {
            $('#vidaShow').hide("slow");
        }
        if($('#investigacionShow').is(":visible")) {
            $('#investigacionShow').hide("slow");
        }
        if($('#contactoShow').is(":visible")) {
            $('#contactoShow').hide("slow");
        }
    });


    $("#botonCuatro").click(function() {
        $('html,body').animate({scrollTop: $("#MenuUbicacionPrincipal").offset().top}, 2000);
    });


    $("#botonCinco").on( "click", function() {
        //$('#galeriaClientes').show(); //muestro mediante id
        //$('.target').show(); //muestro mediante clase
        if($('#vinculacionEmpresarialShow').is(":visible") ){
            $('#vinculacionEmpresarialShow').hide("slow");
        }else{
            $('#vinculacionEmpresarialShow').show("slow");
            $("#changeTextTitulo").text('Vinculacion empresarial');
        }

        if($('#universidadShow').is(":visible")) {
            $('#universidadShow').hide("slow");
        }

        if($('#ofertaAcademicaShow').is(":visible")) {
            $('#ofertaAcademicaShow').hide("slow");
        }

        if($('#accionsocialShow').is(":visible")) {
            $('#accionsocialShow').hide("slow");
        }
        if($('#serviciosShow').is(":visible")) {
            $('#serviciosShow').hide("slow");
        }
        if($('#vidaShow').is(":visible")) {
            $('#vidaShow').hide("slow");
        }
        if($('#investigacionShow').is(":visible")) {
            $('#investigacionShow').hide("slow");
        }
        if($('#contactoShow').is(":visible")) {
            $('#contactoShow').hide("slow");
        }
    });

    $("#botonCinco").click(function() {
        $('html,body').animate({scrollTop: $("#MenuUbicacionPrincipal").offset().top}, 2000);
    });


    $("#botonSeis").on( "click", function() {
        //$('#galeriaClientes').hide(); //oculto mediante id
        //$('.target').hide(); //muestro mediante clase
        if($('#accionsocialShow').is(":visible") ){
            $('#accionsocialShow').hide("slow");
        }else{
            $('#accionsocialShow').show("slow");
            $("#changeTextTitulo").text('Accion social');
        }

        if($('#universidadShow').is(":visible")) {
            $('#universidadShow').hide("slow");
        }

        if($('#ofertaAcademicaShow').is(":visible")) {
            $('#ofertaAcademicaShow').hide("slow");
        }


        if($('#vinculacionEmpresarialShow').is(":visible")) {
            $('#vinculacionEmpresarialShow').hide("slow");
        }
        if($('#serviciosShow').is(":visible")) {
            $('#serviciosShow').hide("slow");
        }

        if($('#vidaShow').is(":visible")) {
            $('#vidaShow').hide("slow");
        }

        if($('#investigacionShow').is(":visible")) {
            $('#investigacionShow').hide("slow");
        }

        if($('#contactoShow').is(":visible")) {
            $('#contactoShow').hide("slow");
        }


    });


    $("#botonSeis").click(function() {
        $('html,body').animate({scrollTop: $("#MenuUbicacionPrincipal").offset().top}, 2000);
    });

    $("#botonSiete").on( "click", function() {
        //$('#galeriaClientes').hide(); //oculto mediante id
        //$('.target').hide(); //muestro mediante clase
        if($('#investigacionShow').is(":visible") ){
            $('#investigacionShow').hide("slow");
        }else{
            $('#investigacionShow').show("slow");
            $("#changeTextTitulo").text('Investigcion');
        }

        if($('#universidadShow').is(":visible")) {
            $('#universidadShow').hide("slow");
        }

        if($('#ofertaAcademicaShow').is(":visible")) {
            $('#ofertaAcademicaShow').hide("slow");
        }

        if($('#vinculacionEmpresarialShow').is(":visible")) {
            $('#vinculacionEmpresarialShow').hide("slow");
        }

        if($('#accionsocialShow').is(":visible")) {
            $('#accionsocialShow').hide("slow");
        }

        if($('#serviciosShow').is(":visible")) {
            $('#serviciosShow').hide("slow");
        }

        if($('#vidaShow').is(":visible")) {
            $('#vidaShow').hide("slow");
        }

        if($('#contactoShow').is(":visible")) {
            $('#contactoShow').hide("slow");
        }



    });

    $("#botonSiete").click(function() {
        $('html,body').animate({scrollTop: $("#MenuUbicacionPrincipal").offset().top}, 2000);
    });



    $("#botonOcho").on( "click", function() {
        //$('#galeriaClientes').hide(); //oculto mediante id
        //$('.target').hide(); //muestro mediante clase
        if($('#contactoShow').is(":visible") ){
            $('#contactoShow').hide("slow");
        }else{
            $('#contactoShow').show("slow");
            $("#changeTextTitulo").text('Contacto');
        }

        if($('#universidadShow').is(":visible")) {
            $('#universidadShow').hide("slow");
        }

        if($('#ofertaAcademicaShow').is(":visible")) {
            $('#ofertaAcademicaShow').hide("slow");
        }

        if($('#vinculacionEmpresarialShow').is(":visible")) {
            $('#vinculacionEmpresarialShow').hide("slow");
        }

        if($('#accionsocialShow').is(":visible")) {
            $('#accionsocialShow').hide("slow");
        }

        if($('#serviciosShow').is(":visible")) {
            $('#serviciosShow').hide("slow");
        }

        if($('#vidaShow').is(":visible")) {
            $('#vidaShow').hide("slow");
        }

        if($('#investigacionShow').is(":visible")) {
            $('#investigacionShow').hide("slow");
        }

    });

    $("#botonOcho").click(function() {
        $('html,body').animate({scrollTop: $("#MenuUbicacionPrincipal").offset().top}, 2000);
    });


    /*SLIDER PRINCIPAL*/

    $("#btn_more_slider_one").on( "click", function() {

        if($('#desc_slider').is(":visible") ){
            $('#desc_slider').hide("slow");
        }else{
            $('#desc_slider').show("slow");
            $("#changeTextTitulo").text('Noticias');
        }
    });
    $("#btn_more_slider_two").on( "click", function() {

        if($('#desc_slider').is(":visible") ){
            $('#desc_slider').hide("slow");
        }else{
            $('#desc_slider').show("slow");
            $("#changeTextTitulo").text('Noticias');
        }
    });
    $("#btn_more_slider_three").on( "click", function() {

        if($('#desc_slider').is(":visible") ){
            $('#desc_slider').hide("slow");
        }else{
            $('#desc_slider').show("slow");
            $("#changeTextTitulo").text('Noticias');
        }
    });
    $("#btn_more_slider_four").on( "click", function() {

        if($('#desc_slider').is(":visible") ){
            $('#desc_slider').hide("slow");
        }else{
            $('#desc_slider').show("slow");
            $("#changeTextTitulo").text('Noticias');
        }
    });

    $("#btn_more_slider").click(function() {
        $('html,body').animate({scrollTop: $("#desc_slider").offset().top}, 2000);
    });



    /*NOTICIAS MAS*/


    $("#btn_more_noticia_uno").on( "click", function() {

        if($('#desc_noticias').is(":visible") ){
            $('#desc_noticias').hide("slow");
        }else{
            $('#desc_noticias').show("slow");
            $("#changeTextTitulo").text('Noticias');
        }
    });

    $("#btn_more_noticia_dos").on( "click", function() {

        if($('#desc_noticias').is(":visible") ){
            $('#desc_noticias').hide("slow");
        }else{
            $('#desc_noticias').show("slow");
            $("#changeTextTitulo").text('Noticias');
        }
    });

    $("#btn_more_noticia_tres").on( "click", function() {

        if($('#desc_noticias').is(":visible") ){
            $('#desc_noticias').hide("slow");
        }else{
            $('#desc_noticias').show("slow");
            $("#changeTextTitulo").text('Noticias');
        }
    });


    $("#btn_more_noticia_cuatro").on( "click", function() {

        if($('#desc_noticias').is(":visible") ){
            $('#desc_noticias').hide("slow");
        }else{
            $('#desc_noticias').show("slow");
            $("#changeTextTitulo").text('Noticias');
        }
    });


    $("#btn_more_noticia_cinco").on( "click", function() {

        if($('#desc_noticias').is(":visible") ){
            $('#desc_noticias').hide("slow");
        }else{
            $('#desc_noticias').show("slow");
            $("#changeTextTitulo").text('Noticias');
        }
    });


    $("#btn_more_noticia_seis").on( "click", function() {

        if($('#desc_noticias').is(":visible") ){
            $('#desc_noticias').hide("slow");
        }else{
            $('#desc_noticias').show("slow");
            $("#changeTextTitulo").text('Noticias');
        }
    });

    $("#btn_more_noticia_siete").on( "click", function() {

        if($('#desc_noticias').is(":visible") ){
            $('#desc_noticias').hide("slow");
        }else{
            $('#desc_noticias').show("slow");
            $("#changeTextTitulo").text('Noticias');
        }
    });

    $("#btn_more_noticia_ocho").on( "click", function() {

        if($('#desc_noticias').is(":visible") ){
            $('#desc_noticias').hide("slow");
        }else{
            $('#desc_noticias').show("slow");
            $("#changeTextTitulo").text('Noticias');
        }
    });

    $("#btn_more_noticia_nueve").on( "click", function() {

        if($('#desc_noticias').is(":visible") ){
            $('#desc_noticias').hide("slow");
        }else{
            $('#desc_noticias').show("slow");
            $("#changeTextTitulo").text('Noticias');
        }
    });



    $("#btn_process_success").on( "click", function() {

        if($('#acreditacion_la_salle').is(":visible") ){
            $('#acreditacion_la_salle').hide("slow");
            $('#imageUp').show("slow");
            $('#downImageDown').hide("slow");
        }else{
            $('#acreditacion_la_salle').show("slow");
            $('#downImageDown').show("slow");
            $('#imageUp').hide("slow");
        }
    });

    $("#btn_process_success").click(function() {
        $('html,body').animate({scrollTop: $("#acreditacion_la_salle").offset().top}, 2000);
    });





    $("#botonAspirante").on( "click", function() {

        if($('#aspirantes').is(":visible") ){
            $('#aspirantes').hide("slow");
            $(this).removeClass("perfilActiveButtons");
        }else{
            $('#aspirantes').show("slow");
            $(this).addClass("perfilActiveButtons");
        }

        if($('#perfilEstudiante').is(":visible")) {
            $('#perfilEstudiante').hide("slow");
            $('#botonEstudiante').removeClass("perfilActiveButtons");
        }
        if($('#perfilDocente').is(":visible")) {
            $('#perfilDocente').hide("slow");
            $('#botonDocente').removeClass("perfilActiveButtons");
        }
        if($('#perfilAdministrativo').is(":visible")) {
            $('#perfilAdministrativo').hide("slow");
            $('#botonAdministrativo').removeClass("perfilActiveButtons");
        }
        if($('#perfilEgresado').is(":visible")) {
            $('#perfilEgresado').hide("slow");
            $('#botonEgresado').removeClass("perfilActiveButtons");
        }
        if($('#perfilPadre').is(":visible")) {
            $('#perfilPadre').hide("slow");
            $('#botonPadre').removeClass("perfilActiveButtons");
        }
        if($('#perfilInternational').is(":visible") ){
            $('#perfilInternational').hide("slow");
            $('#botonInternational').removeClass("perfilActiveButtons");
        }
    });



    $("#botonEstudiante").on( "click", function() {

        if($('#perfilEstudiante').is(":visible") ){
            $('#perfilEstudiante').hide("slow");
            $(this).removeClass("perfilActiveButtons");
        }else{
            $('#perfilEstudiante').show("slow");
            $(this).addClass("perfilActiveButtons");
        }

        if($('#aspirantes').is(":visible")) {
            $('#aspirantes').hide("slow");
            $('#botonAspirante').removeClass("perfilActiveButtons");
        }
        if($('#perfilDocente').is(":visible")) {
            $('#perfilDocente').hide("slow");
            $('#botonDocente').removeClass("perfilActiveButtons");
        }
        if($('#perfilAdministrativo').is(":visible")) {
            $('#perfilAdministrativo').hide("slow");
            $('#botonAdministrativo').removeClass("perfilActiveButtons");
        }
        if($('#perfilEgresado').is(":visible")) {
            $('#perfilEgresado').hide("slow");
            $('#botonEgresado').removeClass("perfilActiveButtons");
        }
        if($('#perfilPadre').is(":visible")) {
            $('#perfilPadre').hide("slow");
            $('#botonPadre').removeClass("perfilActiveButtons");
        }
        if($('#perfilInternational').is(":visible") ){
            $('#perfilInternational').hide("slow");
            $('#botonInternational').removeClass("perfilActiveButtons");
        }
    });

    $("#botonDocente").on( "click", function() {

        if($('#perfilDocente').is(":visible") ){
            $('#perfilDocente').hide("slow");
            $(this).removeClass("perfilActiveButtons");
        }else{
            $('#perfilDocente').show("slow");
            $(this).addClass("perfilActiveButtons");
        }

        if($('#aspirantes').is(":visible")) {
            $('#aspirantes').hide("slow");
            $('#botonAspirante').removeClass("perfilActiveButtons");
        }
        if($('#perfilEstudiante').is(":visible")) {
            $('#perfilEstudiante').hide("slow");
            $('#botonEstudiante').removeClass("perfilActiveButtons");
        }
        if($('#perfilAdministrativo').is(":visible")) {
            $('#perfilAdministrativo').hide("slow");
            $('#botonAdministrativo').removeClass("perfilActiveButtons");
        }
        if($('#perfilEgresado').is(":visible")) {
            $('#perfilEgresado').hide("slow");
            $('#botonEgresado').removeClass("perfilActiveButtons");
        }
        if($('#perfilPadre').is(":visible")) {
            $('#perfilPadre').hide("slow");
            $('#botonPadre').removeClass("perfilActiveButtons");
        }
        if($('#perfilInternational').is(":visible") ){
            $('#perfilInternational').hide("slow");
            $('#botonInternational').removeClass("perfilActiveButtons");
        }

    });

    $("#botonAdministrativo").on( "click", function() {

        if($('#perfilAdministrativo').is(":visible") ){
            $('#perfilAdministrativo').hide("slow");
            $(this).removeClass("perfilActiveButtons");
        }else{
            $('#perfilAdministrativo').show("slow");
            $(this).addClass("perfilActiveButtons");
        }

        if($('#aspirantes').is(":visible")) {
            $('#aspirantes').hide("slow");
            $('#botonAspirante').removeClass("perfilActiveButtons");
        }
        if($('#perfilEstudiante').is(":visible")) {
            $('#perfilEstudiante').hide("slow");
            $('#botonEstudiante').removeClass("perfilActiveButtons");
        }
        if($('#perfilDocente').is(":visible")) {
            $('#perfilDocente').hide("slow");
            $('#botonDocente').removeClass("perfilActiveButtons");
        }
        if($('#perfilEgresado').is(":visible")) {
            $('#perfilEgresado').hide("slow");
            $('#botonEgresado').removeClass("perfilActiveButtons");
        }
        if($('#perfilPadre').is(":visible")) {
            $('#perfilPadre').hide("slow");
            $('#botonPadre').removeClass("perfilActiveButtons");
        }
        if($('#perfilInternational').is(":visible") ){
            $('#perfilInternational').hide("slow");
            $('#botonInternational').removeClass("perfilActiveButtons");
        }

    });

    $("#botonEgresado").on( "click", function() {

        if($('#perfilEgresado').is(":visible") ){
            $('#perfilEgresado').hide("slow");
            $(this).removeClass("perfilActiveButtons");
        }else{
            $('#perfilEgresado').show("slow");
            $(this).addClass("perfilActiveButtons");
        }

        if($('#aspirantes').is(":visible")) {
            $('#aspirantes').hide("slow");
            $('#botonAspirante').removeClass("perfilActiveButtons");
        }
        if($('#perfilEstudiante').is(":visible")) {
            $('#perfilEstudiante').hide("slow");
            $('#botonEstudiante').removeClass("perfilActiveButtons");
        }
        if($('#perfilDocente').is(":visible")) {
            $('#perfilDocente').hide("slow");
            $('#botonDocente').removeClass("perfilActiveButtons");
        }
        if($('#perfilAdministrativo').is(":visible")) {
            $('#perfilAdministrativo').hide("slow");
            $('#botonAdministrativo').removeClass("perfilActiveButtons");
        }
        if($('#perfilPadre').is(":visible")) {
            $('#perfilPadre').hide("slow");
            $('#botonPadre').removeClass("perfilActiveButtons");
        }
        if($('#perfilInternational').is(":visible") ){
            $('#perfilInternational').hide("slow");
            $('#botonInternational').removeClass("perfilActiveButtons");
        }

    });


    $("#botonPadre").on( "click", function() {

        if($('#perfilPadre').is(":visible") ){
            $('#perfilPadre').hide("slow");
            $(this).removeClass("perfilActiveButtons");
        }else{
            $('#perfilPadre').show("slow");
            $(this).addClass("perfilActiveButtons");
        }

        if($('#aspirantes').is(":visible")) {
            $('#aspirantes').hide("slow");
            $('#botonAspirante').removeClass("perfilActiveButtons");
        }
        if($('#perfilEstudiante').is(":visible")) {
            $('#perfilEstudiante').hide("slow");
            $('#botonEstudiante').removeClass("perfilActiveButtons");
        }
        if($('#perfilDocente').is(":visible")) {
            $('#perfilDocente').hide("slow");
            $('#botonDocente').removeClass("perfilActiveButtons");
        }
        if($('#perfilAdministrativo').is(":visible")) {
            $('#perfilAdministrativo').hide("slow");
            $('#botonAdministrativo').removeClass("perfilActiveButtons");
        }
        if($('#perfilEgresado').is(":visible")) {
            $('#perfilEgresado').hide("slow");
            $('#botonEgresado').removeClass("perfilActiveButtons");
        }
        if($('#perfilInternational').is(":visible")) {
            $('#perfilInternational').hide("slow");
            $('#botonInternational').removeClass("perfilActiveButtons");
        }

    });

    $("#botonInternational").on( "click", function() {

        if($('#perfilInternational').is(":visible") ){
            $('#perfilInternational').hide("slow");
            $(this).removeClass("perfilActiveButtons");
        }else{
            $('#perfilInternational').show("slow");
            $(this).addClass("perfilActiveButtons");
        }
        if($('#aspirantes').is(":visible")) {
            $('#aspirantes').hide("slow");
            $('#botonAspirante').removeClass("perfilActiveButtons");
        }
        if($('#perfilEstudiante').is(":visible")) {
            $('#perfilEstudiante').hide("slow");
            $('#botonEstudiante').removeClass("perfilActiveButtons");
        }
        if($('#perfilDocente').is(":visible")) {
            $('#perfilDocente').hide("slow");
            $('#botonDocente').removeClass("perfilActiveButtons");
        }
        if($('#perfilAdministrativo').is(":visible")) {
            $('#perfilAdministrativo').hide("slow");
            $('#botonAdministrativo').removeClass("perfilActiveButtons");
        }
        if($('#perfilEgresado').is(":visible") ){
            $('#perfilEgresado').hide("slow");
            $('#botonEgresado').removeClass("perfilActiveButtons");
        }
        if($('#perfilPadre').is(":visible")) {
            $('#perfilPadre').hide("slow");
            $('#botonPadre').removeClass("perfilActiveButtons");
        }
    });



    /*BOTONERA MENU OFERTA ACADEMICA*/


    $("#btn_derecho").on( "click", function() {

        if($('#container_menu_derecho').is(":visible")){
            $('#container_menu_derecho').hide("slow");
        }else{
            $('#container_menu_derecho').show("slow");
        }
    });


    $("#btn_select_oferta_adm").on( "click", function() {

        if($('#id_container_select_btn_oferta').is(":visible")){
            $('#id_container_select_btn_oferta').hide("slow");
            $('#btn_select_oferta_adm').removeClass("button_menu_right_derecho_active");
        }else{
            $('#id_container_select_btn_oferta').show("slow");
            $('#btn_select_oferta_adm').addClass("button_menu_right_derecho_active");
        }
    });
    $("#btn_select_oferta_per").on( "click", function() {

        if($('#id_container_select_btn_oferta').is(":visible")){
            $('#id_container_select_btn_oferta').hide("slow");
            $('#btn_select_oferta_per').removeClass("button_menu_right_derecho_active");
        }else{
            $('#id_container_select_btn_oferta').show("slow");
            $('#btn_select_oferta_per').addClass("button_menu_right_derecho_active");
        }
    });
    $("#btn_select_oferta_cou").on( "click", function() {

        if($('#id_container_select_btn_oferta').is(":visible")){
            $('#id_container_select_btn_oferta').hide("slow");
            $('#btn_select_oferta_cou').removeClass("button_menu_right_derecho_active");
        }else{
            $('#id_container_select_btn_oferta').show("slow");
            $('#btn_select_oferta_cou').addClass("button_menu_right_derecho_active");
        }
    });
    $("#btn_select_oferta_pla").on( "click", function() {

        if($('#id_container_select_btn_oferta').is(":visible")){
            $('#id_container_select_btn_oferta').hide("slow");
            $('#btn_select_oferta_pla').removeClass("button_menu_right_derecho_active");
        }else{
            $('#id_container_select_btn_oferta').show("slow");
            $('#btn_select_oferta_pla').addClass("button_menu_right_derecho_active");
        }
    });
    $("#btn_select_oferta_bec").on( "click", function() {

        if($('#id_container_select_btn_oferta').is(":visible")){
            $('#id_container_select_btn_oferta').hide("slow");
            $('#btn_select_oferta_bec').removeClass("button_menu_right_derecho_active");
        }else{
            $('#id_container_select_btn_oferta').show("slow");
            $('#btn_select_oferta_bec').addClass("button_menu_right_derecho_active");
        }
    });
}



    /*

    $("#tres").on( "click", function() {
        //$('#galeriaClientes').hide(); //oculto mediante id
        //$('.target').hide(); //muestro mediante clase
        if($('#tresMostrar').is(":visible")){
            $('#tresMostrar').hide("slow");
        }else{
            $('#tresMostrar').show("slow");
        }
    });
    $("#cuatro").on( "click", function() {
        //$('#galeriaClientes').hide(); //oculto mediante id
        //$('.target').hide(); //muestro mediante clase
        if($('#cuatroMostrar').is(":visible")){
            $('#cuatroMostrar').hide("slow");
        }else{
            $('#cuatroMostrar').show("slow");
        }
    });

    $("#factura").on( "click", function() {
        //$('#galeriaClientes').hide(); //oculto mediante id
        //$('.target').hide(); //muestro mediante clase
        if($('#divfactura').is(":visible")){
            $('#divfactura').hide("slow");
        }else{
            $('#divfactura').show("slow");
        }
    });
});*/

/*COMPLETO AJAX 
$(document).ready(function () {
    $("#formulario").submit(function (event) {
        event.preventDefault();
        $("#message").html("<p style='color: #000;'><b>Enviando...</b></p>");
        var  miembro = $('input:radio[name=miembro]:checked').val();
        var  track = $('input:radio[name=track]:checked').val();
        var  factura = $('input:checkbox[name=factura]:checked').val();

        if (typeof(factura) == "undefined"){
            var conFactura = "No";
        }else{
            var conFactura = "Si";
        }

        $.ajax({  
            url: 'controller/controller.php',
            type: 'POST',
            data: {captchas: $('#captcha').val(), miembros: miembro, tracks: track, nombres: $('#nombre').val(), apellidoss: $('#apellidos').val(), gaffets: $('#gaffet').val(), emails: $('#email').val(), institucions: $('#institucion').val(), facturas: conFactura, calles: $('#calle').val(), numeros: $('#numero').val(), colonias: $('#colonia').val(), estados: $('#estado').val(), paiss: $('#pais').val(), comentarios: $('#comentario').val(), afavordeFacturas: $('#afavordeFactura').val(), calleynumeroFacturas: $('#calleynumeroFactura').val(), coloniaFacturas: $('#coloniaFactura').val(), estadoFacturas: $('#estadoFactura').val(), rfcFacturas: $('#rfcFactura').val(), cruzamientoFacturas: $('#cruzamientoFactura').val(), ciudadFacturas: $('#ciudadFactura').val(), cpFacturas: $('#cpFactura').val(), emailFacturas: $('#emailFactura').val()},
            success: function (data, textStatus, xhr) {     
                if (data == 'Error') {
                    //$("#respuesta").html(datos);
                    $("#message").html("captcha incorrecto");
                    //resetform();

                }else{
                    $("#message").html("Gracias captcha");
                    resetform();
                    window.location.href = "informacion.php";      
                }
            },
            error: function (xhr, textStatus, errorThrown) {
            }
        });
    });
});

/*$(function(){
    $("#btn").on("click", function(){
            var formData = $("#formulario").serialize();
            var ruta = "controller/controller.php";
            $.ajax({
                url: ruta,
                type: "POST",
                data: formData,
                success: function(datos)
                {
                    $("#respuesta").html(datos);
                }
            });
        });  
     });


$(document).ready(function(){
    $("#actualizar_captcha").on( "click", function() {
        $("#imagenCaptcha").attr("src","controller/captcha.php?r=" + Math.random());
        var captcha = document.getElementById("captcha");
        captcha.value = "";
    });
});*/

$(document).ready(function(){
    $("#academicas").click(function(){
        $(".academicas").removeClass("seccion");
        $(".academicas").addClass("menuSeccionActive");
    });
});

function resetform() {
    document.getElementById("formulario").reset();
};



function isMail(val) {
    if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)) {
        return true;
    } else {
        return false;
	}
}