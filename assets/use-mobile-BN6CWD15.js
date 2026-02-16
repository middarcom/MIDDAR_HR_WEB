import{l as c,r as o}from"./index-Bt_qYF7e.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=c("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]),e=768;function d(){const[s,t]=o.useState(void 0);return o.useEffect(()=>{const n=window.matchMedia(`(max-width: ${e-1}px)`),i=()=>{t(window.innerWidth<e)};return n.addEventListener("change",i),t(window.innerWidth<e),()=>n.removeEventListener("change",i)},[]),!!s}export{a as U,d as u};
