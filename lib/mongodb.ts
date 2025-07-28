import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI as string;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGO_URI) {
  throw new Error("Please add your MONGO_URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable so we don't create a new connection for every hot reload
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  // In production, it's best to not use a global variable
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;