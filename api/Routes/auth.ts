import { signUp, login} from "../Controllers/auth";
const express = require('express');
const router=express.Router();
router.post('/signUp', signUp);
router.post('/login', login);

export default router;