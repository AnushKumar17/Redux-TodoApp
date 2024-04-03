import './App.css'
import TaskInput from './components/TaskInput'
import Todos from './components/TaskList'

function App() {

  return (
    <>
      <div className='font-extrabold text-indigo-500 text-3xl'>QuadB Tech Todos</div>
      <TaskInput />
      <Todos />
    </>
  )
}

export default App
