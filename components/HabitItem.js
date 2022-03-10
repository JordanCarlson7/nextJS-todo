import Link from "next/Link";
import { useState } from "react";
import classes from "./HabitItem.module.css";

const HabitItem = (props) => {
  const date = new Date(props.item?.state.lastUsed);
  const [item, setItem] = useState(props.item);

  const handleClick = () => {
    let tempItem = item;
    tempItem.state.checkRate += 1;
    setItem(tempItem);
  };

  return (
    // ${key}<
    <div className={classes.listItem}>
      <div className={(item.state.checkRate > 0 ? item.state.checkRate >= item.goal ? classes.done : classes.working : classes.inactive)}>
        <h3 className={classes.checkRate} onClick={handleClick}>{item?.state.checkRate}</h3>
        <p className={classes.title}>
          <Link
            href={{
              // pathname: `/habits/${props.item?._id}`,
              pathname: "/habits/[HabitDetail]",
              query: {
                HabitDetail: `${props.item?._id}`,
                habit: JSON.stringify(props.item),
              },
            }}
            as={`habits/${props.item?.name}`}
          >
            {props.item?.name}
          </Link>
          <p className={classes.date}>Started: {date.toDateString()}</p>
        </p>
      </div>
    </div>
  );
};

export default HabitItem;
