import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __frontend = path.dirname(__filename).replace('\\backend', '\\frontend')
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.sendFile(path.join(__frontend, "/index.html"))
}
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
