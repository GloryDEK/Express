const express = require("express")

router = express.Router()

// Page des contacts
router.get("/", (req,res) =>{
    res.render("contact");
})

router.post("/", (req, res) => {
    const { name, email, message } = req.body;
    res.send(`Merci ${name}, nous avons bien reçu votre message !`);
});


module.exports=router 