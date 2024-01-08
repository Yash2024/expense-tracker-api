const express = require('express');
const app= express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

expenseRoutes = require('./api/routes/expenses');
userRoutes = require('./api/routes/users');

mongoose.connect('mongodb+srv://node-shop:node-shop@cluster0.giegz.mongodb.net/expense-tracker?retryWrites=true&w=majority');


mongoose.Promise = global.Promise;

 app.use(morgan('dev'));
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(bodyParser.json());
app.use(cors());

 
 app.use('/expenses', expenseRoutes);
 app.use('/users', userRoutes);

 app.use('/',(req, res, next)=>{
    res.status(200).json({
        message: 'api running'
    })
 })
//  app.use((req, res, next)=>{                         
//     res.header('Access-Control-Allow-Origin','http://localhost:');
//     res.header(
//         'Access-Control-Allow-Headers',
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     if(req.method === 'OPTIONS'){                   
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }
//     next();
// });

 app.use((req, res, next)=>{
     const error = new Error('Not Found');
     error.status=404;
     next(error);
 });

 app.use((error, req, res, next)=>{
     res.status(error.status || 500);
     res.json({
         error: {
             message: error.message
         }
     });
 });


module.exports = app;