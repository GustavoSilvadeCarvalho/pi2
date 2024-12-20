"use client";

export default function SegundaSecaoTratamentos() {
    return (
        <div className="flex flex-col items-center justify-center mt-12">
            <h2 className="text-3xl font-bold mb-6">Vídeo Informativo sobre Tratamentos</h2>
            <div className="w-full max-w-4xl aspect-video">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/MAmIrmzQpVs"
                    title="Tratamentos da Dengue"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
}
