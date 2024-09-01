import app from "./app.js"
import dotenv from "dotenv";
import connectDB from "./db/DbConnect.js"
import { PORT } from "./constants.js";

dotenv.config({
    path: './.env'
})

// call the database connection method then handle cases when it connected successfully then run the server
// else handle the database connection failed case
connectDB() // it return a promise which are handeld using chaining methods
.then(() => {
    // if server connection failed the application will handle error
    app.on("error", (error) => {
        console.error("Server connection failed !");
        throw error 
    })

    // if no error found then start the server
    app.listen(PORT, () => {
        console.log(`Server is running at: http://localhost:${PORT}`);
        
    })
})

.catch((err) => {
    console.error("MongoDB Connection failed", err)
    process.exit(1)
})

