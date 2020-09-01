const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouseController");
const addWarehouse = require("../db/warehouses.json");


router.get("/", warehouseController.listWarehouses);
router.get("/:name", warehouseController.listWarehouseDetails);
router.get("/:name/:itemName", warehouseController.listItemDetails);
router.put("/:name", warehouseController.editWarehouse);



router.post("/", (req, res) => {
  console.log(req.body);
  const {
    name,
    address,
    city,
    country,
    contact

  } = req.body;

  if (
    req.body.name === "" ||
    req.body.address === "" ||
    req.body.phone === "" ||
    req.body.email === ""
  ) {
    return res.status(400).json("Please fill all required fields");
  } else {
    // res.status(200);
    addWarehouse.push({
      name, address, city, country,
      contact
    });
  }
  res.json(addWarehouse);
});

module.exports = router;
