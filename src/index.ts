import express from "express";
import { PrismaClient } from "../generated/prisma/client.js";

const app = express();
const prisma = new PrismaClient();
const port = 3000; 
app.use(express.json());

app.get("/", async (req, res) => {
    const user = await prisma.user.findMany();
    res.json({
        "Data": user
    })
});

app.post("/",async(req,res)=>{
    await prisma.user.create({
        data:{
            username : Math.random().toString(),
            password : Math.random().toString()
        }
    })
    res.json({
        "message":"data saved successfully!"
    })
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});