const express = require("express")

router = express.Router()

// Page d'accueil 
router.get("/", (req, res) =>{
    res.render("home");
})

module.exports=router 