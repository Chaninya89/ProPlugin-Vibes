// Job filters
const chips = document.querySelectorAll('.chip');
const jobs = document.querySelectorAll('.job');
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => { c.classList.remove('active'); c.setAttribute('aria-selected', 'false'); });
    chip.classList.add('active');
    chip.setAttribute('aria-selected', 'true');
    const f = chip.dataset.filter;
    jobs.forEach(j => j.classList.toggle('hide', f !== 'all' && j.dataset.cat !== f));
  });
});

// Remember which role was picked and show it in the apply banner
const picked = document.getElementById('picked');
document.querySelectorAll('.apply').forEach(btn => {
  btn.addEventListener('click', () => {
    picked.textContent = '🎯 ตำแหน่งที่เลือก: ' + btn.dataset.role;
    picked.hidden = false;
  });
});

// Scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.about, .value, .perk, .job, .cta-banner, .c-card, .section-head')
  .forEach(el => { el.classList.add('reveal'); io.observe(el); });

// Floating apply button after hero
const fab = document.querySelector('.fab');
const hero = document.querySelector('.hero');
new IntersectionObserver(([e]) => fab.classList.toggle('show', !e.isIntersecting)).observe(hero);

document.getElementById('year').textContent = new Date().getFullYear();
