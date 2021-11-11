import express from "express";
import config from "./config.js";
import router from "./router.js";


// TODO: Import the routes

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World");
});



app.use("/api", router); // use the router

// start the server
app.listen(config.port, () => {
  console.info(`Server 🏃🏾‍♂️ at: http://localhost:${config.port}`);
});