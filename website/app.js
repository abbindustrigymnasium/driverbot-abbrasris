require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mqtt = require("mqtt");

const client = mqtt.connect(process.env.MQTT_HOST, {
  username: process.env.MQTT_USERNAME,
  password: process.env.MQTT_PASSWORD
});

client.on("connect", () => {
  console.log("Connected to MQTT");
});

client.on("error", error => {
  console.log("Unable to connect to MQTT: " + error);
});

const app = express();
const port = 3000;

const jsonParser = bodyParser.json();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(__dirname + "/public/index.html");
});

app.post("/send-data", jsonParser, (req, res) => {
  console.log(req.body);
  res.send("OK");
  // res.status(200).send("");
});

const server = app.listen(port, () => {
  console.log(`App listening at http://localhost:${server.address().port}`);
});
