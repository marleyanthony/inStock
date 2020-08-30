<<<<<<< HEAD
const warehouse = require('../models/warehouseModel');
const fs = require("fs");
=======
const warehouse = require("../models/warehouseModel");
>>>>>>> master

function listWarehouses(req, res) {
  res.json(warehouse.list());
}
function writeJSONFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", err => {
    if (err) {
    }
  });
}

<<<<<<< HEAD
module.exports = {
  listWarehouse,
  writeJSONFile
};
=======
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

module.exports = { listWarehouses, listWarehouseDetails };
>>>>>>> master
