const express = require("express");
const router = express.Router();
const AppsModel = require("../models/AppsModel")
const TechnologyModel = require("../models/TechnologyModel")
const uploader = require("../config/cloudinary")


// ROUTE TO DISPLAY ALL THE APPLICATIONS:

router.get("/applications",(req, res, next)=>{  // PAS OUBLIER DE POPULATE
    AppsModel.find()
    .then((application)=>{
        res.status(200).json(application)
    })
    .catch((error)=>{
        console.log(error);
    })
})

// ROUTE TO FIND A SINGLE APPLICATION BY ID:
router.get("/applications/:id", (req, res, next) => {  // PAS OUBLIER DE POPULATE
  AppsModel.findById(req.params.id)
    .then((application) => {
      res.status(200).json(application);
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROUTE TO CREATE A NEW APPLICATION:
// D'abord, on récupère les informations des technologies pour les mettre dans le formulaire
router.get("/application/create", (req, res, next)=>{   
    TechnologyModel.find()   
    .then((technologies)=>{
        res.json(technologies)
    })
    .catch((error)=>{
        console.log(error);
    })
})
// ensuite, on fait la requête pour créer la nouvelle application, tenant aussi compte des technologies existantes
router.post("/application/create", uploader.single("picture"), (req, res, next)=>{ // PAS OUBLIER LE IS LOGGED IN
    const newApp = {...req.body}
    
    AppsModel.create(newApp)
    .then((createdApp)=>{
        res.status(200).json(createdApp)
    })
    .catch((error)=>{
        console.log(error)
    })
})


// ROUTE POUR UPDATER UNE APPLICATION

router.patch("/applications/:id", uploader.single("picture"), (req, res, next)=>{
    AppsModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedApp)=>{
        res.status(200).json(updatedApp)
    })
    .catch((error)=>{
        console.log(error)
    })
});


// ROUTE POUR DELETE UNE APPLICATION
router.delete("/applications/:id", (req, res, next) => {
  AppsModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({message: "app deleted"});
    })
    .catch((error) => {
      console.log(error);
    });
});




module.exports = router;