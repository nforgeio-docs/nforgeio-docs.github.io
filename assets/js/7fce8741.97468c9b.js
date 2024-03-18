"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[7734],{7183:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(4848),i=t(8453);t(4182),t(1801),t(3012),t(7227),t(9489);const s={sidebar_position:2,displayed_sidebar:"neonkube",title:"Deployment Options",hide_title:!1,hide_table_of_contents:!0,description:"NeonKUBE deployment options",last_update:{author:"NeonFORGE Team"}},r="Container Options",l={id:"neonkube/cluster-definition/deployment-options",title:"Deployment Options",description:"NeonKUBE deployment options",source:"@site/docs/neonkube/cluster-definition/deployment-options.mdx",sourceDirName:"neonkube/cluster-definition",slug:"/neonkube/cluster-definition/deployment-options",permalink:"/docs/neonkube/cluster-definition/deployment-options",draft:!1,unlisted:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/neonkube/cluster-definition/deployment-options.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,displayed_sidebar:"neonkube",title:"Deployment Options",hide_title:!1,hide_table_of_contents:!0,description:"NeonKUBE deployment options",last_update:{author:"NeonFORGE Team"}},sidebar:"neonkube",previous:{title:"Container Options",permalink:"/docs/neonkube/cluster-definition/container-options"},next:{title:"Feature Options",permalink:"/docs/neonkube/cluster-definition/feature-options"}},d={},c=[];function a(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"container-options",children:"Container Options"}),"\n",(0,o.jsxs)(n.p,{children:["Here's what the deployment options look like, with the default values or\r\n",(0,o.jsx)(n.strong,{children:"[required]"})," for property values that must be specified:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"deployment:\r\n  prefix: null\n"})}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsxs)("thead",{children:[(0,o.jsx)("th",{children:"Property"}),(0,o.jsx)("th",{children:"Description"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("b",{children:"registries"})}),(0,o.jsxs)("td",{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"string:"})," Optional prefix combined with the cluster name to generate the resource group name\r\nwhen deploying the cluster to a cloud environment or combined with the node name\r\nfor other environments.  This is typically used by unit tests deployed by ",(0,o.jsx)("b",{children:"ClusterFixture"}),"\r\nbut can also be used by custom tools to avoid conflicts when multiple tests may be\r\nrunning in parallel (probably on different machines) as well as providing a way to\r\nidentify and remove clusters or VMs orphaned by previous interrupted tests or tool runs."]}),(0,o.jsxs)(n.p,{children:["This will typically be set to something identifying the machine, user, and/or tool\r\nrunning the test like ",(0,o.jsx)("b",{children:"runner-0"}),", ",(0,o.jsx)("b",{children:"jeff"}),", or ",(0,o.jsx)("b",{children:"runner-0-jeff"}),"."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)("b",{children:"NOTE:"})," A dash will be appended automatically to non-",(0,o.jsx)(n.code,{children:"null"})," prefixes before prepending this\r\nto the cluster name."]})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}}}]);