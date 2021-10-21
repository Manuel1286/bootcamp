function ocul_resultado() {

    var divs = document.getElementsByClassName("div_resultado");

    for (var i = 0; i < divs.length; i++) {
        document.getElementsByClassName("div_resultado")[i].style.display = "none";

    }

}

///////////////////////////////////CALCULADORA//////////////////////////////////


/////////////////////////////SUMA////////////////////////////////

var boton_calc = document.getElementById("boton_calculadora");
boton_calc.addEventListener("click", function () {
    ocul_resultado();
    document.getElementById("div_calculadora").style.display = "block";
});

var suma_calc = document.getElementById("suma");
suma_calc.addEventListener("click", function () {
    suma();

});

function suma() {
    var numer1 = document.getElementById("numero1").value;
    var numer2 = document.getElementById("numero2").value;
    var resultado = parseInt(numer1) + parseInt(numer2);
    document.getElementById("res").innerHTML = "el resultado es:  " + resultado

}

////////////////////////////////RESTA///////////////////////////////

var resta_calc = document.getElementById("resta");
resta_calc.addEventListener("click", function () {
    resta();
});


function resta(a, b) {
    var numer1 = document.getElementById("numero1").value;
    var numer2 = document.getElementById("numero2").value;
    var resultado = parseInt(numer1) - parseInt(numer2);
    document.getElementById("res").innerHTML = "el resultado es:  " + resultado

}

////////////////////////////////DIVISION///////////////////////////////

var division_calc = document.getElementById("division");
division_calc.addEventListener("click", function () {
    division();
});

function division(a, b) {
    var numer1 = document.getElementById("numero1").value;
    var numer2 = document.getElementById("numero2").value;
    var resultado = parseInt(numer1) / parseInt(numer2);
    document.getElementById("res").innerHTML = "el resultado es:  " + resultado;

}

////////////////////////////////MULTIPLICACION///////////////////////////////






/* function division(a,b){ */
/*     var numer1=document.getElementById("numero1").value; */
/*     var numer2=document.getElementById("numero2").value;     */
/*  */
/*    if(b!=0){ resultado=parseInt(a)/parseInt(b); */
/*     return res4; */
/*  */
/* }else{ */
/*     return "no se puede dividir por 0"; */
/* } */
/* } */
/* resultado= division(numer1,numer2); */
/* alert(resultado); */
/*  */


//////////////////////////////////CONTAR CARACTERES////////////////////////////////////////
/* boton menu */
var boton_carac = document.getElementById("boton_caracteres");
boton_carac.addEventListener("click", function () {
    ocul_resultado();
    document.getElementById("div_contar_caracteres").style.display = "block";

});

/* funcion logica contar caracteres*/
function caracteres() {
    var nombre = document.getElementById("input_carateres").value;
    var caracteres = nombre.length;
    alert(caracteres);
    document.getElementById("res_carac").innerHTML = "visualizar carateres es: " +caracteres;
    
}
///////boton gatillo ////////
var nombre_contar = document.getElementById("btn_carateres");
nombre_contar.addEventListener("click", function () {
    caracteres();
});

///////////////////////////////////MAYUSCULAS & MINUSCULAS/////////////////////////////
///boton menu/////
var boton_may = document.getElementById("boton_letras");
boton_may.addEventListener("click", function () {
    ocul_resultado();
    document.getElementById("div_Mayusculas_&_Minusculas").style.display = "block";
});
    
/* funcion logica convertir a mayu & minus*/

function datos (){

    var texto=document.getElementById("input_mayusculas").value;
    alert();
    var texto_mayuscula=texto.toUpperCase();
    var texto_miniscula=texto.toLowerCase();
    document.getElementById("resltado_letra").innerHTML="la palabra ingresada es:  "+texto_mayuscula+" "+texto_miniscula;
}

////////boton garillo ///

var btn_letra=document.getElementById("btn_mayuscula");
btn_letra.document.addEventListener("click", function(){
    datos();
});


//////////////////////////////////SUMATORIA DE NUMEROS ///////////////////////////////

var boton_suma = document.getElementById("boton_sumatoria");
boton_suma.addEventListener("click", function () {
    ocul_resultado();
    document.getElementById("div_sumatoria").style.display = "block";

});