// database collection
// i.e. models

import mongoose, { Schema } from 'mongoose';

export const HabitSchema = new Schema({
    name: {
        type: String, 
        required: true
    }
});

export default mongoose.models.habit || mongoose.model('Habit', HabitSchema);