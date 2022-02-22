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


function perimetroTriangulo(lado1, lado2, base) {
    return (lado1 + lado2 + base);
}
/* console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm"); */
 
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

/* console.log("El área del triángulo es: " + areaTriangulo + "cm^2"); */
function alturaTriangulo(lado1, lado2, lado3){
    if (lado1 == lado2) {
        altura = Math.sqrt((lado1*lado1)-((lado3/2)*(lado3/2)));
        return altura;
    }
    if (lado1 == lado3) {
        altura = Math.sqrt((lado1*lado1)-((lado2/2)*(lado2/2)));
        return altura;
    }
    if (lado2 == lado3) {
        altura = Math.sqrt((lado2*lado2)-((lado1/2)*(lado1/2)));
        return altura;
    }
}
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

// cuadrado --------------------------

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


// triangulo ---------------------------

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("InputLado1"); //obtenemos toda la etiqueta
    const lado2 = document.getElementById("InputLado2"); //obtenemos toda la etiqueta
    const base = document.getElementById("InputBase"); //obtenemos toda la etiqueta

    const valueLado1 = Number(lado1.value); //obtenemos el valor que ingresan en la etiqueta
    const valueLado2 = Number(lado2.value); //obtenemos el valor que ingresan en la etiqueta
    const valueBase = Number(base.value); //obtenemos el valor que ingresan en la etiqueta

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("InputBase"); //obtenemos toda la etiqueta
    const altura = document.getElementById("InputAltura"); //obtenemos toda la etiqueta

    const valueBase = base.value; //obtenemos el valor que ingresan en la etiqueta
    const valueAltura = altura.value; //obtenemos el valor que ingresan en la etiqueta

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area); 
}

//circulo --------------------------------

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo"); //obtenemos toda la etiqueta
    const value = input.value; //obtenemos el valor que ingresan en la etiqueta

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo"); //obtenemos toda la etiqueta
    const value = input.value; //obtenemos el valor que ingresan en la etiqueta

    const area = areaCirculo(value);
    alert(area);
}
function calcularAlturaTriangulo() {
    const inputIso1 = document.getElementById("InputIso1");
    const inputIso2 = document.getElementById("InputIso2");
    const inputIso3 = document.getElementById("InputIso3"); //obtenemos toda la etiqueta
    
    const value1 = inputIso1.value;
    const value2 = inputIso2.value;
    const value3 = inputIso3.value; //obtenemos el valor que ingresan en la etiqueta

    if(value1 == value2 || value1 == value3 || value2 == value3 ){
        const altura = alturaTriangulo(value1, value2, value3)
        alert(altura);

    } else {
        alert("No es un triangulo isosceles");
    }
}