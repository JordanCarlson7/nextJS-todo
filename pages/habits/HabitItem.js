import  Link  from "next/Link";

const HabitItem = (props) => {
  return (
    // ${key}
    <Link href={`/habits/${props.id}`}>
      <h1>
        {props.item?.name}
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
    </Link>
  );
};

export default HabitItem;
