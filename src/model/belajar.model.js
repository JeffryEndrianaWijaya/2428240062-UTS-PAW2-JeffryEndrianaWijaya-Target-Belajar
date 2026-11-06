import mongoose from 'mongoose'
const schema = new mongoose.Schema(
  {
    topic: {
        type: String,
        required: true
      
    },
    target_hours: {
        type: Number,
        required: true
    },
    completed_hours: {
        type: Number,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    }
  }
)
const BelajarModel = mongoose.model('belajar', schema)
export default BelajarModel