const express = require("express");
const path = require("path");
const Contenedor = require("./claseContenedor.js");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'));
app.use(express.json()); // body-parser
app.use(express.urlencoded());

//ROUTES
const produtosRoute = require("./routes/productos");
app.use("/api/products", produtosRoute);

//PUG
app.set("views", __dirname+"/views");
app.set("view engine", "pug");

//COMIENZO SERVIDOR
const server = app.listen(PORT, () => {
    console.log(`Server is run on port ${server.address().port}`)
  })
  server.on('error', error => console.log(`Error en servidor ${error}`))


app.get("/", (req, res)=>{
    res.send("Hola estas en index.js");
})





