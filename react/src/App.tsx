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
    <div>
  <h1>Hello Word</h1>
      <Button title="Enviar 1"/>
  </div>
  )
  }

export default App
