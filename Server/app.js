const express = require("express");
const app = express();
const userAuth = require('./routes/user.router.js')

app.use(express.json());



app.use("/", userAuth)


// rote home page route
app.get("/", (req, res)=>{
    res.send("Hello from Express Server");
})
 

// Routing for invalid routes
app.use((req, res) => {
    res.send("<h2>404 Not Found the page</h2>")
})



module.exports = app;