import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

const globalForMongoose = globalThis as typeof globalThis & {
  mongoose?: MongooseCache;
};

const cached = globalForMongoose.mongoose ?? { conn: null, promise: null };

globalForMongoose.mongoose = cached;

const dbConnect = async () => {
  if (!MONGODB_URI) {
    throw new Error("Missing MONGODB_URI. Add it to .env.local.");
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "fellopers",
      })
      .then((connection) => {
        console.log("MongoDB is connected");
        return connection;
      })
      .catch((error) => {
        cached.promise = null;
        console.error("MongoDB connection failed");
        throw error;
      });
  }

  cached.conn = await cached.promise;

  return cached.conn;
};

export default dbConnect;
