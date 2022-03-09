import HabitList from "./HabitList";

export async function getStaticProps() {
    const req = await fetch('http://127.0.0.1:3000/api/DBaccess/habit');
    const habits = await req.json();
    console.log("DATATATTATATATATATAT", habits)
    
    return {
      props: {habits}
    }
  }
  
export default function Habit({habits}) {
    return <HabitList habits={habits}></HabitList>
};