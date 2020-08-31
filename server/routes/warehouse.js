const express = require("express");
const router = express.Router();
<<<<<<< HEAD
<<<<<<< HEAD
const warehouseController = require('../controllers/warehouseController');
const warehouses = __dirname + "../../db/warehouses.json";
const addWarehouse = require(warehouses);

=======
const warehouseController = require("../controllers/warehouseController");

router.get("/", warehouseController.listWarehouses);
router.get("/:name", warehouseController.listWarehouseDetails);
>>>>>>> master


=======

const warehouses = __dirname + "../../db/warehouses.json";
const addWarehouse = require(warehouses);

const warehouseController = require("../controllers/warehouseController");
>>>>>>> master

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
      errorMessage: "Please fill all fields"
    })
  }
  console.log(addWarehouse)
  JSON.parse(addWarehouse).push(newWarehouse);
  warehouseController.writeJSONFile(warehouses, addWarehouse)
  res.json(newWarehouse);
});



module.exports = router; 
