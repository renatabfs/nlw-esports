export function GameBanner () {
    return (
        <a href= "" className='relative rounded-lg overflow-hidden'>
          <img src="/game2.svg" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0'>
            <strong className="font-bold text-white block">DOTA 2</strong>
            <span className='text-zinc-300 text-sm block mt-1'>3 anúncios</span>
          </div>
        </a>
    )
}