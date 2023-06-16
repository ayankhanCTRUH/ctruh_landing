(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[188],{942:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faqs",function(){return r(4979)}])},7448:function(e,t,r){"use strict";r.d(t,{T:function(){return i}});var n=r(2322),s=(r(2784),r(4697)),a=r(7171);function i(e){var t=e.fixedHeight,r=e.hideFooter,i=e.extraClasses,o=void 0===i?"":i,l=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h,{}),(0,n.jsx)("div",{className:"container ".concat(t?"container--fixed-height":"","\n        ").concat(r?"container--hide-footer":"","\n        ").concat(o),children:l}),(0,n.jsx)(a.$,{})]})}},1453:function(e,t,r){"use strict";r.d(t,{M:function(){return s}});var n=r(2322);r(2784);function s(e){var t=e.children,r=e.sticky,s=e.keyCombo,a=e.extraContent,i=e.meta;return(0,n.jsxs)("div",{className:"item__header  ".concat(r?"item__header--sticky":""),children:[(0,n.jsx)("h3",{className:"header__title",children:t}),a,s&&(0,n.jsxs)("p",{className:"key-combo key-combo--header",children:[" ",s," "]}),(0,n.jsx)("div",{className:"header__extra-info",children:i})]})}},4979:function(e,t,r){"use strict";r.r(t);var n=r(2322),s=r(2784),a=r(7729),i=r.n(a),o=r(9097),l=r.n(o),h=r(7448),d=r(1453),c=r(1251);function u(e){var t=e.question,r=e.children,a=e.isNew,i="#".concat(t.toLowerCase().replace(/\s/g,"-").replace(/\?/g,"")),o=(0,s.useState)(!1),l=o[0],h=o[1];return(0,s.useEffect)((function(){h(window.location.hash===i)}),[]),(0,n.jsxs)("details",{className:"faq-section",open:l,children:[(0,n.jsxs)("summary",{className:"faq-section__question",children:[t," ",a?(0,n.jsx)("span",{className:"small-pill small-pill--primary",children:"New"}):"",(0,n.jsx)("a",{href:i,className:"faq-section__question-link",children:"#"})]}),(0,n.jsx)("div",{className:"faq-section__answer",children:r})]})}t.default=function(){return(0,n.jsxs)(h.T,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:"FAQs | CSSBattle"},"title"),(0,n.jsx)("meta",{property:"og:title",content:"FAQs | CSSBattle"},"ogTitle")]}),(0,n.jsxs)("div",{className:"container__item container__item--main",children:[(0,n.jsx)(d.M,{children:"Frequently Asked Questions"}),(0,n.jsxs)("div",{className:"item__content item__content--inner-page item__content--fixed-width",children:[(0,n.jsx)(u,{question:"Is this free to play?",children:(0,n.jsxs)("p",{children:["Yes, CSSBattle is a free to play platform. It only costs you your time ",(0,n.jsx)(c.dy,{label:"smile",children:"\ud83d\ude00"})]})}),(0,n.jsx)(u,{question:"Do I have to login to play?",children:(0,n.jsx)("p",{children:"Yes. You can see any target and try replicating it with code. But to submit and get a score, you'll need to login first."})}),(0,n.jsxs)(u,{question:"Who can play this?",children:[(0,n.jsx)("p",{children:"CSSBattle needs you to code in HTML (slightly) and CSS. If you have ever coded in these 2 web technologies, you are all set to play here."}),(0,n.jsxs)("p",{children:["Even if you don't have any experience with HTML and CSS, they are super easy to start with."," ",(0,n.jsx)("a",{href:"https://cssreference.io/positioning/",rel:"external noopener",children:"Open this CSS Reference"})," ","in another browser tab, and get ready to battle!"]})]}),(0,n.jsxs)(u,{question:"What is a Battle?",children:[(0,n.jsx)("p",{children:"A Battle is a collection of unique targets with its own separate leaderboard. Each Battle runs for a set amount of days/weeks and once it's finished, the Battle leaderboard is locked, and the winners are crowned."}),(0,n.jsxs)("p",{children:["The targets in a Battle remain playable even after a Battle is over and changes in target leaderboard rankings still occur. This also affects the rankings in the"," ",(0,n.jsx)("a",{href:"/leaderboard",children:"Global Leaderboard"}),"."]}),(0,n.jsxs)("p",{children:["Note: Battle names do not hold any relation to any of the targets or the game itself. Any resemblance is mere coincidence. Do not over-think them. ",(0,n.jsx)(c.dy,{label:"grimacing face",children:"\ud83d\ude2c"})]})]}),(0,n.jsxs)(u,{question:"How to play?",children:[(0,n.jsx)("p",{children:"The objective of the game is to write HTML/CSS to replicate the given target image in the least code possible."}),(0,n.jsxs)("p",{children:["In the target page, start coding in the editor area on the left. As you start typing, the output area in the middle will start rendering your code. When you're confident that the output matches the target image, hit the ",(0,n.jsx)("strong",{children:"Submit"})," button to see your score."]}),(0,n.jsx)("h4",{children:"Important points to Note:"}),(0,n.jsxs)("ul",{className:"unordered-list",children:[(0,n.jsx)("li",{children:"It is recommended to play on Chromium based browsers (Chrome/Safari) because that is what is used for scoring at the backend. Other browser may have some differences in how they render a particular code."}),(0,n.jsxs)("li",{children:["What you write in the editor, renders as it is. We make no change. This means you don't even get the"," ",(0,n.jsx)("a",{href:"https://www.w3.org/wiki/Doctypes_and_markup_styles",rel:"external noopener noreferrer",children:(0,n.jsx)("code",{children:"DOCTYPE"})})]}),(0,n.jsxs)("li",{children:['Since this is "CSS" battle, you are'," ",(0,n.jsx)("strong",{children:"not allowed to use JavaScript, SVG or images in your code. In fact any external asset is not allowed."})," ","All code required to generate the target image has to be written in the given editor only."]})]}),(0,n.jsxs)("p",{className:"para",children:["We also have a growing ",(0,n.jsx)("a",{href:"/tips",children:"list of tips and tricks"})," ","for CSS code-golfing."]}),(0,n.jsx)("p",{children:" Now go and climb the leaderboards!"})]}),(0,n.jsxs)(u,{question:"How are scores calculated?",children:[(0,n.jsx)("p",{children:"Our scoring algorithm takes into account 2 things: 1) How closely you have replicated the target image 2) Number of characters in the code. Based on these 2 factors, a score is calculated. Better the match and lesser the characters used, more the score."}),(0,n.jsx)("p",{children:"Also, it's worth mentioning that when your visual match with the target image is low, reducing character count won't give too much jump in score. Initially focus more on getting the match to 100%. Once you are on 100% match, the points start increasing more rapidly with decreasing character count. This exponential scoring is done to make it more rewarding for those who sweat it all out to get to extreme character counts!"})]}),(0,n.jsxs)(u,{question:"Can I see solutions of other people?",children:[(0,n.jsx)("p",{children:"Since this is a game where players can play against each other for better rank, you cannot see the solutions of other players. That said, if you want to learn how other solutions, there are many ways to do so:"}),(0,n.jsxs)("ul",{className:"unordered-list",children:[(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:["First of all, learn the basic tricks of CSS code-golfing on our"," ",(0,n.jsx)(l(),{href:"/tips",children:(0,n.jsx)("a",{children:"Tips & Tricks"})})," ","page."]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:["There are a lot of players sharing their solutions on Github, Youtube and our"," ",(0,n.jsx)("a",{href:"http://community.cssbattle.dev/",children:"community forum"}),'. Just search for "CSSBattle solutions".']})}),(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:['There are some "open" targets in each battle (after battle #12) in which top solutions are open for everyone. Eg.'," ",(0,n.jsx)("a",{href:"/play/69",children:"Target #62 - Sunset"}),"."]})})]})]}),(0,n.jsxs)(u,{question:"What environment are solutions evaluated in?",children:[(0,n.jsx)("p",{children:"Submitted code solutions are rendered in a headless Chromium browser on a Ubuntu 18.04 server."}),(0,n.jsx)("p",{children:"Your code is rendered as it is without any modification and the browser settings are all set on default."}),(0,n.jsx)("p",{children:"There might be slight differences in how different browsers render your code in the game preview. Hence till the time we find a way a reliable way to normalize these differences, we recommend playing on Chrome, Chromium, Brave or Safari browser (these are the ones we have tested)."})]}),(0,n.jsxs)(u,{question:"How do I make use of friends?",children:[(0,n.jsx)("p",{children:"With Friends, you can now choose who you want to see in the leaderboards and see your standings among them (alongside global players)."}),(0,n.jsx)("p",{children:"To add friends:"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:'Visit your friend\'s profile and click on the "Add to Friends" button.'}),(0,n.jsx)("li",{children:'Go to any page with a leaderboard and check "Friends Only" at the top. Now all the leaderboards will show your standings among just your friends.'})]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Note"}),": Adding someone as a friend sends them a notification so they can add you back!"]})]}),(0,n.jsxs)(u,{question:"What are the different type of Leaderboards?",isNew:!0,children:[(0,n.jsxs)("p",{children:["From Battle #23 and onwards, we have implemented a new leaderboard system. Now, there are two types of leaderboards on CSSBattle:",(0,n.jsx)("code",{children:"CSS"})," Leaderboard and ",(0,n.jsx)("code",{children:"All"})," Leaderboard."]}),(0,n.jsx)("p",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"The Pure CSS Leaderboard is where you will appear only if you have submitted a pure CSS solution. The Pure CSS Leaderboard is the default leaderboard and the scores on this leaderboard determine the ranking of users in the global leaderboard."}),(0,n.jsx)("li",{children:"The All Leaderboard is where all users appear, including those with solutions that contain SVG-in-CSS or unicode characters. However, the scores on this leaderboard do not affect the global leaderboard rankings."})]})}),(0,n.jsx)("p",{children:"You can switch between the two with a toggle which appears next to the leaderboard heading in Battle #23+ and their targets."})]}),(0,n.jsxs)("p",{children:["Still have a question? Don't hesitate to ask it on our"," ",(0,n.jsx)("a",{href:"https://community.cssbattle.dev",rel:"external noopener",children:"Community forum"})," ","or tweet out to"," ",(0,n.jsx)("a",{href:"https://twitter.com/css_battle",rel:"external noopener",children:"@css_battle"})]})]})]})]})}}},function(e){e.O(0,[154,836,774,888,179],(function(){return t=942,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=faqs-dd12da0e04a7f1ea.js.map