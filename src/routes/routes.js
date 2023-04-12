const {Router} = require("express") 
const {addproduct,editproduct,getproduct,deleteproduct, filterproduct} = require("../controllers/products.js")


const routes = Router()

routes.post("/add", addproduct)
.put("/edit/:id", editproduct)
.get("/all" , getproduct, filterproduct)
.delete("/delete/:id", deleteproduct)


module.exports = {routes}