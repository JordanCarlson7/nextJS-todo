import Habit from "../../util/Habit";
import HabitItem from "./HabitItem";
import classes from "./HabitList.module.css";
import {  Fragment, useState } from "react";
import HabitEdit from "../../components/habitEdit";

// const data = [
//   new Habit("eaza", Frequency.DAILY, 3, false, Color.RED, {
//     checkedRate: 0,
//     lastUsed: new Date(),
//     isCompleted: false,
//   }),
//   new Habit("jump on trampoline", Frequency.DAILY, 3, false, Color.RED, {
//     checkedRate: 0,
//     lastUsed: new Date(),
//     isCompleted: false,
//   }),
//   new Habit("run", Frequency.DAILY, 3, false, Color.RED, {
//     checkedRate: 0,
//     lastUsed: new Date(),
//     isCompleted: false,
//   }),
//   new Habit("fall over", Frequency.DAILY, 3, false, Color.RED, {
//     checkedRate: 0,
//     lastUsed: new Date(),
//     isCompleted: false,
//   }),
// ];

const HabitList = ({ habits }) => {
  const [newHabit, setNewHabit] = useState(false);
  
  const habitNewToggle = () => {
    setNewHabit(!newHabit);
  };
  
  return ( 
    <Fragment>
      <h2>My Todo List</h2>
      <ul className={classes.list}>
        {habits.map((item, index) => {
          return <HabitItem item={item} key={index} habitsArray={habits}></HabitItem>;
        })}
      </ul>
      <button type="button" onClick={habitNewToggle}>NEW HABIT</button>
      {newHabit && <HabitEdit toggle={{habitToggle: habitNewToggle}} />}
    </Fragment>
  );
};

export default HabitList;
