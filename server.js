const express = require('express');
const app = express();
const port=process.env.PORT || 6700;

//To tell app where the static files are located
app.use(express.static("frontend"));

app.listen(port,function(){ 
    console.log("App running on http://localhost:"+port);
});