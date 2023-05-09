const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

const mongoose = require("mongoose");

const username ='TEST' ;
const password = 'TEST'; 

async function main() {
  const url =
    `mongodb+srv://${username}:${password}@cluster0.cxaro1z.mongodb.net/?retryWrites=true&w=majority`;
  const client = new mongoose(url);
  try {
    await client.connect();
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

// Add the cors middleware before your API routes
app.use(cors());

let aa = [1, 2, 3, 4, 5, 6];

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: aa,
      message: "Başarılı",
    })
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
