import mongoose from 'mongoose';



const tablesSchema = mongoose.Schema({
    uniqueId:String,
    orders:{
        uniqueIds:Array,
        types:Array,
        quantities:Array,
        prices:Array
    },
    empty:Boolean,
    TotalCost:Number
})

const tables = mongoose.model('tables', tablesSchema);

export default tables;