const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

const username  ='test' ;
const password = 'qdRXV1DgEgtRYpLn'; 


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${username}:${password}@cluster0.vs7xa52.mongodb.net/?retryWrites=true&w=majority`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// Add the cors middleware before your API routes
app.use(cors());

let obj = [
  { name: "John", age: 30, city: "New York" },
  { name: "Kaan", age: 60, city: "İzmir" },
  { name: "Test", age: 40, city: "İstn" },
  { name: "AA", age: 10, city: "qweqwe" },
  { name: "BB", age: 20, city: "asdsadas" },
];

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: obj,
      message: "Başarılı",
    })
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
