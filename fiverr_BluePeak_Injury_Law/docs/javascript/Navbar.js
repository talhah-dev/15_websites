const navbar = document.getElementById("navbar");

navbar.innerHTML = `
  <header id="siteHeader" class="fixed inset-x-0 top-0 z-50">
    <div id="navContainer" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div id="navBar" class="relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300">
        <a href="index.html" class="inline-flex items-center gap-3 shrink-0">
            <span class="shrink-0 h-10 w-10 rounded-2xl inline-flex items-center justify-center text-white shadow-sm"
              style="background:#004A99;">
              <i class="fa-solid fa-scale-balanced"></i>
            </span>
            <div>
              <p class="text-lg font-extrabold leading-tight text-slate-900">Injury Law</p>
              <p class="text-xs font-semibold text-slate-500">Personal Injury</p>
            </div>
        </a>

        <nav class="hidden md:block">
          <ul class="flex items-center justify-center gap-3 lg:gap-6 text-sm font-semibold">
            <li><a class="navLink transition" href="index.html">Home</a></li>
            <li><a class="navLink transition" href="about.html">About</a></li>
            <li><a class="navLink transition" href="auto-accident.html">Auto Accident</a></li>
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
            Get Quote
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
              style="background:#004A99;">
              <i class="fa-solid fa-scale-balanced"></i>
            </span>
            <div>
              <p class="text-lg font-extrabold leading-tight text-slate-900">Injury Law</p>
              <p class="text-xs font-semibold text-slate-500">Personal Injury</p>
            </div>
        </a>

      <button
        id="closeBtn"
        type="button"
        aria-label="Close menu"
        class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#004A99]/10 text-[#004A99] ring-1 ring-[#004A99]/20 transition hover:bg-[#004A99]/15 active:scale-[0.98]"
      >
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>

    <div class="px-5 pb-8">
      
      <nav class="mt-5">
        <ul class="space-y-2">
          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-[#004A99]/5 transition"
              href="index.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#004A99]/10 text-[#004A99] ring-1 ring-[#004A99]/15">
                <i class="fa-solid fa-house"></i>
              </span>
              Home
            </a>
          </li>

          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-[#004A99]/5 transition"
              href="about.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#004A99]/10 text-[#004A99] ring-1 ring-[#004A99]/15">
                <i class="fa-solid fa-circle-info"></i>
              </span>
              About
            </a>
          </li>

          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-[#004A99]/5 transition"
              href="auto-accident.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#004A99]/10 text-[#004A99] ring-1 ring-[#004A99]/15">
                <i class="fa-solid fa-car-burst"></i>
              </span>
              Auto Accident
            </a>
          </li>

          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-[#004A99]/5 transition"
              href="faq.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#004A99]/10 text-[#004A99] ring-1 ring-[#004A99]/15">
                <i class="fa-solid fa-circle-question"></i>
              </span>
              FAQ
            </a>
          </li>

          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-[#004A99]/5 transition"
              href="contact-us.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#004A99]/10 text-[#004A99] ring-1 ring-[#004A99]/15">
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
const brandLogoDesktop = document.getElementById("brandLogoDesktop");
const brandLogoMobile = document.getElementById("brandLogoMobile");
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
  if (brandLogoDesktop) brandLogoDesktop.className = "h-14 shrink-0 rounded-2xl object-cover";
  if (brandLogoMobile) brandLogoMobile.className = "h-14 shrink-0 rounded-2xl object-cover";

  navLinks.forEach((a) => {
    a.className = "navLink inline-flex items-center gap-1 text-slate-700 hover:text-[#004A99] transition";
  });

  if (ctaBtn) ctaBtn.className = "inline-flex items-center rounded-2xl bg-[#004A99] pr-4 pl-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 active:translate-y-0 hover:brightness-110";
  if (menuBtn) menuBtn.className = "group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#004A99]/10 text-[#004A99] ring-1 ring-[#004A99]/20 transition hover:bg-[#004A99]/15 active:scale-[0.98] md:hidden";
};

const setScrolledStyle = () => {
  if (navContainer) navContainer.className = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-300";
  if (navBar) navBar.className = "relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 bg-white/85 ring-1 ring-black/10 shadow-lg shadow-black/5 backdrop-blur";
  if (brandLogoDesktop) brandLogoDesktop.className = "h-14 shrink-0 rounded-2xl object-cover";
  if (brandLogoMobile) brandLogoMobile.className = "h-14 shrink-0 rounded-2xl object-cover";

  navLinks.forEach((a) => {
    a.className = "navLink inline-flex items-center gap-1 text-slate-700 hover:text-[#004A99] transition";
  });

  if (ctaBtn) ctaBtn.className = "inline-flex items-center rounded-2xl bg-[#004A99] pr-4 pl-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 active:translate-y-0 hover:brightness-110";
  if (menuBtn) menuBtn.className = "group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#004A99]/10 text-[#004A99] ring-1 ring-[#004A99]/20 transition hover:bg-[#004A99]/15 active:scale-[0.98] md:hidden";
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
