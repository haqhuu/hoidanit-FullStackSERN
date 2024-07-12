import db from "../models/index";
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        } catch (e) {
            reject(e);
        }
    })
}

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);

            if (isExist) {
                // user exist
                let user = await db.User.findOne({
                    where: {
                        email: email
                    }, raw: true
                    , attributes: [
                        'email', 'roleId', 'password'
                    ]
                });
                if (user) {
                    // compare password
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = "ok";
                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = "wrong passsword";
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `User not found !`;
                }
            } else {
                // return error
                userData.errCode = 1;
                userData.errMessage = `Your's Email isn't exist in the system. Try other email`;
            }
            resolve(userData);
        } catch (e) {
            reject(e);
        }
    })
}

let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where:
                {
                    email: userEmail
                }
            })
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getAllUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = '';
            if (userId === 'ALL') {
                users = db.User.findAll({
                    attributes: {
                        exclude: ['password']
                    }
                })
            }
            if (userId && userId !== 'ALL') {
                users = await db.User.findOne({
                    where: {
                        id: userId
                    },
                    attributes: {
                        exclude: ['password']
                    },
                    row: true
                })
            }

            resolve(users);
        } catch (e) {
            reject(e);
        }
    })
}

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkUserEmail(data.email);
            if (check === true) {
                resolve({
                    errCode: 1,
                    message: 'U email has alredy in used. Try another email!'
                })
                return (resolve)
            }

            let hashPasswordFromBcrypt = await hashUserPassword(data.password);

            await db.User.create({
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                gender: data.gender === "1" ? true : false,
                roleId: data.roleId,
                password: hashPasswordFromBcrypt,
                phoneNumber: data.phoneNumber
            });

            resolve({
                errCode: 0,
                message: 'OK'
            });
            return (resolve)
        } catch (e) {
            reject({
                errCode: 3,
                message: e.message
            })
        }
    })
}

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 4,
                    errMessage: `Missinf parameter`
                })
            }
            let user = await db.User.findOne({
                where: { id: data.id }, raw: false
            })

            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;

                await user.save();

                resolve({
                    errCode: 0,
                    errMessage: 'The user is updated'
                })
            }
            resolve({
                errCode: 1,
                errMessage: `The user isn't exist`
            });
        } catch (e) {
            reject({
                errCode: 3,
                errMessage: e.message
            })
        }
    })
}

let deleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }, raw: false
            })

            if (!user) {
                resolve({
                    errCode: 1,
                    errMessage: `The user isn't exist`
                })
            }
            await user.destroy()

            resolve({
                errCode: 0,
                errMessage: `The user is deleted`
            })
        } catch (e) {
            reject({
                errCode: 2,
                message: e.message
            })
        }
    })
}

export default {
    handleUserLogin,
    getAllUsers,
    createNewUser,
    updateUserData,
    deleteUser
}