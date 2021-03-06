const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    reviewerId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        // required: false 
    },
    stylistId: {
        type: Schema.Types.ObjectId,
        ref: "stylists",
        // required: false 
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: false
    }
}, {
    timestamps: true
});


module.exports = Review = mongoose.model('Review', ReviewSchema);