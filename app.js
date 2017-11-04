const express = require('express');
const ytdl    = require('ytdl-core');
const app     = express();

app.get('/getvideo', (req, res) => {
  const vidid = req.query.id;
  ytdl.getInfo(vidid, (err, info) => {
    if (err){
       return res.json({
          success: false,
          message: "Unable To Get Video Info.",
          error: err
        })
    }
    if (info) {
      res.json({
        success: false,
        response: info
      })
    }
  })
})

app.listen(80)
console.log("Server Is Running...");
