export const GenericPage = (title) => {
    return `
        <div class="pt-24 pb-12 bg-gray-50 min-h-[50vh]">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-4xl md:text-6xl font-black text-gray-800 uppercase mb-8">${title}</h1>
                <p class="text-xl text-gray-600">Página en construcción.</p>
                <a href="#/" class="inline-block mt-8 text-[#ce1126] font-bold border-b-2 border-[#ce1126] hover:text-black hover:border-black transition-colors">Regresar al Inicio</a>
            </div>
        </div>
    `;
};
