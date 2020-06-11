const express = require('express');
const cors = require('cors');
const yt = require("ytdl-core");
const app = express();
app.use(cors());

app.get('/download', (req,res) =>{
    var URL = req.query.URL;

    res.header('Content-Disposition','attachment; filename="video.mp4"');

    yt(URL, {
    format: 'mp4'
    }).pipe(res);
})
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server Works!!! At Port 4000');
})