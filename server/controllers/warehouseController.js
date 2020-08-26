const wareHouse = require('../models/warehouseModel');

function listWarehouse(req, res) {
  res.json(warehouse.list());
}

module.exports = { listWarehouse };