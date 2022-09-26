import './styles/main.css'
import {MagnifyingGlassPlus} from 'phosphor-react'
import logoImg from './assets/Logo.svg'
import { GameBanner } from './components/GameBanner'

function App() {
  return (
    <div className="flex flex-col items-center justify-center max-w-[1344px] mx-auto my-20">
      <img src={logoImg} alt='logo' />
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'> duo </span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <GameBanner bannerUrl="./game1.svg" adsCount= {5} title ='League Of Legends'/>
        <GameBanner bannerUrl="./game2.svg" adsCount= {2} title ='DOTA 2'/>
        <GameBanner bannerUrl="./game3.svg" adsCount= {7} title ='CS:GO'/>
        <GameBanner bannerUrl="./game4.svg" adsCount= {1} title ='Apex Legends'/>
        <GameBanner bannerUrl="./game5.svg" adsCount= {6} title ='Fortinite'/>
        <GameBanner bannerUrl="./game6.svg" adsCount= {3} title ='World of Warcraft'/>

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
