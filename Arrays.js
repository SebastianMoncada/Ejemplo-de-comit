var edad1 = 5;
var edad2 = 10;
var edad3 = 20;

//Crear un Array declaras una variable arreglo
var edades = [];
//          0     1     2          Se manejan por posiciones
edades = [edad1,edad2,edad3];
var resultado = edades[1]+edades[2];
//Se accede al valor que yo quiera del arreglo por la posicion ejemplo posion 0 imprime edad1
console.log(edades[0]);
console.log(edades[1]);
console.log(edades[2]);
console.log(resultado);


// Se puede crear el arreglo sin nesecidad de declarar variables anteriormente
var numeros = [10,5,8];
console.log(numeros[1]);
//Con Strings tambien se puede
var nombres = ["Pablo","Armando","Jose"];
console.log(nombres[1]);
//Se puede modificar el interior del arreglo o añadir una posicion mas, declarando la posicion en la variable
nombres[3] = "Gabriela";
console.log(nombres);
nombres[0] = "Sebastian";
console.log(nombres);
//Eliminar Posiciones del Array
var myArray = [1,2,3];
myArray.splice(0,1);
console.log(myArray);

