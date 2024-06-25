import userService from "../services/userService";

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    // check email
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }

    let userData = await userService.handleUserLogin(email, password);

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {},
        userData
    });
}

let handleGetAllUsers = async (req, res) => {
    let id = req.query.id;

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters",
            users: []
        })
    }

    let users = await userService.getAllUsers(id);

    console.log(users);
    return res.status(200).json({
        errCode: 0,
        errMessage: "0k",
        users
    })
}

let handleCreateNewUser = async (req, res) => {
    console.log("handleCreateNewUser start")
    let message = await userService.createNewUser(req.body);
    console.log(message);
    console.log("handleCreateNewUser end")
    return res.status(200).json(message);
}

let handleEditUser = async (req, res) => {

    let data = req.body;
    let message = await userService.updateUserData(data);
    console.log(message);
    return res.status(200).json(message);
}

let handleDeleteUser = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errorCode: 1,
            errMessage: 'Missing require parameter!'
        })
    }
    let message = await userService.deleteUser(req.body.id);
    return res.status(200).json(message)
}

export default {
    handleLogin,
    handleGetAllUsers,
    handleCreateNewUser,
    handleEditUser,
    handleDeleteUser
}