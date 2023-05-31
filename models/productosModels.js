const mongoose = require("../config/mongodb")

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        min:[0, "el precio debe ser mayor a 0"],
        get: function(value){
            return value*1.21
        },
        //Modifica al momento de guardar en base de datos
        //set: function(value){
          //  return value*1.21
        //},
    },
    
    description:String,
    quantity:Number,
    status: String,
    category: {
        type: mongoose.Schema.ObjectId,
        ref:"categories"
    },
    destacado: Boolean
})

//crea la propiedad
productSchema.virtual("price_currency").get(function(){
    return `$ ${this.price}`
})

productSchema.set("toJSON",{getters:true,virtuals:true})
module.exports = mongoose.model("productos",productSchema)
