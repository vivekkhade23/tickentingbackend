const express=require("express");
const TicketRouter=express.Router();
const Ticket=require("../modal/ticket.model.");

TicketRouter.post("/",async(req,res)=>{
    let {category,title,message}=req.body
  try {
        let t=new Date()
        let time=t.getTime()
        let newTicket={...req.body,time}
        
      let tick=await Ticket.create(newTicket)

      res.send({message:"ticket is created",data:tick})
      
  } catch (err) {
      res.status(401).send({message:err.message})
  }
    
})

TicketRouter.get("/getticket",async(req,res)=>{
             try {
                let data2=await Ticket.find({category:filter})
                res.send({data:data2})
             } catch (error) {
                res.status(401).send(error.message)
             }
})









module.exports=TicketRouter;