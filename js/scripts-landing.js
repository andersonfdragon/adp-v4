//AÑADIR CHECK VALIDO AL ABRIR POPUP
$("#aceptar_terminos_popUp_web").on("click", function() {
    if ($("#checkbox_web").is(':checked')){
        $('.bs-example-modal.terminos-modal').modal('hide');
    }
    else{
        $('.bs-example-modal.terminos-modal').modal('hide');
        $("#checkbox_web").prop("checked", true);
    }
});

$("#aceptar_terminos_popUp_xs").on("click", function() {
    if ($("#checkbox_xs").is(':checked')){
        $('.bs-example-modal.terminos-modal').modal('hide');
    }
    else{
        $('.bs-example-modal.terminos-modal').modal('hide');
        $("#checkbox_xs").prop("checked", true);
    }
});


// Desplazar formulario en posicion fixed con scroll vertical FHD
$(document).ready(function(){
    
    $(window).scroll(function () {

        if (($(window).width() > 1789) && ($(document).scrollTop() > 910)){
        $('.formulario-home').addClass("fixed-form");
        } 

        else if (($(window).width() < 1789) && ($(document).scrollTop() > 800)){
        $('.formulario-home').addClass("fixed-form");
        } 

        else if (($(window).width() < 1400) && ($(document).scrollTop() > 770)){
        $('.formulario-home').addClass("fixed-form");
        } 

        else if (($(window).width() < 1199) && ($(document).scrollTop() > 700)){
        $('.formulario-home').addClass("fixed-form");
        } 

        else if (($(window).width() < 991) && ($(document).scrollTop() > 600)){
        $('.formulario-home').addClass("fixed-form");
        } 

        else {
        $('.formulario-home').removeClass("fixed-form");
        }
    });

});

//CAMBIO DE INFO CLICK - FORMULARIO MODAL WEB
$(document).ready(function(){
    $("#btn_form_01").click(function(){
        $('#encabezado_formulario_web').replaceWith('<h3 id="encabezado_formulario_web" class="tx-arsenal-regular-azul-05">¿Quiere conocer más de nuestras casas<br>de <span class="tx-bold-arsenal-05">3 habitaciones</span>?</h3>');
        $("#asunto_correo_popup_web").attr("value", "");
        $("#asunto_correo_popup_web").attr("value", "Landing Web PopUp Casa de 3 Habitaciones Nuevo Lead");
        $("#checkbox_modal_web").attr('checked',':checked');
    });
});
$(document).ready(function(){
    $("#btn_form_02").click(function(){
        $('#encabezado_formulario_web').replaceWith('<h3 id="encabezado_formulario_web" class="tx-arsenal-regular-azul-05">¿Quiere conocer más de nuestras casas<br>de <span class="tx-bold-arsenal-05">4 habitaciones</span>?</h3>');
        $("#asunto_correo_popup_web").attr("value", "");
        $("#asunto_correo_popup_web").attr("value", "Landing Web PopUp Casa de 4 Habitaciones Nuevo Lead");
        $("#checkbox_modal_web").attr('checked',':checked');
    });
});
$(document).ready(function(){
    $("#btn_form_03").click(function(){
        $('#encabezado_formulario_web').replaceWith('<h3 id="encabezado_formulario_web" class="tx-arsenal-regular-azul-05">¿Quiere conocer más de nuestras casas<br>de <span class="tx-bold-arsenal-05">5 habitaciones</span>?</h3>');
        $("#asunto_correo_popup_web").attr("value", "");
        $("#asunto_correo_popup_web").attr("value", "Landing Web PopUp Casa de 5 Habitaciones Nuevo Lead");
        $("#checkbox_modal_web").attr('checked',':checked');
    });
});

//CAMBIO DE INFO CLICK - FORMULARIO MODAL XS
$(document).ready(function(){
    $("#btn_form_modal_xs_01").click(function(){
        $('#encabezado_formulario_xs').replaceWith('<h3 id="encabezado_formulario_xs" class="tx-arsenal-regular-azul-05">¿Quiere conocer más de nuestras casas<br>de <span class="tx-bold-arsenal-05">3 habitaciones</span>?</h3>');
        $("#asunto_correo_popup_xs").attr("value", "");
        $("#asunto_correo_popup_xs").attr("value", "Landing Movil PopUp Casa de 3 Habitaciones Nuevo Lead");
        $("#checkbox_modal_xs").attr('checked',':checked');
    });
});
$(document).ready(function(){
    $("#btn_form_modal_xs_02").click(function(){
        $('#encabezado_formulario_xs').replaceWith('<h3 id="encabezado_formulario_xs" class="tx-arsenal-regular-azul-05">¿Quiere conocer más de nuestras casas<br>de <span class="tx-bold-arsenal-05">4 habitaciones</span>?</h3>');
        $("#asunto_correo_popup_xs").attr("value", "");
        $("#asunto_correo_popup_xs").attr("value", "Landing Movil PopUp Casa de 4 Habitaciones Nuevo Lead");
        $("#checkbox_modal_xs").attr('checked',':checked');
    });
});
$(document).ready(function(){
    $("#btn_form_modal_xs_03").click(function(){
        $('#encabezado_formulario_xs').replaceWith('<h3 id="encabezado_formulario_xs" class="tx-arsenal-regular-azul-05">¿Quiere conocer más de nuestras casas<br>de <span class="tx-bold-arsenal-05">5 habitaciones</span>?</h3>');
        $("#asunto_correo_popup_xs").attr("value", "");
        $("#asunto_correo_popup_xs").attr("value", "Landing Movil PopUp Casa de 5 Habitaciones Nuevo Lead");
        $("#checkbox_modal_xs").attr('checked',':checked');
    });
});


//ANIMAR NUMERO JS XS LANDING
$("#contenido-casa-xs-01").click(function(){
    $('.animate-number').each(function () {
        var $this = $(this);

        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 500,
            easing: 'swing',
            step: function () {
            $this.text(Math.ceil(this.Counter));
            }
        });
    });
});
$("#contenido-casa-xs-02").click(function(){
    $('.animate-number').each(function () {
        var $this = $(this);

        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 500,
            easing: 'swing',
            step: function () {
            $this.text(Math.ceil(this.Counter));
            }
        });
    });
});
$("#contenido-casa-xs-03").click(function(){
    $('.animate-number').each(function () {
        var $this = $(this);

        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 500,
            easing: 'swing',
            step: function () {
            $this.text(Math.ceil(this.Counter));
            }
        });
    });
});


//FORMULARIO DE CONTACTO - contactForm_popup_xs
$("#contactForm_popup_xs").validator().on("submit", function (event) {
    var valido_form = 0;
    var valido_select_01 = 0;
    var valido_check = 0;
    

    //Var Telefono Nombre Correo Etc
    if (event.isDefaultPrevented("Complete este campo")) {
        // handle the invalid form...
        submitMSG_popup_xs(false, "Complete los campos que faltan.");
    }else {
        event.preventDefault();
        valido_form = 1;
    }

    //Opcion de inversion
    if (!$('#inversion_popup_xs').val() ){
        submitMSG_inversion_popup_xs(false, "Seleccione una opción.");
    }else {
        event.preventDefault();
        submitMSG_inversion_popup_xs(true, "");
        valido_select_01 = 1;
    }

    //Checkbox
    if ($("#checkbox_modal_xs").is(':checked') === false){
        submitMSG_condiciones_popup_xs(false, "Aún no acepta terminos y condiciones.");
    }else {
        event.preventDefault();
        submitMSG_condiciones_popup_xs(true, "");
        valido_check = 1;
    }

    //Validacion de que los campos estan completos
    if ((valido_form)&&(valido_select_01)&&(valido_check) === 1) {
        $("#form-submit-03").prop("disabled", true);
        submitForm_popup_xs();
        submitMSG_popup_xs(true, "");
    }else {
        event.preventDefault();
        submitMSG_popup_xs(false, "Complete los campos que faltan");
    }
});

function submitForm_popup_xs(){
    // Initiate Variables With Form Content
    var asunto_correo_popup_xs = $("#asunto_correo_popup_xs").val();
    var first_name_popup_xs = $("#first_name_popup_xs").val();
    var telephone_popup_xs = $("#telephone_popup_xs").val();
    var email_popup_xs = $("#email_popup_xs").val();
    var inversion_popup_xs = ($('select[id=inversion_popup_xs]').val());

    $.ajax({
        type: "POST",
        url:  "php/process_popup_xs.php",
        data: "asunto_correo_popup_xs=" + asunto_correo_popup_xs +
              "&first_name_popup_xs=" + first_name_popup_xs +
              "&telephone_popup_xs=" + telephone_popup_xs +
              "&email_popup_xs=" + email_popup_xs +
              "&inversion_popup_xs=" + inversion_popup_xs,

        success: function(text){
            if (text == "success"){
                formSuccess_popup_xs();
                window.location.href = "mensaje_enviado_form_popup_landing_movil.html";
            } else {
                submitMSG_popup_xs(false,text);
            }
        }
    });
}

function formSuccess_popup_xs(){
    $("#contactForm_popup_xs")[0].reset();
    submitMSG_popup_xs(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitMSG_popup_xs(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning tx_form_error";
    } else {
        var msgClasses = "h4 text-center text-danger tx_form_error";
    }
    $("#msgSubmit_popup_xs").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_inversion_popup_xs(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning tx_form_error";
    } else {
        var msgClasses = "h4 text-center text-danger tx_form_error";
    }
    $("#msgSubmit_inversion_popup_xs").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_condiciones_popup_xs(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning tx_form_error";
    } else {
        var msgClasses = "h4 text-center text-danger tx_form_error";
    }
    $("#msgSubmit_condiciones_popup_xs").removeClass().addClass(msgClasses).text(msg);
}







//FORMULARIO DE CONTACTO - contactForm_popup_web
$("#contactForm_popup_web").validator().on("submit", function (event) {
    var valido_form = 0;
    var valido_select_01 = 0;
    var valido_check = 0;

    //Var Telefono Nombre Correo Etc
    if (event.isDefaultPrevented("Complete este campo")) {
        // handle the invalid form...
        submitMSG_popup_web(false, "Complete los campos que faltan.");
    }else {
        event.preventDefault();
        valido_form = 1;
    }

    //Opcion de inversion
    if (!$('#inversion_popup_web').val() ){
        submitMSG_inversion_popup_web(false, "Seleccione una opción.");
    }else {
        event.preventDefault();
        submitMSG_inversion_popup_web(true, "");
        valido_select_01 = 1;
    }

    //Checkbox
    if ($("#checkbox_modal_web").is(':checked') === false){
        submitMSG_condiciones_popup_web(false, "Aún no acepta terminos y condiciones.");
    }else {
        event.preventDefault();
        submitMSG_condiciones_popup_web(true, "");
        valido_check = 1;
    }

    //Validacion de que los campos estan completos
    if ((valido_form)&&(valido_select_01)&&(valido_check) === 1) {
        $("#form-submit-04").prop("disabled", true);
        submitForm_popup_web();
        submitMSG_popup_web(true, "");
    }else {
        event.preventDefault();
        submitMSG_popup_web(false, "Complete los campos que faltan");
    }
});

function submitForm_popup_web(){
    // Initiate Variables With Form Content
    var asunto_correo_popup_web = $("#asunto_correo_popup_web").val();
    var first_name_popup_web = $("#first_name_popup_web").val();
    var telephone_popup_web = $("#telephone_popup_web").val();
    var email_popup_web = $("#email_popup_web").val();
    var inversion_popup_web = ($('select[id=inversion_popup_web]').val());

    $.ajax({
        type: "POST",
        url:  "php/process_popup_web.php",
        data: "asunto_correo_popup_web=" + asunto_correo_popup_web +
              "&first_name_popup_web=" + first_name_popup_web +
              "&telephone_popup_web=" + telephone_popup_web +
              "&email_popup_web=" + email_popup_web +
              "&inversion_popup_web=" + inversion_popup_web,

        success: function(text){
            if (text == "success"){
                formSuccess_popup_web();
                window.location.href = "mensaje_enviado_form_popup_landing_web.html";
            } else {
                submitMSG_popup_web(false,text);
            }
        }
    });
}

function formSuccess_popup_web(){
    $("#contactForm_popup_web")[0].reset();
    submitMSG_popup_web(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitMSG_popup_web(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning tx_form_error";
    } else {
        var msgClasses = "h4 text-center text-danger tx_form_error";
    }
    $("#msgSubmit_popup_web").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_inversion_popup_web(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning tx_form_error ";
    } else {
        var msgClasses = "h4 text-center text-danger tx_form_error ";
    }
    $("#msgSubmit_inversion_popup_web").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_condiciones_popup_web(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning tx_form_error";
    } else {
        var msgClasses = "h4 text-center text-danger tx_form_error";
    }
    $("#msgSubmit_condiciones_popup_web").removeClass().addClass(msgClasses).text(msg);
}





//FORMULARIO DE CONTACTO - contactForm_footer_xs
$("#contactForm_footer_xs").validator().on("submit", function (event) {
    var valido_form = 0;
    var valido_select_01 = 0;
    var valido_select_02 = 0;
    var valido_check = 0;

    //Var Telefono Nombre Correo Etc
    if (event.isDefaultPrevented("Complete este campo")) {
        // handle the invalid form...
        submitMSG_footer_xs(false, "Complete los campos que faltan.");
    }else {
        event.preventDefault();
        valido_form = 1;
    }
    //Opcion de tipo casa
    if (!$('#tipo_casa_footer_xs').val() ){
        submitMSG_tipo_casa_footer_xs(false, "Seleccione una opción.");
    }else {
        event.preventDefault();
        submitMSG_tipo_casa_footer_xs(true, "");
        valido_select_01 = 1;
    }

    //Opcion de inversion
    if (!$('#inversion_footer_xs').val() ){
        submitMSG_inversion_footer_xs(false, "Seleccione una opción.");
    }else {
        event.preventDefault();
        submitMSG_inversion_footer_xs(true, "");
        valido_select_02 = 1;
    }

    //Checkbox
    if ($("#checkbox_xs").is(':checked') === false){
        submitMSG_condiciones_footer_xs(false, "Aún no acepta terminos y condiciones.");
    }else {
        event.preventDefault();
        submitMSG_condiciones_footer_xs(true, "");
        valido_check = 1;
    }

    //Validacion de que los campos estan completos
    if ((valido_form)&&(valido_select_01)&&(valido_select_02)&&(valido_check) === 1) {
        $("#form-submit").prop("disabled", true);
        submitForm_footer_xs();
        submitMSG_footer_xs(true, "");
    }else {
        event.preventDefault();
        submitMSG_footer_xs(false, "Complete los campos que faltan");
    }
});

function submitForm_footer_xs(){
    // Initiate Variables With Form Content
    var first_name_footer_xs = $("#first_name_footer_xs").val();
    var telephone_footer_xs = $("#telephone_footer_xs").val();
    var email_footer_xs = $("#email_footer_xs").val();
    var tipo_casa_footer_xs = ($('select[id=tipo_casa_footer_xs]').val());
    var inversion_footer_xs = ($('select[id=inversion_footer_xs]').val());

    $.ajax({
        type: "POST",
        url:  "php/process_footer_xs.php",
        data: "first_name_footer_xs=" + first_name_footer_xs +
              "&telephone_footer_xs=" + telephone_footer_xs +
              "&email_footer_xs=" + email_footer_xs +
              "&tipo_casa_footer_xs=" + tipo_casa_footer_xs +
              "&inversion_footer_xs=" + inversion_footer_xs,

        success: function(text){
            if (text == "success"){
                formSuccess_footer_xs();
                window.location.href = "mensaje_enviado_form_footer_landing_movil.html";
            } else {
                submitMSG_footer_xs(false,text);
            }
        }
    });
}

function formSuccess_footer_xs(){
    $("#contactForm_footer_xs")[0].reset();
    submitMSG_footer_xs(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitMSG_footer_xs(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning tx_form_error";
    } else {
        var msgClasses = "h4 text-center text-danger tx_form_error";
    }
    $("#msgSubmit_footer_xs").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_tipo_casa_footer_xs(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning tx_form_error ";
    } else {
        var msgClasses = "h4 text-center text-danger tx_form_error ";
    }
    $("#msgSubmit_tipo_casa_footer_xs").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_inversion_footer_xs(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning tx_form_error ";
    } else {
        var msgClasses = "h4 text-center text-danger tx_form_error ";
    }
    $("#msgSubmit_inversion_footer_xs").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_condiciones_footer_xs(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning tx_form_error";
    } else {
        var msgClasses = "h4 text-center text-danger tx_form_error";
    }
    $("#msgSubmit_condiciones_footer_xs").removeClass().addClass(msgClasses).text(msg);
}










//FORMULARIO DE CONTACTO - contactForm_fixed_web
$("#contactForm_fixed_web").validator().on("submit", function (event) {
    var valido_form = 0;
    var valido_select_01 = 0;
    var valido_select_02 = 0;
    var valido_check = 0;

    //Var Telefono Nombre Correo Etc
    if (event.isDefaultPrevented("Complete este campo")) {
        // handle the invalid form...
        submitMSG_fixed_web(false, "Complete los campos que faltan.");
    }else {
        event.preventDefault();
        valido_form = 1;
    }
    //Opcion de tipo casa
    if (!$('#tipo_casa_fixed_web').val() ){
        submitMSG_tipo_casa_fixed_web(false, "Seleccione una opción.");
    }else {
        event.preventDefault();
        submitMSG_tipo_casa_fixed_web(true, "");
        valido_select_01 = 1;
    }

    //Opcion de inversion
    if (!$('#inversion_fixed_web').val() ){
        submitMSG_inversion_fixed_web(false, "Seleccione una opción.");
    }else {
        event.preventDefault();
        submitMSG_inversion_fixed_web(true, "");
        valido_select_02 = 1;
    }

    //Checkbox
    if ($("#checkbox_web").is(':checked') === false){
        submitMSG_condiciones_fixed_web(false, "Aún no acepta terminos y condiciones.");
    }else {
        event.preventDefault();
        submitMSG_condiciones_fixed_web(true, "");
        valido_check = 1;
    }

    //Validacion de que los campos estan completos
    if ((valido_form)&&(valido_select_01)&&(valido_select_02)&&(valido_check) === 1) {
        $("#form-submit-02").prop("disabled", true);
        submitForm_fixed_web();
        submitMSG_fixed_web(true, "");
    }else {
        event.preventDefault();
        submitMSG_fixed_web(false, "Complete los campos que faltan");
    }
});

function submitForm_fixed_web(){
    // Initiate Variables With Form Content
    var first_name_fixed_web = $("#first_name_fixed_web").val();
    var telephone_fixed_web = $("#telephone_fixed_web").val();
    var email_fixed_web = $("#email_fixed_web").val();
    var tipo_casa_fixed_web = ($('select[id=tipo_casa_fixed_web]').val());
    var inversion_fixed_web = ($('select[id=inversion_fixed_web]').val());

    $.ajax({
        type: "POST",
        url:  "php/process_fixed_web.php",
        data: "first_name_fixed_web=" + first_name_fixed_web +
              "&telephone_fixed_web=" + telephone_fixed_web +
              "&email_fixed_web=" + email_fixed_web +
              "&tipo_casa_fixed_web=" + tipo_casa_fixed_web +
              "&inversion_fixed_web=" + inversion_fixed_web,

        success: function(text){
            if (text == "success"){
                formSuccess_fixed_web();
                window.location.href = "mensaje_enviado_form_fixed_landing.html";
            } else {
                submitMSG_fixed_web(false,text);
            }
        }
    });
}

function formSuccess_fixed_web(){
    $("#contactForm_fixed_web")[0].reset();
    submitMSG_fixed_web(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitMSG_fixed_web(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning tx_form_error";
    } else {
        var msgClasses = "h4 text-center text-danger tx_form_error";
    }
    $("#msgSubmit_fixed_web").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_tipo_casa_fixed_web(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning tx_form_error ";
    } else {
        var msgClasses = "h4 text-center text-danger tx_form_error ";
    }
    $("#msgSubmit_tipo_casa_fixed_web").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_inversion_fixed_web(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning tx_form_error ";
    } else {
        var msgClasses = "h4 text-center text-danger tx_form_error ";
    }
    $("#msgSubmit_inversion_fixed_web").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_condiciones_fixed_web(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning tx_form_error";
    } else {
        var msgClasses = "h4 text-center text-danger tx_form_error";
    }
    $("#msgSubmit_condiciones_fixed_web").removeClass().addClass(msgClasses).text(msg);
}
