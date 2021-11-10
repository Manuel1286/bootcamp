$(document).ready(function () {
    var nombre_correo;
    var nombre_Contrasena;
   
    function evaluar(email) {
        if (email == "manuel.1286@hotmail.com") {
            return true;
        }else if(email=="monzon@rbsas.com"){
            return true;
        }else{
            return false;
        }
    }
    function contrasena(pre) {
        if (pre == "12345") {
            return true;
        }else if(pre=="HOLA"){
            return true;
        }else{
            return false;
        }

    }

    /* BOTON REGISTRO */
 $("#bnt_Iniciar").click(function () {
    var email = $("#input_Correo").val();
    var pre = $("#input_Contrasena").val();
    nombre_correo = evaluar(email);
    nombre_Contrasena = contrasena(pre);
    var a;
    if(nombre_correo==true && nombre_Contrasena==true){
        a="BIENVENIDO";
    }else{
        a="VALIDE CONTRASEÑA Y USUARIO";  
    }    
    $("#input_Correo").val("");
    $("#input_Contrasena").val("");
    $("#olvido_contrasena").text(a);   
});

$("#crear_cuenta").click(function () { 
    var nombre_usuario = $("#input_formulario1").val();
    var nombre_apellido= $("#input_formulario2").val();
    $("#mensaje_de_formmulario").text("correo"+nombre_usuario +" "+"contrasena"+nombre_apellido);
    $("#formulario").show();
    $("#registro").hide();

});

/* Regresar a la pagina principal */

$("#regresar").click(function () { 
    $("input_formulario1").val("");        
    $("#registro").show();
    $("#formulario").hide();

});
    
});


