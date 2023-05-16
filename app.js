const process = require ("process");// para poder manipular los parametros desde la consola
const calculadora = require ("./calculadora")// se requiere el modulo exportado

const operaciones = ["sumar","restar", "multiplicar","dividir"];

const operacion = process.argv[2];
const numeroA = +process.argv[3];
const numeroB = +process.argv[4];// esto es para hacerlo desde consola, entre corchetees se coloca la posicion dedl array de la consola (los number van con + delante del process)
let resultado = 0;

if(operaciones.includes(operacion)){
    if(operacion === "sumar"){
    resultado = calculadora.sumar(numeroA,numeroB)
}// se accede a la funcion sumar desde el modulo calculadora

    else if(operacion ==="restar"){
    resultado = calculadora.restar(numeroA,numeroB)
}
    else if(operacion ==="multiplicar"){
    resultado = calculadora.multiplicar(numeroA,numeroB)
}
    else if(operacion ==="dividir"){
    resultado = calculadora.dividir(numeroA,numeroB)
}
console.log(resultado)
}else{
    console.log("ERROR: la operacion no es valida");
}