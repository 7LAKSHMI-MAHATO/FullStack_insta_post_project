const mongoose=require("mongoose")

const postSchema= new mongoose.Schema({
    image: String,
    imageId: String,
    caption: String,

    username: {
    type: String,
    required: true
},

    likes :{
        type: Number,
        default: 0
    },
    likedBy: {
        type: [String],
        default: []
    }
    
})



const postModel = mongoose.model("post",postSchema)



module.exports = postModel



