"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[8005],{9048:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=t(4848),o=t(8453);t(4182),t(1801),t(3012),t(7227),t(9489);const s={sidebar_position:7,displayed_sidebar:"neonkube",title:"Monitor Options",hide_title:!1,hide_table_of_contents:!0,description:"NeonKUBE observability options",last_update:{author:"NeonFORGE Team"}},r="Monitor Options",d={id:"neonkube/cluster-definition/monitor-options",title:"Monitor Options",description:"NeonKUBE observability options",source:"@site/docs/neonkube/cluster-definition/monitor-options.mdx",sourceDirName:"neonkube/cluster-definition",slug:"/neonkube/cluster-definition/monitor-options",permalink:"/docs/neonkube/cluster-definition/monitor-options",draft:!1,unlisted:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/neonkube/cluster-definition/monitor-options.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,displayed_sidebar:"neonkube",title:"Monitor Options",hide_title:!1,hide_table_of_contents:!0,description:"NeonKUBE observability options",last_update:{author:"NeonFORGE Team"}},sidebar:"neonkube",previous:{title:"Kubernetes Options",permalink:"/docs/neonkube/cluster-definition/kubernetes-options"},next:{title:"Network Options",permalink:"/docs/neonkube/cluster-definition/network-options"}},l={},c=[];function a(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"monitor-options",children:"Monitor Options"}),"\n",(0,i.jsx)(n.p,{children:"Specifies the options for configuring the NeonKUBE integrated observability\r\nstack."}),"\n",(0,i.jsxs)(n.p,{children:["Here's what the observability options look like, with the default values or\r\n",(0,i.jsx)(n.strong,{children:"[required]"})," for properties that must be specified:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"monitor:\r\n  logs:\r\n    logRetentionDays:\r\n  metrics:\r\n    storage:\r\n  traces:\r\n    traceRetentionDays:\n"})}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("thead",{children:[(0,i.jsx)("th",{children:"Property"}),(0,i.jsx)("th",{children:"Description"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"logs.logRetentionDays"})}),(0,i.jsx)("td",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"integer:"})," Trace retention period in days. Traces older than this will\r\nbe purged. This defaults to: ",(0,i.jsx)(n.strong,{children:"14 days"})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"metrics.storage"})}),(0,i.jsx)("td",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"string:"})," Specifies where Prometheus metrics should be stored. Supported\r\nvalues are ",(0,i.jsx)(n.strong,{children:"ephermeral"})," (the default) or ",(0,i.jsx)(n.strong,{children:"filesystem"}),"."]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"logs.traceRetentionDays"})}),(0,i.jsx)("td",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"integer:"})," Specifies the trace retention period in days. Traces older\r\nthan this will be purged. This defaults to: ",(0,i.jsx)(n.strong,{children:"14 days"})]})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}}}]);