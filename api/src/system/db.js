const { MongoClient } = require("mongodb");

const connectionString =
  "mongodb+srv://devcomputing:rak9999@cluster0.gy1nlzw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const databaseName = "db_taks";
let database;

const connectToDatabase = async () => {
  try {
    const client = await MongoClient.connect(connectionString, {
      useNewUrlParser: true, //  use  url correctly
      useUnifiedTopology: true,
    });
    database = client.db(databaseName);
    console.log("Connected to MongoDB database");
  } catch (err) {
    console.error("Failed to connect to the database", err);
  }
};

connectToDatabase();

module.exports = () => database;
