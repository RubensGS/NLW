import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json(['Rubens', 'Nathalia', 'Felipe']);
});

app.listen(3333);