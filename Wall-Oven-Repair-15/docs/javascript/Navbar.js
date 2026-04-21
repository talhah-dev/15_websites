const navbar = document.getElementById("navbar");

navbar.innerHTML = `
  <header class="fixed top-0 left-0 right-0 z-50">
    <nav id="main-navbar" class="mx-auto mt-4 w-[calc(100%-24px)] max-w-7xl rounded-[1.5rem] border border-white/10 bg-[#041e42]/90 px-5 py-4 shadow-[0_18px_50px_rgba(4,30,66,0.18)] backdrop-blur-xl transition-all duration-300 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between gap-4">
        <a href="index.html" class="flex items-center gap-3">
          <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffb81c] text-[#041e42] shadow-[0_12px_30px_rgba(255,184,28,0.24)]">
            <i class="fa-solid fa-fire-burner text-lg"></i>
          </span>
          <div class="leading-none">
            <span class="block text-lg font-bold tracking-tight text-white">Wall Oven Repair</span>
            <span class="mt-1 block text-xs font-medium uppercase tracking-[0.22em] text-white/60">Local Service Experts</span>
          </div>
        </a>

        <div class="hidden items-center gap-2 lg:flex">
          <a href="index.html" class="rounded-full px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-white/10 hover:text-[#ffb81c]">Home</a>
          <a href="about.html" class="rounded-full px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-white/10 hover:text-[#ffb81c]">About</a>

          <div class="group relative">
            <a href="services.html" class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-white/10 hover:text-[#ffb81c]">
              Services
              <i class="fa-solid fa-chevron-down text-[10px] transition duration-300 group-hover:rotate-180"></i>
            </a>

            <div class="pointer-events-none absolute left-0 top-full pt-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
              <div class="w-80 rounded-[1.5rem] border border-white/10 bg-white p-4 shadow-[0_24px_60px_rgba(4,30,66,0.16)]">
                <div class="grid gap-2">
                  <a href="wall-oven-repair.html" class="rounded-2xl px-4 py-3 transition duration-300 hover:bg-slate-50">
                    <span class="block text-sm font-bold text-[#041e42]">Wall Oven Repair</span>
                    <span class="mt-1 block text-sm text-slate-600">Fast service for wall oven issues and performance problems.</span>
                  </a>
                  <a href="wall-oven-installation.html" class="rounded-2xl px-4 py-3 transition duration-300 hover:bg-slate-50">
                    <span class="block text-sm font-bold text-[#041e42]">Wall Oven Installation</span>
                    <span class="mt-1 block text-sm text-slate-600">Professional installation with clean and careful setup.</span>
                  </a>
                  <a href="wall-oven-maintenance.html" class="rounded-2xl px-4 py-3 transition duration-300 hover:bg-slate-50">
                    <span class="block text-sm font-bold text-[#041e42]">Wall Oven Maintenance</span>
                    <span class="mt-1 block text-sm text-slate-600">Preventive care to support safety and long-term performance.</span>
                  </a>
                  <a href="emergency-wall-oven-repair.html" class="rounded-2xl px-4 py-3 transition duration-300 hover:bg-slate-50">
                    <span class="block text-sm font-bold text-[#041e42]">Emergency Wall Oven Repair</span>
                    <span class="mt-1 block text-sm text-slate-600">Prompt support when your wall oven needs urgent attention.</span>
                  </a>
                  <a href="wall-oven-parts.html" class="rounded-2xl px-4 py-3 transition duration-300 hover:bg-slate-50">
                    <span class="block text-sm font-bold text-[#041e42]">Wall Oven Parts</span>
                    <span class="mt-1 block text-sm text-slate-600">Parts solutions and replacement support for your unit.</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a href="faq.html" class="rounded-full px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-white/10 hover:text-[#ffb81c]">FAQ</a>
          <a href="contact-us.html" class="rounded-full px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-white/10 hover:text-[#ffb81c]">Contact Us</a>
        </div>

        <div class="hidden lg:flex">
          <a href="contact-us.html" class="inline-flex items-center justify-center rounded-full bg-[#ffb81c] px-6 py-3 text-sm font-semibold text-[#041e42] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(255,184,28,0.28)]">
            Request Service
          </a>
        </div>

        <button id="mobile-menu-toggle" type="button" class="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white transition duration-300 hover:bg-white/15 lg:hidden">
          <i id="mobile-menu-icon" class="fa-solid fa-bars text-lg"></i>
        </button>
      </div>

      <div id="mobile-menu" class="grid grid-rows-[0fr] transition-all duration-500 ease-in-out lg:hidden">
        <div class="overflow-hidden">
          <div class="mt-4 border-t border-white/10 pt-4">
            <div class="space-y-2">
              <a href="index.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10 hover:text-[#ffb81c]">Home</a>
              <a href="about.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10 hover:text-[#ffb81c]">About</a>

              <div class="rounded-[1.5rem] border border-white/10 bg-white/5">
                <button id="mobile-services-toggle" type="button" class="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-white transition duration-300 hover:text-[#ffb81c]">
                  <span>Services</span>
                  <i id="mobile-services-icon" class="fa-solid fa-chevron-down text-[11px] transition duration-300"></i>
                </button>

                <div id="mobile-services-menu" class="grid grid-rows-[0fr] transition-all duration-500 ease-in-out">
                  <div class="overflow-hidden">
                    <div class="space-y-1 px-3 pb-3">
                      <a href="services.html" class="block rounded-2xl px-4 py-3 text-sm text-white/90 transition duration-300 hover:bg-white/10 hover:text-[#ffb81c]">All Services</a>
                      <a href="wall-oven-repair.html" class="block rounded-2xl px-4 py-3 text-sm text-white/90 transition duration-300 hover:bg-white/10 hover:text-[#ffb81c]">Wall Oven Repair</a>
                      <a href="wall-oven-installation.html" class="block rounded-2xl px-4 py-3 text-sm text-white/90 transition duration-300 hover:bg-white/10 hover:text-[#ffb81c]">Wall Oven Installation</a>
                      <a href="wall-oven-maintenance.html" class="block rounded-2xl px-4 py-3 text-sm text-white/90 transition duration-300 hover:bg-white/10 hover:text-[#ffb81c]">Wall Oven Maintenance</a>
                      <a href="emergency-wall-oven-repair.html" class="block rounded-2xl px-4 py-3 text-sm text-white/90 transition duration-300 hover:bg-white/10 hover:text-[#ffb81c]">Emergency Wall Oven Repair</a>
                      <a href="wall-oven-parts.html" class="block rounded-2xl px-4 py-3 text-sm text-white/90 transition duration-300 hover:bg-white/10 hover:text-[#ffb81c]">Wall Oven Parts</a>
                    </div>
                  </div>
                </div>
              </div>

              <a href="faq.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10 hover:text-[#ffb81c]">FAQ</a>
              <a href="contact-us.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10 hover:text-[#ffb81c]">Contact Us</a>

              <a href="contact-us.html" class="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#ffb81c] px-6 py-3 text-sm font-semibold text-[#041e42] transition duration-300 hover:shadow-[0_16px_35px_rgba(255,184,28,0.28)]">
                Request Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
`;

const mainNavbar = document.getElementById("main-navbar");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const mobileServicesToggle = document.getElementById("mobile-services-toggle");
const mobileServicesMenu = document.getElementById("mobile-services-menu");
const mobileServicesIcon = document.getElementById("mobile-services-icon");

mobileMenuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("grid-rows-[1fr]");

  if (isOpen) {
    mobileMenu.classList.remove("grid-rows-[1fr]");
    mobileMenu.classList.add("grid-rows-[0fr]");
    mobileMenuIcon.classList.remove("fa-xmark");
    mobileMenuIcon.classList.add("fa-bars");

    mobileServicesMenu.classList.remove("grid-rows-[1fr]");
    mobileServicesMenu.classList.add("grid-rows-[0fr]");
    mobileServicesIcon.classList.remove("rotate-180");
  } else {
    mobileMenu.classList.remove("grid-rows-[0fr]");
    mobileMenu.classList.add("grid-rows-[1fr]");
    mobileMenuIcon.classList.remove("fa-bars");
    mobileMenuIcon.classList.add("fa-xmark");
  }
});

mobileServicesToggle.addEventListener("click", () => {
  const isOpen = mobileServicesMenu.classList.contains("grid-rows-[1fr]");

  if (isOpen) {
    mobileServicesMenu.classList.remove("grid-rows-[1fr]");
    mobileServicesMenu.classList.add("grid-rows-[0fr]");
    mobileServicesIcon.classList.remove("rotate-180");
  } else {
    mobileServicesMenu.classList.remove("grid-rows-[0fr]");
    mobileServicesMenu.classList.add("grid-rows-[1fr]");
    mobileServicesIcon.classList.add("rotate-180");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    mainNavbar.classList.remove("mt-4", "bg-[#041e42]/90");
    mainNavbar.classList.add("mt-2", "bg-[#041e42]");
  } else {
    mainNavbar.classList.remove("mt-2", "bg-[#041e42]");
    mainNavbar.classList.add("mt-4", "bg-[#041e42]/90");
  }
});