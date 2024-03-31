import authService from "../services/authService.js";

async function signup(req, res) {
    try {
        const resService = await authService.signup(req.body);
        return res.status(201).send(resService);
    } catch (error) {
        return res.status(409).send(error.message );
    }
}

async function signin(req, res) {
    try {
        const token = await authService.signin(req.body);
        return res.send(token);
    } catch (error) {
        return res.status(401).send(error.message );
    }
}

async function userLogged(req, res) {
    const {_id: id} = res.locals.user;

    try {
        const user = await authService.userLogged(id);
        return res.send(user);
    } catch (error) {
        return res.status(404).send(error.message );
    }
}

export default { signup, signin, userLogged };