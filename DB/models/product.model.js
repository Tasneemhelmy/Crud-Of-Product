import mongoose, { Types } from "mongoose";

const ProductSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title Is Required"],
        trim:true,
        unique:[true,"Title is unique"],
        maxlength:[25,"Title should be less than 25 characters"],
        minlength:[2,"Title should be greater than 2 characters"]
    },
    description:{
        type:String,
        required:[true,"Title Is Required"],
        trim:true
    },
    price:{
        type:Number,
        required:[true," Price Is Required"],
        min:[0,"min price is 0"]
    }
    
},{   
    timestamps:true,
    versionKey:false,
    toJSON:{virtuals:true}
})
// ProductSchema.post('find', function(docs) {
//     if (Array.isArray(docs)) {
//         docs.forEach(doc => {
//             if (doc.mainImage) {
//                 doc.mainImage = 'http://localhost:3000/uploads/product/' + doc.mainImage;
//             }

//             if (doc.coverImage && doc.coverImage.length) {
//                 doc.coverImage = doc.coverImage.map(element => `http://localhost:3000/uploads/product/${element}`);
//             }
//         });
//     } else {
//         if (docs.mainImage) {
//             docs.mainImage = 'http://localhost:3000/uploads/product/' + docs.mainImage;
//         }

//         if (docs.coverImage && docs.coverImage.length) {
//             docs.coverImage = docs.coverImage.map(element => `http://localhost:3000/uploads/product/${element}`);
//         }
//     }
// });

// ProductSchema.virtual('review',{
//     ref:'Review',
//     localField:'_id',
//     foreignField:'product'
// })
// ProductSchema.pre(/find/,function(){
//     this.populate('review')
// })
const Product=mongoose.model("Product",ProductSchema);  

export default Product