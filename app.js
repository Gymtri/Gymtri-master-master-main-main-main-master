const express = require("express");
const path = require("path");
const app = express();
app.use(express.static('./app/public'))

const env = require("dotenv").config();

var session = require("express-session");
app.use(
  session({
    secret: "HELLo nODE",
    resave: false,
    saveUninitialized: false,
}));

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const usuarioRouter = require("./app/routes/Routers");
app.use("/", usuarioRouter);

// const adminRouter = require('./app/routes/adminRouter');
// app.use('/admin', adminRouter);


app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
