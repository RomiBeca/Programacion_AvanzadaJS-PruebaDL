import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from "./animal.module.js";


(function () {

    const obtenerImgYSonidoAnimales = async () => {
        try {
            const response = await fetch("animales.json");
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    const pintarAnimalesDom = document.querySelector("#animales");
    const botonRegistrar = document.querySelector("#btnRegistrar");
    const previewAnimalDom = document.querySelector("#preview");

    const selecNombreAnimal = document.querySelector("#animal");

    selecNombreAnimal.addEventListener('change', async (e) => {
        const valor = e.target.value;
        const data = await obtenerImgYSonidoAnimales();
        const { animales } = data;
        const previewAnimals = animales.find((animal) => animal.name === valor);
        previewAnimalDom.style.backgroundImage = `url("./assets/imgs/${previewAnimals.imagen}")`;
    });

    function cartaAnimal(animal) {
        return `  
        <div class="cardss container">        
            <div class="">
                <img src="${animal.img}" alt="${animal.nombre}" width="300px">
                <p class="text-light comentario">${animal.comentario}</p>
            </div>
            <div>
                <button id ="buttonSonido" class="btn btn-warning m-4 p-2 ">Sonido Animal</button>
                <audio src="${animal.sonido}"></audio>
            </div>
         </div>`;
    }

    botonRegistrar.addEventListener('click', async () => {
        const selecNombreAnimal = document.querySelector("#animal").value;
        const selecEdadAnimal = document.querySelector("#edad").value;
        const ingresoComentarios = document.querySelector("#comentarios").value;

        const data = await obtenerImgYSonidoAnimales();
        const { animales } = data;
        const busquedaAnimal = animales.find((animal) => animal.name === selecNombreAnimal);
        let nuevoAnimal;

        if (selecNombreAnimal && selecEdadAnimal && ingresoComentarios) {
            switch (selecNombreAnimal) {
                case "Leon":
                    nuevoAnimal = new Leon(selecNombreAnimal, selecEdadAnimal, busquedaAnimal.imagen, ingresoComentarios, busquedaAnimal.sonido);
                    break;
                case "Lobo":
                    nuevoAnimal = new Lobo(selecNombreAnimal, selecEdadAnimal, busquedaAnimal.imagen, ingresoComentarios, busquedaAnimal.sonido);
                    break;
                case "Oso":
                    nuevoAnimal = new Oso(selecNombreAnimal, selecEdadAnimal, busquedaAnimal.imagen, ingresoComentarios, busquedaAnimal.sonido);
                    break;
                case "Serpiente":
                    nuevoAnimal = new Serpiente(selecNombreAnimal, selecEdadAnimal, busquedaAnimal.imagen, ingresoComentarios, busquedaAnimal.sonido);
                    break;
                case "Aguila":
                    nuevoAnimal = new Aguila(selecNombreAnimal, selecEdadAnimal, busquedaAnimal.imagen, ingresoComentarios, busquedaAnimal.sonido);
                    break;
            }
        } else {
            alert("Por favor, complete todos los campos del formulario.");
        }

        const cartaAnimales = cartaAnimal(nuevoAnimal);
        pintarAnimalesDom.innerHTML += cartaAnimales;

        const allCards = document.querySelectorAll(".cardss");
        allCards.forEach(function (item) {
            item.addEventListener('click', function (e) {
                /*  const audio = this.querySelector("audio");
                 audio.play(); */
                const audio = item.querySelector("audio");
                const buttonSonido = item.querySelector("#buttonSonido");

                buttonSonido.addEventListener('click', function (e) {
                    audio.play();
                })
            });
        });

        document.querySelector("#animal").selectedIndex = 0;
        document.querySelector("#edad").selectedIndex = 0;
        document.querySelector("#comentarios").value = "";

    });

})();
