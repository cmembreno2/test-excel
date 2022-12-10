const express = require('express');
var xl = require('excel4node');
require('dotenv').config();
var path= require('path');

const router = express.Router();

router.get('/doc', async (req,res)=> {

    console.log("Executing Obtener Doc...")
    
    try{

        var wb = new xl.Workbook();

        var options = {
            sheetFormat: {
                defaultRowHeight: 90
            }
        }

        var ws = wb.addWorksheet('Sheet 1',options);
        ws.setPrintArea(1, 2, 36, 4);

        var style = wb.createStyle({
            font: {
                color: '#000000',
                size: 72,
                bold: true
            },
            alignment: {
                horizontal: 'center',
            },
        });

        ws.column(2).setWidth(40)
        ws.column(3).setWidth(80)
        ws.column(4).setWidth(40)

        ws.cell(1, 2, 1,4,true)
        .string('CHELIVETT HOUSE')
        .style(style);

        pathExcel =path.join(__dirname,'documentos',`${nombre}.xlsx`)

        wb.write(pathExcel)

        //const nombre = req.params.id;

        //pathExcel =path.join(__dirname,'documentos',`${nombre}.xlsx`)

        res.download(pathExcel)

        console.log(`Document downloaded wit name: ${nombre} ...`)
    }catch(err){
        console.log(`Error creating file: ${err}`)
        return res.status(err.code).send(err.message);
    }
});

module.exports = router;