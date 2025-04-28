import mongoose from 'mongoose';

// Since MongoDB doesn't support autoIncrements, we gotta do this manually.

const counterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    sequence_value: { type: Number, default: 0 }
});

const Counter = mongoose.model('Counter', counterSchema);

export default Counter;