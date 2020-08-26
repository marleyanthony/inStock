const fs = require('fs');
const path = require('path');

const warehouseFile = path.join(__dirname, '../db/warehouses.json');

function Warehouse(name, address, city, country, contact) {
  this.name = name;
  this.address = address;
  this.city = city;
  this.country = country;
  this.contact = contact;
}

function list() {
  const data = fs.readFileSync(warehouseFile);
  return JSON.parse(data);
}

module.exports = { list }