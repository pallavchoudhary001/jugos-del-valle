export const SocialFloating = () => {
    return `
    <div class="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col items-end">
      <!-- Label Box -->
      <div class="bg-[#ce1126] text-white p-4 text-right rounded-l-lg mb-0 shadow-lg relative right-[-5px] hover:right-0 transition-all duration-300">
        <p class="text-sm font-light">Síguenos</p>
        <p class="text-xs">en nuestras</p>
        <p class="text-xl font-bold uppercase leading-none mt-1">Redes</p>
      </div>
      
      <!-- Icons -->
      <div class="bg-white shadow-lg rounded-bl-lg border border-gray-100 flex flex-col">
        <a href="#" class="p-3 text-gray-600 hover:text-[#1877f2] transition-colors border-b border-gray-100 flex justify-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </a>
        <a href="#" class="p-3 text-gray-600 hover:text-[#0077b5] transition-colors border-b border-gray-100 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="#" class="p-3 text-gray-600 hover:text-[#c32aa3] transition-colors flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
      </div>
    </div>
  `;
};
