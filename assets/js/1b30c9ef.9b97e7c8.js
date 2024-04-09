"use strict";(self.webpackChunkgw_2_pathing_wiki=self.webpackChunkgw_2_pathing_wiki||[]).push([[1182],{863:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=a(4848),n=a(8453);const o={id:"anatomy-of-a-marker",title:"Anatomy of a Marker",hide_table_of_contents:!1},i=void 0,r={id:"guides/sywmamp/anatomy-of-a-marker",title:"Anatomy of a Marker",description:"<POI - Required, denotes to TacO and Blish that this is a marker!",source:"@site/docs/guides/sywmamp/anatomy-of-a-marker.md",sourceDirName:"guides/sywmamp",slug:"/guides/sywmamp/anatomy-of-a-marker",permalink:"/docs/guides/sywmamp/anatomy-of-a-marker",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"anatomy-of-a-marker",title:"Anatomy of a Marker",hide_table_of_contents:!1},sidebar:"marker-dev-sidebar",previous:{title:"The Dashboard",permalink:"/docs/guides/sywmamp/the-dashboard"},next:{title:"Markers alone, a pack does not make",permalink:"/docs/guides/sywmamp/markers-alone-a-pack-does-not-make"}},c={},l=[];function h(e){const t={code:"code",img:"img",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"<POI"})," - Required, denotes to TacO and Blish that this is a marker!"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:'MapID="50"'})," - specifies which map a marker belongs to. Every map, including story instances, etc, have a unique ID. So this can be used to show achievement markers, etc only on the relevant story instance and not the overworld."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:'xpos="-194.279" ypos="1.37639" zpos="-161.135"'})," - denotes the physical location of the marker so TacO and Blish can consistently display it, as the camera moves."]}),"\n",(0,s.jsx)(t.p,{children:'NOTE THE AXES MAY BE DIFFERENT THAN YOU\'RE USED TO FROM GEOMETRY. Most of us (myself included) are used to the x-y plane being flat on the table and the z-axis being "altitude". This is still the case, but the x-y plane is now vertical, on your monitor, so the z-axis is "into or out of" the screen and the y-axis would be "altitude".'}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:'type="fishing.fishingholes.desert"'})," - the category applied to this particular hole, this is what allows you to turn off (or apply behaviors, icons, etc to) a bunch of markers at once, and just generally helps the organizational structure of a pack. The marker editors will automatically generate relevant category structure based on the categories you assign to markers."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:'GUID="xM5D+V2CUEGt0qIpbEik4g=="'})," - a Globally Unique IDentifier for each marker. This is to ensure that even if you place two markers in the exact same spot, TacO and Blish can tell them apart and properly display both."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"/>"})," - denotes the end of one marker's attributes."]}),"\n",(0,s.jsxs)(t.p,{children:["Now because ",(0,s.jsx)(t.code,{children:"Desert"})," is not the right category for this hole, I manually change it."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"SYWMAMP7.png",src:a(885).A+"",width:"545",height:"354"})}),"\n",(0,s.jsx)(t.p,{children:"If you know you're going to be placing a bunch of the same category of marker, set it to one of your defaults!"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"SYWMAMP8.png",src:a(3938).A+"",width:"783",height:"358"})}),"\n",(0,s.jsx)(t.p,{children:"Next time you place a marker using that hotkey (in this case NUM +), it will place a coastal-category marker for me, no tweaking needed."}),"\n",(0,s.jsx)(t.p,{children:'Quick aside: "Why the huge ring? Can\'t you just watch for labels as you go?"'}),"\n",(0,s.jsx)(t.p,{children:"Yes, I can, but this way, I can easily determine how to make the fewest passes. Like here I know I'll only need 1 pass to check any holes in this outlet. Ring hits both coasts. And that means SWEET SWEET TIME SAVINGS, which you'll gladly pay a premium for if you're making anything more than a personal collection."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"SYWMAMP9.jpeg",src:a(5212).A+"",width:"1600",height:"900"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"HOT TIP:"})," The ring is also helpful when you're hunting for interactable stuff that's well hidden in game, too!"]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},885:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/SYWMAMP7-611877ac494daa6cf5a128d0ac52f225.png"},3938:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/SYWMAMP8-d9740100842df3d0e264b9993605d220.png"},5212:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/SYWMAMP9-fd503e39b635d1d871da3e0b5485870b.jpeg"},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>r});var s=a(6540);const n={},o=s.createContext(n);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);