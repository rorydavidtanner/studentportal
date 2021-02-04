const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const FeedbackSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);

module.exports = Feedback;

// module.exports = User = mongoose.model("users", FeedbackSchema);