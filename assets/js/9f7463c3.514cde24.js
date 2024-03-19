"use strict";(self.webpackChunkgw_2_pathing_wiki=self.webpackChunkgw_2_pathing_wiki||[]).push([[2772,54],{7565:(e,i,s)=>{s.r(i),s.d(i,{default:()=>v,themeOptions:()=>x});var r=s(6540),n=s(5556),t=s.n(n),a=s(7733),l=s(3030),c=s(4671),o=s(3881),d=s(8933),u=s(6780),p=s(9591),h=s(618),g=s(3231),b=s(352),m=s(9483),k=s(9118),w=s(410),f=s(4848);const x=(0,w.A)({palette:{mode:"dark",primary:{main:"#3f51b5"},secondary:{main:"#f50057"},background:{default:"#353333",paper:"#383f4a"},text:{primary:"#ffffff",secondary:"rgba(251,251,251,0.6)"}}});function y(e){const{row:i}=e,[s,n]=r.useState(!1);return(0,f.jsxs)(r.Fragment,{children:[(0,f.jsxs)(g.A,{children:[(0,f.jsx)(u.A,{children:(0,f.jsx)(c.A,{"aria-label":"expand row",size:"small",onClick:()=>n(!s),children:s?(0,f.jsx)(k.A,{}):(0,f.jsx)(m.A,{})})}),(0,f.jsx)(u.A,{component:"th",scope:"row",children:(0,f.jsx)("a",{href:i.classLink,children:(0,f.jsx)("code",{style:{backgroundColor:"#2d2e2d"},children:i.class})})}),(0,f.jsx)(u.A,{children:i.description})]}),(0,f.jsx)(g.A,{children:(0,f.jsx)(u.A,{style:{padding:0},colSpan:3,children:(0,f.jsx)(l.A,{in:s,timeout:"auto",unmountOnExit:!0,children:(0,f.jsx)(a.A,{sx:{margin:0,padding:0},children:(0,f.jsxs)(o.A,{size:"small","aria-label":"functions",children:[(0,f.jsx)(h.A,{children:(0,f.jsxs)(g.A,{children:[(0,f.jsx)(u.A,{children:"Function"}),(0,f.jsx)(u.A,{children:"Description"})]})}),(0,f.jsx)(d.A,{children:i.functions&&i.functions.map((e=>(0,f.jsxs)(g.A,{children:[(0,f.jsx)(u.A,{component:"th",scope:"row",children:(0,f.jsx)("a",{href:e.link,children:(0,f.jsx)("code",{style:{backgroundColor:"#2d2e2d"},children:e.name})})}),(0,f.jsx)(u.A,{children:e.description})]},e.name)))})]})})})})})]})}function v(e){return(0,f.jsx)(b.A,{theme:x,children:(0,f.jsx)(p.A,{children:(0,f.jsxs)(o.A,{sx:{backgroundColor:"#323232"},children:[(0,f.jsx)(h.A,{style:{backgroundColor:"#232323"},children:(0,f.jsxs)(g.A,{children:[(0,f.jsx)(u.A,{}),(0,f.jsx)(u.A,{children:"Class"}),(0,f.jsx)(u.A,{children:"Description"})]})}),(0,f.jsx)(d.A,{style:{padding:0},children:e.rows&&e.rows.map((e=>(0,f.jsx)(y,{row:e},e.class)))})]})})})}y.propTypes={row:t().shape({description:t().string.isRequired,functions:t().arrayOf(t().shape({description:t().string.isRequired,parameters:t().string.isRequired,name:t().string.isRequired})).isRequired,classLink:t().string.isRequired,class:t().string.isRequired}).isRequired}},6378:(e,i,s)=>{s.r(i),s.d(i,{default:()=>a});var r=s(7565),n=s(4848);const t=[["Debug","/docs/lua-scripting/lua-lib/debug","Provides access to various debugging functions which are useful for testing and debugging your scripts.",[{name:"Debug:Print",description:"Writes a message out to the script console.",link:"/docs/lua-scripting/lua-lib/debug#debugprint"},{name:"Debug:Warn",description:"Writes a warning out to the script console.",link:"/docs/lua-scripting/lua-lib/debug#debugwarn"},{name:"Debug:Error",description:"Writes an error out to the script console.",link:"/docs/lua-scripting/lua-lib/debug#debugerror"},{name:"Debug:Watch",description:"Adds a static value or a table to the watch panel in the script console.",link:"/docs/lua-scripting/lua-lib/debug#debugwatch"},{name:"Debug:ClearWatch",description:"Stops watching a static value or table.",link:"/docs/lua-scripting/lua-lib/debug#debugclearwatch"}]],["Event","/docs/lua-scripting/lua-lib/event","Provides the OnTick function used to call functions every tick.",[{name:"Event:OnTick",description:"Registers the provided function with the tick handler. The provided function will be called every tick.",link:"/docs/lua-scripting/lua-lib/event"}]],["Instance","/docs/lua-scripting/lua-lib/instance","Provides the ability to create new instances of various pathing types, which can then be used in other functions.",[{name:"Instance:Vector3",description:"Creates a new Vector3.",link:"/docs/lua-scripting/lua-lib/instance#ivector3"},{name:"Instance:Color",description:"Creates a new Color.",link:"/docs/lua-scripting/lua-lib/instance#icolor"},{name:"Instance:Marker",description:"Creates a new Marker.",link:"/docs/lua-scripting/lua-lib/instance#imarker"},{name:"Instance:Guid",description:"Creates a new Guid.",link:"/docs/lua-scripting/lua-lib/instance#iguid"},{name:"Instance:Texture",description:"Gets a Texture by Asset ID from the public CDN.",link:"/docs/lua-scripting/lua-lib/instance#itexture"},{name:"Instance:Texture",description:"Gets a Texture from a marker pack.",link:"/docs/lua-scripting/lua-lib/instance#itexture-1"}]],["Menu","/docs/lua-scripting/lua-lib/menu","Provides the ability to create and remove menus for script functions in the Pathing UI.",[{name:"Menu:Add",description:"Adds a new menu.",link:"/docs/lua-scripting/lua-lib/menu#menuadd"},{name:"Menu:Remove",description:"Removes the specified menu item.",link:"/docs/lua-scripting/lua-lib/menu#menuremove"}]],["Mumble","/docs/lua-scripting/lua-lib/mumble","Provides access to all mumble information, provided in the form of various classes, enums and fields.",[{name:"N/A",description:"The mumble class is used to access the mumble info and has no global functions.",link:"/docs/lua-scripting/lua-lib/mumble"}]],["Pack","/docs/lua-scripting/lua-lib/pack","Provides the ability to execute scripts and create new markers.",[{name:"Pack:Require",description:"Executes a script in the marker pack.",link:"/docs/lua-scripting/lua-lib/pack#packrequire"},{name:"Pack:CreateMarker",description:"Creates a new marker within the marker pack.",link:"/docs/lua-scripting/lua-lib/pack#packcreatemarker"}]],["User","/docs/lua-scripting/lua-lib/user","Provides the ability to set the user's clipboard",[{name:"SetClipboard",description:"Sets the user's clipboard to the provided value.",link:"/docs/lua-scripting/lua-lib/user"}]],["World","/docs/lua-scripting/lua-lib/world","Provides access to many utility functions used to access categories and pathables (markers/trails) within the world.",[{name:"World:CategoryByType",description:"Finds and returns a category based on the provided type.",link:"/docs/lua-scripting/lua-lib/world#worldcategorybytype"},{name:"World:PathableByGuid",description:"Returns a pathable based on the provided guid.",link:"/docs/lua-scripting/lua-lib/world#worldpathablebyguid"},{name:"World:PathablesByGuid",description:"Returns a table of pathables based on the provided guid.",link:"/docs/lua-scripting/lua-lib/world#worldpathablesbyguid"},{name:"World:MarkerByGuid",description:"Returns a marker based on the provided guid.",link:"/docs/lua-scripting/lua-lib/world#worldmarkerbyguid"},{name:"World:GetClosestMarker",description:"Returns the closest marker.",link:"/docs/lua-scripting/lua-lib/world#worldgetclosestmarker"},{name:"World:GetClosestMarker(category)",description:"Returns the closest marker directly within the specified category.",link:"/docs/lua-scripting/lua-lib/world#worldgetclosestmarkercategory"},{name:"World:GetClosestMarkers",description:"Returns the specified number of the closest markers to the player.",link:"/docs/lua-scripting/lua-lib/world#worldgetclosestmarkers"},{name:"World:GetClosestMarkers(category, quantity)",description:"Returns the specified number of the closest markers to the player within the specified category.",link:"/docs/lua-scripting/lua-lib/world#worldgetclosestmarkerscategory-quantity"},{name:"World:TrailByGuid",description:"Returns a trail based on the provided guid.",link:"/docs/lua-scripting/lua-lib/world#worldtrailbyguid"}]]].map((e=>{return i=e[0],s=e[1],r=e[2],n=e[3],{class:i,classLink:s,description:r,functions:n};var i,s,r,n}));function a(){return(0,n.jsx)(r.default,{rows:t})}}}]);