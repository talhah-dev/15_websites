const navbar = document.getElementById("navbar");

if (navbar) {
  navbar.innerHTML = `
<header class="fixed top-0 inset-x-0 z-50 px-4 pt-4">
  <div class="mx-auto max-w-7xl">
    <nav class="rounded-[1.75rem] border border-white/10 bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,54,48,0.35)]">
      <div class="flex items-center justify-between px-5 py-4 lg:px-8">

        <a href="index.html" class="flex items-center gap-3 shrink-0">
          <span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#003630] text-white shadow-lg">
            <i class="fa-solid fa-house-chimney text-xl"></i>
          </span>
          <div>
            <p class="text-lg font-extrabold leading-tight text-[#003630]">Roofers Oakland</p>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#f8b900]">California Roofing</p>
          </div>
        </a>

        <div class="hidden xl:flex items-center rounded-full bg-[#f3f6f5] px-2 py-2">
          <a href="index.html" class="rounded-full px-5 py-3 text-sm font-semibold text-[#003630] hover:bg-white transition">Home</a>
          <a href="about.html" class="rounded-full px-5 py-3 text-sm font-semibold text-[#003630] hover:bg-white transition">About</a>

          <div class="relative group">
            <button type="button" class="flex items-center rounded-full px-5 py-3 text-sm font-semibold text-[#003630] hover:bg-white transition">
              Services
              <svg class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 7.5L10 12.5L15 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>

            <div class="pointer-events-none invisible absolute left-0 top-full w-72 translate-y-3 pt-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div class="rounded-[1.5rem] border border-gray-200 bg-white p-3 shadow-[0_25px_60px_-15px_rgba(0,54,48,0.3)]">
                <a href="services.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#003630] hover:bg-gray-100">All Services</a>
                <a href="residential-roofing.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#003630] hover:bg-gray-100">Residential Roofing</a>
                <a href="commercial-roofing.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#003630] hover:bg-gray-100">Commercial Roofing</a>
                <a href="multi-family-roofing.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#003630] hover:bg-gray-100">Multi-Family Roofing</a>
                <a href="roof-repair.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#003630] hover:bg-gray-100">Roof Repair</a>
                <a href="new-roofing.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#003630] hover:bg-gray-100">New Roofing</a>
              </div>
            </div>
          </div>

          <a href="faq.html" class="rounded-full px-5 py-3 text-sm font-semibold text-[#003630] hover:bg-white transition">FAQ</a>
          <a href="contact-us.html" class="rounded-full px-5 py-3 text-sm font-semibold text-[#003630] hover:bg-white transition">Contact Us</a>
        </div>

        <div class="hidden lg:flex items-center gap-3">
          <a href="tel:+10000000000" class="hidden 2xl:inline-flex items-center rounded-full border border-[#003630] px-5 py-3 text-sm font-semibold text-[#003630] hover:bg-[#003630] hover:text-white transition">
            <i class="fa-solid fa-phone-volume mr-2"></i>
            Call Now
          </a>

          <a href="contact-us.html" class="inline-flex items-center rounded-full bg-[#f8b900] px-6 py-3 text-sm font-semibold text-black hover:bg-[#e0a800] transition">
            Get Quote
          </a>
        </div>

        <button
          id="mobileNavToggle"
          type="button"
          aria-expanded="false"
          aria-controls="mobileNavMenu"
          aria-label="Toggle navigation menu"
          class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#003630] text-white xl:hidden"
        >
          <svg id="mobileMenuOpenIcon" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 7H20"></path>
            <path d="M4 12H20"></path>
            <path d="M4 17H20"></path>
          </svg>
          <svg id="mobileMenuCloseIcon" class="hidden h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 6L18 18"></path>
            <path d="M18 6L6 18"></path>
          </svg>
        </button>
      </div>

      <div
        id="mobileNavMenu"
        class="max-h-0 overflow-hidden border-t border-[#003630]/10 px-5 pb-0 pt-0 opacity-0 transition-all duration-300 ease-in-out xl:hidden pointer-events-none"
      >
        <div class="flex flex-col gap-2">
          <a href="index.html" class="rounded-2xl px-4 py-3 text-sm font-semibold text-[#003630] hover:bg-[#f3f6f5] transition">Home</a>
          <a href="about.html" class="rounded-2xl px-4 py-3 text-sm font-semibold text-[#003630] hover:bg-[#f3f6f5] transition">About</a>

          <div class="rounded-[1.5rem] bg-[#f3f6f5] p-2">
            <button
              id="mobileServicesToggle"
              type="button"
              aria-expanded="false"
              aria-controls="mobileServicesMenu"
              class="flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm font-semibold text-[#003630]"
            >
              <span>Services</span>
              <svg id="mobileServicesIcon" class="h-4 w-4 transition-transform duration-300" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 7.5L10 12.5L15 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>

            <div id="mobileServicesMenu" class="max-h-0 overflow-hidden px-1 pb-0 pt-0 opacity-0 transition-all duration-300 ease-in-out">
              <div class="flex flex-col gap-1 rounded-[1.25rem] bg-white p-2">
                <a href="services.html" class="rounded-2xl px-4 py-3 text-sm font-semibold text-[#003630] hover:bg-gray-100">All Services</a>
                <a href="residential-roofing.html" class="rounded-2xl px-4 py-3 text-sm font-semibold text-[#003630] hover:bg-gray-100">Residential Roofing</a>
                <a href="commercial-roofing.html" class="rounded-2xl px-4 py-3 text-sm font-semibold text-[#003630] hover:bg-gray-100">Commercial Roofing</a>
                <a href="multi-family-roofing.html" class="rounded-2xl px-4 py-3 text-sm font-semibold text-[#003630] hover:bg-gray-100">Multi-Family Roofing</a>
                <a href="roof-repair.html" class="rounded-2xl px-4 py-3 text-sm font-semibold text-[#003630] hover:bg-gray-100">Roof Repair</a>
                <a href="new-roofing.html" class="rounded-2xl px-4 py-3 text-sm font-semibold text-[#003630] hover:bg-gray-100">New Roofing</a>
              </div>
            </div>
          </div>

          <a href="faq.html" class="rounded-2xl px-4 py-3 text-sm font-semibold text-[#003630] hover:bg-[#f3f6f5] transition">FAQ</a>
          <a href="contact-us.html" class="rounded-2xl px-4 py-3 text-sm font-semibold text-[#003630] hover:bg-[#f3f6f5] transition">Contact Us</a>

          <div class="flex flex-col gap-2 pt-2 sm:flex-row">
            <a href="tel:+10000000000" class="inline-flex items-center justify-center rounded-full border border-[#003630] px-5 py-3 text-sm font-semibold text-[#003630] hover:bg-[#003630] hover:text-white transition">
              <i class="fa-solid fa-phone-volume mr-2"></i>
              Call Now
            </a>
            <a href="contact-us.html" class="inline-flex items-center justify-center rounded-full bg-[#f8b900] px-6 py-3 text-sm font-semibold text-black hover:bg-[#e0a800] transition">
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</header>
`;

  const mobileNavToggle = document.getElementById("mobileNavToggle");
  const mobileNavMenu = document.getElementById("mobileNavMenu");
  const mobileMenuOpenIcon = document.getElementById("mobileMenuOpenIcon");
  const mobileMenuCloseIcon = document.getElementById("mobileMenuCloseIcon");
  const mobileServicesToggle = document.getElementById("mobileServicesToggle");
  const mobileServicesMenu = document.getElementById("mobileServicesMenu");
  const mobileServicesIcon = document.getElementById("mobileServicesIcon");
  const mobileNavLinks = mobileNavMenu?.querySelectorAll("a");

  const closeServicesMenu = () => {
    if (!mobileServicesToggle || !mobileServicesMenu || !mobileServicesIcon) {
      return;
    }

    mobileServicesToggle.setAttribute("aria-expanded", "false");
    mobileServicesMenu.classList.remove("max-h-96", "pt-2", "pb-1", "opacity-100");
    mobileServicesMenu.classList.add("max-h-0", "pt-0", "pb-0", "opacity-0");
    mobileServicesIcon.classList.remove("rotate-180");
  };

  const closeMobileMenu = () => {
    if (!mobileNavToggle || !mobileNavMenu || !mobileMenuOpenIcon || !mobileMenuCloseIcon) {
      return;
    }

    mobileNavToggle.setAttribute("aria-expanded", "false");
    mobileNavMenu.classList.remove("max-h-[80vh]", "pt-2", "pb-5", "opacity-100", "pointer-events-auto");
    mobileNavMenu.classList.add("max-h-0", "pt-0", "pb-0", "opacity-0", "pointer-events-none");
    mobileMenuOpenIcon.classList.remove("hidden");
    mobileMenuCloseIcon.classList.add("hidden");
    closeServicesMenu();
  };

  const openMobileMenu = () => {
    if (!mobileNavToggle || !mobileNavMenu || !mobileMenuOpenIcon || !mobileMenuCloseIcon) {
      return;
    }

    mobileNavToggle.setAttribute("aria-expanded", "true");
    mobileNavMenu.classList.remove("max-h-0", "pt-0", "pb-0", "opacity-0", "pointer-events-none");
    mobileNavMenu.classList.add("max-h-[80vh]", "pt-2", "pb-5", "opacity-100", "pointer-events-auto");
    mobileMenuOpenIcon.classList.add("hidden");
    mobileMenuCloseIcon.classList.remove("hidden");
  };

  mobileNavToggle?.addEventListener("click", () => {
    const isOpen = mobileNavToggle.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeMobileMenu();
      return;
    }

    openMobileMenu();
  });

  mobileServicesToggle?.addEventListener("click", () => {
    const isExpanded = mobileServicesToggle.getAttribute("aria-expanded") === "true";
    mobileServicesToggle.setAttribute("aria-expanded", String(!isExpanded));
    mobileServicesMenu?.classList.toggle("max-h-0", isExpanded);
    mobileServicesMenu?.classList.toggle("pt-0", isExpanded);
    mobileServicesMenu?.classList.toggle("pb-0", isExpanded);
    mobileServicesMenu?.classList.toggle("opacity-0", isExpanded);
    mobileServicesMenu?.classList.toggle("max-h-96", !isExpanded);
    mobileServicesMenu?.classList.toggle("pt-2", !isExpanded);
    mobileServicesMenu?.classList.toggle("pb-1", !isExpanded);
    mobileServicesMenu?.classList.toggle("opacity-100", !isExpanded);
    mobileServicesIcon?.classList.toggle("rotate-180", !isExpanded);
  });

  mobileNavLinks?.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1280) {
      closeMobileMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });
}
