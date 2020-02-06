var express = require('express');
var moment = require('moment');
var v = require('voca');
var app = express();

app.get('/',function(req,res){
    res.send('Hola, bienvenido al heading to codefest');
});
/*app.get('/saludo',function(req,res){
    let nombre = req.query.nombre;
    if(nombre){
        res.send(`Hola ${nombre}, bienvenido al heading to codefest`);
    }else{
        res.send('Hola, bienvenido al heading to codefest');
    }
    console.log(nombre);
    
});*/
app.get('/fecha',function(req,res){
    let fecha = req.query.fecha;
    let validacion = moment(fecha,'YYYY-MM-DD',true);
    let validado = validacion.isValid();

    if(validado){
        let escrita = moment(fecha,'YYYY-MM-DD',true);
        let hoy = moment();
        let diferencia = escrita.diff(hoy,'days');
        if(diferencia <= 0){
            diferencia*=-1;
            res.send(`Han pasado ${diferencia} día(s)`);
        }else{
            res.send(`Quedan ${diferencia} día(s)`);
        }
    }else{
        res.send('FECHA NO VALIDADA');
    }
    
});

app.get('/reverse-word',function(req,res){
    let string = req.query.string;
    res.send(`Reverse: ${v.reverse(string)}`);
    
});

app.get('/is-lower-case',function(req,res){
    let string = req.query.string;
    let lower = v.lowerCase(string);
    if(lower == string){
        res.send(`${string} Está en lowercase`);
    }
    
});
app.listen(3000,function(){
    console.log('Taller NodeJS app listening on port 3000');
});