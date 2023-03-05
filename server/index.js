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

app.post('/getUsers',(req,res)=>{
    conn.query(`SELECT login,password FROM users WHERE login='${req.body.login}' AND password='${req.body.password}';`,(err,result)=>{
        if(err){
            console.log(err)
        }else{

            if(result.length>0) {
                
                    res.send(true)               
            } 
            else {
                res.send(false)
            }
        }
    })
    
})

app.post('/insertUsers',(req,res)=>{
    conn.query(`INSERT INTO users (login,password,email) VALUE ('${req.body.login}','${req.body.password}','${req.body.email}')`,(err,result)=>{
        if(err){
            console.log(err)
            res.send(false) 
        }else{
            res.send(true)
        }
    })
})

app.listen(5000,()=>{
    console.log('server port 5000');
});