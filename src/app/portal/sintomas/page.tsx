import Pagina from "@/components/pagina";
import PrimeiraSecao from "@/components/sintomas/primeiraSecao";
import SegundaSessao from "@/components/sintomas/segundaSessao";

export default function SintomasPage() {
    return (
        <Pagina className="flex min-h-screen flex-col items-center p-12">
            <PrimeiraSecao />
            <SegundaSessao />
        </Pagina>
    )
}