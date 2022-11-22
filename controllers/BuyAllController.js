import BuyAllModel from "../models/BuyAllModel.js"


export const AddBuyAllmeds = async (req, res) => {
    const { TableNumber , orders , TotalCost , Date} = req.body;

    const newPost = new BuyAllModel({TableNumber:TableNumber ,orders:orders , TotalCost:TotalCost, Date:Date})
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}