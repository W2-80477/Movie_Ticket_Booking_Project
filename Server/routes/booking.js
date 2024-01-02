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

    var statement = "select * from booking";

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

app.post("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var id = request.body.booking_id;
    var noOfSeats = request.body.number_of_seats;
    var timestampB = request.body.timestamp;
    var userId = request.body.user_id;
    var showId = request.body.show_id;
    
    
    var statement = 
        `insert into booking values(${id}, ${noOfSeats},'${timestampB}',${userId},${showId})`;

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

app.put("/:booking_id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var id = request.params.booking_id;
    var noOfSeats = request.body.number_of_seats;
    var timestampB = request.body.timestamp;
    var userId = request.body.user_id;
    var showId = request.body.show_id;


    var statement = 
        `update booking set number_of_seats ='${noOfSeats}',timestamp='${timestampB}',user_id=${userId},show_id=${showId} where booking_id=${id}`;
    console.log(statement);

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
app.delete("/:booking_id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var id = request.params.booking_id;//This data belongs to header part 
  
    var statement = 
        `delete from booking where booking_id =${id}`;

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