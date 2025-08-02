const express = require("express");
const cors = require("cors");
const path = require("path");
const routes = require("./route");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
