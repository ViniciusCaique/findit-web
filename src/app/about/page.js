import NavBar from "@/components/NavBar";



export default function About() {
  return (
    <>
      <NavBar active={"about"}/>
      <main className="bg-stone-900 mt-10 m-auto max-w-screen-lg p-8 rounded text-center">
        <h1 className="text-2xl font-bold">Sobre</h1>
        <hr class="w-auto h-1 mx-auto my-4  border-0 rounded md:my-10 bg-zinc-200" />

        <div>
          <p>
            Somos uma empresa para facilitar a sua próxima viagem. Com nosso sistema de busca de lugar de acordo com as suas preferencias, você economiza o tempo de procura de um lugar ideal para a viagem e com o nosso plano premium, você consegue achar pacotes de viagem e hotel sem sair da tela! 
          </p>
          <p className="my-5">Fundadores: Enrico Malachini, Fernando Cesar, Pedro Poline e Vinícius Caíque</p>
        </div>
      </main>
    </>
  )
}
