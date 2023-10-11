
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import todoContext from './routes/todo/contexts/todoContext';

import router from './app-routing';

function App() {

  const [todos, setTodos] = useState([])

  return (
    <todoContext.Provider value={{todos, setTodos}}>
      <RouterProvider  router={router}/>
    </todoContext.Provider>
  )
}

export default App
