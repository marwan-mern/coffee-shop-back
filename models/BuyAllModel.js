import mongoose from 'mongoose';

// const buyallSchema = mongoose.Schema({
//     Name: String,
//     Amount: Number,
//     Price:Number,
//     Date:Date
// },{
//     capped:{size:4000000,max:80000}
// })

const buyallSchema = mongoose.Schema({
    TableNumber: Number,
    orders:{
        uniqueIds:Array,
        types:Array,
        quantities:Array,
        prices:Array
    },
    TotalCost:Number,
    Date:Date
},{
    capped:{size:4000000,max:80000}
})

const buyalls = mongoose.model('buyalls', buyallSchema);

export default buyalls;