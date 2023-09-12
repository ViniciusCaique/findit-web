
import { Button } from "@/components/Button";

import NavBar from "@/components/NavBar";

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Viagem from "./Viagem";

async function getViagens() {
  const url = 'http://localhost:8080/api/viagens'
  const res = await fetch(url, { next: { revalidate: 0 }})
  return res.json()
}


export default async function Viagens() {

  const data = await getViagens()

  return (
    <>
      <NavBar active={"viagens"}/>
      <main className="bg-stone-900 mt-10 m-auto max-w-screen-lg p-8 rounded">
        <h1 className="text-2xl font-bold">Viagens</h1>
        <div className="flex justify-between items-end">
          <MagnifyingGlassIcon className="h-6 w-6" />
          <Button href="/viagens/new">
              New
          </Button>
        </div>

        <hr class="w-auto h-1 mx-auto my-2 border-0 rounded bg-zinc-200" />

        <div id="data">
          {data.map(viagem => <Viagem key={viagem.id} viagem={viagem} />)}
        </div>
      </main>
    </>
  )
}
