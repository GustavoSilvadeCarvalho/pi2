import Pagina from "@/components/pagina";
import PrimeiraSecaoTratamentos from "@/components/tratametos/primeiraSessao";

export default function SintomasPage() {
    return (
        <Pagina className="flex min-h-screen flex-col items-center p-12">
            <PrimeiraSecaoTratamentos />
        </Pagina>
    )
}