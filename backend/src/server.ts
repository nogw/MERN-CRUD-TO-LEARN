require('dotenv').config()
import express from 'express' 
import mongoose from 'mongoose'
import cors from 'cors'
import router from './router'

const app = express()
const port = process.env.PORT || 8000
const MG_URI = process.env.MG_URI

app.use(cors())
app.use(express.json())
app.use("/", router)

mongoose.connect(MG_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on("error", () => {
  console.error.bind(console, "connection error:")
})

db.once("open", () => {
  console.log("database connect")
})

app.listen(port, () => {
  console.log(`run in ${port}`)
})