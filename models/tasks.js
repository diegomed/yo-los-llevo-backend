import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: String,
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

export default mongoose.model('Task', taskSchema);