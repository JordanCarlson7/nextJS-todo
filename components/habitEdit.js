// import classes from "../pages/habits/HabitItem.module.css";
import { useRef } from "react";
const HabitEdit = (props) => {
  console.log(props?.habit);
  const habit = props?.habit;
  const habit_id = habit?._id | null;

  const goalInput = useRef(null);
  const nameInput = useRef(null);
  const isPositiveInput = useRef(null);
  const isNegativeInput = useRef(null);
  const checkRateInput = useRef(null);
  const isCompleteInput = useRef(null);
  const isInCompleteInput = useRef(null);

  const submitFormHandler = (event) => {
    event.preventDefault(); // or we could reload the page and get new props from updated database
    console.log("submitting", habit_id);

    const goal = goalInput.current.value; //text
    const name = nameInput.current.value; //number
    const isPositive = isPositiveInput.current.value; //radio button
    const isNegative = isNegativeInput.current.value; //radio button
    const checkRate = checkRateInput.current.value; //number
    const isComplete = isCompleteInput.current.value; //radio button
    const isInComplete = isInCompleteInput.current.value; //radio button

    //Submit data code

    props.toggle.habitToggle(); // calls the toggle edit state button in parent element (function passed in through props)
  };

  return (
    <div>
      <form className="align grid" onSubmit={submitFormHandler}>
        <label>Name: </label>
        <input
          className="form__field"
          type="text"
          defaultValue={habit?.name}
          ref={nameInput}
        />

        <label>Goal: </label>
        <input
          className="form__field"
          type="number"
          defaultValue={habit?.goal}
          min="1"
          step="1"
          ref={goalInput}
        />
        <label>Habit type</label>
        <input
          className="form__field"
          type="radio"
          name="isPositive"
          defaultValue={true}
          checked={habit?.isPositive ? "checked" : null}
          ref={isPositiveInput}
        />
        <label>Positive</label>
        <input
          className="form__field"
          type="radio"
          name="isPositive"
          defaultValue={false}
          checked={!habit?.isPositive ? "checked" : null}
          ref={isNegativeInput}
        />
        <label>Negative</label>
        {/* <label>Color</label> */}
        {/* <select type=""> {habit?.color}</select> */}
        <label>Number of times completed</label>
        <input
          className="form__field"
          type="number"
          defaultValue={habit?.state.checkRate}
          min="1"
          step="1"
          ref={checkRateInput}
        />
        <label>Status:</label>
        <input
          className="form__field"
          type="radio"
          name="isComplete"
          defaultValue={true}
          checked={habit?.state.isComplete ? "checked" : null}
          ref={isCompleteInput}
        />
        <label>Complete</label>
        <input
          className="form__field"
          type="radio"
          name="isComplete"
          defaultValue={false}
          checked={!habit?.state.isComplete ? "checked" : null}
          ref={isInCompleteInput}
        />
        <label>Incomplete</label>
        <button className="form__field" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};
export default HabitEdit;
