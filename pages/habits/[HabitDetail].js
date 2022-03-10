
export async function getServerSideProps(context) {
  console.log(context.query.habit)
  return {
    props:  {habit: JSON.parse(context.query.habit)}
  }
}

const HabitDetail = (props) => {
  console.log(props.habit)
  const habit = props.habit; 

  return (
    <div className="align">
     <h1>
        {habit?.name}
      </h1>
        <h2>{habit?.goal}</h2>
        {habit?.isPositive}
        {habit?.color}
        <ul>
          <li>{habit?.state.checkRate}</li>
          <li>{habit?.state.lastUsed.toString()}</li>
          <li>{habit?.state.isComplete}</li>
          </ul>
    </div>
  );
};

export default HabitDetail;
