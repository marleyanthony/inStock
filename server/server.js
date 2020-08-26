const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;
const warehouseRoute = require("./routes/warehouse");
const inventoryRoute = require("./routes/inventory");


const app = express();

app.use(express.json());
app.use(cors());

app.use("/inventory", inventoryRoute);
app.use("/warehouse", warehouseRoute);

app.listen(PORT, () => console.log(`listening at: ${BACKEND_URL}:${PORT}`));