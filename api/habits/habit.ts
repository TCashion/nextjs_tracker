// Database collection
import mongoose, { Schema } from 'mongoose';

export const habitSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

export default mongoose.models.Habit || mongoose.model('Habit', habitSchema);