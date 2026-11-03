<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>OneDentalWorld — We book your dental care. And we deliver it.</title>

<meta name="description" content="OneDentalWorld is end-to-end dentistry. See your real price upfront, get a second opinion from a licensed dentist, and book in seconds — then we bring the dentist, the team, and the care. Think Uber for dentistry, but we run the whole ride.">

<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700;12..96,800&family=Hanken+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">

<style>

:root{

--ink:#0E1B2A; --ink-2:#22364a;

--slate:#5A6B80; --slate-deep:#34465B;

--paper:#F6F8FB; --paper-2:#EDF1F6; --card:#ffffff;

--teal:#11A697; --teal-deep:#0B7E72; --mint:#E2F4EF; --mint-2:#CFEDE5;

--amber:#F5812C; --amber-deep:#E26B16;

--line:rgba(14,27,42,.10); --line-2:rgba(14,27,42,.06);

--shadow:0 1px 2px rgba(14,27,42,.04),0 10px 30px rgba(14,27,42,.07);

--shadow-lg:0 40px 90px -25px rgba(14,27,42,.40);

--r:18px; --maxw:1180px;

}

*{box-sizing:border-box;margin:0;padding:0}

html{scroll-behavior:smooth}

body{font-family:"Hanken Grotesk",system-ui,sans-serif;color:var(--ink);

background-color:var(--paper);

background-image:radial-gradient(rgba(17,40,60,.05) 1px,transparent 1px);

background-size:30px 30px;background-attachment:fixed;

-webkit-font-smoothing:antialiased;line-height:1.55;overflow-x:hidden}

h1,h2,h3,h4,.display{font-family:"Bricolage Grotesque",sans-serif;line-height:1.04;letter-spacing:-.02em;font-weight:700}

a{color:inherit;text-decoration:none}

img{display:block;max-width:100%}

.wrap{max-width:var(--maxw);margin:0 auto;padding:0 24px}

.eyebrow{font-size:.78rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--teal-deep)}

.section{padding:96px 0}

.muted{color:var(--slate-deep)}

.logo{border-radius:9px}


/* buttons */

.btn{display:inline-flex;align-items:center;gap:.55rem;font-weight:700;font-size:1rem;white-space:nowrap;

padding:.85rem 1.4rem;border-radius:999px;border:1px solid transparent;cursor:pointer;

transition:transform .15s ease,box-shadow .2s ease,background .2s ease}

.btn-primary{background:var(--ink);color:#fff}

.btn-primary:hover{transform:translateY(-2px);box-shadow:0 14px 30px -10px rgba(14,27,42,.5)}

.btn-amber{background:var(--amber);color:#fff}

.btn-amber:hover{transform:translateY(-2px);box-shadow:0 14px 30px -10px rgba(242,129,44,.6)}

.stores{display:flex;gap:14px;flex-wrap:wrap}

.store{display:inline-flex;align-items:center;gap:11px;background:var(--ink);color:#fff;

padding:11px 18px;border-radius:14px;transition:transform .15s ease,box-shadow .2s ease;min-width:172px}

.store:hover{transform:translateY(-2px);box-shadow:0 16px 30px -12px rgba(14,27,42,.55)}

.store svg{flex:0 0 auto}

.store .s-top{font-size:.62rem;letter-spacing:.08em;text-transform:uppercase;opacity:.8;line-height:1.1;display:block}

.store .s-big{font-family:"Bricolage Grotesque";font-weight:700;font-size:1.05rem;line-height:1.15;display:block}


/* header */

header{position:sticky;top:0;z-index:60;background:rgba(246,248,251,.82);

backdrop-filter:saturate(160%) blur(14px);border-bottom:1px solid var(--line-2)}

.nav{display:flex;align-items:center;justify-content:space-between;height:72px}

.brand{display:flex;align-items:center;gap:11px;font-weight:700}

.brand .word{font-family:"Bricolage Grotesque";font-size:1.3rem;letter-spacing:-.02em}

.brand .word b{color:var(--ink)} .brand .word span{color:var(--slate)}

.navlinks{display:flex;gap:30px;align-items:center}

.navlinks a{font-weight:600;font-size:.95rem;color:var(--ink-2);transition:color .15s}

.navlinks a:hover{color:var(--teal-deep)}

.nav-cta{display:flex;align-items:center;gap:14px}


/* HERO with aurora */

.hero{position:relative;padding:72px 0 44px;overflow:hidden}

.aurora{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none}

.aurora span{position:absolute;border-radius:50%;filter:blur(70px);opacity:.55;mix-blend-mode:multiply}

.aurora .a1{width:520px;height:520px;background:radial-gradient(circle,#9fe7da,transparent 62%);top:-160px;right:-80px;animation:drift1 18s ease-in-out infinite}

.aurora .a2{width:460px;height:460px;background:radial-gradient(circle,#bcd0e8,transparent 62%);top:40px;left:-150px;animation:drift2 22s ease-in-out infinite}

.aurora .a3{width:360px;height:360px;background:radial-gradient(circle,#ffd9b8,transparent 62%);bottom:-160px;left:38%;opacity:.4;animation:drift1 26s ease-in-out infinite reverse}

@keyframes drift1{0%,100%{transform:translate(0,0)}50%{transform:translate(-40px,30px)}}

@keyframes drift2{0%,100%{transform:translate(0,0)}50%{transform:translate(50px,-26px)}}

.hero-grid{position:relative;z-index:1;display:grid;grid-template-columns:1.05fr .95fr;gap:50px;align-items:center}

.badge-row{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid var(--line);

padding:7px 14px 7px 8px;border-radius:999px;box-shadow:var(--shadow);font-weight:600;font-size:.84rem}

.badge-row b{background:var(--mint);color:var(--teal-deep);padding:2px 9px;border-radius:999px;font-size:.74rem;letter-spacing:.04em}

.hero h1{font-size:clamp(2.6rem,5.4vw,4.2rem);margin:20px 0 0}

.hero h1 .hl{color:var(--teal-deep)}

.hero h1 .amb{color:var(--amber-deep)}

.hero .sub{font-size:1.18rem;color:var(--ink-2);max-width:34ch;margin:20px 0 26px}

.hero .trust{margin-top:22px;display:flex;align-items:center;gap:10px;font-size:.92rem;color:var(--slate-deep)}

.hero .trust svg{flex:0 0 auto}

.first-only{margin:26px 0 0}

.first-only .fo-tag{display:inline-flex;align-items:center;gap:7px;font-size:.72rem;font-weight:800;letter-spacing:.12em;

text-transform:uppercase;color:var(--teal-deep);background:var(--mint);border:1px solid var(--mint-2);

padding:5px 12px;border-radius:999px;margin-bottom:14px}

.first-only .fo-tag svg{flex:0 0 auto}

.first-only h2{font-family:"Bricolage Grotesque";font-weight:800;line-height:1.08;letter-spacing:-.02em;

font-size:clamp(1.45rem,2.7vw,2.1rem);color:var(--ink)}

.first-only h2 .fo-hl{color:var(--teal-deep)}

.first-only h2 .fo-amb{color:var(--amber-deep)}

.first-only p{font-size:.95rem;color:var(--slate-deep);margin-top:10px;max-width:42ch}

@media (max-width:600px){.first-only h2{font-size:1.3rem}}


/* phone */

.phone-stage{position:relative;display:flex;justify-content:center;perspective:1400px}

.phone-tilt{transform:rotateY(-14deg) rotateX(5deg) rotateZ(1deg);transition:transform .6s cubic-bezier(.2,.7,.2,1)}

.phone-stage:hover .phone-tilt{transform:rotateY(0) rotateX(0)}

.glow{position:absolute;width:340px;height:340px;background:radial-gradient(circle,rgba(17,166,151,.30),transparent 60%);

top:40%;left:50%;transform:translate(-50%,-50%);filter:blur(20px);z-index:0}

.phone{position:relative;width:300px;border-radius:42px;background:#0b1420;padding:11px;

box-shadow:var(--shadow-lg);border:1px solid rgba(255,255,255,.06);z-index:1}

.phone::after{content:"";position:absolute;top:18px;left:50%;transform:translateX(-50%);

width:120px;height:26px;background:#0b1420;border-radius:0 0 16px 16px;z-index:3}

.phone .screen{border-radius:32px;overflow:hidden;background:#fff;aspect-ratio:440/952}

.phone .screen img{width:100%;height:100%;object-fit:cover;object-position:top}

.float{position:absolute;background:#fff;border:1px solid var(--line);border-radius:14px;

padding:11px 14px;box-shadow:var(--shadow);font-weight:600;font-size:.9rem;z-index:5;animation:bob 5s ease-in-out infinite}

.float .lab{font-size:.66rem;letter-spacing:.06em;text-transform:uppercase;color:var(--slate);font-weight:700}

.float.f1{top:42px;left:-30px} .float.f2{bottom:120px;right:-34px;animation-delay:1.5s}

.float .price{color:var(--teal-deep);font-family:"Bricolage Grotesque";font-size:1.1rem}

@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}


/* reveal demo */

.reveal{margin-top:30px;display:inline-flex;align-items:center;gap:18px;background:#fff;

border:1px solid var(--line);border-radius:16px;padding:14px 16px;box-shadow:var(--shadow)}

.reveal .rlab{font-size:.72rem;letter-spacing:.07em;text-transform:uppercase;color:var(--slate);font-weight:700}

.reveal .rnum{font-family:"Bricolage Grotesque";font-size:1.5rem;font-weight:700;color:var(--ink);

filter:blur(7px);transition:filter .55s ease;user-select:none}

.reveal.shown .rnum{filter:blur(0)}

.reveal .rnote{font-size:.74rem;color:var(--slate-deep);height:0;opacity:0;overflow:hidden;transition:.4s ease}

.reveal.shown .rnote{height:auto;opacity:1;margin-top:2px}


/* marquee */

.marquee{position:relative;z-index:1;margin-top:42px;border-top:1px solid var(--line-2);border-bottom:1px solid var(--line-2);

padding:16px 0;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);

mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}

.marquee-track{display:flex;gap:40px;width:max-content;animation:scrollx 32s linear infinite}

.marquee-track span{font-family:"Bricolage Grotesque";font-weight:600;font-size:1.05rem;color:var(--slate-deep);

display:inline-flex;align-items:center;gap:14px;white-space:nowrap}

.marquee-track span::after{content:"";width:6px;height:6px;border-radius:50%;background:var(--teal)}

@keyframes scrollx{to{transform:translateX(-50%)}}


/* value strip */

.strip{background:var(--ink);color:#fff;padding:26px 0}

.strip-grid{display:flex;gap:30px;justify-content:space-between;flex-wrap:wrap;align-items:center}

.strip-item{display:flex;align-items:center;gap:11px;font-weight:600}

.strip-item .ic{width:38px;height:38px;border-radius:11px;background:rgba(255,255,255,.08);display:grid;place-items:center;flex:0 0 auto}

.strip-item small{display:block;font-weight:400;color:rgba(255,255,255,.62);font-size:.78rem}


/* section heads */

.sec-head{max-width:720px;margin-bottom:54px}

.sec-head.center{margin-left:auto;margin-right:auto;text-align:center}

.sec-head h2{font-size:clamp(2rem,3.8vw,3rem);margin:14px 0 0}

.sec-head p{font-size:1.12rem;color:var(--ink-2);margin-top:16px}


/* ===== END-TO-END SIGNATURE ===== */

.e2e{background:linear-gradient(180deg,#0E1B2A,#13243a);color:#fff;border-radius:34px;padding:78px 56px;position:relative;overflow:hidden}

.e2e::before{content:"";position:absolute;left:-140px;bottom:-140px;width:460px;height:460px;background:radial-gradient(circle,rgba(17,166,151,.30),transparent 65%)}

.e2e-head{position:relative;z-index:1;max-width:760px}

.e2e-head .eyebrow{color:#5ee0cf}

.e2e-head h2{font-size:clamp(2.1rem,4vw,3.1rem);margin:14px 0 0}

.e2e-head h2 .u{color:#5ee0cf}

.e2e-head p{color:rgba(255,255,255,.8);font-size:1.16rem;margin-top:18px;max-width:62ch}

.rail{position:relative;z-index:1;margin-top:56px;display:grid;grid-template-columns:repeat(4,1fr);gap:0}

.rail::before{content:"";position:absolute;top:30px;left:8%;right:8%;height:2px;

background:linear-gradient(90deg,#5ee0cf,rgba(94,224,207,.25))}

.node{position:relative;padding:0 16px;text-align:center}

.node .dot{width:62px;height:62px;border-radius:18px;margin:0 auto 18px;display:grid;place-items:center;

background:rgba(94,224,207,.14);border:1.5px solid rgba(94,224,207,.5);position:relative;z-index:1;backdrop-filter:blur(4px)}

.node .nstep{font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:#5ee0cf;font-weight:700}

.node h4{font-size:1.18rem;margin:6px 0 8px}

.node p{color:rgba(255,255,255,.72);font-size:.96rem}

.e2e-foot{position:relative;z-index:1;margin-top:50px;display:flex;flex-wrap:wrap;gap:14px;align-items:center;justify-content:space-between;

background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:22px 26px}

.e2e-foot p{font-size:1.05rem;color:#fff;font-weight:600;max-width:60ch}

.e2e-foot p span{color:#5ee0cf}


/* not-a-booking band */

.band{text-align:center}

.band h2{font-size:clamp(2rem,4.4vw,3.4rem);max-width:18ch;margin:0 auto;line-height:1.05}

.band h2 .strike{color:var(--slate);text-decoration:line-through;text-decoration-thickness:3px}

.band h2 .go{color:var(--teal-deep)}

.band p{font-size:1.18rem;color:var(--ink-2);max-width:60ch;margin:24px auto 0}


/* features */

.feat{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;padding:48px 0;border-top:1px solid var(--line-2)}

.feat:first-of-type{border-top:0}

.feat.flip .feat-media{order:2}

.feat-media{display:flex;justify-content:center}

.feat-copy .num{font-family:"Bricolage Grotesque";font-weight:700;color:var(--teal);font-size:1rem;letter-spacing:.04em}

.feat-copy h3{font-size:1.85rem;margin:8px 0 14px}

.feat-copy p{font-size:1.06rem;color:var(--ink-2)}

.feat-list{list-style:none;margin:20px 0 0;display:grid;gap:11px}

.feat-list li{display:flex;gap:11px;align-items:flex-start;font-weight:500}

.feat-list li svg{flex:0 0 auto;margin-top:3px}

.note{margin-top:18px;font-size:.85rem;color:var(--slate-deep);background:var(--paper-2);border-left:3px solid var(--slate);padding:10px 14px;border-radius:0 10px 10px 0}

.phone.sm{width:268px}


/* AI */

.ai{background:linear-gradient(135deg,#11A697,#0B7E72);color:#fff;border-radius:32px;padding:72px 56px;position:relative;overflow:hidden}

.ai::before{content:"";position:absolute;right:-120px;top:-120px;width:420px;height:420px;background:radial-gradient(circle,rgba(255,255,255,.22),transparent 62%)}

.ai-head{position:relative;z-index:1;max-width:660px}

.ai-head .eyebrow{color:#d6fff7}

.ai-head h2{font-size:clamp(2rem,3.6vw,2.9rem);margin:14px 0 0}

.ai-head p{color:rgba(255,255,255,.88);font-size:1.14rem;margin-top:16px}

.ai-cards{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:44px}

.ai-card{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:18px;padding:26px}

.ai-card .ic{width:46px;height:46px;border-radius:13px;background:rgba(255,255,255,.16);display:grid;place-items:center;margin-bottom:16px}

.ai-card h4{font-size:1.18rem;margin-bottom:8px}

.ai-card p{color:rgba(255,255,255,.82);font-size:.98rem}

.ai-foot{position:relative;z-index:1;margin-top:34px;display:flex;gap:11px;align-items:center;font-size:.95rem;

color:#fff;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);border-radius:14px;padding:14px 18px}

.ai-foot svg{flex:0 0 auto}


/* steps */

.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}

.step{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:30px;position:relative;transition:transform .18s,box-shadow .2s}

.step:hover{transform:translateY(-4px);box-shadow:var(--shadow)}

.step .n{font-family:"Bricolage Grotesque";font-weight:800;font-size:2.4rem;color:var(--paper-2);line-height:1;position:absolute;top:18px;right:22px}

.step .ic{width:50px;height:50px;border-radius:14px;background:var(--mint);display:grid;place-items:center;margin-bottom:16px}

.step h4{font-size:1.22rem;margin-bottom:8px}

.step p{color:var(--ink-2);font-size:1rem}


/* compare */

.diff{display:grid;grid-template-columns:1.05fr .95fr;gap:50px;align-items:center}

.compare-box{background:var(--card);border:1px solid var(--line);border-radius:var(--r);overflow:hidden;box-shadow:var(--shadow)}

.cb-row{display:grid;grid-template-columns:1fr 1fr}

.cb-head>div{padding:16px 20px;font-weight:700;font-family:"Bricolage Grotesque"}

.cb-head .them{background:var(--paper-2);color:var(--slate-deep)}

.cb-head .us{background:var(--ink);color:#fff}

.cb-line>div{padding:14px 20px;font-size:.96rem;border-top:1px solid var(--line-2);display:flex;gap:9px;align-items:flex-start}

.cb-line .them{color:var(--slate-deep)}

.cb-line .us{background:rgba(17,166,151,.05)}


/* pricing */

.price-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}

.price-card{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:26px;transition:transform .18s,box-shadow .2s}

.price-card:hover{transform:translateY(-4px);box-shadow:var(--shadow)}

.price-card .pc-name{font-weight:700;font-size:1.1rem}

.price-card .pc-code{font-size:.8rem;color:var(--slate);margin-top:2px}

.price-card .pc-from{font-size:.78rem;letter-spacing:.06em;text-transform:uppercase;color:var(--slate);margin-top:18px;font-weight:700}

.price-card .pc-num{font-family:"Bricolage Grotesque";font-weight:700;font-size:2rem;color:var(--teal-deep)}

.price-card .pc-tag{display:inline-block;margin-top:10px;font-size:.78rem;font-weight:700;color:var(--teal-deep);background:var(--mint);padding:4px 11px;border-radius:999px}


/* locations */

.locs{display:grid;grid-template-columns:1fr 1fr;gap:24px}

.loc{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:28px;display:flex;gap:18px;align-items:flex-start;position:relative;transition:transform .18s,box-shadow .2s}

.loc.live:hover{transform:translateY(-4px);box-shadow:var(--shadow)}

.loc .pin{width:46px;height:46px;border-radius:13px;background:var(--mint);display:grid;place-items:center;flex:0 0 auto}

.loc h4{font-size:1.25rem}

.loc p{color:var(--ink-2);font-size:.98rem;margin-top:4px}

.loc .tags{margin-top:12px;display:flex;flex-wrap:wrap;gap:7px}

.loc .tags span{font-size:.75rem;font-weight:600;color:var(--slate-deep);background:var(--paper-2);padding:4px 10px;border-radius:999px}

.loc.soon{border-style:dashed;background:transparent}

.loc.soon .pin{background:var(--paper-2)}

.loc.soon h4,.loc.soon p{color:var(--slate-deep)}

.soon-badge{position:absolute;top:16px;right:18px;font-size:.68rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;

color:var(--amber-deep);background:rgba(245,129,44,.12);padding:4px 10px;border-radius:999px}

.loc-cta{display:flex;justify-content:center;margin-top:30px}


/* faq */

.faq{max-width:840px;margin:0 auto}

.qa{border-bottom:1px solid var(--line)}

.qa summary{list-style:none;cursor:pointer;padding:22px 0;display:flex;justify-content:space-between;align-items:center;gap:20px;

font-family:"Bricolage Grotesque";font-weight:600;font-size:1.12rem}

.qa summary::-webkit-details-marker{display:none}

.qa summary .chev{flex:0 0 auto;transition:transform .25s}

.qa[open] summary .chev{transform:rotate(45deg)}

.qa .ans{padding:0 0 22px;color:var(--ink-2);font-size:1rem;max-width:74ch}


/* final */

.final{background:linear-gradient(135deg,#0E1B2A,#13243a);color:#fff;border-radius:32px;padding:74px 56px;text-align:center;position:relative;overflow:hidden}

.final::before{content:"";position:absolute;inset:0;background:radial-gradient(60% 120% at 50% 0%,rgba(17,166,151,.4),transparent 60%)}

.final h2{position:relative;font-size:clamp(2rem,3.8vw,3rem)}

.final p{position:relative;color:rgba(255,255,255,.86);font-size:1.15rem;margin:16px auto 30px;max-width:48ch}

.final .stores{position:relative;justify-content:center}

.final .store{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18)}


/* footer */

footer{background:var(--ink);color:rgba(255,255,255,.66);padding:64px 0 40px;margin-top:96px}

.foot-top{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:40px;padding-bottom:40px;border-bottom:1px solid rgba(255,255,255,.1)}

.foot-brand .word{font-family:"Bricolage Grotesque";font-size:1.3rem;color:#fff}

.foot-brand .word span{color:var(--slate)}

.foot-brand p{margin-top:14px;font-size:.95rem;max-width:38ch}

.foot-col h5{color:#fff;font-family:"Bricolage Grotesque";font-size:.95rem;letter-spacing:.04em;margin-bottom:14px}

.foot-col a{display:block;font-size:.95rem;padding:5px 0;transition:color .15s}

.foot-col a:hover{color:#fff}

.legal{padding-top:28px;font-size:.82rem;line-height:1.65;color:rgba(255,255,255,.5)}

.legal p{margin-bottom:10px}

.legal strong{color:rgba(255,255,255,.72)}

.copy{margin-top:22px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:.85rem}


/* ===== scroll spine: tooth riding a graph line (centered, interactive) ===== */

.scroll-thread{position:fixed;left:30px;top:0;width:96px;height:100vh;z-index:55;pointer-events:none}

.scroll-thread svg{display:block;overflow:visible}

#toothMarker{pointer-events:auto;cursor:grab}

#toothMarker:active{cursor:grabbing}

#toothInner{transform-box:fill-box;transform-origin:center;transition:transform .18s ease}

#toothMarker:hover #toothInner{transform:scale(1.18)}

#toothPulse{transform-box:fill-box;transform-origin:center;animation:tpulse 2.4s ease-out infinite}

@keyframes tpulse{0%{transform:scale(1);opacity:.5}70%{transform:scale(2.2);opacity:0}100%{opacity:0}}

.topbar{position:fixed;top:0;left:0;height:3px;width:0;z-index:70;display:none;background:linear-gradient(90deg,#5ee0cf,#11A697);box-shadow:0 0 12px rgba(17,166,151,.8)}

.topbar-tooth{position:fixed;top:-9px;left:0;width:26px;height:26px;margin-left:-13px;z-index:71;display:none;filter:drop-shadow(0 3px 8px rgba(17,166,151,.7))}

@media (max-width:768px){.scroll-thread{left:6px;width:56px}#toothInner{transform:scale(.7)}}


/* ===== fingertips (AI) section ===== */

.ft{position:relative;overflow:hidden;background:linear-gradient(165deg,#0b1626,#13243a);color:#fff;border-radius:34px;padding:84px 56px;text-align:center}

.ft::before{content:"";position:absolute;inset:0;z-index:0;

background-image:linear-gradient(rgba(94,224,207,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(94,224,207,.06) 1px,transparent 1px);

background-size:42px 42px;-webkit-mask-image:radial-gradient(85% 75% at 50% 26%,#000,transparent 76%);mask-image:radial-gradient(85% 75% at 50% 26%,#000,transparent 76%)}

.ft .scan{position:absolute;top:-160px;left:50%;width:560px;height:560px;border-radius:50%;z-index:0;

background:conic-gradient(from 0deg,rgba(94,224,207,0),rgba(94,224,207,.34),rgba(94,224,207,0));filter:blur(10px);opacity:.5;

transform:translateX(-50%);animation:scanspin 16s linear infinite}

@keyframes scanspin{to{transform:translateX(-50%) rotate(360deg)}}

.ft-inner{position:relative;z-index:1;max-width:900px;margin:0 auto}

.ft-badge{display:inline-flex;align-items:center;gap:9px;font-weight:600;font-size:.86rem;color:#bff5ec;

background:rgba(94,224,207,.12);border:1px solid rgba(94,224,207,.4);padding:8px 16px;border-radius:999px}

.ft h2{font-size:clamp(2.2rem,4.6vw,3.5rem);margin:22px 0 0}

.ft h2 span{color:#5ee0cf}

.ft-lead{font-size:1.2rem;color:rgba(255,255,255,.82);max-width:62ch;margin:18px auto 0}

.ft-lead strong{color:#fff}

.ft-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:44px;text-align:left}

.ft-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:16px;padding:22px;

backdrop-filter:blur(6px);transition:transform .2s,border-color .2s}

.ft-card:hover{transform:translateY(-5px);border-color:rgba(94,224,207,.55)}

.ft-card .ic{width:44px;height:44px;border-radius:12px;background:rgba(94,224,207,.16);display:grid;place-items:center;margin-bottom:14px}

.ft-card h4{font-size:1.06rem;margin-bottom:6px}

.ft-card p{font-size:.9rem;color:rgba(255,255,255,.72)}

.ft-pills{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:36px}

.ft-pills span{font-size:.86rem;font-weight:600;color:#cfeee8;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);padding:7px 15px;border-radius:999px}

.ft-free{margin-top:34px;display:inline-flex;flex-wrap:wrap;gap:12px 28px;justify-content:center;align-items:center;

background:rgba(94,224,207,.1);border:1px solid rgba(94,224,207,.35);border-radius:18px;padding:18px 28px}

.ft-free b{font-family:"Bricolage Grotesque";font-size:1.1rem;color:#fff;display:inline-flex;align-items:center;gap:9px}

.ft .stores{justify-content:center;margin-top:34px}

.ft .store{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18)}

.ft .fineprint{margin-top:18px;font-size:.85rem;color:rgba(255,255,255,.55)}

@media (max-width:920px){.ft{padding:48px 24px;border-radius:24px}.ft-grid{grid-template-columns:1fr 1fr;gap:12px}}

@media (max-width:480px){.ft-grid{grid-template-columns:1fr}}


/* ===== services ===== */

.svc-co

.svc-photo{position:relative;border-radius:18px;overflow:hidden;box-shadow:var(--shadow);min-height:260px}

.svc-photo img{width:100%;height:100%;object-fit:cover;min-height:260px}

.svc-cap{position:absolute;left:0;right:0;bottom:0;padding:18px;color:#fff;font-weight:700;font-family:"Bricolage Grotesque";font-size:1.05rem;

background:linear-gradient(transparent,rgba(14,27,42,.78))}

@media(max-width:780px){.svc-collage{grid-template-columns:1fr 1fr}.svc-photo:first-child{grid-column:span 2}}

.svc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}

.svc-card{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:20px;display:flex;gap:14px;align-items:center;transition:transform .18s,box-shadow .2s}

.svc-card:hover{transform:translateY(-4px);box-shadow:var(--shadow)}

.svc-card .ic{width:46px;height:46px;border-radius:13px;background:var(--mint);display:grid;place-items:center;flex:0 0 auto}

.svc-card h4{font-size:1rem;line-height:1.2}

.svc-card .frm{font-size:.82rem;color:var(--teal-deep);font-weight:700;margin-top:3px}

@media(max-width:920px){.svc-grid{grid-template-columns:1fr 1fr}}

@media(max-width:480px){.svc-grid{grid-template-columns:1fr}}


/* ===== pioneer callout ===== */

.pioneer{background:linear-gradient(135deg,#11A697,#0B7E72);color:#fff;border-radius:28px;padding:56px 48px;text-align:center;position:relative;overflow:hidden}

.pioneer::before{content:"";position:absolute;inset:0;background:radial-gradient(60% 130% at 50% 0%,rgba(255,255,255,.2),transparent 60%)}

.pioneer .first-badge{position:relative;display:inline-block;font-weight:800;letter-spacing:.1em;text-transform:uppercase;font-size:.76rem;

background:#fff;color:var(--teal-deep);padding:6px 15px;border-radius:999px;margin-bottom:20px}

.pioneer .pmark{position:relative;width:62px;height:62px;border-radius:18px;background:rgba(255,255,255,.16);display:grid;place-items:center;margin:0 auto 18px}

.pioneer h3{position:relative;font-size:clamp(1.7rem,3.1vw,2.4rem);max-width:20ch;margin:0 auto}

.pioneer p{position:relative;color:rgba(255,255,255,.94);font-size:1.12rem;max-width:64ch;margin:16px auto 0}


/* reveal-on-scroll */

.r-up{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s ease}

.r-up.in{opacity:1;transform:none}


@media (max-width:920px){

.navlinks{display:none}

.nav-cta .btn-amber{padding:.62rem 1.05rem;font-size:.92rem}

.hero-grid,.diff,.foot-top{grid-template-columns:1fr;gap:40px}

.hero .sub{max-width:none}

.phone-tilt{transform:none}

.feat{grid-template-columns:1fr;gap:34px} .feat.flip .feat-media{order:0}

.ai-cards,.steps,.price-grid,.locs{grid-template-columns:1fr}

.rail{grid-template-columns:1fr;gap:34px} .rail::before{display:none}

.node{text-align:left;display:grid;grid-template-columns:62px 1fr;gap:18px}

.node .dot{margin:0}

.e2e,.ai,.final{padding:48px 26px;border-radius:24px}

.section{padding:68px 0}

.phone{width:260px} .float.f1{left:-10px} .float.f2{right:-12px}

}

@media (max-width:480px){ .stores{flex-direction:column} .store{width:100%} }

@media (max-width:600px){

.nav{height:60px}

.brand{gap:8px;min-width:0}

.brand .logo{width:30px;height:30px}

.brand .word{font-size:.98rem}

.nav-cta .btn-amber{padding:.5rem .85rem;font-size:.82rem;flex:0 0 auto}

}

@media (max-width:360px){ .brand .word{font-size:.9rem} }

@media (prefers-reduced-motion:reduce){

*{animation:none!important;transition:none!important}

.r-up{opacity:1;transform:none}

.marquee-track{animation:none}

}


/* ===== mobile fit fixes ===== */

@media (max-width:768px){

/* nudge the scroll spine right so it's fully visible */

.scroll-thread{left:14px;width:50px}

/* push the phone clear of the spine + keep floats on the phone */

.phone-stage{padding-left:44px}

.float{font-size:.8rem;padding:9px 11px}

.float.f1{left:14px;top:18px}

.float.f2{right:4px;bottom:88px}

/* let the price reveal wrap instead of squashing */

.reveal{flex-wrap:wrap;gap:12px}

.reveal .rnum{font-size:1.3rem}

}

@media (max-width:420px){

.phone{width:218px}

.phone-stage{padding-left:40px}

.float.f1{left:6px}

.float.f2{right:0;bottom:78px}

.scroll-thread{left:10px;width:44px}

#toothInner{transform:scale(.6)}

}

</style>

</head>

<body>

<div class="topbar" id="topbar"></div>

<div class="topbar-tooth" id="topbarTooth" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="12" fill="#0E1B2A" stroke="#5ee0cf" stroke-width="2"/><path transform="translate(5 4.6) scale(.62)" fill="#fff" d="M12 2c4-2.4 9 .6 9 5 0 2.2-1 3.3-2 6.3-1.2 4.2-1.1 8.7-3.2 8.7-1.9 0-1.1-5.4-3.1-5.4s-1.2 5.4-3.1 5.4c-2.1 0-2-4.5-3.2-8.7C4.1 10.3 3 9.2 3 7c0-4.4 5-7.4 9-5z"/></svg></div>

<div class="scroll-thread" id="scrollThread" aria-hidden="true">

<svg id="threadSvg" width="104" height="800" fill="none" xmlns="http://www.w3.org/2000/svg">

<defs>

<linearGradient id="tgrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5ee0cf"/><stop offset="1" stop-color="#11A697"/></linearGradient>

<filter id="tglow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="2.6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>

</defs>

<path id="trackPath" stroke="rgba(14,27,42,.12)" stroke-width="2" stroke-linejoin="round"/>

<path id="drawPath" stroke="url(#tgrad)" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" filter="url(#tglow)"/>

<g id="threadNodes"></g>

<g id="toothMarker">

<title>Drag me to scrub the page</title>

<circle id="toothPulse" r="16" fill="none" stroke="#5ee0cf" stroke-width="2"/>

<g id="toothInner">

<circle r="17" fill="#0E1B2A" stroke="#5ee0cf" stroke-width="2.4"/>

<path transform="translate(-9.5 -9.5) scale(.8)" fill="#fff" d="M12 2c4-2.4 9 .6 9 5 0 2.2-1 3.3-2 6.3-1.2 4.2-1.1 8.7-3.2 8.7-1.9 0-1.1-5.4-3.1-5.4s-1.2 5.4-3.1 5.4c-2.1 0-2-4.5-3.2-8.7C4.1 10.3 3 9.2 3 7c0-4.4 5-7.4 9-5z"/>

</g>

</g>

</svg>

</div>


<header>

<div class="wrap nav">

<a class="brand" href="#top" aria-label="OneDentalWorld home">

<img class="logo" src="https://assets.cdn.filesafe.space/cCdubK8zXMLSTxav96bG/media/6a2e16a2e650055aa22fac0c.png" alt="OneDentalWorld logo" width="38" height="38">

<span class="word"><b>OneDental</b><span>World</span></span>

</a>

<nav class="navlinks">

<a href="#fingertips">The app</a>

<a href="#how">How it works</a>

<a href="#endtoend">End-to-end</a>

<a href="#features">Features</a>

<a href="#ai">AI care</a>

<a href="#locations">Locations</a>

<a href="#faq">FAQ</a>

</nav>

<div class="nav-cta"><a class="btn btn-amber" href="#get">Get the app</a></div>

</div>

</header>


<a id="top"></a>

<section class="hero">

<div class="aurora"><span class="a1"></span><span class="a2"></span><span class="a3"></span></div>

<div class="wrap hero-grid">

<div class="hero-copy">

<span class="badge-row"><b>NEW</b> AI-assisted care at every ODW-powered office</span>

<h1>We <span class="hl">book</span> your dental care.<br>And we <span class="amb">deliver</span> it.</h1>

<p class="sub">Most apps just hand you a list and disappear. OneDentalWorld is end-to-end: see your real price, get a second opinion, book in seconds — then we bring the dentist, the team, and the care.</p>

<div class="first-only">

<span class="fo-tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B7E72" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.3 5.5 6 .5-4.6 3.9 1.5 5.8L12 16l-5.2 3.2 1.5-5.8L3.7 9l6-.5L12 3z"/></svg> First &amp; only</span>

<h2>The first and only dental app to give you <span class="fo-hl">transparent pricing</span> <span class="fo-amb">before your appointment</span>.</h2>

<p>Know exactly what you'll pay — no surprises, no guessing, no mystery bills.</p>

</div>

<div class="stores"><a class="store" href="https://apps.apple.com/in/app/onedentalworld/id6756610992" target="_blank" rel="noopener" aria-label="Download on the App Store"><svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-

3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.88 2.65 3.22 2.6 1.29-.05 1.78-.83 3.34-.83 1.56 0 2 .83 3.37.81 1.39-.03 2.27-1.27 3.12-2.53.98-1.45 1.39-2.85 1.41-2.92-.03-.01-2.7-1.04-2.72-4.13z"/><path d="M14.69 4.35c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-2.99 1.54-.66.76-1.23 1.98-1.08 3.15 1.14.09 2.3-.58 3.01-1.44z"/></svg><span><span class="s-top">Download on the</span><span class="s-big">App Store</span></span></a> <a class="store" href="https://play.google.com/store/apps/details?id=com.onedentalworld" target="_blank" rel="noopener" aria-label="Get it on Google Play"><svg width="22" height="22" viewBox="0 0 24 24"><path d="M3.6 2.3c-.2.2-.3.5-.3.9v17.6c0 .4.1.7.3.9l.1.1 9.9-9.9v-.2L3.6 2.3z" fill="#34A853"/><path d="M17 15.3l-3.3-3.3v-.2L17 8.5l.1.04 3.9 2.2c1.1.6 1.1 1.7 0 2.3L17 15.3z" fill="#FBBC04"/><path d="M17.1 15.3L13.7 12l-10.1 10c.4.4.9.4 1.6.04l11.9-6.8z" fill="#EA4335"/><path d="M17.1 8.6L5.2 1.9c-.7-.4-1.3-.4-1.6 0l10.1 10.1 3.4-3.4z" fill="#4285F4"/></svg><span><span class="s-top">Get it on</span><span class="s-big">Google Play</span></span></a></div>

<div class="reveal" id="reveal">

<div>

<div class="rlab">All-ceramic crown · your plan</div>

<div class="rnum" id="rnum">$599</div>

<div class="rnote">Estimate · confirmed at your in-person exam</div>

</div>

<button class="btn btn-primary" id="revealBtn" type="button">Reveal price</button>

</div>

<div class="trust"><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#E2F4EF"/><path d="M7 12.5l3 3 7-7" stroke="#0B7E72" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg> Informational estimates reviewed by licensed dentists. No pressure, no surprises.</div>

</div>

<div class="phone-stage">

<div class="glow"></div>

<div class="phone-tilt"><div class="phone"><div class="screen"><img src="https://assets.cdn.filesafe.space/cCdubK8zXMLSTxav96bG/media/6a2e16a2fe75e686478c6df0.jpg" alt="OneDentalWorld app home screen with upfront pricing" loading="eager"></div></div></div>

<div class="float f1"><div class="lab">Upfront price</div>Cleaning from $75</div>

<div class="float f2"><div class="lab">You'll actually pay</div><span class="price">Clear, not guessed</span></div>

</div>

</div>

<div class="wrap"><div class="marquee"><div class="marquee-track">

<span>Routine Check-ups</span><span>Crowns</span><span>Dental Implants</span><span>Root Canals</span><span>Teeth Whitening</span><span>Veneers</span><span>Braces &amp; Aligners</span><span>Emergency Care</span><span>Kids Dentistry</span><span>Dentures</span>

<span>Routine Check-ups</span><span>Crowns</span><span>Dental Implants</span><span>Root Canals</span><span>Teeth Whitening</span><span>Veneers</span><span>Braces &amp; Aligners</span><span>Emergency Care</span><span>Kids Dentistry</span><span>Dentures</span>

</div></div></div>

</section>


<div class="strip">

<div class="wrap strip-grid">

<div class="strip-item"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4L13.4 20.6a2 2 0 01-2.8 0l-7-7A2 2 0 013 12V5a2 2 0 012-2h7a2 2 0 011.4.6l7.2 7.2a2 2 0 010 2.8z"/><circle cx="7.5" cy="7.5" r="1.3" fill="#fff" stroke="none"/></svg></span><div>Upfront pricing<small>See it before you book</small></div></div>

<div class="strip-item"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3v5a4 4 0 008 0V3"/><path d="M9 13v3a5 5 0 0010 0v-2"/><circle cx="19" cy="11" r="2.4"/></svg></span><div>We deliver the care<small>Our dentists & team, end to end</small></div></div>

<div class="strip-item"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="6" width="14" height="13" rx="3"/><path d="M12 3v3M9 11v3M15 11v3"/></svg></span><div>AI-assisted workflow<small>At every ODW-powered office</small></div></div>

<div class="strip-item"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="16" rx="3"/><path d="M4 9h16M8 3v4M16 3v4M9 14l2 2 4-4"/></svg></span><div>Book in seconds<small>Choose your time & dentist</small></div></div>

</div>

</div>


<!-- AI AT YOUR FINGERTIPS -->

<section class="section" id="fingertips" style="padding-top:84px">

<div class="wrap">

<div class="ft r-up">

<div class="scan"></div>

<div class="ft-inner">

<span class="ft-badge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#bff5ec" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 15c-1.6 1.6-2 5-2 5s3.4-.4 5-2"/><path d="M9 13l-2 2M14.5 4.5c3 0 5 2 5 5 0 0-2.2 4.2-6.5 7.2l-

4.2-4.2C11.8 8 16 5 14.5 4.5z"/><circle cx="14.5" cy="9.5" r="1.4"/></svg> Now launching in Las Vegas · a dental-tech startup</span>

<h2>Dental care, with <span>AI</span>, at your fingertips.</h2>

<p class="ft-lead">OneDentalWorld is a first-of-its-kind app that puts full dental care in your pocket — and answers the one question no one tells you up front: <strong>how much?</strong> No surprises. Ever.</p>

<div class="ft-grid">

<div class="ft-card"><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5ee0cf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4L13.4 20.6a2 2 0 01-2.8 0l-7-7A2 2 0 013 12V5a2 2 0 012-2h7a2 2 0 011.4.6l7.2 7.2a2 2 0 010 2.8z"/><circle cx="7.5" cy="7.5" r="1.2" fill="#5ee0cf" stroke="none"/></svg></div><h4>Get an estimate</h4><p>Know your real cost before you book. Add your insurance and we'll estimate what you'll actually pay.</p></div>

<div class="ft-card"><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5ee0cf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="6"/><path d="M20 20l-3.2-3.2M9 11h4M11 9v4"/></svg></div><h4>Second opinion</h4><p>Quoted sky-high somewhere else? A licensed dentist gives you a limited second look.</p></div>

<div class="ft-card"><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5ee0cf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="7.5"/><path d="M12 9.5V13l2.5 1.8M9 3h6"/></svg></div><h4>Book immediately</h4><p>Grab the next open slot — evenings and weekends included — in a couple of taps.</p></div>

<div class="ft-card"><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5ee0cf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16M5 8h14M5 8l-2.4 5a2.6 2.6 0 005 0L5 8zM19 8l-2.4 5a2.6 2.6 0 005 0L19 8z"/></svg></div><h4>Compare costs</h4><p>See transparent prices side by side, so you always know you're getting a fair deal.</p></div>

</div>

<div class="ft-pills"><span>Fast</span><span>Accessible</span><span>Transparent</span><span>Convenient</span><span>Urgent dental care</span></div>

<div class="ft-free"><b><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4 10-10" stroke="#5ee0cf" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg> No subscription fee</b><b><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4 10-10" stroke="#5ee0cf" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg> No credit card needed</b></div>

<div class="stores"><a class="store" href="https://apps.apple.com/in/app/onedentalworld/id6756610992" target="_blank" rel="noopener" aria-label="Download on the App Store"><svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.88 2.65 3.22 2.6 1.29-.05 1.78-.83 3.34-.83 1.56 0

2 .83 3.37.81 1.39-.03 2.27-1.27 3.12-2.53.98-1.45 1.39-2.85 1.41-2.92-.03-.01-2.7-1.04-2.72-4.13z"/><path d="M14.69 4.35c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-2.99 1.54-.66.76-1.23 1.98-1.08 3.15 1.14.09 2.3-.58 3.01-1.44z"/></svg><span><span class="s-top">Download on the</span><span class="s-big">App Store</span></span></a> <a class="store" href="https://play.google.com/store/apps/details?id=com.onedentalworld" target="_blank" rel="noopener" aria-label="Get it on Google Play"><svg width="22" height="22" viewBox="0 0 24 24"><path d="M3.6 2.3c-.2.2-.3.5-.3.9v17.6c0 .4.1.7.3.9l.1.1 9.9-9.9v-.2L3.6 2.3z" fill="#34A853"/><path d="M17 15.3l-3.3-3.3v-.2L17 8.5l.1.04 3.9 2.2c1.1.6 1.1 1.7 0 2.3L17 15.3z" fill="#FBBC04"/><path d="M17.1 15.3L13.7 12l-10.1 10c.4.4.9.4 1.6.04l11.9-6.8z" fill="#EA4335"/><path d="M17.1 8.6L5.2 1.9c-.7-.4-1.3-.4-1.6 0l10.1 10.1 3.4-3.4z" fill="#4285F4"/></svg><span><span class="s-top">Get it on</span><span class="s-big">Google Play</span></span></a></div>

<p class="fineprint">A must-have on every phone. Estimates and second opinions are informational and reviewed by licensed dentists; final cost is confirmed at your in-person exam.</p>

</div>

</div>

</div>

</section>


<!-- SERVICES -->

<section class="section" id="services" style="padding-top:0">

<div class="wrap">

<div class="sec-head center r-up">

<span class="eyebrow">What we treat</span>

<h2>From routine cleanings to full-mouth restorations.</h2>

<p>Whatever your smile needs, it's covered — at transparent, upfront prices.</p>

</div>

<div class="svc-collage r-up">

<div class="svc-photo"><img src="https://assets.cdn.filesafe.space/cCdubK8zXMLSTxav96bG/media/6a2e16a38a3c98ce5685503b.jpg" alt="Smiling patient"><div class="svc-cap">Confident smiles, fair prices</div></div>

<div class="svc-photo"><img src="https://assets.cdn.filesafe.space/cCdubK8zXMLSTxav96bG/media/6a2e16a3c5c62232067e5a87.jpg" alt="Healthy teeth close-up"><div class="svc-cap">Gentle, modern care</div></div>

<div class="svc-photo"><img src="https://assets.cdn.filesafe.space/cCdubK8zXMLSTxav96bG/media/6a2e16a3fe75e686478c6e1f.jpg" alt="Patient reviewing a treatment estimate"><div class="svc-cap">No-surprise estimates</div></div>

</div>

<div class="svc-grid r-up">

<div class="svc-card"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B7E72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4c3-1.8 7 .4 7 3.6 0 1.6-.7 2.6-1.6 4.9C16.3 16 16.5 19 15

19s-.8-4.4-3-4.4S11.4 19 10 19c-1.5 0-1.3-3-2.4-6.5C6.7 10.2 6 9.2 6 7.6 6 4.4 9 2.2 12 4z"/><path d="M9.6 9.6l1.6 1.6 3-3.2"/></svg></span><div><h4>Routine Check-up</h4><div class="frm">from $0</div></div></div>

<div class="svc-card"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B7E72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4c3-1.8 7 .4 7 3.6 0 1.6-.7 2.6-1.6 4.9C16.3 16 16.5 19 15 19s-.8-4.4-3-4.4S11.4 19 10 19c-1.5 0-1.3-3-2.4-6.5C6.7 10.2 6 9.2 6 7.6 6 4.4 9 2.2 12 4z"/><path d="M18.6 4l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5z"/></svg></span><div><h4>Teeth Cleaning</h4><div class="frm">from $75</div></div></div>

<div class="svc-card"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B7E72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4c3-1.8 7 .4 7 3.6 0 1.6-.7 2.6-1.6 4.9C16.3 16 16.5 19 15 19s-.8-4.4-3-4.4S11.4 19 10 19c-1.5 0-1.3-3-2.4-6.5C6.7 10.2 6 9.2 6 7.6 6 4.4 9 2.2 12 4z"/><path d="M17.6 4v3.4M15.9 5.7h3.4"/></svg></span><div><h4>Toothache / Emergency</h4><div class="frm">from $100</div></div></div>

<div class="svc-card"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B7E72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9l3.2 3 4.8-6 4.8 6L20 9l-1.6 9.5H5.6L4 9z"/></svg></span><div><h4>Dental Crowns</h4><div class="frm">from $599</div></div></div>

<div class="svc-card"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B7E72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c2.1 0 3.6 1.4 3.6 3.1 0 1.4-.6 2-1.3 3.4H9.7C9 8.1 8.4 7.5 8.4 6.1 8.4 4.4 9.9 3 12 3z"/><path d="M10 11.4h4M10.4 14h3.2M10.9 16.6h2.2M12 19l-1 2"/></svg></span><div><h4>Dental Implants</h4><div class="frm">from $1200</div></div></div>

<div class="svc-card"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B7E72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 3l1.5 3.7L16 8.2l-3.5 1.5L11 13.4 9.5 9.7 6 8.2l3.5-1.5L11 3z"/><path d="M18 14l.6 1.5 1.5.6-1.5.6L18 18.2l-.6-1.5L15.9 16l1.5-.6L18 14z"/></svg></span><div><h4>Teeth Whitening</h4><div class="frm">from $100</div></div></div>

<div class="svc-card"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B7E72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9.5a7 7 0 0014 0z"/><path d="M5 9.5h14"/><path d="M9 13.5h.01M15 13.5h.01"/></svg></span><div><h4>Veneers &amp; Smile</h4><div class="frm">from $799</div></div></div>

<div class="svc-card"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B7E72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16"/><rect x="6" y="9.6" width="3" height="4.8" rx="1"/><rect x="10.5" y="9.6" width="3" height="4.8" rx="1"/><rect x="15" y="9.6" width="3" height="4.8" rx="1"/></svg></span><div><h4>Braces / Aligners</h4><div class="frm">from $3500</div></div></div>

</div>

</div>

</section>


<!-- PIONEER -->

<section class="section" style="padding-top:0">

<div class="wrap">

<div class="pioneer r-up">

<span class="first-badge">First of its kind</span>

<div class="pmark"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.3 5.5 6 .5-4.6 3.9 1.5 5.8L12 16l-5.2 3.2 1.5-5.8L3.7 9l6-.5L12 3z"/></svg></div>

<h3>We're building something the world hasn't seen before.</h3>

<p>OneDentalWorld is a brand-new kind of dental company — the first to bring transparent pricing, a licensed second opinion, instant booking, and the actual care together in one place. We're a startup, and we're building it in the open. If something isn't perfect yet, tell us — we'll make it right, fast. Thank you for being one of the very first to smile with us.</p>

</div>

</div>

</section>


<!-- END TO END SIGNATURE -->

<section class="section" id="endtoend">

<div class="wrap">

<div class="e2e r-up">

<div class="e2e-head">

<span class="eyebrow">Not a booking app — a care company</span>

<h2>Think <span class="u">Uber for dentistry</span> — but we run the whole ride.</h2>

<p>Uber doesn't just find you a driver; it gets you there. Amazon doesn't just list a product; it delivers it. OneDentalWorld works the same way for dental care. We don't refer you out and vanish — we bring our own dentists, assistants, and crew into trusted local offices and run your entire visit, start to finish.</p>

</div>

<div class="rail">

<div class="node"><span class="dot"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="3"/><path d="M10 6h4"/></svg></span><span class="nstep">Step 1</span><h4>You request care</h4><p>Get an upfront estimate or book in the app — in a couple of taps.</p></div>

<div class="node"><span class="dot"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.2"

2</span><h4>We bring the team</h4><p>Our own dentist, assistant, and crew — not a referral to a stranger.</p></div>

<div class="node"><span class="dot"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5 7-11a7 7 0 00-7-7 7 7 0 00-7 7c0 6 7 11 7 11z"/><path d="M9.5 10.5h5M12 8v5"/></svg></span><span class="nstep">Step 3</span><h4>Care is delivered</h4><p>Treatment happens at an office we operate end to end, your way.</p></div>

<div class="node"><span class="dot"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.2c0-1.2 1-1.9 2.5-1.9s2.5.7 2.5 1.8c0 2.5-5 1.4-5 3.9 0 1.1 1 1.9 2.5 1.9s2.5-.7 2.5-1.9"/></svg></span><span class="nstep">Step 4</span><h4>One clear price</h4><p>You pay the transparent price you saw up front. No mystery bill.</p></div>

</div>

<div class="e2e-foot">

<p><span>We own the experience, not just the calendar.</span> By sharing space instead of building clinics from scratch, we keep overhead low — and pass the savings straight to your price.</p>

<a class="btn btn-amber" href="#get">Get the app</a>

</div>

</div>

</div>

</section>


<!-- BAND -->

<section class="section band" style="padding-top:0">

<div class="wrap r-up">

<h2>Booking apps stop at the <span class="strike">appointment</span>. We <span class="go">deliver the care</span>.</h2>

<p>OneDentalWorld is the only place where the price you see, the dentist you book, and the care you receive all come from one team that's accountable to you — from the first tap to the final smile.</p>

</div>

</section>


<!-- FEATURES -->

<section class="section" id="features" style="padding-top:0">

<div class="wrap">

<div class="sec-head r-up">

<span class="eyebrow">Four ways the app helps</span>

<h2>Everything you need to make a confident dental decision.</h2>

</div>


<div class="feat r-up">

<div class="feat-media"><div class="phone sm"><div class="screen"><img src="https://assets.cdn.filesafe.space/cCdubK8zXMLSTxav96bG/media/6a2e16a2c53e51acc0fcb3bc.jpg" alt="App listing dental services with upfront starting prices"></div></div></div>

<div class="feat-copy">

<div class="num">01 · Cost Estimate</div>

<h3>See your real cost — with your insurance factored in.</h3>

<p>Tell us the treatment you need and add your insurance. Our team prepares an itemized estimate so you walk in knowing roughly what you'll owe, not hoping.</p>

<ul class="feat-list">

<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#E2F4EF"/><path d="M7 12.5l3 3 7-7" stroke="#0B7E72" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Plain-English pricing for cleanings, crowns, implants and more.</span></li>

<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#E2F4EF"/><path d="M7 12.5l3 3 7-7" stroke="#0B7E72" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Insurance added so you see your likely out-of-pocket range.</span></li>

<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#E2F4EF"/><path d="M7 12.5l3 3 7-7" stroke="#0B7E72" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Typically returned within two business days.</span></li>

</ul>

<div class="note">Estimates are informational and may change after your in-person exam. They don't create a doctor–patient relationship.</div>

</div>

</div>


<div class="feat flip r-up">

<div class="feat-media"><div class="phone sm"><div class="screen"><img src="https://assets.cdn.filesafe.space/cCdubK8zXMLSTxav96bG/media/6a2e16a2c5c62232067e5a54.jpg" alt="App second-opinion path: understand options or compare plans"></div></div></div>

<div class="feat-copy">

<div class="num">02 · Second Opinion</div>

<h3>Got a scary quote? Get a second look first.</h3>

<p>Upload your treatment plan or X-rays. A licensed dentist gives you a limited, informational second opinion so you can decide with clarity — and compare what the same care costs at an ODW-powered office.</p>

<ul class="feat-list">

<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#E2F4EF"/><path d="M7 12.5l3 3 7-7" stroke="#0B7E72" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Reviewed by a licensed dentist — not a chatbot, not a salesperson.</span></li>

<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#E2F4EF"/><path d="M7 12.5l3 3 7-7" stroke="#0B7E72" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Understand what's urgent, what can wait, and what it should cost.</span></li>

<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#E2F4EF"/><path d="M7 12.5l3 3 7-7" stroke="#0B7E72" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Records stored on a HIPAA-compliant system.</span></li>

</ul>

<div class="note">A limited second opinion is informational only. It is not a diagnosis or treatment plan and does not replace an in-person exam.</div>

</div>

</div>


<div class="feat r-up">

<div class="feat-media"><div class="phone sm"><div class="screen"><img src="https://assets.cdn.filesafe.space/cCdubK8zXMLSTxav96bG/media/6a2e16a2c5c62232067e5a4f.jpg" alt="App comparing transparent procedure prices"></div></div></div>

<div class="feat-copy">

<div class="num">03 · Compare Prices</div>

<h3>Clear prices, side by side — no decoding required.</h3>

<p>Search any procedure by name or code and see ODW's transparent price in seconds. Honest numbers you can plan around, often a fraction of what dental care typically costs.</p>

<ul class="feat-list">

<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#E2F4EF"/><path d="M7 12.5l3 3 7-7" stroke="#0B7E72" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Search by procedure name or CDT code.</span></li>

<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#E2F4EF"/><path d="M7 12.5l3 3 7-7" stroke="#0B7E72" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Save favorites and revisit them anytime.</span></li>

<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#E2F4EF"/><path d="M7 12.5l3 3 7-7" stroke="#0B7E72" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Transparent pricing you can compare with confidence.</span></li>

</ul>

<div class="note">Listed prices are starting points for common cases. Your final cost is confirmed at your exam.</div>

</div>

</div>


<div class="feat flip r-up">

<div class="feat-media"><div class="phone sm"><div class="screen"><img src="https://assets.cdn.filesafe.space/cCdubK8zXMLSTxav96bG/media/6a2e16a2c53e51acc0fcb3c2.jpg" alt="App screen to choose clinic, dentist and time"></div></div></div>

<div class="feat-copy">

<div class="num">04 · Book Appointment</div>

<h3>Pick your dentist, pick your time, done.</h3>

<p>Choose a clinic, a provider, and a slot that works for you — including evenings and weekends. Then our team takes it from there and delivers the care.</p>

<ul class="feat-list">

<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#E2F4EF"/><path d="M7 12.5l3 3 7-7" stroke="#0B7E72" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Real-time availability across ODW-powered offices.</span></li>

<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#E2F4EF"/><path d="M7 12.5l3 3 7-7" stroke="#0B7E72" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Choose a specific dentist or "first available."</span></li>

<li><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#E2F4EF"/><path d="M7 12.5l3 3 7-7" stroke="#0B7E72" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Urgent dental? Flag it and get seen sooner.</span></li>

</ul>

</div>

</div>

</div>

</section>


<!-- AI -->

<section class="section" id="ai">

<div class="wrap">

<div class="ai r-up">

<div class="ai-head">

<span class="eyebrow">New · AI-assisted care</span>

<h2>Every ODW-powered office now runs on an AI-assisted workflow.</h2>

<p>We've put modern AI to work behind the scenes — so your visit is faster, your estimate is clearer, and your dental team spends more time on you and less on paperwork.</p>

</div>

<div class="ai-cards">

<div class="ai-card"><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5ee0cf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg></div><h4>Faster, clearer estimates</h4><p>AI helps assemble itemized cost and insurance breakdowns quickly — so you wait days, not weeks.</p></div>

<div class="ai-card"><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5ee0cf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2.5"/><path d="M9 8h6M9 12h6M9 16h3"/></svg></div><h4>Sharper clinical support</h4><p>AI-assisted notes and imaging tools help our licensed dentists stay thorough and consistent.</p></div>

<div class="ai-card"><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5ee0cf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="3"/><path d="M11 18h2"/></svg></div><h4>Always-on front desk</h4><p>An AI receptionist helps answer questions and schedule around the clock, whenever you need it.</p></div>

</div>

<div class="ai-foot"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><span><strong>AI supports our team — people make the decisions.</strong> Every diagnosis and treatment plan is made by a licensed dentist. Your records are stored on a HIPAA-compliant system.</span></div>

</div>

</div>

</section>


<!-- HOW -->

<section class="section" id="how" style="padding-top:0">

<div class="wrap">

<div class="sec-head center r-up">

<span class="eyebrow">How it works</span>

<h2>From "what will this cost?" to cared for — in three steps.</h2>

</div>

<div class="steps r-up">

<div class="step"><span class="n">1</span><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B7E72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="3"/><path d="M11 18h2"/></svg></div><h4>Open the app</h4><p>Tell us what's going on, or pick a service. Add insurance to personalize your estimate.</p></div>

<div class="step"><span class="n">2</span><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B7E72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4L13.4 20.6a2 2 0 01-2.8 0l-7-7A2 2 0 013 12V5a2 2 0 012-2h7a2 2 0 011.4.6l7.2 7.2a2 2 0 010 2.8z"/></svg></div><h4>See your price & options</h4><p>Get a clear estimate, a limited second opinion, and a side-by-side cost comparison.</p></div>

<div class="step"><span class="n">3</span><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B7E72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4c4-3 8 0 8 4 0 2-1 3-2 6-1 4-1 7-3 7s-1-5-3-5-1 5-3 5-2-3-3-7c-1-3-2-4-2-6 0-4 4-7 8-4z"/></svg></div><h4>We deliver the care</h4><p>Book your dentist and time — then our team handles the visit, end to end.</p></div>

</div>

</div>

</section>


<!-- DIFF -->

<section class="section" style="padding-top:0">

<div class="wrap diff">

<div class="r-up">

<span class="eyebrow">Why we're different</span>

<h2 style="font-size:clamp(2rem,3.4vw,2.7rem);margin:14px 0 16px">We don't hand you a list. We run the care.</h2>

<p class="muted" style="font-size:1.1rem">Directories make money by referring you out and disappearing. OneDentalWorld brings its own dentists and teams into trusted local offices and owns the experience end to end — that's how care stays great and prices stay honest.</p>

<div style="margin-top:24px" class="stores"><a class="store" href="https://apps.apple.com/in/app/onedentalworld/id6756610992" target="_blank" rel="noopener" aria-label="Download on the App Store"><svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.88 2.65 3.22 2.6 1.29-.05 1.78-.83 3.34-.83 1.56 0 2 .83 3.37.81 1.39-.03 2.27-1.27 3.12-2.53.98-1.45 1.39-2.85 1.41-2.92-.03-.01-2.7-1.04-2.72-4.13z"/><path d="M14.69 4.35c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-2.99 1.54-.66.76-1.23 1.98-1.08 3.15 1.14.09 2.3-.58 3.01-1.44z"/></svg><span><span class="s-top">Download on the</span><span class="s-big">App Store</span></span></a></div>

</div>

<div class="compare-box r-up">

<div class="cb-row cb-head"><div class="them">Typical booking app</div><div class="us">OneDentalWorld</div></div>

<div class="cb-row cb-line"><div class="them"><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#EDF1F6"/><path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="#9AA7B5" stroke-width="2.2" stroke-linecap="round"/></svg> Refers you out, then disappears</div><div class="us"><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#E2F4EF"/><path d="M7 12.5l3 3 7-7" stroke="#0B7E72" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg> Brings the dentist & runs the visit</div></div>

<div class="cb-row cb-line"><div class="them"><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#EDF1F6"/><path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="#9AA7B5" stroke-width="2.2" stroke-linecap="round"/></svg> Price is a mystery till the bill</div><div class="us"><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#E2F4EF"/><path d="M7 12.5l3 3 7-7" stroke="#0B7E72" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg> Upfront price before you book</div></div>

<div class="cb-row cb-line"><div class="them"><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#EDF1F6"/><path d="M8.5 8.5l7 7M15.5

8.5l-7 7" stroke="#9AA7B5" stroke-width="2.2" stroke-linecap="round"/></svg> No way to sanity-check a quote</div><div class="us"><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#E2F4EF"/><path d="M7 12.5l3 3 7-7" stroke="#0B7E72" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg> Licensed second opinion built in</div></div>

<div class="cb-row cb-line"><div class="them"><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#EDF1F6"/><path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="#9AA7B5" stroke-width="2.2" stroke-linecap="round"/></svg> Same old paperwork & waits</div><div class="us"><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#E2F4EF"/><path d="M7 12.5l3 3 7-7" stroke="#0B7E72" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg> AI-assisted, modern workflow</div></div>

</div>

</div>

</section>


<!-- PRICING -->

<section class="section" id="pricing" style="padding-top:0">

<div class="wrap">

<div class="sec-head center r-up">

<span class="eyebrow">Transparent pricing</span>

<h2>Real numbers, published openly.</h2>

<p>A few examples of ODW's transparent pricing. The full menu lives in the app, personalized to your insurance.</p>

</div>

<div class="price-grid r-up">

<div class="price-card"><div class="pc-name">All-Ceramic Crown</div><div class="pc-code">CDT D2740</div><div class="pc-from">ODW price from</div><div class="pc-num">$599</div><div class="pc-tag">Transparent · upfront</div></div>

<div class="price-card"><div class="pc-name">Adult Cleaning</div><div class="pc-code">CDT D1110</div><div class="pc-from">ODW price from</div><div class="pc-num">$75</div><div class="pc-tag">Transparent · upfront</div></div>

<div class="price-card"><div class="pc-name">Veneer / Smile Makeover</div><div class="pc-code">per tooth</div><div class="pc-from">ODW price from</div><div class="pc-num">$799</div><div class="pc-tag">Transparent · upfront</div></div>

</div>

<p class="muted" style="text-align:center;margin-top:26px;font-size:.9rem">Prices are starting points for common cases and may vary based on your specific needs. Your final cost is confirmed at your in-person exam.</p>

</div>

</section>


<!-- LOCATIONS -->

<section class="section" id="locations" style="padding-top:0">

<div class="wrap">

<div class="sec-head center r-up">

<span class="eyebrow">ODW-powered offices</span>

<h2>Open now in the Las Vegas valley — and growing fast.</h2>

<p>We're expanding to new neighborhoods and cities. Two offices are live today, with more on the way.</p>

</div>

<div class="locs r-up">

<div class="loc live">

<span class="pin"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B7E72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/></svg></span>

<div><h4>High End Dental</h4><p>5475 S Fort Apache Rd, Suite #100<br>Las Vegas, NV 89148</p>

<div class="tags"><span>Multi-specialty</span><span>Weekend hours</span><span>Implant specials</span><span>AI-assisted</span></div></div>

</div>

<div class="loc live">

<span class="pin"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B7E72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/></svg></span>

<div><h4>Heavenly Smiles</h4><p>2642 W Horizon Ridge Pkwy, Suite #4A<br>Henderson, NV 89052</p>

<div class="tags"><span>Family-friendly</span><span>Experienced doctors</span><span>Easy booking</span></div></div>

</div>

<div class="loc soon">

<span class="soon-badge">Coming soon</span>

<span class="pin"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B7E72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/></svg></span>

<div><h4>North Las Vegas &amp; Summerlin</h4><p>New ODW-powered offices opening across the valley.</p>

<div class="tags"><span>Expanding 2026</span><span>Same transparent pricing</span></div></div>

</div>

<div class="loc soon">

<span class="soon-badge">Your city next</span>

<span class="pin"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B7E72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path

d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/></svg></span>

<div><h4>Coming to more cities</h4><p>We're scaling the ODW model beyond Nevada. Want us in your area?</p>

<div class="tags"><span>Request a location</span><span>Nationwide vision</span></div></div>

</div>

</div>

<div class="loc-cta"><a class="btn btn-primary" href="#get">Get the app to see live availability</a></div>

</div>

</section>


<!-- FAQ -->

<section class="section" id="faq" style="padding-top:0">

<div class="wrap">

<div class="sec-head center r-up"><span class="eyebrow">Good to know</span><h2>Questions, answered.</h2></div>

<div class="faq r-up">

<details class="qa"><summary>Are you just a booking app? <svg class="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#11A697" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></summary><div class="ans">No. Booking is only the first step. OneDentalWorld brings its own dentists and team into trusted local offices and runs your entire visit — so the price you see, the dentist you book, and the care you receive all come from one accountable team.</div></details>

<details class="qa"><summary>Is the estimate exactly what I'll pay? <svg class="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#11A697" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></summary><div class="ans">It's a close, informational estimate based on the details and insurance you provide — designed to remove surprises. Because every mouth is different, your final cost is confirmed at your in-person exam.</div></details>

<details class="qa"><summary>Is the second opinion a diagnosis? <svg class="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#11A697" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></summary><div class="ans">No. It's a limited, informational review by a licensed dentist to help you understand your options and costs. It is not a diagnosis or treatment plan and does not create a doctor–patient relationship. For diagnosis and treatment, you'll be seen in person.</div></details>

<details class="qa"><summary>Who actually treats me? <svg class="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#11A697" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></summary><div class="ans">Licensed dentists at ODW-powered offices. OneDentalWorld provides the app, technology, and operational support; all clinical care and decisions are made by licensed dental professionals.</div></details>

<details class="qa"><summary>How does AI fit in? <svg class="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#11A697" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></summary><div class="ans">AI helps our teams move faster on estimates, scheduling, and documentation — and answers your questions around the clock. It assists; it never decides. Every clinical decision is made by a licensed dentist.</div></details>

<details class="qa"><summary>Where are you available? <svg class="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#11A697" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></summary><div class="ans">Two offices are live in the Las Vegas valley today, with more opening across the area and beyond. Download the app to see current locations and availability.</div></details>

</div>

</div>

</section>


<!-- FINAL -->

<section class="section" id="get" style="padding-top:0">

<div class="wrap">

<div class="final r-up">

<h2>Your next dental decision shouldn't be a guess.</h2>

<p>Download OneDentalWorld — see your real price, get a second opinion, book in seconds, and let us deliver the care.</p>

<div class="stores"><a class="store" href="https://apps.apple.com/in/app/onedentalworld/id6756610992" target="_blank" rel="noopener" aria-label="Download on the App Store"><svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.88 2.65 3.22 2.6 1.29-.05 1.78-.83 3.34-.83 1.56 0 2 .83 3.37.81 1.39-.03 2.27-1.27 3.12-2.53.98-1.45 1.39-2.85 1.41-2.92-.03-.01-2.7-1.04-2.72-4.13z"/><path d="M14.69 4.35c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-2.99 1.54-.66.76-1.23 1.98-1.08 3.15 1.14.09 2.3-.58 3.01-1.44z"/></svg><span><span class="s-top">Download on the</span><span class="s-big">App Store</span></span></a> <a class="store" href="https://play.google.com/store/apps/details?id=com.onedentalworld" target="_blank" rel="noopener" aria-label="Get it on Google Play"><svg width="22" height="22" viewBox="0 0 24 24"><path d="M3.6 2.3c-.2.2-.3.5-.3.9v17.6c0 .4.1.7.3.9l.1.1 9.9-9.9v-.2L3.6 2.3z" fill="#34A853"/><path d="M17 15.3l-3.3-3.3v-.2L17 8.5l.1.04 3.9 2.2c1.1.6 1.1 1.7 0 2.3L17 15.3z" fill="#FBBC04"/><path d="M17.1 15.3L13.7 12l-10.1 10c.4.4.9.4 1.6.04l11.9-6.8z" fill="#EA4335"/><path d="M17.1 8.6L5.2 1.9c-.7-.4-1.3-.4-1.6 0l10.1 10.1 3.4-3.4z" fill="#4285F4"/></svg><span><span class="s-top">Get it on</span><span class="s-big">Google Play</span></span></a></div>

</div>

</div>

</section>


<footer>

<div class="wrap">

<div class="foot-top">

<div class="foot-brand">

<div class="brand" style="gap:11px"><img class="logo" src="https://assets.cdn.filesafe.space/cCdubK8zXMLSTxav96bG/media/6a2e16a2e650055aa22fac0c.png" alt="OneDentalWorld logo" width="38" height="38"><span class="word"><b style="color:#fff">OneDental</b><span>World</span></span></div>

<p>Creating smiles worldwide — we book your dental care, and we deliver it.</p>

<div class="stores" style="margin-top:18px"><a class="store" href="https://apps.apple.com/in/app/onedentalworld/id6756610992" target="_blank" rel="noopener" aria-label="Download on the App Store"><svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.88 2.65 3.22 2.6 1.29-.05 1.78-.83 3.34-.83 1.56 0 2 .83 3.37.81 1.39-.03 2.27-1.27 3.12-2.53.98-1.45 1.39-2.85 1.41-2.92-.03-.01-2.7-1.04-2.72-4.13z"/><path d="M14.69 4.35c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-2.99 1.54-.66.76-1.23 1.98-1.08 3.15 1.14.09 2.3-.58 3.01-1.44z"/></svg><span><span class="s-top">Download on the</span><span class="s-big">App Store</span></span></a></div>

</div>

<div class="foot-col"><h5>Product</h5>

<a href="#features">Cost estimate</a><a href="#features">Second opinion</a><a href="#pricing">Compare prices</a><a href="#get">Book appointment</a></div>

<div class="foot-col"><h5>Company</h5>

<a href="#endtoend">End-to-end care</a><a href="#ai">AI-assisted care</a><a href="#locations">Locations</a><a href="https://www.onedentalworld.com" target="_blank" rel="noopener">OneDentalWorld.com</a></div>

</div>

<div class="legal">

<p><strong>OneDentalWorld (ODW)</strong> is a dental support organization that provides non-clinical management, technology, and administrative services. Clinical care is provided by independently licensed dentists practicing at ODW-powered offices. ODW does not practice dentistry or make clinical decisions.</p>

<p>The OneDentalWorld app provides <strong>informational tools only</strong> — estimates, limited second opinions, price comparisons, and booking. It does not provide medical or dental advice, diagnosis, or treatment, and using it does not create a doctor–patient relationship. Estimates and second opinions are informational and may change following an in-person examination. Always consult a licensed dentist for diagnosis and care.</p>

<p>Quoted prices are starting points for common cases and may vary based on individual clinical needs; final cost is determined at your in-person exam. <strong>Promotional pricing and complimentary offers are not available to Medicare or Medicaid beneficiaries.</strong> Patient documents and images are stored on a HIPAA-compliant system.</p>

</div>

<div class="copy"><span>© 2026 OneDentalWorld. All rights reserved.</span>

<span><a href="#" style="margin-right:18px">Privacy Policy</a><a href="#">Terms of Service</a></span></div>

</div>

</footer>


<script>

(function(){

var svg=document.getElementById('threadSvg'),track=document.getElementById('trackPath'),

draw=document.getElementById('drawPath'),marker=document.getElementById('toothMarker'),

nodesG=document.getElementById('threadNodes'),bar=document.getElementById('topbar'),

tbtooth=document.getElementById('topbarTooth'),len=0,tick=false,drag=false,nodeEls=[];

var PAT=[0,.62,-.5,.9,-.72,.45,-.95,.68,-.3,.85,-.55,.25,0];

function buildGraph(H){var mob=window.innerWidth<768,cx=mob?26:42,amp=mob?13:22,segs=PAT.length-1,d="",verts=[];

for(var i=0;i<PAT.length;i++){var x=cx+amp*PAT[i],y=H*i/segs;verts.push({x:x,y:y});d+=(i?" L":"M")+x.toFixed(1)+" "+y.toFixed(1);}

return {d:d,verts:verts};}

function build(){if(!svg)return;var H=window.innerHeight;svg.setAttribute('height',H);

var g=buildGraph(H);track.setAttribute('d',g.d);draw.setAttribute('d',g.d);

len=draw.getTotalLength();draw.style.strokeDasharray=len;

nodesG.innerHTML='';nodeEls=[];

g.verts.forEach(function(v){var c=document.createElementNS('http://www.w3.org/2000/svg','circle');

c.setAttribute('cx',v.x.toFixed(1));c.setAttribute('cy',v.y.toFixed(1));c.setAttribute('r','3.2');

c.setAttribute('fill','rgba(14,27,42,.16)');nodesG.appendChild(c);nodeEls.push(c);});

upd();}

function upd(){tick=false;var h=document.documentElement,max=h.scrollHeight-h.clientHeight,

p=max>0?Math.min(1,Math.max(0,h.scrollTop/max)):0,ty=0;

if(len){draw.style.strokeDashoffset=len*(1-p);var pt=draw.getPointAtLength(len*p);ty=pt.y;

marker.setAttribute('transform','translate('+pt.x.toFixed(1)+' '+pt.y.toFixed(1)+')');}

for(var i=0;i<nodeEls.length;i++){var c=nodeEls[i],cy=+c.getAttribute('cy');

if(cy<=ty+1){c.setAttribute('fill','#11A697');c.setAttribute('r','3.8');}else{c.setAttribute('fill','rgba(14,27,42,.16)');c.setAttribute('r','3.2');}}

if(bar)bar.style.width=(p*100).toFixed(2)+'%';

if(tbtooth)tbtooth.style.left=(p*100).toFixed(2)+'%';}

window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd);}},{passive:true});

window.addEventListener('resize',build);

if(marker){marker.style.touchAction='none';

function scrubTo(cy){var h=document.documentElement,max=h.scrollHeight-h.clientHeight,pp=Math.min(1,Math.max(0,cy/window.innerHeight));window.scrollTo(0,pp*max);}

marker.addEventListener('pointerdown',function(e){drag=true;try{marker.setPointerCapture(e.pointerId);}catch(x){}e.preventDefault();});

marker.addEventListener('pointermove',function(e){if(drag){scrubTo(e.clientY);e.preventDefault();}});

marker.addEventListener('pointerup',function(){drag=false;});

marker.addEventListener('pointercancel',function(){drag=false;});

}

build();

})();

(function(){

var r=document.getElementById('reveal'), b=document.getElementById('revealBtn');

if(b){b.addEventListener('click',function(){r.classList.toggle('shown');

b.textContent=r.classList.contains('shown')?'Hide price':'Reveal price';});}

})();

(function(){

var els=document.querySelectorAll('.r-up');

if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}

var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});},{threshold:.12,rootMargin:'0px 0px -8% 0px'});

els.forEach(function(e){io.observe(e)});

})();

</script>

</body>

</html>