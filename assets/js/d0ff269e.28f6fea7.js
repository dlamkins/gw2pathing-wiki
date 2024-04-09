"use strict";(self.webpackChunkgw_2_pathing_wiki=self.webpackChunkgw_2_pathing_wiki||[]).push([[5313],{3112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=n(4848),a=n(8453),i=n(1470),l=n(9365);const s={id:"getting-started",title:"Getting Started",hide_table_of_contents:!1},o=void 0,u={id:"lua-scripting/lua-tutorials/getting-started",title:"Getting Started",description:"So you want to start scripting, huh? Great! This guide will help you get on your feet and start scripting .",source:"@site/docs/lua-scripting/lua-tutorials/getting-started.mdx",sourceDirName:"lua-scripting/lua-tutorials",slug:"/lua-scripting/lua-tutorials/getting-started",permalink:"/docs/lua-scripting/lua-tutorials/getting-started",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",hide_table_of_contents:!1},sidebar:"marker-dev-sidebar",previous:{title:"Introduction",permalink:"/docs/lua-scripting/lua-basics/intro"},next:{title:"Exploring Script Attributes",permalink:"/docs/lua-scripting/lua-tutorials/exploring-attributes"}},c={},d=[{value:"Setup",id:"setup",level:2},{value:"Your IDE",id:"your-ide",level:3},{value:"Pack Structure",id:"pack-structure",level:3},{value:"Pathing API Library",id:"pathing-api-library",level:3},{value:"pack.lua",id:"packlua",level:2}];function h(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"So you want to start scripting, huh? Great! This guide will help you get on your feet and start scripting ."}),"\n",(0,r.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(t.p,{children:"Before you can just jump into trying out scripting, there's a tiny bit of setup to be done.\nYou need to:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Install an IDE"}),"\n",(0,r.jsx)(t.li,{children:"Set up your pack structure"}),"\n",(0,r.jsx)(t.li,{children:"Download the Pathing API Library"}),"\n",(0,r.jsxs)(t.li,{children:["Set up your ",(0,r.jsx)(t.code,{children:"pack.lua"})," file"]}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"your-ide",children:"Your IDE"}),"\n",(0,r.jsx)(t.p,{children:"An Integrated Development Environment (IDE) is a program that helps you write code. There are many different IDEs out there, and ultimately it comes down to personal preference, but I'm going to recommend Visual Studio Code since it's lightweight and pretty user-friendly, and that's what I'll be using in the various screenshots you'll see throughout the tutorial."}),"\n",(0,r.jsx)(t.p,{children:"If all of this sounds like gibberish to you, don't worry, it's not as complicated as it sounds. Basically an IDE is just a fancy text editor."}),"\n",(0,r.jsxs)(t.p,{children:["If you don't already have VSCode, you can download it ",(0,r.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"here"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:['You can install the Lua extension by searching for "Lua" in the extensions tab of VSCode.',(0,r.jsx)(t.br,{}),"\n","This will give you syntax highlighting and code completion for Lua when paired with the API library."]})}),"\n",(0,r.jsx)(t.p,{children:"Once you have it installed, you can open your pack's folder as the workspace and we're ready to move on to the next step."}),"\n",(0,r.jsx)(t.h3,{id:"pack-structure",children:"Pack Structure"}),"\n",(0,r.jsx)(t.p,{children:"If you haven't already set up your pack structure, you should do that now."}),"\n",(0,r.jsx)(t.p,{children:"In order to do any scripting, we need to add a few things to your existing pack structure:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["In your pack's root folder, create a new file called ",(0,r.jsx)(t.code,{children:"pack.lua"}),". We'll dive into this more in just a bit."]}),"\n",(0,r.jsxs)(t.li,{children:["Somewhere in your pack's ",(0,r.jsx)(t.code,{children:"/Data"})," folder, create a new folder called ",(0,r.jsx)(t.code,{children:"Scripts"}),". The exact location is up to you, but I recommend putting it in ",(0,r.jsx)(t.code,{children:"/Data/YourPackName/Scripts"}),". This is where you will put all of your Lua scripts."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"pathing-api-library",children:"Pathing API Library"}),"\n",(0,r.jsx)(t.p,{children:"The Pathing API Library is a library containing information about the API, which allows for code completion and syntax highlighting in your editor."}),"\n",(0,r.jsxs)(t.p,{children:["You can download it ",(0,r.jsx)(t.a,{href:"https://github.com/dlamkins/gw2pathing-libdef",children:"here"}),"."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Click the green ",(0,r.jsx)(t.code,{children:"Code"})," button and select ",(0,r.jsx)(t.code,{children:"Download ZIP"}),".",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.img,{alt:"Download ZIP",src:n(2968).A+"",width:"759",height:"540"})]}),"\n",(0,r.jsxs)(t.li,{children:["Move the zip file into your pack's ",(0,r.jsx)(t.code,{children:"/Data"})," folder and extract it there."]}),"\n",(0,r.jsxs)(t.li,{children:["If done correctly, you should end up with a folder called ",(0,r.jsx)(t.code,{children:"gw2pathing-libdef-main"})," containing ",(0,r.jsx)(t.code,{children:"config.lua"})," and a ",(0,r.jsx)(t.code,{children:"library"})," folder inside your ",(0,r.jsx)(t.code,{children:"/Data"})," folder. After setting all of this up, your pack's folder structure should look something like this:",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.img,{alt:"Pack Structure",src:n(5681).A+"",width:"255",height:"226"})]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["If your pack is setup as a GitHub repository, you might want to add the ",(0,r.jsx)(t.code,{children:"gw2pathing-libdef-main"})," folder to your ",(0,r.jsx)(t.code,{children:".gitignore"})," file to avoid committing it to your repository.\nYou also don't need to include this folder in releases."]})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Alternatively, you can set up the library as a submodule in your repository. This way, you can easily update the library by pulling the latest changes from the main repository, but that's something for another tutorial."})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"packlua",children:"pack.lua"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"pack.lua"})," file is the entry point for your pack's scripts. This is the file that tells the Pathing module what scripts to load and when to load them. It's also where you can define global variables and functions that you want to be accessible from all of your scripts. There are two key components to the ",(0,r.jsx)(t.code,{children:"pack.lua"})," file:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The global pack table - This is a table that will be accessible from all of your scripts. Other scripts can add their own tables to this table, and you can access them from other scripts."}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"Pack:Require"})," function - This function is used to load all other scripts, in the order that they are required. This function takes a single argument, which is the path to the script you want to load."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Here's a basic example of what a ",(0,r.jsx)(t.code,{children:"pack.lua"})," file might look like:"]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(l.A,{value:"pack",label:"pack.lua",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",metastring:'title="pack.lua"',children:'-- This is a global table that will be accessible from all of your scripts\nExamplePack = {\n    -- This is a global variable that can be accessed from all of your scripts via ExamplePack.Version\n    Version = "1.0.0"\n}\n\nDebug:Print("Loading ExamplePack Version: " .. ExamplePack.Version)\n\nPack:Require("Data/ExamplePack/Scripts/script1.lua")\n\n-- Note, this has to be after the Pack:Require call or it will not exist yet\nDebug:Print(ExamplePack.Script1.Message)\n'})})}),(0,r.jsx)(l.A,{value:"script1",label:"script1.lua",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",metastring:'title="script1.lua"',children:'-- This is a global table that will be accessible from all of your scripts\nExamplePack.Script1 = {\n    -- This is a global variable that can be accessed from all of your scripts via ExamplePack.Script1.Message\n    Message = "Hello from script1.lua"\n}\n\nif ExamplePack.Version == "1.0.0" then\n    Debug:Print("Version is 1.0.0")\nend\n'})})}),(0,r.jsx)(l.A,{value:"output",label:"Output",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Loading ExamplePack Version: 1.0.0\nVersion is 1.0.0\nHello from script1.lua\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["You can also do other logic inside of your ",(0,r.jsx)(t.code,{children:"pack.lua"})," file, but it's recommended to do any heavy lifting in separate scripts."]}),"\n",(0,r.jsx)(t.p,{children:"Now that we have our pack set up and an entry point, we can start writing some scripts!"})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var i=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(6540),a=n(4164),i=n(3104),l=n(6347),s=n(205),o=n(7485),u=n(1682),c=n(9466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[u,d]=p({queryString:n,groupId:a}),[v,A]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),b=(()=>{const e=u??v;return f({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),A(e)}),[d,A,i]),tabValues:i}}var A=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=s[n].value;a!==r&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...i,className:(0,a.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function m(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=v(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(y,{...e,...t}),(0,g.jsx)(m,{...e,...t})]})}function k(e){const t=(0,A.A)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(t))}},2968:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/download-lib-187be74b0056d234003017e9e3ca6c4f.png"},5681:(e,t,n)=>{n.d(t,{A:()=>r});const r="data:image/png;base64,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"},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var r=n(6540);const a={},i=r.createContext(a);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);