const express    = require('express');
const router     = express.Router();


const db         = require('./../db/models');

// ADD job via post
router.post(`/add`, async (req, res) => {
   var dados = req.body
   console.log(dados)

   await db.Jobs.create(dados)
   .then((dadosJob) => {
      return res.json({
         message: "Trabalho adicionado com sucesso!",
         dadosJob
      })
   })
   .catch(() => {
      return res.status(400).json({
         message: "Trabalho Não adicionado!"
      })
   })

   
   
   
})


module.exports = router;