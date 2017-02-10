# back-endPasso 1 instalar node https://nodejs.org/en/download/

Passo 2 instalar http-server https://www.npmjs.com/package/http-server

acessar o diretorio do aplicativo via linha de comando rodar http-server -c-1

Acessar via brownser localhost:8080 Se aparecer a página de login, então até agora está tudo certo.

Configuração do Banco MongoDB

Baixe e instale o mongodb seguindo as orientações em https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

Apois iniciar o serviço, crie a coleção de usuarios:

-> use data -> db.createCollection("users")

crie o usuário necessário para validação

db.users.insert({login:"paulo", password: "1234", token :""})
Crie agora a coleção de produtos -> db.createCollection("products")

insira alguns produtos para pesquisa

-> db.products.insert({name:"Camiseta Homem aranha", size: "G", price :"$15"}) ->db.products.insert({name:"Super Man", size: "G", price :"$20"}) ->db.products.insert({name:"Batman", size: "M", price :"$15"}) ->db.products.insert({name:"Demolidor", size: "T", price :"$10"})

Configuração do BackEnd

Utilizando a linha de comando, vá até a pasta "Back-End" Execute node app.js
