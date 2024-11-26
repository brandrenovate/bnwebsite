import{r as e,u as t,j as s,L as a,A as i,m as r,S as n,M as o,F as l,a as c,b as d,c as h,d as x,e as u,R as m,f as g,g as b,B as p,h as j,i as f,N as v,k as y}from"./vendor-d22ee007.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const k={},w=function(e,t,s){if(!t||0===t.length)return e();const a=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if((e=function(e){return"/"+e}(e))in k)return;k[e]=!0;const t=e.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(!!s)for(let s=a.length-1;s>=0;s--){const i=a[s];if(i.href===e&&(!t||"stylesheet"===i.rel))return}else if(document.querySelector(`link[href="${e}"]${i}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((t,s)=>{r.addEventListener("load",t),r.addEventListener("error",(()=>s(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))},N=({isMenuOpen:e,isDarkMode:t,setIsMenuOpen:i})=>s.jsxs("div",{className:"md:hidden fixed inset-0 z-50 "+(e?"block":"hidden"),children:[s.jsx(r.div,{className:"absolute inset-0",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},style:{backgroundColor:t?"rgba(7, 7, 7, 0.95)":"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(10px)"},onClick:()=>i(!1)}),s.jsx(r.div,{className:"absolute top-[72px] left-0 w-full",initial:{x:"100%",opacity:0},animate:{x:0,opacity:1},exit:{x:"100%",opacity:0},transition:{type:"spring",stiffness:400,damping:40,mass:1},style:{backgroundColor:t?"rgb(7, 7, 7)":"rgb(255, 255, 255)"},children:s.jsx(r.nav,{className:"px-6 pt-6 pb-8",initial:"closed",animate:"open",variants:{open:{transition:{staggerChildren:.1}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},children:[{to:"/",label:"Home"},{to:"/web-design",label:"Web Design"},{to:"/graphic-design",label:"Graphic Design"},{to:"/social-media",label:"Social Media"},{to:"/about-us",label:"About Us"},{to:"/contact",label:"Contact"}].map((e=>s.jsx(r.div,{variants:{open:{x:0,opacity:1},closed:{x:50,opacity:0}},children:s.jsx(a,{to:e.to,className:"block py-4 px-6 rounded-lg text-lg font-medium mb-2 transition-all duration-200 "+(t?"hover:bg-[#1a1a1a] active:bg-[#1a1a1a]":"hover:bg-gray-100 active:bg-gray-200"),onClick:()=>i(!1),children:e.label})},e.to)))})})]});function _({isDarkMode:l,toggleDarkMode:c}){const[d,h]=e.useState(!1),[x,u]=e.useState(!1),m=t(),g=e.useRef(null),b=e.useRef(null),p=e=>m.pathname===e;return e.useEffect((()=>()=>{b.current&&clearTimeout(b.current)}),[]),s.jsxs("header",{className:(l?"bg-[#070707] text-white":"bg-white text-black")+" shadow-md fixed w-full z-10",children:[s.jsxs("div",{className:"container mx-auto px-4 flex justify-between items-stretch",children:[s.jsxs(a,{to:"/",className:"flex items-center py-4 shine-effect",children:[s.jsx("img",{src:"/logo.svg",alt:"BrandRenovate Logo",className:"h-8 w-8 mr-2",style:{filter:l?"invert(0)":"invert(1)"}}),s.jsx("span",{className:"text-2xl font-heading font-bold",children:"BrandRenovate"})]}),s.jsxs("nav",{className:"hidden md:flex items-center",children:[s.jsxs("ul",{className:"flex",children:[s.jsx("li",{children:s.jsx(a,{to:"/",className:"flex items-center px-4 h-full transition duration-300 "+(p("/")?l?"bg-[#070707] text-white":"bg-white text-black":l?"hover:bg-gray-800 hover:text-white":"hover:bg-gray-100 hover:text-black"),children:"Home"})}),s.jsxs("li",{className:"relative",ref:g,onMouseEnter:()=>{clearTimeout(b.current),u(!0)},onMouseLeave:()=>{b.current=setTimeout((()=>{u(!1)}),300)},children:[s.jsx("button",{className:"flex items-center px-4 h-full transition duration-300 "+(p("/web-design")||p("/graphic-design")||p("/social-media")?l?"bg-[#070707] text-white":"bg-white text-black":l?"hover:bg-gray-800 hover:text-white":"hover:bg-gray-100 hover:text-black"),children:"Services"}),s.jsx(i,{children:x&&s.jsxs(r.ul,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:`absolute left-0 mt-0 w-48 ${l?"bg-[#070707]":"bg-white"} rounded-b-lg shadow-lg`,children:[s.jsx("li",{children:s.jsx(a,{to:"/web-design",className:"block px-4 py-2 "+(l?"hover:bg-gray-800 hover:text-white":"hover:bg-gray-100 hover:text-black"),children:"Web Design"})}),s.jsx("li",{children:s.jsx(a,{to:"/graphic-design",className:"block px-4 py-2 "+(l?"hover:bg-gray-800 hover:text-white":"hover:bg-gray-100 hover:text-black"),children:"Graphic Design"})}),s.jsx("li",{children:s.jsx(a,{to:"/social-media",className:"block px-4 py-2 "+(l?"hover:bg-gray-800 hover:text-white":"hover:bg-gray-100 hover:text-black"),children:"Social Media"})})]})})]}),s.jsx("li",{children:s.jsx(a,{to:"/about-us",className:"flex items-center px-4 h-full transition duration-300 "+(p("/about-us")?l?"bg-[#070707] text-white":"bg-white text-black":l?"hover:bg-gray-800 hover:text-white":"hover:bg-gray-100 hover:text-black"),children:"About Us"})}),s.jsx("li",{children:s.jsx(a,{to:"/contact",className:"flex items-center px-4 h-full transition duration-300 "+(p("/contact")?l?"bg-[#070707] text-white":"bg-white text-black":l?"hover:bg-gray-800 hover:text-white":"hover:bg-gray-100 hover:text-black"),children:"Contact"})})]}),s.jsx("button",{onClick:c,className:"ml-4 p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500 transition-colors duration-200","aria-label":l?"Switch to light mode":"Switch to dark mode",children:l?s.jsx(n,{size:24}):s.jsx(o,{size:24})})]}),s.jsxs("div",{className:"md:hidden flex items-center",children:[s.jsx("button",{onClick:c,className:"mr-4 p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500 transition-colors duration-200","aria-label":l?"Switch to light mode":"Switch to dark mode",children:l?s.jsx(n,{size:24}):s.jsx(o,{size:24})}),s.jsx("button",{onClick:()=>h(!d),className:"focus:outline-none",children:s.jsx("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})]}),s.jsx(N,{isMenuOpen:d,isDarkMode:l,setIsMenuOpen:h})]})}function D({isDarkMode:e}){return s.jsx("footer",{className:"py-12 "+(e?"bg-dark-bg text-white":"bg-gray-100 text-black"),children:s.jsxs("div",{className:"container mx-auto px-4",children:[s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 mb-8",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-xl font-bold mb-4",children:"BrandRenovate"}),s.jsx("p",{className:"mb-4 "+(e?"text-gray-300":"text-gray-600"),children:"Transforming digital brands since 2010. Based in the UK, serving clients worldwide."}),s.jsxs("div",{className:"flex space-x-4",children:[s.jsx("a",{href:"https://linkedin.com/company/brandrenovate",className:"hover:text-blue-500 transition-colors","aria-label":"LinkedIn",children:s.jsx(l,{size:20})}),s.jsx("a",{href:"https://twitter.com/brandrenovate",className:"hover:text-blue-400 transition-colors","aria-label":"Twitter",children:s.jsx(c,{size:20})}),s.jsx("a",{href:"https://instagram.com/brandrenovate",className:"hover:text-pink-500 transition-colors","aria-label":"Instagram",children:s.jsx(d,{size:20})})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Services"}),s.jsxs("ul",{className:"space-y-2",children:[s.jsx("li",{children:s.jsx("a",{href:"/web-design",className:"hover:text-blue-500 transition-colors",children:"Web Design"})}),s.jsx("li",{children:s.jsx("a",{href:"/graphic-design",className:"hover:text-blue-500 transition-colors",children:"Graphic Design"})}),s.jsx("li",{children:s.jsx("a",{href:"/digital-marketing",className:"hover:text-blue-500 transition-colors",children:"Digital Marketing"})}),s.jsx("li",{children:s.jsx("a",{href:"/consultation",className:"hover:text-blue-500 transition-colors",children:"Free Consultation"})})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Resources"}),s.jsxs("ul",{className:"space-y-2",children:[s.jsx("li",{children:s.jsx("a",{href:"/about",className:"hover:text-blue-500 transition-colors",children:"About Us"})}),s.jsx("li",{children:s.jsx("a",{href:"/process",className:"hover:text-blue-500 transition-colors",children:"Our Process"})}),s.jsx("li",{children:s.jsx("a",{href:"/portfolio",className:"hover:text-blue-500 transition-colors",children:"Portfolio"})}),s.jsx("li",{children:s.jsx("a",{href:"/blog",className:"hover:text-blue-500 transition-colors",children:"Blog"})})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Get in Touch"}),s.jsxs("ul",{className:"space-y-3",children:[s.jsxs("li",{className:"flex items-center",children:[s.jsx(h,{className:"mr-2"}),s.jsx("a",{href:"mailto:hello@brandrenovate.co.uk",className:"hover:text-blue-500 transition-colors",children:"hello@brandrenovate.co.uk"})]}),s.jsxs("li",{className:"flex items-center",children:[s.jsx(x,{className:"mr-2"}),s.jsx("span",{children:"United Kingdom"})]}),s.jsx("li",{children:s.jsx("a",{href:"/consultation",className:`inline-block px-4 py-2 rounded-lg ${e?"bg-white text-black":"bg-black text-white"} hover:opacity-90 transition-opacity`,children:"Book a Call"})})]})]})]}),s.jsx("div",{className:`border-t ${e?"border-gray-700":"border-gray-200"} pt-8 mt-8`,children:s.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[s.jsxs("p",{className:"text-sm "+(e?"text-gray-400":"text-gray-600"),children:["© ",(new Date).getFullYear()," BrandRenovate.co.uk - All rights reserved"]}),s.jsxs("div",{className:"flex space-x-6 mt-4 md:mt-0",children:[s.jsx("a",{href:"/privacy",className:"text-sm hover:text-blue-500 transition-colors",children:"Privacy Policy"}),s.jsx("a",{href:"/terms",className:"text-sm hover:text-blue-500 transition-colors",children:"Terms of Service"})]})]})})]})})}const E=({isDarkMode:t})=>{const[a,i]=e.useState(!1);e.useEffect((()=>{u.get("cookieConsent")||i(!0)}),[]);return a?s.jsx("div",{className:`fixed bottom-0 left-0 right-0 p-4 ${t?"bg-[#070707] text-white":"bg-white text-[#333333]"} shadow-lg`,children:s.jsxs("div",{className:"container mx-auto flex flex-col md:flex-row items-center justify-between",children:[s.jsx("p",{className:"mb-4 md:mb-0 text-sm",children:"We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies."}),s.jsxs("div",{className:"flex space-x-4",children:[s.jsx("button",{onClick:()=>{const e={expires:365,sameSite:"Lax",secure:!0,path:"/"};u.set("cookieConsent","true",e),u.set("ga_consent","true",e),i(!1)},className:`px-4 py-2 rounded ${t?"bg-white text-[#070707] hover:bg-gray-200":"bg-[#070707] text-white hover:bg-gray-800"} transition duration-300`,children:"Accept"}),s.jsx("button",{onClick:()=>{const e={expires:365,sameSite:"Lax",secure:!0,path:"/"};u.set("cookieConsent","false",e),u.set("ga_consent","false",e),i(!1)},className:`px-4 py-2 rounded ${t?"bg-[#2C2C2C] text-white hover:bg-[#1E1E1E]":"bg-[#E0E0E0] text-[#333333] hover:bg-[#B3B3B3]"} transition duration-300`,children:"Decline"})]})]})}):null};function S({children:e}){const t=m.useRef(null),a=g(t,{once:!0,threshold:.1});return s.jsx(r.div,{ref:t,initial:{opacity:0,y:50},animate:a?{opacity:1,y:0}:{opacity:0,y:50},transition:{duration:.5,ease:"easeOut"},children:e})}const M="cta_click",C=()=>{window.GA_INITIALIZED||(b.initialize("G-W1V2VBCTNT",{debug:!1,testMode:!1,gaOptions:{cookieDomain:"brandrenovate.co.uk",cookieFlags:"Secure;SameSite=Lax",cookieExpires:31536e3,development:!1}}),window.GA_INITIALIZED=!0)};function L({isDarkMode:t,title:i,tagline:n}){const o=e.useRef(null),l=e.useRef(null),c=e.useRef(null);e.useEffect((()=>{const e=(e,t)=>{e.current&&Object.assign(e.current.style,t)};e(o,{opacity:"0",transform:"translateX(-100px)"}),e(l,{opacity:"0",transform:"translateX(100px)"}),e(c,{opacity:"0",transform:"translateY(50px)"})}),[]);return s.jsx("section",{className:`${i?"py-40":"py-60"} ${t?"bg-[#070707]":"bg-white"}`,children:s.jsxs("div",{className:"container mx-auto px-4 text-center",children:[s.jsx(r.h1,{ref:o,className:"text-5xl font-bold mb-8 transition-all duration-1000 ease-out "+(t?"text-white":"text-black"),initial:{opacity:0,x:-100},animate:{opacity:1,x:0},transition:{duration:1,ease:"easeOut"},children:i||"Transform Your Brand, Elevate Your Presence"}),s.jsx(r.p,{ref:l,className:"text-xl mb-12 max-w-3xl mx-auto transition-all duration-1000 ease-out "+(t?"text-light-text":"text-dark-text"),initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:1,ease:"easeOut",delay:.5},children:n||"Welcome to BrandRenovate, where we specialize in transforming brands and elevating online presence for small businesses, start-ups, and influencers. Let's help you stand out, attract more customers, and achieve your business goals."}),s.jsx(r.div,{ref:c,initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeOut",delay:1},children:s.jsx(a,{to:"/consultation",className:(t?"bg-light-text text-dark-bg":"bg-dark-text text-light-bg")+" font-bold py-4 px-8 rounded-full transition duration-300 hover:bg-light-accent hover:shadow-lg transform hover:-translate-y-1 pulse-button inline-block",onClick:()=>{((e,t={})=>{"true"===u.get("ga_consent")&&(C(),b.event(e,{...t,timestamp:(new Date).toISOString()}))})(M,{page_title:i,tagline:n,dark_mode:t})},children:"Get a Free Consultation"})})]})})}const O=e=>{document.title=`${e} | BrandRenovate`},T=[{title:"Consultation",description:"We start with a free consultation to understand your business needs, goals, and challenges. This can be done in person, over the phone, or remotely via video conferencing."},{title:"Scoping Document",description:"We compile a comprehensive scoping document outlining the specifics of your project, including achievable goals, timelines, deliverables, and budget."},{title:"Strategy Development",description:"Based on the scoping document, we develop a customized strategy tailored to your brand, covering all aspects of your digital presence."}];function I({isDarkMode:t}){const[a,i]=e.useState(!1);e.useEffect((()=>{O("Book a Free Marketing Consultation")}),[]);return s.jsxs("div",{className:t?"bg-[#070707] text-white":"bg-white text-black",children:[s.jsx(S,{children:s.jsx(L,{title:"Free Strategy Session",tagline:"Book your free consultation and let's discuss how we can help your business grow. No pressure, just honest conversation about your goals.",isDarkMode:t})}),s.jsx(S,{children:s.jsx("section",{className:"py-20 "+(t?"bg-[#070707]":"bg-white"),children:s.jsxs("div",{className:"container mx-auto px-4",children:[s.jsxs("div",{className:"max-w-3xl mx-auto text-center mb-16",children:[s.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Our Process"}),s.jsx("p",{className:"text-lg",children:"Since the age of 13, I've been dedicated to helping businesses succeed online. Let's work together to transform your digital presence."})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:T.map(((e,a)=>s.jsxs(r.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1*a},className:"p-8 rounded-lg "+(t?"bg-[#1a1a1a]":"bg-gray-100"),children:[s.jsx("div",{className:`w-12 h-12 rounded-full ${t?"bg-white text-black":"bg-black text-white"} flex items-center justify-center mb-4 text-xl font-bold`,children:a+1}),s.jsx("h3",{className:"text-xl font-semibold mb-4",children:e.title}),s.jsx("p",{children:e.description})]},e.title)))}),s.jsx("div",{className:"max-w-2xl mx-auto",children:s.jsxs(r.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},className:"p-8 rounded-lg "+(t?"bg-[#1a1a1a]":"bg-gray-100"),children:[s.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:"Schedule Your Free Consultation"}),a?s.jsxs("div",{className:"text-center py-12",children:[s.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Thank You!"}),s.jsx("p",{children:"We'll get back to you soon to schedule your consultation."})]}):s.jsxs("form",{onSubmit:async e=>{e.preventDefault();try{const t=e.target;(await fetch("https://formspree.io/f/mdkodqgg",{method:"POST",body:new FormData(t),headers:{Accept:"application/json"}})).ok&&(i(!0),t.reset())}catch(t){}},className:"space-y-6",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block mb-2 font-medium",children:"Name"}),s.jsx("input",{type:"text",name:"name",required:!0,className:`w-full p-3 rounded-lg ${t?"bg-[#2a2a2a] border-[#3a3a3a]":"bg-white border-gray-200"} border focus:ring-2 focus:ring-blue-500 transition-all duration-300`,placeholder:"Your name"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block mb-2 font-medium",children:"Email"}),s.jsx("input",{type:"email",name:"email",required:!0,className:`w-full p-3 rounded-lg ${t?"bg-[#2a2a2a] border-[#3a3a3a]":"bg-white border-gray-200"} border focus:ring-2 focus:ring-blue-500 transition-all duration-300`,placeholder:"Your email"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block mb-2 font-medium",children:"Project Type"}),s.jsxs("select",{name:"project_type",required:!0,className:`w-full p-3 rounded-lg ${t?"bg-[#2a2a2a] border-[#3a3a3a]":"bg-white border-gray-200"} border focus:ring-2 focus:ring-blue-500 transition-all duration-300`,children:[s.jsx("option",{value:"",children:"Select a service"}),s.jsx("option",{value:"web_design",children:"Web Design"}),s.jsx("option",{value:"graphic_design",children:"Graphic Design"}),s.jsx("option",{value:"social_media",children:"Social Media Management"}),s.jsx("option",{value:"other",children:"Other"})]})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block mb-2 font-medium",children:"Message"}),s.jsx("textarea",{name:"message",required:!0,rows:"5",className:`w-full p-3 rounded-lg ${t?"bg-[#2a2a2a] border-[#3a3a3a]":"bg-white border-gray-200"} border focus:ring-2 focus:ring-blue-500 transition-all duration-300`,placeholder:"Tell us about your project and goals"})]}),s.jsx("button",{type:"submit",className:`w-full py-3 px-6 rounded-lg ${t?"bg-white text-black hover:bg-gray-200":"bg-black text-white hover:bg-gray-800"} transition-all duration-300`,children:"Schedule Consultation"})]})]})})]})})})]})}const B=()=>{const s=t();e.useEffect((()=>{var e;"true"===u.get("ga_consent")&&(e=s.pathname,"true"===u.get("ga_consent")&&(C(),b.send({hitType:"pageview",page:e})))}),[s])};function P({children:e}){return B(),s.jsx("div",{children:e})}const A=e.lazy((()=>w((()=>import("./Home-b7df3a22.js")),["assets/Home-b7df3a22.js","assets/vendor-d22ee007.js","assets/CallToAction-007b656d.js"]))),R=e.lazy((()=>w((()=>import("./WebDesign-52408a50.js")),["assets/WebDesign-52408a50.js","assets/vendor-d22ee007.js","assets/CallToAction-007b656d.js"]))),z=e.lazy((()=>w((()=>import("./GraphicDesign-724bd267.js")),["assets/GraphicDesign-724bd267.js","assets/vendor-d22ee007.js"]))),$=e.lazy((()=>w((()=>import("./SocialMedia-089849c1.js")),["assets/SocialMedia-089849c1.js","assets/vendor-d22ee007.js","assets/CallToAction-007b656d.js"]))),V=e.lazy((()=>w((()=>import("./AboutUs-72a4006e.js")),["assets/AboutUs-72a4006e.js","assets/vendor-d22ee007.js","assets/CallToAction-007b656d.js"]))),W=e.lazy((()=>w((()=>import("./Contact-88b83f5b.js")),["assets/Contact-88b83f5b.js","assets/vendor-d22ee007.js"]))),F=e.lazy((()=>w((()=>import("./PrivacyPolicy-700a766a.js")),["assets/PrivacyPolicy-700a766a.js","assets/vendor-d22ee007.js"]))),G=e.lazy((()=>w((()=>import("./TermsOfService-b273f352.js")),["assets/TermsOfService-b273f352.js","assets/vendor-d22ee007.js"]))),Y=e.lazy((()=>w((()=>import("./Sitemap-30e8f997.js")),["assets/Sitemap-30e8f997.js","assets/vendor-d22ee007.js"])));function q(){const[t,a]=e.useState((()=>{const e=u.get("darkMode");return void 0===e||JSON.parse(e)})),[i,r]=e.useState({x:0,y:0});e.useEffect((()=>{u.set("darkMode",JSON.stringify(t),{expires:365})}),[t]);const n=e.useCallback((e=>{r({x:e.clientX,y:e.clientY})}),[]);e.useEffect((()=>(window.addEventListener("mousemove",n),()=>{window.removeEventListener("mousemove",n)})),[n]);const o=e.useCallback((()=>{a((e=>{const t=!e;return u.set("darkMode",String(t),{expires:365,sameSite:"Lax",secure:!0,path:"/"}),t}))}),[]);e.useEffect((()=>{const e=e=>{const t=e.currentTarget.getAttribute("href");if(t&&t.startsWith("#")){e.preventDefault();const s=t.substring(1),a=document.getElementById(s);a&&a.scrollIntoView({behavior:"smooth"})}},t=document.querySelectorAll('a[href^="#"]');return t.forEach((t=>{t.addEventListener("click",e)})),()=>{t.forEach((t=>{t.removeEventListener("click",e)}))}}),[]);const[l,c]=e.useState((()=>"true"===u.get("ga_consent"))),[d,h]=e.useState(!0);return s.jsx(p,{children:s.jsx(H,{isDarkMode:t,toggleDarkMode:o,hasConsent:l,setHasConsent:c,showConsentBar:d,setShowConsentBar:h,mousePosition:i})})}function H({isDarkMode:t,...a}){return s.jsx(P,{children:s.jsxs("div",{className:t?"dark":"",children:[s.jsxs("div",{className:"min-h-screen flex flex-col",children:[s.jsx(_,{isDarkMode:t,toggleDarkMode:a.toggleDarkMode}),s.jsx("main",{className:"flex-grow",children:s.jsx(e.Suspense,{fallback:s.jsx("div",{children:"Loading..."}),children:s.jsxs(j,{children:[s.jsx(f,{path:"/",element:s.jsx(A,{isDarkMode:t})}),s.jsx(f,{path:"/web-design",element:s.jsx(R,{isDarkMode:t})}),s.jsx(f,{path:"/graphic-design",element:s.jsx(z,{isDarkMode:t})}),s.jsx(f,{path:"/social-media",element:s.jsx($,{isDarkMode:t})}),s.jsx(f,{path:"/about-us",element:s.jsx(V,{isDarkMode:t})}),s.jsx(f,{path:"/contact",element:s.jsx(W,{isDarkMode:t})}),s.jsx(f,{path:"/consultation",element:s.jsx(I,{isDarkMode:t})}),s.jsx(f,{path:"/privacy-policy",element:s.jsx(F,{isDarkMode:t})}),s.jsx(f,{path:"/terms-of-service",element:s.jsx(G,{isDarkMode:t})}),s.jsx(f,{path:"/sitemap",element:s.jsx(Y,{isDarkMode:t})}),s.jsx(f,{path:"/privacy",element:s.jsx(v,{to:"/privacy-policy",replace:!0})}),s.jsx(f,{path:"/terms",element:s.jsx(v,{to:"/terms-of-service",replace:!0})})]})})}),s.jsx(D,{isDarkMode:t})]}),a.showConsentBar&&s.jsx(E,{isDarkMode:t,setHasConsent:a.setHasConsent,setShowConsentBar:a.setShowConsentBar})]})})}y.createRoot(document.getElementById("root")).render(s.jsx(m.StrictMode,{children:s.jsx(q,{})}));export{L as H,S,O as s};
