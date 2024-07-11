const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");
console.log(publicPath);


app.set('view engine','ejs')
app.get("", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/About", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app.get("/profile", (req, res) => {
  const user = {
    name : 'Mughees',
    email : 'mughees@test,com',
    skills : ['javaScript','vue','node']
  }
  res.render('profile',{user})
});
app.get("*", (req, res) => {
    res.sendFile(`${publicPath}/error.html`);
  });
app.listen(8001);
