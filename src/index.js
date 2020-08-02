const express = require('express');  //express是原本建服務器的功能都可以用在額外添加新功能
// const url = require('url');
// const upload = require(__dirname+'/upload');
// const session = require('express-session');
// const db = require(__dirname + '/db_connect');
const cors = require('cors');


// ------------------------------------------

const app = express();  // express所有都有順序性

app.use(express.json());
app.use(cors());
app.use('/clorderdetail', require(__dirname +'/routes/clorderdetail'));
app.use('/order', require(__dirname +'/routes/order'));
app.use('/orderID', require(__dirname +'/routes/orderID'));
// app.use('/login', require(__dirname +'/routes/login'));

// ------------------------------------------


app.listen(7777, ()=>{          // 正常啟動會寫這個
    console.log("Run");
    
})