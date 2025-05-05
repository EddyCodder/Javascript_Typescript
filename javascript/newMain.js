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

}

const persona1 = new Persona("Eduardo", 21, "Arequipa");
console.log(persona1.presentarse());
