import { MongoClient } from "mongodb";
import config from "../config.js";

const client = new MongoClient(config.db.clientURL);

export default {
  connect() {
    // return a promise
    return client.connect();
  },
  close() {
    client.close();
  },
};