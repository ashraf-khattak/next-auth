import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connection established");
    });
    connection.on("error", (err) => {
      console.log("MongoDB connection error" + err.message);
      process.exit();
    });
  } catch (error) {
    console.log(
      "🚀 ~ connect error ~ Some thing went Wrong in connecting to DB :",
      error
    );
  }

  // try{
  //     await mongoose.connect(process.env.MONGODB_URI,{
  //         useNewUrlParser: true,
  //         useUnifiedTopology: true,
  //         useCreateIndex: true,
  //         useFindAndModify: false
  //     })
  //     console.log("Connected to MongoDB")
  // }catch(err){
  //     console.log(err)
  // }
}
