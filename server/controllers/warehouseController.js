const warehouse = require("../models/warehouseModel");
const fs = require("fs");


function listWarehouses(req, res) {
  res.json(warehouse.list());
}

function writeJSONFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", (err) => {
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
  res.json(warehouseDetails);
};

const listItemDetails = (req, res) => {
  console.log("req.params:", req.params);
  const item = warehouse.getItemDetails(req.params.name, req.params.itemName);
  res.json(item);
};

module.exports = {
  listWarehouses,
  listWarehouseDetails,
  writeJSONFile,
  listItemDetails,
};
