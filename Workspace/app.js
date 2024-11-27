const express = require("express")
const bodyParser = require("body-parser");

//importation des routes
const home = require("./routes/home")
const services = require("./routes/services")
const contact = require("./routes/contact")

const app = express()


//Configuration du moteur de template ejs
app.set("views", "./views")
app.set("view engine", "ejs")

//Pour analyser les données POST
app.use(bodyParser.urlencoded({ extended: true }));  


//Appelle au fichier static
app.use(express.static("public"))


// Middleware limitant l'accès aux heures de bureau
app.use((req, res, next) => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // 0-6 (dimanche - samedi)
    const currentHour = currentDate.getHours(); // 0 à 23

    if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour <= 17) {
        next(); // Continue 
    } else {
        res.send("Accessible uniquement : Lundi - Vendredi, de 9h à 17h.");
    }
});


app.get('/', (req, res) => {
    res.render('home', { title: 'Accueil' });
  });
  
  app.get('/services', (req, res) => {
    res.render('services', { title: 'Nos Services' });
  });
  
  app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contactez-nous' });
  });
  

  app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    res.send(`Merci pour votre message, ${name}! Nous vous répondrons bientôt.`);
  });
  

app.listen(3000, () =>{
    console.log("Serveur en ecoute...")
} ) 
