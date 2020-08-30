const express = require("express");
const router = express.Router();

const warehouses = __dirname + "../../db/warehouses.json";
const addWarehouse = require(warehouses);

const warehouseController = require("../controllers/warehouseController");

router.get("/", warehouseController.listWarehouses);
router.get("/:name", warehouseController.listWarehouseDetails);




router.post("/", (req, res) => {
    console.log(req.body)
    const newWarehouse = {
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        contactName: req.body.contactName,
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
