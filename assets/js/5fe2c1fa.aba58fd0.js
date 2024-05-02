"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[5420],{3331:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=s(4848),t=s(8453);s(4182),s(1801),s(3012),s(7227),s(9489);const i={sidebar_position:5,displayed_sidebar:"neonkube",title:"Job Options",hide_title:!1,hide_table_of_contents:!0,description:"NeonKUBE job schedules",last_update:{author:"NeonFORGE Team"}},o="Job Options",d={id:"neonkube/cluster-definition/job-options",title:"Job Options",description:"NeonKUBE job schedules",source:"@site/docs/neonkube/cluster-definition/job-options.mdx",sourceDirName:"neonkube/cluster-definition",slug:"/neonkube/cluster-definition/job-options",permalink:"/docs/neonkube/cluster-definition/job-options",draft:!1,unlisted:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/neonkube/cluster-definition/job-options.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,displayed_sidebar:"neonkube",title:"Job Options",hide_title:!1,hide_table_of_contents:!0,description:"NeonKUBE job schedules",last_update:{author:"NeonFORGE Team"}},sidebar:"neonkube",previous:{title:"XenServer",permalink:"/docs/neonkube/cluster-definition/hosting-options/xenserver-hosting-options"},next:{title:"Kubelet Options",permalink:"/docs/neonkube/cluster-definition/kubelet-options"}},l={},c=[];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"job-options",children:"Job Options"}),"\n",(0,r.jsxs)(n.p,{children:["Specifies enhanced Quartz cron schedules for NeonKUBE cluster jobs performed by\r\ncluster operators such as ",(0,r.jsx)(n.strong,{children:"neon-cluster-operator"}),". Each job can be enabled or\r\ndisabled independently and scheduled using a CRON/Quartz like string, like:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'enabled:  true\r\nschedule: "R R 0 ? * *"\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"schedule"})," specifies the job schedule. This is extended Quartz CRON\r\nexpression.",(0,r.jsx)(n.br,{}),"\n","This defaults to ",(0,r.jsx)(n.strong,{children:'"R R 0 ? * *"'})," which fires every day at a random minute\r\nand second between 12:00am and 1:00am."]}),"\n",(0,r.jsx)(n.p,{children:"Cron expressions consist of seven sub-expressions that describe the details of\r\nthe schedule. The sub expressions (in order) are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Seconds"})," (0..59)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Minutes"})," (0..59)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Hours"})," (0..23)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Day-of-Month"})," (1..31)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Month"})," (1..12) or MON-DEC"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Day-of-Week"})," (1..7) or SUN-SAT"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Year"})," (optional) (1970..2099)"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["An example of a complete cron expression is ",(0,r.jsx)(n.strong,{children:'"0 0 15 ? * MON"'})," which triggers\r\n",(0,r.jsx)(n.strong,{children:"every Monday at 3pm"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For the full documentation which describes special characters, see:\r\n",(0,r.jsx)(n.a,{href:"https://www.quartz-scheduler.net/documentation/quartz-3.x/tutorial/crontriggers.html#cron-expressions",children:"Quartz CRON Expressions"})]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["In addition to the standard Quartz defined special characters, we also support\r\nthe ",(0,r.jsx)("b",{children:"R"})," character which picks a random value within the allowed range for a\r\nfield. For example:"]}),(0,r.jsx)("b",{children:'"0 R R * * *"'}),(0,r.jsx)(n.p,{children:"schedules the job for a random hour and minute during the day. This is useful\r\nfor situations like uploading telemetry to a global service where you don't want\r\na potentially large number of clients being scheduled to hit the service at the\r\nsame time."})]}),"\n",(0,r.jsxs)(n.p,{children:["Here's what the cluster job options look like, with the default values or\r\n",(0,r.jsx)(n.strong,{children:"[required]"})," for properties that must be specified:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'jobs:\r\n  controlPlaneCertificateRenewal:\r\n    enabled:                        true\r\n    schedule:                       "0 0 0 ? * TUE"\r\n  harborImagePush:\r\n    enabled:                        true\r\n    schedule:                       "0 0 0 ? * TUE"\r\n  linuxSecurityPatches:\r\n    enabled:                        true\r\n    schedule:                       "0 0 0 ? * TUE"\r\n  nodeCaCertificateRenewal:\r\n    enabled:                        true\r\n    schedule:                       "0 0 0 ? * TUE"\r\n  telemetryPing:\r\n    enabled:                        true\r\n    schedule:                       "R R 0 ? * *"\r\n  terminatedPodGc:\r\n    enabled:                        true\r\n    schedule:                       "0/15 * * ? * *"\r\n  terminatedPodGcDelayMilliseconds: 1000\r\n  terminatedPodGcThresholdMinutes:  720\n'})}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Property"}),(0,r.jsx)("th",{children:"Description"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.strong,{children:"controlPlaneCertificateRenewal"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"object:"})," Schedules renewal of the Kubernetes cluster certificate.  This defaults\r\nto a random time between 12:00am and 1:00am (UTC) on Tuesdays."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.strong,{children:"harborImagePush"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"object:"})," Schedules the persisting of NEONKUBE cluster container images from\r\ncluster nodes to Harbor as required.  This defaults to a random time between\r\n12:00am and 1:00am (UTC) on Tuesdays."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.strong,{children:"linuxSecurityPatches"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"object:"})," Schedules Kubernetes control plane certificate renewal.   This defaults\r\nto a random time between 12:00am and 1:00am (UTC) on Tuesdays."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.strong,{children:"nodeCaCertificateRenewal"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"object:"})," Schedules updates of the public certificate authorities on cluster nodes.\r\nThis defaults to a random time between 12:00am and 1:00am (UTC) on Tuesdays."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.strong,{children:"telemetryPing"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"object:"})," Schedules the application of Linux security patches on the cluster nodes.\r\nThis defaults to a random time between 12:00am and 1:00am (UTC) on Tuesdays."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.strong,{children:"terminatedPodGc"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"object:"})," Schedules the deletion of pods that have been terminated for at least\r\n",(0,r.jsx)(n.strong,{children:"terminatedPodGcThresholdMinutes"}),".  This defaults to every 15 minutes."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE:"})," To avoid a potential race condition, ",(0,r.jsx)("b",{children:"neon-cluster-operator"})," only removes\r\npods with what looks like a generated name, including a unique ID suffix.  This\r\navoids situations where the operator identifies a pod to be deleted but before\r\nthe operator has a chance to delete the pod, something else deletes and then\r\nrecreates the pod with the same name, resulting in the wrong pod being removed."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.strong,{children:"terminatedPodGcDelayMilliseconds"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"integer:"})," Specifies the delay in milliseconds that the terminated pod removal job\r\nwill pause after scanning a namespace for terminated jobs and also after each job\r\nremoval to reduce pressure on the API Server.  This defaults to ",(0,r.jsx)(n.strong,{children:"1000 milliseconds"}),"\r\n(1 second)."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.strong,{children:"terminatedPodGcThresholdMinutes"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"integer:"})," Specifies the number of minutes after a pod terminates sucessfully or not\r\nbefore it becomes eligible for removal by the ",(0,r.jsx)(n.strong,{children:"neon-cluster-operator"}),".  This\r\ndefaults to ",(0,r.jsx)(n.strong,{children:"720 minutes"})," (12 hours) to give operations teams a chance to investigate\r\npotential recent problems."]})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);