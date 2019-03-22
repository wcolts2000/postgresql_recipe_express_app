const express = require("express"),
  path = require("path"),
  cons = require("consolidate"),
  dust = require("dustjs-helpers"),
  pg = require("pg"),
  app = express();

// DB connection string
const connection = "postgresql://sean_dev:oseanasee@localhost/recipe_book_db";

// Assign Dust Engine to .dust files
app.engine("dust", cons.dust);

// Set default Ext .dust
app.set("view engine", "dust");
app.set("views", __dirname + "/views");

// Set Public folder
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  //   console.log("TEST");
  res.render("index");
});

// Server
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
