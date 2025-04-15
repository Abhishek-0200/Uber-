import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String, 
            required: true,
            minlength: [3, "First name must be at least 3 characters long"]
        },
        lastname: {
            type: String, 
            minlength: [3, "Last name must be at least 3 characters long"]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, "Email must be at least 5 characters long"],
    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength: [6, "Password must be at least 6 characters long"],
    },
    socketId: {
        type: String,
        default: null
    },
    status : {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'  

    },
    vehicle : {
        color : {
            type: String,
            required: true  
        },
        type : {
            type: String,
            required: true      
        },
        plate : {
            type: String,
            required: true  
        },
    },
    capacity : {
        type: Number,
        required: true,
        default: 1
    },
    location : {
        lat : {
            type: Number,
        },
        lng : {
            type: Number,
        }
    }
});

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
};

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
};

const captainModel = mongoose.model('captain', captainSchema);

export default captainModel;

