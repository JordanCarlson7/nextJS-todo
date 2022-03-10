import HabitItem from "../../components/HabitItem";
import classes from "./HabitList.module.css";
import { Fragment } from "react/cjs/react.production.min";

const HabitList = ({ habits }) => {
  return (
    <Fragment>
      <h2>My Todo List</h2>
      <ul className={classes.list}>
        {habits.map((item, index) => {
          return <HabitItem item={item} key={index}></HabitItem>;
        })}
      </ul>
      <form>
        <h1>Add A new Task</h1>
      </form>
    </Fragment>
  );
};

export default HabitList;
