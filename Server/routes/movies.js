const mysql = require('mysql');
const express = require('express');
const config = require('config');

const app =  express.Router();

var connectionDetails = {
                          host: config.get("SERVER"),
                          database: config.get("DATABASE"),
                          user: config.get("USER"),
                          password: config.get("PASSWORD"),
                        }

app.get("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var statement = "select * from movies";

    connection.query(statement, (error, result)=>{
        if(error !==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
             response.write(JSON.stringify(error));
            connection.end();
            response.end();
        }
    })
});

app.post("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var id = request.body.movie_id;
    var title = request.body.title;
    var description = request.body.description;
    var duration =request.body.duration;
    var language = request.body.language;
    var releaseDate = request.body.release_date;
    
    var statement = 
        `insert into movies values(${id}, '${title}','${description}','${duration}','${language}','${releaseDate}')`;

    connection.query(statement, (error, result)=>{
        if(error==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(error));
            connection.end();
            response.end();
        }
    })
});

app.put("/:movie_id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

  
    var id = request.params.movie_id;
    var title = request.body.title;
    var description = request.body.description;
    var duration =request.body.duration;
    var language = request.body.language;
    var releaseDate = request.body.release_date;
    

    var statement = 
        `update movies set title='${title}',description='${description}',duration='${duration}',language='${language}',release_date='${releaseDate}' where movie_id =${id}`;

    connection.query(statement, (error, result)=>{
        if(error==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(error));
            connection.end();
            response.end();
        }
    })
});
app.delete("/:movie_id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var id = request.params.movie_id;
  
    var statement = 
        `delete from movies where movie_id =${id}`;

    connection.query(statement, (error, result)=>{
        if(error==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(error));
            connection.end();
            response.end();
        }
    })
});

module.exports =app;