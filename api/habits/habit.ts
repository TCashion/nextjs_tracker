// Database collection
import mongoose, { Schema } from 'mongoose'

const eventSchema: mongoose.SchemaType = new Schema({
    date: {
        type: Date,
        required: true,
        unique: true
    }
});

export const habitSchema: mongoose.SchemaType = new Schema({
    name: {
        type: String,
        required: true,
    },
    events: [eventSchema]
});

export default mongoose.models.Habit || mongoose.model('Habit', habitSchema);