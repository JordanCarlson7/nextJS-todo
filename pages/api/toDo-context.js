import React, { useState, useEffect, useCallback } from "react";
import Habit from '../../util/Habit'
import { Color } from "../../util/Color.enum";
import { Frequency } from "../../util/Frequency.enum";

const ToDoContext = React.createContext({
  // token: '',
  // isLoggedIn: false,
  // login: (token) => {},
  dataIn: () => {},
  data: [],
});

// const data = [
//     new Habit('eat a pizza', Frequency.DAILY, 3, false, Color.RED, {checkedRate:0, lastUsed:new Date(), isCompleted:false}),
//     new Habit('jump on trampoline', Frequency.DAILY, 3, false, Color.RED, {checkedRate:0, lastUsed:new Date(), isCompleted:false}),
//     new Habit('run', Frequency.DAILY, 3, false, Color.RED, {checkedRate:0, lastUsed:new Date(), isCompleted:false}),
//     new Habit('fall over', Frequency.DAILY, 3, false, Color.RED, {checkedRate:0, lastUsed:new Date(), isCompleted:false})
// ]


export const ToDoContextProvider = (props) => {
  
  const getData = async () => {
      const response = await fetch('api/DBaccess/habit', {
        method: 'GET'
      });
      const data = await response.json();
      console.log('response', data);
      return data;
  }
//   let data;

  // useEffect(() => {
  //   data = getHabits();
  //   console.log('awaited data', data)

// }, [data, getHabits])

  
// let data;
// fetch('https:127.0.0.1:3000/api/DBaccess/habit').then(res => {res.json()}).then(res => {data = res}).catch(error => {console.log(error)})
    const contextValue = {
        dataIn: getData,
        // data: data
    }
  return (
    <ToDoContext.Provider value={contextValue}>
      {props.children}
    </ToDoContext.Provider>
  );
};
export default ToDoContext;
