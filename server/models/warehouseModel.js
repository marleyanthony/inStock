const fs = require("fs");
const path = require("path");

const warehouseFile = path.join(__dirname, "../db/warehouses.json");
const inventoryFile = path.join(__dirname, "../db/inventories.json");

function Warehouse(name, address, city, country, contact) {
  this.name = name;
  this.navLink = name.split(" ").join("");
  this.address = address;
  this.city = city;
  this.country = country;
  this.contact = contact;
}

function list() {
  const data = fs.readFileSync(warehouseFile);
  return JSON.parse(data);
}

const getWarehouseByName = (name) => {
  // console.log("name:", name);
  const warehouseData = JSON.parse(fs.readFileSync(warehouseFile));
  // console.log("warehouseData:", warehouseData);
  const warehouse = warehouseData.filter(
    (warehouse) => warehouse.name.split(" ").join("") === name
  );
  // console.log("warehouse:", warehouse);
  return warehouse;
};

const getWarehouseInventory = (name) => {
  // console.log("name:", name);
  const inventoryData = JSON.parse(fs.readFileSync(inventoryFile));
  const warehouseInventory = inventoryData.filter((item) => {
    // console.log("item.warehouseName:", item.warehouseName);
    return item.warehouseName === name;
  });
  // console.log("warehouseInventory:", warehouseInventory);
  return warehouseInventory;
};

module.exports = { list, getWarehouseByName, getWarehouseInventory };
