(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[3329],{3931:(e,n,t)=>{e.exports={src:{srcSet:t.p+"assets/ideal-img/deploy-cluster.8ef9fb4.100.png 100w,"+t.p+"assets/ideal-img/deploy-cluster.2928cff.241.png 241w",images:[{path:t.p+"assets/ideal-img/deploy-cluster.8ef9fb4.100.png",width:100,height:178},{path:t.p+"assets/ideal-img/deploy-cluster.2928cff.241.png",width:241,height:428}],src:t.p+"assets/ideal-img/deploy-cluster.8ef9fb4.100.png",toString:function(){return t.p+"assets/ideal-img/deploy-cluster.8ef9fb4.100.png"},placeholder:void 0,width:100,height:178},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB7ElEQVR4nG2RS08TYRiF+yOsvVF0oSYujIm/wMRf5saIK2Mal2JASumVUrowhhWLmpREpPPFEjozrU2hM0zn1umNUB4zAwRET/Ll3Tw557zvF3r98TOlrzvkczk2NrLk8wXSa2mq1Sr1+h5vl96xkHxIaHdfcOp4NJtNdF3HcV00TcO2bXxtlreIJxYJbdf22W1plL83+NZQ2JFU6j2HWmfAT2PGh9UcCR+s/Wig6hZ70iFyT6Ojm3QNh9+6hTmds7pRuHT8JQRDx0FVZE56XTzXZToeB9NXqVS6BBuSwLJtFEVFP9Vxhy7eaBR09VUsXoFCCAamhawoTKcTRuMxo9EI9y4oSQLbdmgeNumfnDCZTPC8/4BCCEzT5Kh1xHA4DNz+dty8BVom7U6b8VXsbbBQKN6KdmxkWWbounieFzwfvLi4IJvN3Thalh38jGEYzGazwNFxnH+X8c8jJEG32+XUMBgMjKDvHVAKYjqdDv1+H0VVOT7u3XS8Bg8ODhgMTGS5FXS8XsiyrKBjvlAgvrBIqN1uMzs7Q9M15vN54OLr/Pw8mFuVbSLRJKFUKsXKygrLy5/IZDOsZdKkM+t8WV+jXKmw9P4Nz14+IRSLxYjEIkTjEcKxMOHEfcKJCOFklHsP4jx68Zjnr57yB7rHR/TXuoEwAAAAAElFTkSuQmCC"}},5279:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(4848),s=t(8453),i=t(3012);const o={sidebar_position:5,displayed_sidebar:"neonkube",title:"XenServer Cluster",hide_title:!1,hide_table_of_contents:!1,description:"Getting started with NeonKUBE on XenServer.Getting started with NeonKUBE on XenServer.Getting started with NeonKUBE on XenServer.",keywords:["XenServer","XCP","XCP-ng"],last_update:{author:"Marcus Bowyer"}},l="Deploy An XenServer/XCP-ng Cluster",a={id:"neonkube/installation/xenserver",title:"XenServer Cluster",description:"Getting started with NeonKUBE on XenServer.Getting started with NeonKUBE on XenServer.Getting started with NeonKUBE on XenServer.",source:"@site/docs/neonkube/installation/xenserver.mdx",sourceDirName:"neonkube/installation",slug:"/neonkube/installation/xenserver",permalink:"/docs/neonkube/installation/xenserver",draft:!1,unlisted:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/neonkube/installation/xenserver.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,displayed_sidebar:"neonkube",title:"XenServer Cluster",hide_title:!1,hide_table_of_contents:!1,description:"Getting started with NeonKUBE on XenServer.Getting started with NeonKUBE on XenServer.Getting started with NeonKUBE on XenServer.",keywords:["XenServer","XCP","XCP-ng"],last_update:{author:"Marcus Bowyer"}},sidebar:"neonkube",previous:{title:"Azure Cluster",permalink:"/docs/neonkube/installation/azure"},next:{title:"How To Guides",permalink:"/docs/category/how-to-guides"}},d={},c=[{value:"Prerquisites",id:"prerquisites",level:2},{value:"Creating a cluster",id:"creating-a-cluster",level:2},{value:"Cluster Definition",id:"cluster-definition",level:3},{value:"Creating the Cluster",id:"creating-the-cluster",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"deploy-an-xenserverxcp-ng-cluster",children:"Deploy An XenServer/XCP-ng Cluster"}),"\n",(0,r.jsx)(n.h2,{id:"prerquisites",children:"Prerquisites"}),"\n",(0,r.jsxs)(n.p,{children:["Make sure you have neon-desktop installed. To install, follow the neon-desktop\ninstallation instructions ",(0,r.jsx)(n.a,{href:"./neon-desktop",children:"here"})]}),"\n",(0,r.jsx)(n.h2,{id:"creating-a-cluster",children:"Creating a cluster"}),"\n",(0,r.jsx)(n.h3,{id:"cluster-definition",children:"Cluster Definition"}),"\n",(0,r.jsxs)(n.p,{children:["Create a\n",(0,r.jsx)(n.a,{href:"https://api-docs.neonforge.com/neonkube/api/Neon.Kube.ClusterDef.ClusterDefinition.html",children:"Cluster Definition"}),"\nthat describes the cluster."]}),"\n",(0,r.jsx)(n.p,{children:"Be sure to substitute the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"XEN_HOST_USERNAME"})," - the Xen/XCP host username."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"XEN_HOST_PASSWORD"})," - the Xen/XCP host password."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"name: xcp-tiny\ndatacenter: wrt-00\npurpose: development\ntimeSources:\n  - pool.ntp.org\nkubernetes:\n  allowPodsOnControlPlane: true\nhosting:\n  environment: xenserver\n  vm:\n    hostUsername: XEN_HOST_USERNAME\n    hostPassword: XEN_HOST_PASSWORD\n    namePrefix: vm_prefix\n    hosts:\n      - name: WRT-00-XEN-00\n        address: 10.100.128.1\n  xenServer:\n    snapshot: true\nnetwork:\n  nameservers:\n    - 8.8.8.8\n    - 8.8.4.4\n  gateway: 10.100.0.1\n  premiseSubnet: 10.100.0.0/16\nnodes:\n  control-0:\n    role: control-plane\n    address: 10.100.10.1\n    vm:\n      host: WRT-00-XEN-00\n      cores: 4\n      memory: 8GiB\n      osDisk: 64GiB\n"})}),"\n",(0,r.jsx)(n.p,{children:"Save the Cluster Definition."}),"\n",(0,r.jsx)(n.h3,{id:"creating-the-cluster",children:"Creating the Cluster"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Right click the neon-desktop icon in the taskbar > Deploy cluster","\n",(0,r.jsx)(i.A,{img:t(3931),style:{width:300}}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"When the dialog pops up, select the Cluster Definition file you saved\nearlier."}),"\n",(0,r.jsx)(n.li,{children:"Grab a coffee and wait for neon-desktop to create the cluster."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);