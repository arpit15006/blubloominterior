// Main JavaScript file

// Header Component
const headerHTML = `
<header class="fixed w-full top-0 z-50 transition-all duration-300 font-body bg-white shadow-sm" id="main-header">
    <!-- Top Row -->
    <div class="border-b border-gray-100">
        <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!-- Left Side: Logo + Links -->
                <div class="flex items-center gap-8">
                    <!-- Logo -->
                    <a href="/" class="flex-shrink-0">
                        <img src="/images/logo.svg" alt="Blubloom Interiors" class="h-8 w-auto">
                    </a>
                    
                    <!-- Top Links -->
                    <div class="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
                        <a href="/gallery.html" class="hover:text-[#eb595f] transition-colors relative group">
                            Design Ideas
                            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#eb595f] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </a>
                        <a href="/magazine.html" class="hover:text-[#eb595f] transition-colors flex items-center gap-1">
                            Magazine <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </a>
                        <a href="#" class="hover:text-[#eb595f] transition-colors flex items-center gap-1">
                            Cities <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </a>
                        <a href="/projects.html" class="hover:text-[#eb595f] transition-colors">Projects</a>
                        <a href="#" class="hover:text-[#eb595f] transition-colors flex items-center gap-1">
                            More <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </a>
                    </div>
                </div>

                <!-- Right Side: Shop + User -->
                <div class="hidden md:flex items-center space-x-6">
                    <a href="#" class="text-sm font-medium text-gray-800 hover:text-[#eb595f] transition-colors flex items-center gap-2">
                        Shop Furnishings <span class="bg-[#4CAF50] text-white text-[10px] font-bold px-1.5 py-0.5 rounded leading-none uppercase">New</span>
                    </a>
                    <a href="#" class="text-gray-600 hover:text-[#eb595f] transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" class="md:hidden text-gray-800 hover:text-[#eb595f] focus:outline-none">
                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Bottom Row (Main Nav) -->
    <div class="hidden md:block">
        <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-14">
                <!-- Navigation Links -->
                <div class="flex items-center space-x-8">
                     <a href="/process.html" class="text-sm font-semibold text-gray-700 hover:text-[#eb595f] transition-colors">How it works</a>
                     
                     <!-- Mega Menu Trigger -->
                    <div class="group relative py-4">
                        <a href="/services.html" class="text-sm font-semibold text-gray-700 hover:text-[#eb595f] transition-colors flex items-center gap-1 cursor-pointer">
                            Offerings
                            <svg class="w-4 h-4 text-gray-400 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </a>
                        <!-- Mega Menu Dropdown -->
                        <div class="absolute top-full left-0 w-[800px] bg-white shadow-xl rounded-b-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-0 p-8 grid grid-cols-3 gap-8 z-50">
                            <!-- Column 1 -->
                             <div>
                                 <h4 class="font-bold text-gray-900 mb-4 border-b pb-2">Modular Interiors</h4>
                                 <ul class="space-y-2 text-sm text-gray-600">
                                     <li><a href="#" class="hover:text-[#eb595f] transition-colors block">Modular Kitchens</a></li>
                                     <li><a href="#" class="hover:text-[#eb595f] transition-colors block">Wardrobe Designs</a></li>
                                     <li><a href="#" class="hover:text-[#eb595f] transition-colors block">Storage Units</a></li>
                                     <li><a href="#" class="hover:text-[#eb595f] transition-colors block">Crockery Units</a></li>
                                     <li><a href="#" class="hover:text-[#eb595f] transition-colors block">TV Units</a></li>
                                 </ul>
                             </div>
                              <!-- Column 2 -->
                             <div>
                                 <h4 class="font-bold text-gray-900 mb-4 border-b pb-2">Full Home Interiors</h4>
                                 <ul class="space-y-2 text-sm text-gray-600">
                                     <li><a href="#" class="hover:text-[#eb595f] transition-colors block">Full Home Furnishing</a></li>
                                     <li><a href="#" class="hover:text-[#eb595f] transition-colors block">Luxury Interiors</a></li>
                                     <li><a href="#" class="hover:text-[#eb595f] transition-colors block">Civil Work & Renovation</a></li>
                                     <li><a href="#" class="hover:text-[#eb595f] transition-colors block">Painting & Wallpaper</a></li>
                                 </ul>
                             </div>
                              <!-- Column 3 -->
                             <div>
                                 <h4 class="font-bold text-gray-900 mb-4 border-b pb-2">Room Designs</h4>
                                 <ul class="space-y-2 text-sm text-gray-600">
                                     <li><a href="#" class="hover:text-[#eb595f] transition-colors block">Living Room</a></li>
                                     <li><a href="#" class="hover:text-[#eb595f] transition-colors block">Master Bedroom</a></li>
                                     <li><a href="#" class="hover:text-[#eb595f] transition-colors block">Kids Bedroom</a></li>
                                     <li><a href="#" class="hover:text-[#eb595f] transition-colors block">Home Office</a></li>
                                     <li><a href="#" class="hover:text-[#eb595f] transition-colors block">Balcony Design</a></li>
                                 </ul>
                             </div>
                        </div>
                    </div>
                </div>

                <!-- CTA Button -->
                <a href="/contact.html" class="bg-[#eb595f] text-white px-6 py-2.5 rounded-full font-bold uppercase tracking-wide hover:shadow-lg transition-transform hover:-translate-y-0.5 text-xs">
                    Consult Online Now
                </a>
            </div>
        </div>
    </div>
  
  <!-- Mobile Menu -->
  <div id="mobile-menu" class="fixed inset-0 bg-white z-40 transform translate-x-full transition-transform duration-300 md:hidden pt-24 px-6 flex flex-col space-y-6 overflow-y-auto">
    <a href="/" class="text-xl font-playfair hover:text-[#eb595f] text-primary block">Home</a>
    <a href="/gallery.html" class="text-xl font-playfair hover:text-[#eb595f] text-primary block">Design Ideas</a>
    <a href="/services.html" class="text-xl font-playfair hover:text-[#eb595f] text-primary block">Offerings</a>
    <a href="/process.html" class="text-xl font-playfair hover:text-[#eb595f] text-primary block">How it Works</a>
    <a href="/contact.html" class="text-xl font-playfair hover:text-[#eb595f] text-primary block">Contact</a>
    <button id="close-menu-btn" class="absolute top-6 right-6 text-primary">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    </button>
  </div>
</header>
`;

// Footer Component
const footerHTML = `
<footer class="bg-primary text-white pt-20 pb-10">
  <div class="container-custom mx-auto mb-16">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
      <!-- Brand -->
      <div class="col-span-1 md:col-span-2">
        <h3 class="font-playfair text-3xl font-bold mb-6 text-white">BLUBLOOM.</h3>
        <p class="text-gray-400 font-light max-w-sm mb-8">
          Crafting exceptional spaces that inspire and delight. Luxury interior design and architectural services for the modern lifestyle.
        </p>
        <div class="flex space-x-4">
             <!-- Social Icons placeholders -->
             <a href="#" class="text-secondary hover:text-white transition-colors">Instagram</a>
             <a href="#" class="text-secondary hover:text-white transition-colors">Houzz</a>
             <a href="#" class="text-secondary hover:text-white transition-colors">Pinterest</a>
        </div>
      </div>

      <!-- Links -->
      <div>
        <h4 class="font-playfair text-xl mb-6 text-white">Quick Links</h4>
        <ul class="space-y-4 font-light text-gray-400">
          <li><a href="/gallery.html" class="hover:text-secondary transition-colors">Design Gallery</a></li>
          <li><a href="/services.html" class="hover:text-secondary transition-colors">Services</a></li>
          <li><a href="/process.html" class="hover:text-secondary transition-colors">Our Process</a></li>
          <li><a href="/pricing.html" class="hover:text-secondary transition-colors">Pricing Packages</a></li>
          <li><a href="/contact.html" class="hover:text-secondary transition-colors">Contact Us</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="font-playfair text-xl mb-6 text-white">Contact</h4>
        <ul class="space-y-4 font-light text-gray-400">
          <li>123 Luxury Lane, Suite 100<br>New Delhi, India</li>
          <li><a href="mailto:hello@blubloom.com" class="hover:text-secondary">hello@blubloom.com</a></li>
          <li><a href="tel:+919876543210" class="hover:text-secondary">+91 987 654 3210</a></li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm font-light">
    <p>&copy; ${new Date().getFullYear()} Blubloom Interiors. All rights reserved.</p>
  </div>
</footer>
`;

// Inject Header and Footer
// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // Inject Header and Footer
  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;
  if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

  // Header Logic
  const header = document.getElementById('main-header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // Check if page requested transparent nav
  const isTransparentPage = document.body.classList.contains('transparent-nav');

  // Initial State for Transparent Header
  if (header && isTransparentPage && window.scrollY < 50) {
    header.classList.add('header-transparent');
    header.classList.remove('bg-white', 'shadow-sm');
  }

  // Scroll Effect
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        // Scrolled State (Always Standard)
        header.classList.add('bg-white', 'shadow-sm');
        header.classList.remove('header-transparent', 'py-4'); // Remove py-4 if valid, though not in original
      } else {
        // Top State
        if (isTransparentPage) {
          header.classList.add('header-transparent');
          header.classList.remove('bg-white', 'shadow-sm');
        } else {
          header.classList.remove('shadow-sm');
        }
      }
    });
  }

  // Mobile Menu Toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
    });
  }

  if (closeMenuBtn && mobileMenu) {
    closeMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
    });
  }
});
