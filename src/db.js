// db.js

const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://Vivekananda:Vivekananda@4566@cluster0.mjeupdx.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    return client.db(); // Return the database connection
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    throw error;
  }
}

module.exports = connectToDatabase;
