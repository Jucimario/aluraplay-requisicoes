import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

var botaoPesquisa = document.querySelector("[data-botao-Pesquisa]");

async function buscaVideo(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideos(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");
    
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(element => lista.appendChild(constroiCard(element)));    
}

botaoPesquisa.addEventListener("click", evento => buscaVideo(evento));
