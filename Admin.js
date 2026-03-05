import mongoose from "mongoose";
export default mongoose.model("Admin",{
 username:String,
 password:String
});