const inventory = require('../models/inventoryModel');

function listInventory(req, res) {
  res.json(inventory.list());
}

module.exports = { listInventory };