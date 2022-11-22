import tablesModel from "../models/tablesModel.js"


export const getTables =async (req, res) => {
    try {
        const Tables = await tablesModel.find();
        res.status(200).json(Tables)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const AddOrderToTable =async (req, res) => {
    const { orders , empty , TotalCost } = req.body;
    const { TableNumber } = req.params;

    try {
        const newOrder = await tablesModel.findOneAndUpdate({uniqueId:TableNumber.toString()},{ orders:orders , empty:empty , TotalCost:TotalCost}, { new: true });
        res.status(201).json(newOrder)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}