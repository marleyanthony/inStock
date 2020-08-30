const warehouse = require('../models/warehouseModel');
const fs = require("fs");

function listWarehouse(req, res) {
  res.json(warehouse.list());
}
function writeJSONFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", err => {
    if (err) {
    }
  });
}

module.exports = {
  listWarehouse,
  writeJSONFile
};