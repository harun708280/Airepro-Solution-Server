import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  goal: { type: String, required: true },
  type: { type: String, enum: ['weekly', 'monthly'], required: true }
}, { timestamps: true });

export default mongoose.model('Goal', goalSchema);
