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
    conn.query(`SELECT login,password FROM users`,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            
            if(result[0].login==req.body.login && result[0].password==req.body.password){
                res.send(true)
            }else{
                res.send(false)
            }
        }
    })
    
})

app.post('/insertUsers',(req,res)=>{
    conn.query(`INSERT INTO users (login,password,email) VALUE ('${req.body.login}','${req.body.password}','${req.body.email}')`,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("użytkownik dodany pomyślnie")
        }
    })
})

app.listen(5000,()=>{
    console.log('server port 5000');
});