const express = require('express')
const path = require('path')
const multer  = require('multer')
const {merge}  = require('./mergePDFs')
const upload = multer({ dest: 'uploads/' })
const app = express()
const port = 3000

app.use("/static", express.static("Public"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"Templates/index.html"))
})

app.post('/merge', upload.array('pdf', 2), async (req, res, next)=> {
    // console.log(req.files)
    await merge(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path))
    // res.send({data: req.files})
    res.redirect("http://localhost:3000/static/merged.pdf")
  })

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})