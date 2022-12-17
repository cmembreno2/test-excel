const express = require('express');
const admin = require('firebase-admin');
require('dotenv').config();

const router = express.Router();

router.get('/products/:id', async (req,res)=>{

    console.log("Executing Get Product by Id route...")

    const id = req.params.id;

    if ( !admin.apps.length ) admin.initializeApp({
        credential: admin.credential.cert({
            type: process.env.TYPE,
            project_id: process.env.PROJECT_ID,
            private_key_id: process.env.PRIVATE_KEY_ID,
            private_key: process.env.PRIVATE_KEY
            ? process.env.PRIVATE_KEY.replace(/\\n/gm, "\n")
            : undefined,
            client_email: process.env.CLIENT_EMAIL,
            client_id: process.env.CLIENT_ID,
            auth_uri: process.env.AUTH_URI,
            token_uri: process.env.TOKEN_URI,
            auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
            client_x509_cert_url: process.env.CLIENT_X509_CERT_URL
          })
    });

    const db = admin.firestore();
    const results = [];

    try{
        const snapshot = await db.collection(process.env.PRODUCT_COLLECTION).doc(id).get();
         results.push(snapshot.data());
        console.log("Get Product by Id executed successfully...")
        return res.status(200).json({product: results});
    }catch(err){
        console.log(`Error executing Get Product by Id: ${err}`);
        return res.status(err.code).send(err.message);
    }
});

module.exports = router;