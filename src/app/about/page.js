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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus in adipisci praesentium, 
            tenetur nulla rem quia voluptatem laborum ex sequi? Cumque ex itaque, fugit atque aspernatur unde. 
            Atque, excepturi recusandae!
          </p>
        </div>
      </main>
    </>
  )
}
