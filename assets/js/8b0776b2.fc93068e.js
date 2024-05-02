"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[8005],{9048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=n(4848),o=n(8453);n(4182),n(1801),n(3012),n(7227),n(9489);const s={sidebar_position:7,displayed_sidebar:"neonkube",title:"Monitor Options",hide_title:!1,hide_table_of_contents:!0,description:"NeonKUBE observability options",last_update:{author:"NeonFORGE Team"}},r="Monitor Options",d={id:"neonkube/cluster-definition/monitor-options",title:"Monitor Options",description:"NeonKUBE observability options",source:"@site/docs/neonkube/cluster-definition/monitor-options.mdx",sourceDirName:"neonkube/cluster-definition",slug:"/neonkube/cluster-definition/monitor-options",permalink:"/docs/neonkube/cluster-definition/monitor-options",draft:!1,unlisted:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/neonkube/cluster-definition/monitor-options.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,displayed_sidebar:"neonkube",title:"Monitor Options",hide_title:!1,hide_table_of_contents:!0,description:"NeonKUBE observability options",last_update:{author:"NeonFORGE Team"}},sidebar:"neonkube",previous:{title:"Kubelet Options",permalink:"/docs/neonkube/cluster-definition/kubelet-options"},next:{title:"Network Options",permalink:"/docs/neonkube/cluster-definition/network-options"}},l={},c=[];function a(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"monitor-options",children:"Monitor Options"}),"\n",(0,i.jsx)(t.p,{children:"Specifies the options for configuring the NeonKUBE integrated observability stack."}),"\n",(0,i.jsxs)(t.p,{children:["Here's what the observability options look like, with the default values or ",(0,i.jsx)(t.strong,{children:"[required]"})," for properties that must be\r\nspecified:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"monitor:\r\n  logs:\r\n    logRetentionDays:\r\n  metrics:\r\n    storage:\r\n  traces:\r\n    traceRetentionDays:\n"})}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("thead",{children:[(0,i.jsx)("th",{children:"Property"}),(0,i.jsx)("th",{children:"Description"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"logs.logRetentionDays"})}),(0,i.jsx)("td",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"integer:"})," Trace retention period in days. Traces older than this will be purged. This defaults to: ",(0,i.jsx)(t.strong,{children:"14 days"})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"metrics.storage"})}),(0,i.jsx)("td",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"string:"})," Specifies where Prometheus metrics should be stored. Supported values are ",(0,i.jsx)(t.strong,{children:"ephermeral"})," (the default)\r\nor ",(0,i.jsx)(t.strong,{children:"filesystem"}),"."]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"logs.traceRetentionDays"})}),(0,i.jsx)("td",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"integer:"})," Specifies the trace retention period in days. Traces older than this will be purged. This defaults to:\r\n",(0,i.jsx)(t.strong,{children:"14 days"})]})})]})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}}}]);