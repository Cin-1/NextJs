(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"1UYf":function(e,t,a){"use strict";var n={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 d\xeda",other:"{{count}} d\xedas"},aboutXWeeks:{one:"alrededor de 1 semana",other:"alrededor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 a\xf1o",other:"alrededor de {{count}} a\xf1os"},xYears:{one:"1 a\xf1o",other:"{{count}} a\xf1os"},overXYears:{one:"m\xe1s de 1 a\xf1o",other:"m\xe1s de {{count}} a\xf1os"},almostXYears:{one:"casi 1 a\xf1o",other:"casi {{count}} a\xf1os"}};var r=a("zMQz"),i={date:Object(r.a)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:Object(r.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(r.a)({formats:{full:"{{date}} 'a las' {{time}}",long:"{{date}} 'a las' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'el' eeee 'pasado a la' LT",yesterday:"'ayer a la' p",today:"'hoy a la' p",tomorrow:"'ma\xf1ana a la' p",nextWeek:"eeee 'a la' p",other:"P"},s={lastWeek:"'el' eeee 'pasado a las' p",yesterday:"'ayer a las' p",today:"'hoy a las' p",tomorrow:"'ma\xf1ana a las' p",nextWeek:"eeee 'a las' p",other:"P"};var d=a("ku8+");var u={ordinalNumber:function(e){return Number(e)+"\xba"},era:Object(d.a)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","despu\xe9s de cristo"]},defaultWidth:"wide"}),quarter:Object(d.a)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(d.a)({values:{narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],wide:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},defaultWidth:"wide"}),day:Object(d.a)({values:{narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","mi","ju","vi","sa"],abbreviated:["dom","lun","mar","mi\xe9","jue","vie","s\xe1b"],wide:["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:Object(d.a)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"}},defaultFormattingWidth:"wide"})},m=a("vRX4"),c=a("wzM+"),l={code:"es",formatDistance:function(e,t,a){var r;return a=a||{},r="string"===typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"en "+r:"hace "+r:r},formatLong:i,formatRelative:function(e,t,a,n){return 1!==t.getUTCHours()?s[e]:o[e]},localize:u,match:{ordinalNumber:Object(m.a)({matchPattern:/^(\d+)(\xba)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(c.a)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes de la era com[u\xfa]n|despu[e\xe9]s de cristo|era com[u\xfa]n)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes de la era com[u\xfa]n)/i,/^(despu[e\xe9]s de cristo|era com[u\xfa]n)/i]},defaultParseWidth:"any"}),quarter:Object(c.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(c.a)({matchPatterns:{narrow:/^[efmajsond]/i,abbreviated:/^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,wide:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^e/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^en/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i]},defaultParseWidth:"any"}),day:Object(c.a)({matchPatterns:{narrow:/^[dlmjvs]/i,short:/^(do|lu|ma|mi|ju|vi|sa)/i,abbreviated:/^(dom|lun|mar|mie|jue|vie|sab)/i,wide:/^(domingo|lunes|martes|mi[\xe9e]rcoles|jueves|viernes|s[\xe1a]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^mi/i,/^ju/i,/^vi/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Object(c.a)({matchPatterns:{narrow:/^(a|p|mn|md|(de la|a las) (ma\xf1ana|tarde|noche))/i,any:/^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (ma\xf1ana|tarde|noche))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/ma\xf1ana/i,afternoon:/tarde/i,evening:/tarde/i,night:/noche/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};t.a=l},"7xvl":function(e,t,a){"use strict";function n(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function r(e){n(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(e,t){n(2,arguments);var a=r(e),i=r(t),o=a.getTime()-i.getTime();return o<0?-1:o>0?1:o}function o(e,t){n(2,arguments);var a=r(e),o=r(t),s=i(a,o),d=Math.abs(function(e,t){n(2,arguments);var a=r(e),i=r(t);return 12*(a.getFullYear()-i.getFullYear())+(a.getMonth()-i.getMonth())}(a,o));a.setMonth(a.getMonth()-s*d);var u=s*(d-(i(a,o)===-s));return 0===u?0:u}function s(e,t){n(2,arguments);var a=function(e,t){n(2,arguments);var a=r(e),i=r(t);return a.getTime()-i.getTime()}(e,t)/1e3;return a>0?Math.floor(a):Math.ceil(a)}var d={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};var u=a("zMQz"),m={date:Object(u.a)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Object(u.a)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Object(u.a)({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};var l=a("ku8+");var h={ordinalNumber:function(e,t){var a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},era:Object(l.a)({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Object(l.a)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(l.a)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Object(l.a)({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Object(l.a)({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},f=a("vRX4"),b=a("wzM+"),g={code:"en-US",formatDistance:function(e,t,a){var n;return a=a||{},n="string"===typeof d[e]?d[e]:1===t?d[e].one:d[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"in "+n:n+" ago":n},formatLong:m,formatRelative:function(e,t,a,n){return c[e]},localize:h,match:{ordinalNumber:Object(f.a)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(b.a)({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Object(b.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(b.a)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(b.a)({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Object(b.a)({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function v(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var a in t=t||{})t.hasOwnProperty(a)&&(e[a]=t[a]);return e}({},e)}var p=6e4;function w(e){return e.getTime()%p}function y(e){var t=new Date(e.getTime()),a=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var n=a>0?(p+w(t))%p:w(t);return a*p+n}var j=1440,M=2520,O=43200,W=86400;function P(e,t){return n(1,arguments),function(e,t,a){n(2,arguments);var d=a||{},u=d.locale||g;if(!u.formatDistance)throw new RangeError("locale must contain formatDistance property");var m=i(e,t);if(isNaN(m))throw new RangeError("Invalid time value");var c,l,h=v(d);h.addSuffix=Boolean(d.addSuffix),h.comparison=m,m>0?(c=r(t),l=r(e)):(c=r(e),l=r(t));var f,b=s(l,c),p=(y(l)-y(c))/1e3,w=Math.round((b-p)/60);if(w<2)return d.includeSeconds?b<5?u.formatDistance("lessThanXSeconds",5,h):b<10?u.formatDistance("lessThanXSeconds",10,h):b<20?u.formatDistance("lessThanXSeconds",20,h):b<40?u.formatDistance("halfAMinute",null,h):b<60?u.formatDistance("lessThanXMinutes",1,h):u.formatDistance("xMinutes",1,h):0===w?u.formatDistance("lessThanXMinutes",1,h):u.formatDistance("xMinutes",w,h);if(w<45)return u.formatDistance("xMinutes",w,h);if(w<90)return u.formatDistance("aboutXHours",1,h);if(w<j){var P=Math.round(w/60);return u.formatDistance("aboutXHours",P,h)}if(w<M)return u.formatDistance("xDays",1,h);if(w<O){var x=Math.round(w/j);return u.formatDistance("xDays",x,h)}if(w<W)return f=Math.round(w/O),u.formatDistance("aboutXMonths",f,h);if((f=o(l,c))<12){var D=Math.round(w/O);return u.formatDistance("xMonths",D,h)}var k=f%12,S=Math.floor(f/12);return k<3?u.formatDistance("aboutXYears",S,h):k<9?u.formatDistance("overXYears",S,h):u.formatDistance("almostXYears",S+1,h)}(e,Date.now(),t)}a.d(t,"a",(function(){return P}))},MLoM:function(e,t,a){"use strict";var n=a("hfKm"),r=a.n(n),i=a("2Eek"),o=a.n(i),s=a("XoMD"),d=a.n(s),u=a("Jo+v"),m=a.n(u),c=a("4mXO"),l=a.n(c),h=a("pLtp"),f=a.n(h),b=a("vYYK"),g=a("q1tI"),v=a("xWvD");function p(e,t){var a=f()(e);if(l.a){var n=l()(e);t&&(n=n.filter((function(t){return m()(e,t).enumerable}))),a.push.apply(a,n)}return a}t.a=function(e){var t=Object(g.useState)(),a=t[0],n=t[1],i=Object(g.useContext)(v.a).firebase;function s(e){var t=e.docs.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(b.a)(e,t,a[t])})):d.a?o()(e,d()(a)):p(Object(a)).forEach((function(t){r()(e,t,m()(a,t))}))}return e}({id:e.id},e.data())}));n(t)}return Object(g.useEffect)((function(){i.db.collection("productos").orderBy(e,"desc").onSnapshot(s)}),[]),{productos:a}}},RNiq:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a("q1tI"),r=a.n(n),i=a("t30L"),o=a("SFMv"),s=a("MLoM"),d=a("qKvR");r.a.createElement;function u(){var e=Object(s.a)("creado").productos;return Object(d.c)("div",null,Object(d.c)(i.a,null,Object(d.c)("div",{className:"listado-productos"},Object(d.c)("div",{style:{padding:"5rem 0",maxWidth:"1200px",margin:"0 auto",width:"95%"}},Object(d.c)("ul",{className:"bg-white"},e?e.map((function(e){return Object(d.c)(o.a,{key:e.id,producto:e})})):null)))))}},SFMv:function(e,t,a){"use strict";var n=a("wTIg"),r=a("q1tI"),i=a.n(r),o=a("7xvl"),s=a("1UYf"),d=a("YFqc"),u=a.n(d),m=a("qKvR");i.a.createElement;var c=Object(n.a)("li",{target:"ef9sgmt0"})({name:"1gppy4h",styles:"padding:4rem;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #e1e1e1;"}),l=Object(n.a)("div",{target:"ef9sgmt1"})({name:"iuw6lt",styles:"flex:0 1 600px;display:grid;grid-template-columns:1fr 3fr;column-gap:2rem;"}),h=Object(n.a)("a",{target:"ef9sgmt2"})({name:"xwbjtd",styles:"font-size:2rem;font-weight:bold;margin:0;:hover{cursor:pointer;}"}),f=Object(n.a)("p",{target:"ef9sgmt3"})({name:"5zhmo",styles:"font-size:1.6rem;margin:0;color:#888;"}),b=Object(n.a)("div",{target:"ef9sgmt4"})({name:"4qdjbz",styles:"margin-top:2rem;display:flex;align-items:center;div{display:flex;align-items:center;border:1px solid #e1e1e1;padding:0.3rem 1rem;margin-right:2rem;}img{width:2rem;margin-right:2rem;}p{font-size:1.6rem;margin-right:1rem;font-weight:700;&:last-of-type{margin:0;}}"}),g=Object(n.a)("img",{target:"ef9sgmt5"})({name:"1domaf0",styles:"width:200px;"}),v=Object(n.a)("div",{target:"ef9sgmt6"})({name:"ewkvhc",styles:"flex:0 0 auto;text-align:center;border:1px solid #e1e1e1;padding:1rem 3rem;div{font-size:2rem;}p{margin:0;font-size:2rem;font-weight:700;}"});t.a=function(e){var t,a=e.producto,n=a.id,r=a.comentarios,i=a.descripcion,d=(a.empresa,a.nombre),p=a.creado,w=a.votos,y=(a.url,a.urlimg);return Object(m.c)(c,null,Object(m.c)(l,null,Object(m.c)("div",null,Object(m.c)(g,{src:y})),Object(m.c)("div",null,Object(m.c)(u.a,{href:"/productos/[id]",as:"/productos/".concat(n)},Object(m.c)(h,null,(t=d).charAt(0).toUpperCase()+t.slice(1))),Object(m.c)(f,null,i),Object(m.c)(b,null,Object(m.c)("div",null,Object(m.c)("img",{src:"/static/img/comentario.png"}),Object(m.c)("p",null,r.length," Comentarios"))),Object(m.c)("p",null,"Publicado hace:"," ",Object(o.a)(new Date(p),{locale:s.a})))),Object(m.c)(v,null,Object(m.c)("div",null,"\u25b2"),Object(m.c)("p",null,w)))}},"ku8+":function(e,t,a){"use strict";function n(e){return function(t,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;n=e.formattingValues[o]||e.formattingValues[i]}else{var s=e.defaultWidth,d=r.width?String(r.width):e.defaultWidth;n=e.values[d]||e.values[s]}return n[e.argumentCallback?e.argumentCallback(t):t]}}a.d(t,"a",(function(){return n}))},vRX4:function(e,t,a){"use strict";function n(e){return function(t,a){var n=String(t),r=a||{},i=n.match(e.matchPattern);if(!i)return null;var o=i[0],s=n.match(e.parsePattern);if(!s)return null;var d=e.valueCallback?e.valueCallback(s[0]):s[0];return{value:d=r.valueCallback?r.valueCallback(d):d,rest:n.slice(o.length)}}}a.d(t,"a",(function(){return n}))},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])},"wzM+":function(e,t,a){"use strict";function n(e){return function(t,a){var n=String(t),r=a||{},i=r.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],s=n.match(o);if(!s)return null;var d,u=s[0],m=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(m)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(m,(function(e){return e.test(u)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(m,(function(e){return e.test(u)})),d=e.valueCallback?e.valueCallback(d):d,{value:d=r.valueCallback?r.valueCallback(d):d,rest:n.slice(u.length)}}}a.d(t,"a",(function(){return n}))},zMQz:function(e,t,a){"use strict";function n(e){return function(t){var a=t||{},n=a.width?String(a.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}a.d(t,"a",(function(){return n}))}},[["vlRD",0,1]]]);