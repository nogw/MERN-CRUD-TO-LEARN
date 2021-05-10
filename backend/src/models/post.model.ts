import mongoose from 'mongoose'
const Schema = mongoose.Schema

const postModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
  accepted: {
    type: Schema.Types.Mixed,
    default: "await",
  },
  date: {
    type: String,
    required: true,
  },
})

export default mongoose.model("Post", postModel)