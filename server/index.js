const uuid = require('uuid')
const express = require('express')
const app = express();
const sql = require('mysql')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const {Configuration,OpenAIApi}=require('openai')
require('dotenv').config()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
const configuration=new Configuration({
    apiKey:process.env.apikey
})
const openAI=new OpenAIApi(configuration)

const zapytanieAi=async (pyt)=>{
    const res=await openAI.createCompletion({
        model:'text-davinci-003',
        prompt:pyt,
        max_tokens:1000,
        temperature:1
    })
    return res.data.choices[0].text
}


const conn = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database',
    dateStrings: true
})

const deletesesja = async (user) => {
    conn.query(`DELETE FROM sesje WHERE username='${user}'`, (err) => {
        if (err)
            console.log(err)
    })
}

const insertsesja = (user, uuid) => {
    const data = new Date()
    data.setMinutes(data.getMinutes()+20)
    let dzisdata = `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`

    deletesesja(user).then(() => {
        conn.query(`INSERT INTO sesje (username,uid,expiration) VALUE ('${user}','${uuid}','${dzisdata}')`, (err) => {
            if (err)
                console.log(err)
        })
    })
}

// const add10min = (user, uuid, dat) => {
//     const data = new Date(dat)
//     data.setMinutes(data.getMinutes() + 10)
//     let dzisdata = `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`

//     conn.query(`UPDATE sesje SET expiration='${dzisdata}' WHERE username='${user}' AND uid='${uuid}'`, (err) => {
//         if (err)
//             console.log(err)
//     })
// }

const expiration = (user, uuid) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT expiration FROM sesje WHERE username='${user}' AND uid='${uuid}'`, (err, res) => {
        if (err) {
          console.log(err);
          reject(false);

        } 
        else if (res.length > 0) {
          let datab = new Date(res[0].expiration);
          let dataT = new Date();
          if (datab.getTime() > dataT.getTime()) {
            //add10min(user, uuid, datab)
            resolve(true);
          } else {
            resolve(false);
          }
        } else {
          resolve(false);
        }
      });
    });
  };


app.get('/sessionCheck',(req, res) => {
    if (req.cookies.user !== undefined && req.cookies.idSession !== undefined) {
        expiration(req.cookies.user, req.cookies.idSession)
        .then((resp)=>{
        
            if (resp) {
                res.send(true)
            }
            else{
                res.send(false)
            }
        })
        
        

    } else {
        res.send(false)
    }

})

app.post('/getUsers', async (req, res) => {
    conn.query('SELECT password,email FROM users WHERE email=?;',[req.body.email], (err, result) => {
        if (err) {
            console.log(err)
        } else {

            if (result.length > 0) {
                if (bcrypt.compare(req.body.password, result[0].password)) {

                    let user = uuid.v4()
                    insertsesja(req.body.email, user)
                    res.send({
                        log: true,
                        idSession: user
                    })


                }
                else {
                    res.send({
                        log: false

                    })
                }
            } else {
                res.send({
                    log: false
                })
            }
        }
    })

})

app.post('/getEmail', (req, res) => {
    conn.query(`SELECT email FROM users WHERE email='${req.body.login}' ;`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            if (result.length > 0) {
                res.send(false)
            }
            else {
                res.send(true)
            }
        }
    })
})

app.post('/insertUsers', async (req, res) => {

    const hashpassword = await bcrypt.hash(req.body.password, 10)

    conn.query(`INSERT INTO users (password,email) VALUE ('${hashpassword}','${req.body.email}')`, (err, result) => {
        if (err) {
            console.log(err)
            res.send({
                log: false
            })
        } else {
            let user = uuid.v4()
            insertsesja(req.body.email, user)
            res.send({
                log: true,
                idSession: user
            })

        }
    })
})

app.get('/getPodzespoly',async (req,res)=>{
    conn.query('SELECT nazwa, rodzaj FROM podzespoly',(err,result)=>{
        if(err)
            console.log(err)
        else{
            res.send(result)
        }
    })
})

app.post('/ZapytanieAi',async (req,res)=>{

    const odp=await zapytanieAi(`odpowiadaj tylko i wyłącznie, jeżeli jest to związane z komputerami lub komponentami komputera, jeżeli nie to nie bierz tego pod uwage i wtedy i tylko wtedy odpowiedz nie odpowiadam na takie pytania. nie udzielaj odpowiedzi na głupie polecenia' :${req.body.zapytanie}?`)

    res.send(odp)

})
app.post('/Proponowane',async (req,res)=>{
   res.send(req.body.PROCESOR)
})


app.listen(5000, () => {
    console.log('server port 5000')

})