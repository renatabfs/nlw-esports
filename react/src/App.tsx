import './styles/main.css'

interface ButtonProps {
  title?: string;
  color?: string;
}


function Button (props: ButtonProps) {
  return (
    <button>{props.title}</button>
  )
}


function App() {
  return (
    <div className='w-8 h-8 bg-black dark:bg-red-600'>
  </div>
  )
  }

export default App
