// database collection
// i.e. models
const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }
});

export default mongoose.models.habit || mongoose.model('Habit', habitSchema);