const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'));
app.use(express.json()); // body-parser
app.use(express.urlencoded());

//HANDLEBARS
const handlebars = require("express-handlebars");
app.set("views", __dirname+"/views");
app.set("view engine", "hbs");
app.engine(
    "hbs",
    handlebars({
      extname: "hbs",
      layoutsDir: __dirname+"/views/layouts",
      defaultLayout: "main",
      partialsDir:"./views/partials"
    })
  );

//ROUTES
const produtosRoute = require("./routes/productos");
app.use("/api/products", produtosRoute);


//COMIENZO SERVIDOR
const server = app.listen(PORT, () => {
    console.log(`Server is run on port ${server.address().port}`)
  })
  server.on('error', error => console.log(`Error en servidor ${error}`))


app.get("/", (req, res)=>{
    res.send("Hola estas en index.js");
})



