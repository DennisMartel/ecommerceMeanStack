var Admin = require('../models/Admin');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../helpers/jwt');

const registro_admin = async (req, res) => {
    var data = req.body;

    var admins_arr = [];

    admins_arr = await Admin.find({email:data.email})

    if (admins_arr.length == 0) {
        if (data.password) {
            bcrypt.hash(data.password, null, null, async (err, hash) => {
                if (hash) {
                    data.password = hash;
                    var reg = await Admin.create(data);
                    res.status(200).send({message:reg});
                } else {
                    res.status(200).send({message:"Error server", data:undefined});
                }
            });
        } else {
            res.status(200).send({message:"No hay una contraseña", data:undefined});
        }
    } else {
        res.status(200).send({message:"El correo ya existe en la base de datos", data:undefined});
    }
}

const login_admin = async (req, res) => {
    var data = req.body;

    var admins_arr = [];

    admins_arr = await Admin.find({email:data.email})

    if (admins_arr.length == 0) {
        res.status(200).send({message:"No se encontro el correo", data:undefined});
    } else {
        let user = admins_arr[0];
        
        bcrypt.compare(data.password, user.password, async (err, check) => {
            if (check) {
                res.status(200).send({data:user, token: jwt.createToken(user)});
            } else {
                res.status(200).send({message:"La contraseña no coincide"});
            }
        });
    }
    
    // res.status(200).send({message:data});
}

module.exports = {
    registro_admin,
    login_admin
}