import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    text:{
      type: String,
      required:true,
      trim:true,
    },
    
}
)

export default mongoose.model('Todo', TodoSchema)
