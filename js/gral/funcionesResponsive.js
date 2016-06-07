
/*OPCIONES RESPONSIVAS*/

$(document).ready(function(){

    $("#open_menu_principal").on( "click", function() {
        //$('#galeriaClientes').hide(); //oculto mediante id
        //$('.target').hide(); //muestro mediante clase
        if($('#opc_menu_principal').is(":visible") ){
            $('#opc_menu_principal').hide("slow");
        }else{
            $('#opc_menu_principal').show("slow");
        }
    });


    $("#botonUnoResponsive").click(function() {
        if($('#universidadShowResponsive').is(":visible") ){
            $('#universidadShowResponsive').hide("slow");
            $('#opc_menu_principal').hide("slow");
        }else{
            $('html,body').animate({scrollTop: $("#MenuUbicacionPrincipal").offset().top}, 2000);
            $('#universidadShowResponsive').show("slow");
            $("#changeTextTitulo").text('Modelo Educativo');
            $('#opc_menu_principal').hide("slow");
        }

        
        if($('#vidaShowResponsive').is(":visible")) {
            $('#vidaShowResponsive').hide("slow");
        }

        if($('#serviciosShowResponsive').is(":visible")) {
            $('#serviciosShowResponsive').hide("slow");
        }

        if($('#accionsocialShowResponsive').is(":visible")) {
            $('#accionsocialShowResponsive').hide("slow");
        }

        if($('#vinculacionEmpresarialShowResponsive').is(":visible")) {
            $('#vinculacionEmpresarialShowResponsive').hide("slow");
        }   

        if($('#investigacionShowResponsive').is(":visible")) {
            $('#investigacionShowResponsive').hide("slow");
        }

        if($('#contactoShowResponsive').is(":visible")) {
            $('#contactoShowResponsive').hide("slow");
        }
    });


    $("#botonDosResponsive").click(function() {
        if($('#ofertaAcademicaResponsive').is(":visible") ){
            $('#ofertaAcademicaResponsive').hide("slow");
            $('#opc_menu_principal').hide("slow");
        }else{
            $('html,body').animate({scrollTop: $("#MenuUbicacionPrincipal").offset().top}, 2000);
            $('#ofertaAcademicaResponsive').show("slow");
            $('#opc_menu_principal').hide("slow");
        }

        if($('#universidadShowResponsive').is(":visible")) {
            $('#universidadShowResponsive').hide("slow");
        }

        if($('#serviciosShowResponsive').is(":visible")) {
            $('#serviciosShowResponsive').hide("slow");
        }

        if($('#accionsocialShow').is(":visible")) {
            $('#accionsocialShow').hide("slow");
        }

        if($('#vidaShowResponsive').is(":visible")) {
            $('#vidaShowResponsive').hide("slow");
        }

        if($('#serviciosShowResponsive').is(":visible")) {
            $('#serviciosShowResponsive').hide("slow");
        }

        if($('#vinculacionEmpresarialShowResponsive').is(":visible")) {
            $('#vinculacionEmpresarialShowResponsive').hide("slow");
        }
        if($('#accionsocialShowResponsive').is(":visible")) {
            $('#accionsocialShowResponsive').hide("slow");
        }

        if($('#investigacionShowResponsive').is(":visible")) {
            $('#investigacionShowResponsive').hide("slow");
        }
        if($('#contactoShowResponsive').is(":visible")) {
            $('#contactoShowResponsive').hide("slow");
        }
    });
    
    $("#botonTresResponsive").click(function() {
        if($('#vidaShowResponsive').is(":visible") ){
            $('#vidaShowResponsive').hide("slow");
            $('#opc_menu_principal').hide("slow");
        }else{
            $('html,body').animate({scrollTop: $("#MenuUbicacionPrincipal").offset().top}, 2000);
            $('#vidaShowResponsive').show("slow");
            $('#opc_menu_principal').hide("slow");
        }

        if($('#universidadShowResponsive').is(":visible")) {
            $('#universidadShowResponsive').hide("slow");
        }

        if($('#accionsocialShow').is(":visible")) {
            $('#accionsocialShow').hide("slow");
        }

        if($('#serviciosShowResponsive').is(":visible")) {
            $('#serviciosShowResponsive').hide("slow");
        }

        if($('#vinculacionEmpresarialShowResponsive').is(":visible")) {
            $('#vinculacionEmpresarialShowResponsive').hide("slow");
        }
        if($('#accionsocialShowResponsive').is(":visible")) {
            $('#accionsocialShowResponsive').hide("slow");
        }

        if($('#investigacionShowResponsive').is(":visible")) {
            $('#investigacionShowResponsive').hide("slow");
        }

        if($('#contactoShowResponsive').is(":visible")) {
            $('#contactoShowResponsive').hide("slow");
        }
    });

    $("#botonCuatroResponsive").click(function() {
        if($('#serviciosShowResponsive').is(":visible") ){
            $('#serviciosShowResponsive').hide("slow");
            $('#opc_menu_principal').hide("slow");
        }else{
            $('html,body').animate({scrollTop: $("#MenuUbicacionPrincipal").offset().top}, 2000);
            $('#serviciosShowResponsive').show("slow");
            $('#opc_menu_principal').hide("slow");
        }

        if($('#universidadShowResponsive').is(":visible")) {
            $('#universidadShowResponsive').hide("slow");
        }

        if($('#vidaShowResponsive').is(":visible")) {
            $('#vidaShowResponsive').hide("slow");
        }

        if($('#vinculacionEmpresarialShowResponsive').is(":visible")) {
            $('#vinculacionEmpresarialShowResponsive').hide("slow");
        }

        if($('#accionsocialShowResponsive').is(":visible")) {
            $('#accionsocialShowResponsive').hide("slow");
        }

        if($('#investigacionShowResponsive').is(":visible")) {
            $('#investigacionShowResponsive').hide("slow");
        }
        if($('#contactoShowResponsive').is(":visible")) {
            $('#contactoShowResponsive').hide("slow");
        }
    });

    $("#botonCincoResponsive").click(function() {
        if($('#vinculacionEmpresarialShowResponsive').is(":visible") ){
            $('#vinculacionEmpresarialShowResponsive').hide("slow");
            $('#opc_menu_principal').hide("slow");
        }else{
            $('html,body').animate({scrollTop: $("#MenuUbicacionPrincipal").offset().top}, 2000);
            $('#vinculacionEmpresarialShowResponsive').show("slow");
            $('#opc_menu_principal').hide("slow");
        }

        if($('#universidadShowResponsive').is(":visible")) {
            $('#universidadShowResponsive').hide("slow");
        }

        if($('#vidaShowResponsive').is(":visible")) {
            $('#vidaShowResponsive').hide("slow");
        }

        if($('#serviciosShowResponsive').is(":visible")) {
            $('#serviciosShowResponsive').hide("slow");
        }
        if($('#accionsocialShowResponsive').is(":visible")) {
            $('#accionsocialShowResponsive').hide("slow");
        }
        if($('#investigacionShowResponsive').is(":visible")) {
            $('#investigacionShowResponsive').hide("slow");
        }

        if($('#contactoShowResponsive').is(":visible")) {
            $('#contactoShowResponsive').hide("slow");
        }
    });

    $("#botonSeisResponsive").click(function() {
        if($('#accionsocialShowResponsive').is(":visible") ){
            $('#accionsocialShowResponsive').hide("slow");
            $('#opc_menu_principal').hide("slow");
        }else{
            $('html,body').animate({scrollTop: $("#MenuUbicacionPrincipal").offset().top}, 2000);
            $('#accionsocialShowResponsive').show("slow");
            $('#opc_menu_principal').hide("slow");
        }

        if($('#universidadShowResponsive').is(":visible")) {
            $('#universidadShowResponsive').hide("slow");
        }

        if($('#vidaShowResponsive').is(":visible")) {
            $('#vidaShowResponsive').hide("slow");
        }

        if($('#serviciosShowResponsive').is(":visible")) {
            $('#serviciosShowResponsive').hide("slow");
        }

        if($('#vinculacionEmpresarialShowResponsive').is(":visible")) {
            $('#vinculacionEmpresarialShowResponsive').hide("slow");
        }

        if($('#investigacionShowResponsive').is(":visible")) {
            $('#investigacionShowResponsive').hide("slow");
        }
        if($('#contactoShowResponsive').is(":visible")) {
            $('#contactoShowResponsive').hide("slow");
        }
    });

    
    $("#botonSieteResponsive").click(function() {
        if($('#investigacionShowResponsive').is(":visible") ){
            $('#investigacionShowResponsive').hide("slow");
            $('#opc_menu_principal').hide("slow");
        }else{
            $('html,body').animate({scrollTop: $("#MenuUbicacionPrincipal").offset().top}, 2000);
            $('#investigacionShowResponsive').show("slow");
            $('#opc_menu_principal').hide("slow");
        }

        if($('#universidadShowResponsive').is(":visible")) {
            $('#universidadShowResponsive').hide("slow");
        }

        if($('#vidaShowResponsive').is(":visible")) {
            $('#vidaShowResponsive').hide("slow");
        }

        if($('#serviciosShowResponsive').is(":visible")) {
            $('#serviciosShowResponsive').hide("slow");
        }

        if($('#vinculacionEmpresarialShowResponsive').is(":visible")) {
            $('#vinculacionEmpresarialShowResponsive').hide("slow");
        }

        if($('#contactoShowResponsive').is(":visible")) {
            $('#contactoShowResponsive').hide("slow");
        }
    });

    $("#botonOchoResponsive").click(function() {
        if($('#contactoShowResponsive').is(":visible") ){
            $('#contactoShowResponsive').hide("slow");
            $('#opc_menu_principal').hide("slow");
        }else{
            $('html,body').animate({scrollTop: $("#MenuUbicacionPrincipal").offset().top}, 2000);
            $('#contactoShowResponsive').show("slow");
            $('#opc_menu_principal').hide("slow");
        }

        if($('#universidadShowResponsive').is(":visible")) {
            $('#universidadShowResponsive').hide("slow");
        }

        if($('#vidaShowResponsive').is(":visible")) {
            $('#vidaShowResponsive').hide("slow");
        }

        if($('#serviciosShowResponsive').is(":visible")) {
            $('#serviciosShowResponsive').hide("slow");
        }

        if($('#vinculacionEmpresarialShowResponsive').is(":visible")) {
            $('#vinculacionEmpresarialShowResponsive').hide("slow");
        }

        if($('#accionsocialShowResponsive').is(":visible")) {
            $('#accionsocialShowResponsive').hide("slow");
        }

        if($('#investigacionShowResponsive').is(":visible")) {
            $('#investigacionShowResponsive').hide("slow");
        }
    });


    /* PERFILES RESPONSIVE */

    $("#Aspirante").click(function() {
        if($('#perfilAspiranteResponsive').is(":visible") ){
            $('#perfilAspiranteResponsive').hide("slow");
            $('#Aspirante').removeClass("text_boton_active_perfiles_responsive");
        }else{
            $('html,body').animate({scrollTop: $("#punteroPerfiles").offset().top}, 2000);
            $('#perfilAspiranteResponsive').show("slow");
            $('#Aspirante').addClass("text_boton_active_perfiles_responsive");
        }
        
        if($('#perfilEstudianteResponsive').is(":visible")) {
            $('#perfilEstudianteResponsive').hide("slow");
            $('#Estudiante').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilDocenteResponsive').is(":visible")) {
            $('#perfilDocenteResponsive').hide("slow");
            $('#Docente').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilAdministrativoResponsive').is(":visible")) {
            $('#perfilAdministrativoResponsive').hide("slow");
            $('#Administrativo').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilEgresadoResponsive').is(":visible")) {
            $('#perfilEgresadoResponsive').hide("slow");
            $('#Egresado').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilPadresResponsive').is(":visible")) {
            $('#perfilPadresResponsive').hide("slow");
            $('#Padres').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilInternationalStudentResponsive').is(":visible")) {
            $('#perfilInternationalStudentResponsive').hide("slow");
            $('#International').removeClass("text_boton_active_perfiles_responsive");
        }
    });
    
    /* Estudiantes .... .*/

    $("#Estudiante").click(function() {
        if($('#perfilEstudianteResponsive').is(":visible") ){
            $('#perfilEstudianteResponsive').hide("slow");
            $('#Estudiante').removeClass("text_boton_active_perfiles_responsive");
        }else{
            $('html,body').animate({scrollTop: $("#punteroPerfiles").offset().top}, 2000);
            $('#perfilEstudianteResponsive').show("slow");
            $('#Estudiante').addClass("text_boton_active_perfiles_responsive");
        }
        
        if($('#perfilAspiranteResponsive').is(":visible")) {
            $('#perfilAspiranteResponsive').hide("slow");
            $('#Aspirante').removeClass("text_boton_active_perfiles_responsive");
        }

        if($('#perfilDocenteResponsive').is(":visible")) {
            $('#perfilDocenteResponsive').hide("slow");
            $('#Docente').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilAdministrativoResponsive').is(":visible")) {
            $('#perfilAdministrativoResponsive').hide("slow");
            $('#Administrativo').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilEgresadoResponsive').is(":visible")) {
            $('#perfilEgresadoResponsive').hide("slow");
            $('#Egresado').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilPadresResponsive').is(":visible")) {
            $('#perfilPadresResponsive').hide("slow");
            $('#Padres').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilInternationalStudentResponsive').is(":visible")) {
            $('#perfilInternationalStudentResponsive').hide("slow");
            $('#International').removeClass("text_boton_active_perfiles_responsive");
        }
    });

    /* Docente .... .*/

    $("#Docente").click(function() {
        if($('#perfilDocenteResponsive').is(":visible") ){
            $('#perfilDocenteResponsive').hide("slow");
            $('#Docente').removeClass("text_boton_active_perfiles_responsive");
        }else{
            $('html,body').animate({scrollTop: $("#punteroPerfiles").offset().top}, 2000);
            $('#perfilDocenteResponsive').show("slow");
            $('#Docente').addClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilAspiranteResponsive').is(":visible")) {
            $('#perfilAspiranteResponsive').hide("slow");
            $('#Aspirante').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilEstudianteResponsive').is(":visible")) {
            $('#perfilEstudianteResponsive').hide("slow");
            $('#Estudiante').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilAdministrativoResponsive').is(":visible")) {
            $('#perfilAdministrativoResponsive').hide("slow");
            $('#Administrativo').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilEgresadoResponsive').is(":visible")) {
            $('#perfilEgresadoResponsive').hide("slow");
            $('#Egresado').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilPadresResponsive').is(":visible")) {
            $('#perfilPadresResponsive').hide("slow");
            $('#Padres').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilInternationalStudentResponsive').is(":visible")) {
            $('#perfilInternationalStudentResponsive').hide("slow");
            $('#International').removeClass("text_boton_active_perfiles_responsive");
        }
    });

    
    /* Administrativo .... .*/

    
    $("#Administrativo").click(function() {
        if($('#perfilAdministrativoResponsive').is(":visible") ){
            $('#perfilAdministrativoResponsive').hide("slow");
            $('#Administrativo').removeClass("text_boton_active_perfiles_responsive");
        }else{
            $('html,body').animate({scrollTop: $("#punteroPerfiles").offset().top}, 2000);
            $('#perfilAdministrativoResponsive').show("slow");
            $('#Administrativo').addClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilAspiranteResponsive').is(":visible")) {
            $('#perfilAspiranteResponsive').hide("slow");
            $('#Aspirante').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilEstudianteResponsive').is(":visible")) {
            $('#perfilEstudianteResponsive').hide("slow");
            $('#Estudiante').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilDocenteResponsive').is(":visible")) {
            $('#perfilDocenteResponsive').hide("slow");
            $('#Docente').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilEgresadoResponsive').is(":visible")) {
            $('#perfilEgresadoResponsive').hide("slow");
            $('#Egresado').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilPadresResponsive').is(":visible")) {
            $('#perfilPadresResponsive').hide("slow");
            $('#Padres').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilInternationalStudentResponsive').is(":visible")) {
            $('#perfilInternationalStudentResponsive').hide("slow");
            $('#International').removeClass("text_boton_active_perfiles_responsive");
        }
    });

    /* Egresado .... .*/

    
    $("#Egresado").click(function() {
        if($('#perfilEgresadoResponsive').is(":visible") ){
            $('#perfilEgresadoResponsive').hide("slow");
            $('#Egresado').removeClass("text_boton_active_perfiles_responsive");
        }else{
            $('html,body').animate({scrollTop: $("#punteroPerfiles").offset().top}, 2000);
            $('#perfilEgresadoResponsive').show("slow");
            $('#Egresado').addClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilAspiranteResponsive').is(":visible")) {
            $('#perfilAspiranteResponsive').hide("slow");
            $('#Aspirante').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilEstudianteResponsive').is(":visible")) {
            $('#perfilEstudianteResponsive').hide("slow");
            $('#Estudiante').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilDocenteResponsive').is(":visible")) {
            $('#perfilDocenteResponsive').hide("slow");
            $('#Docente').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilAdministrativoResponsive').is(":visible")) {
            $('#perfilAdministrativoResponsive').hide("slow");
            $('#Administrativo').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilPadresResponsive').is(":visible")) {
            $('#perfilPadresResponsive').hide("slow");
            $('#Padres').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilInternationalStudentResponsive').is(":visible")) {
            $('#perfilInternationalStudentResponsive').hide("slow");
            $('#International').removeClass("text_boton_active_perfiles_responsive");
        }


    });

    /* Padres .... .*/

    
    $("#Padres").click(function() {
        if($('#perfilPadresResponsive').is(":visible") ){
            $('#perfilPadresResponsive').hide("slow");
            $('#Padres').removeClass("text_boton_active_perfiles_responsive");
        }else{
            $('html,body').animate({scrollTop: $("#punteroPerfiles").offset().top}, 2000);
            $('#perfilPadresResponsive').show("slow");
            $('#Padres').addClass("text_boton_active_perfiles_responsive");
        }

        if($('#perfilAspiranteResponsive').is(":visible")) {
            $('#perfilAspiranteResponsive').hide("slow");
            $('#Aspirante').removeClass("text_boton_active_perfiles_responsive");
        }

        if($('#perfilEstudianteResponsive').is(":visible")) {
            $('#perfilEstudianteResponsive').hide("slow");
            $('#Estudiante').removeClass("text_boton_active_perfiles_responsive");
        }

        if($('#perfilDocenteResponsive').is(":visible")) {
            $('#perfilDocenteResponsive').hide("slow");
            $('#Docente').removeClass("text_boton_active_perfiles_responsive");
        }

        if($('#perfilAdministrativoResponsive').is(":visible")) {
            $('#perfilAdministrativoResponsive').hide("slow");
            $('#Administrativo').removeClass("text_boton_active_perfiles_responsive");
        }

        if($('#perfilEgresadoResponsive').is(":visible")) {
            $('#perfilEgresadoResponsive').hide("slow");
            $('#Egresado').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilInternationalStudentResponsive').is(":visible")) {
            $('#perfilInternationalStudentResponsive').hide("slow");
            $('#International').removeClass("text_boton_active_perfiles_responsive");
        }
    });
    
    /* Inerntaional Student .... .*/

    
    $("#International").click(function() {
        if($('#perfilInternationalStudentResponsive').is(":visible") ){
            $('#perfilInternationalStudentResponsive').hide("slow");
            $('#International').removeClass("text_boton_active_perfiles_responsive");
        }else{
            $('html,body').animate({scrollTop: $("#punteroPerfiles").offset().top}, 2000);
            $('#perfilInternationalStudentResponsive').show("slow");
            $('#International').addClass("text_boton_active_perfiles_responsive");
        }
        
        if($('#perfilAspiranteResponsive').is(":visible")) {
            $('#perfilAspiranteResponsive').hide("slow");
            $('#Aspirante').removeClass("text_boton_active_perfiles_responsive");
        }

        if($('#perfilEstudianteResponsive').is(":visible")) {
            $('#perfilEstudianteResponsive').hide("slow");
            $('#Estudiante').removeClass("text_boton_active_perfiles_responsive");
        }

        if($('#perfilDocenteResponsive').is(":visible")) {
            $('#perfilDocenteResponsive').hide("slow");
            $('#Docente').removeClass("text_boton_active_perfiles_responsive");
        }

        if($('#perfilAdministrativoResponsive').is(":visible")) {
            $('#perfilAdministrativoResponsive').hide("slow");
            $('#Administrativo').removeClass("text_boton_active_perfiles_responsive");
        }

        if($('#perfilEgresadoResponsive').is(":visible")) {
            $('#perfilEgresadoResponsive').hide("slow");
            $('#Egresado').removeClass("text_boton_active_perfiles_responsive");
        }
        if($('#perfilPadresResponsive').is(":visible")) {
            $('#perfilPadresResponsive').hide("slow");
            $('#Padres').removeClass("text_boton_active_perfiles_responsive");
        }
    });

    
    /* Plan de estudios Menu .... .*/



    $("#btn_uno_plan_estudio").click(function() {
        if($('#container_info_gral').is(":visible")) {
            $('#container_info_gral').hide("slow");
            $('#menu_plan_estudios_1').removeClass("square_active");
            $('#btn_uno_plan_estudio').removeClass("btn_opc_1_active");
            $('#menu_plan_estudios_1').addClass("square");
            $('#btn_uno_plan_estudio').addClass("btn_opc_1");
            $('#menu_plan_estudios_2').removeClass("square_active");
            $('#menu_plan_estudios_2').addClass("square");
            $('#btn_dos_plan_estudio').removeClass("btn_opc_2_active");
            $('#btn_dos_plan_estudio').addClass("btn_opc_2");
            $('#menu_plan_estudios_3').removeClass("square_active");
            $('#menu_plan_estudios_3').addClass("square");
            $('#btn_tres_plan_estudio').removeClass("btn_opc_3_active");
            $('#btn_tres_plan_estudio').addClass("btn_opc_3");
            $('#menu_plan_estudios_4').removeClass("square_active");
            $('#menu_plan_estudios_4').addClass("square");
            $('#btn_cuatro_plan_estudio').removeClass("btn_opc_4_active");
            $('#btn_cuatro_plan_estudio').addClass("btn_opc_4");
            $('#menu_plan_estudios_5').removeClass("square_active");
            $('#menu_plan_estudios_5').addClass("square");
            $('#btn_cinco_plan_estudio').removeClass("btn_opc_5_active");
            $('#btn_cinco_plan_estudio').addClass("btn_opc_5");
            $('#menu_plan_estudios_6').removeClass("square_active");
            $('#menu_plan_estudios_6').addClass("square");
            $('#btn_seis_plan_estudio').removeClass("btn_opc_6_active");
            $('#btn_seis_plan_estudio').addClass("btn_opc_6");

        }else{
            $('#container_info_gral').show("slow");
            $('#menu_plan_estudios_1').removeClass("square");
            $('#menu_plan_estudios_1').addClass("square_active");
            $('#btn_uno_plan_estudio').addClass("btn_opc_1_active");
            $('#menu_plan_estudios_2').removeClass("square_active");
            $('#menu_plan_estudios_2').addClass("square");
            $('#btn_dos_plan_estudio').removeClass("btn_opc_2_active");
            $('#btn_dos_plan_estudio').addClass("btn_opc_2");
            $('#menu_plan_estudios_3').removeClass("square_active");
            $('#menu_plan_estudios_3').addClass("square");
            $('#btn_tres_plan_estudio').removeClass("btn_opc_3_active");
            $('#btn_tres_plan_estudio').addClass("btn_opc_3");
            $('#menu_plan_estudios_4').removeClass("square_active");
            $('#menu_plan_estudios_4').addClass("square");
            $('#btn_cuatro_plan_estudio').removeClass("btn_opc_4_active");
            $('#btn_cuatro_plan_estudio').addClass("btn_opc_4");
            $('#menu_plan_estudios_5').removeClass("square_active");
            $('#menu_plan_estudios_5').addClass("square");
            $('#btn_cinco_plan_estudio').removeClass("btn_opc_5_active");
            $('#btn_cinco_plan_estudio').addClass("btn_opc_5");
            $('#menu_plan_estudios_6').removeClass("square_active");
            $('#menu_plan_estudios_6').addClass("square");
            $('#btn_seis_plan_estudio').removeClass("btn_opc_6_active");
            $('#btn_seis_plan_estudio').addClass("btn_opc_6");
        }

    });


    /*$("#btn_uno_plan_estudio").click(function() {
        $('#menu_plan_estudios_1').removeClass("square");
        $('#menu_plan_estudios_1').addClass("square_active");
        $('#btn_uno_plan_estudio').removeClass("btn_opc_1");
        $('#btn_uno_plan_estudio').addClass("btn_opc_1_active");

    });*/

    $("#btn_dos_plan_estudio").click(function() {

        if($('#container_info_gral').is(":visible")) {
            $('#container_info_gral').hide("slow");
            $('#container_info_gral').show("slow");
            $('#menu_plan_estudios_1').removeClass("square_active");
            $('#menu_plan_estudios_1').addClass("square");
            $('#btn_uno_plan_estudio').removeClass("btn_opc_1_active");
            $('#btn_uno_plan_estudio').addClass("btn_opc_1");
            $('#menu_plan_estudios_3').removeClass("square_active");
            $('#menu_plan_estudios_3').addClass("square");
            $('#btn_tres_plan_estudio').removeClass("btn_opc_3_active");
            $('#btn_tres_plan_estudio').addClass("btn_opc_3");
            $('#menu_plan_estudios_4').removeClass("square_active");
            $('#menu_plan_estudios_4').addClass("square");
            $('#btn_cuatro_plan_estudio').removeClass("btn_opc_4_active");
            $('#btn_cuatro_plan_estudio').addClass("btn_opc_4");
            $('#menu_plan_estudios_5').removeClass("square_active");
            $('#menu_plan_estudios_5').addClass("square");
            $('#btn_cinco_plan_estudio').removeClass("btn_opc_5_active");
            $('#btn_cinco_plan_estudio').addClass("btn_opc_5");
            $('#menu_plan_estudios_6').removeClass("square_active");
            $('#menu_plan_estudios_6').addClass("square");
            $('#btn_seis_plan_estudio').removeClass("btn_opc_6_active");
            $('#btn_seis_plan_estudio').addClass("btn_opc_6");

            $('#btn_dos_plan_estudio').removeClass("btn_opc_2");
            $('#btn_dos_plan_estudio').addClass("btn_opc_2_active");
            $('#menu_plan_estudios_2').removeClass("square");
            $('#menu_plan_estudios_2').addClass("square_active");
        }


        /*$('#menu_plan_estudios_2').removeClass("square");
        $('#menu_plan_estudios_2').addClass("square_active");
        $('#btn_dos_plan_estudio').removeClass("btn_opc_2");
        $('#btn_dos_plan_estudio').addClass("btn_opc_2_active");*/
    });
    $("#btn_tres_plan_estudio").click(function() {

         if($('#container_info_gral').is(":visible")) {
            $('#container_info_gral').hide("slow");
            $('#container_info_gral').show("slow");
            $('#menu_plan_estudios_1').removeClass("square_active");
            $('#menu_plan_estudios_1').addClass("square");
            $('#btn_uno_plan_estudio').removeClass("btn_opc_1_active");
            $('#btn_uno_plan_estudio').addClass("btn_opc_1");
            $('#menu_plan_estudios_2').removeClass("square_active");
            $('#menu_plan_estudios_2').addClass("square");
            $('#btn_dos_plan_estudio').removeClass("btn_opc_2_active");
            $('#btn_dos_plan_estudio').addClass("btn_opc_2");
            $('#btn_cuatro_plan_estudio').removeClass("btn_opc_4_active");
            $('#btn_cuatro_plan_estudio').addClass("btn_opc_4");
            $('#menu_plan_estudios_5').removeClass("square_active");
            $('#menu_plan_estudios_5').addClass("square");
            $('#btn_cinco_plan_estudio').removeClass("btn_opc_5_active");
            $('#btn_cinco_plan_estudio').addClass("btn_opc_5");
            $('#menu_plan_estudios_6').removeClass("square_active");
            $('#menu_plan_estudios_6').addClass("square");
            $('#btn_seis_plan_estudio').removeClass("btn_opc_6_active");
            $('#btn_seis_plan_estudio').addClass("btn_opc_6");


            $('#menu_plan_estudios_3').removeClass("square");
            $('#menu_plan_estudios_3').addClass("square_active");
            $('#btn_tres_plan_estudio').removeClass("btn_opc_3");
            $('#btn_tres_plan_estudio').addClass("btn_opc_3_active");
        }

    });
    $("#btn_cuatro_plan_estudio").click(function() {


        if($('#container_info_gral').is(":visible")) {
            $('#container_info_gral').hide("slow");
            $('#container_info_gral').show("slow");
            $('#menu_plan_estudios_1').removeClass("square_active");
            $('#menu_plan_estudios_1').addClass("square");
            $('#btn_uno_plan_estudio').removeClass("btn_opc_1_active");
            $('#btn_uno_plan_estudio').addClass("btn_opc_1");
            $('#menu_plan_estudios_2').removeClass("square_active");
            $('#menu_plan_estudios_2').addClass("square");
            $('#btn_dos_plan_estudio').removeClass("btn_opc_2_active");
            $('#btn_dos_plan_estudio').addClass("btn_opc_2");
            $('#menu_plan_estudios_3').removeClass("square_active");
            $('#menu_plan_estudios_3').addClass("square");
            $('#btn_tres_plan_estudio').removeClass("btn_opc_3_active");
            $('#btn_tres_plan_estudio').addClass("btn_opc_3");
            $('#menu_plan_estudios_5').removeClass("square_active");
            $('#menu_plan_estudios_5').addClass("square");
            $('#btn_cinco_plan_estudio').removeClass("btn_opc_5_active");
            $('#btn_cinco_plan_estudio').addClass("btn_opc_5");
            $('#menu_plan_estudios_6').removeClass("square_active");
            $('#menu_plan_estudios_6').addClass("square");
            $('#btn_seis_plan_estudio').removeClass("btn_opc_6_active");
            $('#btn_seis_plan_estudio').addClass("btn_opc_6");

            $('#menu_plan_estudios_4').removeClass("square");
            $('#menu_plan_estudios_4').addClass("square_active");
            $('#btn_cuatro_plan_estudio').removeClass("btn_opc_4");
            $('#btn_cuatro_plan_estudio').addClass("btn_opc_4_active");
        }


    });
    $("#btn_cinco_plan_estudio").click(function() {

        if($('#container_info_gral').is(":visible")) {
            $('#container_info_gral').hide("slow");
            $('#container_info_gral').show("slow");
            $('#menu_plan_estudios_1').removeClass("square_active");
            $('#menu_plan_estudios_1').addClass("square");
            $('#btn_uno_plan_estudio').removeClass("btn_opc_1_active");
            $('#btn_uno_plan_estudio').addClass("btn_opc_1");
            $('#menu_plan_estudios_2').removeClass("square_active");
            $('#menu_plan_estudios_2').addClass("square");
            $('#btn_dos_plan_estudio').removeClass("btn_opc_2_active");
            $('#btn_dos_plan_estudio').addClass("btn_opc_2");
            $('#menu_plan_estudios_3').removeClass("square_active");
            $('#menu_plan_estudios_3').addClass("square");
            $('#btn_tres_plan_estudio').removeClass("btn_opc_3_active");
            $('#btn_tres_plan_estudio').addClass("btn_opc_3");
            $('#menu_plan_estudios_4').removeClass("square_active");
            $('#menu_plan_estudios_4').addClass("square");
            $('#btn_cuatro_plan_estudio').removeClass("btn_opc_4_active");
            $('#btn_cuatro_plan_estudio').addClass("btn_opc_4");
            $('#menu_plan_estudios_6').removeClass("square_active");
            $('#menu_plan_estudios_6').addClass("square");
            $('#btn_seis_plan_estudio').removeClass("btn_opc_6_active");
            $('#btn_seis_plan_estudio').addClass("btn_opc_6");

            $('#menu_plan_estudios_5').removeClass("square");
            $('#menu_plan_estudios_5').addClass("square_active");
            $('#btn_cinco_plan_estudio').removeClass("btn_opc_5");
            $('#btn_cinco_plan_estudio').addClass("btn_opc_5_active");
        }

    });

    $("#btn_seis_plan_estudio").click(function() {

        if($('#container_info_gral').is(":visible")) {
            $('#container_info_gral').hide("slow");
            $('#container_info_gral').show("slow");
            $('#menu_plan_estudios_1').removeClass("square_active");
            $('#menu_plan_estudios_1').addClass("square");
            $('#btn_uno_plan_estudio').removeClass("btn_opc_1_active");
            $('#btn_uno_plan_estudio').addClass("btn_opc_1");
            $('#menu_plan_estudios_2').removeClass("square_active");
            $('#menu_plan_estudios_2').addClass("square");
            $('#btn_dos_plan_estudio').removeClass("btn_opc_2_active");
            $('#btn_dos_plan_estudio').addClass("btn_opc_2");
            $('#menu_plan_estudios_3').removeClass("square_active");
            $('#menu_plan_estudios_3').addClass("square");
            $('#btn_tres_plan_estudio').removeClass("btn_opc_3_active");
            $('#btn_tres_plan_estudio').addClass("btn_opc_3");
            $('#menu_plan_estudios_4').removeClass("square_active");
            $('#menu_plan_estudios_4').addClass("square");
            $('#btn_cuatro_plan_estudio').removeClass("btn_opc_4_active");
            $('#btn_cuatro_plan_estudio').addClass("btn_opc_4");
            $('#menu_plan_estudios_5').removeClass("square_active");
            $('#menu_plan_estudios_5').addClass("square");
            $('#btn_cinco_plan_estudio').removeClass("btn_opc_5_active");
            $('#btn_cinco_plan_estudio').addClass("btn_opc_5");
            

            $('#menu_plan_estudios_6').removeClass("square");
            $('#menu_plan_estudios_6').addClass("square_active");
            $('#btn_seis_plan_estudio').removeClass("btn_opc_6");
            $('#btn_seis_plan_estudio').addClass("btn_opc_6_active");
        }

    });


});
