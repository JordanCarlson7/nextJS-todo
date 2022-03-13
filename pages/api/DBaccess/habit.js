import connectDB from '../../../middleware/mongodb';
import Habit from '../../../models/habit';


const handler = async (req, res, next) => {
  /**
   * CREATE HABIT ROUTE
   */
    if (req.method === 'POST') {
      // Check if body has all the data provided
      const { name, goal, isPositive, color, state } = req.body;
      console.log(name, goal, isPositive, color, state)

      if (name) {
          try {
            const habit = new Habit({
              name,
              goal,
              isPositive,
              color,
              state
            });
            // Add a new habit
            const habitCreated = await habit.save();
            return res.status(200).send(habitCreated);
          } catch (error) {
            return res.status(500).send(error.message);
          }

        } else {
          res.status(422).send('data_incomplete');
        }

    /**
     * GET HABITS ROUTE
     */
    } else if (req.method === 'GET'){
      Habit.find()
      .then(habits => {
        console.log(habits);
        res.json(habits);
      })
      .catch(err => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        res.json(error);
      });

      /**
      * DELETE ROUTE
      */
    } else if(req.method === "DELETE"){
      const habitId = req.id;
      console.log(habitId);
      let deleteQuery = { _id: habitId };
      await Habit.findById(habitId).then((doc) => {
         if (doc == null) {
           console.log(habitId)
            res.json({ message: "Habit was not found." });
            return;
         } else {
            Habit.deleteOne(deleteQuery, function (err, obj) {
               if (err) throw err;
            });
            res.json({ message: "Habit was deleted." });
            return;
         }
      });}

   /**
   * Update HABIT ROUTE
   */
    else if (req.method === 'PATCH') {
      // Check if body has all the data provided
      const { _id, name, goal, isPositive, color, state } = req.body;
      console.log(_id, name, goal, isPositive, color, state)

      if (name) {
          try {
            const habit = {
              name,
              goal,
              isPositive,
              color,
              state
            }
            await Habit.findByIdAndUpdate(_id, habit)
            .then(() => res.status(200).send("updated habit"))
            .catch((err) => {
               console.log(err);
               res.send(err.statusCode, err.message);
            });
          } catch (error) {
            return res.status(500).send(error.message);
          }

        } else {
          res.status(422).send('data_incomplete');
        }
    } else {
      res.status(422).send('req_method_not_supported');
    }
  };
  
  export default connectDB(handler);