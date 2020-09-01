const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const addInventory = require("../db/inventories-short.json")


router.get('/', inventoryController.listInventory);



router.post("/", (req, res) => {
    console.log(req.body);
    const {
        itemName, description, categories, quantity, warehouse } = req.body

    if ((req.body.itemName === "") ||
        (req.body.quantity === "") ||
        (req.body.warehouse === "")
    ) {
        res.status(400).send("Please fill all required fields");
    } else {
        res.status(200)
        addInventory.push({
            itemName, description, categories, quantity, warehouse
        })

    }
    res.json(addInventory)

});







module.exports = router;
