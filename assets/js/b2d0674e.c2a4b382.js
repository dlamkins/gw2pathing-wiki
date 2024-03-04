"use strict";(self.webpackChunkgw_2_pathing_wiki=self.webpackChunkgw_2_pathing_wiki||[]).push([[291,8608,2772,54],{727:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var i=r(4848),a=r(8453),n=r(1470),s=r(9365),l=r(6378),o=r(4774);const c={id:"api_intro",title:"Overview",hide_table_of_contents:!1},u=void 0,d={id:"lua-scripting/lua-lib/api_intro",title:"Overview",description:"The purpose of this page is to provide an overview of all the classes, functions, and types available in the Pathing API. It won't go into detail on how to use them,",source:"@site/docs/lua-scripting/lua-lib/api_intro.mdx",sourceDirName:"lua-scripting/lua-lib",slug:"/lua-scripting/lua-lib/api_intro",permalink:"/docs/lua-scripting/lua-lib/api_intro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"api_intro",title:"Overview",hide_table_of_contents:!1},sidebar:"marker-dev-sidebar",previous:{title:"What's Next?",permalink:"/docs/lua-scripting/lua-tutorials/whats-next"},next:{title:"Script-Filter",permalink:"/docs/lua-scripting/lua-script-attr/script-filter"}},h={},p=[{value:"Script Attributes",id:"script-attributes",level:2},{value:"Globals",id:"globals",level:2},{value:"Types",id:"types",level:2}];function m(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The purpose of this page is to provide an overview of all the classes, functions, and types available in the Pathing API. It won't go into detail on how to use them,\nbut can be used as a quick reference for when you need to look up a class, function, or type and aren't sure where it might be."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"script-attributes",children:"Script Attributes"}),"\n",(0,i.jsxs)(t.p,{children:["Script Attributes are attribute tags used on markers in your ",(0,i.jsx)(t.code,{children:"pack.xml"})," in order to execute Lua functions. They provide interoperability between your scripts and your markers and trails.\nThat's a fancy way of saying you can use them to interact with your markers and trails in your Lua scripts."]}),"\n",(0,i.jsx)(t.p,{children:"Here's an example of a marker with a Script Attribute:"}),"\n",(0,i.jsxs)(n.A,{children:[(0,i.jsx)(s.A,{value:"xml",label:"pack.xml",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",metastring:'title="pack.xml"',children:'<POI ... script-once="SaySomething(Woah!)" guid="aWk9ZRjiAUanhexdaUdYWA=="/>\n'})})}),(0,i.jsx)(s.A,{value:"pack-lua",label:"pack.lua",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",metastring:'title="pack.lua"',children:'-- The script must be required in order to be used\nPack:Require("/Data/ExamplePack/Scripts/script.lua")\n'})})}),(0,i.jsx)(s.A,{value:"script-lua",label:"script.lua",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",metastring:'title="/Data/ExamplePack/Scripts/script.lua"',children:'-- Notice we use the default `marker` parameter, then our own custom `message` parameter\nfunction SaySomething(marker, message)\n    Debug:Print("Message from marker " .. marker.Guid .. ": " .. message)\nend\n'})})}),(0,i.jsx)(s.A,{value:"output",lable:"Output",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-md",metastring:'title="Output"',children:"    Message from marker aWk9ZRjiAUanhexdaUdYWA: Woah!\n"})})})]}),"\n",(0,i.jsxs)(t.p,{children:["In this example, the ",(0,i.jsx)(t.code,{children:"script-once"})," attribute is used to call the ",(0,i.jsx)(t.code,{children:"SaySomething"})," function in the Lua script. The ",(0,i.jsx)(t.code,{children:"marker"})," parameter is automatically passed to the function, and the ",(0,i.jsx)(t.code,{children:"message"})," parameter is passed from the ",(0,i.jsx)(t.code,{children:"script-once"})," attribute."]}),"\n",(0,i.jsx)(t.p,{children:"Every script attribute will execute at different times and have different parameters, making them all useful in different ways depending on what you are trying to accomplish. Below is a list of all script attributes with a brief description.\nYou can click on the attribute name to see more information about it."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Script Attribute"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Default Parameters"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"../lua-script-attr/script-filter",children:"script-filter"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["marker(",(0,i.jsx)(t.a,{href:"marker",children:(0,i.jsx)(t.code,{children:"Marker"})}),")"]}),(0,i.jsx)(t.td,{children:"Executes every frame if it is determined that the attached marker should be visible."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"../lua-script-attr/script-focus",children:"script-focus"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["marker(",(0,i.jsx)(t.a,{href:"marker",children:(0,i.jsx)(t.code,{children:"Marker"})}),"), isFocused(",(0,i.jsx)(t.code,{children:"boolean"}),")"]}),(0,i.jsxs)(t.td,{children:["Executes when a marker is focused (the player is within the marker's ",(0,i.jsx)(t.code,{children:"triggerRange"}),")."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"../lua-script-attr/script-once",children:"script-once"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["marker(",(0,i.jsx)(t.a,{href:"marker",children:(0,i.jsx)(t.code,{children:"Marker"})}),")"]}),(0,i.jsx)(t.td,{children:"Executes once when the marker is loaded."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"../lua-script-attr/script-tick",children:"script-tick"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["marker(",(0,i.jsx)(t.a,{href:"marker",children:(0,i.jsx)(t.code,{children:"Marker"})}),"), gameTime(",(0,i.jsx)(t.a,{href:"gametime",children:(0,i.jsx)(t.code,{children:"GameTime"})}),")"]}),(0,i.jsx)(t.td,{children:"Executes once every in-game tick (typically every frame, but potentially less depending on configuration)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"../lua-script-attr/script-trigger",children:"script-trigger"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["marker(",(0,i.jsx)(t.a,{href:"marker",children:(0,i.jsx)(t.code,{children:"Marker"})}),"), isAutoTriggered(",(0,i.jsx)(t.code,{children:"boolean"}),")"]}),(0,i.jsxs)(t.td,{children:["Executes when a marker is triggered (the player is within ",(0,i.jsx)(t.code,{children:"triggerRange"})," and ",(0,i.jsx)(t.code,{children:"autoTrigger"})," is on or the player has pressed their interact key)."]})]})]})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"globals",children:"Globals"}),"\n",(0,i.jsx)(t.p,{children:"The Pathing API provides a number of global classes and functions that you can use in your Lua scripts. These classes and functions are used to interact with the game world, markers, trails, and more."}),"\n",(0,i.jsx)(t.p,{children:"Global classes are always available and can be used without any special setup. Their functions can be called directly from your Lua scripts by using the class name followed by a colon and the function name, like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",children:'Debug:Print("Hello, world!")\n'})}),"\n",(0,i.jsx)(t.p,{children:"Below is a list of all global classes and their functions. Clicking on the arrow next to the class name will expand their function list, and clicking on the class itself will take you to its page in the docs."}),"\n",(0,i.jsx)(l.default,{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"types",children:"Types"}),"\n",(0,i.jsx)(t.p,{children:"The Pathing API also provides a number of types that you'll need to explore to get information about various things. These types are used to represent various objects in the game world, such as markers, trails, and more. They all have their own fields and helper functions."}),"\n",(0,i.jsxs)(t.p,{children:["For example, if I wanted to get the closest marker's position, I could use the ",(0,i.jsx)(t.code,{children:"World:GetClosestMarker"})," global function and then reference the returned ",(0,i.jsx)(t.a,{href:"/docs/lua-scripting/lua-lib/marker",children:(0,i.jsx)(t.code,{children:"Marker"})}),"'s ",(0,i.jsx)(t.code,{children:"Position"})," field, like this:"]}),"\n",(0,i.jsxs)(n.A,{children:[(0,i.jsx)(s.A,{value:"lua",label:"Lua",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",metastring:'title="script.lua"',children:'local closestMarker = World:GetClosestMarker()\nlocal closestMarkerPosition = closestMarker.Position\n\nDebug:Print("The closest marker\'s position is X: " .. closestMarkerPosition.X .. ", Y: " .. closestMarkerPosition.Y .. ", Z: " .. closestMarkerPosition.Z)\n'})})}),(0,i.jsx)(s.A,{value:"output",label:"Output",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-md",metastring:'title="Output"',children:"The closest marker's position is X: 0, Y: 0, Z: 0\n"})})})]}),"\n",(0,i.jsx)(t.p,{children:"Below is a list of all types and any helper functions they may have. Clicking on the arrow next to the type name will expand their function list, and clicking on the type itself will take you to its page in the docs."}),"\n",(0,i.jsx)(o.default,{})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>s});r(6540);var i=r(4164);const a={tabItem:"tabItem_Ymn6"};var n=r(4848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,s),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>j});var i=r(6540),a=r(4164),n=r(3104),s=r(6347),l=r(205),o=r(7485),c=r(1682),u=r(9466);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:i,default:a}}=e;return{value:t,label:r,attributes:i,default:a}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(n),(0,i.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(a.location.search);t.set(n,e),a.replace({...a.location,search:t.toString()})}),[n,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,n=h(e),[s,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:n}))),[c,d]=m({queryString:r,groupId:a}),[g,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,n]=(0,u.Dv)(r);return[a,(0,i.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:a}),k=(()=>{const e=c??g;return p({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{k&&o(k)}),[k]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,n]),tabValues:n}}var b=r(2303);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(4848);function x(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),a=l[r].value;a!==i&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...n,className:(0,a.A)("tabs__item",k.tabItem,n?.className,{"tabs__item--active":i===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const n=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=g(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",k.tabList),children:[(0,f.jsx)(x,{...e,...t}),(0,f.jsx)(y,{...e,...t})]})}function j(e){const t=(0,b.A)();return(0,f.jsx)(v,{...e,children:d(e.children)},String(t))}},7565:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j,themeOptions:()=>y});var i=r(6540),a=r(5556),n=r.n(a),s=r(7733),l=r(3030),o=r(4671),c=r(3881),u=r(8933),d=r(6780),h=r(9591),p=r(618),m=r(3231),g=r(5916),b=r(9483),k=r(9118),f=r(410),x=r(4848);const y=(0,f.A)({palette:{mode:"dark",primary:{main:"#3f51b5"},secondary:{main:"#f50057"},background:{default:"#353333",paper:"#383f4a"},text:{primary:"#ffffff",secondary:"rgba(251,251,251,0.6)"}}});function v(e){const{row:t}=e,[r,a]=i.useState(!1);return(0,x.jsxs)(i.Fragment,{children:[(0,x.jsxs)(m.A,{children:[(0,x.jsx)(d.A,{children:(0,x.jsx)(o.A,{"aria-label":"expand row",size:"small",onClick:()=>a(!r),children:r?(0,x.jsx)(k.A,{}):(0,x.jsx)(b.A,{})})}),(0,x.jsx)(d.A,{component:"th",scope:"row",children:(0,x.jsx)("a",{href:t.classLink,children:(0,x.jsx)("code",{style:{backgroundColor:"#2d2e2d"},children:t.class})})}),(0,x.jsx)(d.A,{children:t.description})]}),(0,x.jsx)(m.A,{children:(0,x.jsx)(d.A,{style:{padding:0},colSpan:3,children:(0,x.jsx)(l.A,{in:r,timeout:"auto",unmountOnExit:!0,children:(0,x.jsx)(s.A,{sx:{margin:0,padding:0},children:(0,x.jsxs)(c.A,{size:"small","aria-label":"functions",children:[(0,x.jsx)(p.A,{children:(0,x.jsxs)(m.A,{children:[(0,x.jsx)(d.A,{children:"Function"}),(0,x.jsx)(d.A,{children:"Description"})]})}),(0,x.jsx)(u.A,{children:t.functions&&t.functions.map((e=>(0,x.jsxs)(m.A,{children:[(0,x.jsx)(d.A,{component:"th",scope:"row",children:(0,x.jsx)("a",{href:e.link,children:(0,x.jsx)("code",{style:{backgroundColor:"#2d2e2d"},children:e.name})})}),(0,x.jsx)(d.A,{children:e.description})]},e.name)))})]})})})})})]})}function j(e){return(0,x.jsx)(g.A,{theme:y,children:(0,x.jsx)(h.A,{children:(0,x.jsxs)(c.A,{sx:{backgroundColor:"#323232"},children:[(0,x.jsx)(p.A,{style:{backgroundColor:"#232323"},children:(0,x.jsxs)(m.A,{children:[(0,x.jsx)(d.A,{}),(0,x.jsx)(d.A,{children:"Class"}),(0,x.jsx)(d.A,{children:"Description"})]})}),(0,x.jsx)(u.A,{style:{padding:0},children:e.rows&&e.rows.map((e=>(0,x.jsx)(v,{row:e},e.class)))})]})})})}v.propTypes={row:n().shape({description:n().string.isRequired,functions:n().arrayOf(n().shape({description:n().string.isRequired,parameters:n().string.isRequired,name:n().string.isRequired})).isRequired,classLink:n().string.isRequired,class:n().string.isRequired}).isRequired}},6378:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var i=r(7565),a=r(4848);const n=[["Debug","/docs/lua-scripting/lua-lib/debug","Provides access to various debugging functions which are useful for testing and debugging your scripts.",[{name:"Debug:Print",description:"Writes a message out to the script console.",link:"/docs/lua-scripting/lua-lib/debug#debugprint"},{name:"Debug:Warn",description:"Writes a warning out to the script console.",link:"/docs/lua-scripting/lua-lib/debug#debugwarn"},{name:"Debug:Error",description:"Writes an error out to the script console.",link:"/docs/lua-scripting/lua-lib/debug#debugerror"},{name:"Debug:Watch",description:"Adds a static value or a table to the watch panel in the script console.",link:"/docs/lua-scripting/lua-lib/debug#debugwatch"},{name:"Debug:ClearWatch",description:"Stops watching a static value or table.",link:"/docs/lua-scripting/lua-lib/debug#debugclearwatch"}]],["Event","/docs/lua-scripting/lua-lib/event","Provides the OnTick function used to call functions every tick.",[{name:"Event:OnTick",description:"Registers the provided function with the tick handler. The provided function will be called every tick.",link:"/docs/lua-scripting/lua-lib/event"}]],["Instance","/docs/lua-scripting/lua-lib/instance","Provides the ability to create new instances of various pathing types, which can then be used in other functions.",[{name:"Instance:Vector3",description:"Creates a new Vector3.",link:"/docs/lua-scripting/lua-lib/instance#ivector3"},{name:"Instance:Color",description:"Creates a new Color.",link:"/docs/lua-scripting/lua-lib/instance#icolor"},{name:"Instance:Marker",description:"Creates a new Marker.",link:"/docs/lua-scripting/lua-lib/instance#imarker"},{name:"Instance:Guid",description:"Creates a new Guid.",link:"/docs/lua-scripting/lua-lib/instance#iguid"},{name:"Instance:Texture",description:"Gets a Texture by Asset ID from the public CDN.",link:"/docs/lua-scripting/lua-lib/instance#itexture"},{name:"Instance:Texture",description:"Gets a Texture from a marker pack.",link:"/docs/lua-scripting/lua-lib/instance#itexture-1"}]],["Menu","/docs/lua-scripting/lua-lib/menu","Provides the ability to create and remove menus for script functions in the Pathing UI.",[{name:"Menu:Add",description:"Adds a new menu.",link:"/docs/lua-scripting/lua-lib/menu#menuadd"},{name:"Menu:Remove",description:"Removes the specified menu item.",link:"/docs/lua-scripting/lua-lib/menu#menuremove"}]],["Mumble","/docs/lua-scripting/lua-lib/mumble","Provides access to all mumble information, provided in the form of various classes, enums and fields.",[{name:"N/A",description:"The mumble class is used to access the mumble info and has no global functions.",link:"/docs/lua-scripting/lua-lib/mumble"}]],["Pack","/docs/lua-scripting/lua-lib/pack","Provides the ability to execute scripts and create new markers.",[{name:"Pack:Require",description:"Executes a script in the marker pack.",link:"/docs/lua-scripting/lua-lib/pack#packrequire"},{name:"Pack:CreateMarker",description:"Creates a new marker within the marker pack.",link:"/docs/lua-scripting/lua-lib/pack#packcreatemarker"}]],["User","/docs/lua-scripting/lua-lib/user","Provides the ability to set the user's clipboard",[{name:"SetClipboard",description:"Sets the user's clipboard to the provided value.",link:"/docs/lua-scripting/lua-lib/user"}]],["World","/docs/lua-scripting/lua-lib/world","Provides access to many utility functions used to access categories and pathables (markers/trails) within the world.",[{name:"World:CategoryByType",description:"Finds and returns a category based on the provided type.",link:"/docs/lua-scripting/lua-lib/world#worldcategorybytype"},{name:"World:PathableByGuid",description:"Returns a pathable based on the provided guid.",link:"/docs/lua-scripting/lua-lib/world#worldpathablebyguid"},{name:"World:PathablesByGuid",description:"Returns a table of pathables based on the provided guid.",link:"/docs/lua-scripting/lua-lib/world#worldpathablesbyguid"},{name:"World:MarkerByGuid",description:"Returns a marker based on the provided guid.",link:"/docs/lua-scripting/lua-lib/world#worldmarkerbyguid"},{name:"World:GetClosestMarker",description:"Returns the closest marker.",link:"/docs/lua-scripting/lua-lib/world#worldgetclosestmarker"},{name:"World:GetClosestMarker(category)",description:"Returns the closest marker directly within the specified category.",link:"/docs/lua-scripting/lua-lib/world#worldgetclosestmarkercategory"},{name:"World:GetClosestMarkers",description:"Returns the specified number of the closest markers to the player.",link:"/docs/lua-scripting/lua-lib/world#worldgetclosestmarkers"},{name:"World:GetClosestMarkers(category, quantity)",description:"Returns the specified number of the closest markers to the player within the specified category.",link:"/docs/lua-scripting/lua-lib/world#worldgetclosestmarkerscategory-quantity"},{name:"World:TrailByGuid",description:"Returns a trail based on the provided guid.",link:"/docs/lua-scripting/lua-lib/world#worldtrailbyguid"}]]].map((e=>{return t=e[0],r=e[1],i=e[2],a=e[3],{class:t,classLink:r,description:i,functions:a};var t,r,i,a}));function s(){return(0,a.jsx)(i.default,{rows:n})}},4774:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var i=r(7565),a=r(4848);const n=[["Category","/docs/lua-scripting/lua-lib/category","A marker pack category.",[{name:"GetOrAddCategoryFromNamespace",description:"Returns the requested category by namespace if one exists or creates one and returns it.",link:"/docs/lua-scripting/lua-lib/category#categorygetoraddcategoryfromnamespace"},{name:"IsVisible",description:"Indicates if the category is currently enabled by the user.",link:"/docs/lua-scripting/lua-lib/category#categoryisvisible"},{name:"Show",description:"Enables the category.",link:"/docs/lua-scripting/lua-lib/category#categoryshow"},{name:"Hide",description:"Disables the category.",link:"/docs/lua-scripting/lua-lib/category#categoryhide"},{name:"GetMarkers",description:"Returns all markers directly within the category.",link:"/docs/lua-scripting/lua-lib/category#categorygetmarkers"}]],["Color","/docs/lua-scripting/lua-lib/color","A color.",[{name:"N/A",description:"Color has no helper functions. Creation is done using the Instance global class.",link:"/docs/lua-scripting/lua-lib/color"}]],["GameTime","/docs/lua-scripting/lua-lib/gametime","A table containing two timespans.",[{name:"N/A",description:"GameTime has no helper functions.",link:"/docs/lua-scripting/lua-lib/gametime"}]],["Guid","/docs/lua-scripting/lua-lib/guid","A unique identifier.",[{name:"ToBase64",description:"Returns a base64 string representation of a GUID.",link:"/docs/lua-scripting/lua-lib/guid#guidtobase64"}]],["IBehavior","/docs/lua-scripting/lua-lib/ibehavior","A behavior.",[{name:"N/A",description:"IBehavior has no helper functions.",link:"/docs/lua-scripting/lua-lib/ibehavior"}]],["IPathable","/docs/lua-scripting/lua-lib/ipathable","A pathable.",[{name:"Focus",description:"Focuses the pathable.",link:"/docs/lua-scripting/lua-lib/ipathable#ipathablefocus"},{name:"Unfocus",description:"Unfocuses the pathable.",link:"/docs/lua-scripting/lua-lib/ipathable#ipathableunfocus"},{name:"Interact",description:"Triggers the pathable.",link:"/docs/lua-scripting/lua-lib/ipathable#ipathableinteract"}]],["Marker","/docs/lua-scripting/lua-lib/marker","A marker pack marker.",[{name:"Focus",description:"Focuses the marker.",link:"/docs/lua-scripting/lua-lib/marker#markerfocus"},{name:"Unfocus",description:"Unfocuses the marker.",link:"/docs/lua-scripting/lua-lib/marker#markerunfocus"},{name:"Interact",description:"Triggers the marker.",link:"/docs/lua-scripting/lua-lib/marker#markerinteract"},{name:"SetPos(x, y, z)",description:"Sets the x,y,z position of the marker.",link:"/docs/lua-scripting/lua-lib/marker#markersetpos"},{name:"SetPos(vector)",description:"Sets the x,y,z position of the marker.",link:"/docs/lua-scripting/lua-lib/marker#markersetpos-1"},{name:"SetPosX",description:"Set the X coordinate of the marker.",link:"/docs/lua-scripting/lua-lib/marker#markersetposx"},{name:"SetPosY",description:"Set the Y coordinate of the marker.",link:"/docs/lua-scripting/lua-lib/marker#markersetposy"},{name:"SetPosZ",description:"Set the Z coordinate of the marker.",link:"/docs/lua-scripting/lua-lib/marker#markersetposz"},{name:"SetRot(x, y, z)",description:"Set the rotation of the marker (in radians).",link:"/docs/lua-scripting/lua-lib/marker#markersetrot"},{name:"SetRot(vector)",description:"Set the rotation of the marker (in radians).",link:"/docs/lua-scripting/lua-lib/marker#markersetrot-1"},{name:"SetRotX",description:"Set the x rotation of the marker (in radians).",link:"/docs/lua-scripting/lua-lib/marker#markersetrotx"},{name:"SetRotY",description:"Set the y rotation of the marker (in radians).",link:"/docs/lua-scripting/lua-lib/marker#markersetroty"},{name:"SetRotZ",description:"Set the z rotation of the marker (in radians).",link:"/docs/lua-scripting/lua-lib/marker#markersetroty"},{name:"Remove",description:"Removes the marker.",link:"/docs/lua-scripting/lua-lib/marker#markerremove"},{name:"SetTexture(texturePath)",description:"Sets the texture of the marker.",link:"/docs/lua-scripting/lua-lib/marker#markersettexture"},{name:"SetTexture(textureId)",description:"Sets the texture of the marker using an asset from the public CDN.",link:"/docs/lua-scripting/lua-lib/marker#markersettexture-1"},{name:"GetBehavior",description:"Returns any matching behavior by its type name.",link:"/docs/lua-scripting/lua-lib/marker#markergetbehavior"}]],["Texture","/docs/lua-scripting/lua-lib/texture","A marker pack texture.",[{name:"N/A",description:"Texture has no helper functions. Creation is done using the Instance global class.",link:"/docs/lua-scripting/lua-lib/texture"}]],["Trail","/docs/lua-scripting/lua-lib/trail","A marker pack trail.",[{name:"Focus",description:"Focuses the trail.",link:"/docs/lua-scripting/lua-lib/trail#trailfocus"},{name:"Unfocus",description:"Unfocuses the trail.",link:"/docs/lua-scripting/lua-lib/trail#trailunfocus"},{name:"Interact",description:"Triggers the trail.",link:"/docs/lua-scripting/lua-lib/trail#trailinteract"},{name:"Remove",description:"Removes the trail.",link:"/docs/lua-scripting/lua-lib/trail#trailremove"},{name:"GetBehavior",description:"Returns any matching behavior by its type name.",link:"/docs/lua-scripting/lua-lib/trail#trailgetbehavior"}]],["Vector3","/docs/lua-scripting/lua-lib/vector3","A 3D vector. Has built in functions for vector operations (addition, subtraction, multiplication, etc).",[{name:"Length",description:"Calculates the length of a vector.",link:"/docs/lua-scripting/lua-lib/vector3#vector3length"},{name:"Dot",description:"Returns the dot product of this vector and another.",link:"/docs/lua-scripting/lua-lib/vector3#vector3dot"},{name:"Normalize",description:"Normalizes the vector.",link:"/docs/lua-scripting/lua-lib/vector3#vector3normalize"},{name:"Cross",description:"Returns the cross product of this vector and another.",link:"/docs/lua-scripting/lua-lib/vector3#vector3cross"}]]].map((e=>{return t=e[0],r=e[1],i=e[2],a=e[3],{class:t,classLink:r,description:i,functions:a};var t,r,i,a}));function s(){return(0,a.jsx)(i.default,{rows:n})}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var i=r(6540);const a={},n=i.createContext(a);function s(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);