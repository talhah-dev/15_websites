const navbar = document.getElementById("navbar");

navbar.innerHTML = `
  <header id="siteHeader" class="fixed inset-x-0 top-0 z-50">
    <div id="navContainer" class="w-full transition-all duration-300">
      <div id="navBar" class="w-full border-b border-[#081838]/10 bg-white transition-all duration-300">
        <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="index.html" class="inline-flex items-center gap-3 shrink-0">
            <span class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#081838] text-white shadow-sm">
              <i class="fa-solid fa-house-chimney-window"></i>
            </span>
            <div>
              <p class="text-lg font-extrabold leading-tight text-[#081838]">Roofers Newark</p>
              <p class="text-xs font-semibold text-slate-500">New Jersey Roofing Company</p>
            </div>
          </a>

          <nav class="hidden lg:block">
            <ul class="flex items-center gap-1 text-sm font-semibold">
              <li><a class="navLink rounded-xl px-4 py-3 transition" href="index.html">Home</a></li>
              <li><a class="navLink rounded-xl px-4 py-3 transition" href="about.html">About</a></li>
              <li class="relative group">
                <a class="navLink inline-flex items-center gap-2 rounded-xl px-4 py-3 transition" href="services.html" aria-haspopup="true">
                  Services
                  <i class="fa-solid fa-chevron-down text-[11px] transition duration-200 group-hover:rotate-180"></i>
                </a>
                <div class="invisible absolute right-0 top-full z-50 mt-2 w-72 rounded-[1.5rem] border border-[#081838]/12 bg-white p-3 opacity-0 shadow-xl shadow-black/10 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div class="grid gap-2">
                    <a class="rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-[#04B2AA]/10 hover:text-[#081838]" href="services.html">All Services</a>
                    <a class="rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-[#04B2AA]/10 hover:text-[#081838]" href="residential-roofing.html">Residential Roofing</a>
                    <a class="rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-[#04B2AA]/10 hover:text-[#081838]" href="commercial-roofing.html">Commercial Roofing</a>
                    <a class="rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-[#04B2AA]/10 hover:text-[#081838]" href="multi-family-roofing.html">Multi-Family Roofing</a>
                    <a class="rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-[#04B2AA]/10 hover:text-[#081838]" href="roof-repair.html">Roof Repair</a>
                    <a class="rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-[#04B2AA]/10 hover:text-[#081838]" href="new-roofing.html">New Roofing</a>
                  </div>
                </div>
              </li>
              <li><a class="navLink rounded-xl px-4 py-3 transition" href="faq.html">FAQ</a></li>
              <li><a class="navLink rounded-xl px-4 py-3 transition" href="contact-us.html">Contact Us</a></li>
            </ul>
          </nav>

          <div class="hidden lg:flex items-center justify-end">
            <a href="contact-us.html" id="ctaBtn" class="inline-flex items-center rounded-xl bg-[#E7861C] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#E7861C]/25 transition hover:-translate-y-0.5 hover:brightness-95">
              Request Quote
            </a>
          </div>

          <div class="flex items-center justify-end lg:hidden">
            <button id="menuBtnMobile" type="button" aria-label="Open menu" aria-expanded="false" class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#081838] text-white shadow-md transition active:scale-[0.98]">
              <i class="fa-solid fa-bars text-base"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div id="menuOverlay" class="fixed inset-0 z-[60] hidden bg-black/45 backdrop-blur-sm opacity-0 transition-opacity duration-300"></div>

  <aside
    id="menuPanel"
    class="fixed right-0 top-0 z-[70] h-full w-[88%] max-w-sm translate-x-full bg-[#f4f8fb] shadow-2xl shadow-black/10 ring-1 ring-black/5 transition-transform duration-300 ease-out overflow-y-auto"
    aria-hidden="true"
  >
    <div class="flex items-center justify-between px-5 py-5">
      <a href="index.html" class="inline-flex items-center gap-3 shrink-0">
        <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-white shadow-sm" style="background:#081838;">
          <i class="fa-solid fa-house-chimney-window"></i>
        </span>
        <div>
          <p class="text-lg font-extrabold leading-tight text-slate-900">Roofers Newark</p>
          <p class="text-xs font-semibold text-slate-500">New Jersey Roofing Company</p>
        </div>
      </a>

      <button
        id="closeBtn"
        type="button"
        aria-label="Close menu"
        class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#081838]/10 text-[#081838] ring-1 ring-[#081838]/15 transition hover:bg-[#081838]/15 active:scale-[0.98]"
      >
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>

    <div class="px-5 pb-8">
      <nav class="mt-5">
        <ul class="space-y-1">
          <li><a class="mLink block px-1 py-3 text-base font-semibold text-slate-900 transition hover:text-[#04B2AA]" href="index.html">Home</a></li>
          <li><a class="mLink block px-1 py-3 text-base font-semibold text-slate-900 transition hover:text-[#04B2AA]" href="about.html">About</a></li>
          <li><a class="mLink block px-1 py-3 text-base font-semibold text-slate-900 transition hover:text-[#04B2AA]" href="services.html">Services</a></li>
          <li><a class="mLink block px-1 py-3 text-base font-semibold text-slate-900 transition hover:text-[#04B2AA]" href="residential-roofing.html">Residential Roofing</a></li>
          <li><a class="mLink block px-1 py-3 text-base font-semibold text-slate-900 transition hover:text-[#04B2AA]" href="commercial-roofing.html">Commercial Roofing</a></li>
          <li><a class="mLink block px-1 py-3 text-base font-semibold text-slate-900 transition hover:text-[#04B2AA]" href="multi-family-roofing.html">Multi-Family Roofing</a></li>
          <li><a class="mLink block px-1 py-3 text-base font-semibold text-slate-900 transition hover:text-[#04B2AA]" href="roof-repair.html">Roof Repair</a></li>
          <li><a class="mLink block px-1 py-3 text-base font-semibold text-slate-900 transition hover:text-[#04B2AA]" href="new-roofing.html">New Roofing</a></li>
          <li><a class="mLink block px-1 py-3 text-base font-semibold text-slate-900 transition hover:text-[#04B2AA]" href="faq.html">FAQ</a></li>
          <li><a class="mLink block px-1 py-3 text-base font-semibold text-slate-900 transition hover:text-[#04B2AA]" href="contact-us.html">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  </aside>
`;

const navLinks = Array.from(document.querySelectorAll(".navLink"));
const menuBtn = document.getElementById("menuBtnMobile");
const overlay = document.getElementById("menuOverlay");
const panel = document.getElementById("menuPanel");
const closeBtn = document.getElementById("closeBtn");

const lockScroll = () => {
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
};

const unlockScroll = () => {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
};

const setMenuClosed = (immediate = false) => {
  if (!overlay || !panel) return;
  if (immediate) {
    overlay.style.transition = "none";
    panel.style.transition = "none";
  }
  overlay.classList.add("hidden", "opacity-0");
  overlay.classList.remove("opacity-100");
  panel.classList.add("translate-x-full");
  panel.classList.remove("translate-x-0");
  panel.style.transform = "translateX(100%)";
  panel.setAttribute("aria-hidden", "true");
  if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  unlockScroll();
  if (immediate) {
    overlay.offsetHeight;
    panel.offsetHeight;
    overlay.style.transition = "";
    panel.style.transition = "";
  }
};

const openMenu = () => {
  if (!overlay || !panel) return;
  overlay.classList.remove("hidden");
  lockScroll();
  panel.setAttribute("aria-hidden", "false");
  if (menuBtn) menuBtn.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => {
    overlay.classList.remove("opacity-0");
    overlay.classList.add("opacity-100");
    panel.classList.remove("translate-x-full");
    panel.classList.add("translate-x-0");
    panel.style.transform = "translateX(0)";
  });
};

const closeMenu = () => {
  if (!overlay || !panel) return;
  overlay.classList.add("opacity-0");
  overlay.classList.remove("opacity-100");
  panel.classList.add("translate-x-full");
  panel.classList.remove("translate-x-0");
  panel.style.transform = "translateX(100%)";
  panel.setAttribute("aria-hidden", "true");
  if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  unlockScroll();
  setTimeout(() => overlay.classList.add("hidden"), 300);
};

if (menuBtn) menuBtn.addEventListener("click", openMenu);
if (closeBtn) closeBtn.addEventListener("click", closeMenu);
if (overlay) overlay.addEventListener("click", closeMenu);

navLinks.forEach((a) => {
  a.className = "navLink rounded-xl px-4 py-3 text-slate-700 hover:bg-[#081838] hover:text-white transition";
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

setMenuClosed(true);
