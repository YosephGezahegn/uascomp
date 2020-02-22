const express = require("express");
const router = express.Router();
const uasRoute = require("./uas");
const departmentRoute = require("./department");
const courseRoute = require("./course");

router.use("/uas", uasRoute);
router.use("/department", departmentRoute);
router.use("/course", courseRoute);

module.exports = router;
