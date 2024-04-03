import './App.css'
import TaskInput from './components/TaskInput'
import Todos from './components/TaskList'

function App() {

  return (
    <>
      <div className='font-extrabold text-indigo-500 text-3xl'>Todos App using Redux & Redux-persist</div>
      <TaskInput />
      <Todos />
    </>
  )
}

export default App
