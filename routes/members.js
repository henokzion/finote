var express = require("express");

var router = express.Router();
var memCtrl = require("../controllers/members");

router.get("/", memCtrl.getMembers);
router.get("/new", memCtrl.newForm);
router.get("/:memid", memCtrl.getMember);
router.post("/", memCtrl.createMember);

module.exports = router;