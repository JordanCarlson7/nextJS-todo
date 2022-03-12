import { Fragment } from "react";
import HabitList from "./HabitList";
import { signOut } from 'next-auth/react';


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
      <button className="signout btn" onClick={() => signOut({callbackUrl: '/'})}>
        Sign Out
      </button>
    </Fragment>
  );
}
