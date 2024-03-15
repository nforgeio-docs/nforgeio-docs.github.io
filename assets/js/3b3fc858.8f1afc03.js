"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[4985],{826:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var t=s(4848),n=s(8453);s(4182),s(1801),s(3012),s(7227),s(9489);const i={sidebar_position:3,displayed_sidebar:"operatorsdk",title:"Local Development",hide_title:!1,hide_table_of_contents:!1,description:"How to develop and test webhooks locally.",keywords:["operator","sdk","webhooks","tunnel","development","environment"],last_update:{author:"NEONFORGE Team"}},l="Local Development",r={id:"operator-sdk/webhooks/local-dev",title:"Local Development",description:"How to develop and test webhooks locally.",source:"@site/docs/operator-sdk/webhooks/local-dev.mdx",sourceDirName:"operator-sdk/webhooks",slug:"/operator-sdk/webhooks/local-dev",permalink:"/docs/operator-sdk/webhooks/local-dev",draft:!1,unlisted:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/operator-sdk/webhooks/local-dev.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,displayed_sidebar:"operatorsdk",title:"Local Development",hide_title:!1,hide_table_of_contents:!1,description:"How to develop and test webhooks locally.",keywords:["operator","sdk","webhooks","tunnel","development","environment"],last_update:{author:"NEONFORGE Team"}},sidebar:"operatorsdk",previous:{title:"Validating Webhooks",permalink:"/docs/operator-sdk/webhooks/validating-webhooks"},next:{title:"Finalizers",permalink:"/docs/operator-sdk/finalizers"}},d={},a=[{value:"Visual Studio Dev Tunnels",id:"visual-studio-dev-tunnels",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setup",id:"setup",level:3}];function u(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"local-development",children:"Local Development"}),"\n",(0,t.jsx)(o.h2,{id:"visual-studio-dev-tunnels",children:"Visual Studio Dev Tunnels"}),"\n",(0,t.jsxs)(o.p,{children:["When running your Operator in Visual Studio, it's possible to create a tunnel\r\nusing\r\n",(0,t.jsx)(o.a,{href:"https://devblogs.microsoft.com/visualstudio/dev-tunnels-in-visual-studio-for-asp-net-core-projects/",children:"Visual Studio Dev Tunnels"}),".\r\nThis will allow you to debug your webhooks live in Visual Studio."]}),"\n",(0,t.jsx)(o.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Download\r\n",(0,t.jsx)(o.a,{href:"https://visualstudio.microsoft.com/vs/",children:"Visual Studio 2022 version 17.4."})]}),"\n",(0,t.jsx)(o.li,{children:"You will also need to be signed into Visual Studio to create and use dev\r\ntunnels."}),"\n",(0,t.jsxs)(o.li,{children:["Enable the dev tunnels preview feature. You can find this at\r\n",(0,t.jsx)("strong",{children:"Tools"})," -> ",(0,t.jsx)("strong",{children:"Options"})," ->\r\n",(0,t.jsx)("strong",{children:"Environment"})," -> ",(0,t.jsx)("strong",{children:"Preview Features"}),", and select\r\nthe option Enable dev tunnels for Web Applications."]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{src:s(3279).A+"",width:"782",height:"466"})}),"\n",(0,t.jsx)(o.h3,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(o.p,{children:["Add the following properties to your profile in ",(0,t.jsx)(o.code,{children:"launchsettings.json"})]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'"devTunnelEnabled": true,\r\n"devTunnelAccess": "Public"\n'})}),"\n",(0,t.jsx)(o.p,{children:"That's it! The rest will be taken care of when you start your Operator."})]})}function c(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},3279:(e,o,s)=>{s.d(o,{A:()=>t});const t=s.p+"assets/images/enable-dev-tunnels-9e7f39313ab27459b7ac1e6dc58284bb.png"}}]);