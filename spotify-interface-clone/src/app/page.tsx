import {Home as HomeIcon, Mic2, LayoutList, Laptop2, Volume, Maximize, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat} from "lucide-react"
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-950 p-6'>
          <div className='flex items-center gap-1'>
            <div className='w-3 h-3 bg-red-600 rounded-full'/>
            <div className='w-3 h-3 bg-yellow-600 rounded-full'/>
            <div className='w-3 h-3 bg-green-600 rounded-full'/>
          </div>
          <nav className="space-y-5 mt-5">
            <a href="#" className="flex items-center gap-3 text-xs font-semibold tet-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a href="#" className="flex items-center gap-3 text-xs font-semibold tet-zinc-200">
              <Search />
              Search
            </a>
            <a href="#" className="flex items-center gap-3 text-xs font-semibold tet-zinc-200">
              <Library />
              Your Library
            </a>
          </nav>
          <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-1">
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Rap de anime</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hit Brasil</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Funk</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Musica de Corno</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Pagodinho</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Apenas com alcool</a>
          </nav>
        </aside>
        <main className='flex-1 p-6'>
          <div className="flex items-center gap-4">
            <button>
              <ChevronLeft className="w-8 h-8 rounded-full bg-black/40 p-1"/>
            </button>
            <button>
            <ChevronRight className="w-8 h-8 rounded-full bg-black/40 p-1"/>
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">

            <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden group hover:bg-white/10 transition-colors">
              <Image src={"/capaldi.jpg"} width={100} height={100} alt="Album Lewis Capaldi"/>
              <strong>Divinely Uninspired</strong>
              <button className="h-12 w-14 flex items-center justify-center pl-1 rounded-full invisible bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play />
              </button>
            </a>

            <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden group hover:bg-white/10 transition-colors">
              <Image src={"/capaldi.jpg"} width={100} height={100} alt="Album Lewis Capaldi"/>
              <strong>Divinely Uninspired</strong>
              <button className="h-12 w-14 flex items-center justify-center pl-1 rounded-full invisible bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play />
              </button>
            </a>

            <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden group  hover:bg-white120 transition-colors">
              <Image src={"/capaldi.jpg"} width={100} height={100} alt="Album Lewis Capaldi"/>
              <strong>Divinely Uninspired</strong>
              <button className="h-12 w-14 flex items-center justify-center pl-1 rounded-full invisible bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play />
              </button>
            </a>

            <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden group hover:bg-white/10 transition-colors">
              <Image src={"/capaldi.jpg"} width={100} height={100} alt="Album Lewis Capaldi"/>
              <strong>Divinely Uninspired</strong>
              <button className="h-12 w-14 flex items-center justify-center pl-1 rounded-full invisible bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play />
              </button>
            </a>

            <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden group hover:bg-white/10 transition-colors">
              <Image src={"/capaldi.jpg"} width={100} height={100} alt="Album Lewis Capaldi"/>
              <strong>Divinely Uninspired</strong>
              <button className="h-12 w-14 flex items-center justify-center pl-1 rounded-full invisible bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play />
              </button>
            </a>

            <a className="bg-white/5 rounded flex items-center gap-4 overflow-hidden group hover:bg-white/10 transition-colors">
              <Image src={"/capaldi.jpg"} width={100} height={100} alt="Album Lewis Capaldi"/>
              <strong>Divinely Uninspired</strong>
              <button className="h-12 w-14 flex items-center justify-center pl-1 rounded-full invisible bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10">Made for Geraldo Sobreira Jr</h2>
          <div className="grid grid-cols-7 gap-2 mt-4">
            <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-lg hover:bg-white/10 ">
              <Image src={"/capaldi.jpg"} className="w-full" width={120} height={120} alt="Album Lewis Capaldi"/>
              <strong className="font-semibold">Divinely Uninspired</strong>
              <span className="text-xs text-zinc-400">Lewis capaldi</span>
            </a>
            <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-lg hover:bg-white/10 ">
              <Image src={"/capaldi.jpg"} className="w-full" width={120} height={120} alt="Album Lewis Capaldi"/>
              <strong className="font-semibold">Divinely Uninspired</strong>
              <span className="text-xs text-zinc-400">Lewis capaldi</span>
            </a>
            <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-lg hover:bg-white/10 ">
              <Image src={"/capaldi.jpg"} className="w-full" width={120} height={120} alt="Album Lewis Capaldi"/>
              <strong className="font-semibold">Divinely Uninspired</strong>
              <span className="text-xs text-zinc-400">Lewis capaldi</span>
            </a>
            <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-lg hover:bg-white/10 ">
              <Image src={"/capaldi.jpg"} className="w-full" width={120} height={120} alt="Album Lewis Capaldi"/>
              <strong className="font-semibold">Divinely Uninspired</strong>
              <span className="text-xs text-zinc-400">Lewis capaldi</span>
            </a>
            <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-lg hover:bg-white/10 ">
              <Image src={"/capaldi.jpg"} className="w-full" width={120} height={120} alt="Album Lewis Capaldi"/>
              <strong className="font-semibold">Divinely Uninspired</strong>
              <span className="text-xs text-zinc-400">Lewis capaldi</span>
            </a>
          </div>
        </main>
      </div>
      <footer className='bg-zing-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between'>
        <div className="flex items-center gap-3">
          <Image src={"/capaldi.jpg"} width={56} height={56} alt="Album Lewis Capaldi"/>
          <div className="flex flex-col">
            <strong className="font-normal">Before You Go</strong>
            <span className="text-xs text-zinc-500">Lewis Capaldi</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <Shuffle className="text-zinc-400"/>
            <SkipBack className="text-zinc-400"/>
            <button className="h-10 w-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play />
            </button>
            <SkipForward className="text-zinc-400"/>
            <Repeat className="text-zinc-400"/>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-500">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 rounded-full h-1"></div>
            </div>
            <span className="text-xs text-zinc-500">3:35</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className="flex items-center gap-1">
            <Volume size={20}/>
            <div className="h-1 rounded-full w-20 bg-zinc-600">
              <div className="bg-zinc-200 w-10 rounded-full h-1"></div>
            </div>
          </div>
          <Maximize />
        </div>
      </footer>
    </div>
  )
}
