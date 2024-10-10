const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    img: { type: String, required: true },
    title: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
