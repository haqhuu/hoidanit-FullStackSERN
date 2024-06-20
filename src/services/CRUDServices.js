import bcrypt from 'bcryptjs';
import db from '../models/index';

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
            resolve("Data valid. Success added !");
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

let getUserInforById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }, raw: true
            });
            if (user) {
                resolve(user);
            }
        } catch (e) {
            resolve({});
        }
    })
}

let updataUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                await user.save();
                let allUsers = await db.User.findAll();
                resolve(allUsers);
            } else {
                resolve();
            }

        } catch (e) {
            console.log(e);
        }
    })
}

let deleteUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.destroy({
                where:
                    { id: userId }
            })
            resolve(); // return
        } catch (e) {
            reject(e);
        }
    })
}

export default {
    createNewUser, getAllUser,
    getUserInforById, updataUserData, deleteUserById
}