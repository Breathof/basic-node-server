const path = require('path');

const express = require('express');
const app = express();

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.listen(port, err => {
    if (err) throw new Error(err)
    console.log(`Server started at port ${port}`)
});
