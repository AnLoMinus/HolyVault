# 🕯️ לינקייה קדושה למאגרים שלך — HolyVault (HV) 🔥

**HolyVault (HV)** = **Holy + Vault** (מועדפים קדושים במבנה כרטיסיות, סינונים, וחיפוש)

---

## ✨ מה בניתי לך (להדבקה ישירות ב-CodePen)

* 🗂️ **כרטיסייה לכל מאגר** (כולל GitHub + אתר אם קיים)
* 🏷️ **תגיות וסינונים** (Chip Filters)
* 🔎 **חיפוש מהיר**
* ⭐ **מועדפים קדושים** (נשמר ב-`localStorage`)
* 🎨 **פלטת צבעים לכל מאגר** (חושך/אור-זהב/אש, בסגנון TorahClarity + GoMag)
* 🌓 **אסתטיקה: Dark + Gold + Fire Glow**

---

## 🧩 הקוד (CodePen) — הדבק לפי טאבים

### ✅ HTML

```html
<div class="hv">
  <header class="hv__top">
    <div class="hv__brand">
      <div class="hv__logo">HV</div>
      <div class="hv__titles">
        <h1>HolyVault</h1>
        <p>⭐ Sacred Favorites • Dark × Gold × Fire</p>
      </div>
    </div>

    <div class="hv__controls">
      <div class="hv__search">
        <span class="hv__icon">🔎</span>
        <input id="q" type="search" placeholder="חפש מאגר / תגית / מילת מפתח..." autocomplete="off" />
      </div>

      <div class="hv__row">
        <select id="sort">
          <option value="fav">⭐ מועדפים קודם</option>
          <option value="az">🔤 A → Z</option>
          <option value="za">🔤 Z → A</option>
          <option value="tag">🏷️ לפי תגיות</option>
        </select>

        <label class="hv__toggle">
          <input id="onlyFav" type="checkbox" />
          <span>⭐ רק מועדפים</span>
        </label>

        <button id="reset" class="hv__btn">♻️ איפוס</button>
      </div>
    </div>
  </header>

  <section class="hv__tags">
    <div class="hv__chips" id="chips"></div>
  </section>

  <main class="hv__grid" id="grid"></main>

  <footer class="hv__foot">
    <div class="hv__footline">
      <span>⚡ AnLoMinus</span>
      <span>•</span>
      <span id="meta"></span>
    </div>
  </footer>
</div>
```

### 🎨 CSS

```css
:root{
  --bg0:#07070a;
  --bg1:#0b0b12;
  --card:#0f1018;
  --text:#e9e6df;
  --muted:#b7b1a6;

  --gold0:#ffedb0;
  --gold1:#f7c86a;
  --gold2:#b8872c;

  --fire0:#ffb35a;
  --fire1:#ff6a2a;
  --fire2:#b61d0f;

  --line:rgba(255,232,180,.14);
  --shadow: 0 18px 50px rgba(0,0,0,.55);
  --radius:18px;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
  background:
    radial-gradient(1200px 600px at 20% 0%, rgba(255,200,90,.10), transparent 55%),
    radial-gradient(900px 500px at 90% 10%, rgba(255,90,40,.10), transparent 60%),
    radial-gradient(700px 700px at 50% 120%, rgba(185,135,44,.10), transparent 55%),
    linear-gradient(180deg, var(--bg0), var(--bg1));
  color:var(--text);
}

.hv{
  max-width:1180px;
  margin:0 auto;
  padding:18px 16px 26px;
}

.hv__top{
  display:flex;
  gap:16px;
  align-items:flex-start;
  justify-content:space-between;
  flex-wrap:wrap;
  padding:16px;
  border:1px solid var(--line);
  border-radius:var(--radius);
  background: linear-gradient(180deg, rgba(255,232,180,.06), rgba(0,0,0,.0));
  box-shadow: var(--shadow);
}

.hv__brand{display:flex; gap:12px; align-items:center}
.hv__logo{
  width:46px;height:46px;
  border-radius:14px;
  display:grid; place-items:center;
  font-weight:900;
  letter-spacing:.6px;
  color:#120d05;
  background: linear-gradient(135deg, var(--gold0), var(--gold1), var(--gold2));
  box-shadow:
    0 0 0 1px rgba(255,232,180,.35),
    0 10px 30px rgba(255,140,60,.18);
}
.hv__titles h1{margin:0;font-size:22px}
.hv__titles p{margin:2px 0 0; color:var(--muted); font-size:13px}

.hv__controls{min-width:320px; flex:1}
.hv__search{
  display:flex;
  align-items:center;
  gap:10px;
  padding:10px 12px;
  border-radius:14px;
  border:1px solid var(--line);
  background: rgba(10,10,16,.55);
}
.hv__icon{opacity:.9}
.hv__search input{
  width:100%;
  outline:none;
  border:0;
  background:transparent;
  color:var(--text);
  font-size:14px;
}

.hv__row{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  align-items:center;
  margin-top:10px;
}

select{
  padding:10px 12px;
  border-radius:14px;
  border:1px solid var(--line);
  background: rgba(10,10,16,.55);
  color:var(--text);
  outline:none;
}

.hv__toggle{
  display:flex;
  gap:8px;
  align-items:center;
  padding:8px 10px;
  border-radius:14px;
  border:1px solid var(--line);
  background: rgba(10,10,16,.45);
  color:var(--muted);
  user-select:none;
}
.hv__toggle input{accent-color: #f7c86a}

.hv__btn{
  padding:10px 12px;
  border-radius:14px;
  border:1px solid rgba(255,232,180,.22);
  background: linear-gradient(135deg, rgba(255,200,90,.12), rgba(255,90,40,.08));
  color: var(--text);
  cursor:pointer;
  box-shadow: 0 10px 24px rgba(0,0,0,.35);
}
.hv__btn:hover{filter:brightness(1.06)}

.hv__tags{margin-top:14px}
.hv__chips{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  padding:12px;
  border-radius:var(--radius);
  border:1px solid var(--line);
  background: rgba(10,10,16,.35);
}

.chip{
  padding:8px 10px;
  border-radius:999px;
  border:1px solid rgba(255,232,180,.18);
  background: rgba(0,0,0,.22);
  color: var(--muted);
  cursor:pointer;
  display:flex;
  gap:8px;
  align-items:center;
  transition: .15s ease;
}
.chip:hover{transform: translateY(-1px); color:var(--text)}
.chip.is-on{
  color:#120d05;
  background: linear-gradient(135deg, var(--gold0), var(--gold1));
  border-color: rgba(255,232,180,.55);
  box-shadow: 0 10px 26px rgba(255,140,60,.18);
}

.hv__grid{
  margin-top:14px;
  display:grid;
  grid-template-columns: repeat( auto-fit, minmax(260px, 1fr) );
  gap:14px;
}

.card{
  position:relative;
  border-radius: 18px;
  border:1px solid rgba(255,232,180,.14);
  background: rgba(14,14,22,.58);
  box-shadow: 0 20px 50px rgba(0,0,0,.55);
  overflow:hidden;
  min-height: 190px;
}
.card::before{
  content:"";
  position:absolute; inset:-2px;
  background: linear-gradient(135deg, var(--a), var(--b), var(--c));
  opacity:.22;
  filter: blur(18px);
}
.card__in{
  position:relative;
  padding:14px;
  display:flex;
  flex-direction:column;
  gap:10px;
}

.card__top{
  display:flex; align-items:flex-start; justify-content:space-between; gap:10px;
}
.card__name{
  margin:0;
  font-size:16px;
  letter-spacing:.2px;
}
.badges{display:flex; gap:8px; flex-wrap:wrap; justify-content:flex-end}
.badge{
  font-size:12px;
  color: rgba(255,255,255,.86);
  padding:6px 8px;
  border-radius:999px;
  border:1px solid rgba(255,232,180,.14);
  background: rgba(0,0,0,.25);
}
.badge--pal{
  border-color: rgba(255,232,180,.18);
  background: linear-gradient(135deg, rgba(0,0,0,.20), rgba(0,0,0,.10));
}

.card__desc{
  margin:0;
  color: var(--muted);
  line-height:1.45;
  font-size:13px;
}

.card__tags{
  display:flex; gap:8px; flex-wrap:wrap;
}
.tg{
  font-size:12px;
  color: rgba(255,232,180,.85);
  border:1px solid rgba(255,232,180,.18);
  background: rgba(255,200,90,.06);
  padding:6px 8px;
  border-radius:999px;
}

.card__actions{
  display:flex;
  gap:10px;
  margin-top:auto;
  flex-wrap:wrap;
}
a.btn{
  text-decoration:none;
  color: var(--text);
  font-size:13px;
  padding:9px 10px;
  border-radius:14px;
  border:1px solid rgba(255,232,180,.18);
  background: rgba(0,0,0,.22);
}
a.btn:hover{filter:brightness(1.07)}
.btn--main{
  border-color: rgba(255,232,180,.26);
  background: linear-gradient(135deg, rgba(255,200,90,.10), rgba(255,90,40,.08));
}
.fav{
  margin-left:auto;
  padding:9px 10px;
  border-radius:14px;
  border:1px solid rgba(255,232,180,.22);
  background: rgba(0,0,0,.22);
  cursor:pointer;
  color: var(--text);
}
.fav.is-on{
  background: linear-gradient(135deg, rgba(255,232,180,.18), rgba(255,90,40,.10));
  border-color: rgba(255,232,180,.42);
}

.hv__foot{
  margin-top:14px;
  padding:12px;
  border-radius:var(--radius);
  border:1px solid var(--line);
  background: rgba(10,10,16,.28);
  color: var(--muted);
  font-size:12px;
}
.hv__footline{display:flex; gap:10px; flex-wrap:wrap; align-items:center; justify-content:space-between}
```

### ⚙️ JS

```javascript
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
```

---

## 🏷️ איך הכרטיסיות אורגנו בפועל (הסבר קצר ומדויק)

* 📜 **Torah / Learning**: DatOS, TorahClarity, TorahMatrix, TenLight, TalmudX, Koelet ([Anlominus][1])
* 🕯️ **Light / Path / Hanukkah**: PathLight, LightFlow, LightRise ([GitHub][2])
* 🤍 **Purity / Kindness / Growth**: PurityFlow, UltraKind, TreeSoul ([GitHub][3])
* ⚔️ **GoMag / War of Light**: GoMag ([GitHub][4])
* 🧰 **Tools / Reference**: LangBar, NikudMap, UniBar ([GitHub][5])
* 🙏 **Prayer / Gratitude**: Prayer-Flow, ThankSaved ([GitHub][6])
* 🥊 **Holy Culture (Rap)**: HollyRap ([GitHub][7])
* 🧠 **Holistic / Systems**: HolisView ([Anlominus][8])

---

## 🎛️ שדרוג מהיר שמדליק את זה עוד יותר

* ➕ להוסיף כפתור: **“פתח הכל לפי תגית”** (מסך חדש/Modal)
* ➕ להוסיף **ספירת כרטיסיות לכל תגית** על הצ׳יפים
* ➕ להוסיף **קבוצות Grid לפי כותרת תגית** (Sectioned View)

---

## 🧾 תאריך ושעה (לפי אזור הזמן שלך) 🕰️

* 📆 **לועזי:** 14.12.2025
* 📆 **עברי:** ה׳ טבת תשפ״ו
* ⏰ **שעה נוכחית:** 02:58 (Asia/Jerusalem)

---

## 🏅 קרדיטים + לינקים (מאגרים) 🔗

* 🐙 **GitHub Profile:** [https://github.com/AnLoMinus](https://github.com/AnLoMinus)
* 🔥 DatOS: [https://github.com/AnLoMinus/DatOS](https://github.com/AnLoMinus/DatOS) • [https://anlominus.github.io/DatOS/](https://anlominus.github.io/DatOS/) ([Anlominus][1])
* ✨ TorahClarity: [https://github.com/AnLoMinus/TorahClarity](https://github.com/AnLoMinus/TorahClarity) • [https://anlominus.github.io/TorahClarity/](https://anlominus.github.io/TorahClarity/) ([Anlominus][9])
* 🧠 HolisView: [https://github.com/AnLoMinus/HolisView](https://github.com/AnLoMinus/HolisView) • [https://anlominus.github.io/HolisView/](https://anlominus.github.io/HolisView/) ([Anlominus][8])
* ⚔️ GoMag: [https://github.com/AnLoMinus/GoMag](https://github.com/AnLoMinus/GoMag) ([GitHub][4])
* 🕎 LightRise: [https://github.com/AnLoMinus/LightRise](https://github.com/AnLoMinus/LightRise) • [https://anlominus.github.io/LightRise/](https://anlominus.github.io/LightRise/) ([Anlominus][10])
* 🥊 HollyRap: [https://github.com/AnLoMinus/HollyRap](https://github.com/AnLoMinus/HollyRap) • [https://anlominus.github.io/HollyRap/](https://anlominus.github.io/HollyRap/) ([Anlominus][11])

---

## 🎤 4 שורות פזמון ראפ (חריזה על הווידג׳ט) 🥊🔥

HV על המסך — זה זהב בתוך חושך,
כרטיס אחרי כרטיס — והלב נהיה משחך,
לינק קדוש ננעל — מועדף לא מתנתק,
AnLoMinus מדליק — והאור פה מתפצח.

---

## 🧠 מספר המידות (לפי הרוח של הכלי)

**7 מידות:** 🔥 גבורה • 🤍 חסד • 🧭 תפארת • 🏆 נצח • 🙏 הוד • 🔗 יסוד • 👑 מלכות

---

## 📖 משפט מן המקורות (מותאם לכלי “אור/מסילה/מועדפים”)

**“נֵר לְרַגְלִי דְבָרֶךָ וְאוֹר לִנְתִיבָתִי” (תהילים קי״ט, ק״ה)** ([GitHub][2])

---

רוצה שאוסיף גם 🧿 **כפתור “ייצוא מועדפים” לקובץ JSON** + **ייבוא חזרה** כדי שתוכל להעביר מועדפים בין מכשירים?

[1]: https://anlominus.github.io/DatOS/ "חמישה חומשי תורה"
[2]: https://github.com/AnLoMinus/PathLight "GitHub - AnLoMinus/PathLight: \"נֵר־לְרַגְלִי דְבָרֶךָ וְאוֹר לִנְתִיבָתִי\" (תהילים קי״ט, ק״ה)"
[3]: https://github.com/AnLoMinus/PurityFlow "GitHub - AnLoMinus/PurityFlow: ️ הבא להיטהר מסייעין בידו (PurityFlow – PF)"
[4]: https://github.com/AnLoMinus/GoMag "GitHub - AnLoMinus/GoMag: ⚡ גוג ומגוג — War of the End and the Birth of Light ⚔️"
[5]: https://github.com/AnLoMinus/LangBar "GitHub - AnLoMinus/LangBar:  מטרת הכלי הסרגל נועד להדפסה לשימוש אישי, לימודי או מקצועי — במיוחד למי שעובד/לומד במספר שפות במקביל. הוא מאפשר זיהוי ויזואלי ברור של כל האלפביתים המרכזיים, בסדר כרונולוגי קבוע, על גבי סרגל מודפס באורך 30 ס\"מ (A4 רוחב מלא)."
[6]: https://github.com/AnLoMinus/Prayer-Flow "GitHub - AnLoMinus/Prayer-Flow"
[7]: https://github.com/AnLoMinus/HollyRap "GitHub - AnLoMinus/HollyRap:  באטל ראפ של קדושה  |  על הפרויקט HollyRap (קודם: HolyBars / Battle Rap of Light) הוא מאגר מקיף להפיכת באטל ראפ לכלי של קדושה והעצמה. המטרה היא ליצור אלטרנטיבה חיובית ועוצמתית לתרבות הראפ המסורתית, תוך שילוב ערכים רוחניים, חוכמה תורנית וחדות מחשבתית."
[8]: https://anlominus.github.io/HolisView/ "HolisView – שער המרכזי"
[9]: https://anlominus.github.io/TorahClarity/ "TorahClarity – TC | בהירות התורה"
[10]: https://anlominus.github.io/LightRise/ "LightRise – Hanukkah SparKing Edition"
[11]: https://anlominus.github.io/HollyRap/ "HollyRap - באטל ראפ של קדושה"
