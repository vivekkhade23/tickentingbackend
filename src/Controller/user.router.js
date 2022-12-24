const express=require("express");
const UserRouter=express.Router();
const User=require("../modal/user.model");


UserRouter.post("/signup",async(req,res)=>{
    try{ 
    const {name,email,password}=req.body
    let user = new User({name,email, password });
    user = await user.save();
    res.send(user)
    }
    catch(e){
        
        res.status(401).send({ message: "Signup Failed",error:e })
    }
})

UserRouter.get("/getuser/:id", async (req, res) => {
 try{ 
    let p = await User.findById(req.params.id);
     res.send(p);
    }catch(e)
    {
        res.status(401).send({ error:e })
    }
});

UserRouter.post("/login",async (req,res)=>{
   try{
     const { email, password } = req.body;
    const u = await User.findOne({ email, password });
    res.send(u)
    }catch(e){
        res.status(401).send({ message: "Login Failed",error:e })
    }
})

UserRouter.get("/logout",async (req,res)=>{
    try{
        res.send({ message: "Logout Successful" })
    }
         catch(e){
            res.status(401).send({ message: "Logout Failed",error:e })
        }
     
 })

module.exports = UserRouter;