const express = require('express');
const mysql = require('mysql');
const ejs = require('ejs');
const app = express();
const mysql_config = require('./mysql/config');
app.set('view engine','ejs');
// app.use(express.json())
// app.use(express.urlencoded({extended: true}))

let conn = mysql.createConnection(mysql_config);

app.get('/', (req,res) => {
    let id = req.query.id;
    res.render('index', {id:id});
});

app.post('/confirm', (req,res) => {
    let confirmation = req.body.confirm;
    let id = req.query.id;
    
    let data = {
        data:confirmation,
        status:"",
        msg: ""
    };
    
    if(confirmation.toLowerCase() === 'ya'){
        conn.connect((err) => {
            if(err) throw err;
            let sql = `UPDATE undangan SET status_kehadiran = 1 WHERE id = ${id}`;
            conn.query(sql,(err,result) => {
                if(err) throw err;
                res.render('thank_you');
            })
        });
    }
    else{
        conn.connect((err) => {
            if(err) throw err;
            let sql = `UPDATE undangan SET status_kehadiran = 2 WHERE id = ${id}`;
            conn.query(sql,(err,result) => {
                if(err) throw err;
                res.render('thank_you');
            })
        });
    }
});

module.exports = app;