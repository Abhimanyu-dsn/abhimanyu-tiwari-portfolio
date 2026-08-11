/* ============================================================
   Shared chrome (nav + footer) — Abhimanyu Tiwari
   ============================================================ */
(function(){
  const page = document.body.dataset.page || "";
  const base = document.body.dataset.base || "./";

  const projectsHref = page === "home" ? "#work" : `${base}index.html#work`;
  const aboutHref = page === "about" ? "#about-content" : `${base}about.html`;
  const experimentsHref = `${base}experiments.html`;

  const nav = document.createElement("header");
  nav.className = "nav";
  nav.id = "siteNav";
  nav.innerHTML = `
    <div class="container nav-inner">
      <a href="${base}index.html" class="brand">Abhimanyu Tiwari</a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="primaryNav" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
      <nav id="primaryNav" class="primary-nav">
        <a href="${projectsHref}" class="nav-link nav-scroll ${page==='work'?'is-active':''}" data-scroll="work">Projects</a>
        <a href="${aboutHref}" class="nav-link ${page==='about'?'is-active':''}">About</a>
        <a href="${experimentsHref}" class="nav-link ${page==='experiments'?'is-active':''}">Experiments with AI</a>
        <a href="${base}assets/resume/abhimanyu-tiwari-resume.pdf" class="btn btn-primary btn-sm" id="resumeBtn" download="Abhimanyu-Tiwari-Resume.pdf">
          Resume
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        </a>
      </nav>
    </div>`;
  document.body.prepend(nav);

  const ft = document.createElement("div");
  ft.innerHTML = `
    <section class="status">
      <div class="container status-inner">
        <span class="avail-chip avail-chip-lg"><span class="dot"></span> Available for work</span>
        <button class="back-top" id="backTop">Back to top <span class="back-arrow" style="background-color: rgb(255, 168, 97)">↑</span></button>
      </div>
    </section>
    <footer class="footer" id="contact">
      <div class="container">
        <div class="row footer-row">
          <div class="col-md-6 footer-me">
            <div class="me-card">
          <img src="${base}assets/about/profile.png" alt="Abhimanyu Tiwari" class="me-avatar"/>
          <div>
            <p class="me-name">Abhimanyu Tiwari</p>
            <p class="me-role muted">Product Designer at Peak42</p>
          </div>
        </div>
        <div class="contact-block">
          <p class="contact-label muted">Contact me</p>
          <div class="contact-rows">
            <a href="mailto:bangaloredesigner2020@gmail.com" class="contact-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              bangaloredesigner2020@gmail.com
            </a>
            <a href="tel:+917892139273" class="contact-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +91 7892139273
            </a>
            <a href="https://designsystem-rho.vercel.app/" class="contact-row" target="_blank" rel="noopener">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              Design System
            </a>
          </div>
        </div>
          </div>
          <div class="col-md-6 footer-connect">
            <h3 class="connect-title">Let's Work Together</h3>
            <p class="connect-sub">Feel free to reach out for collaborations or just a friendly hello.</p>
            <div class="connect-socials">
              <a href="https://www.linkedin.com/in/abhimanyu-tiwari-a745b4139/" target="_blank" rel="noopener" class="social-ic social-ic-lg" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.266 2.37 4.266 5.455v6.288zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
              <a href="https://www.instagram.com/abhimanyu.ux/" target="_blank" rel="noopener" class="social-ic social-ic-lg" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="https://medium.com/@bangaloredesigner2020" target="_blank" rel="noopener" class="social-ic social-ic-lg" aria-label="Medium"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg></a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>Made with <span class="heart">♥</span> by Abhimanyu Tiwari</p>
        </div>
      </div>
    </footer>`;
  while(ft.firstChild) document.body.appendChild(ft.firstChild);

  const toggle = nav.querySelector(".nav-toggle");
  const menu   = nav.querySelector("#primaryNav");
  toggle.addEventListener("click", ()=>{
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
    menu.classList.remove("open"); toggle.setAttribute("aria-expanded","false");
  }));

  document.querySelectorAll(".nav-scroll[data-scroll]").forEach(link=>{
    link.addEventListener("click", (e)=>{
      const id = link.getAttribute("data-scroll");
      const target = document.getElementById(id);
      if(target && page === "home"){
        e.preventDefault();
        const navHeight = nav.offsetHeight || 72;
        const y = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({top: y, behavior: "smooth"});
      }
    });
  });

  const bt = document.getElementById("backTop");
  if(bt) bt.addEventListener("click", ()=> window.scrollTo({top:0, behavior:"smooth"}));

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }
    });
  },{threshold:.12});
  document.querySelectorAll(".reveal-on-scroll, .work-card, .leader-card, .testi, .vibe-card, .section-head, .article-card, .exp-card, .image-card")
    .forEach(n=>{ n.classList.add("reveal"); io.observe(n); });
})();
