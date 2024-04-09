"use strict";(self.webpackChunkgw_2_pathing_wiki=self.webpackChunkgw_2_pathing_wiki||[]).push([[49],{264:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>o,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var i=r(4848),s=r(8453);const d={id:"attributes",title:"Understanding Attributes",hide_table_of_contents:!1},n=void 0,a={id:"marker-dev/development/attributes",title:"Understanding Attributes",description:"Attributes are used to modify the behavior, appearance, and functionality of markers, trails, and categories.",source:"@site/docs/marker-dev/development/attributes.md",sourceDirName:"marker-dev/development",slug:"/marker-dev/development/attributes",permalink:"/docs/marker-dev/development/attributes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"attributes",title:"Understanding Attributes",hide_table_of_contents:!1},sidebar:"marker-dev-sidebar",previous:{title:"Pack Formats",permalink:"/docs/marker-dev/development/packformats"},next:{title:"Achievement",permalink:"/docs/marker-dev/attributes/achievement"}},l={},c=[{value:"Exclusive Attributes",id:"exclusive-attributes",level:2},{value:"Attribute Prefixes",id:"attribute-prefixes",level:2},{value:"Attribute Values",id:"attribute-values",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Attributes are used to modify the behavior, appearance, and functionality of markers, trails, and categories."}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"TacO attribute names are case-sensitive.  Our documentation reflects the attribute names exactly as TacO would expect for non-exclusive attributes."})}),"\n",(0,i.jsx)(t.h2,{id:"exclusive-attributes",children:"Exclusive Attributes"}),"\n",(0,i.jsx)(t.p,{children:"Be mindful that there are some attributes exclusively supported by Blish HUD."}),"\n",(0,i.jsx)(t.p,{children:"Blish HUD exclusive attributes will be silently ignored in TacO.  That means that any behaviors or other effects they would normally provide in Blish HUD will not occur at all in TacO.  Packs using Blish HUD exclusive attributes will still otherwise run in TacO without issue."}),"\n",(0,i.jsx)(t.admonition,{title:"Need help or feedback?",type:"info",children:(0,i.jsxs)(t.p,{children:["If you need assistance or would like to provide suggestions for future attributes in Blish HUD, join our ",(0,i.jsx)(t.a,{href:"https://discord.gg/FYKN3qh",children:"Discord channel"}),"!"]})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Summary"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/bounce",children:"Bounce"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:'Allows a marker to "bounce" or rise up out of the way when triggered.'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/canfade",children:"CanFade"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"Allows a marker or trail to ignore fade features such as those which hide trails around the player or between the user and their camera."})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/cull",children:"Cull"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"By default markers and trails are rendered without culling meaning that both sides are rendered at all times. Alternative culling settings allow you to enable culling for one side or the other. For example, a trail can be made to be visible when viewed from below."})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/defaulttoggle",children:"DefaultToggle"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"Indicates if the category should be enabled by default."})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/festival",children:"Festival"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"Hides the marker or trail if one of the specified festivals is not active."})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/invertbehavior",children:"InvertBehavior"})}),(0,i.jsx)(t.td,{children:(0,i.jsxs)(t.em,{children:["If enabled, the ",(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/behavior",children:"behavior"})," filter is inverted.  By taking advantage of duplicate ",(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/guid",children:"GUIDs"})," on a second marker you can have markers which are displayed only while the triggered marker is hidden."]})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/ishidden",children:"IsHidden"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"Prevents the category from being displayed in the category menu."})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/iswall",children:"IsWall"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"If the trail should be displayed on its side as a wall instead of a flat trail. Good for indicating a boundary."})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/maptype",children:"MapType"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"Hides the marker or trail if the current map is not one of the specified map types."})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/mount",children:"Mount"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"Hides the marker or trail if the player is not currently riding one of the specified mounts."})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/occlude",children:"Occlude"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"Allows a marker to occlude the 3D Pathing elements behind it.  If enabled, the marker does not require a texture."})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/profession",children:"Profession"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"Hides the marker or trail if the player is not currently one of the specified professions."})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/race",children:"Race"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"Hides the marker or trail if the player is not currently one of the specified races."})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/rotate",children:"Rotate"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"Allows you to statically rotate a marker instead of it automatically facing the player. Value is in degrees. Rotation is applied first to the x axis, then to y, and finally to z."})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/schedule",children:"Schedule"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"Hides the marker outside of the specified schedule. Good for showing markers only during their associated scheduled meta event, day of the week, etc. All scheduling is based on UTC."})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/script",children:"Script"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"Allows you to trigger Lua functions or determine if a marker is visible using a Lua function."})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/showhide",children:"ShowHide"})}),(0,i.jsx)(t.td,{children:(0,i.jsxs)(t.em,{children:["Allows showing or hiding a specified category when triggered.  Similar in behavior to the ",(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/toggle",children:"Toggle"})," attribute."]})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/specialization",children:"Specialization"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"Hides the marker or trail if the player is not currently one of the specified specializations."})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/tip",children:"Tip"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"Allows you to display a tooltip on markers on the minimap or categories in the category dropdown."})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/toggle",children:"Toggle"})}),(0,i.jsx)(t.td,{children:(0,i.jsxs)(t.em,{children:["Toggles a category on or off.  Similar in behavior to the ",(0,i.jsx)(t.a,{href:"/docs/marker-dev/attributes/showhide",children:"Show & Hide"})," attributes."]})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"attribute-prefixes",children:"Attribute Prefixes"}),"\n",(0,i.jsxs)(t.p,{children:["Blish HUD supports prefixed attributes.  This is to say that any attribute prefixed by ",(0,i.jsx)(t.code,{children:"bh-"})," will be stripped of its prefix and used as a normal attribute.  This allows you to create markers, trails, and categories that differ in functionality depending on if the pack is loaded by Blish HUD or TacO.  This works because TacO will ignore these attributes entirely as they don't match any of its supported attributes."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Example:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<MarkerCategory name="overlay" displayname="You\'re using TacO!" bh-displayname="You\'re using Blish HUD!" />\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["When using prefixed attributes, ensure they are specified after the attribute you wish you override.  Anything that inherits attributes can still override a prefixed attribute if it itself defines its own overriding attribute, ",(0,i.jsx)(t.em,{children:"prefixed or not"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"attribute-values",children:"Attribute Values"}),"\n",(0,i.jsx)(t.p,{children:"As the marker pack format is XML based, there are limitations to what characters can be used as an attribute value.  The table below indicates the values that must be escaped in order to be considered proper XML.  Both Blish HUD and TacO have forgiving XML parsers which will do their best to interpret the value, but not all libraries or overlays are capable of this.  For the best result, you the table below when using any of the specified characters."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Character"}),(0,i.jsx)(t.th,{children:"Escaped Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"&lt;"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:">"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"&gt;"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"&"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"&amp;"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"'"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"&apos;"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"'})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"&quot;"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"New Line"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"&#xA;"})})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>a});var i=r(6540);const s={},d=i.createContext(s);function n(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);