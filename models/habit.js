import mongoose from 'mongoose';
var Schema = mongoose.Schema;

let habit = new Schema({
  name: {
    type: String,
    required: true
  },
  goal: {
    type: Number,
    required: true
  },
  isPositive: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: Date.now
  },
  state: {
    checkRate: {
          type: Number,
          default: 0
    },
    lastUsed: {
        type: Date,
        default: new Date()
    },
    isComplete: {
        type: Boolean,
        default: false
    }
  }
});

mongoose.models = {};

var Habit = mongoose.model('Habit', habit);

export default Habit;