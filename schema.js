const mongoose = require('mongoose');
const schema = new mongoose.Schema ({
    user: { type: String, required: true },
    assignment: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    id: { type: String, required: true }
})

const userInfo = mongoose.model('Assignment Information', schema);
module.exports = userInfo;