"use client"



import { Button } from "@/components/Button";
import NavBar from "@/components/NavBar";
import TextField from "@/components/TextField";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { redirect } from 'next/navigation'
import { create } from "@/actions/viagens";
import DatePicker from "@/components/Datepicker";




export default function FormViagens() {

    const [ error, setError ] = useState("")

    async function handleSubmit(formData) {
        const res = await create(formData)
        if(res.message) {
            setError(res.message)
            return
        }
        redirect("/viagens")
    }

    return (
        <>
            <NavBar active="viagens" />

            <main className="bg-stone-900 mt-10 m-auto max-w-xl p-8 rounded flex gap-3 flex-col">
                <form action={handleSubmit}>
                <h1 className="text-2xl">Registrar Viagem</h1>
                <TextField 
                    label="Descrição"
                    id="descricao"
                    name="descricao"
                />
                <div className="flex flex-row justify-between">
                    <DatePicker 
                        label="Data de Partida"
                        id="dataPartida"
                        name="dataPartida"
                    />
                    <DatePicker 
                        label="Data de Fim"
                        id="dataFim"
                        name="dataFim"
                    />
                </div>
                <div className="flex justify-around mt-4">
                    <Button href="/viagens" variant="secondary">Cancelar</Button>
                    <Button type="button">
                        Registrar
                    </Button>
                </div>

                <span className="text-red-500">{error}</span>

                </form>
            </main>
        </>
    ) 
}
 