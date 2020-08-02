const express = require('express');
// const moment = require('moment-timezone');
const upload = require(__dirname+'/../upload');
const db = require(__dirname +'/../db_connect');
const router = express.Router();

// ------------------------------

router.post('/', (req, res)=>{
    
    const sql = "INSERT INTO `clorder`(`orderID`, `customerID`, `orderDate`, `requireDate`, `shippedDate`, `shippedTel`, `shippedAdd`, `unitTotalPrice`, `discountTotalPrice`) VALUES (?,?,?,?,?,?,?,?,?)";
    db.queryAsync(sql, [
        req.body.orderID + 1,
        req.body.customerID,
        "0000"-"00"-"00",
        "0000"-"00"-"00",
        "0000"-"00"-"00",
        req.body.shippedTel,
        req.body.shippedAdd,
        req.body.unitTotalPrice,
        req.body.discountTotalPrice,
    ])
    .then(results=>{
        // res.json(output);
    })
    .catch(ex=>{
        // console.log('ex:', ex);
    })
    // res.json(req.body);

});



module.exports = router;