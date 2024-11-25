import Pagina from "@/components/pagina";
import PrimeiraSecao from "@/components/sobre/primeiraSecao";
import SegundaSecao from "@/components/sobre/segundaSecao";

export default function SintomasPage() {
    return (
        <Pagina className="flex min-h-screen flex-col items-center p-12">
            <PrimeiraSecao />
            <SegundaSecao />
        </Pagina>
    )
}