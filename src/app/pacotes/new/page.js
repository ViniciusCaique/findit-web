"use client"



import { Button } from "@/components/Button";
import NavBar from "@/components/NavBar";
import TextField from "@/components/TextField";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { redirect } from 'next/navigation'
import { create } from "@/actions/pacotes";
import TextFieldOptions from "@/components/TextInputOptions";



export default function FormPacotes() {

    const [ error, setError ] = useState("")

    async function handleSubmit(formData) {
        const res = await create(formData)
        if(res.message) {
            setError(res.message)
            return
        }
        redirect("/pacotes")
    }

    return (
        <>
            <NavBar active="pacotes" />

            <main className="bg-stone-900 mt-10 m-auto max-w-xl p-8 rounded flex gap-3 flex-col">
                <form action={handleSubmit}>
                <h1 className="text-2xl">Cadastrar Pacote</h1>
                <TextField 
                    label="Nome"
                    id="nome"
                    name="nome"
                />
                <TextField 
                    label="Tipo"
                    id="tipo"
                    name="tipo"
                />
                <TextField 
                    label="Descrição"
                    id="descricao"
                    name="descricao"
                />
                <div className="flex justify-around mt-4">
                    <Button href="/pacotes" variant="secondary">Cancelar</Button>
                    <Button type="button">
                        Cadastrar
                    </Button>
                </div>

                <span className="text-red-500">{error}</span>

                </form>
            </main>
        </>
    ) 
}
 