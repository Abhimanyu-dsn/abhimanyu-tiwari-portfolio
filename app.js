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

function renderWork(){
  const list = document.getElementById("workList");
  list.innerHTML = "";
  PROJECTS.forEach((p,i)=>{
    const card = el("article", "work-card" + (i%2?" reverse":""));
    const href = p.url || "index.html#work";
    const external = /^https?:\/\//i.test(href);
    const linkAttrs = external ? " target=\"_blank\" rel=\"noopener\"" : "";
    card.innerHTML = `
      <div class="work-thumb ${p.thumbClass}" data-id="${p.id}" data-url="${href}" data-external="${external}">
        <img src="${p.img}" alt="${p.title} preview" loading="lazy"/>
      </div>
      <div class="work-body">
        <h3 class="work-title"><a href="${href}" class="work-title-link"${linkAttrs}>${p.title} <span class="title-arrow">→</span></a></h3>
        <p class="work-desc">${p.desc}</p>
        <div class="tag-row">
          ${p.tags.map(t=>`<span class="tag ${t.c||""}">${t.l}</span>`).join("")}
        </div>
        <p class="outcomes-label">Key outcomes</p>
        <div class="outcomes">
          ${p.outcomes.map(o=>`<div class="outcome"><span class="outcome-val">${o.v}</span><span class="outcome-lbl">${o.l}</span></div>`).join("")}
        </div>
      </div>`;
    list.appendChild(card);
  });

  list.querySelectorAll(".work-thumb[data-id]").forEach(n=>{
    n.addEventListener("click", ()=> {
      const url = n.dataset.url;
      if(!url) return;
      if(n.dataset.external === "true") window.open(url, "_blank");
      else window.location.href = url;
    });
  });
}

function renderLeaders(){
  const grid = document.getElementById("leaderGrid");
  grid.innerHTML = "";
  const cardStyles = [
    {card:"border-width:0px;border-radius:16px;padding:8px", ic:"background-color:rgb(255,255,255);padding:0px"},
    {card:"border-width:0px;border-radius:16px;padding:8px", ic:"background-color:rgb(255,255,255);padding:0px"},
    {card:"border-width:0px;border-radius:16px;padding:8px", ic:"background-color:rgb(255,255,255);padding:0px"},
    {card:"border-width:0px;border-radius:1px;padding:8px", ic:"background-color:rgb(255,255,255);padding:0px;border-radius:0px", col:"padding:0px 0px 0px 20px;opacity:1"},
  ];
  LEADERS.forEach((l,i)=>{
    const s = cardStyles[i] || {};
    const col = el("div","col-md-6");
    if(s.col) col.setAttribute("style", s.col);
    col.innerHTML = `
      <div class="leader-card h-100" style="${s.card||''}">
        <div class="leader-ic" aria-hidden="true" style="${s.ic||''}"><img src="${l.img}" alt=""/></div>
        <div class="leader-body">
          <h3>${l.t}</h3>
          <p>${l.d}</p>
        </div>
      </div>`;
    grid.appendChild(col);
  });
}

function renderTestimonials(){
  const grid = document.getElementById("testiGrid");
  if(!grid) return;
  grid.innerHTML = "";

  const durations = [15, 19, 17];
  const colSize = Math.ceil(TESTIMONIALS.length / 3);
  const cols = [
    TESTIMONIALS.slice(0, colSize),
    TESTIMONIALS.slice(colSize, colSize * 2),
    TESTIMONIALS.slice(colSize * 2)
  ].filter(c => c.length);

  cols.forEach((colTestis, ci) => {
    const col = el("div", "testi-col");
    const track = el("div", "testi-track");
    track.style.setProperty("--dur", durations[ci] + "s");

    [0, 1].forEach(() => {
      colTestis.forEach((t) => {
        const card = el("article", "testi");
        card.innerHTML = `
          <p class="testi-quote">"${t.q}"</p>
          <div class="testi-author">
            <div class="testi-avatar">${t.i}</div>
            <div>
              <p class="testi-name">${t.n}</p>
              <p class="testi-role">${t.r}</p>
            </div>
          </div>`;
        track.appendChild(card);
      });
    });

    col.appendChild(track);
    grid.appendChild(col);
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
      h.innerHTML = parts.join(" ") + ' <span class="accent-underline">' + last + '</span>';
    } else {
      h.innerHTML = '<span class="accent-underline">' + T.heroTitle + '</span>';
    }
  }
}
function syncTweakUI(){
  document.getElementById("twAccent").value = T.accent;
  document.getElementById("twHeadFont").value = T.headFont;
  document.getElementById("twHeroTitle").value = T.heroTitle;
  document.getElementById("twDark").checked = !!T.dark;
  document.getElementById("twContainer").value = T.container;
}
function wireTweaks(){
  const bind = (id, key, attr="value", parse=v=>v)=>{
    const node = document.getElementById(id);
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
  if(d.type === "__activate_edit_mode"){
    document.getElementById("tweaks").classList.add("open");
    document.getElementById("tweaks").setAttribute("aria-hidden","false");
  } else if (d.type === "__deactivate_edit_mode"){
    document.getElementById("tweaks").classList.remove("open");
    document.getElementById("tweaks").setAttribute("aria-hidden","true");
  }
});
try{ window.parent.postMessage({type:"__edit_mode_available"}, "*"); }catch(e){}

// ---------- Boot ----------
document.addEventListener("DOMContentLoaded", ()=>{
  if(document.getElementById("workList")) renderWork();
  if(document.getElementById("leaderGrid")) renderLeaders();
  if(document.getElementById("testiGrid")) renderTestimonials();
  if(document.getElementById("experimentGrid")) renderExperiments();
  if(document.getElementById("twAccent")){
    applyTweaks(); syncTweakUI(); wireTweaks();
  }
});
