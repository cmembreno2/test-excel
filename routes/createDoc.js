const express = require('express');
var xl = require('excel4node');
require('dotenv').config();
var path= require('path');
const { HorizontalAlignment } = require('excel4node');

const router = express.Router();

router.get('/createDoc', async (req,res)=> {

    console.log("Executing Create Document...")
    
      
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

        var style1 = wb.createStyle({
            font: {
                color: '#000000',
                size: 50,
                bold: true
            },
            alignment: {
                horizontal: 'center',
            },
        });

        var style2 = wb.createStyle({
            font: {
                color: '#000000',
                size: 55,
                bold: true
            },
            alignment: {
                horizontal: 'center',
            },
        });

        var style3 = wb.createStyle({
            font: {
                color: '#000000',
                size: 48,
                bold: true
            },
            alignment: {
                horizontal: 'right',
            },
        });

        var style4 = wb.createStyle({
            border: { // §18.8.4 border (Border)
                top: {
                    style: 'medium',
                    color: '#000000'
                }
            },
            font: {
                color: '#000000',
                size: 48,
                bold: true
            },
            alignment: {
                horizontal: 'right',
            },
        });
        
        var style5 = wb.createStyle({
            border: { // §18.8.4 border (Border)
                top: {
                    style: 'medium',
                    color: '#000000'
                },
                bottom: {
                    style: 'medium',
                    color: '#000000'
                }
            },
            font: {
                color: '#000000',
                size: 48,
                bold: true
            },
            alignment: {
                horizontal: 'center',
            },
        });

        var style6 = wb.createStyle({
            border: { // §18.8.4 border (Border)
                left: {
                    style: 'medium',
                    color: '#000000'
                },
                top: {
                    style: 'medium',
                    color: '#000000'
                },
                bottom: {
                    style: 'medium',
                    color: '#000000'
                }
            },
            font: {
                color: '#000000',
                size: 48,
                bold: true
            },
            alignment: {
                horizontal: 'center',
            },
        });

        var style7 = wb.createStyle({
            border: { // §18.8.4 border (Border)
                right: {
                    style: 'medium',
                    color: '#000000'
                },
                top: {
                    style: 'medium',
                    color: '#000000'
                },
                bottom: {
                    style: 'medium',
                    color: '#000000'
                }
            },
            font: {
                color: '#000000',
                size: 48,
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
        ws.cell(2, 2, 2,4,true)
        .string('SUCURSAL MASAYA')
        .style(style1);
        ws.cell(3, 2, 3,4,true)
        .string('De la Cruz Roja 2 C al O Masaya, Nicaragua')
        .style(style1);
        ws.cell(4, 2, 4,4,true)
        .string('Tel: 87255667')
        .style(style2);
        
        ws.cell(6, 2)
        .string('Fecha:')
        .style(style3);
        ws.cell(7, 2)
        .string('Cliente:')
        .style(style3);
        ws.cell(8, 2)
        .string('Entrega:')
        .style(style3);
        ws.cell(9, 2)
        .string('Personal:')
        .style(style3);
        ws.cell(10, 2)
        .string('Mesa:')
        .style(style3);
        ws.cell(11, 2)
        .string('Productos:')
        .style(style3);

        ws.cell(13, 2)
        .string('Cant')
        .style(style6);
        ws.cell(13, 3)
        .string('Descripcion')
        .style(style5);
        ws.cell(13, 4)
        .string('Total')
        .style(style7);

        ws.cell(27, 2)
        .style(style4);
        ws.cell(27, 3)
        .string('Sub-Total:')
        .style(style4);
        ws.cell(27, 4)
        .style(style4);
        ws.cell(28, 3)
        .string('P.V. 10%:')
        .style(style3);
        ws.cell(29, 3)
        .string('Empaque:')
        .style(style3);
        ws.cell(30, 3)
        .string('Total:')
        .style(style3);

        ws.cell(34, 2, 34,4,true)
        .string('GRACIAS POR VISITARNOS')
        .style(style);
        ws.cell(35, 2, 35,4,true)
        .string('Te esperamos pronto de regreso!')
        .style(style1);
        ws.cell(36, 2, 36,4,true)
        .string('www.facebook.com/ChelivettsHouse')
        .style(style1);

        console.log("Document created...")

        //const pathExcel =path.join(__dirname,'excel','Factura.xlsx')

        wb.write('Factura.xlsx', function(err, stats){

            if (err) {
                console.error(err);
            }else{
                function downloadFile(){
                    res.download('Factura.xlsx')
                }
                downloadFile();
                return res.status(200).json({sucess:200});
            }
        })


    }catch(err){
        console.log(`Error creating file: ${err}`)
        return res.status(err.code).send(err.message);
    }
});

module.exports = router;