import './styles/main.css'
import logoImg from './assets/Logo.svg'


function App() {
  return (
    <div className="flex flex-col items-center justify-center max-w-[1344px] mx-auto my-20">
      <img src={logoImg} alt='logo' />
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'> duo </span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game1.svg" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0'>
            <strong className="font-bold text-white block">League of legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>5 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game2.svg" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0'>
            <strong className="font-bold text-white block">DOTA 2</strong>
            <span className='text-zinc-300 text-sm block mt-1'>3 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game3.svg" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0'>
            <strong className="font-bold text-white block">Counter Strike</strong>
            <span className='text-zinc-300 text-sm block mt-1'>7 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game4.svg" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0'>
            <strong className="font-bold text-white block">APEX Legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>1 anúncio</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden' >
          <img src="/game5.svg" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0'>
            <strong className="font-bold text-white block">Fortinite</strong>
            <span className='text-zinc-300 text-sm block mt-1'>8 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden' >
          <img src="/game6.svg" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0'>
            <strong className="font-bold text-white block">World Warcraft</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>
      </div>
    </div>
  )
}
export default App
