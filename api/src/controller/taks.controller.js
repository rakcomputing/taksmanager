const getDatabase = require("../system/db");

const getList = async (req, res) => {
  const database = getDatabase();
  if (!database) {
    return res.status(500).send("Database connection not established");
  }

  try {
    const collection = database.collection("collect_taks");
    const result = await collection.find({}).toArray();
    res.json({
      result: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data");
  }
};
const addNews = async (req, res) => {
  const { dec, status } = req.body;

  if (!dec || !status) {
    return res
      .status(400)
      .send("Missing required fields: title, content, author");
  }

  const database = getDatabase();
  if (!database) {
    return res.status(500).send("Database connection not established");
  }

  try {
    const collection = database.collection("collect_taks");
    const taksParam = { dec, status };
    const result = await collection.insertOne(taksParam);
    res.status(201).send(result.ops[0]); // Return the newly created news item
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding news");
  }
};
module.exports = {
  getList,
  addNews,
};
