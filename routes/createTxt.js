const express = require('express');
var fs = require('fs');
require('dotenv').config();
var path= require('path');

const router = express.Router();

router.post('/createTxt', async (req,res)=> {
    
    console.log("Executing Create Txt...")
    
    const {nombre,fecha,cliente,entrega,personal,mesa,cantProductos,sub_total,pv,empaque,total,productos}=req.body;

    var lineProd = []
    productos.forEach((prod)=>{
    
        lineProd.push(`${prod.producto.nombre} x ${prod.cant.toString()} = CS ${prod.total.toString()}`)
    
        })

    try{
        
        var content = 
`            CHELIVETT HOUSE
             SUCURSAL MASAYA
De la Cruz Roja 2 C al O Masaya, Nicaragua
              Tel:87255667

Fecha: ${fecha}
Cliente: ${cliente}
Entrega: ${entrega}
Personal: ${personal}
Mesa: ${mesa}
Productos: ${cantProductos}

-------------------------------------------
                  Detalles     
-------------------------------------------
${lineProd[0]==undefined?"":lineProd[0]}  
${lineProd[1]==undefined?"":lineProd[1]} 
${lineProd[2]==undefined?"":lineProd[2]}
${lineProd[3]==undefined?"":lineProd[3]}
${lineProd[4]==undefined?"":lineProd[4]}
${lineProd[5]==undefined?"":lineProd[5]}
${lineProd[6]==undefined?"":lineProd[6]}
${lineProd[7]==undefined?"":lineProd[7]}
${lineProd[8]==undefined?"":lineProd[8]}
${lineProd[9]==undefined?"":lineProd[9]}
${lineProd[10]==undefined?"":lineProd[10]}
${lineProd[11]==undefined?"":lineProd[11]}
${lineProd[12]==undefined?"":lineProd[12]}
${lineProd[13]==undefined?"":lineProd[13]}
${lineProd[14]==undefined?"":lineProd[14]}
${lineProd[15]==undefined?"":lineProd[15]}
-------------------------------------------   
                        Sub-Total: ${sub_total}
                        P.V. 10%: ${pv}
                        Empaque: ${empaque}
                        Total: ${total}

                        
          GRACIAS POR VISITARNOS
      Te esperamos pronto de regreso!
     www.facebook.com/ChelivettsHouse
`

        // writeFile function with filename, content and callback function
        fs.writeFile(`${nombre}.txt`, content, function (err) {
        if (err) throw err;
        console.log('Document Txt created...');
        });

        return res.status(200).send({success:true}); 

    }catch(err){
        console.log(`Error creating file: ${err}`)
        return res.status(err.code).send(err.message);
    }
});

module.exports = router;