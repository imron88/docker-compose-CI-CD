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

app.post("/",(req,res)=>{
    res.json({
        "message":"Hello World!"
    })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});