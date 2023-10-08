import mongoose from "mongoose"

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://lukasmitlener:q0LAjSuUqHNXGlLs@cluster0.fdmczyy.mongodb.net/react_native_todo?retryWrites=true&w=majority"
    )
    if (connection) {
      console.log("Connection established")
    }
  } catch (error) {
    console.log("error in connectToDatabase", error)
    throw error
  }
}

export default connectToDatabase