function isDesktop(){ return window.matchMedia('(min-width: 992px)').matches; }

/* ===== Mobile drawer (burger) ===== */
const btnBurger = document.getElementById('btnBurger');
const railOverlay = document.getElementById('railOverlay');
let lastFocusedBeforeOpen = null;

function firstFocusableInRail(){
  return document.querySelector('#rail .rail__brand, #rail .rail__btn, #rail a.nav-item');
}

function openMobileRail(){
  if (isDesktop()) return;
  lastFocusedBeforeOpen = document.activeElement;
  rail.classList.add('rail--expanded');
  document.body.classList.add('no-scroll');
  btnBurger?.setAttribute('aria-expanded', 'true');
  railOverlay?.classList.add('is-visible');
  railOverlay?.removeAttribute('hidden');
  firstFocusableInRail()?.focus();

}

function closeMobileRail(){
  rail.classList.remove('rail--expanded');
  document.body.classList.remove('no-scroll');
  btnBurger?.setAttribute('aria-expanded', 'false');
  railOverlay?.classList.remove('is-visible');
  railOverlay?.setAttribute('hidden', '');
  lastFocusedBeforeOpen?.focus?.();
  lastFocusedBeforeOpen = null;
}

btnBurger?.addEventListener('click', () => {
  if (isDesktop()) return;
  const opened = rail.classList.contains('rail--expanded');
  opened ? closeMobileRail() : openMobileRail();
});

railOverlay?.addEventListener('click', closeMobileRail);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !isDesktop() && rail.classList.contains('rail--expanded')){
    closeMobileRail();
  }
});

// Bersihkan state saat masuk desktop
window.addEventListener('resize', () => {
  if (isDesktop()){
    railOverlay?.classList.remove('is-visible');
    railOverlay?.setAttribute('hidden', '');
    document.body.classList.remove('no-scroll');
    btnBurger?.setAttribute('aria-expanded','false');
  }
});

function openMobileRail(){
  if (isDesktop()) return;
  // ... kode kamu yang lain
  rail.classList.add('rail--expanded');
  document.body.classList.add('no-scroll');
  document.body.classList.add('drawer-open');   // <— TAMBAHKAN INI
  // ...
}

function closeMobileRail(){
  rail.classList.remove('rail--expanded');
  document.body.classList.remove('no-scroll');
  document.body.classList.remove('drawer-open'); // <— TAMBAHKAN INI
  // ...
}
