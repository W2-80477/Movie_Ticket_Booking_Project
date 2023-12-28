const config=require('config');
const mysql2=require('mysql');
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


app.get("/",(request,response) =>
{
    let connection=mysql2.createConnection(connectionDetails);
    let statement = "select * from users";
    console.log(statement);
    connection.query(statement,(error,result)=>
    {
        if(error==null)
        {
            response.setHeader("Content-Type","application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type","application/json");
            response.write(JSON.stringify(error));
            console.log(error);
            connection.end();
            response.end();
        }
    }
    )
}
)

app.post("/",(request,response) =>
{
    let first_name=request.body.first_name;
    let last_name=request.body.last_name;
    let email=request.body.email_id;
    let password=request.body.password;
    let mobile=request.body.mob_no;
    let birth=request.body.date_of_birth;

    let connection=mysql2.createConnection(connectionDetails);
    let statement = `insert into users(first_name,last_name,email_id,password,mob_no,date_of_birth) values ('${first_name}','${last_name}','${email}','${password}','${mobile}','${birth}')`;
    connection.query(statement,(error,result)=>
    {
        if(error==null)
        {
            response.setHeader("Content-Type","application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type","application/json");
            response.write(JSON.stringify(error));
            console.log(error);
            connection.end();
            response.end();
        }
    }
    )
}
)



app.put("/:id",(request,response) =>
{
    let id=request.params.id;
    let first_name=request.body.first_name;
    let last_name=request.body.last_name;
    let email=request.body.email_id;
    let password=request.body.password;
    let mobile=request.body.mob_no;
    let birth=request.body.date_of_birth;

    let connection=mysql2.createConnection(connectionDetails);
    let statement = `update users set first_name='${first_name}',last_name='${last_name}',email_id='${email}',password='${password}',mob_no='${mobile}',date_of_birth='${birth}' where user_id=${id}`;
    console.log(statement);
    connection.query(statement,(error,result)=>
    {
        if(error==null)
        {
            response.setHeader("Content-Type","application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type","application/json");
            response.write(JSON.stringify(error));
            console.log(error);
            connection.end();
            response.end();
        }
    }
    )
}
)


app.delete("/:id",(request,response) =>
{
    let id=request.params.id;
    let connection=mysql2.createConnection(connectionDetails);
    let statement = `delete from users where user_id= ${id}`;
    console.log(statement);
    connection.query(statement,(error,result)=>
    {
        if(error==null)
        {
            response.setHeader("Content-Type","application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type","application/json");
            response.write(JSON.stringify(error));
            
            connection.end();
            response.end();
        }
    }
    )
}
)

module.exports =app;