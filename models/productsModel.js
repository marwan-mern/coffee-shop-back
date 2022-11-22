import mongoose from 'mongoose';

// var combination = new Schema({
//     ids:[Array],
//     Quantities:Array
// })

const productSchema = mongoose.Schema({
    uniqueId:String,
    Name: String,
    type:String,
    Mix:Boolean,
    default:Number,
    QuantityUnit:String,
    Quantity: Number,
    QuantityOverMonth:Number,
    UpdatedToday:Boolean,
    Price:Number,
    combination:{
        ids:Array,
        Quantities:Array
    }
})

const products = mongoose.model('products', productSchema);

export default products;