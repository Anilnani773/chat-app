import jwt from "jsonwebtoken"

export const generateToken = (userId, res) =>{
    const token = jwt.sign({userId}, process.env.JWT_TOKEN, {
        expiresIn:"30d"
    })

    res.cookie("jwt",token,{
        maxAge: 30 * 24 * 60 * 60 * 1000, //millisecs
        httpOnly: true, // prevent XSS attacks cross-site scripting attacks
        sameSite: "strict", // CRSF atacks cross site request forgery attacks
        secure: process.env.NODE_ENV !== "development"
    });

    return token;
}