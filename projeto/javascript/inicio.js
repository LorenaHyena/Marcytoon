// =====================================
// WEBTOON STUDIO
// inicio.js
// =====================================

// Verifica se existe um usuário logado
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if (!usuarioLogado) {
    alert("Você precisa fazer login.");

    window.location.href = "index.html";
}

// ===============================
// EXIBE O NOME DO USUÁRIO
// ===============================

const logo = document.querySelector(".logo h1");

if (usuarioLogado) {
    logo.textContent = `📚 Webtoon Studio | ${usuarioLogado.nome}`;
}

// ===============================
// BARRA DE PESQUISA
// ===============================

const pesquisa = document.querySelector(".acoes input");
const cards = document.querySelectorAll(".card");

pesquisa.addEventListener("keyup", () => {

    const texto = pesquisa.value.toLowerCase();

    cards.forEach(card => {

        const titulo = card.querySelector("h3").textContent.toLowerCase();
        const genero = card.querySelector("p").textContent.toLowerCase();

        if (
            titulo.includes(texto) ||
            genero.includes(texto)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

// ===============================
// BOTÃO PUBLICAR
// ===============================

const btnPublicar = document.getElementById("btnPublicar");

btnPublicar.addEventListener("click", () => {

    window.location.href = "publicar.html";

});

// ===============================
// BOTÕES "LER"
// ===============================

const botoesLer = document.querySelectorAll(".card button");

botoesLer.forEach(botao => {

    botao.addEventListener("click", () => {

        const titulo = botao.parentElement.querySelector("h3").textContent;

        localStorage.setItem("obraSelecionada", titulo);

        alert(`Abrindo "${titulo}"...`);

        // Futuramente abrirá a página do leitor
        // window.location.href = "obra.html";

    });

});

// ===============================
// CAPÍTULOS RECENTES
// ===============================

const botoesCapitulo = document.querySelectorAll(".capitulo button");

botoesCapitulo.forEach(botao => {

    botao.addEventListener("click", () => {

        const nome = botao.parentElement.querySelector("h3").textContent;
        const capitulo = botao.parentElement.querySelector("span").textContent;

        alert(`${nome}\n${capitulo}`);

        // Futuramente:
        // window.location.href = "leitor.html";

    });

});

// ===============================
// MENU
// ===============================

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", (evento) => {

        evento.preventDefault();

        const pagina = link.textContent;

        switch (pagina) {

            case "Início":
                window.location.href = "inicio.html";
                break;

            case "Categorias":
                alert("Página de categorias em desenvolvimento.");
                break;

            case "Favoritos":
                alert("Página de favoritos em desenvolvimento.");
                break;

            case "Perfil":
                alert("Página de perfil em desenvolvimento.");
                break;

        }

    });

});

// ===============================
// BOTÃO "COMEÇAR AGORA"
// ===============================

const botaoBanner = document.querySelector(".banner button");

botaoBanner.addEventListener("click", () => {

    window.scrollTo({

        top: document.querySelector(".cards").offsetTop - 100,
        behavior: "smooth"

    });

});

// ===============================
// MENSAGEM DE BOAS-VINDAS
// ===============================

console.log(`Bem-vindo, ${usuarioLogado.nome}!`);

console.log("Webtoon Studio iniciado com sucesso.");