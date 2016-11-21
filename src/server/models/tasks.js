import mongoose, {Schema} from 'mongoose';

const TaskSchema = new Schema({
    text: String,
    completed: {
        type: Boolean,
        default: false,
    },
    private: {
        type: Boolean,
        default: false,
    },
    dateAdded: {
        type: 'Date',
        default: Date.now,
        required: true,
    }
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    },
});

const Task = mongoose.model('Task', TaskSchema);
export default Task;
