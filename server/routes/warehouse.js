const express = require('express');
const router = express.Router();
const warehouseController = require('../controllers/warehouseController');
const warehouses = __dirname + "../../db/warehouses.json";
const addWarehouse = require(warehouses);





router.post("/", (req, res) => {
    console.log("post route")
    const newWarehouse = {
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        position: req.body.position,
        phone: req.body.phone,
        email: req.body.email,

    }
    if (!newWarehouse.name || !newWarehouse.phone) {
        return res.status(400).json({
            erroMessage: "Please fill all fileds"
        })
    }
    console.log(addWarehouse)
    addWarehouse.push(newWarehouse);
    warehouseController.writeJSONFile(warehouses, addWarehouse)
    res.json(newWarehouse);
});




module.exports = router; 
