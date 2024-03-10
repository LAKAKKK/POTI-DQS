## 🚀 Meu Projeto 🚀

Este é o meu espaço de experimentação e aprendizado contínuo, onde estou colocando em prática os conhecimentos que venho adquirindo ao longo do tempo. Meu objetivo é construir um projeto pessoal, mas também de uma página dinâmica e interessante.

O que você encontrará aqui:

HTML para estruturação
Estilo com CSS
Interação dinâmica com JavaScript

## Últimas Atualizações:

Implementei uma "Biblioteca" onde pode escutar algumas musicas. O que eu melhorarei vai colocar botão de volume e mais musicas.
Adicioneis mais um about me com um background 


Adicionei um tela de login funciona: 



Tela de login:
User: admin; pass: 123.


Quero melhorar ainda mais e adiciona mais coisa. Fique à vontade para da feedback.

![Captura de tela 2024-02-23 232123](https://github.com/LAKAKKK/POTI-DQS/assets/158624405/fbbe177c-c404-4ce0-add9-dc698544100b)



As musicas eu me inspirei nesse cara: https://dribbble.com/shots/5455156-Car-HMI-assistant-Album-switching


-------------------------------------------------------

# Formulário de Login Simples

Este é um exemplo simples de formulário de login usando HTML, CSS e JavaScript. O formulário possui campos para inserir o nome de usuário e a senha, bem como opções para lembrar o nome de usuário e recuperar a senha.

## Código HTML

O formulário de login é criado usando a tag `<form>`. Dentro do formulário, há dois campos de entrada para o nome de usuário e a senha, cada um com um ícone correspondente. Além disso, há uma caixa de seleção para lembrar o nome de usuário e um link para recuperar a senha. O botão "Login" tem um manipulador de eventos `onclick` que chama a função `logar()` quando clicado.

## Código CSS

O arquivo "login.css" contém estilos para o formulário de login. Os estilos incluem cores, fontes, tamanhos e espaçamento.

## Código JavaScript

A função `logar()` é definida no arquivo JavaScript. Quando a função é chamada, ela obtém os valores dos campos de entrada do nome de usuário e da senha. Em seguida, verifica se o nome de usuário é "admin" e a senha é "123". Se ambas as condições forem verdadeiras, o usuário é autenticado com sucesso e redirecionado para a página "home.html". Caso contrário, uma mensagem de erro é exibida.

```javascript
function logar() {
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;

   if(username == "admin" && password == "123") {
       alert("sucesso");
       location.href = "home.html";
   } else {
       alert("usuário ou senha incorretos");
   }
}










##