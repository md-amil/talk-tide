import mongoose from "mongoose";
import { conversationController } from "../controllers";
  mongoose.Promise = global.Promise;

const mongoURI = "mongodb://localhost:27017/talkTide";
mongoose
  .connect(mongoURI, {
    // useNewUrlParser: true,
	// useUnifiedTopology: true,
	// useCreateIndex: true,
	// useFindAndModify: false
  })
  .then(() => console.log("Successfully connect to MongoDB.", mongoURI))
  .catch((err: any) => {
    console.error("Connection error", err);
    process.exit();
  });

  const connection = mongoose.connection;
export default connection;