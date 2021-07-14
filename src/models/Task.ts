import { Schema, model, Document, Model } from 'mongoose';

declare interface ITask extends Document {
  fileSizeBytes: number;
  url: string;
}

export interface TaskModel extends Model<ITask> {}

const schema = new Schema({
  fileSizeBytes: { type: Number, required: true },
  url: { type: String, required: true },
});

export default model('Task', schema);
