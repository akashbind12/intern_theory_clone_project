const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config()

module.exports = () => {
  return mongoose.connect(
    `mongodb://akash:akash_123@cluster0-shard-00-00.wwnhq.mongodb.net:27017,cluster0-shard-00-01.wwnhq.mongodb.net:27017,cluster0-shard-00-02.wwnhq.mongodb.net:27017/Interntheory?ssl=true&replicaSet=atlas-13fs7a-shard-0&authSource=admin&retryWrites=true&w=majority`
    // mongodb://akash:<password>@cluster0-shard-00-00.wwnhq.mongodb.net:27017,cluster0-shard-00-01.wwnhq.mongodb.net:27017,cluster0-shard-00-02.wwnhq.mongodb.net:27017/?ssl=true&replicaSet=atlas-13fs7a-shard-0&authSource=admin&retryWrites=true&w=majority
  );
};
