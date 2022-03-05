import mongoose from 'mongoose';

const connectDB = handler => async (req, res) => {
    const username = process.env.KAPZUSERNAME;
    const password = process.env.KAPZPASSWORD;
    const MONGODB_URI = `mongodb+srv://${username}:${password}@cluster0.vctnn.mongodb.net/cluster0`

  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(MONGODB_URI, {

  });
  return handler(req, res);
};

//Mongodb Connections
// const username = process.env.KAPZUSERNAME;
// const password = process.env.KAPZPASSWORD;
// const MONGODB_URI = `mongodb+srv://${username}:${password}@cluster0.vctnn.mongodb.net/cluster0`;
// const mongoCon = process.env.mongoCon || MONGODB_URI;

// const store = new MongoDBStore({
//     uri: MONGODB_URI,
//     collection: 'sessions'
//   });



export default connectDB;