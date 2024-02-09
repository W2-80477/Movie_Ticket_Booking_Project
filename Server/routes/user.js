const config=require('config');
const mysql=require('mysql');
const cors=require('cors');
const express=require('express');
const app =  express.Router();


app.use(express.json());
app.use(cors());


let connectionDetails={
    host: config.get("SERVER"),
    database: config.get("DATABASE"),
    user: config.get("USER"),
    password: config.get("PASSWORD"),
}


app.post("/",(req,res) =>
{
    let {first_name,last_name, email_id, password, mob_no, date_of_birth} = req.body;

    let connection=mysql.createConnection(connectionDetails);
    let statement = `insert into users(first_name,last_name,email_id,password,mob_no,date_of_birth) values ('${first_name}','${last_name}','${email_id}','${password}','${mob_no}','${date_of_birth}')`;
    connection.query(statement,(error,result)=>
    {
        if(error==null)
        {
            res.setHeader("Content-Type","application/json");
            res.write(JSON.stringify(result));
            connection.end();
            res.end();
        }
        else
        {
            res.setHeader("Content-Type","application/json");
            res.write(JSON.stringify(error));
            console.log(error);
            connection.end();
            res.end();
        }
    }
    )
}
)



module.exports =app;