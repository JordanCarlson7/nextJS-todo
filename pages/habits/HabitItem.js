import Link from "next/Link";
import classes from "./HabitItem.module.css";

const HabitItem = (props) => {
  const date = new Date(props.item?.state.lastUsed);

  return (
    // ${key}<
    <div>
      <h1 className={classes.listItem}>
        {props.item?.state.checkRate}
        <Link
          href={{
            // pathname: `/habits/${props.item?._id}`,
            pathname: '/habits/[HabitDetail]',
            query: { 
              HabitDetail: `${props.item?._id}`,
              habit: JSON.stringify(props.item) },
          }}
          as={`habits/${props.item?.name}`}
        >
          {props.item?.name}
        </Link>
        {/* {props.item?.frequency} */}
        {props.item?.goal}
        {/* {props.item?.isPositive} */}
        {/* {props.item?.color} */}
        <ul>
          {/* <li>{props.item?.state.checkedRate}</li> */}
          <li>{date.toDateString()}</li>
          {/* <li>{props.item?.state.isCompleted}</li> */}
        </ul>
      </h1>
    </div>
  );
};

export default HabitItem;
