
const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');

  next();
});
app.get('/',(req,res) =>
{
  const fileSize = 1
  fs.stat('/path/to/file', (err, stats) => {
    if (err) {
      // Handle the error
    } else {
      console.log(stats.size)
      fileSize = stats.size
      if (stats.size === 0) {
        console.log('The file is empty');
      } else {
        console.log('The file is not empty');
      }
    }
  });
  if(fileSize === 0)
  {
    res.send("file is empty")
  }
  else
  {
    const data = fs.readFileSync("./history.json")
    const history = JSON.parse(data)
    res.json(history)
  }
})
app.post('/',(req,res) => {
const data = req.body
console.log(data)
let hData = fs.readFileSync("./history.json")
let history = JSON.parse(hData)
console.log(history)
history.push(data);
fs.writeFileSync('history.json', JSON.stringify(history), (err) => {
  if (err) throw err;
  console.log('Data appended to file');
});
  res.send("its work")
})
app.listen(4000)
module.exports = app;
