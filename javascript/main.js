

// =================== VARIABLES ===================


let nombre = "Eduardo";     // Let (ámbito de función)
var ciudad = "Arequipa";    // Var (ámbito de bloque {}) 
const edad = 21;            // Constante (valor innmutable)


console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Ciudad:", ciudad);


// --- Diferencia entre let y var

function testVar() {
    if(true) {
        var msg = "Saludo desde var" // Es visible en toda la función donde fue declarada,
    }
    console.log(msg); // funciona
}

function testLet() {
    if(true) {
        let msg = "Saludo desde let" // Solo es visible dentro del bloque {}
    }
    console.log(msg); // no funciona - produce error
}

testVar() 
//testLet()

// --- Uso de variables (Presentación - info)

// document.write(nombre)

var  div_info = document.getElementById("info")

div_info.innerHTML = `
    <h2> Hola, soy ${nombre}</h2>
    <h2> Tengo ${edad}</h2>
    <h3> Vivo en ${ciudad}</h2>
`;


// =================== Condicionales ===================

if(edad >= 18) {
    div_info.innerHTML += `
        <p>Soy mayor de edad</p>
    ` 
} else {
    div_info.innerHTML += `
        <p>Soy menor de edad</p>
    `
}

// =================== Bucles ===================

var anio_actual = 2025

div_info.innerHTML += `<ul>`

for(let i=2019; i<=anio_actual; i++) {
    div_info.innerHTML += `
        <li>Año: ${i}</li>
    `
}
div_info.innerHTML += `</ul>`

var div_colores = document.getElementById("colores")

var colores = ['Rojo🔴', 'Amarillo🟨', 'Verde🍏']

for(let idx in colores) {
    div_colores.innerHTML += `
        <p>${colores[idx]}</p>
    `
}

// =================== Funciones ===================

var temas = ['Variables', 'Condicionales', 'Bucles', 'Arreglos', 'Objetos']

var div_temas = getElementById = document.getElementById("temas")

function mostrarTemas() {
    div_temas.innerHTML += numTemas(temas, 3) // Llamamos a otra función
}

function numTemas(lista_temas, num) { // Ingresar a número de temas para mostrar
    let cont_temas = '' 
    for(let i=0; i<4; i++) {
        cont_temas += `<p>✅${lista_temas[i]}</p>`
    }
    return cont_temas
}

// Llamamos a mostrar temas

mostrarTemas()

// =================== Funciones Flecha ===================

var div_despedida = document.getElementById("despedida")
var despedida = (p_palabra, s_palabra) => { // Función anónima (sin nombre)
    div_despedida.innerHTML += p_palabra + " " + s_palabra
}


despedida("¡Muchas", "Gracias! 🫡")











 

