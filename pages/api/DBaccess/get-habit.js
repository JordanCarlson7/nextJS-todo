import connectDB from '../../../middleware/mongodb';
import Habit from '../../../models/habit';


const handler = async (req, res, next) => {
    const id = req.body.id
    console.log(id)
    
    Habit.findById(id)
    .then(habit => {
      console.log(habit);
      res.json(habit);
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      res.json(error.message);
    });
}

export default connectDB(handler);