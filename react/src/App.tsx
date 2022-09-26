import './styles/main.css'
import logoImg from './assets/Logo.svg'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'

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
      <CreateAdBanner />
    </div>
  )
}
export default App
