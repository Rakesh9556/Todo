import mongoose from "mongoose";
import { DB_NAME, DB_URI } from "../constants.js";

const connectDB = async () => {
    try {
        // create a connection instance to establish the conneection with mongodb database using mongoose
        const connectionInstance = await mongoose.connect(`${DB_URI}/${DB_NAME}`)

        // connectionInstance.connection.host: this is used to know where our database is hosted 
        console.log(`\n MongoDB connected successfully and hosted at: ${connectionInstance.connection.host}`);
        
    }
    catch(err) {
        console.error("MongoDB connection failed", err)
        // 1 is called the exit code which means process ended with an error
        // similarly 0 means the process ended successfully without an error
        // no argument means it by default assume 0
        process.exit(1) 
    }
}

export default connectDB