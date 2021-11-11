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


// route to get email that has include hot. 
/* router.get("/contact", async (req, res) =>{
* const contacts = await client.db(config.db.name).collection(config.db.collection).find({ email:{$regex:"hot"}}).toArray();
* res.json(contacts);
* }) */

// route to use  the request query to search email,
/* router.get("/contact", async (req, res) =>{
* const contacts = await client.db(config.db.name).collection(config.db.collection).find({ email:{$regex: req.query.email}}).toArray();
* res.json(contacts);
* }) */


// route to filter name by "pro" and $option : "i" make the search case nonsensitive 
    router.get("/contact", async (req, res) =>{
     const contacts = await client.db(config.db.name).collection(config.db.collection).find({ name:{$regex: "pro", $options:"i"}}).toArray();
    res.json(contacts);
    }) 

export default router;
