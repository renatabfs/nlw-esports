import './styles/main.css'
import logoImg from './assets/Logo.svg'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import {useState, useEffect} from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react'
import { Input } from './components/Form/Input'

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
      
      <Dialog.Root>

      <CreateAdBanner/>

      <Dialog.Portal>

      <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

      <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
      <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>
       <form className='mt-8 flex flex-col gap-4'>

        <div className='flex flex-col gap-2'>
        <label htmlFor='game' className='font-semibold' > Qual o game?</label>
        <Input 
        id = 'game' 
        placeholder='Selecione o game que deseja jogar'/>
        </div>

        <div className='flex flex-col gap-2'>
        <label htmlFor='name'> Seu nome (ou nickname)</label>
        <Input id = 'name' placeholder='Como te chamam dentro do jogo?'/>
        </div>
        
        <div className='grid grid-cols-2 gap-6'>
          <div className='flex flex-col gap-2'>
          <label htmlFor='yearsPlaying'>Joga há quantos anos?</label>
          <Input id ='yearsPlaying' type="number" placeholder ="Tudo bem ser ZERO" />
          </div>
          <div className='flex flex-col gap-2'>
          <label htmlFor='discord'>Qual seu discord?</label>
          <Input id = 'discord' type="text" placeholder='usuário#0000' />
          </div>
        </div>
        <div className='flex gap-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='weekDays'>Quando costuma jogar?</label>
          </div>
          <div className='flex flex-col gap-2 flex-1'>
            <label htmlFor='hourStart'>Qual horário do dia?</label>
            <div className='grid grid-cols-2 gap-1'>
            <Input id ='hourStart' type='time' placeholder='De' />
            <Input id ='hourEnd' type='time' placeholder='Até' />
            </div>
          </div>
        </div>
        <div>
          <Input type ='checkbox'/>
          Costumo me conectar ao chat de voz
        </div>
        <footer>
          <button>Cancelar</button>
          <button type ='submit' ><GameController/>Encontrar duo</button>
        </footer>

       </form>
      </Dialog.Content>
      </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
export default App
