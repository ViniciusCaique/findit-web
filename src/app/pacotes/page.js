

import { Button } from "@/components/Button";
import NavBar from "@/components/NavBar";

import { Pacote } from "./Pacote";

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'


async function getPacotes() {
  const url = 'http://localhost:8080/api/pacotes'
  const res = await fetch(url, { next: { revalidate: 0 }})
  return res.json()
}

export default async function Pacotes() {

  const data = await getPacotes()

  return (
    <>
      <NavBar active={"pacotes"}/>
      <main className="bg-stone-900 mt-10 m-auto max-w-screen-lg p-8 rounded">
        <h1 className="text-2xl font-bold">Pacotes</h1>
        <div className="flex justify-between items-end">
          <MagnifyingGlassIcon className="h-6 w-6" />
          <Button href="/pacotes/new">
              New
          </Button>
        </div>

        <hr class="w-auto h-1 mx-auto my-2 border-0 rounded bg-zinc-200" />

        <div id="data">
          {data.map(pacote => <Pacote key={pacote.id} pacote={pacote} />)}
        </div>
      </main>
    </>
  )
}
