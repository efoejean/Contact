import Router from "express";
import client from "./db/client.js"
import config from "./config.js"

const router = new Router();

// TODO: Add routes here (maybe 🤔 start with a GET test route)

router.get("/", (_,res) =>{
    res.send("hello from the Api")
})

router.get("/contacts", async (_,res) =>{
const contacts = await client.db(config.db.name).collection(config.db.collection).find().toArray();
res.json(contacts);
})



router.get("/contact", async (req, res) =>{
const contacts = await client.db(config.db.name).collection(config.db.collection).find({ email:{$regex:"hot"}}).toArray();
res.json(contacts);
})


export default router;
