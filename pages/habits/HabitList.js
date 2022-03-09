import Habit from "../../util/Habit";
import { Frequency } from "../../util/Frequency.enum";
import { Color } from "../../util/Color.enum";
import HabitItem from "./HabitItem";
import { useContext, useEffect } from "react";
import classes from "./HabitList.module.css";
import { Fragment } from "react/cjs/react.production.min";

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
  
  return (
    <Fragment>
      <ul className={classes.list}>
        {habits.map((item, index) => {
          return <HabitItem item={item} key={index}></HabitItem>;
        })}
      </ul>
    </Fragment>
  );
};

export default HabitList;
