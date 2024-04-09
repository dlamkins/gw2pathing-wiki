"use strict";(self.webpackChunkgw_2_pathing_wiki=self.webpackChunkgw_2_pathing_wiki||[]).push([[7865],{6584:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>h,toc:()=>o});var r=s(4848),n=s(8453);const i={id:"schedule",title:"Schedule",description:"Hides the marker outside of the specified schedule. Good for showing markers only during their associated scheduled meta event, day of the week, etc. All scheduling is based on UTC.",hide_table_of_contents:!0},d=void 0,h={id:"marker-dev/attributes/schedule",title:"Schedule",description:"Hides the marker outside of the specified schedule. Good for showing markers only during their associated scheduled meta event, day of the week, etc. All scheduling is based on UTC.",source:"@site/docs/marker-dev/attributes/schedule.md",sourceDirName:"marker-dev/attributes",slug:"/marker-dev/attributes/schedule",permalink:"/docs/marker-dev/attributes/schedule",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"schedule",title:"Schedule",description:"Hides the marker outside of the specified schedule. Good for showing markers only during their associated scheduled meta event, day of the week, etc. All scheduling is based on UTC.",hide_table_of_contents:!0},sidebar:"marker-dev-sidebar",previous:{title:"ScaleOnMapWithZoom",permalink:"/docs/marker-dev/attributes/scaleonmapwithzoom"},next:{title:"Script",permalink:"/docs/marker-dev/attributes/script"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Supported values",id:"supported-values",level:2},{value:"schedule",id:"schedule",level:3},{value:"schedule-duration",id:"schedule-duration",level:3},{value:"How it works",id:"how-it-works",level:2},{value:"Example Schedules",id:"example-schedules",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Applies To"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Blish HUD (Pathing)"}),(0,r.jsx)(t.th,{children:"TacO"}),(0,r.jsx)(t.th,{children:"Burrito"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)("center",{children:"Trails, Markers"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:(0,r.jsx)("center",{children:"\u2714"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)("center",{children:"\u274c"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)("center",{children:"\u274c"})})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Hides the marker outside of the specified schedule. Good for showing markers only during their associated scheduled meta event, day of the week, etc. All scheduling is based on UTC."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Data Type"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Example"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"schedule"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"0 0 * * 2"}),(0,r.jsx)(t.td,{children:"A cron expression which represents the start time of when the marker or trail should be shown."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"schedule-duration"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"1440"}),(0,r.jsx)(t.td,{children:"The duration after the start time that the marker or trail should remain visible."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"supported-values",children:"Supported values"}),"\n",(0,r.jsx)(t.h3,{id:"schedule",children:"schedule"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"schedule"})," attribute uses cron expressions to indicate the start time."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"                                      Allowed values    Allowed special characters   Comment\n\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 second                 0-59\n\u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 minute               0-59              * , - /                      \n\u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 hour               0-23              * , - /                      \n\u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of month     1-31              * , - / L W ?                \n\u2502 \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 month          1-12 or JAN-DEC   * , - /                      \n\u2502 \u2502 \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of week  0-6  or SUN-SAT   * , - / # L ?                Both 0 and 7 means SUN\n\u2502 \u2502 \u2502 \u2502 \u2502 \u2502\n* * * * * *\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The library we use to parse cron expressions provides some detailed explainations in their ",(0,r.jsx)(t.a,{href:"https://github.com/HangfireIO/Cronos#cron-format",children:"README"})," and there is plenty of documentation available online as the syntax is used for multiple systems.  Minutes are the smallest unit of time currently enabled for cron expressions as shown above."]}),"\n",(0,r.jsxs)(t.p,{children:["To get assistance writing and checking your cron expressions, you can use the ",(0,r.jsx)(t.a,{href:"https://crontab.cronhub.io/",children:"Cron expression generator"}),' by Cronhub.  Other generators with other features you may prefer are freely available online and can be found by searching for "cron expression generator".']}),"\n",(0,r.jsx)(t.h3,{id:"schedule-duration",children:"schedule-duration"}),"\n",(0,r.jsxs)(t.p,{children:["The schedule duration is the time in minutes after the start time that the marker or trail should be displayed.  The data type is a float, so partial minutes can be represented accordingly.  For example, ",(0,r.jsx)(t.code,{children:"0.5"})," indicates a duration of 30 seconds."]}),"\n",(0,r.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,r.jsx)(t.p,{children:"Cron expressions are used to represent repeating start times that can be anywhere from simplistic to complex.  We use the cron expression to calcuate the schedule that we'll show the markers and trails."}),"\n",(0,r.jsx)(t.p,{children:'For example, "0 * * * *" indicates a start time of every hour at the top of the hour.  We\'ll calculate the timestamp of the next time this occurs and then use the duration to decide what times the marker / trail will be visible.'}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"00:00"}),"\n",(0,r.jsx)(t.li,{children:"01:00"}),"\n",(0,r.jsx)(t.li,{children:"02:00"}),"\n",(0,r.jsx)(t.li,{children:"etc."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The duration is added to the start time to create an end time and if the current time is between the start and end then the marker or trail is allowed to show."}),"\n",(0,r.jsx)(t.h2,{id:"example-schedules",children:"Example Schedules"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Schedule"}),(0,r.jsx)(t.th,{children:"Duration"}),(0,r.jsx)(t.th,{children:"Meaning"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0 0 * * 3"}),(0,r.jsx)(t.td,{children:"1440"}),(0,r.jsx)(t.td,{children:"All of Wednesday (the 3 indicates Wednesday and 1440 is the number of minutes in a day)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0 * * * *"}),(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:"Every hour for the first two minutes."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"20 2/6 * * *"}),(0,r.jsx)(t.td,{children:"15"}),(0,r.jsx)(t.td,{children:"At 20 minutes past the hour, every 6 hours, starting at 02:00 AM (Ley-Line Anomaly in Iron Marches) for 15 minutes"})]})]})]})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>h});var r=s(6540);const n={},i=r.createContext(n);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);