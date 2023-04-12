require("dotenv").config()
const express = require("express")
const app = express()
const {routes} = require("./routes/routes.js")

const Port = process.env.PORT || 8000;
app.use(express.json())
app.use("/api", routes)

app.listen(Port,()=>{
    console.log(`HTTP PORT ${Port} connection`);
})
