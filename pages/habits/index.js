import { Fragment } from "react/cjs/react.production.min";
import HabitList from "./HabitList";

export async function getStaticProps() {
  const req = await fetch("http://127.0.0.1:3000/api/DBaccess/habit");
  const habits = await req.json();
  console.log("DATA", habits);

  return {
    props: { habits },
  };
}

export default function Habit({ habits }) {
  return (
    <Fragment>
      <HabitList habits={habits}></HabitList>
      <button className="signout" onClick={() => signOut()}>
        Sign Out
      </button>
    </Fragment>
  );
}
