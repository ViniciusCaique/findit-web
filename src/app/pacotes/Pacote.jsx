

import DropMenu from "@/components/DropMenu";

import { PaperAirplaneIcon } from '@heroicons/react/24/outline'


export function Pacote({ pacote }) {
    return(
        <div id="data-row" className="group flex justify-between items-center p-2 my-1 rounded cursor-pointer hover:bg-stone-600">
        <div className="flex gap-2">
            {pacote.tipo == "Viagem de avião" ? <PaperAirplaneIcon className="h-6 w-6" /> : null}
            <span>{pacote.nome}</span>
        </div>
        <div className="flex items-center">
            <span>{pacote.agencia.nome}</span>
            <div className="invisible group-hover:visible">
                <DropMenu />
            </div>
        </div>
    </div>
    )
}