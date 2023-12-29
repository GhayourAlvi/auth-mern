import { test } from "../Controllers/user";

const express = require('express');

const router=express.Router();

router.get('/', test);


export default router;