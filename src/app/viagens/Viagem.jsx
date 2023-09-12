

import DropMenu from "@/components/DropMenu";

export default function Viagem({ viagem }) {
    return(
        <div id="data-row" className="group flex justify-between items-center p-2 my-1 rounded cursor-pointer hover:bg-stone-600">
        <div className="flex gap-2">
            {/* {pacote.tipo == "Viagem de avião" ? <PaperAirplaneIcon className="h-6 w-6" /> : null} */}
            <span>{viagem.descricao}</span>
        </div>
        <div className="flex items-center gap-4">
            <span>{viagem.dataPartida}</span>
            <span>{viagem.dataFim}</span>
            <div className="invisible group-hover:visible">
                <DropMenu />
            </div>
        </div>
    </div>
    )
}