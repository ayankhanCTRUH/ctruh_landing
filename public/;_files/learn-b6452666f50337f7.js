(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[128],{1480:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn",function(){return n(2344)}])},2220:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var i=n(865),r=n(6670),s=n(6297),a=n(2322),o=(n(2784),n(9241));function l(e){var t=e.type,n=void 0===t?"button":t,l=e.primary,c=e.danger,d=e.success,h=e.cool,u=e.size,p=e.extraClasses,m=void 0===p?"":p,x=e.children,f=e.isLoading,g=(0,s.Z)(e,["type","primary","danger","success","cool","size","extraClasses","children","isLoading"]);return(0,a.jsxs)("button",(0,r.Z)((0,i.Z)({type:n,className:"button ".concat(l?"button--primary":""," \n      ").concat(h?"button--cssbattle":"","\n      ").concat(u?"button--".concat(u):"","\n      ").concat(d?"button--success":""," ").concat(c?"button--danger":""," ").concat(m),disabled:f},g),{children:[x,(0,a.jsx)("div",{style:{display:"flex",transition:"max-width 0.3s ease",overflow:"hidden",maxWidth:f?"1.6em":0},children:(0,a.jsx)(o.a,{height:"1.2em",leftMargin:"0.5rem"})})]}))}},7448:function(e,t,n){"use strict";n.d(t,{T:function(){return a}});var i=n(2322),r=(n(2784),n(4697)),s=n(7171);function a(e){var t=e.fixedHeight,n=e.hideFooter,a=e.extraClasses,o=void 0===a?"":a,l=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h,{}),(0,i.jsx)("div",{className:"container ".concat(t?"container--fixed-height":"","\n        ").concat(n?"container--hide-footer":"","\n        ").concat(o),children:l}),(0,i.jsx)(s.$,{})]})}},1453:function(e,t,n){"use strict";n.d(t,{M:function(){return r}});var i=n(2322);n(2784);function r(e){var t=e.children,n=e.sticky,r=e.keyCombo,s=e.extraContent,a=e.meta;return(0,i.jsxs)("div",{className:"item__header  ".concat(n?"item__header--sticky":""),children:[(0,i.jsx)("h3",{className:"header__title",children:t}),s,r&&(0,i.jsxs)("p",{className:"key-combo key-combo--header",children:[" ",r," "]}),(0,i.jsx)("div",{className:"header__extra-info",children:a})]})}},384:function(e,t,n){"use strict";n.d(t,{u:function(){return x}});var i=n(865),r=n(6670),s=n(6297),a=n(2322),o=(n(2784),n(3140)),l=n(5935),c=n(8565),d=n(2268),h=n(1453),u=(0,l.E)(o.cZ),p=(0,l.E)(o.t9),m={type:"spring",damping:9,stiffness:120,duration:500};function x(e){var t=e.isOpen,n=e.onRequestClose,o=e.size,l=void 0===o?"big":o,x=e.extraClasses,f=e.header,g=e.title,j=e.hideOverlay,v=e.children,_=(0,s.Z)(e,["isOpen","onRequestClose","size","extraClasses","header","title","hideOverlay","children"]),y=(0,c.J)();return(0,a.jsx)(d.M,{children:t?(0,a.jsx)(p,(0,r.Z)((0,i.Z)({initial:{opacity:0},animate:{opacity:1,transition:{duration:.3}},exit:{opacity:0,transition:{duration:.2}},style:{background:j?"transparent":null},isOpen:t,onDismiss:n},_),{children:(0,a.jsxs)(u,{className:"modal--".concat(l," ").concat(x),transition:y?{duration:500}:m,initial:{y:y?0:-100},animate:{y:0},exit:{opacity:0,y:y?0:-200,transition:{duration:.2}},"aria-label":g,children:[f?(0,a.jsx)(h.M,{children:f}):null,(0,a.jsx)("div",{style:{padding:"2rem"},children:v})]})})):null})}},6735:function(e,t,n){"use strict";n.d(t,{H:function(){return r}});var i=n(2784);function r(e){var t=(0,i.useState)(),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=document.createElement("script");t.src="https://cdn.paddle.com/paddle/paddle.js",t.async="true",t.addEventListener("load",(function(){window.Paddle.Setup({vendor:e}),r(!0)})),document.body.appendChild(t)}),[]),n}},2344:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var i=n(7842),r=n(2322),s=n(2784),a=n(7729),o=n.n(a),l=n(5632),c=n(7448),d=n(5598),h=n(6735),u=n(3590),p=n(1893),m=n(7037),x=n(2220),f=n(384),g=n(1251),j=n(5694),v=n.n(j),_=function(e){var t=e.isOpen,n=e.link,i=e.onRequestClose,s=(0,l.useRouter)();return(0,r.jsx)(f.u,{isOpen:t,extraClasses:"modal--text-center",children:(0,r.jsxs)(d.VStack,{gap:"1rem",align:"stretch",children:[(0,r.jsx)("h2",{style:{fontSize:"2rem",color:"var(--clr-brand"},children:"Get . Set . Learn!"}),(0,r.jsx)("p",{className:"para",style:{lineHeight:"1.6"},children:"CSSBattle's LEARN is not just a course, its an experience! Its meant to be done in a serene ambience."}),(0,r.jsxs)("ol",{style:{textAlign:"left",padding:0,display:"flex",gap:"2rem"},children:[(0,r.jsxs)("li",{className:v().startModalListItem,children:[(0,r.jsx)("span",{children:"\ud83d\udd05"}),"Dim your lights a bit"]}),(0,r.jsxs)("li",{className:v().startModalListItem,children:[(0,r.jsx)("span",{children:"\ud83d\udd0a"}),"Turn up your volume"]}),(0,r.jsxs)("li",{className:v().startModalListItem,children:[(0,r.jsx)("span",{children:"\ud83d\ude0c"}),"Relax!"]})]}),(0,r.jsxs)(g.hE,{center:!0,children:[(0,r.jsx)(x.z,{onClick:i,children:"Cancel"}),(0,r.jsxs)(x.z,{cool:!0,onClick:function(){return s.push(n)},children:["LET'S LEARN!",(0,r.jsx)("svg",{style:{width:"30px",height:"30px",fill:"currentcolor",filter:"drop-shadow(0px 26px 8px rgba(0,0,0,0.4))"},viewBox:"0 0 24 24",children:(0,r.jsx)("path",{fill:"currentColor",d:"M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"})})]})]})]})})},y=n(137),S=function(e){var t=e.isOpen,n=e.type,i=e.onRequestClose,a=(0,s.useState)(!1),o=a[0],l=a[1];return(0,r.jsx)(f.u,{isOpen:t,size:"small",children:(0,r.jsx)("form",{id:"learnForm",onSubmit:function(e){var t=e.target;e.preventDefault();var n=new FormData(t);l(!0),window.fetch("https://formspree.io/f/mpzolwky",{method:"POST",body:n,headers:{Accept:"application/json"}}).then((function(){l(!1),y.Am.success("You are subscribed!"),i()}))},className:"new-input-container",children:(0,r.jsxs)(d.VStack,{gap:"1rem",align:"stretch",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(g.II,{label:"Wanna get notified when this course launches? Subscribe with your email below.",type:"email",name:"email",required:!0}),(0,r.jsx)("input",{type:"hidden",name:"courseType",defaultValue:n})]}),(0,r.jsxs)(g.hE,{noPadding:!0,children:[(0,r.jsx)(x.z,{onClick:i,children:"Cancel"}),(0,r.jsx)(x.z,{primary:!0,type:"submit",isLoading:o,children:"Notify me!"})]})]})})})},b=function(e){var t=e.icon,n=e.title,i=e.description,s=e.stats,a=e.isAvailable,o=void 0!==a&&a,l=e.disabled,c=void 0!==l&&l,h=(e.price,e.vendorId),u=e.demoVideoUrl,p=e.onPlay,m=e.onBuy;return(0,r.jsx)("div",{className:v().courseTile,children:(0,r.jsxs)(d.VStack,{gap:"1rem",align:"initial",justify:"space-between",expand:!0,children:[(0,r.jsxs)(d.VStack,{gap:"1rem",align:"flex-start",children:[(0,r.jsx)("div",{className:v().courseTile__icon,children:t}),(0,r.jsx)(w,{children:n}),(0,r.jsx)("p",{children:i})]}),(0,r.jsxs)(d.VStack,{gap:"1rem",align:"flex-start",children:[(0,r.jsx)("div",{className:v().courseTile__header,children:"Course stats"}),(0,r.jsx)("div",{children:(0,r.jsxs)(d.VStack,{gap:"0.5rem",align:"flex-start",children:[(0,r.jsx)("div",{children:s}),o&&(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:u,className:"link",target:"_blank",rel:"noopener",children:"Have a look"})})]})}),p?(0,r.jsxs)(x.z,{cool:!0,onClick:p,children:["Let's Learn!",(0,r.jsx)("svg",{style:{width:"30px",height:"30px",fill:"currentcolor",filter:"drop-shadow(0px 0.8rem 8px rgba(0,0,0,0.4))"},viewBox:"0 0 24 24",children:(0,r.jsx)("path",{fill:"currentColor",d:"M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"})})]}):(0,r.jsx)(x.z,{primary:o,disabled:c,onClick:m,children:o?(0,r.jsxs)(d.HStack,{gap:"0.3rem",children:[(0,r.jsx)("span",{children:"Buy Now! -"}),(0,r.jsx)("span",{className:"paddle-gross","data-product":h})]}):"Notify Me"})]})]})})},w=function(e){var t=e.children;return(0,r.jsx)("h3",{style:{color:"#FEE333",fontSize:"1.4rem"},children:t})},C=n(3290),L=function(e){var t=e.children;return(0,r.jsx)("h2",{style:{color:"#FEE333",fontSize:"1.7rem"},children:t})};function k(e){var t=e.question,n=e.children,i=(0,s.useState)(!1),a=i[0];i[1];return(0,r.jsxs)("details",{className:"faq-section",open:a,children:[(0,r.jsxs)("summary",{className:"faq-section__question",children:[t,(0,r.jsx)("a",{href:"",className:"faq-section__question-link",children:"#"})]}),(0,r.jsx)("div",{className:"faq-section__answer",children:n})]})}function N(e){var t=e.image,n=e.name,i=e.role,s=e.link,a=e.children;return(0,r.jsxs)("div",{className:v().testimonial,children:[(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"/images/people/".concat(t),className:v().testimonialImg})}),(0,r.jsxs)(d.VStack,{gap:"0.8rem",align:"flex-start",children:[(0,r.jsxs)("p",{style:{color:"var(--clr-text)",lineHeight:1.5},children:["\u201c",a,"\u201d"]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{href:s,target:"_blank",className:"link",children:n}),", ",i]})]})]})}var T=function(){var e=(0,l.useRouter)(),t=(0,h.H)(50177),n=(0,p.a)(),a=(0,s.useState)(),x=a[0],f=a[1],g=(0,s.useState)(!1),j=g[0],v=g[1];(0,s.useEffect)((function(){(null===n||void 0===n?void 0:n.uid)&&(0,m.c_)(n.uid).then((function(e){v(!0),f(null===e||void 0===e?void 0:e.basic)}))}),[null===n||void 0===n?void 0:n.uid]);var w=(0,s.useState)(!1),T=w[0],A=w[1];(0,s.useEffect)((function(){if(!e.isReady)return function(){};A(e.query.buy)}),[e.isReady]);var B,I=(0,s.useState)(!1),E=I[0],M=I[1],q=(0,s.useState)(!1),z=q[0],R=q[1],O=(0,s.useState)(""),P=O[0],H=O[1],F=(0,s.useState)(!1),Z=F[0],V=F[1];return(0,r.jsxs)(c.T,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("meta",{property:"og:url",content:"https://cssbattle.dev/learn"},"url"),(0,r.jsx)("meta",{property:"og:image",content:"https://cssbattle.dev/learnSocialImage2.png"},"banner"),(0,r.jsx)("meta",{property:"og:title",content:"CSSBattle's LEARN"},"ogTitle"),(0,r.jsx)("title",{children:"CSSBattle's LEARN"},"title"),(0,r.jsx)("meta",{property:"og:description",content:"Learn CSS - the gamified way!"},"desc")]}),(0,r.jsx)("div",{style:{padding:"1rem",flex:1,display:"flex",maxWidth:"90ch",margin:"0 auto",justifyContent:"center",fontSize:"1.1rem"},children:(0,r.jsxs)(d.VStack,{gap:"5rem",align:"flex-start",children:[(0,r.jsx)("section",{style:{textAlign:"center"},children:(0,r.jsxs)(d.VStack,{gap:"2rem",align:"center",children:[(0,r.jsxs)("h2",{style:(B={color:"#FEE333",fontSize:"2rem",textTransform:"uppercase"},(0,i.Z)(B,"fontSize","4em"),(0,i.Z)(B,"fontFamily","system-ui"),(0,i.Z)(B,"fontWeight","900"),(0,i.Z)(B,"color","var(--clr-brand)"),(0,i.Z)(B,"textShadow","rgb(208, 1, 162) -2px 2px, rgb(0, 255, 207) 2px -2px"),(0,i.Z)(B,"transform","rotate(-2deg)"),B),children:[(0,r.jsx)("span",{style:{textTransform:"none",fontSize:"0.8em"},children:"CSSBattle's"})," ",'"LEARN"']}),(0,r.jsx)("p",{style:{lineHeight:1.5},children:'CSSBattle\'s "LEARN" is the first-ever gamified CSS course targeted towards beginners, intermediates, and even experts. Each course consists of multiple levels which you play and learn - just like a game!'})]})}),(0,r.jsx)("section",{children:(0,r.jsx)(N,{name:"Kevin Powell",role:"CSS Evangelist",image:"kevin-powell.jpeg",link:"https://twitter.com/KevinJPowell",children:"This is a lot of fun. Nice interactive way to start learning!"})}),(0,r.jsx)("section",{children:(0,r.jsxs)(d.VStack,{gap:"2rem",align:"flex-start",children:[(0,r.jsx)(L,{children:"Our Courses"}),(0,r.jsxs)(d.HStack,{gap:"1.5rem",align:"stretch",wrap:!0,children:[(0,r.jsx)(b,{title:"For Beginners",description:"Learn about the basics of CSS and the most commonly used properties.",stats:(0,r.jsxs)(d.VStack,{gap:"0.3rem",align:"flex-start",children:[(0,r.jsx)("p",{children:"70+ exciting levels!"}),(0,r.jsx)("p",{children:"1300+ users learning!"})]}),icon:(0,r.jsx)("div",{style:{width:50,height:50,background:"var(--clr-brand)"}}),isAvailable:!0,disabled:!t||n&&!j,price:u.Q[u.C.LEARN_BASIC].price,vendorId:u.Q[u.C.LEARN_BASIC].vendorId,demoVideoUrl:"https://www.youtube.com/watch?v=q_br2k0BRww",onPlay:x&&!T?function(){return function(e){var t=e.link;M(!0),V(t)}({link:"/learn/".concat(x.level)})}:null,onBuy:function(){if(!(null===n||void 0===n?void 0:n.uid))return y.Am.info("You'll need to login first. Taking you to login page..."),window.localStorage.setItem("beforeLoginLocation","/learn"),void setTimeout((function(){e.push("/login")}),2e3);(0,C.q)({name:"courseCheckoutStarted",label:"basic"}),window.Paddle.Checkout.open({product:u.Q[u.C.LEARN_BASIC].vendorId,passthrough:n.uid,successCallback:function(){(0,C.q)({name:"coursePurchased",label:"basic"}),window.location.reload()}})}}),(0,r.jsx)(b,{title:"For Intermediates",description:"Move a step forward and become a master of layouts",stats:"To be announced",icon:(0,r.jsxs)("svg",{width:"50",height:"64",fill:"none",children:[(0,r.jsx)("path",{fill:"#870",d:"M10 30h30v33H10z"}),(0,r.jsx)("path",{fill:"#BDA500",d:"M5 20h40v36H5z"}),(0,r.jsx)("path",{fill:"#FFDF00",d:"M0 0h50v50H0z"})]}),onBuy:function(){H("intermediate"),R(!0)}}),(0,r.jsx)(b,{title:"For Advanced",description:"Learn about some advanced CSS concepts, animations and how to use them.",stats:"To be announced",icon:(0,r.jsxs)("svg",{width:"59",height:"59",viewBox:"0 0 59 59",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("rect",{width:"39.3333",height:"39.3333",fill:"#887700"}),(0,r.jsx)("path",{d:"M0 0H39.3333L59 19.6667H19.6667L0 0Z",fill:"#BDA500"}),(0,r.jsx)("path",{d:"M0 39.3335H39.3333L59 59.0002H19.6667L0 39.3335Z",fill:"#BDA500"}),(0,r.jsx)("rect",{width:"39.3333",height:"39.3333",transform:"translate(19.6667 19.6665)",fill:"#FFDF00"})]}),onBuy:function(){H("advanced"),R(!0)}})]}),(0,r.jsx)("p",{style:{textAlign:"center",width:"100%"},children:"All courses get free lifetime updates for new and updated levels!"})]})}),(0,r.jsx)("section",{children:(0,r.jsx)(N,{name:"Kirupa",role:"Founder of Kirupa.com",image:"kirupa.jpeg",link:"https://www.kirupa.com/",children:'This is a great way for beginners to learn CSS! Anything that adds gamification and entices people to go deeper without feeling like a "chore" is a great thing!'})}),(0,r.jsx)("section",{children:(0,r.jsxs)(d.VStack,{gap:"1rem",align:"flex-start",children:[(0,r.jsx)(L,{children:"Why buy this course when you can learn CSS for free?"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"para",style:{lineHeight:1.6},children:"This course is not there to replace other learning methods. Yes, you can learn CSS for free. But our course is altogether a different experience where you don't have to watch multiple videos or read long articles/documentation to learn. You just sit back, play and learn by doing along the way - hopefully at a much better speed and with more knowledge retention compared to other methods. \ud83d\ude42"}),(0,r.jsx)("p",{className:"para",children:"The cost is just for that new & different experience to learn CSS!"})]})]})}),(0,r.jsx)("section",{children:(0,r.jsx)(N,{name:"Dhhyey Desai",role:"Online Instructor (500K+ Students)",image:"dhhyey.jpeg",link:"https://dhhyey.me",children:"A very interactive course compared to those available from other providers, which feel more like lectures. With an interactive and in-browser embedded coding environment, what more could you ask for? I highly recommend this course to beginners or even coders with some experience who are trying to get back into CSS!"})}),(0,r.jsx)("section",{children:(0,r.jsxs)(d.VStack,{gap:"1rem",align:"flex-start",children:[(0,r.jsx)(L,{children:"Faqs"}),(0,r.jsxs)(k,{question:"Whom is the Basic course for?",children:[(0,r.jsx)("p",{children:"If you have no knowledge of CSS or have just started with learning CSS, CSS Learn Basic is the course for you."}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"\ud83d\udea8 Note"}),": This course won't teach you code-golfing concepts and thus getting better score on CSSBattle. It's meant to learn CSS."]})]}),(0,r.jsx)(k,{question:"Are there any pre-requisites for the Basic course?",children:(0,r.jsxs)("p",{children:["You should have a very basic knowledge of"," ",(0,r.jsx)("a",{className:"link",href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started",target:"_blank",rel:"noopener",children:"HTML"}),", that's it!"]})}),(0,r.jsx)(k,{question:"What do I get to learn in Basic course?",children:(0,r.jsx)("p",{children:"CSS Learn Basic course covers the most basic CSS properties. Once you have done the course, you'll be able to style simple web pages."})}),(0,r.jsx)(k,{question:"Is this a subscription or one-time cost?",children:(0,r.jsx)("p",{children:"You have to pay one-time for lifetime access to the course."})}),(0,r.jsx)(k,{question:"Is there some bulk-purchase or team discount?",children:(0,r.jsxs)("p",{children:["We can figure something out. Message us on our"," ",(0,r.jsx)("a",{className:"link",href:"mailto:contact@cssbattle.dev",children:"mail"}),"."]})}),(0,r.jsx)(k,{question:"I have some other question",children:(0,r.jsxs)("p",{children:["Sure, let us know on our"," ",(0,r.jsx)("a",{className:"link",href:"mailto:contact@cssbattle.dev",children:"mail"}),"."]})})]})})]})}),(0,r.jsx)(_,{isOpen:E,link:Z,onRequestClose:function(){return M(!1)}}),(0,r.jsx)(S,{isOpen:z,onRequestClose:function(){return R(!1)},type:P})]})}},3590:function(e,t,n){"use strict";n.d(t,{C:function(){return s},Q:function(){return a}});var i,r=n(7842),s={CUSTOM_BATTLE_MINI:"customBattleMini",CUSTOM_BATTLE_SMALL:"customBattleSmall",LEARN_BASIC:"learnBasic"},a=(i={},(0,r.Z)(i,s.CUSTOM_BATTLE_MINI,{vendorId:"578130",label:"Small",maxDuration:1440,price:"$199"}),(0,r.Z)(i,s.CUSTOM_BATTLE_SMALL,{vendorId:"578132",label:"Large",maxDuration:10080,price:"$399"}),(0,r.Z)(i,s.LEARN_BASIC,{vendorId:"781594",dbId:"basic",label:"Basic",price:"$1.99"}),i)},5694:function(e){e.exports={courseTile:"Learn_courseTile__OXSI3",courseTile__icon:"Learn_courseTile__icon__7liIj",courseTile__header:"Learn_courseTile__header__1PRSa",progressBarWrap:"Learn_progressBarWrap__K75If",progressBarLevel:"Learn_progressBarLevel__SSmnd","is-locked":"Learn_is-locked__Ynm7s",levelPointer:"Learn_levelPointer__PGokH",levelPointer__type:"Learn_levelPointer__type__Gs2oN",completionTile:"Learn_completionTile__e2pLe",completionCard:"Learn_completionCard__pQPrw",completionCardAwardedText:"Learn_completionCardAwardedText__Eq5nO",completionCardPlayerName:"Learn_completionCardPlayerName__wuANK",completionCardCourse:"Learn_completionCardCourse__Eiact",completionCardTrophy:"Learn_completionCardTrophy__iM_3B",completionTilePara:"Learn_completionTilePara__1EK6d",completionCardLearn:"Learn_completionCardLearn__sYdmj",testimonial:"Learn_testimonial__aigF_",testimonialImg:"Learn_testimonialImg__7XL74",startModalListItem:"Learn_startModalListItem__lcp0Q",pop:"Learn_pop__Ar6nD"}}},function(e){e.O(0,[154,146,836,774,888,179],(function(){return t=1480,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=learn-b6452666f50337f7.js.map