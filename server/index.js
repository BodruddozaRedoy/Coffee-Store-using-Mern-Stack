const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


const app = express()
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
dotenv.config()

app.get("/", (req, res) => {
    res.send("HEllo world")
})


const uri = process.env.DB_USER;

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
    // await client.connect();

    const coffeeCollection = client.db("coffeeDB").collection("coffees")
    const userCollection = client.db("userDB").collection("users")

    app.get("/coffee", async(req, res) => {
      const cursor = coffeeCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })

    app.get("/coffee/:id", async(req, res) => {
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await coffeeCollection.findOne(query)
      res.send(result)
    })

    app.post("/coffee", async(req, res) => {
      const newCoffee = req.body
      const result = await coffeeCollection.insertOne(newCoffee)
      res.send(result)
      console.log(newCoffee);
    })

    app.put("/coffee/:id", async(req, res) => {
      const id = req.params.id
      const filter = {_id: new ObjectId(id)}
      const option = {upsert:true}
      const updatedCoffee = req.body
      const updatedDoc = {
        $set: {
          name: updatedCoffee.name, 
          quantity: updatedCoffee.quantity, 
          supplier: updatedCoffee.supplier, 
          taste: updatedCoffee.taste, 
          details: updatedCoffee.details, 
          photo: updatedCoffee.photo, 
          category: updatedCoffee.category,        }
      }
      const result = await coffeeCollection.updateOne(filter, updatedDoc, option)
      res.send(result)
    })

    app.delete('/coffee/:id', async (req, res) => {
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await coffeeCollection.deleteOne(query)
      res.send(result)
    })

    // User apis 
    app.post('/users', async(req, res) => {
        const user = req.body
        const result = await userCollection.insertOne(user)
        res.send(result)
    })

    app.get('/users', async(req, res) => {
      const cursor = userCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })

    app.delete('/users/:id', async(req, res) => {
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await userCollection.deleteOne(query)
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
