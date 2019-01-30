const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    userID: String,
    reason: String,
    rUsername: String,
    rUserID: String,
    time: String    
});

module.exports = mongoose.model("Report", reportSchema);