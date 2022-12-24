const mongoose = require('mongoose');
let date=Date.now()
const ticketSchema = new mongoose.Schema({
    Category:{ type: String, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    timeStamp:{ type: Number, default: date}
})

const Ticket = mongoose.model("ticket", ticketSchema);

module.exports = Ticket;
