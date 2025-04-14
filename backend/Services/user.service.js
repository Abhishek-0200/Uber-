import userModel from "../models/user.model.js";


export const createUser = async ({firstname , lastname , email, password}) => {
    if(!firstname || !lastname || !email || !password) {
        return { status: 403, message: "Please fill all the fields" };
    }
    const user = userModel.create({
        fullname: {
            firstname, 
            lastname
        },
        email, 
        password
    });

    return user;
}