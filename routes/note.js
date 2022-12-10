const express = require('express');

const router = express.Router();

router.get('/note', async (req,res)=> {

    console.log("Executing Create Document...")
    
      
    try{

        res.download('Hello.txt')


    }catch(err){
        console.log(`Error creating file: ${err}`)
        return res.status(err.code).send(err.message);
    }
});

module.exports = router;