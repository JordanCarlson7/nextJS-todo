import Link from "next/Link";
import { useState } from "react";
import { Fragment } from "react/cjs/react.development";
import HabitEdit from "../../components/habitEdit";
import classes from "./HabitItem.module.css";

const HabitItem = (props) => {
  const date = new Date(props.item?.state.lastUsed);
  const [item, setItem] = useState(props.item);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleClick = () => {
    let tempItem = item;
    tempItem.state.checkRate += 1;
    setItem(tempItem);
  };

  const habitDetailToggle = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    // ${key}<
    <div className={classes.listItem}>
      {!isEditMode && (
        <div
          className={
            item.state.checkRate > 0
              ? item.state.checkRate >= item.goal
                ? classes.done
                : classes.working
              : classes.inactive
          }
        >
          <h3 className={classes.checkRate} onClick={handleClick}>
            {item?.state.checkRate}
          </h3>
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
          <button type="button" onClick={habitDetailToggle}>
            Expand
          </button>
        </div>
      )}

      {isEditMode && (
        <Fragment>
          <HabitEdit habit={props.item} toggle={{habitToggle: habitDetailToggle}}></HabitEdit>

          <button type="button" onClick={habitDetailToggle}>
            {isEditMode? "Close" : "Expand"}
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default HabitItem;
