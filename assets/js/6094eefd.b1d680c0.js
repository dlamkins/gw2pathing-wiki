"use strict";(self.webpackChunkgw_2_pathing_wiki=self.webpackChunkgw_2_pathing_wiki||[]).push([[3186],{2138:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(4848),i=a(8453);const r={id:"advanced-settings",title:"Advanced Settings"},o=void 0,s={id:"usage/advanced-settings",title:"Advanced Settings",description:"Advanced settings are found within a yaml file located at:",source:"@site/docs/usage/advanced-settings.md",sourceDirName:"usage",slug:"/usage/advanced-settings",permalink:"/docs/usage/advanced-settings",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"advanced-settings",title:"Advanced Settings"},sidebar:"usage-sidebar",previous:{title:"Pathing Settings",permalink:"/docs/usage/pathing-settings"}},d={},c=[{value:"marker-load-paths",id:"marker-load-paths",level:3},{value:"optimize-marker-packs",id:"optimize-marker-packs",level:3},{value:"copy-attribute-recharge-ms",id:"copy-attribute-recharge-ms",level:3},{value:"interact-gear-x-offset &amp; interact-gear-y-offset",id:"interact-gear-x-offset--interact-gear-y-offset",level:3},{value:"interact-gear-animation",id:"interact-gear-animation",level:3},{value:"info-window-x-offset-pixels &amp; info-window-y-offset-pixels",id:"info-window-x-offset-pixels--info-window-y-offset-pixels",level:3},{value:"map-trigger-hide-from-camera",id:"map-trigger-hide-from-camera",level:3},{value:"map-trail-douglas-peucker-error",id:"map-trail-douglas-peucker-error",level:3},{value:"category-name-truncate-width",id:"category-name-truncate-width",level:3}];function l(e){const t={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:["Advanced settings are found within a yaml file located at:",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.code,{children:"Documents\\Guild Wars 2\\addons\\blishhud\\markers\\data\\user\\advanced.yaml"})]}),(0,n.jsx)(t.p,{children:"These settings are not available within the UI and require a restart of the Pathing module to apply."})]}),"\n",(0,n.jsx)(t.h3,{id:"marker-load-paths",children:"marker-load-paths"}),"\n",(0,n.jsx)(t.p,{children:"A set of directory paths to also check for marker packs to load.  For example, while developing a marker pack in TacO, you can include TacO's marker folder so that Blish HUD can read the pack at the same time."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"marker-load-paths:\n  - c:/taco/pois\n  - c:/anotherlocation/markers\n"})}),"\n",(0,n.jsx)(t.h3,{id:"optimize-marker-packs",children:"optimize-marker-packs"}),"\n",(0,n.jsx)(t.p,{children:"If marker packs should be automatically optimized when they are downloaded.  Since all packs are now optimized prior to being downloaded, this setting won't change anything."}),"\n",(0,n.jsx)(t.h3,{id:"copy-attribute-recharge-ms",children:"copy-attribute-recharge-ms"}),"\n",(0,n.jsx)(t.p,{children:"The debounce time for the copy attribute to auto trigger in milliseconds.  By default this is configured to prevent a copy attribute for triggering more than once in 8 seconds."}),"\n",(0,n.jsx)(t.h3,{id:"interact-gear-x-offset--interact-gear-y-offset",children:"interact-gear-x-offset & interact-gear-y-offset"}),"\n",(0,n.jsx)(t.p,{children:"The X and Y offset (% of screen width) of the interact icon."}),"\n",(0,n.jsx)(t.h3,{id:"interact-gear-animation",children:"interact-gear-animation"}),"\n",(0,n.jsx)(t.p,{children:"If the interact icon should spin or not.  The icon spins to get your attention, but for those that do not want to see this animation, it can be disabled by setting this advanced setting to false."}),"\n",(0,n.jsx)(t.h3,{id:"info-window-x-offset-pixels--info-window-y-offset-pixels",children:"info-window-x-offset-pixels & info-window-y-offset-pixels"}),"\n",(0,n.jsx)(t.p,{children:"The X and Y offset of the info window in pixels."}),"\n",(0,n.jsx)(t.h3,{id:"map-trigger-hide-from-camera",children:"map-trigger-hide-from-camera"}),"\n",(0,n.jsx)(t.p,{children:"If the early hide feature based on camera movement should be used when the map closes.  When opening and closing your map, the game animates the camera.  We track this animation in order to determine when the map is closing so that we can automatically hide the map elements.  If disabled, fullscreen map elements will persist on screen longer than the map is actually visible as the game doesn't tell us the map is closed until the animation completes."}),"\n",(0,n.jsx)(t.h3,{id:"map-trail-douglas-peucker-error",children:"map-trail-douglas-peucker-error"}),"\n",(0,n.jsx)(t.p,{children:"The Douglas Peucker error used by the trails shown on the minimap."}),"\n",(0,n.jsx)(t.h3,{id:"category-name-truncate-width",children:"category-name-truncate-width"}),"\n",(0,n.jsx)(t.p,{children:"The width in pixels that category names will be truncated to if 'Truncate Long Category Names' is enabled."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>s});var n=a(6540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);