import {promises as fs} from "fs";
import config from "../config.js";
import once from "./once.js";

// Asynchronous Anonymous IIFE - Immediately Invoked Function Expression.

// Destructuring base on the config.js
const {
  db: { name, collection },
} = config;

(async () => {
  const conn = await once.connect(); // open the connect once to send my data to the database
  const data = await fs.readFile("data.json", "utf-8"); // read the file from data.json

  await conn.db(name).collection(collection).deleteMany({}); // delete all the file in the data base
  await conn.db(name).collection(collection).insertMany(JSON.parse(data)); // insert many to insert all my data
  conn.close(); // we close the connection 
})();