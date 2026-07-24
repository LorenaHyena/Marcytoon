// ==========================
// LOGIN
// ==========================

const formulario = document.getElementById("loginForm");

// Cria um usuário padrão caso não exista nenhum cadastrado
if (!localStorage.getItem("usuarios")) {

    const usuarios = [
        {
            nome: "Administrador",
            email: "admin@webtoon.com",
            senha: "123456"
        }
    ];

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios"));

    const usuario = usuarios.find(user =>
        user.email === email &&
        user.senha === senha
    );

    if (usuario) {

        // Salva o usuário logado
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

        alert(`Bem-vindo, ${usuario.nome}!`);

        // Redireciona para a página inicial
        window.location.href = "inicio.html";

    } else {

        alert("E-mail ou senha incorretos.");

    }

});