const navbar = document.getElementById("navbar");

navbar.innerHTML = `
  <header id="siteHeader" class="fixed inset-x-0 top-0 z-50">
    <div id="navContainer" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div id="navBar" class="relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300">
        <a href="index.html" class="inline-flex items-center gap-3 shrink-0">
          <span class="shrink-0 h-10 w-10 rounded-2xl inline-flex items-center justify-center text-white shadow-sm"
            style="background:#ab84ce;">
            <i class="fa-solid fa-house-chimney-crack"></i>
          </span>
          <div>
            <p class="text-lg font-extrabold leading-tight text-slate-900">Roofers Los Angeles</p>
            <p class="text-xs font-semibold text-slate-500">California Roofing Services</p>
          </div>
        </a>

        <nav class="hidden md:block">
          <ul class="flex items-center justify-center gap-3 lg:gap-6 text-sm font-semibold">
            <li><a class="navLink transition" href="index.html">Home</a></li>
            <li><a class="navLink transition" href="about.html">About</a></li>
            <li class="relative group py-3 -my-3">
              <a class="navLink inline-flex items-center gap-2 transition" href="services.html" aria-haspopup="true">
                Services
                <i class="fa-solid fa-chevron-down text-[11px] transition duration-200 group-hover:rotate-180"></i>
              </a>
              <div class="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/95 p-3 opacity-0 shadow-xl shadow-black/10 backdrop-blur transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100">
                <div class="grid gap-2">
                  <a class="rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-[#ab84ce]/10 hover:text-slate-900" href="services.html">All Services</a>
                  <a class="rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-[#ab84ce]/10 hover:text-slate-900" href="residential-roofing.html">Residential Roofing</a>
                  <a class="rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-[#ab84ce]/10 hover:text-slate-900" href="commercial-roofing.html">Commercial Roofing</a>
                  <a class="rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-[#ab84ce]/10 hover:text-slate-900" href="multi-family-roofing.html">Multi-Family Roofing</a>
                  <a class="rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-[#ab84ce]/10 hover:text-slate-900" href="roof-repair.html">Roof Repair</a>
                  <a class="rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-[#ab84ce]/10 hover:text-slate-900" href="new-roofing.html">New Roofing</a>
                </div>
              </div>
            </li>
            <li><a class="navLink transition" href="faq.html">FAQ</a></li>
            <li><a class="navLink transition" href="contact-us.html">Contact Us</a></li>
          </ul>
        </nav>

        <div class="hidden md:flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="contact-us.html"
            id="ctaBtn"
            class="inline-flex items-center pr-4 pl-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 active:translate-y-0"
          >
            Free Estimate
          </a>
        </div>

        <button
          id="menuBtnMobile"
          type="button"
          aria-label="Open menu"
          aria-expanded="false"
          class="group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl transition active:scale-[0.98] md:hidden"
        >
          <i class="fa-solid fa-bars text-base"></i>
        </button>
      </div>
    </div>
  </header>

  <div id="menuOverlay" class="fixed inset-0 z-[60] hidden bg-black/40 backdrop-blur-sm opacity-0 transition-opacity duration-300"></div>

  <aside
    id="menuPanel"
    class="fixed right-0 top-0 z-[70] h-full w-[88%] max-w-sm translate-x-full bg-white shadow-2xl shadow-black/10 ring-1 ring-black/5 transition-transform duration-300 ease-out overflow-y-auto"
    aria-hidden="true"
  >
    <div class="flex items-center justify-between px-5 py-5">
      <a href="index.html" class="inline-flex items-center gap-3 shrink-0">
        <span class="shrink-0 h-10 w-10 rounded-2xl inline-flex items-center justify-center text-white shadow-sm"
          style="background:#ab84ce;">
          <i class="fa-solid fa-house-chimney-crack"></i>
        </span>
        <div>
          <p class="text-lg font-extrabold leading-tight text-slate-900">Roofers Los Angeles</p>
          <p class="text-xs font-semibold text-slate-500">California Roofing Services</p>
        </div>
      </a>

      <button
        id="closeBtn"
        type="button"
        aria-label="Close menu"
        class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ab84ce]/10 text-[#ab84ce] ring-1 ring-[#ab84ce]/20 transition hover:bg-[#ab84ce]/15 active:scale-[0.98]"
      >
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>

    <div class="px-5 pb-8">
      <nav class="mt-5">
        <ul class="space-y-2">
          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-[#ab84ce]/5 transition"
              href="index.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ab84ce]/10 text-[#ab84ce] ring-1 ring-[#ab84ce]/15">
                <i class="fa-solid fa-house"></i>
              </span>
              Home
            </a>
          </li>
          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-[#ab84ce]/5 transition"
              href="about.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ab84ce]/10 text-[#ab84ce] ring-1 ring-[#ab84ce]/15">
                <i class="fa-solid fa-circle-info"></i>
              </span>
              About
            </a>
          </li>
          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-[#ab84ce]/5 transition"
              href="services.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ab84ce]/10 text-[#ab84ce] ring-1 ring-[#ab84ce]/15">
                <i class="fa-solid fa-layer-group"></i>
              </span>
              Services
            </a>
          </li>
          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-[#ab84ce]/5 transition"
              href="residential-roofing.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ab84ce]/10 text-[#ab84ce] ring-1 ring-[#ab84ce]/15">
                <i class="fa-solid fa-house"></i>
              </span>
              Residential Roofing
            </a>
          </li>
          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-[#ab84ce]/5 transition"
              href="commercial-roofing.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ab84ce]/10 text-[#ab84ce] ring-1 ring-[#ab84ce]/15">
                <i class="fa-solid fa-building"></i>
              </span>
              Commercial Roofing
            </a>
          </li>
          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-[#ab84ce]/5 transition"
              href="multi-family-roofing.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ab84ce]/10 text-[#ab84ce] ring-1 ring-[#ab84ce]/15">
                <i class="fa-solid fa-city"></i>
              </span>
              Multi-Family Roofing
            </a>
          </li>
          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-[#ab84ce]/5 transition"
              href="roof-repair.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ab84ce]/10 text-[#ab84ce] ring-1 ring-[#ab84ce]/15">
                <i class="fa-solid fa-screwdriver-wrench"></i>
              </span>
              Roof Repair
            </a>
          </li>
          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-[#ab84ce]/5 transition"
              href="new-roofing.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ab84ce]/10 text-[#ab84ce] ring-1 ring-[#ab84ce]/15">
                <i class="fa-solid fa-hammer"></i>
              </span>
              New Roofing
            </a>
          </li>
          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-[#ab84ce]/5 transition"
              href="faq.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ab84ce]/10 text-[#ab84ce] ring-1 ring-[#ab84ce]/15">
                <i class="fa-solid fa-circle-question"></i>
              </span>
              FAQ
            </a>
          </li>
          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-[#ab84ce]/5 transition"
              href="contact-us.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ab84ce]/10 text-[#ab84ce] ring-1 ring-[#ab84ce]/15">
                <i class="fa-solid fa-envelope"></i>
              </span>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      <div class="h-8"></div>
    </div>
  </aside>
`;

const navBar = document.getElementById("navBar");
const navContainer = document.getElementById("navContainer");
const navLinks = Array.from(document.querySelectorAll(".navLink"));
const ctaBtn = document.getElementById("ctaBtn");
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
  overlay.classList.add("hidden");
  overlay.classList.add("opacity-0");
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

const setTopStyle = () => {
  if (navContainer) navContainer.className = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300";
  if (navBar) navBar.className = "relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 bg-transparent ring-1 ring-transparent";

  navLinks.forEach((a) => {
    a.className = "navLink inline-flex items-center gap-1 text-slate-700 hover:text-[#ab84ce] transition";
  });

  if (ctaBtn) ctaBtn.className = "inline-flex items-center rounded-2xl bg-[#ab84ce] pr-4 pl-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 active:translate-y-0 hover:brightness-110";
  if (menuBtn) menuBtn.className = "group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ab84ce]/10 text-[#ab84ce] ring-1 ring-[#ab84ce]/20 transition hover:bg-[#ab84ce]/15 active:scale-[0.98] md:hidden";
};

const setScrolledStyle = () => {
  if (navContainer) navContainer.className = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-300";
  if (navBar) navBar.className = "relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 bg-white/85 ring-1 ring-black/10 shadow-lg shadow-black/5 backdrop-blur";

  navLinks.forEach((a) => {
    a.className = "navLink inline-flex items-center gap-1 text-slate-700 hover:text-[#ab84ce] transition";
  });

  if (ctaBtn) ctaBtn.className = "inline-flex items-center rounded-2xl bg-[#ab84ce] pr-4 pl-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 active:translate-y-0 hover:brightness-110";
  if (menuBtn) menuBtn.className = "group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ab84ce]/10 text-[#ab84ce] ring-1 ring-[#ab84ce]/20 transition hover:bg-[#ab84ce]/15 active:scale-[0.98] md:hidden";
};

const applyNavState = () => {
  const atTop = window.scrollY <= 1;
  if (atTop) setTopStyle();
  else setScrolledStyle();
};

let ticking = false;
const onScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    applyNavState();
    ticking = false;
  });
};

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

applyNavState();
setMenuClosed(true);
