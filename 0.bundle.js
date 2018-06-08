(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,n){"use strict";n.r(t);var r=n(3),o=n(35);const a=n.n(o).a.parse(location.search),i=parseInt(a.seed);var c=isNaN(i)||i>2**32-1?null:i;const l=document.getElementById("nzsc-canvas"),s=l.getContext("2d"),u={width:1800,height:1e3},p=()=>{((e,t)=>{const n=window.innerWidth/t.width,r=window.innerHeight/t.height,o=Math.min(n,r),a=t.width*o,i=t.height*o;e.width=t.width,e.height=t.height,e.style.width=a+"px",e.style.height=i+"px",e.style.position="fixed",e.style.left=(window.innerWidth-a)/2+"px",e.style.top=(window.innerHeight-i)/2+"px"})(l,u)};p();const f=()=>({width:l.width,height:l.height}),h=(e,t)=>{const n=l.getBoundingClientRect();e-=n.left,t-=n.top;const r=window.innerWidth/l.width,o=window.innerHeight/l.height,a=Math.min(r,o);return[e/=a,t/=a]},d=400,g=800,m=40,b=100,y=e=>{if(e<0||e>3)throw new RangeError("nthRect() requires 0 <= n <= 3");return[m+e*(400+m),b,d,g]},v=(e,t)=>{const n=m,r=b,o=d;return t<r||t>f().height-r?-1:(e-n)%(o+n)>o?-1:Math.floor((e-n)/(o+n))},w=210,M=100,O=e=>{const t=f(),n=t.width,r=t.height,o=w,a=(n-6*o-2*M)/2,i=(n-4*o-M)/2,c=(r-4*o-M)/2,l=[[a+o,c+o],[a+3*o+M,c+o],[a+5*o+2*M,c+o],[i+o,c+3*o+M],[i+3*o+M,c+3*o+M]];if(!(e in l))throw new RangeError("nthCircle() expects 0 <= n <= 4");return l[e].concat([o])};var S=(e,t,n)=>e+n*(t-e);const T=(e,t)=>{let n=0;for(let r=0;r<t.length;r++){if(e<=(n+=t[r]))return r}throw new RangeError(e+" is not in a phase!")},A=(e,t)=>{let n=0;for(let r=0;r<t.length;r++){const o=t[r];if(e<=(n+=o))return e-(n-o)}throw new RangeError(e+" is not in a phase!")},P=e=>{switch(e){case"Ninja":return"Kick";case"Zombie":return"Rampage";case"Samurai":return"Helmet";case"Clown":return"Nose";default:throw new Error("Illegal character: "+e)}},x=e=>{switch(e=E(e)){case"Shadow":return"ShadowSlip";case"Speedy":return"RunInCircles";case"Regenerative":return"Regenerate";case"ZombieCorps":return"ZombieCorps";case"Atlas":return"Lightning";case"Strong":return"Bend";case"Backwards":return"BackwardsMoustachio";case"Moustachio":return"BigHairyDeal";case"NoBooster":return"NoBooster";default:throw new Error("Illegal booster: "+e)}},E=e=>e.split("").filter(e=>" "!==e).join(""),_={"#111":"\n    NoBooster\n    Kick\n    Nunchucks\n    ShadowFireball\n    RunInCircles\n    LightningFastKarateChop\n    Rampage\n    Muscle\n    Zap\n    Gravedigger\n    ZombieCorps\n    Apocalypse\n    Helmet\n    Smash\n    Lightning\n    Earthquake\n    Nose\n    NoseOfTheTaunted\n  ".trim().split("\n").map(e=>e.trim()),"#ddd":"\n    NinjaSword\n    ShadowSlip\n    Regenerate\n    SamuraiSword\n    Twist\n    Bend\n    AcidSpray\n    MustacheMash\n    BigHairyDeal\n  ".trim().split("\n").map(e=>e.trim()),"#888":"\n    BackwardsMoustachio\n    JugglingKnives\n  ".trim().split("\n").map(e=>e.trim())};var R=e=>{for(const t in _)if(_[t].includes(E(e)))return t;throw new TypeError(e+" has no defined background color!")},C=n(32),F=n.n(C),I=n(31),N=n.n(I),j=n(30),k=n.n(j),H=n(29),B=n.n(H),D=n(28),q=n.n(D),L=n(27),G=n.n(L),J=n(26),U=n.n(J),z=n(25),V=n.n(z),$=n(24),Z=n.n($),K=n(23),W=n.n(K),X=n(22),Y=n.n(X),Q=n(21),ee=n.n(Q),te=n(20),ne=n.n(te),re=n(19),oe=n.n(re),ae=n(18),ie=n.n(ae),ce=n(17),le=n.n(ce),se=n(16),ue=n.n(se),pe=n(15),fe=n.n(pe),he=n(14),de=n.n(he),ge=n(13),me=n.n(ge),be=n(12),ye=n.n(be),ve=n(11),we=n.n(ve),Me=n(10),Oe=n.n(Me),Se=n(9),Te=n.n(Se),Ae=n(8),Pe=n.n(Ae),xe=n(7),Ee=n.n(xe),_e=n(6),Re=n.n(_e),Ce=n(5),Fe=n.n(Ce),Ie=n(4),Ne=n.n(Ie);const je={Kick:F.a,NinjaSword:N.a,Nunchucks:k.a,ShadowFireball:B.a,ShadowSlip:q.a,RunInCircles:G.a,LightningFastKarateChop:U.a,Rampage:V.a,Muscle:Z.a,Zap:W.a,Regenerate:Y.a,Gravedigger:ee.a,ZombieCorps:ne.a,Apocalypse:oe.a,SamuraiSword:ie.a,Helmet:le.a,Smash:ue.a,Lightning:fe.a,Earthquake:de.a,Twist:me.a,Bend:ye.a,JugglingKnives:we.a,AcidSpray:Oe.a,Nose:Te.a,BackwardsMoustachio:Pe.a,NoseOfTheTaunted:Ee.a,MustacheMash:Re.a,BigHairyDeal:Fe.a,NoBooster:Ne.a},ke=[],He=Object.keys(je).reduce((e,t)=>{const n=new Image;return n.src=je[t],ke.push(new Promise((e,t)=>{n.addEventListener("load",()=>{e()})})),{...e,[t]:n}},{});He.waitForAllToLoad=Promise.all(ke);var Be=He;var De=e=>{switch(e.type){case"NOTHING_TO_CHARACTER":{s.fillStyle="#F1F1F1",s.fillRect(0,0,1800,1e3);const t=e.availableCharacters.map(P);for(let n=0;n<t.length;n++){const r=y(n),o=r[0]+1800*(1-e.completionFactor),[,a,i,c]=r;s.fillStyle=R(t[n]),s.fillRect(o,a,i,c),s.drawImage(Be[t[n]],o,300,400,400)}break}case"CHARACTER_TO_CHARACTER":{s.fillStyle="#F1F1F1",s.fillRect(0,0,1800,1e3);const t=e.previouslyAvailableCharacters.map(P),n=e.availableCharacters.map(P);for(let n=0;n<t.length;n++){const r=y(n),o=r[0]+1800*(0-e.completionFactor),[,a,i,c]=r;s.fillStyle=R(t[n]),s.fillRect(o,a,i,c),s.drawImage(Be[t[n]],o,300,400,400)}for(let t=0;t<n.length;t++){const r=y(t),o=r[0]+1800*(1-e.completionFactor),[,a,i,c]=r;s.fillRect(o,a,i,c),s.drawImage(Be[n[t]],o,300,400,400)}break}case"CHARACTER_TO_BOOSTER":{s.fillStyle="#F1F1F1",s.fillRect(0,0,1800,1e3);const t=e.previouslyAvailableCharacters.map(P),n=e.availableBoosters.map(x);for(let n=0;n<t.length;n++){const r=y(n),o=r[0]+1800*(0-e.completionFactor),[,a,i,c]=r;s.fillStyle=R(t[n]),s.fillRect(o,a,i,c),s.drawImage(Be[t[n]],o,300,400,400)}for(let t=0;t<n.length;t++){const r=y(t),o=r[0]+1800*(1-e.completionFactor),[,a,i,c]=r;s.fillStyle=R(n[t]),s.fillRect(o,a,i,c),s.drawImage(Be[n[t]],o,300,400,400)}break}case"BOOSTER_TO_MOVE":{s.fillStyle="#F1F1F1",s.fillRect(0,0,1800,1e3);const t=e.previouslyAvailableBoosters.map(x),n=e.availableMoves.map(E);for(let n=0;n<t.length;n++){const r=y(n),o=r[0]+1800*(0-e.completionFactor),[,a,i,c]=r;s.fillStyle=R(t[n]),s.fillRect(o,a,i,c),s.drawImage(Be[t[n]],o,300,400,400)}for(let t=0;t<n.length;t++){s.fillStyle=R(n[t]);const r=O(t),o=r[0]+1800*(1-e.completionFactor),[,a,i]=r,c=2*i;s.beginPath(),s.arc(o,a,i,0,2*Math.PI),s.fill(),s.closePath(),s.drawImage(Be[n[t]],o-i,a-i,c,c)}break}case"MOVE_CLASH":{const t=[.15,.15,.55,.15];s.fillStyle="#F1F1F1",s.fillRect(0,0,1800,1e3);const n=e.previouslyAvailableMoves.map(E),r=e.availableMoves.map(E),o=n.findIndex(t=>t===E(e.humanMove));if(1!==e.completionFactor){for(let e=0;e<n.length;e++){if(e===o)continue;s.fillStyle=R(n[e]);const t=O(e),r=t[0],[,a,i]=t,c=2*i;s.beginPath(),s.arc(r,a,i,0,2*Math.PI),s.fill(),s.closePath(),s.drawImage(Be[n[e]],r-i,a-i,c,c)}s.fillStyle="#333A",s.fillRect(0,0,1800,1e3)}else{for(let e=0;e<r.length;e++){s.fillStyle=R(r[e]);const t=O(e),n=t[0],[,o,a]=t,i=2*a;s.beginPath(),s.arc(n,o,a,0,2*Math.PI),s.fill(),s.closePath(),s.drawImage(Be[r[e]],n-a,o-a,i,i)}s.fillStyle="#111";for(let t=0;t<e.humanPoints;t++)s.fillRect(100+30*t,850,20,100);for(let t=0;t<e.computerPoints;t++)s.fillRect(1700-30*t,850,20,100)}const a=T(e.completionFactor,t),i=t[a],c=A(e.completionFactor,t);switch(a){case 0:{const t=[490,500,360],n=O(o).map((e,n)=>S(e,t[n],c/i)),r=n[0],[,a,l]=n,u=2*l;s.fillStyle=R(e.humanMove),s.beginPath(),s.arc(r,a,l,0,2*Math.PI),s.fill(),s.closePath(),s.drawImage(Be[E(e.humanMove)],r-l,a-l,u,u);break}case 1:{{const t=[490,500,360],n=t[0],[,r,o]=t,a=2*o;s.fillStyle=R(e.humanMove),s.beginPath(),s.arc(n,r,o,0,2*Math.PI),s.fill(),s.closePath(),s.drawImage(Be[E(e.humanMove)],n-o,r-o,a,a)}const t=[1310,500,360],n=[1800,500,360].map((e,n)=>S(e,t[n],c/i)),r=n[0],[,o,a]=n,l=2*a;s.fillStyle=R(e.computerMove),s.beginPath(),s.arc(r,o,a,0,2*Math.PI),s.fill(),s.closePath(),s.drawImage(Be[E(e.computerMove)],r-a,o-a,l,l);break}case 2:{console.log(e.whoGetsThePoint,e.humanMove,e.computerMove);const t=5;{"COMPUTER"!==e.whoGetsThePoint&&"BOTH"!==e.whoGetsThePoint||(s.globalAlpha=S(1,0,Math.min(c*t,1)));const n=[490,500,360],r=n[0],[,o,a]=n,i=2*a;s.fillStyle=R(e.humanMove),s.beginPath(),s.arc(r,o,a,0,2*Math.PI),s.fill(),s.closePath(),s.drawImage(Be[E(e.humanMove)],r-a,o-a,i,i),s.globalAlpha=1}{"HUMAN"!==e.whoGetsThePoint&&"BOTH"!==e.whoGetsThePoint||(s.globalAlpha=S(1,0,Math.min(c*t,1)));const n=[1310,500,360],r=n[0],[,o,a]=n,i=2*a;s.fillStyle=R(e.computerMove),s.beginPath(),s.arc(r,o,a,0,2*Math.PI),s.fill(),s.closePath(),s.drawImage(Be[E(e.computerMove)],r-a,o-a,i,i),s.globalAlpha=1}break}case 3:if("COMPUTER"!==e.whoGetsThePoint&&"BOTH"!==e.whoGetsThePoint){const t=[490,500,360],n=t[0]-c/i*850,[,r,o]=t,a=2*o;s.fillStyle=R(e.humanMove),s.beginPath(),s.arc(n,r,o,0,2*Math.PI),s.fill(),s.closePath(),s.drawImage(Be[E(e.humanMove)],n-o,r-o,a,a)}if("HUMAN"!==e.whoGetsThePoint&&"BOTH"!==e.whoGetsThePoint){const t=[1310,500,360],n=t[0]+c/i*850,[,r,o]=t,a=2*o;s.fillStyle=R(e.computerMove),s.beginPath(),s.arc(n,r,o,0,2*Math.PI),s.fill(),s.closePath(),s.drawImage(Be[E(e.computerMove)],n-o,r-o,a,a)}}break}case"FINAL_MOVE_CLASH":{const t=[.2,.2,.4,.2];s.fillStyle="#F1F1F1",s.fillRect(0,0,1800,1e3);const n=e.previouslyAvailableMoves.map(E),r=n.findIndex(t=>t===E(e.humanMove));if(1!==e.completionFactor){for(let e=0;e<n.length;e++){if(e===r)continue;s.fillStyle=R(n[e]);const t=O(e),o=t[0],[,a,i]=t,c=2*i;s.fillStyle=R(n[e]),s.beginPath(),s.arc(o,a,i,0,2*Math.PI),s.fill(),s.closePath(),s.drawImage(Be[n[e]],o-i,a-i,c,c)}s.fillStyle="#333A",s.fillRect(0,0,1800,1e3)}else{s.fillStyle="#111";for(let t=0;t<e.humanPoints;t++)s.fillRect(100+30*t,850,20,100);for(let t=0;t<e.computerPoints;t++)s.fillRect(1700-30*t,850,20,100)}const o=T(e.completionFactor,t),a=t[o],i=A(e.completionFactor,t);switch(o){case 0:{const t=[490,500,360],n=O(r).map((e,n)=>S(e,t[n],i/a)),o=n[0],[,c,l]=n,u=2*l;s.fillStyle=R(e.humanMove),s.beginPath(),s.arc(o,c,l,0,2*Math.PI),s.fill(),s.closePath(),s.drawImage(Be[E(e.humanMove)],o-l,c-l,u,u);break}case 1:{{const t=[490,500,360],n=t[0],[,r,o]=t,a=2*o;s.fillStyle=R(e.humanMove),s.beginPath(),s.arc(n,r,o,0,2*Math.PI),s.fill(),s.closePath(),s.drawImage(Be[E(e.humanMove)],n-o,r-o,a,a)}const t=[1310,500,360],n=[1800,500,360].map((e,n)=>S(e,t[n],i/a)),r=n[0],[,o,c]=n,l=2*c;s.fillStyle=R(e.computerMove),s.beginPath(),s.arc(r,o,c,0,2*Math.PI),s.fill(),s.closePath(),s.drawImage(Be[E(e.computerMove)],r-c,o-c,l,l);break}case 2:{console.log(e.whoGetsThePoint,e.humanMove,e.computerMove);const t=5;{"COMPUTER"!==e.whoGetsThePoint&&"BOTH"!==e.whoGetsThePoint||(s.globalAlpha=S(1,0,Math.min(i*t,1)));const n=[490,500,360],r=n[0],[,o,a]=n,c=2*a;s.fillStyle=R(e.humanMove),s.beginPath(),s.arc(r,o,a,0,2*Math.PI),s.fill(),s.closePath(),s.drawImage(Be[E(e.humanMove)],r-a,o-a,c,c),s.globalAlpha=1}{"HUMAN"!==e.whoGetsThePoint&&"BOTH"!==e.whoGetsThePoint||(s.globalAlpha=S(1,0,Math.min(i*t,1)));const n=[1310,500,360],r=n[0],[,o,a]=n,c=2*a;s.fillStyle=R(e.computerMove),s.beginPath(),s.arc(r,o,a,0,2*Math.PI),s.fill(),s.closePath(),s.drawImage(Be[E(e.computerMove)],r-a,o-a,c,c),s.globalAlpha=1}break}case 3:if("COMPUTER"!==e.whoGetsThePoint&&"BOTH"!==e.whoGetsThePoint){const t=[490,500,360],n=t[0]-i/a*850,[,r,o]=t,c=2*o;s.fillStyle=R(e.humanMove),s.beginPath(),s.arc(n,r,o,0,2*Math.PI),s.fill(),s.closePath(),s.drawImage(Be[E(e.humanMove)],n-o,r-o,c,c)}if("HUMAN"!==e.whoGetsThePoint&&"BOTH"!==e.whoGetsThePoint){const t=[1310,500,360],n=t[0]+i/a*850,[,r,o]=t,c=2*o;s.fillStyle=R(e.computerMove),s.beginPath(),s.arc(n,r,o,0,2*Math.PI),s.fill(),s.closePath(),s.drawImage(Be[E(e.computerMove)],n-o,r-o,c,c)}}break}default:console.log("TODO: "+e.type)}};let qe=null,Le=null,Ge=null;window.addEventListener("resize",()=>{p(),Ge&&Ge()}),(()=>{const e=(()=>null===c?Math.random()*(2**32-1):c)(),t=r.a.new(e);qe=t.initial_output();const n=e=>{const[r,o]=h(e.clientX,e.clientY),a=v(r,o),{availableCharacters:c}=JSON.parse(qe.question());if(!(a in c))return;const u=c[a];Le=qe,qe=t.next(u),l.removeEventListener("click",n),"CHOOSE_CHARACTER"===JSON.parse(qe.question()).type?i():s()},o=e=>{const[n,r]=h(e.clientX,e.clientY),a=v(n,r),{availableBoosters:i}=JSON.parse(qe.question());if(!(a in i))return;const c=i[a];Le=qe,qe=t.next(c),l.removeEventListener("click",o),u()},a=e=>{const[n,r]=h(e.clientX,e.clientY),o=((e,t)=>{const n=f(),r=[0,1,2,3,4].map(e=>O(e,n.width,n.height));for(const n in r){const[o,a,i]=r[n],c=o-e,l=a-t;if(c*c+l*l<=i*i)return n}return-1})(n,r),{availableMoves:i}=JSON.parse(qe.question());if(!(o in i))return;const c=i[o];Le=qe,qe=t.next(c),l.removeEventListener("click",a),"DONE"===JSON.parse(qe.question()).type?d():p()},i=()=>{let e=Date.now(),t=0;const r=JSON.parse(Le.question()).availableCharacters,o=JSON.parse(qe.question()).availableCharacters;Ge=(()=>{De({type:"CHARACTER_TO_CHARACTER",previouslyAvailableCharacters:r,availableCharacters:o,completionFactor:1})});const a=()=>{const i=Date.now();t+=i-e,e=i,t>500&&(t=500),De({type:"CHARACTER_TO_CHARACTER",previouslyAvailableCharacters:r,availableCharacters:o,completionFactor:t/500}),t<500?requestAnimationFrame(a):l.addEventListener("click",n)};requestAnimationFrame(a)},s=()=>{let e=Date.now(),t=0;const n=JSON.parse(Le.question()).availableCharacters,r=JSON.parse(qe.question()).availableBoosters;Ge=(()=>{De({type:"CHARACTER_TO_BOOSTER",previouslyAvailableCharacters:n,availableBoosters:r,completionFactor:1})});const a=()=>{const i=Date.now();t+=i-e,e=i,t>500&&(t=500),De({type:"CHARACTER_TO_BOOSTER",previouslyAvailableCharacters:n,availableBoosters:r,completionFactor:t/500}),t<500?requestAnimationFrame(a):l.addEventListener("click",o)};requestAnimationFrame(a)},u=()=>{let e=Date.now(),t=0;const n=JSON.parse(Le.question()).availableBoosters,r=JSON.parse(qe.question()).availableMoves;Ge=(()=>{De({type:"BOOSTER_TO_MOVE",previouslyAvailableBoosters:n,availableMoves:r,completionFactor:1})});const o=()=>{const i=Date.now();t+=i-e,e=i,t>500&&(t=500),De({type:"BOOSTER_TO_MOVE",previouslyAvailableBoosters:n,availableMoves:r,completionFactor:t/500}),t<500?requestAnimationFrame(o):l.addEventListener("click",a)};requestAnimationFrame(o)},p=()=>{let e=Date.now(),t=0;const n=JSON.parse(Le.question()).availableMoves,r=JSON.parse(qe.question()).availableMoves,o=JSON.parse(qe.notifications()).find(e=>"MOVE_SELECTION_AND_OUTCOME"===e.type),i=JSON.parse(qe.notifications()).find(e=>"SCORE_UPDATE"===e.type),{humanMove:c,computerMove:s,whoGetsThePoint:u}=o,{humanPoints:p,computerPoints:f}=i;Ge=(()=>{De({type:"MOVE_CLASH",previouslyAvailableMoves:n,availableMoves:r,humanMove:c,computerMove:s,whoGetsThePoint:u,humanPoints:p,computerPoints:f,completionFactor:1})});const h=()=>{const o=Date.now();t+=o-e,e=o,t>1500&&(t=1500),De({type:"MOVE_CLASH",previouslyAvailableMoves:n,availableMoves:r,humanMove:c,computerMove:s,whoGetsThePoint:u,humanPoints:p,computerPoints:f,completionFactor:t/1500}),t<1500?requestAnimationFrame(h):l.addEventListener("click",a)};requestAnimationFrame(h)},d=()=>{let e=Date.now(),t=0;const n=JSON.parse(Le.question()).availableMoves,r=JSON.parse(qe.notifications()).find(e=>"MOVE_SELECTION_AND_OUTCOME"===e.type),o=JSON.parse(qe.notifications()).find(e=>"SCORE_UPDATE"===e.type),{humanMove:a,computerMove:i,whoGetsThePoint:c}=r,{humanPoints:l,computerPoints:s}=o;Ge=(()=>{De({type:"FINAL_MOVE_CLASH",previouslyAvailableMoves:n,humanMove:a,computerMove:i,whoGetsThePoint:c,humanPoints:l,computerPoints:s,completionFactor:1})});const u=()=>{const r=Date.now();t+=r-e,e=r,t>1500&&(t=1500),De({type:"FINAL_MOVE_CLASH",previouslyAvailableMoves:n,humanMove:a,computerMove:i,whoGetsThePoint:c,humanPoints:l,computerPoints:s,completionFactor:t/1500}),t<1500&&requestAnimationFrame(u)};requestAnimationFrame(u)};Be.waitForAllToLoad.then(()=>{(()=>{let e=Date.now(),t=0;const r=JSON.parse(qe.question()).availableCharacters;Ge=(()=>{De({type:"NOTHING_TO_CHARACTER",availableCharacters:r,completionFactor:1})});const o=()=>{const a=Date.now();t+=a-e,e=a,t>500&&(t=500),De({type:"NOTHING_TO_CHARACTER",availableCharacters:r,completionFactor:t/500}),t<500?requestAnimationFrame(o):l.addEventListener("click",n)};requestAnimationFrame(o)})()})})(),"serviceWorker"in navigator&&navigator.serviceWorker.register("./service-worker.js")},function(e,t,n){(function(e,r){var o=/%[sdj%]/g;t.format=function(e){if(!b(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,a=r.length,i=String(e).replace(o,function(e){if("%%"===e)return"%";if(n>=a)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),l=r[n];n<a;l=r[++n])g(l)||!w(l)?i+=" "+l:i+=" "+c(l);return i},t.deprecate=function(n,o){if(y(e.process))return function(){return t.deprecate(n,o).apply(this,arguments)};if(!0===r.noDeprecation)return n;var a=!1;return function(){if(!a){if(r.throwDeprecation)throw new Error(o);r.traceDeprecation?console.trace(o):console.error(o),a=!0}return n.apply(this,arguments)}};var a,i={};function c(e,n){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(n)?r.showHidden=n:n&&t._extend(r,n),y(r.showHidden)&&(r.showHidden=!1),y(r.depth)&&(r.depth=2),y(r.colors)&&(r.colors=!1),y(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=l),u(r,e,r.depth)}function l(e,t){var n=c.styles[t];return n?"["+c.colors[n][0]+"m"+e+"["+c.colors[n][1]+"m":e}function s(e,t){return e}function u(e,n,r){if(e.customInspect&&n&&S(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return b(o)||(o=u(e,o,r)),o}var a=function(e,t){if(y(t))return e.stylize("undefined","undefined");if(b(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(m(t))return e.stylize(""+t,"number");if(d(t))return e.stylize(""+t,"boolean");if(g(t))return e.stylize("null","null")}(e,n);if(a)return a;var i=Object.keys(n),c=function(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}(i);if(e.showHidden&&(i=Object.getOwnPropertyNames(n)),O(n)&&(i.indexOf("message")>=0||i.indexOf("description")>=0))return p(n);if(0===i.length){if(S(n)){var l=n.name?": "+n.name:"";return e.stylize("[Function"+l+"]","special")}if(v(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(M(n))return e.stylize(Date.prototype.toString.call(n),"date");if(O(n))return p(n)}var s,w="",T=!1,A=["{","}"];(h(n)&&(T=!0,A=["[","]"]),S(n))&&(w=" [Function"+(n.name?": "+n.name:"")+"]");return v(n)&&(w=" "+RegExp.prototype.toString.call(n)),M(n)&&(w=" "+Date.prototype.toUTCString.call(n)),O(n)&&(w=" "+p(n)),0!==i.length||T&&0!=n.length?r<0?v(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),s=T?function(e,t,n,r,o){for(var a=[],i=0,c=t.length;i<c;++i)x(t,String(i))?a.push(f(e,t,n,r,String(i),!0)):a.push("");return o.forEach(function(o){o.match(/^\d+$/)||a.push(f(e,t,n,r,o,!0))}),a}(e,n,r,c,i):i.map(function(t){return f(e,n,r,c,t,T)}),e.seen.pop(),function(e,t,n){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(s,w,A)):A[0]+w+A[1]}function p(e){return"["+Error.prototype.toString.call(e)+"]"}function f(e,t,n,r,o,a){var i,c,l;if((l=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?c=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(c=e.stylize("[Setter]","special")),x(r,o)||(i="["+o+"]"),c||(e.seen.indexOf(l.value)<0?(c=g(n)?u(e,l.value,null):u(e,l.value,n-1)).indexOf("\n")>-1&&(c=a?c.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+c.split("\n").map(function(e){return"   "+e}).join("\n")):c=e.stylize("[Circular]","special")),y(i)){if(a&&o.match(/^\d+$/))return c;(i=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(i=i.substr(1,i.length-2),i=e.stylize(i,"name")):(i=i.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),i=e.stylize(i,"string"))}return i+": "+c}function h(e){return Array.isArray(e)}function d(e){return"boolean"==typeof e}function g(e){return null===e}function m(e){return"number"==typeof e}function b(e){return"string"==typeof e}function y(e){return void 0===e}function v(e){return w(e)&&"[object RegExp]"===T(e)}function w(e){return"object"==typeof e&&null!==e}function M(e){return w(e)&&"[object Date]"===T(e)}function O(e){return w(e)&&("[object Error]"===T(e)||e instanceof Error)}function S(e){return"function"==typeof e}function T(e){return Object.prototype.toString.call(e)}function A(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(y(a)&&(a=r.env.NODE_DEBUG||""),e=e.toUpperCase(),!i[e])if(new RegExp("\\b"+e+"\\b","i").test(a)){var n=r.pid;i[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else i[e]=function(){};return i[e]},t.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=h,t.isBoolean=d,t.isNull=g,t.isNullOrUndefined=function(e){return null==e},t.isNumber=m,t.isString=b,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=y,t.isRegExp=v,t.isObject=w,t.isDate=M,t.isError=O,t.isFunction=S,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(37);var P=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function x(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){var e,n;console.log("%s - %s",(e=new Date,n=[A(e.getHours()),A(e.getMinutes()),A(e.getSeconds())].join(":"),[e.getDate(),P[e.getMonth()],n].join(" ")),t.format.apply(t,arguments))},t.inherits=n(36),t._extend=function(e,t){if(!t||!w(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(this,n(39),n(38))},function(e,t,n){"use strict";n.d(t,"a",function(){return d}),n.d(t,"b",function(){return g});var r=n(40);let o=new("object"==typeof self&&self.TextDecoder?self.TextDecoder:n(2).TextDecoder)("utf-8"),a=null;function i(){return null!==a&&a.buffer===r.f.buffer||(a=new Uint8Array(r.f.buffer)),a}function c(e,t){return o.decode(i().subarray(e,e+t))}let l=null;function s(){return null===l&&(l=r.d()),l}let u=null;function p(){return null!==u&&u.buffer===r.f.buffer||(u=new Uint32Array(r.f.buffer)),u}let f=new("object"==typeof self&&self.TextEncoder?self.TextEncoder:n(2).TextEncoder)("utf-8");class h{static __construct(e){return new h(e)}constructor(e){this.ptr=e}free(){const e=this.ptr;this.ptr=0,r.a(e)}notifications(){const e=s();r.g(e,this.ptr);const t=p(),n=t[e/4],o=t[e/4+1],a=c(n,o).slice();return r.c(n,1*o),a}question(){const e=s();r.h(e,this.ptr);const t=p(),n=t[e/4],o=t[e/4+1],a=c(n,o).slice();return r.c(n,1*o),a}}class d{static __construct(e){return new d(e)}constructor(e){this.ptr=e}free(){const e=this.ptr;this.ptr=0,r.b(e)}static new(e){return d.__construct(r.j(e))}initial_output(){return h.__construct(r.i(this.ptr))}next(e){const[t,n]=function(e){const t=f.encode(e),n=r.e(t.length);return i().set(t,n),[n,t.length]}(e);try{return h.__construct(r.k(this.ptr,t,n))}finally{r.c(t,1*n)}}}function g(e,t){throw new Error(c(e,t))}},function(e,t,n){e.exports=n.p+"a6567a75cd44a18e8a431f57014b4948.png"},function(e,t,n){e.exports=n.p+"812b2f5d5eb73b91442b055527b4b1cf.png"},function(e,t,n){e.exports=n.p+"b43550c7072049581379897a765026a8.png"},function(e,t,n){e.exports=n.p+"23f8548f2a79bdfbf5c75d567167ae82.png"},function(e,t,n){e.exports=n.p+"6dce7f3372a412719d738f3f89b9e6eb.png"},function(e,t,n){e.exports=n.p+"8e28dae4b0729f881e7039cd45f66508.png"},function(e,t,n){e.exports=n.p+"33726fbcb7dd80e928f64c19f6b77381.png"},function(e,t,n){e.exports=n.p+"426f6d43f5528bc2c7f1e112609c90c5.png"},function(e,t,n){e.exports=n.p+"29120fc1cb5592377dd92daf2825faf0.png"},function(e,t,n){e.exports=n.p+"257ddeaa56614f57476f17fe845e4cfa.png"},function(e,t,n){e.exports=n.p+"2fc028ad14099e84fffc65b5c1d1a56c.png"},function(e,t,n){e.exports=n.p+"545e9144c338a09d0964fe686cb1fdf0.png"},function(e,t,n){e.exports=n.p+"c18823d9bf72ff812ca449cb30547723.png"},function(e,t,n){e.exports=n.p+"6756022bbef7a298400f8a244f778919.png"},function(e,t,n){e.exports=n.p+"9e27cf6edbe1d107a385d0f7046124ca.png"},function(e,t,n){e.exports=n.p+"28c483710cff64d10e2f959490227081.png"},function(e,t,n){e.exports=n.p+"28d9191ddfef0382fd21cc712cc6dee9.png"},function(e,t,n){e.exports=n.p+"598356ddf665c325e46453ed3ac2449d.png"},function(e,t,n){e.exports=n.p+"95abe119d6b03eeee48562e7e028a6a4.png"},function(e,t,n){e.exports=n.p+"7329f3b81c7bab3d555f1945e0585fcd.png"},function(e,t,n){e.exports=n.p+"2ed09b57e356edad8d9cdef4218babe7.png"},function(e,t,n){e.exports=n.p+"5c41cffad63a5b67a3072fd52273218d.png"},function(e,t,n){e.exports=n.p+"46e20d86d16e1aa9b62e718d08147eef.png"},function(e,t,n){e.exports=n.p+"2f3b1be627a28b780321e09343274106.png"},function(e,t,n){e.exports=n.p+"cd70c5d54494f3b652628c9edf7625c7.png"},function(e,t,n){e.exports=n.p+"140948bb3ebb27033f3ed626a87cc485.png"},function(e,t,n){e.exports=n.p+"c18eadb805abd3e802803c4423aec15c.png"},function(e,t,n){e.exports=n.p+"8a030ae90ecc7b074af4eeba6de5fad9.png"},function(e,t,n){e.exports=n.p+"d7fc054174122b3227838a30243d994b.png"},function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],a(n),a(r))}function i(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=o.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var r=i(n[0]);r!==n[0]&&(t[n[0]]=r)}n=o.exec(e)}t["%C2"]="�";for(var a=Object.keys(t),c=0;c<a.length;c++){var l=a[c];e=e.replace(new RegExp(l,"g"),t[l])}return e}(e)}}},function(e,t,n){"use strict";e.exports=(e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},function(e,t,n){"use strict";const r=n(34),o=n(33);function a(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function i(e,t){return t.decode?o(e):e}function c(e){const t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function l(e,t){const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=Object.assign({decode:!0,arrayFormat:"none"},t)),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const o of e.split("&")){let[e,a]=o.replace(/\+/g," ").split("=");a=void 0===a?null:i(a,t),n(i(e,t),a,r)}return Object.keys(r).sort().reduce((e,t)=>{const n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n,e},Object.create(null))}t.extract=c,t.parse=l,t.stringify=((e,t)=>{!1===(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)).sort&&(t.sort=(()=>{}));const n=function(e){switch(e.arrayFormat){case"index":return(t,n,r)=>null===n?[a(t,e),"[",r,"]"].join(""):[a(t,e),"[",a(r,e),"]=",a(n,e)].join("");case"bracket":return(t,n)=>null===n?[a(t,e),"[]"].join(""):[a(t,e),"[]=",a(n,e)].join("");default:return(t,n)=>null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}(t);return e?Object.keys(e).sort(t.sort).map(r=>{const o=e[r];if(void 0===o)return"";if(null===o)return a(r,t);if(Array.isArray(o)){const e=[];for(const t of o.slice())void 0!==t&&e.push(n(r,t,e.length));return e.join("&")}return a(r,t)+"="+a(o,t)}).filter(e=>e.length>0).join("&"):""}),t.parseUrl=((e,t)=>({url:e.split("?")[0]||"",query:l(c(e),t)}))},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l,s=[],u=!1,p=-1;function f(){u&&l&&(u=!1,l.length?s=l.concat(s):p=-1,s.length&&h())}function h(){if(!u){var e=c(f);u=!0;for(var t=s.length;t;){for(l=s,s=[];++p<t;)l&&l[p].run();p=-1,t=s.length}l=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new d(e,t)),1!==s.length||u||c(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r=n.w[e.i];t.f=r.exports.memory,t.b=r.exports.__wbg_singleplayernzscwebinterface_free,t.a=r.exports.__wbg_outputwebinterface_free,t.g=r.exports.outputwebinterface_notifications,t.h=r.exports.outputwebinterface_question,t.j=r.exports.singleplayernzscwebinterface_new,t.i=r.exports.singleplayernzscwebinterface_initial_output,t.k=r.exports.singleplayernzscwebinterface_next,t.e=r.exports.__wbindgen_malloc,t.c=r.exports.__wbindgen_free,t.d=r.exports.__wbindgen_global_argument_ptr,n(3),r.exports.__webpack_init__()}]]);