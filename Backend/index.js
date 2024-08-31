import express from "express";
import dotenv from "dotenv";

dotenv.config({
    path: './.env'
})

const app = express()

app.get('/', (req, res) => {
    res.send("To do app initialized")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running at http//localhost:${PORT}`)
})


