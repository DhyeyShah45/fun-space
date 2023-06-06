const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mainRoutes = require("./routes/mainRoutes");
const userRoutes = require("./routes/userRoutes");
const actionRoutes = require("./routes/actionRoutes");
const viewRoutes = require("./routes/viewRoutes");

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Routing
app.use("/main", mainRoutes);
app.use("/user", userRoutes);
app.use("/action", actionRoutes);
app.use("/view", viewRoutes);

app.listen(process.env.PORT || 5000, (req, res) => {
  console.log(`Server running on ${process.env.PORT || 5000}`);
});
