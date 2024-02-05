const mysql = require('mysql');
const express = require('express');
const config = require('config');

const app =  express.Router();

var connectionDetails = {
                            host: config.get("SERVER"),
                            database: config.get("DATABASE"),
                            user: config.get("USER"),
                            password: config.get("PASSWORD")
                        }

app.get("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var statement = "select * from payment";

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

    var id = request.body.payment_id;
    var showAmount = request.body.amount;
    var dateTime = request.body.payment_date_time;
    var paymentMethod =request.body.payment_method;
    var userId = request.body.user_id;
    var showId = request.body.show_id;
    var paymentStatus = request.body.payment_status;
    var bookingId = request.body.booking_id;
    
    var statement = 
        `insert into payment values(${id}, '${showAmount}','${dateTime}','${paymentMethod}','${userId}','${showId}','${paymentStatus}','${bookingId}')`;

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

app.delete("/:payment_id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var id = request.params.payment_id;//This data belongs to header part 
  
    var statement = 
        `delete from payment where payment_id =${id}`;

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

module.exports = app;