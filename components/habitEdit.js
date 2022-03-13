// import classes from "../pages/habits/HabitItem.module.css";
import { useRef } from "react";
const HabitEdit = (props) => {
  console.log(props?.habit);
  const habit = props?.habit;
  const habit_id = JSON.stringify(habit?._id) | null;

  const goalInput = useRef(null);
  const nameInput = useRef(null);
  const isPositiveInput = useRef(null);
  const isNegativeInput = useRef(null);
  const checkRateInput = useRef(null);
  const isCompleteInput = useRef(null);
  const isInCompleteInput = useRef(null);

  const onDelete = () => {
    fetch("http://localhost:3000/api/DBaccess/habit", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ habitId: habit?._id }),
    });
  };

  const submitFormHandler = (event) => {
    event.preventDefault(); // or we could reload the page and get new props from updated database

    const goal = goalInput.current.value; //text
    const name = nameInput.current.value; //number
    const isPositive = isPositiveInput.current.value; //radio button
    const isNegative = isNegativeInput.current.value; //radio button
    const checkRate = checkRateInput.current.value; //number
    const isComplete = isCompleteInput.current.value; //radio button
    // const isInComplete = isInCompleteInput.current.value; //radio button

    if (props?.habit) {
      //editing current existing
      // tempHabit._id = habit_id;
      // console.log(tempHabit)
      fetch("http://localhost:3000/api/DBaccess/habit", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: habit?._id,
          name: name,
          goal: goal,
          isPositive: isPositive ? isPositive : isNegative,
          state: {
            checkRate: checkRate ? checkRate : 0,
            lastUsed: Date.now(),
            isComplete: isComplete,
          },
        }),
      });
    } else {
      // New Habit
      fetch("http://localhost:3000/api/DBaccess/habit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          goal: goal,
          isPositive: isPositive ? isPositive : isNegative,
          state: {
            checkRate: checkRate ? checkRate : 0,
            lastUsed: Date.now(),
            isComplete: isComplete,
          },
        }),
      });
    }
    //Submit data code

    props.toggle.habitToggle(); // calls the toggle edit state button in parent element (function passed in through props)
  };

  return (
    <div>
      <form className="" onSubmit={submitFormHandler}>
        <fieldset>
          <legend>
            <h2>General Info</h2>
          </legend>
          <div className="form__field">
            <label htmlFor="habit-name">Name: </label>
            <input
              className="form__input"
              type="text"
              id="habit-name"
              defaultValue={habit?.name}
              ref={nameInput}
            />
          </div>

          <div className="form__field">
            <label>Goal: </label>
            <input
              className="form__input"
              type="number"
              defaultValue={habit?.goal ? habit?.goal : 0}
              min="1"
              step="1"
              ref={goalInput}
            />
          </div>
          <div className="form__field">
            <label>Completed</label>
            <input
              className="form__input"
              type="number"
              defaultValue={habit?.state.checkRate}
              min="0"
              step="1"
              ref={checkRateInput}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Habit type</h2>
          </legend>

          <div className="form__field">
            <label>Positive</label>
            <input
              className="form__input"
              type="radio"
              name="isPositive"
              defaultValue={true}
              checked={habit?.isPositive ? "checked" : null}
              ref={isPositiveInput}
            />
          </div>

          <div className="form__field">
            <label>Negative</label>
            <input
              className="form__input"
              type="radio"
              name="isPositive"
              defaultValue={false}
              checked={!habit?.isPositive ? "checked" : null}
              ref={isNegativeInput}
            />
          </div>
        </fieldset>

        {/* <label>Color</label> */}
        {/* <select type=""> {habit?.color}</select> */}

        {/* <h2>Status:</h2> */}
        <hr />
        <div className="form__field">
          <label>Complete</label>
          <input
            className="form__input"
            type="checkbox"
            name="isComplete"
            defaultValue={true}
            checked={habit?.state.isComplete ? "checked" : null}
            ref={isCompleteInput}
          />
        </div>
        {/* 
        <div className="form__field">
          <label>Incomplete</label>
        <input
          className="form__input"
          type="radio"
          name="isComplete"
          defaultValue={false}
          checked={!habit?.state.isComplete ? "checked" : null}
          ref={isInCompleteInput}
        />
        </div> */}

        <div className="form__field">
          <button className="btn" type="submit">
            Update
          </button>
          <button className="btn" onClick={onDelete}>
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};
export default HabitEdit;
