const express = require("express");
const dotenv = require("dotenv");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");

const errorHandler = require('./middleware/ERRORMIDDLEWARE');
const sequelize = require('./config/db');
dotenv.config();
const app = express();
app.use(express.json());
app.use(errorHandler);

// Routes for the api ::->
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);



sequelize.sync()  // This will recreate all tables
  .then(() => console.log("Database synced successfully"))
  .catch((err) => console.error("Database Sync Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
