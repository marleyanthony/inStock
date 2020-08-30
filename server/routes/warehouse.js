const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouseController");

router.get("/", warehouseController.listWarehouses);
router.get("/:name", warehouseController.listWarehouseDetails);

module.exports = router;
