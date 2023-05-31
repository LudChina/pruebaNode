const categoriesModels = require("../models/categoriesModels")

module.exports = {
    getAll: async function (req, res, next) {
    try{
        const categories = await categoriesModels.find()
        res.json(categories)
    }catch(e) {
        next(e)
    } 
},

    create: async function (req, res, next) {
        try{
            console.log (req.body)
            console.log(req.body.name)

            const document = new categoriesModels({
                name:req.body.name
            })

            const response  = await document.save()

            res.json(response)
        } catch (e){
            next(e)
        }
    },
}
        
      
      

     