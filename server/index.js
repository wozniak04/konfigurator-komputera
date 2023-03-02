const express=require('express');
const app=express();
const sql=require('mysql');
const cors=require('cors');

app.use(cors());

app.use(express.json());

const conn=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'database'
});

app.get('/api',(req,res)=>{
    conn.query('SELECT * FROM users',(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.listen(5000,()=>{
    console.log('server port 5000');
});