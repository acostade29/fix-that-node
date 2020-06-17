var express = require("express");
var router = express.Router();
const tacosCtrl = require("../controllers/tacos");

/* GET home page. */

router.get("/", tacosCtrl.index);
// Add the routes here!
router.post("/tacos", tacosCtrl.create);

module.exports = router;
