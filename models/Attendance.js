const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AttendanceSchema = new Schema({
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

const Attendance = mongoose.model('Attendance', AttendanceSchema);

module.exports = Attendance;

// module.exports = User = mongoose.model("users", AttendanceSchema);