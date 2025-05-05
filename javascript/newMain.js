// =================== CLASE ===================


class Persona {
    constructor(nombre, edad, ciudad) {
        this._nombre = nombre;
        this._edad = edad;
        this._ciudad = ciudad;
    }

    presentarse() {
        return `Hola, soy ${this._nombre}, tengo ${this._edad} años y vivo en ${this._ciudad}`
    }

    esMayor() {
        return this._edad >= 18 // Si es mayor devuelve su edad
    }

}

const persona1 = new Persona("Eduardo", 21, "Arequipa")
console.log(persona1.presentarse())

console.log(persona1.esMayor())

// =================== FUNCIONES DE ARREGLOS ===================

// const numeros = [1, 2, 3, 4];

// // map
// const cuadrados = numeros.map(n => n * n);
// console.log("Map:", cuadrados); // [1, 4, 9, 16]


const numeros = [1, 2, 3, 4]

// map - ejecuta una fucnión para cada uno de los elementos y devuelve el arreglo
// cosa que no hace un forEach

const dobles = numeros.map(n => n * 2) 
const dobles2 = numeros.forEach(n => n * 2) // error - undefined

console.log(dobles)
console.log(dobles2)


// filter - permite filtrar por una condición al arreglo
const mayores = numeros.filter(n => n > 2);
console.log("Filter:", mayores); // [3, 4]


const menores_a_3 = numeros.filter(m => m < 3)
console.log(`Filter (<3): ${menores_a_3}`)


// find    
const solo4 = numeros.find(n => n == 4);
console.log("Find:", solo4); // 4

