import mongoose from 'mongoose';
import Counter from './counters.model.js'; // Counters

const categorySchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    // This is not needed when putting in postman
  },
  category: {
    type: String,
    index: true,
  },
  description: {
    type: String,
  }
});

// Before saving, assign auto-increment ID
categorySchema.pre('save', async function (next) {
  const doc = this;
  
  if (doc.isNew) {
    try {
      const counter = await Counter.findByIdAndUpdate(
        { _id: 'category' },
        { $inc: { sequence_value: 1 } },
        { new: true, upsert: true }
      );

      doc.id = counter.sequence_value;
      next();
    } catch (err) {
      console.error("Error in pre-save increment:", err);
      next(err);
    }
  } else {
    next();
  }
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
