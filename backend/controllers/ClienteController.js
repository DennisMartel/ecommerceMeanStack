var Cliente = require('../models/Cliente');
const registro_cliente = (req, res) => {
    res.status(200).send({ message: "hola mundo desde nodejs" });
}

module.exports = {
    registro_cliente
}