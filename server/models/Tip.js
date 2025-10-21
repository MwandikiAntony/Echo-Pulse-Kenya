import mongoose from 'mongoose';

const tipSchema = new mongoose.Schema({
  text: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Tip', tipSchema);
