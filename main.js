

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
testLet()



document.write(nombre)




