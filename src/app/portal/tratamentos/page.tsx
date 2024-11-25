"use client";

import Pagina from "@/components/pagina";
import PrimeiraSecaoTratamentos from "@/components/tratametos/primeiraSessao";
import SegundaSecaoTratamentos from "@/components/tratametos/segundaSessao";

export default function SintomasPage() {
    return (
        <Pagina className="flex min-h-screen flex-col items-center p-12">
            <PrimeiraSecaoTratamentos />
            <SegundaSecaoTratamentos />
        </Pagina>
    )
}