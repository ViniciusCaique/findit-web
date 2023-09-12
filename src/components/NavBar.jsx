


import Link from "next/link";


export default function NavBar({ active }) {
    return(
        <nav className="flex justify-between items-center px-4 py-4 bg-stone-900">
            <ul className="flex gap-12 items-baseline text-stone-600 font-medium">
                <li>
                    <Link href='/'>
                        <h1 className="text-2xl text-yellow-300 font-bold">FindIT</h1>
                    </Link>
                </li>
                <li>
                    <Link className={active=="viagens" && "text-yellow-500"} href='/viagens'>
                        Viagens
                    </Link>
                </li>
                <li>
                    <Link className={active=="pacotes" && "text-yellow-500"} href='/pacotes'>
                        Pacotes
                    </Link>
                </li>
                <li>
                    <Link className={active=="about" && "text-yellow-500"} href='/about'>
                        Sobre
                    </Link>
                </li>
            </ul>

            <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="usuario" />
            </div>
        </nav>

    )
}