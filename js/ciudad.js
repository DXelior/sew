"use strict";
class Ciudad {
    constructor(ciudad, pais, gentilicio) {
        this.ciudad = ciudad;
        this.pais = pais;
        this.gentilicio = gentilicio;
    }

    rellenarAtributos() {
        this.poblacion = "27.544"; // Puedes ajustar el dato real según el libro de ruta
        this.coordenadas = "36.7339° N, -3.6911° O";
    }

    getCiudad() {
        return this.ciudad;
    }

    getPais() {
        return this.pais;
    }

    getInformacionSecundaria() {
        return "<ul><li>Gentilicio: " + this.gentilicio + "</li><li>Población: " + this.poblacion + " habitantes</li></ul>";
    }

    escribeCoordenadas() {
        const mensaje = document.createElement("p");
        mensaje.textContent = "Coordenadas de la ciudad: " + this.coordenadas;
        const seccionActual = document.querySelector("main > section:last-of-type");
        if (seccionActual) {
            seccionActual.appendChild(mensaje);
        }
    }
}

let etapaCiudad = new Ciudad("Almuñécar", "España", "Sexitan@");
etapaCiudad.rellenarAtributos();

const seccionMeteo = document.createElement("section");
const h3Meteo = document.createElement("h3");
h3Meteo.textContent = etapaCiudad.getCiudad() + ", " + etapaCiudad.getPais();
seccionMeteo.appendChild(h3Meteo);

seccionMeteo.insertAdjacentHTML("beforeend", etapaCiudad.getInformacionSecundaria());

const h2Destino = document.querySelector("main > h2");
if (h2Destino) {
    h2Destino.insertAdjacentElement("afterend", seccionMeteo);
}

etapaCiudad.escribeCoordenadas();