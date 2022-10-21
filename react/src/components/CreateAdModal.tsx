import { CaretDown, CaretUp, Check, Checks, GameController } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'
import { Input } from "./Form/Input";
import * as Checkbox from '@radix-ui/react-checkbox'
import * as Select from "@radix-ui/react-select";
import { useEffect, useState } from "react";

interface Game {
    title: string
    id: string

}

export function CreateAdModal() {
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        fetch('https://4000-renatabfs-nlwesports-k2dmsbz6w22.ws-us72.gitpod.io/games')
            // fetch('https://localhost:3333/games')
            .then(response => response.json())
            .then(data => {
                setGames(data)
            })
    }, [])
    return (
        <Dialog.Portal>

            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
                <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>
                <form className='mt-8 flex flex-col gap-4'>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor='game' className='font-semibold' > Qual o game?</label>
                        <Select.Root>
                            <Select.Trigger aria-label="game" className="bg-zinc-900 py-3 px-4 rounded text-small placeholder:text-zinc-500 flex gap-2 flex items-center" >
                                <Select.Value placeholder='Selecione o game que deseja jogar' />
                                <Select.Icon>
                                    <CaretDown className="w-4 h-4 flex items-center" />
                                </Select.Icon>
                            </Select.Trigger>

                            <Select.Portal>
                                <Select.Content>
                                    <Select.ScrollUpButton className="flex" >
                                        <CaretUp className="w-4 h-4" />
                                    </Select.ScrollUpButton>
                                    <Select.Viewport className='bg-zinc-900 py-3 px-4 rounded text-base text-white placeholder:text-zinc-500 font-thin'>
                                        <Select.Group>
                                            {games.map(game => {
                                                return (
                                                    <Select.Item key={game.id} value={game.id} className='flex items-center justify-between py-2 px-3 m-1 bg-zinc-900 text-zinc-500 cursor-pointer rounded hover:bg-zinc-800 hover:text-white'>
                                                        <Select.ItemText>{game.title}</Select.ItemText>
                                                        <Select.ItemIndicator className='ml-4'>
                                                            <Check size={24} className='text-emerald-600' />
                                                        </Select.ItemIndicator>
                                                    </Select.Item>
                                                )
                                            })}
                                        </Select.Group>
                                        <Select.Separator />
                                    </Select.Viewport>
                                    <Select.ScrollDownButton />
                                </Select.Content>
                            </Select.Portal>
                        </Select.Root>

                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor='name'> Seu nome (ou nickname)</label>
                        <Input id='name' placeholder='Como te chamam dentro do jogo?' />
                    </div>

                    <div className='grid grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='yearsPlaying'>Joga há quantos anos?</label>
                            <Input id='yearsPlaying' type="number" placeholder="Tudo bem ser ZERO" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='discord'>Qual seu discord?</label>
                            <Input id='discord' type="text" placeholder='usuário#0000' />
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='weekDays'>Quando costuma jogar?</label>
                            <div className='grid grid-cols-4 gap-2'>
                                <button
                                    className='w-8 h-8 rounded bg-zinc-900'
                                    title='Domingo'>
                                    D </button>
                                <button
                                    className='w-8 h-8 rounded bg-zinc-900'
                                    title='Segunda'>
                                    S </button>
                                <button
                                    className='w-8 h-8 rounded bg-zinc-900'
                                    title='Terça'>
                                    T</button>
                                <button
                                    className='w-8 h-8 rounded bg-zinc-900'
                                    title='Quarta'>
                                    Q</button>
                                <button
                                    className='w-8 h-8 rounded bg-zinc-900'
                                    title='Quinta'>
                                    Q</button>
                                <button
                                    className='w-8 h-8 rounded bg-zinc-900'
                                    title='Sexta'>
                                    S</button>
                                <button
                                    className='w-8 h-8 rounded bg-zinc-900'
                                    title='Sábado'>
                                    S</button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 flex-1'>
                            <label htmlFor='hourStart'>Qual horário do dia?</label>
                            <div className='grid grid-cols-2 gap-1'>
                                <Input id='hourStart' type='time' placeholder='De' />
                                <Input id='hourEnd' type='time' placeholder='Até' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 flex items-center gap-2 text-sm'>
                        <Checkbox.Root className='w-6 h-6 rounded bg-zinc-900 p-1'>
                            <Checkbox.Indicator>
                                <Check className="h-4 w-4 text-emerald-400" />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        Costumo me conectar ao chat de voz
                    </div>
                    <footer className='mt-4 flex justify-end gap-4'>
                        <Dialog.Close
                            type='button'
                            className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'
                        >Cancelar</Dialog.Close>
                        <button
                            className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                            type='submit'
                        ><GameController className='w-6 h-6' />
                            Encontrar duo</button>
                    </footer>

                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}