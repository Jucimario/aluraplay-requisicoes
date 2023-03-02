async function listaVideos() {
    const resposta = await fetch('http://localhost:3000/videos');
    const json = await resposta.json();
    return json;
}

async function criarVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem

        })
    });

    if (!conexao.ok) {
        throw new Error('Não foi possivel criar o video');
    }

    const json = await conexao.json();
    return json;
}

async function buscaVideos(busca) {
    const resposta = await fetch(`http://localhost:3000/videos?q=${busca}`);
    const json = await resposta.json();
    return json;
};

export const conectaApi = {
    listaVideos,
    criarVideo,
    buscaVideos
};