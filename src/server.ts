// impotação das bibliotecas
import express from 'express'; // inportação do express
import path from 'path'; // pega raiz do projeto
import mustache from 'mustache-express'; // usando o sistema do mustache no nosso projeto
// inportado a biblioteca para o uso de variavel de anbiente
import dotenv from 'dotenv';

// inportando nossas routas
import mainRoutes from './routes/index'; 

// dando acessp a função do dotenv
dotenv.config();
// pegando a função do express
const server  = express();

// setendo a view do mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// ultilizando pra deixa nosso arquivo publico na pasta
server.use(express.static(path.join(__dirname, '../public')));

// pra receber os dados via post
server.use(express.urlencoded({extended:true})); 

//rotas
server.use('/', mainRoutes);

//routa de erro 404
server.use((req, res)=>{
    res.send('pagina nao encotrada');
});

// definindo nosso servidor 
server.listen(process.env.PORT);