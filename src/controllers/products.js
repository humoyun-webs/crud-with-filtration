const Joi = require("joi")
const Products = require("../models/products.js")
const addproduct = async(req,res) =>{
    const {title, desc, name} = req.body;

    const scheme = Joi.object({
     name:Joi.string().required(),
     title:Joi.string().min(5).max(32).required(),
     desc:Joi.string().required()
    })
    const {error} = scheme.validate({title, desc, name})
     
    if(error) return res.status(403).json({message:error.message})

    const product = await Products.findbytitle(title)
    if(product){
        return res.status(400).json({message:"title already exists"})
    }
    const newProduct = await Products.productadd(name, title, desc)
    res.status(201).json(newProduct)
}
const getproduct = async(req,res) =>{
    try{

        // const {} = req.body
        const products = await Products.allproducts()
        

       
        
        res.status(200).json(products)
    
        
    }catch(error){
     console.log(error.message);
    }
}
const filterproduct = async(req,res) =>{
    try{

        // const {} = req.body
        const products = await Products.filterproduct()
        

       
        
        res.status(200).json(products)
    
        
    }catch(error){
     console.log(error.message);
    }
}
const deleteproduct = async(req,res) =>{
    const {id} = req.params;
    if(!id){
     return res.status(404).json({message:"products is not found"})
    }
    const product = await Products.deleteProduct(id)
    res.status(200).json({message:"successfull deleted", product})
  
}

const editproduct = async (req,res) =>{
    const {title, desc, name, status} = req.body;
    const {id} = req.params;
    const scheme = Joi.object({
        title:Joi.string().required(),
        desc:Joi.string().min(5).max(32).required(),
        name:Joi.string().required(),
        status:Joi.string().valid("","complited", "inprogres").required()
       })
       const {error} = scheme.validate({title, desc, name, status})
        
       if(error) return res.status(403).json({message:error.message})
   
    
    const product = await Products.updateproduct(title, desc, name, status, id)

    res.status(201).json({message:"edit success"})
}

module.exports = {
    addproduct,
    getproduct,
    deleteproduct,
    editproduct,
    filterproduct
}