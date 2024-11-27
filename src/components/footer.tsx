import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="flex items-center justify-around container mx-auto px-4">
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a
                        href="https://github.com/GustavoSilvadeCarvalho/pi2"
                        className="text-gray-400 hover:text-white transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-center">
                        © 2024 Projeto Dengue. Desenvolvido por <br /><span className="font-semibold">Gustavo Silva, Rodrigo Garcia e Caio Henrique</span>.
                    </p>
                </div>

                <div className="flex justify-center space-x-4 text-sm">
                    <Image
                        src='/fatec.png'
                        alt="Logo fatec"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </footer>
    );
}
