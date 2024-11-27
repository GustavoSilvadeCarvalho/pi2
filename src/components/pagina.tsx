import Cabecalho from "./cabecalho";
import Footer from "./footer";

export interface PaginaProps {
    children: React.ReactNode
    className?: string
}


export default function Pagina(props: PaginaProps) {
    return (
        <div className="overflow-x-hidden">
            <Cabecalho />
            <main className={`${props.className ?? ''}`}>{props.children}</main>
            <Footer />
        </div>
    )
}