"use strict";(self.webpackChunkgw_2_pathing_wiki=self.webpackChunkgw_2_pathing_wiki||[]).push([[8608,54],{7565:(e,i,r)=>{r.r(i),r.d(i,{default:()=>v,themeOptions:()=>y});var t=r(6540),a=r(5556),s=r.n(a),n=r(7733),o=r(3030),l=r(4671),c=r(3881),u=r(8933),d=r(6780),p=r(9591),m=r(618),h=r(3231),g=r(352),k=r(9483),b=r(9118),f=r(410),x=r(4848);const y=(0,f.A)({palette:{mode:"dark",primary:{main:"#3f51b5"},secondary:{main:"#f50057"},background:{default:"#353333",paper:"#383f4a"},text:{primary:"#ffffff",secondary:"rgba(251,251,251,0.6)"}}});function A(e){const{row:i}=e,[r,a]=t.useState(!1);return(0,x.jsxs)(t.Fragment,{children:[(0,x.jsxs)(h.A,{children:[(0,x.jsx)(d.A,{children:(0,x.jsx)(l.A,{"aria-label":"expand row",size:"small",onClick:()=>a(!r),children:r?(0,x.jsx)(b.A,{}):(0,x.jsx)(k.A,{})})}),(0,x.jsx)(d.A,{component:"th",scope:"row",children:(0,x.jsx)("a",{href:i.classLink,children:(0,x.jsx)("code",{style:{backgroundColor:"#2d2e2d"},children:i.class})})}),(0,x.jsx)(d.A,{children:i.description})]}),(0,x.jsx)(h.A,{children:(0,x.jsx)(d.A,{style:{padding:0},colSpan:3,children:(0,x.jsx)(o.A,{in:r,timeout:"auto",unmountOnExit:!0,children:(0,x.jsx)(n.A,{sx:{margin:0,padding:0},children:(0,x.jsxs)(c.A,{size:"small","aria-label":"functions",children:[(0,x.jsx)(m.A,{children:(0,x.jsxs)(h.A,{children:[(0,x.jsx)(d.A,{children:"Function"}),(0,x.jsx)(d.A,{children:"Description"})]})}),(0,x.jsx)(u.A,{children:i.functions&&i.functions.map((e=>(0,x.jsxs)(h.A,{children:[(0,x.jsx)(d.A,{component:"th",scope:"row",children:(0,x.jsx)("a",{href:e.link,children:(0,x.jsx)("code",{style:{backgroundColor:"#2d2e2d"},children:e.name})})}),(0,x.jsx)(d.A,{children:e.description})]},e.name)))})]})})})})})]})}function v(e){return(0,x.jsx)(g.A,{theme:y,children:(0,x.jsx)(p.A,{children:(0,x.jsxs)(c.A,{sx:{backgroundColor:"#323232"},children:[(0,x.jsx)(m.A,{style:{backgroundColor:"#232323"},children:(0,x.jsxs)(h.A,{children:[(0,x.jsx)(d.A,{}),(0,x.jsx)(d.A,{children:"Class"}),(0,x.jsx)(d.A,{children:"Description"})]})}),(0,x.jsx)(u.A,{style:{padding:0},children:e.rows&&e.rows.map((e=>(0,x.jsx)(A,{row:e},e.class)))})]})})})}A.propTypes={row:s().shape({description:s().string.isRequired,functions:s().arrayOf(s().shape({description:s().string.isRequired,parameters:s().string.isRequired,name:s().string.isRequired})).isRequired,classLink:s().string.isRequired,class:s().string.isRequired}).isRequired}},4774:(e,i,r)=>{r.r(i),r.d(i,{default:()=>n});var t=r(7565),a=r(4848);const s=[["Category","/docs/lua-scripting/lua-lib/category","A marker pack category.",[{name:"GetOrAddCategoryFromNamespace",description:"Returns the requested category by namespace if one exists or creates one and returns it.",link:"/docs/lua-scripting/lua-lib/category#categorygetoraddcategoryfromnamespace"},{name:"IsVisible",description:"Indicates if the category is currently enabled by the user.",link:"/docs/lua-scripting/lua-lib/category#categoryisvisible"},{name:"Show",description:"Enables the category.",link:"/docs/lua-scripting/lua-lib/category#categoryshow"},{name:"Hide",description:"Disables the category.",link:"/docs/lua-scripting/lua-lib/category#categoryhide"},{name:"GetMarkers",description:"Returns all markers directly within the category.",link:"/docs/lua-scripting/lua-lib/category#categorygetmarkers"},{name:"GetTrails",description:"Returns all trails directly within the category.",link:"/docs/lua-scripting/lua-lib/category#categorygettrails"}]],["Color","/docs/lua-scripting/lua-lib/color","A color.",[{name:"N/A",description:"Color has no helper functions. Creation is done using the Instance global class.",link:"/docs/lua-scripting/lua-lib/color"}]],["GameTime","/docs/lua-scripting/lua-lib/gametime","A table containing two timespans.",[{name:"N/A",description:"GameTime has no helper functions.",link:"/docs/lua-scripting/lua-lib/gametime"}]],["Guid","/docs/lua-scripting/lua-lib/guid","A unique identifier.",[{name:"ToBase64",description:"Returns a base64 string representation of a GUID.",link:"/docs/lua-scripting/lua-lib/guid#guidtobase64"}]],["IBehavior","/docs/lua-scripting/lua-lib/ibehavior","A behavior.",[{name:"N/A",description:"IBehavior has no helper functions.",link:"/docs/lua-scripting/lua-lib/ibehavior"}]],["IPathable","/docs/lua-scripting/lua-lib/ipathable","A pathable.",[{name:"Focus",description:"Focuses the pathable.",link:"/docs/lua-scripting/lua-lib/ipathable#ipathablefocus"},{name:"Unfocus",description:"Unfocuses the pathable.",link:"/docs/lua-scripting/lua-lib/ipathable#ipathableunfocus"},{name:"Interact",description:"Triggers the pathable.",link:"/docs/lua-scripting/lua-lib/ipathable#ipathableinteract"}]],["Marker","/docs/lua-scripting/lua-lib/marker","A marker pack marker.",[{name:"Focus",description:"Focuses the marker.",link:"/docs/lua-scripting/lua-lib/marker#markerfocus"},{name:"Unfocus",description:"Unfocuses the marker.",link:"/docs/lua-scripting/lua-lib/marker#markerunfocus"},{name:"Interact",description:"Triggers the marker.",link:"/docs/lua-scripting/lua-lib/marker#markerinteract"},{name:"SetPos(x, y, z)",description:"Sets the x,y,z position of the marker.",link:"/docs/lua-scripting/lua-lib/marker#markersetpos"},{name:"SetPos(vector)",description:"Sets the x,y,z position of the marker.",link:"/docs/lua-scripting/lua-lib/marker#markersetpos-1"},{name:"SetPosX",description:"Set the X coordinate of the marker.",link:"/docs/lua-scripting/lua-lib/marker#markersetposx"},{name:"SetPosY",description:"Set the Y coordinate of the marker.",link:"/docs/lua-scripting/lua-lib/marker#markersetposy"},{name:"SetPosZ",description:"Set the Z coordinate of the marker.",link:"/docs/lua-scripting/lua-lib/marker#markersetposz"},{name:"SetRot(x, y, z)",description:"Set the rotation of the marker (in radians).",link:"/docs/lua-scripting/lua-lib/marker#markersetrot"},{name:"SetRot(vector)",description:"Set the rotation of the marker (in radians).",link:"/docs/lua-scripting/lua-lib/marker#markersetrot-1"},{name:"SetRotX",description:"Set the x rotation of the marker (in radians).",link:"/docs/lua-scripting/lua-lib/marker#markersetrotx"},{name:"SetRotY",description:"Set the y rotation of the marker (in radians).",link:"/docs/lua-scripting/lua-lib/marker#markersetroty"},{name:"SetRotZ",description:"Set the z rotation of the marker (in radians).",link:"/docs/lua-scripting/lua-lib/marker#markersetroty"},{name:"Remove",description:"Removes the marker.",link:"/docs/lua-scripting/lua-lib/marker#markerremove"},{name:"SetTexture(texturePath)",description:"Sets the texture of the marker.",link:"/docs/lua-scripting/lua-lib/marker#markersettexture"},{name:"SetTexture(textureId)",description:"Sets the texture of the marker using an asset from the public CDN.",link:"/docs/lua-scripting/lua-lib/marker#markersettexture-1"},{name:"GetBehavior",description:"Returns any matching behavior by its type name.",link:"/docs/lua-scripting/lua-lib/marker#markergetbehavior"}]],["Texture","/docs/lua-scripting/lua-lib/texture","A marker pack texture.",[{name:"N/A",description:"Texture has no helper functions. Creation is done using the Instance global class.",link:"/docs/lua-scripting/lua-lib/texture"}]],["Trail","/docs/lua-scripting/lua-lib/trail","A marker pack trail.",[{name:"Focus",description:"Focuses the trail.",link:"/docs/lua-scripting/lua-lib/trail#trailfocus"},{name:"Unfocus",description:"Unfocuses the trail.",link:"/docs/lua-scripting/lua-lib/trail#trailunfocus"},{name:"Interact",description:"Triggers the trail.",link:"/docs/lua-scripting/lua-lib/trail#trailinteract"},{name:"Remove",description:"Removes the trail.",link:"/docs/lua-scripting/lua-lib/trail#trailremove"},{name:"GetBehavior",description:"Returns any matching behavior by its type name.",link:"/docs/lua-scripting/lua-lib/trail#trailgetbehavior"}]],["Vector3","/docs/lua-scripting/lua-lib/vector3","A 3D vector. Has built in functions for vector operations (addition, subtraction, multiplication, etc).",[{name:"Length",description:"Calculates the length of a vector.",link:"/docs/lua-scripting/lua-lib/vector3#vector3length"},{name:"Dot",description:"Returns the dot product of this vector and another.",link:"/docs/lua-scripting/lua-lib/vector3#vector3dot"},{name:"Normalize",description:"Normalizes the vector.",link:"/docs/lua-scripting/lua-lib/vector3#vector3normalize"},{name:"Cross",description:"Returns the cross product of this vector and another.",link:"/docs/lua-scripting/lua-lib/vector3#vector3cross"}]]].map((e=>{return i=e[0],r=e[1],t=e[2],a=e[3],{class:i,classLink:r,description:t,functions:a};var i,r,t,a}));function n(){return(0,a.jsx)(t.default,{rows:s})}}}]);