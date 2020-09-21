// database collection
// i.e. models
const mongoose = require('mongoose');

export const habitSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }
});

export default mongoose.model('Habit', habitSchema);
// module.exports = mongoose.model('Habit', habitSchema);