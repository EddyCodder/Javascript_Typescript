// En consola: hacemos que se creen un archivo .js cada que haya un cambia (-w watcher)
// tsc main.ts -w

// =================== VARIABLES ===================

// let tiene ámbito de bloque (no de función)
let nombre: string = "Eduardo";     

// var tiene ámbito de función (⚠️ evitar en TypeScript)
var ciudad: string = "Arequipa";    

// const declara constantes (inmutables)
const edad: number = 21;            

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Ciudad:", ciudad);

// =================== Diferencia entre let y var ===================

function testVar(): void {
    if (true) {
        var msg: string = "Saludo desde var"; 
        // ⚠️ Visible en toda la función, no solo dentro del if
    }
    console.log(msg); // ✅ Funciona
}

function testLet(): void {
    if (true) {
        let msg: string = "Saludo desde let";
        // Solo es visible dentro de este bloque
    }
    // console.log(msg); // ❌ Error: Variable 'msg' no existe aquí
}

testVar();
// testLet(); // Descomenta para probar el error

// =================== Manipulación del DOM ===================

const div_info = document.getElementById("info") as HTMLElement;

div_info.innerHTML = `
    <h2> Hola, soy ${nombre}</h2>
    <h2> Tengo ${edad}</h2>
    <h3> Vivo en ${ciudad}</h3>
`;

// =================== Condicionales ===================

if (edad >= 18) {
    div_info.innerHTML += `<p>Soy mayor de edad</p>`; 
} else {
    div_info.innerHTML += `<p>Soy menor de edad</p>`; 
}

// =================== Bucles ===================

const anio_actual: number = 2025;

div_info.innerHTML += `<ul>`;
for (let i = 2019; i <= anio_actual; i++) {
    div_info.innerHTML += `<li>Año: ${i}</li>`;
}
div_info.innerHTML += `</ul>`;

// =================== Arreglos ===================

const div_colores = document.getElementById("colores") as HTMLElement;

const colores: string[] = ['Rojo🔴', 'Amarillo🟨', 'Verde🍏'];

for (let idx in colores) {
    div_colores.innerHTML += `<p>${colores[idx]}</p>`;
}

// =================== Funciones ===================

const temas: string[] = ['Variables', 'Condicionales', 'Bucles', 'Arreglos', 'Objetos'];

const div_temas = document.getElementById("temas") as HTMLElement;

function mostrarTemas(): void {
    div_temas.innerHTML += numTemas(temas, 3);
}

// Función que muestra un número limitado de temas
function numTemas(lista_temas: string[], num: number): string {
    let cont_temas: string = '';
    for (let i = 0; i < num && i < lista_temas.length; i++) {
        cont_temas += `<p>✅ ${lista_temas[i]}</p>`;
    }
    return cont_temas;
}

mostrarTemas();

// =================== Funciones Flecha ===================

const div_despedida = document.getElementById("despedida") as HTMLElement;

// Función flecha (arrow function)
const despedida = (p_palabra: string, s_palabra: string): void => {
    div_despedida.innerHTML += `${p_palabra} ${s_palabra}`;
};

despedida("¡Muchas", "Gracias! 🫡");
