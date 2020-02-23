 var numero1 = 3;
 var numero2 = 5;
 
 function suma_y_muestra(primerNumero, segundoNumero) {
 var resultado = primerNumero + segundoNumero;
    alert("El resultado es " + resultado);
  }
  suma_y_muestra(numero1, numero2);
  
 /* function calculaPrecioTotal(precio) {
    var impuestos = 1.16;
    var gastosEnvio = 10;
    var precioTotal = ( precio * impuestos ) + gastosEnvio;
    return (calculaPrecioTotal);
  }

var array = ["hola", "mundo"];
var mensaje = array.join("");
mensaje = array.join(" ");
alert(mensaje);

/*var vocales = ["a", "e"]
var numerovocales = vocales.length; //cuenta el número de vocales
alert(numerovocales);
//Funciones útiles para arrays


//Hacer un programa de 0-100, que imprima con las siguientes instrucciones: si el número es divisible entre 3, escribiremos "Fizz", si es divisible entre 5, escribiremos "Buzz" y si es divisible entre ambos, "FizzBuzz"
for (var i=1; i<=100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        document.writeln("FizzBuzz"); 
    }
    else if(i % 3 == 0){
        document.writeln("Fizz");
    }
    else if(i % 5 == 0){
        document.writeln("Buzz");
    }
    else{document.writeln(i);
    }


}




var mensaje = "Hola Mundo, soy una cadena de texto";


var palabra = "Hola";
var letras = palabra.split("");//Te muestra la cadena de letras separada por comas
alert(letras);

var mensaje = "Hola Mundo, soy un cadena";
var porcion = mensaje.substring(2);//encuentra la porción de un mensaje que tu le indicas, hay que empezar desde cero
alert(porcion);

var mensaje = "Hola Mundo, soy un cadena";
var porcion = mensaje.substring(1, 8);//encuentra la porción de un mensaje que tu le indicas, hay que empezar desde cero
var porcion = mensaje.substring(3, 4);
alert(porcion);

var mensaje = "Hola Mundo";
var porcion = mensaje.substring(5, 0);//porción del cero al 5
alert(porcion);


var mensaje = "Hola";
var posicion = mensaje.indexOf('a');//Para calcular la posición de una letra, en este caso, es
posicion = mensaje.indexOf('b');//Saldrá -1 porque la palabra no contiene b
alert(posicion);

var mensaje = "Supercalifragilístico";
var posicion = mensaje.lastindexOf('a');//Para calcular última la posición de una letra, 
posicion = mensaje.lastindexOf('a');
alert(posicion);

var mensaje = "Hola";
var letra = mensaje.charAt(0);
letra = mensaje.charAt(3);
document.writeln("La última letra de mi charAt es "+ letra);//Saldrá escrito como un párrafo


var mensaje1 = "HOlA";
var mensaje2 = mensaje1.toLowerCase();//lo pone todo en minúsculas
alert(mensaje2);



var mensaje1 = "Hola";
var mensaje2 = mensaje1.toUpperCase();//lo pone en mayúsculas
alert(mensaje2);


var mensaje1 = "Hola \n"; // \n funciona como el br
var mensaje2 = "Mundo";
var mensaje = mensaje1 + mensaje2;
alert(mensaje);

var mensaje1 = "Hola";
var mensaje2 = mensaje1.concat(" Mundo");//concadena un mensaje con otro
alert(mensaje2);

var mensaje = "Hola Mundo"
var numeroletras = mensaje.length;
alert(numeroletras);




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
