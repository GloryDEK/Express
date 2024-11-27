const express = require("express")

router = express.Router()

// Page des services
router.get("/", (req, res) =>{
   res.render("services");

})


module.exports=router 