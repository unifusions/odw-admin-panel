import{j as l,b as C}from"./app-mM7tJIyr.js";import{B as $}from"./Breadcrumbs-BzzmN_FU.js";import{A as V}from"./AuthenticatedLayout-BGMzUaxD.js";import"./index-DVxW_UtN.js";import"./DentistIcon-jbUOtmDG.js";const L=6048e5,z=864e5,R=6e4,X=36e5,j=Symbol.for("constructDateFrom");function y(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&j in t?t[j](e):t instanceof Date?new t.constructor(e):new Date(e)}function g(t,e){return y(e||t,t)}let J={};function Y(){return J}function W(t,e){var c,d,o,f;const n=Y(),r=(e==null?void 0:e.weekStartsOn)??((d=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:d.weekStartsOn)??n.weekStartsOn??((f=(o=n.locale)==null?void 0:o.options)==null?void 0:f.weekStartsOn)??0,a=g(t,e==null?void 0:e.in),i=a.getDay(),s=(i<r?7:0)+i-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function S(t,e){return W(t,{...e,weekStartsOn:1})}function B(t,e){const n=g(t,e==null?void 0:e.in),r=n.getFullYear(),a=y(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const i=S(a),s=y(n,0);s.setFullYear(r,0,4),s.setHours(0,0,0,0);const c=S(s);return n.getTime()>=i.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function q(t){const e=g(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Z(t,...e){const n=y.bind(null,e.find(r=>typeof r=="object"));return e.map(n)}function p(t,e){const n=g(t,e==null?void 0:e.in);return n.setHours(0,0,0,0),n}function K(t,e,n){const[r,a]=Z(n==null?void 0:n.in,t,e),i=p(r),s=p(a),c=+i-q(i),d=+s-q(s);return Math.round((c-d)/z)}function ee(t,e){const n=B(t,e),r=y(t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),S(r)}function te(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function ne(t){return!(!te(t)&&typeof t!="number"||isNaN(+g(t)))}function re(t,e){const n=g(t,e==null?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const ae={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ie=(t,e,n)=>{let r;const a=ae[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function F(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const se={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ce={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},oe={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ue={date:F({formats:se,defaultWidth:"full"}),time:F({formats:ce,defaultWidth:"full"}),dateTime:F({formats:oe,defaultWidth:"full"})},de={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},fe=(t,e,n,r)=>de[t];function O(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&t.formattingValues){const s=t.defaultFormattingWidth||t.defaultWidth,c=n!=null&&n.width?String(n.width):s;a=t.formattingValues[c]||t.formattingValues[s]}else{const s=t.defaultWidth,c=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[c]||t.values[s]}const i=t.argumentCallback?t.argumentCallback(e):e;return a[i]}}const le={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},me={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},he={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ge={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},we={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ye={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},be=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},xe={ordinalNumber:be,era:O({values:le,defaultWidth:"wide"}),quarter:O({values:me,defaultWidth:"wide",argumentCallback:t=>t-1}),month:O({values:he,defaultWidth:"wide"}),day:O({values:ge,defaultWidth:"wide"}),dayPeriod:O({values:we,defaultWidth:"wide",formattingValues:ye,defaultFormattingWidth:"wide"})};function P(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;const s=i[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(c)?Me(c,w=>w.test(s)):De(c,w=>w.test(s));let o;o=t.valueCallback?t.valueCallback(d):d,o=n.valueCallback?n.valueCallback(o):o;const f=e.slice(s.length);return{value:o,rest:f}}}function De(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function Me(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function ve(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const a=r[0],i=e.match(t.parsePattern);if(!i)return null;let s=t.valueCallback?t.valueCallback(i[0]):i[0];s=n.valueCallback?n.valueCallback(s):s;const c=e.slice(a.length);return{value:s,rest:c}}}const Oe=/^(\d+)(th|st|nd|rd)?/i,Pe=/\d+/i,ke={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},We={any:[/^b/i,/^(a|c)/i]},Te={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Se={any:[/1/i,/2/i,/3/i,/4/i]},Ye={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ne={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ce={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Fe={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ee={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},je={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},qe={ordinalNumber:ve({matchPattern:Oe,parsePattern:Pe,valueCallback:t=>parseInt(t,10)}),era:P({matchPatterns:ke,defaultMatchWidth:"wide",parsePatterns:We,defaultParseWidth:"any"}),quarter:P({matchPatterns:Te,defaultMatchWidth:"wide",parsePatterns:Se,defaultParseWidth:"any",valueCallback:t=>t+1}),month:P({matchPatterns:Ye,defaultMatchWidth:"wide",parsePatterns:Ne,defaultParseWidth:"any"}),day:P({matchPatterns:Ce,defaultMatchWidth:"wide",parsePatterns:Fe,defaultParseWidth:"any"}),dayPeriod:P({matchPatterns:Ee,defaultMatchWidth:"any",parsePatterns:je,defaultParseWidth:"any"})},pe={code:"en-US",formatDistance:ie,formatLong:ue,formatRelative:fe,localize:xe,match:qe,options:{weekStartsOn:0,firstWeekContainsDate:1}};function He(t,e){const n=g(t,e==null?void 0:e.in);return K(n,re(n))+1}function _e(t,e){const n=g(t,e==null?void 0:e.in),r=+S(n)-+ee(n);return Math.round(r/L)+1}function U(t,e){var f,w,M,v;const n=g(t,e==null?void 0:e.in),r=n.getFullYear(),a=Y(),i=(e==null?void 0:e.firstWeekContainsDate)??((w=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:w.firstWeekContainsDate)??a.firstWeekContainsDate??((v=(M=a.locale)==null?void 0:M.options)==null?void 0:v.firstWeekContainsDate)??1,s=y((e==null?void 0:e.in)||t,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const c=W(s,e),d=y((e==null?void 0:e.in)||t,0);d.setFullYear(r,0,i),d.setHours(0,0,0,0);const o=W(d,e);return+n>=+c?r+1:+n>=+o?r:r-1}function Ie(t,e){var c,d,o,f;const n=Y(),r=(e==null?void 0:e.firstWeekContainsDate)??((d=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:d.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(o=n.locale)==null?void 0:o.options)==null?void 0:f.firstWeekContainsDate)??1,a=U(t,e),i=y((e==null?void 0:e.in)||t,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),W(i,e)}function Qe(t,e){const n=g(t,e==null?void 0:e.in),r=+W(n,e)-+Ie(n,e);return Math.round(r/L)+1}function u(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const b={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return u(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):u(n+1,2)},d(t,e){return u(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return u(t.getHours()%12||12,e.length)},H(t,e){return u(t.getHours(),e.length)},m(t,e){return u(t.getMinutes(),e.length)},s(t,e){return u(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return u(a,e.length)}},D={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},H={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return b.y(t,e)},Y:function(t,e,n,r){const a=U(t,r),i=a>0?a:1-a;if(e==="YY"){const s=i%100;return u(s,2)}return e==="Yo"?n.ordinalNumber(i,{unit:"year"}):u(i,e.length)},R:function(t,e){const n=B(t);return u(n,e.length)},u:function(t,e){const n=t.getFullYear();return u(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return u(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return u(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return b.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return u(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=Qe(t,r);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):u(a,e.length)},I:function(t,e,n){const r=_e(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):u(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):b.d(t,e)},D:function(t,e,n){const r=He(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):u(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return u(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return u(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return u(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(r===12?a=D.noon:r===0?a=D.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(r>=17?a=D.evening:r>=12?a=D.afternoon:r>=4?a=D.morning:a=D.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return b.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):b.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):u(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):u(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):b.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):b.s(t,e)},S:function(t,e){return b.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return I(r);case"XXXX":case"XX":return x(r);case"XXXXX":case"XXX":default:return x(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return I(r);case"xxxx":case"xx":return x(r);case"xxxxx":case"xxx":default:return x(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+_(r,":");case"OOOO":default:return"GMT"+x(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+_(r,":");case"zzzz":default:return"GMT"+x(r,":")}},t:function(t,e,n){const r=Math.trunc(+t/1e3);return u(r,e.length)},T:function(t,e,n){return u(+t,e.length)}};function _(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),i=r%60;return i===0?n+String(a):n+String(a)+e+u(i,2)}function I(t,e){return t%60===0?(t>0?"-":"+")+u(Math.abs(t)/60,2):x(t,e)}function x(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=u(Math.trunc(r/60),2),i=u(r%60,2);return n+a+e+i}const Q=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},G=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Le=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return Q(t,e);let i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",Q(r,e)).replace("{{time}}",G(a,e))},Re={p:G,P:Le},Xe=/^D+$/,Be=/^Y+$/,Ue=["D","DD","YY","YYYY"];function Ge(t){return Xe.test(t)}function Ae(t){return Be.test(t)}function $e(t,e,n){const r=Ve(t,e,n);if(console.warn(r),Ue.includes(t))throw new RangeError(r)}function Ve(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ze=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Je=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ze=/^'([^]*?)'?$/,Ke=/''/g,et=/[a-zA-Z]/;function tt(t,e,n){var f,w,M,v;const r=Y(),a=r.locale??pe,i=r.firstWeekContainsDate??((w=(f=r.locale)==null?void 0:f.options)==null?void 0:w.firstWeekContainsDate)??1,s=r.weekStartsOn??((v=(M=r.locale)==null?void 0:M.options)==null?void 0:v.weekStartsOn)??0,c=g(t,n==null?void 0:n.in);if(!ne(c))throw new RangeError("Invalid time value");let d=e.match(Je).map(h=>{const m=h[0];if(m==="p"||m==="P"){const N=Re[m];return N(h,a.formatLong)}return h}).join("").match(ze).map(h=>{if(h==="''")return{isToken:!1,value:"'"};const m=h[0];if(m==="'")return{isToken:!1,value:nt(h)};if(H[m])return{isToken:!0,value:h};if(m.match(et))throw new RangeError("Format string contains an unescaped latin alphabet character `"+m+"`");return{isToken:!1,value:h}});a.localize.preprocessor&&(d=a.localize.preprocessor(c,d));const o={firstWeekContainsDate:i,weekStartsOn:s,locale:a};return d.map(h=>{if(!h.isToken)return h.value;const m=h.value;(Ae(m)||Ge(m))&&$e(m,e,String(t));const N=H[m[0]];return N(c,m,a.localize,o)}).join("")}function nt(t){const e=t.match(Ze);return e?e[1].replace(Ke,"'"):t}function rt(t,e){const n=()=>y(e==null?void 0:e.in,NaN),a=ct(t);let i;if(a.date){const o=ot(a.date,2);i=ut(o.restDateString,o.year)}if(!i||isNaN(+i))return n();const s=+i;let c=0,d;if(a.time&&(c=dt(a.time),isNaN(c)))return n();if(a.timezone){if(d=ft(a.timezone),isNaN(d))return n()}else{const o=new Date(s+c),f=g(0,e==null?void 0:e.in);return f.setFullYear(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()),f.setHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()),f}return g(s+c+d,e==null?void 0:e.in)}const T={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},at=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,it=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,st=/^([+-])(\d{2})(?::?(\d{2}))?$/;function ct(t){const e={},n=t.split(T.dateTimeDelimiter);let r;if(n.length>2)return e;if(/:/.test(n[0])?r=n[0]:(e.date=n[0],r=n[1],T.timeZoneDelimiter.test(e.date)&&(e.date=t.split(T.timeZoneDelimiter)[0],r=t.substr(e.date.length,t.length))),r){const a=T.timezone.exec(r);a?(e.time=r.replace(a[1],""),e.timezone=a[1]):e.time=r}return e}function ot(t,e){const n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};const a=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:i===null?a:i*100,restDateString:t.slice((r[1]||r[2]).length)}}function ut(t,e){if(e===null)return new Date(NaN);const n=t.match(at);if(!n)return new Date(NaN);const r=!!n[4],a=k(n[1]),i=k(n[2])-1,s=k(n[3]),c=k(n[4]),d=k(n[5])-1;if(r)return wt(e,c,d)?lt(e,c,d):new Date(NaN);{const o=new Date(0);return!ht(e,i,s)||!gt(e,a)?new Date(NaN):(o.setUTCFullYear(e,i,Math.max(a,s)),o)}}function k(t){return t?parseInt(t):1}function dt(t){const e=t.match(it);if(!e)return NaN;const n=E(e[1]),r=E(e[2]),a=E(e[3]);return yt(n,r,a)?n*X+r*R+a*1e3:NaN}function E(t){return t&&parseFloat(t.replace(",","."))||0}function ft(t){if(t==="Z")return 0;const e=t.match(st);if(!e)return 0;const n=e[1]==="+"?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return bt(r,a)?n*(r*X+a*R):NaN}function lt(t,e,n){const r=new Date(0);r.setUTCFullYear(t,0,4);const a=r.getUTCDay()||7,i=(e-1)*7+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}const mt=[31,null,31,30,31,30,31,31,30,31,30,31];function A(t){return t%400===0||t%4===0&&t%100!==0}function ht(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(mt[e]||(A(t)?29:28))}function gt(t,e){return e>=1&&e<=(A(t)?366:365)}function wt(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}function yt(t,e,n){return t===24?e===0&&n===0:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}function bt(t,e){return e>=0&&e<=59}function Pt({children:t,clinic:e,breadcrumb:n}){return l.jsx(l.Fragment,{children:l.jsxs(V,{header:"Clinic",children:[l.jsxs("div",{class:"page-header mb-2",children:[l.jsxs("div",{class:"row align-items-center",children:[l.jsxs("div",{class:"col-sm mb-2 mb-sm-0",children:[l.jsx($,{}),l.jsx("h2",{class:"page-header-title",children:e.name}),"Active From:  ",e.created_at&&tt(rt(e.created_at),"dd/MM/yyyy")]}),l.jsx("div",{class:"col-sm-auto"})]}),l.jsxs("ul",{class:"nav nav-tabs page-header-tabs",children:[l.jsx("li",{class:"nav-item",children:l.jsx(C,{href:route("clinics.branches.index",e),className:`nav-link ${route().current("clinics.branches.index")&&"active"}`,children:"Branches"})}),l.jsx("li",{class:"nav-item",children:l.jsx(C,{href:route("clinics.users.index",e),className:`nav-link ${route().current("clinics.users.index")&&"active"}`,children:"Users"})}),l.jsx("li",{class:"nav-item",children:l.jsx(C,{href:route("clinics.services.index",e),className:`nav-link ${route().current("clinics.services.index")&&"active"}`,children:"Services"})})]})]}),t]})})}export{Pt as default};
