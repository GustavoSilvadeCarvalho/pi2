"use client"

import Pagina from "@/components/pagina";
import PrimeiraSecao from "@/components/homepage/primeiraSecao";
import SegundaSecao from "@/components/homepage/segundaSecao";
import TerceiraSecao from "@/components/homepage/terceiraSecao";

export default function PortalPage() {
    return (
        <Pagina className="flex min-h-screen flex-col items-center p-12">
            <PrimeiraSecao />
            <SegundaSecao />
            <TerceiraSecao />

        </Pagina>
    )
}