import{l as a,j as e,Q as f,B as u,t as i}from"./index-CkfjAkll.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=a("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=a("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=a("ServerCrash",[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",key:"4b9dqc"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",key:"22nnkd"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m13 6-4 6h6l-4 6",key:"14hqih"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=a("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]),M={generic:{icon:i,title:"Something went wrong",description:"An unexpected error occurred. Please try again."},network:{icon:v,title:"Connection error",description:"Unable to connect to the server. Please check your internet connection."},server:{icon:g,title:"Server error",description:"The server encountered an error. Please try again later."},forbidden:{icon:k,title:"Access denied",description:"You don't have permission to access this resource."},custom:{icon:i,title:"Error",description:"An error occurred."}};function b({type:o="generic",title:d,description:c,icon:h,onRetry:r,retryLabel:l="Try again",className:p,error:t}){const n=M[o],y=h||n.icon,m=d||n.title;let s=c||n.description;return t&&!c&&(typeof t=="string"?s=t:t.message&&(s=t.message)),e.jsxs("div",{className:f("flex flex-col items-center justify-center py-12 px-4 text-center",p),children:[e.jsx("div",{className:"rounded-full bg-destructive/10 p-4 mb-4",children:e.jsx(y,{className:"h-8 w-8 text-destructive"})}),e.jsx("h3",{className:"text-lg font-semibold text-foreground mb-2",children:m}),e.jsx("p",{className:"text-sm text-muted-foreground max-w-sm mb-4",children:s}),r&&e.jsxs(u,{onClick:r,variant:"outline",className:"gap-2",children:[e.jsx(x,{className:"h-4 w-4"}),l]})]})}export{b as E};
