const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Dados iniciais (simulando um banco de dados)
let users = [
    { id: 1, name: 'Arthur' },
    { id: 2, name: 'Camilo' },
];

// Rota para listar todos os usuários
app.get('/users', (req, res) => {
    res.json(users);
});

// Rota para buscar um usuário pelo ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});

// Rota para adicionar um novo usuário
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Rota para atualizar um usuário existente
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
        users[userIndex].name = req.body.name;
        res.json(users[userIndex]);
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});

// Rota para deletar um usuário
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(u => u.id !== userId);
    res.status(204).send();
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});