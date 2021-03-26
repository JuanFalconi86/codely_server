require("dotenv").config();
require("../config/dbConnection");
const TechnologyModel = require("../models/TechnologyModel")

const someTechnologies = [
  {
    name: "Javascript",
    category: "Front-End",
    logo:
      "https://www.seekpng.com/png/detail/80-803501_javascript-logo-logo-de-java-script-png.png",
  },
  {
    name: "Javascript",
    category: "Back-End",
    logo:
      "https://www.seekpng.com/png/detail/80-803501_javascript-logo-logo-de-java-script-png.png",
  },
  {
    name: "MongoDB",
    category: "Database",
    logo:
      "https://upload.wikimedia.org/wikipedia/fr/thumb/4/45/MongoDB-Logo.svg/1280px-MongoDB-Logo.svg.png",
  },
  {
    name: "Python",
    category: "Back-End",
    logo:
      "https://banner2.cleanpng.com/20180825/box/kisspng-python-programming-language-computer-programming-c-hanuman-png-transparent-images-free-download-clip-5b814ed3233799.3867698615352009791443.jpg",
  },
];

TechnologyModel.create(someTechnologies)
.then((technology)=>{
    console.log("New Technology added to the DB", technology);
})
.catch((error)=>{
    console.log(error);
})

;