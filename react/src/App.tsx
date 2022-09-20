import './styles/main.css'
import {MagnifyingGlassPlus} from 'phosphor-react'
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
            <strong className="font-bold text-white block">World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>
      </div>
      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8'>
      <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
      <div>
      <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
      <span className='text-zinc-400 block'> Publique um anúncio para encontrar mais players!</span>
      </div>
      <button className='py-3 px-4 text-white bg-violet-500 hover:bg-violet-600 flex items-center gap-3'>
        <MagnifyingGlassPlus size={24}/>
        Publicar anúncio</button>
      </div>
      </div>
    </div>
  )
}
export default App
