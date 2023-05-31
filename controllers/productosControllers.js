const productosModels = require("../models/productosModels")
const productsModel = require("../models/productosModels")

module.exports = {
    getAll: async function(req, res, next) {
        try{
          console.log(req.query)

          const documents = await productosModels.find({destacado:true}).select("name price category").sort({price:-1}).populate("category")

          res.status(200).json(documents);
        }catch(e)
        {
          console.log(e)
          res.status(400).json(e)
        }
      },

      getById: async function(req, res, next) {
        try{
          console.log(req.params.id)

          const document = await productosModels.findById(req.params.id)

          res.status(200).json(document);
        }catch(e)
        {
          console.log(e)
          res.status(400).json(e)
        }
      
      },

      create: async function(req, res, next) {
        try{
          console.log(req.body)
        //insertar base de datos
        const producto = new productsModel({
          name:req.body.name,
          price:req.body.price,
          description:req.body.description,
          quantity:req.body.quantity,
          category:req.body.category,
          destacado:req.body.destacado
        })
        const document = await producto.save()
        res.status(201).json(document)

        }catch(e){
          console.log(e)
          next(e)
        }
        
      },

      update: async function(req, res, next) {
        console.log(req.params.id)
        console.log(req.body)
       
        try{
         
           const result = await productosModels.updateOne({_id:req.params.id}, req.body)
          res.status(201).json(result)

        }catch(e){
          console.log(e)
          res.status(400).json(e)
        }
      },

      delete: async function(req, res, next) {
        try{
         
          const result = await productosModels.deleteOne({_id:req.params.id})
         res.status(201).json(result)

       }catch(e){
         console.log(e)
         res.status(400).json(e)
       }
        
      }

}