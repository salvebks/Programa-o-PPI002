import express from 'express';

const host = 'localhost';
const port = 3000;

const app = express(); //oferecendo ao desenvolvedor um servidor http de modo expresso

// adicionar funcionaldades para o servidor
app.use(express.static('public')); // Permite que o Navegador acesse os arquivos css
// rota principal
app.get('/', (requisicao, resposta) => {
    resposta.write(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Formulario de Cadastro</title>
        <link rel="stylesheet" href="/style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
        <style>
            .formulario {
                max-width: 300px;
                margin: 0 auto;
                border: 1px solid black;
                padding: 40px;
                border-radius: 5px;
                font-weight: bold;
            }
            body {
                background-color: #f8f9fa;  
            }
        </style>
    </head>
    <body>
    <div class="alert alert-success text-center" role="alert">
    <strong>Formulario de Cadastro</strong>
    </div>
        <img src="https://www.unoeste.br/anjos" alt="Logo da UNOESTE" class="img-fluid mb-4">
    <div class="container">
        <form class="formulario" action="/cadastro" method="post"border="1">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
            <br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <br><br>
            <label for="idade">Idade:</label>
            <input type="number" id="idade" name="idade" required>
             <br><br>
             <label for="genero">Gênero:</label>
             <select id="genero" name="genero" required>
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
             </select>
             <br><br>
             <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" required>
                <br><br>
                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" required>
                <br><br>
             <label for="senha">Senha:</label>
             <input type="password" id="senha" name="senha" required>
             <br><br>
            <button type="button" class="btn btn-primary mb-3" onclick="window.location.href='/cadastro'">Cadastrar</button>
            <button type="reset" class="btn btn-secondary mb-3">Limpar</button>
        </form>
    </body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
    </html>
    `);
});
app.get('/cadastro', (requisicao, resposta) => {
    resposta.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Cadastro Realizado</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    </head>
    <body>
        <div class="container mt-5">
            <div class="alert alert-success text-center" role="alert">
                <h1>Cadastro Realizado com Sucesso!</h1>
            </div>
        </div>
    </body>
    </html>




`);
});
app.listen(port, host, () => {
    console.log(`Servidor rodando em http://${host}:${port}`);
})



        
        
        
        
        
        
        
        
        
     