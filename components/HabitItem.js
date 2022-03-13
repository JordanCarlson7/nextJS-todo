import Link from "next/Link";
import { useState } from "react";
import { Fragment } from "react/cjs/react.development";
import HabitEdit from "./habitEdit";
import classes from "./HabitItem.module.css";

const HabitItem = (props) => {
  const date = new Date(props.item?.state.lastUsed);
  // const habit = props.item;
  const [item, setItem] = useState(props.item);
  const [checkRate, setCheckRate] = useState(props.item.state.checkRate);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleClick = () => {
    let tempItem = item;
    
    console.log('item pre:',tempItem);
    tempItem.state.checkRate += 1;
    
    console.log('item updating:',tempItem);
    setItem(tempItem);
    console.log('item updated:',tempItem);
    setCheckRate(tempItem.state.checkRate); //would not update page without this state variable
    console.log('item updated after:',tempItem);
    
    fetch("https://xenodochial-noether-1e417b.netlify.app/api/DBaccess/habit", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: tempItem?._id,
        name: tempItem?.name,
        goal: tempItem?.goal,
        isPositive: tempItem?.isPositive,
        state: {
          checkRate: tempItem.state.checkRate,
          lastUsed: Date.now(),
          isComplete: tempItem?.state.isComplete,
        },
      }),
    });
  //Submit data code
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
            {/* {item?.state.checkRate} */}
            {checkRate}
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
          <div className="form_field">
          <button type="button" className="edit-btn" onClick={habitDetailToggle}>
            Edit
          </button>
          </div>
        </div>
      )}

      {isEditMode && (
        <Fragment>
          <HabitEdit habit={props.item} toggle={{habitToggle: habitDetailToggle}}></HabitEdit>

          <button type="button" className="btn" onClick={habitDetailToggle}>
            {isEditMode? "Close" : "Expand"}
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default HabitItem;
