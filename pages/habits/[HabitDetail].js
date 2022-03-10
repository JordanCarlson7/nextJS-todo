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
    <div>
     <h1>
        {habit?.name}
        {habit?.goal}
        {habit?.isPositive}
        {habit?.color}
        <ul>
          <li>{habit?.state.checkRate}</li>
          <li>{habit?.state.lastUsed.toString()}</li>
          <li>{habit?.state.isComplete}</li>
          </ul>
      </h1>
    </div>
  );
};

export default HabitDetail;
