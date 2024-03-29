import { Twitter, Instagram, Linkedin, ChevronDown, Mail, AlignJustify } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="">
        <nav className="px-16 h-[100px] flex items-center justify-center flex-col">
          <ol className="hidden md:flex space-x-52">
            <li>
              Sobre
            </li>
            <li>
              Experiencias
            </li>
            <li>
              Conhecimentos
            </li>
          </ol>
          <div className="flex self-end md:hidden">
            <AlignJustify />
          </div>
        </nav>
      </header>
      <div className="flex flex-1">
        <div className="min-h-screen flex-col w-28 justify-center items-center space-y-20 overflow-hidden max-h-[400px] hidden md:flex">
          <Twitter />
          <Instagram />
          <Linkedin />
          <Mail />
        </div>
        <main className="flex-1 no-scrollbar  flex flex-col max-h-screen overflow-y-scroll">
          <section className='flex flex-col items-center h-full min-h-screen'>
            <div className='flex w-[80%] items-center flex-col-reverse md:flex-row md:pt-20'>
              <div className='flex-1 flex flex-col space-y-5'>
                <p>Olá, meu nome é</p>
                <h1 className="text-8xl font-bold">Vitor Pereira.</h1>
                <h2 className='text-4xl font-semibold text-gray-300'>Software Engineer.</h2>
                <p className='w-[70%] text-gray-400'>Sou um apaixonado desenvolvedor de software com um foco especializado em backend e um amor genuíno pelo desenvolvimento de games. Com anos de experiência em criação e aprimoramento de sistemas robustos e escaláveis, estou sempre em busca de desafios que me permitam unir minha expertise técnica com minha paixão pelo mundo dos jogos.</p>
              </div>
              <div className='flex flex-1 justify-center items-center max-w-[200px] md:max-w-2xl'>
                <Image className='rounded-full' src="https://avatars.githubusercontent.com/redfox" alt="Redfox" width={520} height={520}  />
              </div>
            </div>
            <div className='h-full min-h-[100px] flex justify-center items-center'>
              <ChevronDown className='h-10 w-10' />
            </div>
          </section>

          <section className='flex flex-col items-center h-full min-h-screen'>
            <h1 className="text-3xl mt-6 font-bold">Conhecimentos</h1>
          </section>
        </main>
      </div>
    </div>
  )
}
