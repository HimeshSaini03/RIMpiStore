const express = require("express");
const { processPayment } = require("../controllers/paymentController");
const { protect } = require("../middleware/AUTHMIDDLEWWARE");

const router = express.Router();

router.post("/", protect, processPayment);

module.exports = router;
