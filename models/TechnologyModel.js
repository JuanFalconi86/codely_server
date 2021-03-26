const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const technologySchema = new Schema({
  name: String,
  category: {
    type: String,
    enum: ["Back-End", "Front-End", "Cloud", "Database", "Game Engine"],
  },
  logo: {
    type: String,
    default:
      "https://res.cloudinary.com/daax22fpi/image/upload/v1616693531/Codely/2392376_zqtcda.jpg",
  },
});

const TechnologyModel = mongoose.model("Technology", technologySchema);



module.exports = TechnologyModel;

