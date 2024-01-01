import { errorHandler } from "../Utils/handleError";
import User from "../Models/user";
import bcryptjs from "bcryptjs"
import jwt from 'jsonwebtoken';


export const signUp = async (req: any, res: any, next: any) => {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword=bcryptjs.hashSync(password,10)
    const user = new User({ firstName, lastName, email, password: hashedPassword});

    try {
        await user.save();
        res.status(201).json({
            message: "Sign Up Successful",
        });
    } catch (error: any) {
        next(error)
    }
}
export const login = async (req: any, res: any, next: any) => {
    const { email, password } = req.body;

    try {
        const validUser= await User.findOne({email});
        if(!validUser) return next(errorHandler(404, "User not found"));
        const validPassword=bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Invalid credentials'));
        const token = jwt.sign({ id: validUser._id }, "dfdssdvsdfdfdsss");
        const { password: hashedPassword, ...rest } = validUser.toJSON();
        const expiryDate = new Date(Date.now() + 3600000); //valid for 1 hour
        res
        .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
        .status(200)
        .json(rest);

    } catch (error: any) {
        next(error)
    }
}
