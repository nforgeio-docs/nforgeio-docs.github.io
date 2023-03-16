(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[873],{5392:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/deploy-azure-cluster.d102a03.100.png 100w,"+n.p+"assets/ideal-img/deploy-azure-cluster.2928cff.241.png 241w",images:[{path:n.p+"assets/ideal-img/deploy-azure-cluster.d102a03.100.png",width:100,height:178},{path:n.p+"assets/ideal-img/deploy-azure-cluster.2928cff.241.png",width:241,height:428}],src:n.p+"assets/ideal-img/deploy-azure-cluster.d102a03.100.png",toString:function(){return n.p+"assets/ideal-img/deploy-azure-cluster.d102a03.100.png"},placeholder:void 0,width:100,height:178},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB50lEQVQokXWSTU8TURSG5ycYChRpAd2x0IV/wKV/y8RFTVyoUKWgK0NI0KSf+BHLhgVoXJi2tFTa6cekLbbY6czcmU5pTNvH3CFNjMJJbnIWT973vOdc5fHrHT4eHJGMx4lGoySTKd7u7rKfTlMonLC2tk5w6RbKYaZAV/Qplct09R6OO0Dv9bCEQNbe+w8sBpZREkcZDtQOsS/HfMpV+Jyr8rVhcljX+X5+QXgnRjC4gvItc0xLt8gWS2g/zznrGrQNwZluYf8e8y6eIhBcRjkp5LGFQFXLNLQ6tmUxcF2cqXUqdWmdz+exLEFd0zAMA8dx6Lsutm17YCq1NwULGIZJWVXpOw6uO6Df718F5jEti2KxSKfT5mJwLVjwFCuq6tm6rns9aJomjUbDg6ZvCsoDBOR6vDBCUK1VEUJ4alJZ9uPxmGg09hdoWZTKJbrdXwyHQ09Rgv+FkeDpj1NarSaGaWIaxtWphW1Tq9XotNtUqlVazaYHTiYTb8ZFeZlsNud9AnkZaSdt5Yxy+aPRiEQieTmjpmmMRmN0Xfes/q10eh//zSWUUCjEejjMs+dP2Xq1ycbmBpGtCC8iL3mzvc2jJw+592AVZd7vZ9Y/x9zCLDP+GXwLPnyyD8xzIzDHyt3b3Lm/yh9wvUcUAOn7XQAAAABJRU5ErkJggg=="}},9836:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(4137)),s=n(5944);const i={sidebar_position:4,displayed_sidebar:"neonkube",title:"Azure Cluster",hide_title:!1,hide_table_of_contents:!1,description:"Getting started with NeonKUBE on Azure.",keywords:["azure"],last_update:{author:"Marcus Bowyer"}},o="Neon Desktop",l={unversionedId:"neonkube/installation/azure",id:"neonkube/installation/azure",title:"Azure Cluster",description:"Getting started with NeonKUBE on Azure.",source:"@site/docs/neonkube/installation/azure.mdx",sourceDirName:"neonkube/installation",slug:"/neonkube/installation/azure",permalink:"/docs/neonkube/installation/azure",draft:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/neonkube/installation/azure.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,displayed_sidebar:"neonkube",title:"Azure Cluster",hide_title:!1,hide_table_of_contents:!1,description:"Getting started with NeonKUBE on Azure.",keywords:["azure"],last_update:{author:"Marcus Bowyer"}},sidebar:"neonkube",previous:{title:"Desktop Cluster",permalink:"/docs/neonkube/installation/neon-desktop-cluster"},next:{title:"XenServer Cluster",permalink:"/docs/neonkube/installation/xenserver"}},u={},d=[{value:"Prerquisites",id:"prerquisites",level:2},{value:"Creating a cluster",id:"creating-a-cluster",level:2},{value:"Azure CLI",id:"azure-cli",level:3},{value:"Azure RBAC",id:"azure-rbac",level:3},{value:"Cluster Definition",id:"cluster-definition",level:3},{value:"Creating the Cluster",id:"creating-the-cluster",level:3}],p={toc:d},c="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"neon-desktop"},"Neon Desktop"),(0,r.kt)("h2",{id:"prerquisites"},"Prerquisites"),(0,r.kt)("p",null,"Make sure you have neon-desktop installed. To install, follow the neon-desktop installation instructions ",(0,r.kt)("a",{parentName:"p",href:"./neon-desktop"},"here")),(0,r.kt)("h2",{id:"creating-a-cluster"},"Creating a cluster"),(0,r.kt)("h3",{id:"azure-cli"},"Azure CLI"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://api-docs.neonforge.com/neonkube/api/Neon.Kube.ClusterDef.ClusterDefinition.html"},"Azure CLI"),"."),(0,r.kt)("h3",{id:"azure-rbac"},"Azure RBAC"),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"az ad sp create-for-rbac --name USER --role owner --scopes /subscriptions/SUBSCRIPTION_ID\n")),(0,r.kt)("p",null,"The output will be something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "appId": "generated-app-ID",\n  "displayName": "example-app-name",\n  "name": "http://example-app-name",\n  "password": "random-password",\n  "tenant": "tenant-ID"\n}\n')),(0,r.kt)("h3",{id:"cluster-definition"},"Cluster Definition"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("a",{parentName:"p",href:"https://api-docs.neonforge.com/neonkube/api/Neon.Kube.ClusterDef.ClusterDefinition.html"},"Cluster Definition")," that describes the cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: azure-small\ndatacenter: westus2\npurpose: development\ntimeSources:\n  - pool.ntp.org\nkubernetes:\n  allowPodsOnControlPlane: true\nstorage:\n  openEbs:\n    engine: cstor\nhosting:\n  environment: azure\n  cloud:\n    prefixResourceNames: default\n  azure:\n    subscriptionId: AZURE_SUBSCRIPTION_ID\n    tenantId: AZURE_TENANT_ID\n    clientId: AZURE_CLIENT_ID\n    clientSecret: AZURE_CLIENT_SECRET\n    region: westus2\n    disableProximityPlacement: false\n    defaultVmSize: Standard_E4vs_v5\nnodes:\n  control-0:\n    role: control-plane\n    openEbsStorage: true\n")),(0,r.kt)("p",null,"Save the Cluster Definition. The extension must me ",(0,r.kt)("inlineCode",{parentName:"p"},"*.cluster.yaml")),(0,r.kt)("h3",{id:"creating-the-cluster"},"Creating the Cluster"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Right click the neon-desktop icon in the taskbar > Deploy cluster",(0,r.kt)(s.Z,{img:n(5392),style:{width:300},mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"When the dialog pops up, select the Cluster Definition file you saved earlier."),(0,r.kt)("li",{parentName:"ol"},"Grab a coffee and wait for neon-desktop to create the cluster.")))}m.isMDXComponent=!0}}]);