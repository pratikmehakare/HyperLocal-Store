const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    username:{
        type:String,
        required:false
    }
},{timestamps:true})

const Order = mongoose.model("Order",orderSchema);
module.exports = Order;