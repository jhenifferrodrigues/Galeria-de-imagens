'use strict';

async function carregarFotos() {
    const url = `https://picsum.photos/v2/list?page=2&limit=100`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function criarImagem(foto) {
    const galeria = document.getElementById('galeria');
    const novaImg = document.createElement('img');
    novaImg.src = foto.download_url;
    novaImg.style.width = '300px';
    novaImg.style.margin = '10px';
    novaImg.style.borderRadius = '2px';
    novaImg.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    galeria.appendChild(novaImg);
}

async function preencherFotos() {
    const fotos = await carregarFotos();
    const galeria = document.getElementById('galeria');

    galeria.replaceChildren();
    fotos.forEach(criarImagem);
    console.log(fotos);
}

document.addEventListener('DOMContentLoaded', preencherFotos);

