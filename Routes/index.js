const router= require("express").Router();
router.use("/users",require('./routes'))
module.exports = router;