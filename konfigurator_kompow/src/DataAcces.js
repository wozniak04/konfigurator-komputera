const sql=require('mysql');

const conn=sql.createConnection({
    host:"localhost",
    user:"root",
    password:null,
    database:"test"
})

conn.connect((err)=>{
    if(err)
        throw err;
})

conn.query("SELECT * FROM uzytkownik",(err,row)=>{
    row.forEach(element => {
     console.log(element)   
    });
})

conn.end((err)=>{
    if(err)
        throw err;
});