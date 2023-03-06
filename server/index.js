const express=require('express');
const app=express();
const sql=require('mysql');
const cors=require('cors');
const session=require('express-session')
const cookieParser=require('cookie-parser')
const bodyParser=require('body-parser')

let user='';
app.use(cors({ 
    origin: 'http://localhost:5173', 
    credentials: true 
}));
app.use(session({
    secret:'asdfsaf',
    saveUninitialized:true,
    resave:true,
    cookie:{
        httpOnly:false,
        maxAge:3600000,
        sameSite:'none'
    }
}))
app.use(cookieParser())
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

const conn=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'database'
});

app.get('/sessionCheck',(req,res)=>{
   if(req.cookies.idSession===user){
    res.send(true)
   }
   else{
    res.send(false)
   }
})

app.post('/getUsers',(req,res)=>{
    conn.query(`SELECT login,password,email FROM users WHERE login='${req.body.login}' AND password='${req.body.password}';`,(err,result)=>{
        if(err){
            console.log(err)
        }else{

            if(result.length>0) {
                let rand=Math.random()*27212;
                user = result[0].login + result[0].password + result[0].email+rand;
               res.send({
                    log:true,
                    idSession: result[0].login + result[0].password + result[0].email+rand
                })   
                
                            
            } 
            else {
                res.send({
                    log:false,
                   
                })
            }
        }
    })
    
})

app.post('/insertUsers',(req,res)=>{
    conn.query(`INSERT INTO users (login,password,email) VALUE ('${req.body.login}','${req.body.password}','${req.body.email}')`,(err,result)=>{
        if(err){
            console.log(err)
            res.send({
                log:false
            }) 
        }else{
            let rand=Math.random()*27212;
            user = result[0].login + result[0].password + result[0].email+rand
            res.send({
                log:true,
                idSession: result[0].login + result[0].password + result[0].email+rand
            })   
            
        }
    })
})

app.listen(5000,()=>{
    console.log('server port 5000');
});