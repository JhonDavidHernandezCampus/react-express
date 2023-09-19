import { Router } from "express";

const routerUser = Router();

routerUser.get('/user',(req,res)=>{
    res.status(201).json({message:"has podido"});
})

export default routerUser;