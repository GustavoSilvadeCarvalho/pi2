"use client";

import Pagina from "@/components/pagina";
import PrimeiraSecaoTratamentos from "@/components/transmissao/primeiraSecao"

export default function TransmissaoPage(){
    return(
        <Pagina className="flex min-h-screen flex-col items-center p-12">
            <PrimeiraSecaoTratamentos />
        </Pagina>
    )
}
