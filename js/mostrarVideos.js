import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(elemento) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = ` <iframe width="100%" height="72%" src="${elemento.url}"
    title="${elemento.titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${elemento.imagem}" alt="logo canal alura">
    <h3>${elemento.titulo}</h3>
    <p>${elemento.descricao}</p>
</div>`;

    return video;
}

async function listaVideo() {

    try {
        const listaApi = await conectaApi.listaVideos();
        listaApi.forEach(elemento => {
            lista.appendChild(constroiCard(elemento));
        });
    } catch (erro) {
        lista.innerHTML = `<h class="mensagem__titulo">Não foi possivel carregar os vídeos</h>`;
    }
}

listaVideo();