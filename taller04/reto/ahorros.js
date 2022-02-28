

let lista;
let a;


// Creo la función que añadirá items al array y los irá mostrando en pantalla para que el usuario tenga una secuencia.

function buttonInputSalario () {
    // obtenemos el dato del input y lo convertimos a número
    //const numero = Number(document.getElementById("inputSalario").value);
    lista = Number(document.getElementById("inputAhorro").value);
    console.log(lista);
}

function buttonInputAnnio () {
    a = Number(document.getElementById("inputAnnos").value);
    console.log(a);
}

function calcularAhorros () {
    let ahorros = lista;
    for (let i = 0; i < a; i++) {
        ahorros = ahorros + ((ahorros * 4) / 100);
    }
    const respuesta  = document.getElementById("resultado");
    resultado.innerText = `Tus ahorros totales son: ${ahorros} en ${a} años a una tasa anual de 4%`; 
}



