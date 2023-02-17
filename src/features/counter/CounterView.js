import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { decrement, increment, increseBy5, reset } from './counterSlice';

const CounterView = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  

  return (
    <div>
      <h2>count : {count}</h2>
      <button onClick={(() =>{
        dispatch(increment())
      })}>increment</button> 
      
      <button onClick={(() =>{
        dispatch(decrement())
      })}>decrement</button>

      <button onClick={(() =>{
        dispatch(reset())
      })}>reset</button>

<button onClick={(() =>{
       dispatch(increseBy5(1000))

      })}>increseBy1000</button>


    </div>
  )
}

export default CounterView
