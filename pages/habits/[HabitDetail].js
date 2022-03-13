import { signOut } from "next-auth/react";

export async function getServerSideProps(context) {
  // console.log(context.query.habit);
  return {
    props: { habit: JSON.parse(context.query.habit) },
  };
}

const HabitDetail = (props) => {
  console.log(props.habit);
  const habit = props.habit;

  return (
    <div className="habit">
      <header className="habit-header">
        <h1 className="habit-title">{habit?.name}</h1>
        <h2>
          {habit?.state.checkRate}/{habit?.goal}
        </h2>
      </header>
      {/* {habit?.isPositive}
      {habit?.color}
      <ul>
        <li></li>
        <li>{habit?.state.lastUsed.toString()}</li>
        <li>{habit?.state.isComplete}</li>
      </ul> */}
      <div className="habit-footer">
        <button
          className="signout btn"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default HabitDetail;
