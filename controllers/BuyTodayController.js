import BuyTodayModel from "../models/BuyTodayModel.js"


export const AddBuymeds = async (req, res) => {
    const { TableNumber , orders , TotalCost , Date} = req.body;

    const newPost = new BuyTodayModel({TableNumber:TableNumber ,orders:orders , TotalCost:TotalCost, Date:Date})
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const GetBuyToday =async (req, res) => {
    try {
        const BuyToday = await BuyTodayModel.find();
        res.status(200).json(BuyToday)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const DeleteBuyToday =async (req, res) => {
    try {
        await BuyTodayModel.deleteMany();
        res.status(200).json(`Deleted`)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}