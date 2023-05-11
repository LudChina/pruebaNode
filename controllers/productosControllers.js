module.exports = {
    getAll: function(req, res, next) {
        console.log(req.query)
        const productos = [
          {
            id: 1,
            name: "moto g"
          },
          {
            id: 2,
            name: "moto x"
          }
      ]
        res.status(200).json(productos);
      },

      getById:function(req, res, next) {
        console.log(req.params.id)
        const producto = 
        {
          id: 1,
          name: "moto g"
        }
        res.status(200).json(producto);
      },

      create: function(req, res, next) {
        console.log(req.body)
        //insertar base de datos
        res.status(201).json(req.body)
      },

      update: function(req, res, next) {
        console.log(req.params.id)
        console.log(req.body)
        //insertar base de datos
        res.status(201).json(req.body)
      },

      delete: function(req, res, next) {
        console.log(req.params.id)
        res.status(200).json({})
      }
}