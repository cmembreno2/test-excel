const express = require('express');
const admin = require('firebase-admin');

require('dotenv').config();

const router = express.Router();

router.get('/providers', async (req,res)=> {

    console.log("Executing Get Providers...")
    
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
        const snapshot = await db.collection(process.env.PROVIDER_COLLECTION).get();
        snapshot.forEach(doc=>{
        const idDoc = doc.id
        const datos = doc.data()
        datos['_id']=idDoc
        results.push(datos);
        });
        console.log("Get Providers executed successfully...")
        return res.status(200).json(results);
    }catch(err){
        console.log(`Error executing Get Providers: ${err}`)
        return res.status(err.code).send(err.message);
    }
});

module.exports = router;