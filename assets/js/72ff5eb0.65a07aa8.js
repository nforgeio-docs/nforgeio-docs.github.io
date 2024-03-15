"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[1292],{996:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var i=t(4848),o=t(8453);const s={sidebar_position:2,slug:"/deployment",displayed_sidebar:"neonkube",title:"Deployment Options",hide_title:!1,hide_table_of_contents:!0,description:"Describes cluster definition Container Options",last_update:{author:"NEONFORGE Team"}},r="Container Options",d={id:"neonkube/cluster-definition-details/deployment-options",title:"Deployment Options",description:"Describes cluster definition Container Options",source:"@site/docs/neonkube/cluster-definition-details/deployment-options.mdx",sourceDirName:"neonkube/cluster-definition-details",slug:"/deployment",permalink:"/docs/deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/neonkube/cluster-definition-details/deployment-options.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/deployment",displayed_sidebar:"neonkube",title:"Deployment Options",hide_title:!1,hide_table_of_contents:!0,description:"Describes cluster definition Container Options",last_update:{author:"NEONFORGE Team"}},sidebar:"neonkube",previous:{title:"Container Options",permalink:"/docs/container"},next:{title:"Feature Options",permalink:"/docs/features"}},l={},a=[];function c(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'ara\r\nimport Admonition from "@theme/Admonition";\r\nimport CodeBlock from "@theme/CodeBlock";\r\nimport Image from "@theme/IdealImage";\r\nimport TabItem from "@theme/TabItem";\r\nimport Tabs from "@theme/Tabs";'}),"\n",(0,i.jsx)(n.h1,{id:"container-options",children:"Container Options"}),"\n",(0,i.jsx)(n.p,{children:"Used to customizes the cluster's container registry configuration."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"deployment:\r\n  prefix: null\n"})}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("thead",{children:[(0,i.jsx)("th",{children:"Property"}),(0,i.jsx)("th",{children:"Description"})]}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"registries"})}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"string"}),": Optional prefix combined with the cluster name to generate the resource group name\r\nwhen deploying the cluster to a cloud environment or combined with the node name\r\nfor other environments.  This is typically used by unit tests deployed by ",(0,i.jsx)("b",{children:"ClusterFixture"}),"\r\nbut can also be used by custom tools to avoid conflicts when multiple tests may be\r\nrunning in parallel (probably on different machines) as well as providing a way to\r\nidentify and remove clusters or VMs orphaned by previous interrupted tests or tool runs."]}),(0,i.jsxs)(n.p,{children:["This will typically be set to something identifying the machine, user, and/or tool\r\nrunning the test like ",(0,i.jsx)("b",{children:"runner-0"}),", ",(0,i.jsx)("b",{children:"jeff"}),", or ",(0,i.jsx)("b",{children:"runner-0-jeff"}),"."]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{children:"NOTE:"})," A dash will be appended automatically to non-",(0,i.jsx)(n.code,{children:"null"})," prefixes before prepending this\r\nto the cluster name."]})]})]})})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);