"use strict";(self.webpackChunkgw_2_pathing_wiki=self.webpackChunkgw_2_pathing_wiki||[]).push([[6684],{4470:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var n=t(4848),a=t(8453),i=t(1470),o=t(9365);const l={id:"creating-a-marker",title:"Creating a Marker",hide_table_of_contents:!1},s=void 0,c={id:"lua-scripting/lua-tutorials/creating-a-marker",title:"Creating a Marker",description:"Phase 1. Upgrading the TriggerFunction",source:"@site/docs/lua-scripting/lua-tutorials/creating-a-marker.mdx",sourceDirName:"lua-scripting/lua-tutorials",slug:"/lua-scripting/lua-tutorials/creating-a-marker",permalink:"/docs/lua-scripting/lua-tutorials/creating-a-marker",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"creating-a-marker",title:"Creating a Marker",hide_table_of_contents:!1},sidebar:"marker-dev-sidebar",previous:{title:"Using Globals and Types",permalink:"/docs/lua-scripting/lua-tutorials/using-the-api"},next:{title:"Creating a Script Menu",permalink:"/docs/lua-scripting/lua-tutorials/creating-a-script-menu"}},u={},g=[{value:"Phase 1. Upgrading the TriggerFunction",id:"phase-1-upgrading-the-triggerfunction",level:3},{value:"Phase 2. Another Upgrade",id:"phase-2-another-upgrade",level:3}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"phase-1-upgrading-the-triggerfunction",children:"Phase 1. Upgrading the TriggerFunction"}),"\n",(0,n.jsxs)(r.p,{children:["Continuing on with our ",(0,n.jsx)(r.code,{children:"TriggerFunction"})," example, now we'll create a new marker above our triggered marker instead of moving the original marker."]}),"\n",(0,n.jsxs)(r.p,{children:["To create a marker, we need to make use of the ",(0,n.jsx)(r.a,{href:"/docs/lua-scripting/lua-lib/pack#packcreatemarker",children:(0,n.jsx)(r.code,{children:"Pack:CreateMarker"})})," function. Feel free to check it out."]}),"\n",(0,n.jsx)(r.p,{children:"While you can technically create a marker without passing it any attributes, it's generally a good idea to at least provide some basic attributes."}),"\n",(0,n.jsxs)(r.p,{children:["Let's change our ",(0,n.jsx)(r.code,{children:"TriggerFunction"})," to create a new marker above the position of the original marker."]}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsx)(r.p,{children:"It's a good idea to always set the category, so that the new marker can be hidden or shown by toggling your pack's categories."})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lua",metastring:'title="/Data/ExamplePack/Scripts/TriggerFunction.lua"',children:'-- We can use the World global to get a reference to the category we want to use for our new marker\n-- highlight-next-line\nlocal category = World:CategoryByType("ep.marker.category")\n\nfunction EP_TriggerFunction(marker, isAutoTrigger, customInput)\n    -- For the most part, the attribute names are the same as you\'d find in the xml\n    -- highlight-start\n    local new_marker_attr = {   \n        MapVisibility = false,\n        InGameVisibility = true,\n        Category = category, -- \n        xpos = marker.Position.X,\n        ypos = 0,\n        zpos = marker.Position.Z,\n        iconFile = "Data/ExamplePack/Markers/MarkerIcon.png",\n    }\n    -- highlight-end\n\n    if isAutoTrigger then\n        -- We can adjust the ypos after creating the initial table by just setting it again using the `.` accessor\n        -- highlight-next-line\n        new_marker_attr.ypos = marker.Position.Y + 20\n    else\n        -- highlight-next-line\n        new_marker_attr.ypos = marker.Position.Y + 50\n    end\n\n    -- Create the marker\n    -- highlight-next-line\n    local new_marker = Pack:CreateMarker(new_marker_attr)\nend\n'})}),"\n",(0,n.jsx)(r.p,{children:"Nice! We're making some real progress now. Now when you trigger the marker, a new marker should be created above the original marker."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"phase-2-another-upgrade",children:"Phase 2. Another Upgrade"}),"\n",(0,n.jsx)(r.p,{children:"Let's take this one step further and make it so that interacting with the original marker a second time will remove the new marker."}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(o.A,{value:"triggerfunc",label:"TriggerFunction.lua",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lua",metastring:'title="/Data/ExamplePack/Scripts/TriggerFunction.lua"',children:"-- Let's create a table to keep track of our new markers. We'll move the category there too\n-- highlight-start\nExamplePack.TriggerFunction = {\n    activeMarkers = {},\n    category = World:CategoryByType(\"ep.marker.category\")\n}\n-- highlight-end\n\n-- Let's watch that table so we can keep an eye on it in the console too!\n-- highlight-next-line\nDebug:Watch(\"TriggerFunction\", ExamplePack.TriggerFunction)\n\n-- We'll move the logic for spawning and removing markers to new functions\n-- highlight-next-line\nlocal function spawnNewMarker(marker, isAutoTrigger)\n    local new_marker_attr = {   \n        MapVisibility = false,\n        InGameVisibility = true,\n        -- highlight-next-line\n        Category = ExamplePack.TriggerFunction.category,\n        xpos = marker.Position.X,\n        ypos = 0,\n        zpos = marker.Position.Z,\n        iconFile = \"Data/ExamplePack/Markers/MarkerIcon.png\",\n    }\n\n    if isAutoTrigger then\n        new_marker_attr.ypos = marker.Position.Y + 20\n    else\n        new_marker_attr.ypos = marker.Position.Y + 50\n    end\n\n    local new_marker = Pack:CreateMarker(new_marker_attr)\n    -- Let's use the trigger marker's GUID to keep track of it's spawned marker\n    -- highlight-next-line\n    ExamplePack.TriggerFunction.activeMarkers[marker.GUID] = new_marker\nend\n\n-- Given a GUID, we can remove the marker from the world and then remove it's reference from our table\n-- highlight-start\nlocal function removeNewMarker(guid)\n    local spawnedMarker = ExamplePack.TriggerFunction.activeMarkers[marker.GUID]\n    if spawnedMarker then\n        spawnedMarker:Remove()\n        ExamplePack.TriggerFunction.activeMarkers[marker.GUID] = nil\n    end\nend\n-- highlight-end\n\n-- We aren't using customInput anymore, so let's take that out\n-- highlight-next-line\nfunction EP_TriggerFunction(marker, isAutoTrigger)\n    -- Now we can just perform the check here and offload the logic to the new functions\n    -- highlight-start\n    if ExamplePack.TriggerFunction.activeMarkers[marker.GUID] ~= nil then\n        removeNewMarker(marker.GUID)\n    else\n        spawnNewMarker(marker, isAutoTrigger)\n    end\n    -- highlight-end\nend\n"})})}),(0,n.jsx)(o.A,{value:"pack",label:"pack.lua",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lua",metastring:'title="pack.lua"',children:'-- Make sure you have a global table to attach your TriggerFunction table to!\n-- highlight-start\nExamplePack = {}\n-- highlight-end\n\nPack:Require("Data/ExamplePack/Scripts/TriggerFunction.lua")\n'})})}),(0,n.jsx)(o.A,{value:"xml",label:"ExamplePack.xml",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",metastring:'title="ExamplePack.xml"',children:'\x3c!-- We aren\'t asking for an extra parameter anymore, so make sure to update your script attributes!--\x3e\n\x3c!-- highlight-next-line --\x3e\n<POI ... script-trigger="EP_TriggerFunction()">\n'})})})]}),"\n",(0,n.jsx)(r.p,{children:"If you've followed along correctly, you should now be able to spawn and remove the new marker by interacting with the trigger marker!"})]})}function d(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9365:(e,r,t)=>{t.d(r,{A:()=>o});t(6540);var n=t(4164);const a={tabItem:"tabItem_Ymn6"};var i=t(4848);function o(e){let{children:r,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:t,children:r})}},1470:(e,r,t)=>{t.d(r,{A:()=>y});var n=t(6540),a=t(4164),i=t(3104),o=t(6347),l=t(205),s=t(7485),c=t(1682),u=t(9466);function g(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return g(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function d(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const a=(0,o.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,s.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(a.location.search);r.set(i,e),a.replace({...a.location,search:r.toString()})}),[i,a])]}function p(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,i=h(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!d({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:i}))),[c,g]=m({queryString:t,groupId:a}),[p,k]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,i]=(0,u.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),f=(()=>{const e=c??p;return d({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),g(e),k(e)}),[g,k,i]),tabValues:i}}var k=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function x(e){let{className:r,block:t,selectedValue:n,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const r=e.currentTarget,t=s.indexOf(r),a=l[t].value;a!==n&&(c(r),o(a))},g=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;r=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;r=s[t]??s[s.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:l.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>s.push(e),onKeyDown:g,onClick:u,...i,className:(0,a.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function w(e){let{lazy:r,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function v(e){const r=p(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,b.jsx)(x,{...e,...r}),(0,b.jsx)(w,{...e,...r})]})}function y(e){const r=(0,k.A)();return(0,b.jsx)(v,{...e,children:g(e.children)},String(r))}},8453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>l});var n=t(6540);const a={},i=n.createContext(a);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);