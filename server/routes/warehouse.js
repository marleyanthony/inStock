const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouseController");

router.get("/", warehouseController.listWarehouses);
router.get("/:name", warehouseController.listWarehouseDetails);
router.get("/:name/:itemName", warehouseController.listItemDetails);
router.post("/", (req, res) => {
  console.log(req.body);
  const newWarehouse = {
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    contactName: req.body.contactName,
    position: req.body.position,
    phone: req.body.phone,
    email: req.body.email,
  };
  if (!newWarehouse.name || !newWarehouse.phone) {
    return res.status(400).json({
      errorMessage: "Please fill all fields",
    });
  }
  console.log(addWarehouse);
  JSON.parse(addWarehouse).push(newWarehouse);
  warehouseController.writeJSONFile(warehouses, addWarehouse);
  res.json(newWarehouse);
});

module.exports = router;
