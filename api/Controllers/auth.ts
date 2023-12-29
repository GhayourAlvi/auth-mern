import User from "../Models/user";
import bcryptjs from "bcryptjs"
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