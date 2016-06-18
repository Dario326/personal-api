const express = require("express");
const {json} = require("body-parser");
const app = express();
const middleware = require("./server/middleware");
const port = 8082;
const mainCtrl = require("./server/mainCtrl");
//const routes = require("./server/routes")



app.use( json() );


middleware(app);

app.listen(port, () => {
    console.log(`app is listening on ${port}`)
});