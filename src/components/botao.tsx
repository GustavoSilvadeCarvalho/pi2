type BotaoProps = {
    children: React.ReactNode;
};

export default function Botao({ children }: BotaoProps) {
    return (
        <button className="bg-black text-white py-2.5 px-5 max-w-32">
            {children}
        </button>
    )
}