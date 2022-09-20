import './styles/main.css'
import logoImg from './assets/logo.svg'


function App() {
  return (
  <div className="flex flex-col items-center justify-center max-w-[1344px] mx-auto my-20">
    <img src={logoImg} alt='logo' />
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'> duo </span> está aqui.</h1>
      
      <div className='grid grid-cols-6 gap-6 mt-16'>
      <a href='' >
        <img src="/game1.svg" alt ="" />
      </a>
        <a href='' >
          <img src="/game2.svg" alt="" />
        </a>
        <a href='' >
          <img src="/game3.svg" alt="" />
        </a>
        <a href='' >
          <img src="/game4.svg" alt="" />
        </a>
        <a href='' >
          <img src="/game5.svg" alt="" />
        </a>
        <a href='' >
          <img src="/game6.svg" alt="" />
        </a>
      </div>
  </div>
  )
  }
export default App
