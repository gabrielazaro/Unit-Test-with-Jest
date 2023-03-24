const sum = (a,b) => {
    return a + b
}

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};


function fromEuroToDollar(euro) {
    return euro * oneEuroIs.USD
};

const fromDollarToYen = (dollar) =>{
    let yen = dollar * oneEuroIs.JPY / oneEuroIs.USD;
    return yen;
};

const fromYenToPound = (yen) =>{
    let dollar = fromDollarToYen(yen/oneEuroIs.JPY);
    let pound = dollar * oneEuroIs.GBP;
    return pound;
}; 

console.log(fromDollarToYen(15));
console.log(fromYenToPound(525));

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPound};


