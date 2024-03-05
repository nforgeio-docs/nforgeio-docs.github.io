(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[1687],{4921:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/deploy-cluster.d102a03.100.png 100w,"+n.p+"assets/ideal-img/deploy-cluster.2928cff.241.png 241w",images:[{path:n.p+"assets/ideal-img/deploy-cluster.d102a03.100.png",width:100,height:178},{path:n.p+"assets/ideal-img/deploy-cluster.2928cff.241.png",width:241,height:428}],src:n.p+"assets/ideal-img/deploy-cluster.d102a03.100.png",toString:function(){return n.p+"assets/ideal-img/deploy-cluster.d102a03.100.png"},placeholder:void 0,width:100,height:178},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB50lEQVQokXWSTU8TURSG5ycYChRpAd2x0IV/wKV/y8RFTVyoUKWgK0NI0KSf+BHLhgVoXJi2tFTa6cekLbbY6czcmU5pTNvH3CFNjMJJbnIWT973vOdc5fHrHT4eHJGMx4lGoySTKd7u7rKfTlMonLC2tk5w6RbKYaZAV/Qplct09R6OO0Dv9bCEQNbe+w8sBpZREkcZDtQOsS/HfMpV+Jyr8rVhcljX+X5+QXgnRjC4gvItc0xLt8gWS2g/zznrGrQNwZluYf8e8y6eIhBcRjkp5LGFQFXLNLQ6tmUxcF2cqXUqdWmdz+exLEFd0zAMA8dx6Lsutm17YCq1NwULGIZJWVXpOw6uO6Df718F5jEti2KxSKfT5mJwLVjwFCuq6tm6rns9aJomjUbDg6ZvCsoDBOR6vDBCUK1VEUJ4alJZ9uPxmGg09hdoWZTKJbrdXwyHQ09Rgv+FkeDpj1NarSaGaWIaxtWphW1Tq9XotNtUqlVazaYHTiYTb8ZFeZlsNud9AnkZaSdt5Yxy+aPRiEQieTmjpmmMRmN0Xfes/q10eh//zSWUUCjEejjMs+dP2Xq1ycbmBpGtCC8iL3mzvc2jJw+592AVZd7vZ9Y/x9zCLDP+GXwLPnyyD8xzIzDHyt3b3Lm/yh9wvUcUAOn7XQAAAABJRU5ErkJggg=="}},5845:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(4137)),s=n(5944);const o={sidebar_position:5,displayed_sidebar:"neonkube",title:"XenServer Cluster",hide_title:!1,hide_table_of_contents:!1,description:"Getting started with NeonKUBE on XenServer.Getting started with NeonKUBE on XenServer.Getting started with NeonKUBE on XenServer.",keywords:["XenServer","XCP","XCP-ng"],last_update:{author:"Marcus Bowyer"}},a="Deploy An XenServer/XCP-ng Cluster",l={unversionedId:"neonkube/installation/xenserver",id:"neonkube/installation/xenserver",title:"XenServer Cluster",description:"Getting started with NeonKUBE on XenServer.Getting started with NeonKUBE on XenServer.Getting started with NeonKUBE on XenServer.",source:"@site/docs/neonkube/installation/xenserver.mdx",sourceDirName:"neonkube/installation",slug:"/neonkube/installation/xenserver",permalink:"/docs/neonkube/installation/xenserver",draft:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/neonkube/installation/xenserver.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,displayed_sidebar:"neonkube",title:"XenServer Cluster",hide_title:!1,hide_table_of_contents:!1,description:"Getting started with NeonKUBE on XenServer.Getting started with NeonKUBE on XenServer.Getting started with NeonKUBE on XenServer.",keywords:["XenServer","XCP","XCP-ng"],last_update:{author:"Marcus Bowyer"}},sidebar:"neonkube",previous:{title:"Azure Cluster",permalink:"/docs/neonkube/installation/azure"},next:{title:"How To Guides",permalink:"/docs/category/how-to-guides"}},d={},u=[{value:"Prerquisites",id:"prerquisites",level:2},{value:"Creating a cluster",id:"creating-a-cluster",level:2},{value:"Cluster Definition",id:"cluster-definition",level:3},{value:"Creating the Cluster",id:"creating-the-cluster",level:3}],p={toc:u},c="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-an-xenserverxcp-ng-cluster"},"Deploy An XenServer/XCP-ng Cluster"),(0,i.kt)("h2",{id:"prerquisites"},"Prerquisites"),(0,i.kt)("p",null,"Make sure you have neon-desktop installed. To install, follow the neon-desktop\ninstallation instructions ",(0,i.kt)("a",{parentName:"p",href:"./neon-desktop"},"here")),(0,i.kt)("h2",{id:"creating-a-cluster"},"Creating a cluster"),(0,i.kt)("h3",{id:"cluster-definition"},"Cluster Definition"),(0,i.kt)("p",null,"Create a\n",(0,i.kt)("a",{parentName:"p",href:"https://api-docs.neonforge.com/neonkube/api/Neon.Kube.ClusterDef.ClusterDefinition.html"},"Cluster Definition"),"\nthat describes the cluster."),(0,i.kt)("p",null,"Be sure to substitute the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"XEN_HOST_USERNAME")," - the Xen/XCP host username."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"XEN_HOST_PASSWORD")," - the Xen/XCP host password.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: xcp-tiny\ndatacenter: wrt-00\npurpose: development\ntimeSources:\n  - pool.ntp.org\nkubernetes:\n  allowPodsOnControlPlane: true\nhosting:\n  environment: xenserver\n  vm:\n    hostUsername: XEN_HOST_USERNAME\n    hostPassword: XEN_HOST_PASSWORD\n    namePrefix: vm_prefix\n    hosts:\n      - name: WRT-00-XEN-00\n        address: 10.100.128.1\n  xenServer:\n    snapshot: true\nnetwork:\n  nameservers:\n    - 8.8.8.8\n    - 8.8.4.4\n  gateway: 10.100.0.1\n  premiseSubnet: 10.100.0.0/16\nnodes:\n  control-0:\n    role: control-plane\n    address: 10.100.10.1\n    vm:\n      host: WRT-00-XEN-00\n      cores: 4\n      memory: 8GiB\n      osDisk: 64GiB\n")),(0,i.kt)("p",null,"Save the Cluster Definition."),(0,i.kt)("h3",{id:"creating-the-cluster"},"Creating the Cluster"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Right click the neon-desktop icon in the taskbar > Deploy cluster",(0,i.kt)(s.Z,{img:n(4921),style:{width:300},mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},"When the dialog pops up, select the Cluster Definition file you saved\nearlier."),(0,i.kt)("li",{parentName:"ol"},"Grab a coffee and wait for neon-desktop to create the cluster.")))}h.isMDXComponent=!0}}]);