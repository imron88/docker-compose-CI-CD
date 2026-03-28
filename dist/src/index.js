import express from "express";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
const app = express();
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
}
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
const port = 3000;
app.use(express.json({}));
app.get("/", async (req, res) => {
    const user = await prisma.user.findMany();
    res.json({
        "Data": user
    });
});
app.post("/", async (req, res) => {
    await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    });
    res.json({
        "message": "data saved successfully!"
    });
});
app.post("/api", (req, res) => {
    res.json({
        msg: "ok",
        success: true
    });
});
app.get("/api/get", (req, res) => {
    res.json({
        msg: "ok",
        success: true
    });
});
app.get("/api/getall", (req, res) => {
    res.json({
        msg: "ok",
        success: true
    });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map