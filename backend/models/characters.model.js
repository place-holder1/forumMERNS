import mongoose from 'mongoose';

const characterSchema = new mongoose.Schema({
    character: {
        type: String,
        required: true,
        unique: true,
    },
    imageUrl: {
        type: String,
        required: true,
    }
    }, {
    timestamps: true, // createdAt, updatedAt
});

const Character = mongoose.model('Character', characterSchema);
export default Character;