# Desafio Docker - Full Cycle Rocks! 🐳

![Docker](https://img.shields.io/badge/docker-v20.10.8-blue)
![Node.js](https://img.shields.io/badge/node.js-v15.0.0-green)
![MySQL](https://img.shields.io/badge/mysql-v5.7-orange)
![Nginx](https://img.shields.io/badge/nginx-v1.21.3-lightgrey)


Bem-vindo ao Desafio Docker do Full Cycle! Neste desafio, você aplicará seus conhecimentos sobre o uso do Nginx como proxy reverso, Docker, Node.js, e MySQL para criar uma aplicação que atende aos seguintes critérios:

- Quando um usuário acessar o Nginx, ele fará uma chamada para nossa aplicação Node.js.
- A aplicação Node.js adicionará um registro em nosso banco de dados MySQL, cadastrando um nome na tabela "people".
- O retorno da aplicação Node.js para o Nginx deverá ser:

```html
<h1>Full Cycle Rocks!</h1>
- Lista de nomes cadastrados no banco de dados.

Pré-requisitos

Docker instalado (https://www.docker.com/)
Docker Compose instalado (https://docs.docker.com/compose/install/)
Git instalado (https://git-scm.com/)

Como rodar
Clone este repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git

Navegue até o diretório do projeto:

cd seu-repositorio

Inicie os serviços com Docker Compose:

docker-compose up -d
Acesse o aplicativo em seu navegador em http://localhost:8080.

Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

Feito com ❤️ pela GARDENE.
