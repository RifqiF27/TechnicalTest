const cors = require("cors");
const express = require("express");
const router = require("./routers");
const errHandler = require("./middlewares/errHandler");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use(router);

app.use(errHandler)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
