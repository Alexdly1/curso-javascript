// Código del cuadrado ------------------

console.group("Cuadrado");

/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm"); */

function perimetroCuadrado(lado) {
    return lado * 4;
}
/* console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm"); */

function areaCuadrado(lado) {
    return lado * lado;
}
/* console.log("El área del cuadrado es: " + areaCuadrado + "cm^2"); */

console.groupEnd();

// Código del triángulo -----------------

console.group("Triangulos");

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm, " 
    + baseTriangulo + "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es: " + alturaTriangulo + "cm"); */


function perimetroTriangulo(lado1,lado2, base) {
    return lado1 + lado2 + base;
}
/* console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm"); */
 
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

/* console.log("El área del triángulo es: " + areaTriangulo + "cm^2"); */

console.groupEnd();

// Código del círculo ---------------------

console.group("Círculo");

//radio

/* const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");  */

//diametro

function diametroCirculo(radio) {
    return radio * 2;
}

// PI 

const PI = Math.PI;
/* console.log("PI es: " + PI); */

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();



// Aqui interactuamos con el html

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado"); //obtenemos toda la etiqueta
    const value = input.value; //obtenemos el valor que ingresan en la etiqueta

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado"); //obtenemos toda la etiqueta
    const value = input.value; //obtenemos el valor que ingresan en la etiqueta

    const area = areaCuadrado(value);
    alert(area);
}
