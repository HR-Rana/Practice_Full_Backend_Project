const express = require("express");
const app = express();


app.use(express.json());






// rote home page route
app.get("/", (req, res)=>{
    res.send("Hello from Express Server");
})
 

// Routing for invalid routes
app.use((req, res) => {
    res.send("<h2>404 Not Found the page</h2>")
})



module.exports = app;