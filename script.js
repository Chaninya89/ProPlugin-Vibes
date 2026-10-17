// Job filters
const segs = document.querySelectorAll('.seg');
const jobs = document.querySelectorAll('.job');
segs.forEach(seg => {
  seg.addEventListener('click', () => {
    segs.forEach(s => { s.classList.remove('active'); s.setAttribute('aria-selected', 'false'); });
    seg.classList.add('active');
    seg.setAttribute('aria-selected', 'true');
    const f = seg.dataset.filter;
    jobs.forEach(j => j.classList.toggle('hide', f !== 'all' && j.dataset.cat !== f));
  });
});

// Remember which role was picked and show it in the apply section
const picked = document.getElementById('picked');
document.querySelectorAll('.apply').forEach(btn => {
  if (!btn.dataset.role) return;
  btn.addEventListener('click', () => {
    picked.textContent = 'ตำแหน่งที่เลือก — ' + btn.dataset.role;
    picked.hidden = false;
  });
});

// Scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.about-grid, .stats, .values article, .life-head, .perks li, .job, .apply-inner, .contact-grid > *, .jobs-head')
  .forEach(el => { el.classList.add('reveal'); io.observe(el); });

document.getElementById('year').textContent = new Date().getFullYear();
