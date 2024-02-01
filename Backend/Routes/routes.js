const { getData, addData, updateData, removeData } = require("../Controller/Controller");


const router= require("express").Router();

router.post("/", addData );
router.get("/", getData);
router.put("/:id", updateData)
router.delete("/:id", removeData)


module.exports = router;
