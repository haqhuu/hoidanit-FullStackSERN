import db from '../models/index';
import CRUDService from '../services/CRUDServices';

let getHomepage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log("----------------------------");
        console.log(data);
        console.log("----------------------------");
        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
}

let getCRUD = (req, res) => {
    return res.render("crud.ejs");
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send("crud sv");
}

export default { getHomepage, getCRUD, postCRUD };