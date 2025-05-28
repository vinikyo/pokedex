const express = require('express');
const app = express();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(express.json());

app.get('/pokemons', async (req, res) => {
    const pokemons = await prisma.pokemon.findMany();
    res.json(pokemons);
})

app.post('/pokemons', async (req, res) => {
    const {name, type } = req.body;
    const newPokemon = await prisma.pokemon.create({
        data: { name,type }
    });
    res.status(201).json(newPokemon);
});

app.get('/', (req, res) => {
    res.send('Pikachu Prismatico');
});

app.listen(3333, () => {
    console.log('servidor rodando na http://localhost:3333');
});

