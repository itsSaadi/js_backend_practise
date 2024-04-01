import mongoose from "mongoose";
import { Category } from "./category.models";



const productsScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }, description: {
        type: String,
        required: true,
    }, image: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        default: 0
    }, stock: {
        type: Number,
        required: true,
        default: 0
    },
    ratings: {
        type: Number,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }, owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
}, { timestamps: true })

export const Products = new mongoose.model('Products', productScheme)