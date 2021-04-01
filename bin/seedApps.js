require("dotenv").config();
require('./../config/dbConnection');

const { Mongoose } = require("mongoose");
const AppsModel = require("./../models/AppsModel")

const apps = [
    

{
    appName: "Instagram",
    appLogo: "https://res.cloudinary.com/djogypr9r/image/upload/v1616764900/ig-logo_c5pat9.webp",
    appDescription: "Instagram is an American photo and video sharing social networking service owned by Facebook, created by Kevin Systrom and Mike Krieger and originally launched on iOS in October 2010.",
    appCategory: "Social Media",
    proprietaryCompany: "6064f812d68b837716ee8d9e",
    technology:["6064e3093bbd986a133a9fc9", "6064e3093bbd986a133a9fcb", "6064e3093bbd986a133a9fe4", "6064e3093bbd986a133a9fdb", "6064e3093bbd986a133a9fd2", "6064e3093bbd986a133a9fdc", "6064e3093bbd986a133a9fdd", "6064e3093bbd986a133a9fde", "6064e3093bbd986a133a9fcd", "6064e3093bbd986a133a9fd9", "6064e3093bbd986a133a9fdf", "6064e3093bbd986a133a9fe2", "6064e3093bbd986a133a9fe0"]

},
{
    appName: "Facebook",
    appLogo: "http://unikeo.net/blog/wp-content/uploads/2014/01/fb.png",
    appDescription: "Facebook is an American online social media and social networking service founded by Mark Zuckerberg and based in Menlo Park, California.",
    appCategory: "Social Media",
    proprietaryCompany: "6064f812d68b837716ee8d9e",
    technology:["6064e3093bbd986a133a9fc9", "6064e3093bbd986a133a9fcb", "6064e3093bbd986a133a9fe4", "6064e3093bbd986a133a9fdb", "6064e3093bbd986a133a9fd2", "6064e3093bbd986a133a9fdc", "6064e3093bbd986a133a9fdd", "6064e3093bbd986a133a9fde", "6064e3093bbd986a133a9fcd", "6064e3093bbd986a133a9fd9", "6064e3093bbd986a133a9fdf", "6064e3093bbd986a133a9fe2", "6064e3093bbd986a133a9fe0"]

},

{
    appName: "Twitter",
    appLogo: "https://www.cineramageddon.com/wp-content/uploads/2020/06/twitter-logo.png",
    appDescription: "Twitter is an American microblogging and social networking service on which users post and interact with messages known as tweets." ,
    appCategory: "Social Media",
    proprietaryCompany: "6064f812d68b837716ee8da0",
    technology:["6064e3093bbd986a133a9fc9","6064e3093bbd986a133a9fcd", "6064e3093bbd986a133a9fe3", "6064e3093bbd986a133a9fe4", "6064e3093bbd986a133a9fce", "6064e3093bbd986a133a9fe2"]


},

{
    appName: "YouTube",
    appLogo: "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c545.png",
    appDescription: "YouTube is an American online video-sharing platform headquartered in San Bruno, California.",
    appCategory: "News/Media",
    proprietaryCompany: "6064f812d68b837716ee8d9f",
    technology:["6064e3093bbd986a133a9fc9", "6064e3093bbd986a133a9fd0", "6064e3093bbd986a133a9fcd", "6064e3093bbd986a133a9fcb", "6064e3093bbd986a133a9fe4", "6064e3093bbd986a133a9fd4", "6064e3093bbd986a133a9fd8", "6064e3093bbd986a133a9fd9", "6064e3093bbd986a133a9fda"]

},

{
    appName: "Google",
    appLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png",
    appDescription: "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",
    appCategory: "Search",
    proprietaryCompany: "6064f812d68b837716ee8da1",
    technology:["6064e3093bbd986a133a9fc9", "6064e3093bbd986a133a9fd7","6064e3093bbd986a133a9fd0" , "6064e3093bbd986a133a9fcd","6064e3093bbd986a133a9fcb" ,"6064e3093bbd986a133a9fe4" , "6064e3093bbd986a133a9fd4","6064e3093bbd986a133a9fd8" , "6064e3093bbd986a133a9fd9"]

},
{
    appName: "Pinterest",
    appLogo: "https://www.evasionen2cv.com/wp-content/uploads/2016/03/Pinterest-Logo.png",
    appDescription: "Pinterest is an American image sharing and social media service designed to enable saving and discovery of information on the internet using images and, on a smaller scale, animated GIFs and videos, in the form of pinboards.",
    appCategory: "Social Media",
    proprietaryCompany: "6064f812d68b837716ee8da2",
    technology:["6064e3093bbd986a133a9fc9", "6064e3093bbd986a133a9fcb", "6064e3093bbd986a133a9fde", "6064e3093bbd986a133a9fe2", "6064e3093bbd986a133a9fe1"]

},
{
    appName: "General Motors",
    appLogo: "https://static.dezeen.com/uploads/2021/01/gm-logo-rebrand-electric-vehicles-design_dezeen_2364_col_0-1.gif",
    appDescription: "General Motors Company (GM) is an American multinational corporation headquartered in Detroit that designs, manufactures, markets, and distributes vehicles and vehicle parts, and sells financial services, with global headquarters in Detroit's Renaissance Center.",
    appCategory: "Business",
    proprietaryCompany: "6064f812d68b837716ee8da3",
    technology:["6064e3093bbd986a133a9fcd", "6064e3093bbd986a133a9fd1", "6064e3093bbd986a133a9fc9"]

},
{
    appName: "Apple",
    appLogo: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201810271035",
    appDescription: "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.",
    appCategory: "Productivity",
    proprietaryCompany: "6064f812d68b837716ee8da4",
    technology:["6064e3093bbd986a133a9fcd", "6064e3093bbd986a133a9fcb", "6064e3093bbd986a133a9fe4", "6064e3093bbd986a133a9fcc", "6064e3093bbd986a133a9fce", "6064e3093bbd986a133a9fd2"]

},
{
    appName: "IBM",
    appLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1000px-IBM_logo.svg.png",
    appDescription: "International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York, with operations in over 170 countries.",
    appCategory: "Productivity",
    proprietaryCompany: "6064f812d68b837716ee8da5",
    technology:["6064e3093bbd986a133a9fe4", "6064e3093bbd986a133a9fd3", "6064e3093bbd986a133a9fcf"]

},
{
    appName: "Amazon",
    appLogo: "https://i.pinimg.com/originals/08/5f/d8/085fd8f7819dee3b716da73d3b2de61c.jpg",
    appDescription: "Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    appCategory: "Shopping",
    proprietaryCompany: "6064f813d68b837716ee8da6",
    technology:["6064e3093bbd986a133a9fe4", "6064e3093bbd986a133a9fc9", "6064e3093bbd986a133a9fcd", "6064e3093bbd986a133a9fce", "6064e3093bbd986a133a9fcf"]

},
{
    appName: "Fannie Mae",
    appLogo: "https://media.glassdoor.com/sqll/247/fannie-mae-squarelogo-1462205683111.png",
    appDescription: "The Federal National Mortgage Association (FNMA), commonly known as Fannie Mae, is a United States government-sponsored enterprise (GSE) and, since 1968, a publicly traded company.",
    appCategory: "Business",
    proprietaryCompany: "6064f813d68b837716ee8da7",
    technology:["6064e3093bbd986a133a9fe4", "6064e3093bbd986a133a9fcb", "6064e3093bbd986a133a9fce"]

},
{
    appName: "HP",
    appLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png",
    appDescription: "The Hewlett-Packard Company, commonly shortened to Hewlett-Packard or HP, was an American multinational information technology company headquartered in Palo Alto, California, that developed and provided a wide variety of hardware components, as well as software and related services to consumers, small and medium-sized businesses (SMBs) and large enterprises, including customers in the government, health and education sectors.",
    appCategory: "Utilities",
    proprietaryCompany: "6064f813d68b837716ee8da8",
    technology:["6064e3093bbd986a133a9fd0", "6064e3093bbd986a133a9fcd", "6064e3093bbd986a133a9fcb"]

}

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



AppsModel.create(apps)
    .then((dbRes) => {
        console.log(dbRes);
    })
    .catch((error) => {
        console.log(error);
    });

    // mongoose.connection.close();


