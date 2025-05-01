// En consola: hacemos que se creen un archivo .js cada que haya un cambia (-w watcher)
// tsc main.ts -w
// =================== VARIABLES ===================
// let tiene ámbito de bloque (no de función)
var nombre = "Eduardo";
// var tiene ámbito de función (⚠️ evitar en TypeScript)
var ciudad = "Arequipa";
// const declara constantes (inmutables)
var edad = 21;
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Ciudad:", ciudad);
// =================== Diferencia entre let y var ===================
function testVar() {
    if (true) {
        var msg = "Saludo desde var";
        // ⚠️ Visible en toda la función, no solo dentro del if
    }
    console.log(msg); // ✅ Funciona
}
function testLet() {
    if (true) {
        var msg = "Saludo desde let";
        // Solo es visible dentro de este bloque
    }
    // console.log(msg); // ❌ Error: Variable 'msg' no existe aquí
}
testVar();
// testLet(); // Descomenta para probar el error
// =================== Manipulación del DOM ===================
var div_info = document.getElementById("info");
div_info.innerHTML = "\n    <h2> Hola, soy ".concat(nombre, "</h2>\n    <h2> Tengo ").concat(edad, "</h2>\n    <h3> Vivo en ").concat(ciudad, "</h3>\n");
// =================== Condicionales ===================
if (edad >= 18) {
    div_info.innerHTML += "<p>Soy mayor de edad</p>";
}
else {
    div_info.innerHTML += "<p>Soy menor de edad</p>";
}
// =================== Bucles ===================
var anio_actual = 2025;
div_info.innerHTML += "<ul>";
for (var i = 2019; i <= anio_actual; i++) {
    div_info.innerHTML += "<li>A\u00F1o: ".concat(i, "</li>");
}
div_info.innerHTML += "</ul>";
// =================== Arreglos ===================
var div_colores = document.getElementById("colores");
var colores = ['Rojo🔴', 'Amarillo🟨', 'Verde🍏'];
for (var idx in colores) {
    div_colores.innerHTML += "<p>".concat(colores[idx], "</p>");
}
// =================== Funciones ===================
var temas = ['Variables', 'Condicionales', 'Bucles', 'Arreglos', 'Objetos'];
var div_temas = document.getElementById("temas");
function mostrarTemas() {
    div_temas.innerHTML += numTemas(temas, 3);
}
// Función que muestra un número limitado de temas
function numTemas(lista_temas, num) {
    var cont_temas = '';
    for (var i = 0; i < num && i < lista_temas.length; i++) {
        cont_temas += "<p>\u2705 ".concat(lista_temas[i], "</p>");
    }
    return cont_temas;
}
mostrarTemas();
// =================== Funciones Flecha ===================
var div_despedida = document.getElementById("despedida");
// Función flecha (arrow function)
var despedida = function (p_palabra, s_palabra) {
    div_despedida.innerHTML += "".concat(p_palabra, " ").concat(s_palabra);
};
despedida("¡Muchas", "Gracias! 🫡");
