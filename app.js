/* ============================================================
   Abhimanyu Tiwari — Portfolio interactions
   ============================================================ */

// ---------- Data ----------
const PROJECTS = [
  {
    id:"battlexo", title:"Redesign of BattleXO Website",
    desc:"I worked as a UI/UX Designer, collaborating with the management team to understand business requirements and provide design inputs. I redesigned the BattleXO website and app with a focus on improving the overall user experience and visual interface.",
    img:"assets/home/project-battlexo.png", thumbClass:"thumb-famli",
    tags:[{l:"Website",c:"purple"},{l:"Gaming",c:""},{l:"UX/UI Design",c:""}],
    outcomes:[
      {v:"Website", l:"& app redesign"},
      {v:"UX Focus", l:"Clarity & usability"},
      {v:"Management", l:"Collaboration"}
    ],
    url:"battlexo.html"
  },
  {
    id:"chomp", title:"Chomp — Our AI-powered Food Bestie",
    desc:"Redesigned the Chomp mobile app as an AI-powered food experience, making home cooking simpler, smarter, and healthier through recipe discovery, ingredient scanning, and guided cooking flows.",
    img:"assets/home/project-chomp.png", thumbClass:"thumb-otc",
    tags:[{l:"Mobile App",c:"green"},{l:"AI",c:""},{l:"UX/UI Design",c:""}],
    outcomes:[
      {v:"AI Scan", l:"Fridge ingredients"},
      {v:"Recipe", l:"Discovery"},
      {v:"Healthier", l:"Home cooking"}
    ],
    url:"chomp.html"
  },
  {
    id:"zepto", title:"Zepto",
    desc:"An exploration of integrating AI into Zepto to make the shopping experience more intelligent, personalized, and helpful, from smart recommendations to an assistant that plans your order.",
    img:"assets/home/project-zepto.png", thumbClass:"thumb-phlebo",
    tags:[{l:"AI",c:"blue"},{l:"E-commerce",c:""},{l:"Personalization",c:""}],
    outcomes:[
      {v:"AI Assistant", l:"Product discovery"},
      {v:"Smart Lists", l:"Predictive needs"},
      {v:"10 min", l:"Grocery delivery"}
    ],
    url:"zepto.html"
  },
  {
    id:"flytbase", title:"FlytBase",
    desc:"An emergency response platform designed to respond to natural disasters. When a disaster occurs, the system identifies and dispatches the nearest available emergency resources such as police, medical teams, and fire departments, while deploying drones to the affected area for rapid aerial coverage and situational awareness.",
    img:"assets/home/project-flybase.png", thumbClass:"thumb-thyro",
    tags:[{l:"Emergency Ops",c:"amber"},{l:"Drones",c:""},{l:"Real-time",c:""}],
    outcomes:[
      {v:"90 sec", l:"Response target"},
      {v:"Dispatch", l:"Police & medical"},
      {v:"Aerial", l:"Situational awareness"}
    ],
    url:"flytbase.html"
  }
];

const LEADERS = [
  {img:"assets/home/il-advocacy.png", t:"5+ Years of Experience", d:"Designing products for new and emerging markets in India across multiple roles and full product life cycles."},
  {img:"assets/home/il-process.png", t:"3 Competitions Participated", d:"National-level swimming and regional-level cricket, competitive sports that sharpen teamwork and performing under pressure."},
  {img:"assets/home/il-lead.png", t:"3+ Projects I've Worked On", d:"End-to-end product design from research and conceptualization through interface design and delivery."},
  {img:"assets/home/il-scale.png", t:"Hybrid Product Designer", d:"Strong grasp of technology and systems from working closely with developers, plus basic HTML and CSS learned on the job."}
];

const TESTIMONIALS = [
  {q:"Working with Abhimanyu was such a smooth ride. They have this amazing ability to turn rough ideas into clean, beautiful designs that just click. Super creative, easy to work with, and always bringing something extra to the table. Honestly, any project feels lighter (and better) with them on board.", n:"Mohini Bhowmick", r:"UI/UX Designer", i:"M"},
  {q:"I had the chance to work with Abhi on a UI/UX project and it was honestly a great experience. I really like how he thinks through problems his approach is creative, practical, and very user-focused. He's super disciplined and always makes sure to meet deadlines without compromising on quality. Also, he's quite particular about the details, which really shows in his work. Overall, Abhi is someone who brings both creativity and reliability to the table.", n:"Chelsi Khatod", r:"Visual Designer", i:"C"},
  {q:"Abhimanyu is a highly skilled UI/UX designer with an exceptional eye for visual detail. His designs are clean, modern, and not just visually appealing but also deeply intuitive. He has a strong ability to translate ideas into seamless user experiences, ensuring that every interface feels effortless to use. His balance of aesthetics and usability makes his work stand out.", n:"Ishy Srivastava", r:"Product Designer", i:"I"}
];

const EXPERIMENTS = [
  {
    title:"AI Shopping Assistant Flows",
    desc:"Prototyped conversational UI patterns for grocery apps, helping users discover products, compare options, and build smarter carts with natural language.",
    img:"assets/home/project-zepto.png",
    tags:["AI", "E-commerce", "Prototype"]
  },
  {
    title:"Generative UI for Recipe Apps",
    desc:"Explored how AI can surface personalized meal plans and ingredient scans, turning rough kitchen photos into structured cooking steps and grocery lists.",
    img:"assets/home/project-chomp.png",
    tags:["AI", "Food", "Mobile"]
  },
  {
    title:"Rapid Wireframe Copilot",
    desc:"Built a lightweight workflow using AI tools to accelerate early exploration, from problem framing to clickable flows before high-fidelity polish.",
    img:"assets/home/project-battlexo.png",
    tags:["Workflow", "Figma", "Speed"]
  }
];

// ---------- Render ----------
const el = (tag, cls, html)=>{const e=document.createElement(tag); if(cls) e.className=cls; if(html!=null) e.innerHTML=html; return e;};

function projectLinkAttrs(href){
  const external = /^https?:\/\//i.test(href);
  return {
    href,
    external,
    attrs: external ? ' target="_blank" rel="noopener"' : ""
  };
}

function renderWork(){
  const list = document.getElementById("workList");
  if(!list) return;
  list.innerHTML = "";

  // Gallery: projects after the featured first item
  const gallery = PROJECTS.slice(1);
  gallery.forEach((p,i)=>{
    const {href, attrs} = projectLinkAttrs(p.url || "index.html#work");
    const card = el("article", "project-card" + (i === gallery.length - 1 ? " project-card--wide" : ""));
    card.innerHTML = `
      <a href="${href}" class="project-thumb ${p.thumbClass}"${attrs}>
        <img src="${p.img}" alt="${p.title} preview" loading="lazy"/>
      </a>
      <div class="project-body">
        <h3 class="project-title"><a href="${href}" class="work-title-link"${attrs}>${p.title} <span class="title-arrow">→</span></a></h3>
        <p class="project-desc">${p.desc}</p>
        <div class="tag-row">
          ${p.tags.map(t=>`<span class="tag ${t.c||""}">${t.l}</span>`).join("")}
        </div>
      </div>`;
    list.appendChild(card);
  });
}

function renderFeatured(){
  const host = document.getElementById("featuredProject");
  if(!host) return;
  const p = PROJECTS[0];
  if(!p) return;
  const {href, attrs} = projectLinkAttrs(p.url || "index.html#work");
  host.innerHTML = `
    <article class="featured-card">
      <a href="${href}" class="featured-thumb ${p.thumbClass}"${attrs}>
        <img src="${p.img}" alt="${p.title} preview" loading="lazy"/>
      </a>
      <div class="featured-body">
        <h3 class="featured-title"><a href="${href}" class="work-title-link"${attrs}>${p.title} <span class="title-arrow">→</span></a></h3>
        <p class="featured-desc">${p.desc}</p>
        <div class="tag-row">
          ${p.tags.map(t=>`<span class="tag ${t.c||""}">${t.l}</span>`).join("")}
        </div>
        <p class="outcomes-label">Key outcomes</p>
        <div class="outcomes">
          ${p.outcomes.map(o=>`<div class="outcome"><span class="outcome-val">${o.v}</span><span class="outcome-lbl">${o.l}</span></div>`).join("")}
        </div>
      </div>
    </article>`;
}

function renderLeaders(){
  const grid = document.getElementById("leaderGrid");
  if(!grid) return;
  grid.innerHTML = "";
  LEADERS.forEach((l)=>{
    const card = el("article", "leader-card");
    card.innerHTML = `
      <div class="leader-ic" aria-hidden="true"><img src="${l.img}" alt=""/></div>
      <div class="leader-body">
        <h3>${l.t}</h3>
        <p>${l.d}</p>
      </div>`;
    grid.appendChild(card);
  });
}

function renderTestimonials(){
  const grid = document.getElementById("testiGrid");
  if(!grid) return;
  grid.innerHTML = "";

  TESTIMONIALS.forEach((t) => {
    const card = el("article", "testi");
    card.innerHTML = `
      <span class="testi-mark" aria-hidden="true">“</span>
      <p class="testi-quote">${t.q}</p>
      <div class="testi-author">
        <div class="testi-avatar">${t.i}</div>
        <div>
          <p class="testi-name">${t.n}</p>
          <p class="testi-role">${t.r}</p>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

function renderExperiments(){
  const grid = document.getElementById("experimentGrid");
  if(!grid) return;
  grid.innerHTML = "";
  EXPERIMENTS.forEach((exp)=>{
    const card = el("article", "vibe-card reveal");
    card.innerHTML = `
      <a href="https://medium.com/@bangaloredesigner2020" class="vibe-thumb" target="_blank" rel="noopener">
        <img src="${exp.img}" alt="${exp.title}" loading="lazy"/>
      </a>
      <div class="vibe-body">
        <h3><a href="https://medium.com/@bangaloredesigner2020" class="vibe-title-link" target="_blank" rel="noopener">${exp.title}</a></h3>
        <p>${exp.desc}</p>
        <div class="tag-row">
          ${exp.tags.map(t=>`<span class="tag">${t}</span>`).join("")}
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

// ---------- Tweaks ----------
const T = window.__TWEAKS__ || {};
function applyTweaks(){
  document.documentElement.style.setProperty("--accent", T.accent);
  document.documentElement.style.setProperty("--head-font", T.headFont);
  document.documentElement.style.setProperty("--container", T.container + "px");
  document.body.classList.toggle("dark", !!T.dark);
  const h = document.querySelector(".hero-title");
  if(h){
    const parts = T.heroTitle.trim().split(/\s+/);
    if(parts.length > 1){
      const last = parts.pop();
      h.innerHTML = parts.join(" ") + ' <span class="accent-name">' + last + '</span>';
    } else {
      h.innerHTML = '<span class="accent-name">' + T.heroTitle + '</span>';
    }
  }
}
function syncTweakUI(){
  const accent = document.getElementById("twAccent");
  if(!accent) return;
  accent.value = T.accent;
  document.getElementById("twHeadFont").value = T.headFont;
  document.getElementById("twHeroTitle").value = T.heroTitle;
  document.getElementById("twDark").checked = !!T.dark;
  document.getElementById("twContainer").value = T.container;
}
function wireTweaks(){
  const bind = (id, key, attr="value", parse=v=>v)=>{
    const node = document.getElementById(id);
    if(!node) return;
    const ev = attr === "checked" ? "change" : "input";
    node.addEventListener(ev, ()=>{
      T[key] = parse(node[attr]);
      applyTweaks();
      persist({[key]: T[key]});
    });
  };
  bind("twAccent","accent");
  bind("twHeadFont","headFont");
  bind("twHeroTitle","heroTitle");
  bind("twDark","dark","checked");
  bind("twContainer","container","value", v=>Number(v));
}
function persist(edits){
  try{
    window.parent.postMessage({type:"__edit_mode_set_keys", edits}, "*");
  }catch(e){}
}

window.addEventListener("message", (e)=>{
  const d = e.data || {};
  const panel = document.getElementById("tweaks");
  if(!panel) return;
  if(d.type === "__activate_edit_mode"){
    panel.classList.add("open");
    panel.setAttribute("aria-hidden","false");
  } else if (d.type === "__deactivate_edit_mode"){
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden","true");
  }
});
try{ window.parent.postMessage({type:"__edit_mode_available"}, "*"); }catch(e){}

// ---------- Boot ----------
document.addEventListener("DOMContentLoaded", ()=>{
  if(document.getElementById("workList")) renderWork();
  if(document.getElementById("featuredProject")) renderFeatured();
  if(document.getElementById("leaderGrid")) renderLeaders();
  if(document.getElementById("testiGrid")) renderTestimonials();
  if(document.getElementById("experimentGrid")) renderExperiments();
  if(document.getElementById("twAccent")){
    applyTweaks(); syncTweakUI(); wireTweaks();
  }

  // Observe dynamically rendered cards (chrome.js runs before render)
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }
    });
  },{threshold:.12});
  document.querySelectorAll(".project-card, .featured-card, .leader-card, .testi, .vibe-card")
    .forEach(n=>{ if(!n.classList.contains("in")){ n.classList.add("reveal"); io.observe(n); } });
});
