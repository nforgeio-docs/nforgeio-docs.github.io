"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[5420],{3331:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=s(4848),t=s(8453);s(4182),s(1801),s(3012),s(7227),s(9489);const i={sidebar_position:5,displayed_sidebar:"neonkube",title:"Job Options",hide_title:!1,hide_table_of_contents:!0,description:"NeonKUBE job schedules",last_update:{author:"NeonFORGE Team"}},o="Job Options",d={id:"neonkube/cluster-definition/job-options",title:"Job Options",description:"NeonKUBE job schedules",source:"@site/docs/neonkube/cluster-definition/job-options.mdx",sourceDirName:"neonkube/cluster-definition",slug:"/neonkube/cluster-definition/job-options",permalink:"/docs/neonkube/cluster-definition/job-options",draft:!1,unlisted:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/neonkube/cluster-definition/job-options.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,displayed_sidebar:"neonkube",title:"Job Options",hide_title:!1,hide_table_of_contents:!0,description:"NeonKUBE job schedules",last_update:{author:"NeonFORGE Team"}},sidebar:"neonkube",previous:{title:"XenServer",permalink:"/docs/neonkube/cluster-definition/hosting-options/xenserver-hosting-options"},next:{title:"Kubernetes Options",permalink:"/docs/neonkube/cluster-definition/kubernetes-options"}},l={},a=[];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"job-options",children:"Job Options"}),"\n",(0,r.jsxs)(n.p,{children:["Specifies enhanced Quartz cron schedules for NeonKUBE cluster jobs performed by\r\ncluster operators such as ",(0,r.jsx)(n.strong,{children:"neon-cluster-operator"}),". Each job can be enabled or\r\ndisabled independently and scheduled using a CRON/Quartz like string, like:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'enabled:  true\r\nschedule: "R R 0 ? * *"\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"schedule"})," specifies the job schedule. This is extended Quartz CRON\r\nexpression.",(0,r.jsx)(n.br,{}),"\n","This defaults to ",(0,r.jsx)(n.strong,{children:'"R R 0 ? * *"'})," which fires every day at a random minute\r\nand second between 12:00am and 1:00am."]}),"\n",(0,r.jsx)(n.p,{children:"Cron expressions consist of seven sub-expressions that describe the details of\r\nthe schedule. The sub expressions (in order) are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Seconds"})," (0..59)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Minutes"})," (0..59)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Hours"})," (0..23)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Day-of-Month"})," (1..31)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Month"})," (1..12) or MON-DEC"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Day-of-Week"})," (1..7) or SUN-SAT"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Year"})," (optional) (1970..2099)"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["An example of a complete cron expression is ",(0,r.jsx)(n.strong,{children:'"0 0 15 ? * MON"'})," which triggers\r\n",(0,r.jsx)(n.strong,{children:"every Monday at 3pm"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For the full documentation which describes special characters, see:\r\n",(0,r.jsx)(n.a,{href:"https://www.quartz-scheduler.net/documentation/quartz-3.x/tutorial/crontriggers.html#cron-expressions",children:"Quartz CRON Expressions"})]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["In addition to the standard Quartz defined special characters, we also support\r\nthe ",(0,r.jsx)("b",{children:"R"})," character which picks a random value within the allowed range for a\r\nfield. For example:"]}),(0,r.jsx)("b",{children:'"0 0 R R * *"'}),(0,r.jsx)(n.p,{children:"schedules the job for a random hour and minute during the day. This is useful\r\nfor situations like uploading telemetry to a global service where you don't want\r\na potentially large number of clients being scheduled to hit the service at the\r\nsame time."})]}),"\n",(0,r.jsxs)(n.p,{children:["Here's what the cluster job options look like, with the default values or\r\n",(0,r.jsx)(n.strong,{children:"[required]"})," for properties that must be specified:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'jobs:\r\n    enabled:  true\r\n    schedule: "0 0 0 ? * TUE"\r\n  controlPlaneCertificateRenewal:\r\n    enabled:  true\r\n    schedule: "0 0 0 ? * TUE"\r\n  harborImagePush:\r\n    enabled:  true\r\n    schedule: "0 0 0 ? * TUE"\r\n  linuxSecurityPatches:\r\n    enabled:  true\r\n    schedule: "0 0 0 ? * TUE"\r\n  nodeCaCertificateRenewal:\r\n    enabled:  true\r\n    schedule: "0 0 0 ? * TUE"\r\n  telemetryPing:\r\n    enabled:  true\r\n    schedule: "R R 0 ? * *"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);