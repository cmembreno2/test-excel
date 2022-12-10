const express = require('express');
var xl = require('excel4node');
require('dotenv').config();
var path= require('path');

const router = express.Router();

router.get('/doc/:id', async (req,res)=> {

    console.log("Executing Obtener Doc...")
    
    try{

        const nombre = req.params.id;

        pathExcel =path.join(__dirname,'documentos',`${nombre}.xlsx`)

        res.download(pathExcel)

        console.log(`Document downloaded wit name: ${nombre} ...`)
    }catch(err){
        console.log(`Error creating file: ${err}`)
        return res.status(err.code).send(err.message);
    }
});

module.exports = router;