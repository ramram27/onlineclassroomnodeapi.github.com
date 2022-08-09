
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT;
const host = process.env.HOST;
const mongodb_user_id = process.env.MONGODB_USER_ID;
const mongodb_password = process.env.mongodb_password;
const clusterName = process.env.CLUSTER;
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
app.use(cors());
app.use(express.json());


mongoose
  .connect(`mongodb+srv://${mongodb_user_id}:${mongodb_password}@${clusterName}/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
    })
    .catch((err) => {
        console.error("Connection error", err);
        process.exit();
    });

app.use("/api", routes);


app.listen(port,host, () => {
    console.log(` app listening at http://${host}:${port}`);
});
