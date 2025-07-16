import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prismaClient = new PrismaClient();

app.get("/", async (req, res) => {
    const prisma = new PrismaClient();
    const data=await prisma.user.findMany();
    res.json({
        data
    })
})

app.post("/", async (req, res) => {
    await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    res.json({
        "message": "post endpoint"
    })
})

app.listen(3000);