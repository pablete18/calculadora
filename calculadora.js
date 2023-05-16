const sumar = function (a,b){
 return a + b
}

const restar = function (a,b){
    return a - b
}

const multiplicar = function (a,b){
    return a * b
}

const dividir = function (a,b){
    
    if(a === 0 || b === 0 
    ) {return " No se puede dividir por cero ";
    }else{
    return a / b};
}

module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir
}