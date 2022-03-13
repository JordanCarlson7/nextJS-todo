import { Fragment } from "react";
import HabitList from "../../components/HabitList";
import { signOut } from "next-auth/react";
import { loadData } from "../../util/load-data";

export async function getServerSideProps() {
  const habits = await loadData();
  return {
    props: { habits },
  };
}

export default function Habit({ habits }) {
  return (
    <Fragment>
      <HabitList habits={habits}></HabitList>
      <button
        className="signout btn"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Sign Out
      </button>
    </Fragment>
  );
}
