import bcrypt from 'bcryptjs';
import db from '../models/index';
import user from '../models/user';
const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                address: data.address,
                gender: data.gender === "1" ? true : false,
                roleId: data.roleId,
                password: hashPasswordFromBcrypt,
                phoneNumber: data.phoneNumber
            })
            resolve(data.roleId);
        } catch (e) {
            reject(e);
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync("B4c0/\/", salt);
            resolve(hashPassword)
        } catch (e) {
            reject(e);
        }


    })
}


let getAllUser = () => {
    return new Promise((resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw: true
            });
            resolve(users);
        } catch (e) {
            reject(e);
        }
    })


}

export default {
    createNewUser, getAllUser
}