import './styles/main.css'
import logoImg from './assets/Logo.svg'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import {useState, useEffect} from 'react'

interface Game {
  title: string
  bannerUrl: string
  ads: number
  id: string
  _count: {
    ads:number
  }
}

function App() {
  const [games, setGames] = useState <Game[]>([])

  useEffect (() => {
    fetch('http://localhost:3333/games')
    .then (response => response.json())
    .then (data => {
      setGames(data)
    })
  }, [])

  return (
    <div className="flex flex-col items-center justify-center max-w-[1344px] mx-auto my-20">
      <img src={logoImg} alt='logo' />
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'> duo </span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'> 

      {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          )
        })}

      </div>
      <CreateAdBanner />
    </div>
  )
}
export default App
