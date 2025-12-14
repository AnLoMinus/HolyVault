// HolyVault (HV) — Sacred Favorites Widget
// Built for AnLoMinus repos • Dark × Gold × Fire style

const repos = [
  // 🧠 Torah / Learning
  {
    id:"DatOS",
    title:"DatOS — חמישה חומשי תורה (דיגיטלי)",
    gh:"https://github.com/AnLoMinus/DatOS",
    site:"https://anlominus.github.io/DatOS/",
    tags:["Torah","Learning","Chumash","Siddur","Docs"],
    desc:"מאגר לימוד דיגיטלי רחב: חומשים, תכנים יומיים, תפילות, ניקוד ותיקיות תוכן מובנות.",
    pal:["#FFE9B3","#F7C86A","#FF6A2A"]
  },
  {
    id:"TorahClarity",
    title:"TorahClarity (TC) — בהירות התורה",
    gh:"https://github.com/AnLoMinus/TorahClarity",
    site:"https://anlominus.github.io/TorahClarity/",
    tags:["Torah","Clarity","Halacha","Mapping","Learning"],
    desc:"בית של סדר והבנה חדה בתוך ים התורה: מסילות בהירות, חלוקה נושאית, מיפוי מושגים ותשובות ממוקדות.",
    pal:["#FFE9B3","#B8872C","#0C0C12"]
  },
  {
    id:"TorahMatrix",
    title:"TorahMatrix — מפת חכמה בין־תחומית דרך התורה",
    gh:"https://github.com/AnLoMinus/TorahMatrix",
    site:"https://anlominus.github.io/TorahMatrix/",
    tags:["Torah","Systems","Kabbalah","Strategy","Mind"],
    desc:"מערכת כוללת שמחברת תורה + מערכות חיים (פסיכולוגיה/כלכלה/אסטרטגיה/קבלה) במבנים של 10×10 עם שכבות ניתוח.",
    pal:["#FFE9B3","#FFB35A","#2A0B0B"]
  },
  {
    id:"TenLight",
    title:"TenLight — עשרת הדיברות (לוחות הברית)",
    gh:"https://github.com/AnLoMinus/TenLight",
    site:"",
    tags:["Torah","Ten","Covenant","Learning"],
    desc:"מסגרת תוכן/לימוד סביב עשרת הדיברות: סדר, זיכרון, וחיבור מעשי לעקרונות יסוד.",
    pal:["#FFE9B3","#F7C86A","#3A2A0A"]
  },
  {
    id:"TalmudX",
    title:"TalmudX — לימוד גמרא עם חידושים מוצלבים",
    gh:"https://github.com/AnLoMinus/TalmudX",
    site:"",
    tags:["Talmud","Learning","Cross","Modern"],
    desc:"חיבור חי בין סוגיות גמרא לבין חשיבה וכלים מודרניים: שכבות מקור/תובנות/קבלה/יישום.",
    pal:["#FFE9B3","#B8872C","#0A1022"]
  },
  {
    id:"Koelet",
    title:"Koelet — קהלת",
    gh:"https://github.com/AnLoMinus/Koelet",
    site:"",
    tags:["Tanakh","Wisdom","Mussar"],
    desc:"מרחב עבודה לתוכן חכמה והעמקה בספר קהלת: סדר פסוקים, נקודות תודעה, מסקנות לחיים.",
    pal:["#FFE9B3","#F7C86A","#141018"]
  },

  // 🕯️ Light / Hanukkah / Path
  {
    id:"PathLight",
    title:"PathLight — נר לרגלי דברך",
    gh:"https://github.com/AnLoMinus/PathLight",
    site:"",
    tags:["Light","Path","Mussar","Guidance"],
    desc:"מאגר מסילות אור: הכוונה, דרך, ויישום יומי שמחבר מילים לפעולה במסלול ברור.",
    pal:["#FFE9B3","#FFB35A","#0B0B12"]
  },
  {
    id:"LightRise",
    title:"LightRise (LR) — חנוכה: אור מתעורר",
    gh:"https://github.com/AnLoMinus/LightRise",
    site:"https://anlominus.github.io/LightRise/",
    tags:["Hanukkah","Music","Light","SparKing"],
    desc:"פרויקט חנוכה בסגנון SparKing: 8 נרות • 8 שכבות אור (טראקים/רעיון/אנרגיה) להפיכת החג לכלי תדר לנשמה.",
    pal:["#FFE9B3","#FF6A2A","#B61D0F"]
  },
  {
    id:"LightFlow",
    title:"LightFlow — זרימת אור",
    gh:"https://github.com/AnLoMinus/LightFlow",
    site:"",
    tags:["Light","Flow","Spirit","Practice"],
    desc:"תנועת אור מעשית: זרימה, עקביות, שמחה בעשייה ותדר יומי שמרים את המערכת.",
    pal:["#FFE9B3","#F7C86A","#0B0B12"]
  },
  {
    id:"FireSoul",
    title:"FireSoul (FS) — אש הנשמה",
    gh:"https://github.com/AnLoMinus/FireSoul",
    site:"",
    tags:["Fire","Soul","Power","Rise"],
    desc:"מאגר הצתה פנימית: אומץ, חום אמוני, התגברות ויצירת דרייב נקי לעשייה.",
    pal:["#FFE9B3","#FF6A2A","#B61D0F"]
  },

  // 🤍 Purity / Kindness
  {
    id:"PurityFlow",
    title:"PurityFlow (PF) — הבא להיטהר מסייעין בידו",
    gh:"https://github.com/AnLoMinus/PurityFlow",
    site:"",
    tags:["Purity","Middot","Habits","Clean"],
    desc:"זרימה של טהרה: הרגלים נקיים, תיקון פנימי, ושפה פשוטה של התקדמות יומיומית.",
    pal:["#EAF7FF","#FFE9B3","#B8872C"]
  },
  {
    id:"UltraKind",
    title:"UltraKind — אולטרה חסד",
    gh:"https://github.com/AnLoMinus/UltraKind",
    site:"",
    tags:["Kindness","Chesed","Middot","Community"],
    desc:"ארגז כלים לחסד מוגבר: נתינה חכמה, רכות עם גבולות, ופרויקטים של אור בקהילה.",
    pal:["#FFE9B3","#F7C86A","#1A1022"]
  },
  {
    id:"TreeSoul",
    title:"TreeSoul — עץ חיים: חשבון הלב",
    gh:"https://github.com/AnLoMinus/TreeSoul",
    site:"",
    tags:["Tree","Soul","Mussar","Growth"],
    desc:"מפת התפתחות פנימית: חשבון נפש, תיקון מידות, וגדילה עקבית עם שורשים וענפים.",
    pal:["#FFE9B3","#B8872C","#0B160E"]
  },

  // 🪜 Geulah / Identity
  {
    id:"MashiaStep",
    title:"MashiaStep — עקבתא דמשיחא (תוכן מרכזי)",
    gh:"https://github.com/AnLoMinus/MashiaStep",
    site:"",
    tags:["Geulah","Mashiach","Awakening","Roadmap"],
    desc:"תוכן מסודר להבנת התקופה, צעדים, חיזוק, ומסלול פעולה שמחבר אמונה למציאות.",
    pal:["#FFE9B3","#FFB35A","#0B0B12"]
  },
  {
    id:"Moshe",
    title:"Moshe — מוד־בסיס של הנהגה והארה",
    gh:"https://github.com/AnLoMinus/Moshe",
    site:"",
    tags:["Leadership","Soul","Mission","Torah"],
    desc:"מרחב כתיבה לשליחות, הנהגה, וחיבור שורשי של אור — להפוך חידושים למסילות מעשיות.",
    pal:["#FFE9B3","#F7C86A","#0A1022"]
  },
  {
    id:"Jewish",
    title:"Jewish — SoulArchive (SA)",
    gh:"https://github.com/AnLoMinus/Jewish",
    site:"",
    tags:["Identity","Archive","Jewish","Soul"],
    desc:"ארכיון נשמה יהודי: יסודות זהות, זיכרון, תוכן מרכזי ושרשיות בדרך מסודרת.",
    pal:["#FFE9B3","#B8872C","#0B0B12"]
  },

  // 🧰 Tools / Bars
  {
    id:"LangBar",
    title:"LangBar — סרגל שפות (הדפסה)",
    gh:"https://github.com/AnLoMinus/LangBar",
    site:"",
    tags:["Tool","Print","Languages","Reference"],
    desc:"סרגל מודפס 30 ס״מ לזיהוי ויזואלי של אלפביתים ושפות — כלי לימודי/מקצועי לעבודה רב־לשונית.",
    pal:["#EAF7FF","#FFE9B3","#B8872C"]
  },
  {
    id:"NikudMap",
    title:"NikudMap — סרגל ניקוד שלם",
    gh:"https://github.com/AnLoMinus/NikudMap",
    site:"",
    tags:["Tool","Hebrew","Nikud","Reference"],
    desc:"מיפוי ניקוד ברור (סרגל/רפרנס): עזר מהיר לדיוק בקריאה, כתיבה ולימוד.",
    pal:["#EAF7FF","#FFE9B3","#B8872C"]
  },
  {
    id:"UniBar",
    title:"UniBar — סרגלי עזר אוניברסליים",
    gh:"https://github.com/AnLoMinus/UniBar",
    site:"",
    tags:["Tool","Reference","Print","Universal"],
    desc:"חבילת סרגלים/עזרי־שולחן: תבניות שימושיות לסדר, רפרנס ודיוק בעבודה.",
    pal:["#EAF7FF","#FFE9B3","#B8872C"]
  },

  // 💬 Gratitude / Prayer
  {
    id:"ThankSaved",
    title:"ThankSaved — אמרתי תודה ונושעתי",
    gh:"https://github.com/AnLoMinus/ThankSaved",
    site:"",
    tags:["Gratitude","Healing","Practice","Joy"],
    desc:"ספרון תודה דיגיטלי: דרך של אור, ישועה, וחיזוק דרך הכרת הטוב.",
    pal:["#FFE9B3","#F7C86A","#0B0B12"]
  },
  {
    id:"PrayerFlow",
    title:"Prayer-Flow — זרימת תפילה",
    gh:"https://github.com/AnLoMinus/Prayer-Flow",
    site:"",
    tags:["Prayer","Siddur","Flow","Daily"],
    desc:"מסלול תפילה זורם: סדרים, קטעים, והטמעה יומית שמחברת מילים ללב.",
    pal:["#FFE9B3","#B8872C","#0B0B12"]
  },

  // 🥊 Holy Rap / Culture
  {
    id:"HollyRap",
    title:"HollyRap — באטל ראפ של קדושה",
    gh:"https://github.com/AnLoMinus/HollyRap",
    site:"https://anlominus.github.io/HollyRap/",
    tags:["Rap","Culture","Holy","Lyrics","SparKing"],
    desc:"מאגר להפיכת באטל־ראפ לכלי העצמה נקי: חדות מחשבה, ערכים, ותוכן רוחני בסטייל חזק.",
    pal:["#FFE9B3","#FF6A2A","#141018"]
  },

  // 🌍 Holistic / Mind
  {
    id:"HolisView",
    title:"HolisView (HV) — השקפות הוליסטיות",
    gh:"https://github.com/AnLoMinus/HolisView",
    site:"https://anlominus.github.io/HolisView/",
    tags:["Holistic","Mind","Design","Tech","Systems"],
    desc:"שער מרכזי להשקפות הוליסטיות: תודעה, טכנולוגיה, עיצוב חשיבה ומערכתיות.",
    pal:["#EAF7FF","#A7F0E2","#6A6CFF"]
  },

  // ⚔️ End-of-days / War of Light
  {
    id:"GoMag",
    title:"GoMag — גוג ומגוג: War of the End & Birth of Light",
    gh:"https://github.com/AnLoMinus/GoMag",
    site:"",
    tags:["GoMag","War","Light","Prophecy","Strategy"],
    desc:"מסגרת רעיונית של חושך/אור במודל מלחמת־תודעה: תכנון, חיזוק ועקרונות פעולה.",
    pal:["#FFE9B3","#FFB35A","#B61D0F"]
  },

  // (נשארים — דפים/שערים)
  {
    id:"PrimEden",
    title:"PrimEden — חוזרים לראשית",
    gh:"https://github.com/AnLoMinus/PrimEden",
    site:"",
    tags:["Origins","Purpose","Mindset","Torah"],
    desc:"חזרה ליסודות: תכלית, התחלה נכונה, וסדר פנימי שמצמיח נתיב ברור.",
    pal:["#FFE9B3","#B8872C","#0B0B12"]
  },
  {
    id:"ShaareiShemia",
    title:"Shaarei-Shemia — שערי שמיעה",
    gh:"https://github.com/AnLoMinus/Shaarei-Shemia",
    site:"",
    tags:["Hearing","Mussar","Soul","Gates"],
    desc:"שערים של שמיעה פנימית: דיוק, ריכוז, והפיכת קליטה למודעות ועשייה.",
    pal:["#FFE9B3","#F7C86A","#0A1022"]
  }
];

const $ = (s)=>document.querySelector(s);

const LS_KEY = "HV_FAVS_V1";
const LS_TAG = "HV_TAG_V1";

let favs = new Set(JSON.parse(localStorage.getItem(LS_KEY) || "[]"));
let activeTag = localStorage.getItem(LS_TAG) || "All";

function saveFavs(){
  localStorage.setItem(LS_KEY, JSON.stringify([...favs]));
}
function saveTag(){
  localStorage.setItem(LS_TAG, activeTag);
}

function allTags(){
  const set = new Set(["All"]);
  repos.forEach(r => r.tags.forEach(t => set.add(t)));
  return [...set];
}

function chipLabel(tag){
  const icons = {
    "All":"✨",
    "Torah":"📜",
    "Learning":"📚",
    "Light":"🕯️",
    "Hanukkah":"🕎",
    "Prayer":"🙏",
    "Gratitude":"🤍",
    "Tool":"🧰",
    "Rap":"🥊",
    "Holistic":"🧠",
    "GoMag":"⚔️",
    "Kabbalah":"🌌",
    "Mussar":"🧭",
    "Systems":"🧩",
    "Geulah":"🪜"
  };
  return `${icons[tag] || "🏷️"} ${tag}`;
}

function renderChips(){
  const wrap = $("#chips");
  const tags = allTags();
  wrap.innerHTML = "";

  tags.forEach(tag=>{
    const b = document.createElement("button");
    b.className = "chip" + (tag === activeTag ? " is-on" : "");
    b.type = "button";
    b.textContent = chipLabel(tag);
    b.onclick = ()=>{
      activeTag = tag;
      saveTag();
      renderChips();
      render();
    };
    wrap.appendChild(b);
  });
}

function matchesQuery(repo, q){
  if(!q) return true;
  const hay = [
    repo.id, repo.title, repo.desc,
    (repo.tags||[]).join(" "),
    repo.gh, repo.site
  ].join(" ").toLowerCase();
  return hay.includes(q.toLowerCase());
}

function bySort(list, mode){
  const copy = [...list];

  if(mode === "az"){
    copy.sort((a,b)=>a.title.localeCompare(b.title));
  } else if(mode === "za"){
    copy.sort((a,b)=>b.title.localeCompare(a.title));
  } else if(mode === "tag"){
    copy.sort((a,b)=>(a.tags[0]||"").localeCompare(b.tags[0]||""));
  } else { // fav
    copy.sort((a,b)=>{
      const af = favs.has(a.id) ? 1 : 0;
      const bf = favs.has(b.id) ? 1 : 0;
      if(bf !== af) return bf - af;
      return a.title.localeCompare(b.title);
    });
  }
  return copy;
}

function card(repo){
  const el = document.createElement("article");
  el.className = "card";
  el.style.setProperty("--a", repo.pal[0]);
  el.style.setProperty("--b", repo.pal[1]);
  el.style.setProperty("--c", repo.pal[2]);

  const isFav = favs.has(repo.id);

  el.innerHTML = `
    <div class="card__in">
      <div class="card__top">
        <div>
          <h3 class="card__name">${repo.title}</h3>
        </div>
        <div class="badges">
          <span class="badge badge--pal">🎨</span>
          <span class="badge">${isFav ? "⭐ Fav" : "☆"}</span>
        </div>
      </div>

      <p class="card__desc">${repo.desc}</p>

      <div class="card__tags">
        ${repo.tags.slice(0,5).map(t=>`<span class="tg">${t}</span>`).join("")}
      </div>

      <div class="card__actions">
        <a class="btn btn--main" href="${repo.gh}" target="_blank" rel="noopener">🐙 GitHub</a>
        ${repo.site ? `<a class="btn" href="${repo.site}" target="_blank" rel="noopener">🌐 Site</a>` : ``}
        <button class="fav ${isFav ? "is-on":""}" type="button" data-id="${repo.id}">
          ${isFav ? "⭐ שמור" : "☆ שמור"}
        </button>
      </div>
    </div>
  `;

  el.querySelector(".fav").onclick = (e)=>{
    const id = e.currentTarget.getAttribute("data-id");
    if(favs.has(id)) favs.delete(id); else favs.add(id);
    saveFavs();
    render();
  };

  return el;
}

function render(){
  const q = $("#q").value.trim();
  const sortMode = $("#sort").value;
  const onlyFav = $("#onlyFav").checked;

  let list = repos.filter(r => matchesQuery(r,q));
  if(activeTag !== "All") list = list.filter(r => r.tags.includes(activeTag));
  if(onlyFav) list = list.filter(r => favs.has(r.id));
  list = bySort(list, sortMode);

  const grid = $("#grid");
  grid.innerHTML = "";
  list.forEach(r => grid.appendChild(card(r)));

  const stamp = `📌 Repos: ${repos.length} • Showing: ${list.length} • Favorites: ${favs.size}`;
  $("#meta").textContent = stamp;
}

function wire(){
  $("#q").addEventListener("input", render);
  $("#sort").addEventListener("change", render);
  $("#onlyFav").addEventListener("change", render);
  $("#reset").onclick = ()=>{
    $("#q").value = "";
    $("#onlyFav").checked = false;
    $("#sort").value = "fav";
    activeTag = "All";
    saveTag();
    renderChips();
    render();
  };
}

renderChips();
wire();
render();