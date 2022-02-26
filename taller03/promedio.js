
/* function calculaMediaAritmetica(lista) {
    // let sumaLista = 0;
    //for (let i = 0; i<lista.length; i++) {
    //sumaLista = sumaLista + lista[i];
    //}

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista /lista.length;
    return promedioLista
} */


// Declaramos la variable lista con el array
let lista = [];


// Creo la función que añadirá items al array y los irá mostrando en pantalla para que el usuario tenga una secuencia.

function buttonInputSalario() {
    // obtenemos el dato del input y lo convertimos a número
    //const numero = Number(document.getElementById("inputSalario").value);
    const inputnumero = document.getElementById("inputSalario");
    const numerovalue = Number(inputnumero.value);

    // agregamos los números brindados por el usuario al aarray
    lista.push(numerovalue);
    function comparar (prev, next) {
        return prev - next;
    }
    lista.sort(comparar);
    //ordenamos los valores del array
    
    // Imprimimos en pantalla la lista que tiene el usuario para realizar el promedio
    const resultado = document.getElementById("listaUser");
    resultado.innerText = `Tu lista actual es: ${lista}.`;
}

function buttonQuitarSalario() {
    lista.pop(lista.length - 1);
    const resultado = document.getElementById("listaUser");
    resultado.innerText = `Tu lista actual es: ${lista}.`;
}


// Creo la función que calculará el promedio y mostrará en pantalla el resultado.
// Esta es la función pura a la cual se le aplicará reduce para hallar el promedio. La estructura está de acuerdo a la explicación del profe Sascha en este video: https://www.youtube.com/watch?v=tP8JiVUiyDo&t=1210s 

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoValor) {
            return valorAcumulado + nuevoValor;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function buttonPromedio() {
    const promedioLista = calcularMediaAritmetica(lista);
    //imprimimos el resultado en pantalla
    const resultado = document.getElementById("Resultado");
    resultado.innerText = "El promedio es " + promedioLista;
}


//mediana -----------------------------------------------

function buttonMediana() {
    
    const  mitadLista = parseInt(lista.length / 2);//volvemos entero
    
    function esPar(numerito) {
        if (numerito % 2 === 0){
            return true;
        } else {
            return false;
        }
    }

    let mediana;

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista-1];
        const elemento2 = lista[mitadLista];
        const promedio = calcularMediaAritmetica([elemento1, elemento2]);

        mediana = promedio

        const resultado = document.getElementById("Resultado");
        resultado.innerText = "La mediana es " + mediana;
    
    } else {
        mediana = lista[mitadLista];

        const resultado = document.getElementById("Resultado");
        resultado.innerText = "La mediana es " + mediana;
    }   
}


// moda ----------------------------------------

function buttonModa() {
    /*declaramos un object*/
    const listaCount = {};

    /*convertimos array a object*/
    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );

    /*convertimos objeto en un array y lo ordena*/
    const listaArray = Object.entries(listaCount).sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];//ordena en funcion de valor y no del elemento
        }
    );
    /*mostramos la moda*/
    const moda = listaArray[listaArray.length - 1];
    const modaElemento = moda[0];
    const modaCantidad = moda[1]

    const resultado = document.getElementById("Resultado");
    resultado.innerText = "La moda es: " + modaElemento + " y se repite: "+ modaCantidad + " veces";
}


//media geometrica ------------------------------------

function buttonGeometrica() {
    // Esta es la función pura a la cual se le aplicará reduce para hallar el promedio. La estructura está de acuerdo a la explicación del profe Sascha en este video: https://www.youtube.com/watch?v=tP8JiVUiyDo&t=1210s 
    const multiLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado * nuevoElemento;
        }
    );
    const geometricaLista = Math.pow(multiLista, 1/lista.length);
    //imprimimos el resultado en pantalla
    const resultado = document.getElementById("Resultado");
    resultado.innerText = "La media geometrica es: " + geometricaLista;
}