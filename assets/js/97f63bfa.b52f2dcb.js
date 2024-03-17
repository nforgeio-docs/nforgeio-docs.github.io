(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[2583],{3793:(e,n,r)=>{e.exports={src:{srcSet:r.p+"assets/ideal-img/deploy-cluster.8ef9fb4.100.png 100w,"+r.p+"assets/ideal-img/deploy-cluster.2928cff.241.png 241w",images:[{path:r.p+"assets/ideal-img/deploy-cluster.8ef9fb4.100.png",width:100,height:178},{path:r.p+"assets/ideal-img/deploy-cluster.2928cff.241.png",width:241,height:428}],src:r.p+"assets/ideal-img/deploy-cluster.8ef9fb4.100.png",toString:function(){return r.p+"assets/ideal-img/deploy-cluster.8ef9fb4.100.png"},placeholder:void 0,width:100,height:178},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB7ElEQVR4nG2RS08TYRiF+yOsvVF0oSYujIm/wMRf5saIK2Mal2JASumVUrowhhWLmpREpPPFEjozrU2hM0zn1umNUB4zAwRET/Ll3Tw557zvF3r98TOlrzvkczk2NrLk8wXSa2mq1Sr1+h5vl96xkHxIaHdfcOp4NJtNdF3HcV00TcO2bXxtlreIJxYJbdf22W1plL83+NZQ2JFU6j2HWmfAT2PGh9UcCR+s/Wig6hZ70iFyT6Ojm3QNh9+6hTmds7pRuHT8JQRDx0FVZE56XTzXZToeB9NXqVS6BBuSwLJtFEVFP9Vxhy7eaBR09VUsXoFCCAamhawoTKcTRuMxo9EI9y4oSQLbdmgeNumfnDCZTPC8/4BCCEzT5Kh1xHA4DNz+dty8BVom7U6b8VXsbbBQKN6KdmxkWWbounieFzwfvLi4IJvN3Thalh38jGEYzGazwNFxnH+X8c8jJEG32+XUMBgMjKDvHVAKYjqdDv1+H0VVOT7u3XS8Bg8ODhgMTGS5FXS8XsiyrKBjvlAgvrBIqN1uMzs7Q9M15vN54OLr/Pw8mFuVbSLRJKFUKsXKygrLy5/IZDOsZdKkM+t8WV+jXKmw9P4Nz14+IRSLxYjEIkTjEcKxMOHEfcKJCOFklHsP4jx68Zjnr57yB7rHR/TXuoEwAAAAAElFTkSuQmCC"}},6361:(e,n,r)=>{"use strict";r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var t=r(4848),s=r(8453),i=(r(4182),r(1801),r(3012));r(7227),r(9489);const o={sidebar_position:8,displayed_sidebar:"neonkube",title:"Deploy on XenServer/XCP-ng",hide_title:!1,hide_table_of_contents:!1,description:"Getting started with NEONKUBE on XenServer.Getting started with NEONKUBE on XenServer.Getting started with NEONKUBE on XenServer.",keywords:["XenServer","XCP","XCP-ng"],last_update:{author:"NEONFORGE Team"}},l="Deploy on XenServer/XCP-ng",d={id:"neonkube/getting-started/xenserver",title:"Deploy on XenServer/XCP-ng",description:"Getting started with NEONKUBE on XenServer.Getting started with NEONKUBE on XenServer.Getting started with NEONKUBE on XenServer.",source:"@site/docs/neonkube/getting-started/xenserver.mdx",sourceDirName:"neonkube/getting-started",slug:"/neonkube/getting-started/xenserver",permalink:"/docs/neonkube/getting-started/xenserver",draft:!1,unlisted:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/neonkube/getting-started/xenserver.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,displayed_sidebar:"neonkube",title:"Deploy on XenServer/XCP-ng",hide_title:!1,hide_table_of_contents:!1,description:"Getting started with NEONKUBE on XenServer.Getting started with NEONKUBE on XenServer.Getting started with NEONKUBE on XenServer.",keywords:["XenServer","XCP","XCP-ng"],last_update:{author:"NEONFORGE Team"}},sidebar:"neonkube",previous:{title:"Deploy on Azure",permalink:"/docs/neonkube/getting-started/azure"},next:{title:"How To Guides",permalink:"/docs/category/how-to-guides"}},a={},h=[{value:"Cluster Definition",id:"cluster-definition",level:3},{value:"Cluster Deployment via NEONDESKTOP",id:"cluster-deployment-via-neondesktop",level:2},{value:"Cluster Deployment via NEONCLI",id:"cluster-deployment-via-neoncli",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"deploy-on-xenserverxcp-ng",children:"Deploy on XenServer/XCP-ng"}),"\n",(0,t.jsxs)(n.p,{children:["You'll need a machine running either the XenServer or XCP-ng hypervisor.\r\n",(0,t.jsx)(n.a,{href:"https://xenserver.com",children:"XenServer"})," is a commercial offering that used to\r\nhave a free edition but now only has a time-limited trial.  ",(0,t.jsx)(n.a,{href:"https://xcp-ng.org",children:"XCP-ng"}),"\r\nis an open source fork of the XenServer project, back when it was open source too.",(0,t.jsx)(n.br,{}),"\n","XCP-ng is completely free."]}),"\n",(0,t.jsxs)(n.p,{children:["We've been using ",(0,t.jsx)(n.strong,{children:"XCP-ng for about 5 years"})," now and have been happy with it."]}),"\n",(0,t.jsx)(n.p,{children:"You'll need an AMD64 compatible computer for this.  This doesn't need to be\r\nparticularily high powered but should minimially have:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"cpu: 4 cores"}),"\n",(0,t.jsx)(n.li,{children:"memory: 16+ GB"}),"\n",(0,t.jsx)(n.li,{children:"disk: 500GB SSD"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"XenServer/XCP-ng v8.2+"})," is required."]}),"\n",(0,t.jsxs)(n.p,{children:["Download and install either ",(0,t.jsx)(n.strong,{children:"XenServer"})," or ",(0,t.jsx)(n.strong,{children:"XCP-ng"}),", following the instructions\r\non the respwctive site.  Make a note of the ",(0,t.jsx)(n.strong,{children:"IP Address"})," assigned to the machine\r\nas well as the ",(0,t.jsx)(n.strong,{children:"root password"})," you created."]}),"\n",(0,t.jsx)(n.h1,{id:"deploy-a-neonkube-cluster-on-azure",children:"Deploy a NEONKUBE Cluster on AZURE"}),"\n",(0,t.jsx)(n.h3,{id:"cluster-definition",children:"Cluster Definition"}),"\n",(0,t.jsx)(n.p,{children:"First, you'll need to save this cluster definition as a YAML file\r\non your machine.  This provisions a single node cluster on your\r\nXen machine."}),"\n",(0,t.jsx)(n.p,{children:"Be sure to make these substitutions first:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[XEN_HOST_PASSWORD]"}),": change this to the root password you created when\r\nyou deployed the Xen machine."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[XEN_HOST_ADDRESS]"}),": change this to the Xen machine's IP address."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Network:"})," change ",(0,t.jsx)(n.strong,{children:"network.gateway"})," and ",(0,t.jsx)(n.strong,{children:"network.premiseSubnet"}),"\r\nto the settings for your local LAN and also set ",(0,t.jsx)(n.strong,{children:"nodes.control-0.address"}),"\r\nto an unused address on the LAN."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"name: my-xen-cluster\r\nhosting:\r\n  environment: xenserver\r\n  vm:\r\n    hostUsername: root\r\n    hostPassword: [XEN_HOST_PASSWORD]\r\n    namePrefix: vm_prefix\r\n    hosts:\r\n      - name: MY-XEN-SERVER\r\n        address: [XEN_HOST_ADDRESS]\r\nnetwork:\r\n  gateway: 10.100.0.1\r\n  premiseSubnet: 10.100.0.0/16\r\nnodes:\r\n  control-0:\r\n    role: control-plane\r\n    address: 10.100.1.100\r\n    vm:\r\n      host: MY-XEN-SERVER\r\n      cores: 4\r\n      memory: 8GiB\r\n      osDisk: 64GiB\n"})}),"\n",(0,t.jsx)(n.h2,{id:"cluster-deployment-via-neondesktop",children:"Cluster Deployment via NEONDESKTOP"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Right click the NEONDESKTOP icon in the taskbar > Deploy cluster"}),"\n",(0,t.jsx)(i.A,{img:r(3793),style:{width:300}}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the file picker to select the cluster definiton file you saved above"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Grab a coffee and wait for NEONDESKTOP to deploy the cluster."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"cluster-deployment-via-neoncli",children:"Cluster Deployment via NEONCLI"}),"\n",(0,t.jsx)(n.p,{children:"Cluster deployment happens in two phases:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configuring the hosting infrastructure, which involves configuring the\r\n",(0,t.jsx)(n.strong,{children:"Resource Group"}),", ",(0,t.jsx)(n.strong,{children:"VPC"}),", starting the ",(0,t.jsx)(n.strong,{children:"Instances"}),", configuring\r\nthe ",(0,t.jsx)(n.strong,{children:"LoadBalancer"}),", ",(0,t.jsx)(n.strong,{children:"IP Addresses"}),", ",(0,t.jsx)(n.strong,{children:"Disks"}),", etc."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Setting up the cluster.  This involves configuring Linux and Kubernetes\r\nand then installing the necessary cluster components via Helm charts."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Execute the commands to deploy this cluster, passing the ",(0,t.jsx)(n.strong,{children:"PATH"})," to the\r\ncluster definition file you saved above and ",(0,t.jsx)(n.strong,{children:"CLUSTERNAME"})," to the cluster\r\nname as defined in the definition:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"REM Prepare the cluster infrastructure (change PATH to your cluster definition path)\r\nneon cluster prepare PATH\r\n\r\nREM Setup the cluster\r\nneon cluster setup root@my-xen-cluster\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then wait for cluster setup to complete."}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"These operations are currently coordinated by NEONDESKTOP or NEONCLI\r\nrunning on your machine, so you'll need to keep your computer running\r\nand connected to the network."}),(0,t.jsx)(n.p,{children:"We plan on supporting cloud based deployment in the future where these\r\noperations will be managed in the cloud, rather than from your computer."})]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);