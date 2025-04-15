import captainModel from "../models/captainModel.js";

const createCaptain = async ({ firstname, lastname, email, password, color , plate , type, capacity }) => {
    if (!firstname || !lastname || !email || !password || !color || !plate || !type) {
        return { status: 403, message: "Please fill all the fields" };
    }
    console.log(firstname, lastname, email, password, color , plate , capacity, type)
    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
        ,
        vehicle: {
            color,
            plate,
            type,
            capacity
        }
    });

    return captain;
}

export default createCaptain