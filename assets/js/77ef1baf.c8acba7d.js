"use strict";(self.webpackChunkgw_2_pathing_wiki=self.webpackChunkgw_2_pathing_wiki||[]).push([[6028],{2984:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=i(4848),s=i(8453);const r={id:"guid",title:"GUID",hide_table_of_contents:!0},d=void 0,a={id:"marker-dev/attributes/guid",title:"GUID",description:"| Applies To | | Blish HUD | TacO |",source:"@site/docs/marker-dev/attributes/guid.md",sourceDirName:"marker-dev/attributes",slug:"/marker-dev/attributes/guid",permalink:"/docs/marker-dev/attributes/guid",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"guid",title:"GUID",hide_table_of_contents:!0},sidebar:"marker-dev-sidebar",previous:{title:"Festival",permalink:"/docs/marker-dev/attributes/festival"},next:{title:"HeightOffset",permalink:"/docs/marker-dev/attributes/heightoffset"}},h={},c=[{value:"Description",id:"description",level:2},{value:"Used by",id:"used-by",level:2},{value:"How it works",id:"how-it-works",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Applies To"}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Blish HUD"}),(0,n.jsx)(t.th,{children:"TacO"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)("center",{children:"Markers"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)("center",{children:"\u2714"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("center",{children:"\u2714"})})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"A unique identifier used to track the state of certain behaviors between launch sessions."})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Data Type"}),(0,n.jsx)(t.th,{children:"Example"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"guid"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'guid="NdG3CddnEEO+xNrGN7lGIA=="'})}),(0,n.jsx)(t.td,{children:"The base64 encoded GUID used to uniquely identify the marker."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"used-by",children:"Used by"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"behavior",children:"behavior"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,n.jsx)(t.p,{children:"Behaviors and other attributes which must track their state between launch sessions can track their state by an attribute defined GUID.  The GUID is typically unique among all packs (thus is should be automatically generated).  When a behavior (such as TacO behaviors 2, 3, 4, and 7) indicates that it has been activated, the unfilter timestamp is saved along with the GUID into a data file.  On the next launch, the filtered state of the marker can be re-loaded and checked to see if it is still valid or if the filter should be released."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["When a marker checks to see if it is filtered, by GUID, it checks a table of filtered GUIDs which means that you can intentionally use the same GUID more than once to tie the state of multiple markers together.  This is an important use case for the ",(0,n.jsx)(t.a,{href:"invertbehavior",children:"InvertBehavior"})," attribute."]})})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>a});var n=i(6540);const s={},r=n.createContext(s);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);