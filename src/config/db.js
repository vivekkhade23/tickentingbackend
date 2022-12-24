const mongoose = require("mongoose")
const DbConnect = () => {
    return mongoose.connect("mongodb+srv://Vivekkhade:vivek@cluster0.czgoiwd.mongodb.net/mock15?retryWrites=true&w=majority")
}
module.exports = DbConnect