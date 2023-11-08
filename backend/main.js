import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __frontend = path.dirname(__filename).replace('\\backend', '\\frontend')
const app = express()
const port = 3000;
const DEFAULT_USER = "admin";
const DEFAULT_PASS = "dieeule";

app.get("/", (req, res) => {
  res.sendFile(path.join(__frontend, "/index.html"))
}
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.get("/login", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  let arg1 = req.query.username;
  let arg2 = req.query.password;
  let confirmation = verifyCredentials(arg1 ,arg2);
  res.send(confirmation);
})


function verifyCredentials(usr = null, pass = null){
  if(usr == DEFAULT_USER && pass == DEFAULT_PASS){
    return true;
  } else return false;
}