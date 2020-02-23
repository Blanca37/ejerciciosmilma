var mensaje = "Hola Blanca \n Qué fácil es incluir \'comillas simples\' y \"comillas dobles\"";
alert(mensaje);


var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre","Noviembre", "Diciembre"];
alert(meses [0]);
alert(meses [1]);
alert(meses [2]);
alert(meses [3]);
alert(meses [4]);
alert(meses [5]);
alert(meses [6]);
alert(meses [7]);
alert(meses [8]);
alert(meses [9]);
alert(meses [10]);
alert(meses [11]);
alert(meses [12]);

var numero = 5;
++numero;
alert(numero);

var guapo = true;
alert (!guapo);

var valores = [true, 5, false, "hola", "adiós", 2];
var resultado = valores[3] > valores [4];
alert(resultado);

var valor1 = valores[0];
var valor2 = valores[2];
var resultado = valor1 || valor2;
alert(resultado);

resultado = valor1 && valor2;
alert(resultado);

var num1 = valores [1];
var num2 = valores [5];

var suma = num1 + num2;
alert(suma);

var resta = num1 - num2;
alert(resta);

var multiplicacion = num1 * num2;
alert(multiplicacion);

var division = num1 / num2;
alert(division);

var modulo = num1 % num2;
alert(modulo)

var veces = 0;
if(veces < 4) {
    alert("Hola");
    veces++

}
