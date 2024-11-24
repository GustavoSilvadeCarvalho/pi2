import Pagina from "@/components/pagina";
import PrimeiraSecao from "@/components/primeiraSecao";
import SegundaSecao from "@/components/segundaSecao";
import TerceiraSecao from "@/components/terceiraSecao";
import Link from "next/link";

export default function PortalPage() {
    return (
        <Pagina className="flex min-h-screen flex-col items-center p-12">
            <PrimeiraSecao />
            <SegundaSecao />
            <TerceiraSecao />
            <h1 className="text-4xl font-bold">Portal</h1>
            <Link href="/api/logout">Logout</Link>
        </Pagina>
    )
}