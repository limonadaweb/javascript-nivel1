//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript');

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida al bootcamp de FemCoders de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log("Bienvenida al bootcamp de FemCoders de Factoría F5");

//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

//string
let teacher = "teacher";
console.log(teacher);
//number
let age = 56;
console.log(age);
//boolean
let young_or_old = true;
console.log(young_or_old);
//null
let empty = null;
console.log(empty);
//undefined
let undefin = undefined;
console.log(undefined);
//object
let myteacher = {  
	make :"music",
	model : "guitar school",
	promotion :"2004",
};
console.log (myteacher)
console.log (myteacher.make)
//array
let teachers = ["music", "mathematic","language","philosophy"];
console.log(teachers)




//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí

let desserts = ["ice cream", "cake","pie"];
console.log(desserts)



//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí

const coder = {
	name:"Lola",
	age:"56"
};
console.log (coder)

//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

//Escribe tu código aquí
console.log(typeof desserts);  // object
console.log(typeof desserts[0]);  // string
console.log(typeof desserts[1]);  // string
console.log(typeof desserts[2]);  // string



//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.
//Escribe tu código aquí

let numerok = 5;
let numerol = 7;
let suma = numerok + numerol;
console.log(suma);   // Imprime 12

//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let numeroc = 10;
let numerod = 3;
let resta = numeroc - numerod;

console.log(resta);  // Imprime 7


//Ejercicio 8: Crea una variable que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let numeroe = 4;
let numerof = 5;
let multiplicacion = numeroe * numerof;

console.log(multiplicacion);  // Imprime 20


//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let numerog = 20;
let numeroh = 4;
let division = numerog / numeroh;

console.log(division);  // Imprime 5


//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí
let numeroi = 1;
let numeroj = 2;
let comparacion = numeroi< numeroj;

console.log(comparacion);  // Imprime true



// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí
let numero1 = 1;
let numero2 = 2;
let comparacion1 = numero1 < numero2;
let comparacion2 = numero1 !== numero2;

console.log(comparacion1);  // Imprime true
console.log(comparacion2);  // Imprime true

//Ejercicio 11: completa el ejercicio. Realiza la operación de comparación que consideres para que el resultado en consola sea true

let numerox = 15;
let numeroy = 20;

let comparision = numerox < numeroy; // numerox es menor a numeroy
console.log(comparision); // Esto imprimirá true


//Ejercicio 12: completa el ejercicio. //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad


let num3 = 1;
let num3AsString = "1";

let result = num3 === num3AsString; // num3 es igual a num3AsString en valor, pero no en tipo
console.log(result); // Esto imprimirá false

//Ejercicio 13: completa el ejercicio.  //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.


let num4 = 1;
let num4AsString = "1";

let result2 = num4 !== num4AsString; 
console.log(result2); // Esto imprimirá true

//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí

let nombre = "Adriana";
let apellido = "Fernández";
let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);  // Imprime "Adriana Fernández"



//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

let res2 =  a < 10 && b > 1; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res2)
let res1 =  a < 10 && b > 1; // true
console.log(res1); // true

let res =  a < 10 && b > 1; // true
console.log(res); // true
let a2 = 3;
let b2 = 4;
let res3 = a2 == 5 || b2 == 5; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = !(a2 == 3 || b2 == 5); //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)


let res5 = a == 6 || b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)


let res6 = a == 6 && b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6) 

let res7 = a == 0 && b == 3; // true
console.log(res7); // true

let res8 = !(a == 0 && b == 3); // true
console.log(res8); // true

let res9 = a == 6 && b == 3 //Eliminar el espacio "" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res9) 

let res10 = a == 6 || b == 3; // true
console.log(res10); // true