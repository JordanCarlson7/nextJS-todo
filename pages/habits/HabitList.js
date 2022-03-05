import Habit from '../../util/Habit';
import { Frequency } from '../../util/Frequency.enum';
import {Color} from '../../util/Color.enum'
import HabitItem from './HabitItem'
import { useContext } from 'react';
import ToDoContext from '../api/toDo-context';
// import Link from 'next/Link';

const data = [
    new Habit('eat a pizza', Frequency.DAILY, 3, false, Color.RED, {checkedRate:0, lastUsed:new Date(), isCompleted:false}),
    new Habit('jump on trampoline', Frequency.DAILY, 3, false, Color.RED, {checkedRate:0, lastUsed:new Date(), isCompleted:false}),
    new Habit('run', Frequency.DAILY, 3, false, Color.RED, {checkedRate:0, lastUsed:new Date(), isCompleted:false}),
    new Habit('fall over', Frequency.DAILY, 3, false, Color.RED, {checkedRate:0, lastUsed:new Date(), isCompleted:false})
]

const HabitList = () => {
  
const toDoContext = useContext(ToDoContext);

// const data = toDoContext.dataIn();
// console.log(data)

// let data;
//   useEffect(() => {
//     toDoContext.dataIn(data)
//     data = console.log(getHabits());

//   }, [data, getHabits])




// const data = toDoContext.data;

  return (
    <ul>
    {data.map((item, index) => {
      return (
          <HabitItem item={item} id={index}></HabitItem>
      )
    })}
  </ul>
  );
};

export default HabitList;
