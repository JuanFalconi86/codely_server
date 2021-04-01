require("dotenv").config();
require("../config/dbConnection");
const TechnologyModel = require("../models/TechnologyModel")

const someTechnologies = [
  {
    name: "Javascript",
    category: "Front-End",
    logo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    name: "MongoDB",
    category: "Database",
    logo:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-mongodb/events/mon.png",
  },
  {
    name: "Python",
    category: "Back-End",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",
  },
  {
    name: "Perl",
    category: "Back-End",
    logo:
    "https://cdn.worldvectorlogo.com/logos/perl-programming-language.svg",
  },
  {
    name: "C++",
    category: "Back-End",
    logo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
  },
  {
    name: "Ruby",
    category: "Back-End",
    logo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png",
  },
  {
    name: "Swift",
    category: "Back-End",
    logo:
    "https://images.squarespace-cdn.com/content/558def25e4b0fc259f066636/1533762221470-KIKXY2VN1CIA6IUA3O03/Swift_logo.png?content-type=image%2Fpng",
  },
  {
    name: "C",
    category: "Back-End",
    logo:
    "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
  },
  {
    name: "C#",
    category: "Back-End",
    logo:
    "https://camo.githubusercontent.com/8d56e87edf99e89bfc457cd62462e0b7aae19e6b197b1df5c542d474d8d76f81/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67",
  },
  {
    name: "PHP",
    category: "Back-End",
    logo:
    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/256_Php_logo-512.png",
  },
  {
    name: "Groovy",
    category: "Back-End",
    logo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Groovy-logo.svg/1200px-Groovy-logo.svg.png",
  },
  {
    name: "Go",
    category: "Back-End",
    logo:
    "https://sdtimes.com/wp-content/uploads/2018/02/golang.sh_-490x490.png",
  },
  {
    name: "R",
    category: "Back-End",
    logo:
    "https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/69/formation-langage-r.png",
  },
  {
    name: "Objectif-C",
    category: "Back-End",
    logo:
    "https://apprecs.org/ios/images/app-icons/256/c2/486204866.jpg",
  },
  {
    name: "Typescript",
    category: "Back-End",
    logo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
  },
  {
    name: "Bigtable",
    category: "Back-End",
    logo:
    "https://dbdb.io/media/logos/Cloud_Bigtable.png",
  },
  {
    name: "MariaDB",
    category: "Back-End",
    logo:
    "https://res.cloudinary.com/dsldnzayz/image/upload/v1617210828/mariadb_ukn8g8.png",
  },
  {
    name: "Vitess",
    category: "Back-End",
    logo:
    "https://www.gstatic.com/opensource/project-images/vitess/logo.svg",
  },
  {
    name: "Askell",
    category: "Back-End",
    logo:
    "https://cdn.worldvectorlogo.com/logos/haskell.svg",
  },
  {
    name: "Hack",
    category: "Back-End",
    logo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Hack_%28programming_language%29_logo.svg/1200px-Hack_%28programming_language%29_logo.svg.png",
  },
  {
    name: "XHP",
    category: "Back-End",
    logo:
    "https://res.cloudinary.com/dsldnzayz/image/upload/v1617208772/xhp_kwygpx.png",
  },
  {
    name: "Erlang",
    category: "Back-End",
    logo:
    "https://res.cloudinary.com/dsldnzayz/image/upload/v1617208897/erlang_oj6umy.png",
  },
  {
    name: "Hbase",
    category: "Back-End",
    logo:
    "https://res.cloudinary.com/dsldnzayz/image/upload/v1617211011/hbase-logo_u0dmlx.png",
  },
  {
    name: "Cassandra",
    category: "Back-End",
    logo:
    "https://res.cloudinary.com/dsldnzayz/image/upload/v1617209559/1280px-Cassandra_logo.svg_xysrsu.png",
  },
  {
    name: "Reddis",
    category: "Back-End",
    logo:
    "https://res.cloudinary.com/dsldnzayz/image/upload/v1617209056/reddis_oif8z2.png",
  },
  {
    name: "MySQL",
    category: "Back-End",
    logo:
    "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png",
  },
  {
    name: "Scala",
    category: "Back-End",
    logo:
    "https://www.scala-lang.org/resources/img/frontpage/scala-spiral.png",
  },
  {
    name: "Java",
    category: "Back-End",
    logo:
    "https://www.blockachain.gr/wp-content/uploads/2018/03/java-coffee-cup-logo.png",
  }
];

TechnologyModel.create(someTechnologies)
.then((technology)=>{
    console.log("New Technology added to the DB", technology);
})
.catch((error)=>{
    console.log(error);
})

;