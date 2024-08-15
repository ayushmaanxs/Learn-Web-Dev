const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// function getFormattedDate() {
//     let date = new Date();
//     let day = String(date.getDate()).padStart(2, '0');
//     let month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero based
//     let year = date.getFullYear();

//     return `${day}-${month}-${year}`;
// }

// const fn = getFormattedDate();

//Reading all the files on main index page
app.get("/", function (req, res) {
  fs.readdir(`./hisaab`, (err, files) => {
    if (err) return res.status(500).send(err);
    res.render("index", { files: files }); // files bhej diya files name se
  });
});
// yaha se files name kaa ek array pass hua hoga jo hmare index.ejs pe render hoga

// Creating file and inserting data
app.get("/create", function (req, res) {
  res.render("create");
});

app.post("/createhisaab", (req, res) => {
  // res.send(req.body);
  var currentDate = new Date();
  var date = `${currentDate.getDate()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getFullYear()}`;
  fs.writeFile(`./hisaab/${date}.txt`, req.body.content, function (err) {
    if (err) return res.status(500).send(err);
    res.redirect("/");
  });
});

//Editing a file

app.get("/edit/:filename", function (req, res) {
  fs.readFile(
    `./hisaab/${req.params.filename}`,
    "utf-8",
    function (err, filedata) {
      if (err) return res.status(500).send(err);
      res.render("edit", { filedata, filename: req.params.filename });
    }
  );
});

app.post("/update/:filename", function (req, res) {
  fs.writeFile(
    `./hisaab/${req.params.filename}`,
    req.body.content,
    function (err) {
      if (err) return res.status(500).send(err);
      res.redirect("/");
    }
  );
});

// Showing a file
app.get("/hisaab/:filename", function (req, res) {
  fs.readFile(
    `./hisaab/${req.params.filename}`,
    "utf-8",
    function (err, filedata) {
      if (err) return res.status(500).send(err);
      res.render("hisaab", { filedata, filename: req.params.filename });
    }
  );
});

//Deleting a file
app.get("/delete/:filename", function (req, res) {
  fs.unlink(`./hisaab/${req.params.filename}`, function (err) {
    if (err) return res.status(500).send(err);
    res.redirect("/");
  });
});

app.listen(3000);
