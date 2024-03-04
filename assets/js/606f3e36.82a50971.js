"use strict";(self.webpackChunkgw_2_pathing_wiki=self.webpackChunkgw_2_pathing_wiki||[]).push([[9586],{9631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=r(4848),a=r(8453),i=r(1470),l=r(9365);const s={id:"script-tick",title:"Script-Tick",hide_table_of_contents:!0},c=void 0,u={id:"lua-scripting/lua-script-attr/script-tick",title:"Script-Tick",description:"script-tick is executed once every in-game tick (typically every frame, but potentially less depending on configuration), providing the marker as context.",source:"@site/docs/lua-scripting/lua-script-attr/script-tick.mdx",sourceDirName:"lua-scripting/lua-script-attr",slug:"/lua-scripting/lua-script-attr/script-tick",permalink:"/docs/lua-scripting/lua-script-attr/script-tick",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"script-tick",title:"Script-Tick",hide_table_of_contents:!0},sidebar:"marker-dev-sidebar",previous:{title:"Script-Once",permalink:"/docs/lua-scripting/lua-script-attr/script-once"},next:{title:"Script-Trigger",permalink:"/docs/lua-scripting/lua-script-attr/script-trigger"}},o={},d=[{value:"Default Parameters:",id:"default-parameters",level:4},{value:"Usage",id:"usage",level:4}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"script-tick"})," is executed once every in-game tick (typically every frame, but potentially less depending on configuration), providing the marker as context."]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Because this executes on every game tick, it can impact FPS significantly if you aren't careful with your logic!"})}),"\n",(0,n.jsx)(t.h4,{id:"default-parameters",children:"Default Parameters:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"marker"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"/docs/lua-scripting/lua-lib/marker",children:(0,n.jsx)(t.code,{children:"Marker"})})}),(0,n.jsx)(t.td,{children:"A reference to the marker firing the script."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"gameTime"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"/docs/lua-scripting/lua-lib/gametime",children:(0,n.jsx)(t.code,{children:"GameTime"})})}),(0,n.jsx)(t.td,{children:"A reference to the current gameTime object."})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"xml",label:"pack.xml",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",metastring:'title="pack.xml"',children:'<marker ... script-tick="DoSomethingEveryTick(1)">\n'})})}),(0,n.jsx)(l.A,{value:"lua",label:"script.lua",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",metastring:'title="script.lua"',children:'function DoSomethingEveryTick(marker, gameTime, markerTriggerID)\n    Debug:Print("Marker " .. markerTriggerID " tick triggered")\n    -- do something else here\nend\n'})})}),(0,n.jsx)(l.A,{value:"output",label:"Output",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",metastring:'title="Example Output"',children:'"Marker 1 tick triggered"\n"Marker 1 tick triggered"\n"Marker 1 tick triggered"\n"Marker 1 tick triggered"\n"Marker 1 tick triggered"\n...\n'})})})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>l});r(6540);var n=r(4164);const a={tabItem:"tabItem_Ymn6"};var i=r(4848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(6540),a=r(4164),i=r(3104),l=r(6347),s=r(205),c=r(7485),u=r(1682),o=r(9466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=p(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[u,d]=m({queryString:r,groupId:a}),[g,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,o.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),b=(()=>{const e=u??g;return h({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),o=e=>{const t=e.currentTarget,r=c.indexOf(t),a=s[r].value;a!==n&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:d,onClick:o,...i,className:(0,a.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function k(e){let{lazy:t,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(k,{...e,...t})]})}function j(e){const t=(0,f.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>s});var n=r(6540);const a={},i=n.createContext(a);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);