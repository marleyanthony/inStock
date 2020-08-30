const warehouse = require('../models/warehouseModel');
const fs = require("fs");

function listWarehouses(req, res) {
  res.json(warehouse.list());
}
function writeJSONFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", err => {
    if (err) {
    }
  });
}

const listWarehouseDetails = (req, res) => {
  const warehouseName = req.params.name;
  const warehouseDetails = warehouse.getWarehouseByName(warehouseName);
  warehouseDetails[0].inventory = warehouse.getWarehouseInventory(
    warehouseName
  );
  console.log("warehouseDetails.inventory:", warehouseDetails.inventory);
  console.log("warehouseDetails:", warehouseDetails);
  res.json(warehouseDetails);
};

module.exports = { listWarehouses, listWarehouseDetails, writeJSONfile };
