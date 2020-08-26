const fs = require('fs');
const path = require('path');

const inventoryFile = path.join(__dirname, '../db/inventories.json');

function Inventory(warehouse, item, description, category, status, quantity) {
  this.warehouseName = warehouse;
  this.itemName = item;
  this.description = description;
  this.category = category;
  this.status = status;
  this.quantity = quantity;
}

function list() {
  const data = fs.readFileSync(inventoryFile);
  return JSON.parse(data);
}

module.exports = { list }