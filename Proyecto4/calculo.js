function ocul_resultado() {

    var divs = document.getElementsByClassName("div_resultado");

    for (var i = 0; i < divs.length; i++) {
        document.getElementsByClassName("div_resultado")[i].style.display = "none";

    }

}

///////////////////////////////////CALCULADORA////////////////////////////////////////////////////////////////

var boton_calc = document.getElementById("boton_calculadora");
boton_calc.addEventListener("click", function () {
    ocul_resultado();
    document.getElementById("div_calculadora").style.display = "block";

});

function calculadora(){
    var num1=document.getElementById("div_calculadora").value;
    var res=0;
    for(var i=1;i<=num1; i++){
        res=res+i;
    }
document.getElementById("div_calculadora").innerText=res;

}



//////////////////////////////////CONTAR CARACTERES////////////////////////////////////////////////////////////

var boton_carac = document.getElementById("boton_caracteres");
boton_carac.addEventListener("click", function () {
    ocul_resultado();
    document.getElementById("div_contar_caracteres").style.display = "block";
    document.getElementById("resultado_caracteres").innerText="cantidad de caracteres=  ";

});







////////////////////////////////MAYUSCULAS & MINUSCULAS///////////////////////////////////////////////////////

var boton_may = document.getElementById("boton_letras");
boton_may.addEventListener("click", function () {
    ocul_resultado();
    document.getElementById("div_Mayusculas_&_Minusculas").style.display = "block";

});






//////////////////////////////////SUMATORIA DE NUMEROS///////////////////////////////////////////////////////

var boton_suma = document.getElementById("boton_sumatoria");
boton_suma.addEventListener("click", function () {
    ocul_resultado();
    document.getElementById("div_sumatoria").style.display = "block";

});







