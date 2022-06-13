const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5}
}, {
    timestamps: true
});

const videoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    length: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    reviews: [reviewSchema]
},{
        timestamps: true
    });

module.exports = mongoose.model('Video', videoSchema);