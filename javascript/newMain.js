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

console.log("Map:", dobles)
console.log("ForEach:", dobles2)


// filter - permite filtrar por una condición al arreglo
const mayores = numeros.filter(n => n > 2);
console.log("Filter:", mayores); // [3, 4]


const menores_a_3 = numeros.filter(m => m < 3)
console.log(`Filter (<3): ${menores_a_3}`)


// find - encuentra un valor de acuerdo a una condición
const solo4 = numeros.find(n => n === 4); // === iguala las referencias
console.log("Find:", solo4); // 4


// replace (string) - remplaza una cadena de caracteres 
const saludo = "Hola mundo";
const nuevoSaludo = saludo.replace("mundo", "Eduardo"); // retorna una nueva cadena
console.log("Replace:", nuevoSaludo); // "Hola Eduardo"

// repeat (string)
const eco = "Hey! ".repeat(3); // retorna 3 veces la cadena
console.log("Repeat:", eco); // "Hey! Hey! Hey! "


// reduce - (como una prensa) aplica una función reductora para cada valor del arreglo
// función acumuladora
const acumular = (acum, n) => acum + n 
const suma = numeros.reduce(acumular, 0); // (funcion acumuladora, valor inicial)
// 0 es opcional siempre y cuando el array no esté vacío

console.log("Reduce:", suma); // 10

// sort
// ordena los elementos de un arreglo, lo hace como transformando a cadenas de texto
// y comparando el valor de unicode
const desordenados1 = [3, 1, 4, 2];
const desordenados2 = [3, 1, 4, 2];

const ordenados_asc = desordenados1.sort((a, b) => a - b); // modifica el arreglo original
const ordenados_desc = desordenados2.sort( (a,b) => b - a);

console.log("Sort (ascendente):", ordenados_asc); // [1, 2, 3, 4]
console.log("Sort (descendente):", ordenados_desc); // [4, 3, 2, 1]

console.log("Sort (desordenados1):", desordenados1); // [3, 1, 4, 2]
console.log("Sort (desordenados2):", desordenados2); // [3, 1, 4, 2]