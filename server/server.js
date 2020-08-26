const express = require("express");
const app = express();
const cors = require("cors")
require("dotenv").config();
// const { PORT, BACKEND_URL } = process.env;
const videoRoutes = require("./routes/videos");



app.use(express.json());
app.use(cors());


// app.listen(PORT, () => console.log(`listening at: ${BACKEND_URL}:${PORT}`));
app.listen(8080, console.log('app running at http://localhost:8080'));