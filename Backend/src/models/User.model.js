import mongoose, {Schema} from "mongoose"; // imported schema to avoid write mongoose.Schema everytime
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const userSchema = new Schema({
    fullname: {
        type: String,
        required: [true, "Fullname is required"],
        index: true,  // maintain an index structure
    },
    email: {
        type: String,
        requried: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: function () {return this.provider == 'local'}
    },
    avatar: {
        type: String,
        default: '',
    },
    // provider: {
    //     type: String,
    //     required: true,
    //     enum: ['local', 'google', 'facebook'],
    // },
    // providerId: {
    //     type: String,
    //     required: function() {return this.provider !== 'local'},
    // },
    isVerified: {
        type: Boolean,
        default: false,
    },
    refreshToken: {
        type: String,
    }

}, {timestamps: true})

// update the password if it is modified or else left the password field untouch during  saving the user or profile update
// if the password is not modified then simple call pass control to the next hook
// else it is modified then hash it and pass  the control to next
userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})


// create a method to check is the password is correct or not
// compare both entered pass and stored pass are correct or not
userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
}

// create two method to generate access token and refresh token


// generate access token using json web token
// create Access_Token_Secret and Acess_Token_Expiry in .env
// all informations are stored here so that we can quickly access it without fetching qurery to the database
// this token is sort term
userSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {
            _id: this._id,
            fullname: this.fullname,   
            email: this.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    )
}

// generate refresh token
// used to obtain new access token
// this token is long term
userSchema.methods.generateRefreshToken = function() {
    jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema) 