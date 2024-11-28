import Pagina from "@/components/pagina";
import PrimeiraSecao from "@/components/sintomas/primeiraSecao";
import QuartaSessao from "@/components/sintomas/quartaSessao";
import QuintaSessao from "@/components/sintomas/quintaSessao";
import SegundaSessao from "@/components/sintomas/segundaSessao";
import TerceiraSessao from "@/components/sintomas/terceiraSessao";

export default function SintomasPage() {
    return (
        <Pagina className="flex min-h-screen flex-col items-center p-12">
            <PrimeiraSecao />
            <div className="flex justify-around gap-20 flex-wrap max-w-[1600]">
                <SegundaSessao />
                <TerceiraSessao />
                <QuartaSessao />
            </div>
            <QuintaSessao />
        </Pagina>
    )
}