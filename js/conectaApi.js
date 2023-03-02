async function listaVideos(){
    const resposta = await fetch('http://localhost:3000/videos');
    const json = await resposta.json();    
    return json;
}

export const conectaApi = {listaVideos};