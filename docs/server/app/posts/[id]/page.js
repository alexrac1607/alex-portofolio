(()=>{var e={};e.id=722,e.ids=[722],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6281:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>f,originalPathname:()=>c,pages:()=>d,routeModule:()=>p,tree:()=>u});var n=r(482),o=r(9108),i=r(2563),s=r.n(i),l=r(8300),a={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(a[e]=()=>l[e]);r.d(t,a);let u=["",{children:["posts",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1771)),"C:\\portfolio-site\\alex-portfolio-FE\\src\\app\\posts\\[id]\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,1582)),"C:\\portfolio-site\\alex-portfolio-FE\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\portfolio-site\\alex-portfolio-FE\\src\\app\\posts\\[id]\\page.tsx"],c="/posts/[id]/page",f={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/posts/[id]/page",pathname:"/posts/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},9647:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},139:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1900,23)),Promise.resolve().then(r.bind(r,9275)),Promise.resolve().then(r.bind(r,750))},8507:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1900,23))},750:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(5344),o=r(3729),i=r(6090);function s(){let[e,t]=(0,o.useState)(!1);return n.jsx("header",{className:"w-full border-b-2 px-4",children:(0,n.jsxs)("div",{className:"max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between h-20",children:[n.jsx("a",{href:"/",className:"text-lg md:text-2xl text-black font-light",children:"Alexandru Răchită"}),n.jsx("div",{className:"md:hidden",onClick:()=>t(!e),children:e?n.jsx(i.oHP,{size:24}):n.jsx(i.qTj,{size:24})}),(0,n.jsxs)("nav",{className:`${e?"flex":"hidden"} flex-col md:flex-row md:flex space-x-0 md:space-x-4 space-y-2 md:space-y-0 items-center`,children:[n.jsx("a",{href:"/about",className:"text-black link",children:"About"}),n.jsx("a",{href:"/posts",className:"text-black link",children:"Blog Posts"}),n.jsx("a",{href:"/sign-in",className:"text-black link",children:"Sign In"}),n.jsx("a",{href:"#",className:"text-black link",children:"Contact"})]})]})})}},4778:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"bailoutToClientRendering",{enumerable:!0,get:function(){return i}});let n=r(8675),o=r(5869);function i(e){let t=o.staticGenerationAsyncStorage.getStore();if((null==t||!t.forceStatic)&&(null==t?void 0:t.isStaticGeneration))throw new n.BailoutToCSRError(e)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4552:(e,t,r)=>{"use strict";function n(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return n}}),r(6783),r(2),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9738:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return m},useSearchParams:function(){return h},usePathname:function(){return x},ServerInsertedHTMLContext:function(){return u.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return u.useServerInsertedHTML},useRouter:function(){return g},useParams:function(){return b},useSelectedLayoutSegments:function(){return A},useSelectedLayoutSegment:function(){return v},redirect:function(){return d.redirect},permanentRedirect:function(){return d.permanentRedirect},RedirectType:function(){return d.RedirectType},notFound:function(){return c.notFound}});let n=r(2),o=r(8726),i=r(7210),s=r(4552),l=r(3092),a=r(5458),u=r(545),d=r(8010),c=r(2100),f=Symbol("internal for urlsearchparams readonly");function p(){return Error("ReadonlyURLSearchParams cannot be modified")}class m{[Symbol.iterator](){return this[f][Symbol.iterator]()}append(){throw p()}delete(){throw p()}set(){throw p()}sort(){throw p()}constructor(e){this[f]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e),this.size=e.size}}function h(){(0,s.clientHookInServerComponentError)("useSearchParams");let e=(0,n.useContext)(i.SearchParamsContext),t=(0,n.useMemo)(()=>e?new m(e):null,[e]);{let{bailoutToClientRendering:e}=r(4778);e("useSearchParams()")}return t}function x(){return(0,s.clientHookInServerComponentError)("usePathname"),(0,n.useContext)(i.PathnameContext)}function g(){(0,s.clientHookInServerComponentError)("useRouter");let e=(0,n.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function b(){(0,s.clientHookInServerComponentError)("useParams");let e=(0,n.useContext)(o.GlobalLayoutRouterContext),t=(0,n.useContext)(i.PathParamsContext);return(0,n.useMemo)(()=>(null==e?void 0:e.tree)?function e(t,r){for(let n of(void 0===r&&(r={}),Object.values(t[1]))){let t=n[0],o=Array.isArray(t),i=o?t[1]:t;!i||i.startsWith(a.PAGE_SEGMENT_KEY)||(o&&("c"===t[2]||"oc"===t[2])?r[t[0]]=t[1].split("/"):o&&(r[t[0]]=t[1]),r=e(n,r))}return r}(e.tree):t,[null==e?void 0:e.tree,t])}function A(e){void 0===e&&(e="children"),(0,s.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,n.useContext)(o.LayoutRouterContext);return function e(t,r,n,o){let i;if(void 0===n&&(n=!0),void 0===o&&(o=[]),n)i=t[1][r];else{var s;let e=t[1];i=null!=(s=e.children)?s:Object.values(e)[0]}if(!i)return o;let u=i[0],d=(0,l.getSegmentValue)(u);return!d||d.startsWith(a.PAGE_SEGMENT_KEY)?o:(o.push(d),e(i,r,!1,o))}(t,e)}function v(e){void 0===e&&(e="children"),(0,s.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=A(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2100:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{notFound:function(){return n},isNotFoundError:function(){return o}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5858:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8010:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return a},redirect:function(){return u},permanentRedirect:function(){return d},isRedirectError:function(){return c},getURLFromRedirectError:function(){return f},getRedirectTypeFromError:function(){return p},getRedirectStatusCodeFromError:function(){return m}});let o=r(4580),i=r(2934),s=r(5858),l="NEXT_REDIRECT";function a(e,t,r){void 0===r&&(r=s.RedirectStatusCode.TemporaryRedirect);let n=Error(l);n.digest=l+";"+t+";"+e+";"+r+";";let i=o.requestAsyncStorage.getStore();return i&&(n.mutableCookies=i.mutableCookies),n}function u(e,t){void 0===t&&(t="replace");let r=i.actionAsyncStorage.getStore();throw a(e,t,(null==r?void 0:r.isAction)?s.RedirectStatusCode.SeeOther:s.RedirectStatusCode.TemporaryRedirect)}function d(e,t){void 0===t&&(t="replace");let r=i.actionAsyncStorage.getStore();throw a(e,t,(null==r?void 0:r.isAction)?s.RedirectStatusCode.SeeOther:s.RedirectStatusCode.PermanentRedirect)}function c(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,n,o]=e.digest.split(";",4),i=Number(o);return t===l&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(i)&&i in s.RedirectStatusCode}function f(e){return c(e)?e.digest.split(";",3)[2]:null}function p(e){if(!c(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function m(e){if(!c(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3092:(e,t)=>{"use strict";function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8726:(e,t,r)=>{"use strict";e.exports=r(482).vendored.contexts.AppRouterContext},7210:(e,t,r)=>{"use strict";e.exports=r(482).vendored.contexts.HooksClientContext},545:(e,t,r)=>{"use strict";e.exports=r(482).vendored.contexts.ServerInsertedHtml},8675:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{BailoutToCSRError:function(){return n},isBailoutToCSRError:function(){return o}});let r="BAILOUT_TO_CLIENT_SIDE_RENDERING";class n extends Error{constructor(e){super("Bail out to client-side rendering: "+e),this.reason=e,this.digest=r}}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}},5458:(e,t)=>{"use strict";function r(e){return"("===e[0]&&e.endsWith(")")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isGroupSegment:function(){return r},PAGE_SEGMENT_KEY:function(){return n},DEFAULT_SEGMENT_KEY:function(){return o}});let n="__PAGE__",o="__DEFAULT__"},1582:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var n=r(5036);let o=(0,r(6843).createProxy)(String.raw`C:\portfolio-site\alex-portfolio-FE\src\components\Layout\Header.tsx`),{__esModule:i,$$typeof:s}=o,l=o.default;var a=r(2813);let u={src:"/_next/static/media/LI-Logo.05fa8b9d.png",height:540,width:2212,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEUnZ7IpZrInZ7IoZ7IqabQnZbApaLPgDpLcAAAAB3RSTlN7Ppa3VWJixZhJzQAAAAlwSFlzAAAuIwAALiMBeKU/dgAAABpJREFUeJxjYGRkYWRkYGZiYGNlYGBgYGIAAAEWABvRqJkIAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2};function d(){return(0,n.jsxs)("footer",{className:"flex flex-col md:flex-row justify-between items-center h-auto md:h-20 border-t-2 mt-8 px-4 md:px-8 py-4 md:py-0",children:[n.jsx("div",{className:"text-base md:text-lg text-black font-light mb-4 md:mb-0",children:"\xa9 2024 Alexandru Răchită"}),(0,n.jsxs)("div",{className:"flex space-x-4",children:[n.jsx("a",{href:"https://github.com/alexrac1607",target:"_blank",rel:"noopener noreferrer",className:"text-black border-2 link border-black p-1 rounded hover:bg-black hover:text-white transition github-link logo-container flex items-center",children:n.jsx("div",{className:"image-hover"})}),n.jsx("a",{href:"https://www.linkedin.com/in/alexandru-r%C4%83chit%C4%83-976138186/",target:"_blank",rel:"noopener noreferrer",className:"text-black border-2 link border-black px-3 py-1 rounded hover:bg-black hover:text-white transition flex items-center",children:n.jsx(a.default,{priority:!0,src:u,alt:"LinkedIn logo",height:50,width:120})})]})]})}function c({children:e}){return n.jsx(n.Fragment,{children:n.jsx("html",{lang:"en",children:(0,n.jsxs)("body",{className:"flex flex-col min-h-screen",children:[n.jsx(l,{}),n.jsx("main",{className:"flex-grow h-1/2",children:e}),n.jsx(d,{})]})})})}r(5023)},1771:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(5036),o=r(9738);let i=JSON.parse('[{"id":"1","title":"My First Blog Post","description":"This is a short description of my first blog post.","content":"This is the detailed content of the first blog post.","imageSrc":"/images/blog1.jpg"},{"id":"2","title":"Another Interesting Post","description":"This blog post discusses another interesting topic.","content":"This is the detailed content of the second blog post.","imageSrc":"/images/blog2.jpg"}]');var s=r(2813);function l({params:e}){let t=i.find(t=>t.id===e.id);return t?(0,n.jsxs)("div",{className:"max-w-4xl mx-auto p-4 md:p-8",children:[n.jsx("h1",{className:"text-3xl md:text-4xl font-bold mb-4",children:t.title}),t.imageSrc&&n.jsx(s.default,{src:t.imageSrc,alt:t.title,width:800,height:400,className:"mb-4"}),n.jsx("p",{className:"text-lg text-gray-700 mb-6",children:t.description}),n.jsx("div",{className:"prose prose-lg max-w-none",children:n.jsx("p",{children:t.content})})]}):(0,o.notFound)()}},9275:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n={src:"/_next/static/media/LI-Logo.05fa8b9d.png",height:540,width:2212,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEUnZ7IpZrInZ7IoZ7IqabQnZbApaLPgDpLcAAAAB3RSTlN7Ppa3VWJixZhJzQAAAAlwSFlzAAAuIwAALiMBeKU/dgAAABpJREFUeJxjYGRkYWRkYGZiYGNlYGBgYGIAAAEWABvRqJkIAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},5023:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[834],()=>r(6281));module.exports=n})();