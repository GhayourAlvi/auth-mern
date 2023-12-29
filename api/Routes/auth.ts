import { signUp} from "../Controllers/auth";

const express = require('express');

const router=express.Router();

router.post('/signUp', signUp);


export default router;