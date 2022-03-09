import Link from "next/Link";
import classes from "./HabitItem.module.css";

const HabitItem = (props) => {
  return (
    // ${key}<
    <div>
      <h1 className={classes.listItem}>
        <input type="checkbox" className={classes.toggle}></input>
        <Link href={`/habits/${props.id}`}>{props.item?.name}</Link>
        {/* {props.item?.frequency} */}
        {props.item?.goal}
        {/* {props.item?.isPositive} */}
        {/* {props.item?.color} */}
        <ul>
          {/* <li>{props.item?.state.checkedRate}</li> */}
          <li>{props.item?.state.lastUsed.toString()}</li>
          {/* <li>{props.item?.state.isCompleted}</li> */}
        </ul>
      </h1>
    </div>
  );
};

export default HabitItem;
