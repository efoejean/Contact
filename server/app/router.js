import Router from "express";

const router = new Router();

// TODO: Add routes here (maybe 🤔 start with a GET test route)

router.get("/", (_,res) =>{
    res.send("hello from the Api")
})

export default router;
