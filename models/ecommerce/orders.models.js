import mongoose from "mongoose";


const orderItems = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products"
    },
    quantity: {
        required: true,
        type: Number
    }
})

const addressScheme = new mongoose.Schema({
    houseAddress: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: Number, required: true },


})

const orderSchema = new mongoose.Schema({

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    orderPrice: {
        type: Number,
        default: 0,
    },
    orderItems: [orderItems],
    address: addressScheme,
    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIEVERED"],
        default: "PENDING"
    }

}, { timestamps: true })


export const Orders = new mongoose.model('Orders', orderScheme)