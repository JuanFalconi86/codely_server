require("dotenv").config();
require('./../config/dbConnection');

const { Mongoose } = require("mongoose");
const AppsModel = require("./../models/AppsModel")

const apps = [
    
{
    appName: "Airbnb",
    appLogo: "https://res.cloudinary.com/djogypr9r/image/upload/v1616764440/rbnb_ellobm.jpg",
    appDescription: "Airbnb makes finding local homes for your holidays really easy.",
    appCategory: "Lifestyle"

},

{
    appName: "Instagram",
    appLogo: "https://res.cloudinary.com/djogypr9r/image/upload/v1616764900/ig-logo_c5pat9.webp",
    appDescription: "Share your favorite moments on instagram with your favorite people",
    appCategory: "Social Media"

},

{
    appName: "Instagram",
    appLogo: "https://res.cloudinary.com/djogypr9r/image/upload/v1616764900/ig-logo_c5pat9.webp",
    appDescription: "Share your favorite moments on instagram with your favorite people",
    appCategory: "Social Media"

},

{
    appName: "Uber",
    appLogo: "https://res.cloudinary.com/djogypr9r/image/upload/v1616765260/uber-logo_jr65np.jpg",
    appDescription: "Share your favorite moments on instagram with your favorite people",
    appCategory: "Search"

},

{
    appName: "The New York Times",
    appLogo: "https://res.cloudinary.com/djogypr9r/image/upload/v1616765433/nyt_yxril6.jpg",
    appDescription: "The New York Times is an American daily newspaper based in New York City with a worldwide readership. Founded in 1851, the Times has since won 130 Pulitzer Prizes, and has long been regarded within the industry as a national newspaper of record. It is ranked 18th in the world by circulation and 3rd in the U.S.",
    appCategory: "News/Media"

},

{
    appName: "Quora",
    appLogo: "https://res.cloudinary.com/djogypr9r/image/upload/v1616765562/quora_n18d7f.png",
    appDescription: "Quora is an American question-and-answer website where questions are asked, answered, followed, and edited by Internet users, either factually or in the form of opinions. Its owner, Quora Inc., is based in Mountain View, California, United States.",
    appCategory: "Search"

},

];

const oneApp = [
  {
    appName: "SimoApp",
    appLogo:
      "https://res.cloudinary.com/djogypr9r/image/upload/v1616765562/quora_n18d7f.png",
    appDescription: "Juan App Description",
    appCategory: "Search",
    technology: ["605deb5914db1951c4a970df", "605deb5914db1951c4a970e1"],
    proprietaryCompany: "605deabcecdb5d52065fd20b",
    appCategory: "News/Media"
  }
];



AppsModel.create(oneApp)
    .then((dbRes) => {
        console.log(dbRes);
    })
    .catch((error) => {
        console.log(error);
    });

    


