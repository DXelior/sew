"use strict";
class Equipo {
    constructor(nombre, codigoUci, pais) {
        this.nombre = nombre;
        this.codigoUci = codigoUci;
        this.pais = pais;
    }

    rellenarAtributos() {
        this.director = "Davide Bramati";
        this.categoria = "UCI WorldTeam";
        this.paginaWeb = "https://www.lavuelta.es/es/equipo/SOQ/soudal-quick-step";
    }

    datosBasicos() {
        return this.nombre + " (" + this.codigoUci + ")";
    }

    getPais() {
        return this.pais;
    }

    getInformacionSecundaria() {
        return "<ul><li>Director: " + this.director + "</li><li>Categoría: " + this.categoria + "</li></ul>";
    }

    getPaginaWeb() {
        const parrafo = document.createElement("p");
        const enlace = document.createElement("a");
        enlace.href = this.paginaWeb;
        enlace.textContent = "Ficha oficial del equipo en La Vuelta";
        enlace.title = "Enlace a la web oficial del equipo Soudal Quick-Step";
        parrafo.appendChild(enlace);

        const seccionEquipo = document.querySelector("main > section");
        if (seccionEquipo) {
            seccionEquipo.appendChild(parrafo);
        }
    }
}

let equipoCiclista = new Equipo("Soudal Quick-Step", "SOQ", "Bélgica");
equipoCiclista.rellenarAtributos();

const seccionEquipo = document.createElement("section");
const h3Equipo = document.createElement("h3");
h3Equipo.textContent = equipoCiclista.datosBasicos() + " - " + equipoCiclista.getPais();
seccionEquipo.appendChild(h3Equipo);

seccionEquipo.insertAdjacentHTML("beforeend", equipoCiclista.getInformacionSecundaria());

const h2Destino = document.querySelector("main > h2");
if (h2Destino) {
    h2Destino.insertAdjacentElement("afterend", seccionEquipo);
}

equipoCiclista.getPaginaWeb();