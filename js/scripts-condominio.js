//AÑADIR CHECK VALIDO AL ABRIR POPUP
$("#aceptar_terminos_web").on("click", function() {
  if ($("#checkbox_web").is(':checked')){
      $('.bs-example-modal.terminos-modal').modal('hide');
  }
  else{
      $('.bs-example-modal.terminos-modal').modal('hide');
      $("#checkbox_web").prop("checked", true);
  }
});

$("#aceptar_terminos_xs").on("click", function() {
  if ($("#checkbox_xs").is(':checked')){
      $('.bs-example-modal.terminos-modal').modal('hide');
  }
  else{
      $('.bs-example-modal.terminos-modal').modal('hide');
      $("#checkbox_xs").prop("checked", true);
  }
});



//FORMULARIO DE CONTACTO - contactForm_web
$("#contactForm_web").validator().on("submit", function (event) {
  var valido_form = 0;
  var valido_select_01 = 0;
  var valido_select_02 = 0;
  var valido_check = 0;

  //Var Telefono Nombre Correo Etc
  if (event.isDefaultPrevented("Complete este campo")) {
      // handle the invalid form...
      submitMSG_web(false, "Complete los campos que faltan.");
  }else {
      event.preventDefault();
      valido_form = 1;
  }

  //Opcion de tipo casa
  if (!$('#tipo_casa_web').val() ){
      submitMSG_tipo_casa_web(false, "Seleccione una opción.");
  }else {
      event.preventDefault();
      submitMSG_tipo_casa_web(true, "");
      valido_select_01 = 1;
  }

  //Opcion de inversion
  if (!$('#inversion_web').val() ){
      submitMSG_inversion_web(false, "Seleccione una opción.");
  }else {
      event.preventDefault();
      submitMSG_inversion_web(true, "");
      valido_select_02 = 1;
  }

  //Checkbox
  if ($("#checkbox_web").is(':checked') === false){
      submitMSG_condiciones_web(false, "Aún no acepta terminos y condiciones.");
  }else {
      event.preventDefault();
      submitMSG_condiciones_web(true, "");
      valido_check = 1;
  }

  //Validacion de que los campos estan completos
  if ((valido_form)&&(valido_select_01)&&(valido_select_02)&&(valido_check) === 1) {
      $("#form-submit").prop("disabled", true);
      submitForm_web();
      submitMSG_web(true, "");
  }else {
      event.preventDefault();
      submitMSG_web(false, "Complete los campos que faltan");
  }
});

function submitForm_web(){
  // Initiate Variables With Form Content
  var first_name_web = $("#first_name_web").val();
  var telephone_web = $("#telephone_web").val();
  var email_web = $("#email_web").val();
  var tipo_casa_web = ($('select[id=tipo_casa_web]').val());
  var inversion_web = ($('select[id=inversion_web]').val());

  $.ajax({
      type: "POST",
      url:  "php/process_form_condominio_web.php",
      data: "first_name_web=" + first_name_web +
            "&telephone_web=" + telephone_web +
            "&email_web=" + email_web +
            "&tipo_casa_web=" + tipo_casa_web +
            "&inversion_web=" + inversion_web,

      success: function(text){
          if (text == "success"){
              formSuccess_web();
              window.location.href = "mensaje_enviado_form_condominio_web.html";
          } else {
              submitMSG_web(false,text);
          }
      }
  });
}

function formSuccess_web(){
  $("#contactForm_web")[0].reset();
  submitMSG_web(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitMSG_web(valid, msg){
  if(valid){
      var msgClasses = "h4 text-center text-warning tx_form_error";
  } else {
      var msgClasses = "h4 text-center text-danger tx_form_error";
  }
  $("#msgSubmit_web").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_tipo_casa_web(valid, msg){
  if(valid){
      var msgClasses = "h4 text-center text-warning tx_form_error ";
  } else {
      var msgClasses = "h4 text-center text-danger tx_form_error ";
  }
  $("#msgSubmit_tipo_casa_web").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_inversion_web(valid, msg){
  if(valid){
      var msgClasses = "h4 text-center text-warning tx_form_error ";
  } else {
      var msgClasses = "h4 text-center text-danger tx_form_error ";
  }
  $("#msgSubmit_inversion_web").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_condiciones_web(valid, msg){
  if(valid){
      var msgClasses = "h4 text-center text-warning tx_form_error";
  } else {
      var msgClasses = "h4 text-center text-danger tx_form_error";
  }
  $("#msgSubmit_condiciones_web").removeClass().addClass(msgClasses).text(msg);
}