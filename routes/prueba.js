const express = require("express");
const router = express.Router();

const pruebaController = require("../controllers/pruebaController");


// router.get("/", pruebaController.prueba1);
router.get("/", pruebaController.pruebaquery);




module.exports = router;