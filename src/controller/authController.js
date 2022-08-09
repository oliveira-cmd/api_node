const express = require('express');

const user = require('../model/user');

const router = express.Router();

router.post('/register', async(req, res) => {
    try {
        const User = await user.create(req.body);

        return res.send({User});
    } catch(err) {
        return res.status(400).send({error: 'Erro ao criar usuario'});
    }
});

module.exports = app => app.use('/auth', router); // criando a rota (/auth/register) opara chamar essa controller