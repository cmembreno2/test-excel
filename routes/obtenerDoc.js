const express = require('express');
var xl = require('excel4node');
require('dotenv').config();
var path= require('path');

const router = express.Router();

router.get('/doc/:id', async (req,res)=> {

    const id = req.params.id
    console.log("Executing Obtener Doc...")
    
    try{

        const pathExcel =path.join(`${id}.xlsx`)

        res.download(pathExcel)

        console.log(`Document downloaded wit name: ${id}`)

    }catch(err){
        console.log(`Error creating file: ${err}`)
        return res.status(err.code).send(err.message);
    }
});

module.exports = router;