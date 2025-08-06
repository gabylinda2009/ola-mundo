// Declara uma variável chamada nomeUsuário e começa com uma string vazia
let nomeUsuário = "";

// Seleciona no HTML o elemento com o id "nome-usuário"
// Esse será o local onde o nome do usuário será exibido
let elemento = document.querySelector("#nome-usuário");

// Enquanto o nomeUsuário for uma string vazia (""), ou seja, enquanto nada for digitado,
// o navegador continuará pedindo para o usuário informar seu nome
while (nomeUsuário == "") {
    nomeUsuário = prompt("Qual é o seu nome?");
    // O prompt abre uma caixinha no navegador para o usuário digitar o nome
}

// Verifica se o usuário cancelou o prompt (clicou em "Cancelar")
// Nesse caso, o valor retornado é null
if (nomeUsuário == null) {
    // Se o usuário clicou em "Cancelar", mostra uma mensagem padrão
    elemento.textContent = 'seja muito bem-vindo.';
} else {
    // Se o usuário digitou algum nome, mostra o nome no elemento HTML
    elemento.textContent = nomeUsuário;
}