const uuid=require('uuid')
const express=require('express');
const app=express();
const sql=require('mysql');
const cors=require('cors');
const cookieParser=require('cookie-parser')
const bodyParser=require('body-parser')


const insertsesja=(user,uuid)=>{
    const data=new Date()
    console.log(data)
    conn.query(`INSERT INTO sesje (username,uid,expiration) VALUE ('${user}','${uuid}','${data}')`)
}

const expiration=(user,uuid)=>{
    conn.query(`SELECT expiration FROM sesje WHERE username='${user}' AND uid='${uuid}'`,(err,res)=>{
        if(err)
            console.log(err)
        if(res.length>0){
            console.log(res[0].expiration)

        }else{
            return false
        }
    })
}

app.use(cors({ 
    origin: 'http://localhost:5173', 
    credentials: true 
}));
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

                let user = uuid.v4()
               res.send({
                    log:true,
                    idSession: user
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

app.post('/getLogin',(req, res)=>{
    conn.query(`SELECT login FROM users WHERE login='${req.body.login}' ;`,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            if(result.length>0) {
                res.send(false)                           
            } 
            else {
                res.send(true)
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
            let user = uuid.v4()
            res.send({
                log:true,
                idSession: user
            })   
            
        }
    })
})



app.listen(5000,()=>{
    console.log('server port 5000');
    insertsesja('admin','be723eed-908c-4339-af4f-c2e0bbb97fad');
});