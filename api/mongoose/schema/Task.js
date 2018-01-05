import { Schema } from 'mongoose';
import mongoose from '../mongoose';

const { String } = Schema.Types;
const TaskSchema = new Schema({
  content: String
});

export default mongoose.model('Task', TaskSchema);
