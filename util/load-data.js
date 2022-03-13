export async function loadData() {
const req = await fetch("https://xenodochial-noether-1e417b.netlify.app/api/DBaccess/habit"); //  https://xenodochial-noether-1e417b.netlify.app/
  const habits = await req.json();
  // console.log("DATA", habits);
  return habits;
}