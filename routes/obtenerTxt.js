const express = require('express');
require('dotenv').config();
var path= require('path');

const router = express.Router();

router.get('/txt/:id', async (req,res)=> {

    const id = req.params.id
    console.log("Executing Obtener Txt...")
    
    try{

        const pathTxt =path.join(`${id}.txt`)

        res.download(pathTxt)

        console.log(`Document downloaded wit name: ${id}`)

    }catch(err){
        console.log(`Error creating file: ${err}`)
        return res.status(err.code).send(err.message);
    }
});

module.exports = router;