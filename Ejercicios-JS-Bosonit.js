/*
Ejercicio 1
Dado un array de objetos, obtener el objeto con el id 3*/
console.log('Ejercicio 1')

const arrNames = [
  {id: 1, name: 'Pepe'},
  {id: 2, name: 'Juan'},
  {id: 3, name: 'Alba'},
  {id: 4, name: 'Toby'},
  {id: 5, name: 'Lala'}
]

let approved = arrNames.filter(arrNames => arrNames.id === 3);
console.log(approved);


/*filter.arrNames()*/


/*
let mapIdUsers = arrNames.map((arrNames) => arrNames.idUser);
console.log(mapIdUsers);

objetoTres = () => {
  console.log(Object.values(arrNames));
  
  
}
objetoTres()*/

/*
Ejrcicio 2
Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)*/
console.log('Ejercicio 2')

const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']

let filteredarrDirty = arrDirty.filter(Boolean);
console.log(filteredarrDirty);

/*Ejercicio 3
Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales*/
console.log('Ejercicio 3')

const arrCities = [
  {city: 'Logroño', country: 'Spain', capital: false},
  {city: 'Paris', country: 'France', capital: true},
  {city: 'Madrid', country: 'Spain', capital: true},
  {city: 'Rome', country: 'Italy', capital: true},
  {city: 'Oslo', country: 'Norway', capital: true},
  {city: 'Jaén', country: 'Spain', capital: false}
]

/*let noSpain = arrCities.filter(capital == false);
console.log(noSpain);*/

let españa = arrCities.filter((capital) => capital.capital == false)

console.log(españa);

/*
Ejercicio 4
Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 
*/
console.log('Ejercicio 4')

const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

let newArr1 = arrNumber1.filter(num=> arrNumber2.includes(num))
let newArr2 = arrNumber2.filter(num=> arrNumber3.includes(num))

let arrNumber4 = newArr1.concat(newArr2)

let arrTotal = new Set(arrNumber4)
let result = [...arrTotal];
console.log(result);

/*
arrNumber1.forEach(function(arrTotal) {
  console.log(arrTotal)
})*/


/*
Ejercicio 5
Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que 
sean city y isSpain. El valor de isSpain será un booleano indicando si es una ciudad de España.
Ejemplo: {city: "Logroño", isSpain: "true"}
*/
console.log('Ejercicio 5')

const arrCities2 = [
  {city: 'Logroño', country: 'Spain', capital: false},
  {city: 'Bordeaux', country: 'France', capital: false},
  {city: 'Madrid', country: 'Spain', capital: true},
  {city: 'Florence', country: 'Italy', capital: true},
  {city: 'Oslo', country: 'Norway', capital: true},
  {city: 'Jaén', country: 'Spain', capital: false}
]

let ciudadesNoCapitales2 = arrCities2
  .filter(noCapital => noCapital.capital == false)
  .map(noCapital => {
    return {
        city: noCapital.city,
        isSpain:noCapital.country == 'Spain' ? true : false
        }
});
console.log(ciudadesNoCapitales2);

/*
Ejercicio 6
Crea una función que redondee un número float a un número específico de decimales. 
La función debe tener dos parámetros: 
Primer parámetro es un número float con x decimales
Según parámetro es un int que indique el número de decimales al que redondear
Evitar usar el método toFixed()
Ejemplo de uso de la función:
*/

//Ejemplo
/*let roundedResult1 = roundTo(2.123, 2);
  console.log(roundedResult1); // 2.12
//Ejemplo
let roundedResult2 = roundTo(1.123456789, 6);
  console.log(roundedResult2); // 1.123457
  */
console.log('Ejercicio 6')

let roundedResult = (number, decimal) =>{
  return parseFloat(Math.round(number * 100) / 100).toFixed(decimal);
   };
  console.log(roundedResult(2.6511382, 6))
  console.log(roundedResult(210.65826370 , 8))

/* 
VER - Ejercicio 7 
Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” 
después de ser ejecutados por una función específica. La función debe tener dos parámetros:
Primer parámetro es un objeto con x número de campos y valores
Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar 
al objeto del primer parámetro

Ejemplo de uso de la función:
const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
console.log(result); // {a: 1, c: 3}*/
console.log('Ejercicio 7')

const typeOf = function returnTypeOf(x) {
  if(typeof(x) === 'string') {
    console.log('x is a string')
  } else if (typeof(x) === 'number'){
    console.log('x is a number')
  } else{
    console.log('x is another')
   }
  }
console.log(typeOf(88))

function returnFalsyValues(obj, typeOf){
   obj = {}
  if(typeOf == 'number'){
      return 'obj'
  }
 else{
  return 'nada'
 }
}

console.log(typeOf({a: '1', b: 2, c:8}))

/*Ejercicio 8
Crea una función que convierta un número de bytes en un formato con valores legibles 
('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'). La función debe tener 2 parámetros:
Primer parámetro debe ser el número de bytes
Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado 
(esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.

Ejemplo de uso de la función:
const result = fromBytesToFormattedSizeUnits(1000);
console.log(result); // 1KB

const result = fromBytesToFormattedSizeUnits(123456789);
console.log(result); // 123MB

const result = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result); // -12.145GB*/
console.log('Ejercicio 8')

function fromBytesToFormattedSizeUnits(bytes, digits){
  let i = Math.floor( Math.log(bytes) / Math.log(1000)),
  sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  digits = 3;
  return ( bytes / Math.pow(1000, i).toPrecision(3)*1 + ' ' + sizes[i])
}

console.log(fromBytesToFormattedSizeUnits(900000))

/*Ejercicio 9
Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
La función debe tener un objeto como único parámetro.
Ejemplo de uso de la función:
const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }*/
console.log('Ejercicio 9')

const lowercaseKeys = (obj) =>{
  let resultLC = {};
  Object.entries(obj).forEach(([key, value]) => {
    const newObject = {[key.toLowerCase()]: value}
    resultLC = {...resultLC, ...newObject}
  });
  console.log(resultLC);
}


console.log(lowercaseKeys({ NamE: 'Charles', ADDress: 'Home Street' }))