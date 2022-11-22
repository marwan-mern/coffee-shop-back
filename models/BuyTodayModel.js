import mongoose from 'mongoose';

// const buytodaySchema = mongoose.Schema({
//     Name: String,
//     Amount: Number,
//     Price:Number,
//     Date:Date
// })
const buytodaySchema = mongoose.Schema({
    TableNumber: Number,
    orders:{
        uniqueIds:Array,
        types:Array,
        quantities:Array,
        prices:Array
    },
    TotalCost:Number,
    Date:Date
})
const buytodays = mongoose.model('buytodays', buytodaySchema);

export default buytodays;