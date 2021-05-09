import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
  accepted: {
    type: Boolean,
    default: false,
  },
  date: {
    type: String,
    required: true,
  },
})

export default mongoose.model("User", userModel)