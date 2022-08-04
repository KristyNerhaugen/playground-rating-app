const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
// require dashboard routes once set up

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
// use dashboard routes once set up

module.exports = router;
