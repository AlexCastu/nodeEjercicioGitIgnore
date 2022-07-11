const express = require("express");
const app = express();
const router = require("./routes");
const config = require("./config.js");
console.log(config);

app.use(express.static("public"));
app.use("/", (req, resp, next) => {
  console.log("INICIO");
  next();
});
app.use("/home", router);

app.use((err, req, resp, next) => {
  console.log("Error:" + err);
  next();
});

app.use("/", (req, resp) => {
  console.log("FIN");
  resp.status(200).end();
});

app.listen(config.PORT, config.HOST, () => {
  console.log(
    "Servidor conectado en host:" + config.HOST + " y puerto: " + config.PORT
  );
});
