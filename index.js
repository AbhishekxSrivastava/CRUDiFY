const express = require("express");
const app = express();
const PORT = 3000;

const userRouter = require('./routes/user');
const {ConnectMongoDb}  = require('./connection');
const {logReqRes, Authorization} = require("./middlewares");



// Connecting MongoDB
ConnectMongoDb('mongodb://127.0.0.1:27017/Project-01').then(() => {
    console.log("MongoDB connected.")
}).catch(() => {
    console.log("Error connectiong MongoDB.");
});


// Headers
// Middleware to check for Authorization token
app.use(Authorization());

//Middleware Plugins
app.use(express.urlencoded({extended : false}));

// MiddleWare For Log file
app.use(logReqRes("log.txt"));



// Routes
app.use('/api/users', userRouter);


app.listen(PORT, () => {
    console.log(`Server started at PORT number ${PORT}.`);
});