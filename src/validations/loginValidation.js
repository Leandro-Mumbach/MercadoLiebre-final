const {body} = require('express-validator');
const users = require('../data/db').loadUsers();
const bcryptjs = require('bcryptjs');

module.exports = [ 
    body('email')
    .notEmpty().withMessage('Ingrese su email')
    .isEmail().withMessage('Debe ingresar un mail registrado'),
    body('password')
    .notEmpty().withMessage('Ingrese su contraseña')
    .custom((value, {req}) => {
        let user = users.find(user => user.email === req.body.email.trim() && bcryptjs.compareSync(value,user.password));
        return !!user
    }).withMessage('Credenciales inválidas'),
]