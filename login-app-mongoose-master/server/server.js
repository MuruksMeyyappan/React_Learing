const router = require("express").Router();
const mongoose = require("mongoose");
const authRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

const uri = `mongodb+srv://${process.env.MONGO_ATLAS_USERNAME}:${process.env.MONGO_ATLAS_PASSWORD}@${process.env.MONGO_ATLAS_URI}/${process.env.MONGO_ATLAS_DB}?retryWrites=true&w=majority`;

mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) {
      console.log("Connection Err: ", err);
      throw err;
    }
    console.log("Connection successful");
  }
);

router.use("/auth", authRoutes);
router.use("/", postRoutes);

module.exports = router;
