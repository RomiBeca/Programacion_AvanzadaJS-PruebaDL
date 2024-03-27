export class Animal {
    #nombre
    #edad
    #img
    #comentario
    #sonido
    constructor(nombre, edad, img, comentario, sonido) {
        this.#nombre = nombre
        this.#edad = edad
        this.#img = `./assets/imgs/${img}`
        this.#comentario = comentario
        this.#sonido = `./assets/sounds/${sonido}`
    }

    get nombre() {
        return this.#nombre
    }
    get edad() {
        return this.#edad
    }
    get img() {
        return this.#img
    }
    set newImg(newImg) {
        return this.#img = newImg
    }
    get comentario() {
        return this.#comentario
    }
    set newComentario(newComentario) {
        return this.#comentario = newComentario
    }
    get sonido() {
        return this.#sonido
    }
    set sonido(newSonido) {
        this.#sonido = newSonido;
    }

}

export class Leon extends Animal {
    rugir() {
        reproducirSonido(this);
    }
}
export class Lobo extends Animal {
    aullar() {
        reproducirSonido(this);
    }
}
export class Oso extends Animal {
    grunir() {
        reproducirSonido(this);
    }
}
export class Serpiente extends Animal {
    sisear() {
        reproducirSonido(this);
    }
}
export class Aguila extends Animal {
    chillar() {
        reproducirSonido(this);
    }
}