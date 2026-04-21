const navbar = document.getElementById("navbar");

navbar.innerHTML = `
  <header id="siteHeader" class="fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-all duration-300">
    <div class="mx-auto max-w-7xl">
      <nav id="siteNav" class="rounded-[1.75rem] border border-[#523126]/10 bg-white/85 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(82,49,38,0.28)] transition-all duration-300">
        <div class="flex items-center justify-between px-4 py-4 lg:px-8">
          <a href="index.html" class="flex items-center gap-3 min-w-0">
            <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#523126] text-white shadow-lg lg:h-14 lg:w-14">
              <i class="fa-solid fa-fan text-lg lg:text-xl"></i>
            </span>

            <div class="min-w-0">
              <p class="hidden sm:block text-lg font-bold leading-tight text-[#523126]">
                HVAC Repair Baltimore
              </p>
              <p class="block sm:hidden text-base font-bold leading-tight text-[#523126] truncate">
                HVAC Baltimore
              </p>
              <p class="hidden sm:block text-xs font-semibold uppercase tracking-[0.18em] text-[#99cc01]">
                Maryland HVAC Experts
              </p>
            </div>
          </a>

          <div class="hidden xl:flex items-center gap-2 rounded-full bg-[#f8f5f2] px-2 py-2">
            <a href="index.html" class="rounded-full px-5 py-3 text-sm font-semibold text-[#523126] transition-all duration-300 hover:bg-white hover:shadow-sm">Home</a>
            <a href="about.html" class="rounded-full px-5 py-3 text-sm font-semibold text-[#523126] transition-all duration-300 hover:bg-white hover:shadow-sm">About</a>

            <div class="relative group">
              <button type="button" class="flex items-center rounded-full px-5 py-3 text-sm font-semibold text-[#523126] transition-all duration-300 hover:bg-white hover:shadow-sm">
                Services
                <svg class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>

              <div class="pointer-events-none invisible absolute left-0 top-full w-80 translate-y-3 pt-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div class="rounded-[1.5rem] border border-[#523126]/10 bg-white p-3 shadow-[0_25px_60px_-15px_rgba(82,49,38,0.22)]">
                  <a href="services.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#523126] transition hover:bg-[#f8f5f2]">All Services</a>
                  <a href="hvac-repair.html" class="mt-1 block rounded-2xl px-4 py-3 text-sm font-semibold text-[#523126] transition hover:bg-[#f8f5f2]">HVAC Repair</a>
                  <a href="hvac-installation.html" class="mt-1 block rounded-2xl px-4 py-3 text-sm font-semibold text-[#523126] transition hover:bg-[#f8f5f2]">HVAC Installation</a>
                  <a href="hvac-maintenance.html" class="mt-1 block rounded-2xl px-4 py-3 text-sm font-semibold text-[#523126] transition hover:bg-[#f8f5f2]">HVAC Maintenance</a>
                  <a href="emergency-hvac-repair.html" class="mt-1 block rounded-2xl px-4 py-3 text-sm font-semibold text-[#523126] transition hover:bg-[#f8f5f2]">Emergency HVAC Repair</a>
                  <a href="hvac-parts.html" class="mt-1 block rounded-2xl px-4 py-3 text-sm font-semibold text-[#523126] transition hover:bg-[#f8f5f2]">HVAC Parts</a>
                </div>
              </div>
            </div>

            <a href="faq.html" class="rounded-full px-5 py-3 text-sm font-semibold text-[#523126] transition-all duration-300 hover:bg-white hover:shadow-sm">FAQ</a>
            <a href="contact-us.html" class="rounded-full px-5 py-3 text-sm font-semibold text-[#523126] transition-all duration-300 hover:bg-white hover:shadow-sm">Contact Us</a>
          </div>

          <button id="mobileNavToggle" type="button" class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#523126] text-white xl:hidden" aria-controls="mobileNavPanel" aria-expanded="false">
            <svg id="mobileMenuOpenIcon" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 7H20" stroke-linecap="round"></path>
              <path d="M4 12H20" stroke-linecap="round"></path>
              <path d="M4 17H20" stroke-linecap="round"></path>
            </svg>
            <svg id="mobileMenuCloseIcon" class="hidden h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 6L18 18" stroke-linecap="round"></path>
              <path d="M18 6L6 18" stroke-linecap="round"></path>
            </svg>
          </button>
        </div>

        <div id="mobileNavPanel" class="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out xl:hidden">
          <div class="border-t border-[#523126]/10 px-5 pb-5 pt-4">
            <div class="space-y-2">
              <a href="index.html" class="block rounded-2xl px-4 py-3 text-base font-semibold text-[#523126] transition hover:bg-[#f8f5f2]">Home</a>
              <a href="about.html" class="block rounded-2xl px-4 py-3 text-base font-semibold text-[#523126] transition hover:bg-[#f8f5f2]">About</a>

              <div class="rounded-[1.5rem] bg-[#f8f5f2] p-2">
                <button id="mobileServicesToggle" type="button" class="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-semibold text-[#523126]">
                  <span>Services</span>
                  <svg id="mobileServicesIcon" class="h-5 w-5 transition-transform duration-300" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </button>

                <div id="mobileServicesMenu" class="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out">
                  <div class="mt-1 space-y-1 px-2 pb-2">
                    <a href="services.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#523126] transition hover:bg-white">All Services</a>
                    <a href="hvac-repair.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#523126] transition hover:bg-white">HVAC Repair</a>
                    <a href="hvac-installation.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#523126] transition hover:bg-white">HVAC Installation</a>
                    <a href="hvac-maintenance.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#523126] transition hover:bg-white">HVAC Maintenance</a>
                    <a href="emergency-hvac-repair.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#523126] transition hover:bg-white">Emergency HVAC Repair</a>
                    <a href="hvac-parts.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#523126] transition hover:bg-white">HVAC Parts</a>
                  </div>
                </div>
              </div>

              <a href="faq.html" class="block rounded-2xl px-4 py-3 text-base font-semibold text-[#523126] transition hover:bg-[#f8f5f2]">FAQ</a>
              <a href="contact-us.html" class="block rounded-2xl px-4 py-3 text-base font-semibold text-[#523126] transition hover:bg-[#f8f5f2]">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
`;

const siteHeader = document.getElementById("siteHeader");
const siteNav = document.getElementById("siteNav");
const mobileNavToggle = document.getElementById("mobileNavToggle");
const mobileNavPanel = document.getElementById("mobileNavPanel");
const mobileMenuOpenIcon = document.getElementById("mobileMenuOpenIcon");
const mobileMenuCloseIcon = document.getElementById("mobileMenuCloseIcon");
const mobileServicesToggle = document.getElementById("mobileServicesToggle");
const mobileServicesMenu = document.getElementById("mobileServicesMenu");
const mobileServicesIcon = document.getElementById("mobileServicesIcon");

const updateNavbarOnScroll = () => {
  if (window.scrollY > 30) {
    siteHeader.classList.remove("pt-4");
    siteHeader.classList.add("pt-2");
    siteNav.classList.remove("rounded-[1.75rem]", "bg-white/85");
    siteNav.classList.add("rounded-[1.25rem]", "bg-white/95", "shadow-[0_20px_55px_-20px_rgba(82,49,38,0.35)]");
  } else {
    siteHeader.classList.remove("pt-2");
    siteHeader.classList.add("pt-4");
    siteNav.classList.remove("rounded-[1.25rem]", "bg-white/95", "shadow-[0_20px_55px_-20px_rgba(82,49,38,0.35)]");
    siteNav.classList.add("rounded-[1.75rem]", "bg-white/85");
  }
};

if (mobileNavToggle && mobileNavPanel) {
  mobileNavToggle.addEventListener("click", () => {
    const isOpen = mobileNavPanel.style.maxHeight && mobileNavPanel.style.maxHeight !== "0px";

    if (isOpen) {
      mobileNavPanel.style.maxHeight = "0px";
      mobileNavPanel.classList.add("opacity-0");
      mobileNavToggle.setAttribute("aria-expanded", "false");
      mobileMenuOpenIcon.classList.remove("hidden");
      mobileMenuCloseIcon.classList.add("hidden");
    } else {
      mobileNavPanel.style.maxHeight = mobileNavPanel.scrollHeight + "px";
      mobileNavPanel.classList.remove("opacity-0");
      mobileNavToggle.setAttribute("aria-expanded", "true");
      mobileMenuOpenIcon.classList.add("hidden");
      mobileMenuCloseIcon.classList.remove("hidden");
    }
  });
}

if (mobileServicesToggle && mobileServicesMenu) {
  mobileServicesToggle.addEventListener("click", () => {
    const isOpen = mobileServicesMenu.style.maxHeight && mobileServicesMenu.style.maxHeight !== "0px";

    if (isOpen) {
      mobileServicesMenu.style.maxHeight = "0px";
      mobileServicesMenu.classList.add("opacity-0");
      mobileServicesIcon.classList.remove("rotate-180");
    } else {
      mobileServicesMenu.style.maxHeight = mobileServicesMenu.scrollHeight + "px";
      mobileServicesMenu.classList.remove("opacity-0");
      mobileServicesIcon.classList.add("rotate-180");
    }

    setTimeout(() => {
      if (mobileNavPanel.style.maxHeight !== "0px") {
        mobileNavPanel.style.maxHeight = mobileNavPanel.scrollHeight + "px";
      }
    }, 300);
  });
}

window.addEventListener("scroll", updateNavbarOnScroll);
updateNavbarOnScroll();

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1280) {
    mobileNavPanel.style.maxHeight = "";
    mobileServicesMenu.style.maxHeight = "";
    mobileNavPanel.classList.remove("opacity-0");
    mobileServicesMenu.classList.remove("opacity-0");
    mobileServicesIcon.classList.remove("rotate-180");
    mobileMenuOpenIcon.classList.remove("hidden");
    mobileMenuCloseIcon.classList.add("hidden");
    mobileNavToggle.setAttribute("aria-expanded", "false");
  } else {
    if (!mobileNavPanel.style.maxHeight) {
      mobileNavPanel.style.maxHeight = "0px";
      mobileNavPanel.classList.add("opacity-0");
    }
    if (!mobileServicesMenu.style.maxHeight) {
      mobileServicesMenu.style.maxHeight = "0px";
      mobileServicesMenu.classList.add("opacity-0");
    }
  }
});