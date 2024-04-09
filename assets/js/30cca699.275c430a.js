"use strict";(self.webpackChunkgw_2_pathing_wiki=self.webpackChunkgw_2_pathing_wiki||[]).push([[8023,7006],{5452:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var n=r(4848),s=r(8453),l=r(5801);const c={id:"vector3",title:"Vector3",hide_table_of_contents:!1},i=void 0,d={id:"lua-scripting/lua-lib/vector3",title:"Vector3",description:"A 3D vector. Has built in functions for vector operations (addition, subtraction, multiplication, etc).",source:"@site/docs/lua-scripting/lua-lib/vector3.mdx",sourceDirName:"lua-scripting/lua-lib",slug:"/lua-scripting/lua-lib/vector3",permalink:"/docs/lua-scripting/lua-lib/vector3",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"vector3",title:"Vector3",hide_table_of_contents:!1},sidebar:"marker-dev-sidebar",previous:{title:"Trail",permalink:"/docs/lua-scripting/lua-lib/trail"},next:{title:"Marker Pack Academy by Teh",permalink:"/docs/guides/marker-pack-academy"}},o={},h=[{value:"Fields",id:"fields",level:3},{value:"Functions",id:"functions",level:3},{value:'<CodeHeader class="Vector3">Vector3:Length</CodeHeader>',id:"vector3length",level:3},{value:"Returns | <code>number</code>",id:"returns--number",level:4},{value:"Usage",id:"usage",level:4},{value:'<CodeHeader class="Vector3">Vector3:Dot</CodeHeader>',id:"vector3dot",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns | `number",id:"returns--number-1",level:4},{value:"Usage",id:"usage-1",level:4},{value:'<CodeHeader class="Vector3">Vector3:Normalize</CodeHeader>',id:"vector3normalize",level:3},{value:"Returns | <code>Vector3</code>",id:"returns--vector3",level:4},{value:"Usage",id:"usage-2",level:4},{value:'<CodeHeader class="Vector3">Vector3:Cross</CodeHeader>',id:"vector3cross",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns | <code>Vector3</code>",id:"returns--vector3-1",level:4},{value:"Usage",id:"usage-3",level:4}];function a(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"A 3D vector. Has built in functions for vector operations (addition, subtraction, multiplication, etc)."}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Field"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"X"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{children:"The X component of the vector."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"Y"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{children:"The Y component of the vector."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"Z"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{children:"The Z component of the vector."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Function"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"#vector3length",children:(0,n.jsx)(t.code,{children:"Length"})})}),(0,n.jsx)(t.td,{children:"Calculates the length of a vector."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"#vector3dot",children:(0,n.jsx)(t.code,{children:"Dot"})})}),(0,n.jsx)(t.td,{children:"Returns the dot product of this vector and another."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"#vector3normalize",children:(0,n.jsx)(t.code,{children:"Normalize"})})}),(0,n.jsx)(t.td,{children:"Normalizes the vector."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"#vector3cross",children:(0,n.jsx)(t.code,{children:"Cross"})})}),(0,n.jsx)(t.td,{children:"Returns the cross product of this vector and another."})]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"vector3length",children:(0,n.jsx)(l.default,{class:"Vector3",function:"Length",children:"Vector3:Length"})}),"\n",(0,n.jsx)(t.p,{children:"Calculates the length of a vector."}),"\n",(0,n.jsxs)(t.h4,{id:"returns--number",children:["Returns | ",(0,n.jsx)(t.code,{children:"number"})]}),"\n",(0,n.jsx)(t.p,{children:"The length of the vector."}),"\n",(0,n.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",metastring:'title="script.lua"',children:"local distance = (VectorA - VectorB):Length()\n"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"vector3dot",children:(0,n.jsx)(l.default,{class:"Vector3",function:"Dot",params:"vector3",children:"Vector3:Dot"})}),"\n",(0,n.jsx)(t.p,{children:"Returns the dot product of this vector and another."}),"\n",(0,n.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"vector3"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"#fields",children:(0,n.jsx)(t.code,{children:"Vector3"})})}),(0,n.jsx)(t.td,{children:"The other vector."})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"returns--number-1",children:"Returns | `number"}),"\n",(0,n.jsx)(t.p,{children:"The dot product of the two vectors."}),"\n",(0,n.jsx)(t.h4,{id:"usage-1",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",metastring:'title="script.lua"',children:"local dotProduct = VectorA:Dot(VectorB)\n"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"vector3normalize",children:(0,n.jsx)(l.default,{class:"Vector3",function:"Normalize",children:"Vector3:Normalize"})}),"\n",(0,n.jsx)(t.p,{children:"Normalizes the vector."}),"\n",(0,n.jsxs)(t.h4,{id:"returns--vector3",children:["Returns | ",(0,n.jsx)(t.code,{children:"Vector3"})]}),"\n",(0,n.jsx)(t.p,{children:"The normalized vector."}),"\n",(0,n.jsx)(t.h4,{id:"usage-2",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",metastring:'title="script.lua"',children:"local normalizedVector = VectorA:Normalize()\n"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"vector3cross",children:(0,n.jsx)(l.default,{class:"Vector3",function:"Cross",params:"vector3",children:"Vector3:Cross"})}),"\n",(0,n.jsx)(t.p,{children:"Returns the cross product of this vector and another."}),"\n",(0,n.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"vector3"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"#fields",children:(0,n.jsx)(t.code,{children:"Vector3"})})}),(0,n.jsx)(t.td,{children:"The other vector."})]})})]}),"\n",(0,n.jsxs)(t.h4,{id:"returns--vector3-1",children:["Returns | ",(0,n.jsx)(t.code,{children:"Vector3"})]}),"\n",(0,n.jsx)(t.p,{children:"The cross product of the two vectors."}),"\n",(0,n.jsx)(t.h4,{id:"usage-3",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",metastring:'title="script.lua"',children:"local crossProduct = VectorA:Cross(VectorB)\n"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},5801:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});r(6540);var n=r(5556),s=r.n(n),l=r(4848);const c="#d3562e",i="#4a84de";function d(e,t){return(0,l.jsx)("span",{style:{color:e},children:t})}function o(e){const t=e.class,r=e.function,n=e.params;if(!t)return"Include a class prop in the CodeHeader component!";let s=d("#4a84de",t);if(!r)return(0,l.jsx)("span",{children:s});let o=null,h=null;if(null!=r&&""!==r&&(o=d("#ceb4e8",r),null!=n&&""!==n))if(n.includes(",")){let e=n.split(", ");h=[];for(let t=0;t<e.length;t++)h.push(d(c,e[t])),t<e.length-1&&h.push(", ")}else h=d(c,n);return(0,l.jsxs)("span",{children:[s,":",o,d(i,"("),h,d(i,")")]})}o.propTypes={children:s().node.isRequired};const h=o},8453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var n=r(6540);const s={},l=n.createContext(s);function c(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);