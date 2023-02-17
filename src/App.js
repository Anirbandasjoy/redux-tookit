import React from 'react'


import CounterView from './features/counter/CounterView';


import PostView from './features/posts/PostView';

import "./App.css"


const App = () => {
  return (
    <div className='App'>
      
      <CounterView />
      <PostView />
    
    </div>
  )
}

export default App