
const HabitDetail = (props) => {
  return (
    <div>
     <h1>
        {props.item?.name}
        {props.item?.frequency}
        {props.item?.goal}
        {props.item?.isPositive}
        {props.item?.color}
        <ul>
          <li>{props.item?.state.checkedRate}</li>
          <li>{props.item?.state.lastUsed.toString()}</li>
          <li>{props.item?.state.isCompleted}</li>
          </ul>
      </h1>
    </div>
  );
};

export default HabitDetail;
