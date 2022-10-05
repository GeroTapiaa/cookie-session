const {check, body} = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('Nombre de usuario obligatorio').bail(),
    check('email')
        .notEmpty().withMessage('Ingrese su correo electronico').bail(),
    check('color')
        .notEmpty().withMessage('Debes elegir una opcion').bail(),
        check('edad')
        .notEmpty().withMessage('Debes ingresar tu edad').bail()
        .isNumeric({
            no_symbols :true
        }).bail(),

]