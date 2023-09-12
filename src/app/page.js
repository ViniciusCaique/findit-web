

import NavBar from "@/components/NavBar";


export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <div className="bg-stone-900 mt-10 m-auto max-w-screen-lg p-8 rounded">
          <h1  className="text-align: center text-2xl font-bold text-center mb-5">Viajar sem estressar</h1>
          <text>Aqui você descobre seu próximo destino sem se estressar com pesquisas demoradas e debates que só geram discussão! Viajar é bom demais então não perca mais tempo, hora de conhecer um lugar novo!
                Assine nosso plano premium para ter acesso a dicas de viagem e promoções incriveis.
          </text>
        </div>
      </main>
    </>
  )
}
