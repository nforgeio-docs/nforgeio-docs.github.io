"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[7810],{1645:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var r=n(4848),i=n(8453);const t={sidebar_position:4,slug:"/hosting-options",displayed_sidebar:"neonkube",title:"Hosting Options",hide_title:!1,hide_table_of_contents:!0,description:"Describes cluster definition Hosting Options",last_update:{author:"NEONFORGE Team"}},l="Hosting Options",d={id:"neonkube/cluster-definition-details/hosting-options",title:"Hosting Options",description:"Describes cluster definition Hosting Options",source:"@site/docs/neonkube/cluster-definition-details/hosting-options.mdx",sourceDirName:"neonkube/cluster-definition-details",slug:"/hosting-options",permalink:"/docs/hosting-options",draft:!1,unlisted:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/neonkube/cluster-definition-details/hosting-options.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/hosting-options",displayed_sidebar:"neonkube",title:"Hosting Options",hide_title:!1,hide_table_of_contents:!0,description:"Describes cluster definition Hosting Options",last_update:{author:"NEONFORGE Team"}},sidebar:"neonkube",previous:{title:"Feature Options",permalink:"/docs/features"}},o={},c=[{value:"AWS",id:"aws",level:2},{value:"Azure",id:"azure",level:2},{value:"Hyper-V",id:"hyper-v",level:2},{value:"XenServer/XCP-ng",id:"xenserverxcp-ng",level:2},{value:"Common options for Hyper-V and XenServer/XCP-ng",id:"common-options-for-hyper-v-and-xenserverxcp-ng",level:2}];function h(e){const s={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:'ara\r\nimport Admonition from "@theme/Admonition";\r\nimport CodeBlock from "@theme/CodeBlock";\r\nimport Image from "@theme/IdealImage";\r\nimport TabItem from "@theme/TabItem";\r\nimport Tabs from "@theme/Tabs";'}),"\n",(0,r.jsx)(s.h1,{id:"hosting-options",children:"Hosting Options"}),"\n",(0,r.jsx)(s.p,{children:"Specifies hosting related settings for the cloud or on-premise provider.  This is required.\r\nWe're going to organize the documentation below by target hosting environment."}),"\n",(0,r.jsx)(s.h2,{id:"aws",children:"AWS"}),"\n",(0,r.jsx)(s.p,{children:"Here are the AWS related hosting options:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'hosting:\r\n  environment: aws\r\n  aws: \r\n    accessKeyId:\r\n\tavailabilityZone:\r\n\tcontrolPlanePlacementPartitions: -1\r\n\tdefaultInstanceType: c5.2xlarge\r\n\tdefaultEbsOptimized: false\r\n\tdefaultVolumeSize: "128 GiB"\r\n\tdefaultVolumeType: gp2\r\n\tdefaultOpenEbsVolumeSize: "128 GiB"\r\n\tdefaultOpenEbsVolumeType: gp2\r\n\tnetwork:\r\n\t  elasticIpEgressId: null\r\n\t  elasticIpIngressId: null\r\n\t  vpcSubnet: "10.100.0.0/16"\r\n\t  nodeSubnet: "10.100.0.0/24"\r\n\t  publicSubnet: "10.100.255.0/24"\r\n\tresourceGroup: null\r\n\tsecretAccessKey:\r\n\tworkerPlacementPartitions: 1\n'})}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Property"}),(0,r.jsx)("th",{children:"Description"})]}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"accessKeyId"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Specifies the AWS access key ID that identifies the IAM key created\r\nfor the IAM user assigned to NEONKUBE for management activities, including creating\r\nthe cluster.  This combined with ",(0,r.jsx)("b",{children:"SecretAccessKey"})," will be used to confirm the\r\nidentity.  This is required."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"availabilityZone"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Specifies the AWS zone where the cluster will be provisioned.  This is required."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"controlPlanePlacementPartitions"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"integer"}),": Specifies the number of control-plane placement group partitions the cluster\r\ncontrol-plane node instances will be deployed to.  This defaults to ",(0,r.jsx)("b",{children:"-1"})," which means\r\nthat the number  of partitions will equal the number of control-plane nodes.  AWS supports\r\na maximum of 7 placement partitions."]}),(0,r.jsxs)(s.p,{children:["AWS provides three different types of ",(0,r.jsx)("b",{children:"placement groups"})," to user help manage\r\nwhere virtual machine instances are provisioned within an AWS availability zone\r\nto customize fault tolerance due to AWS hardware failures:\r\n",(0,r.jsx)("a",{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html",children:"AWS Placement groups"})]}),(0,r.jsxs)(s.p,{children:["NEONKUBE provisions instances using two ",(0,r.jsx)("b",{children:"partition placement groups"}),", one for\r\nthe cluster control-plane nodes and the other for the workers.  The idea is that control-plane\r\nnodes should be deployed on separate hardware for fault tolerance because if the\r\nmajority of control-plane nodes go offline, the entire cluster will be dramatically impacted.\r\nIn general, the number of ",(0,r.jsx)("b",{children:"controlPlanePlacementPartitions"})," partitions should\r\nequal the number of control-plane nodes."]}),(0,r.jsxs)(s.p,{children:["Worker nodes are distributed across ",(0,r.jsx)("b",{children:"workerPlacementPartitions"}),"> partitions\r\nin a separate placement group.  The number of worker partitions defaults to 1, potentially\r\nlimiting the resilience to AWS hardware failures while making it more likely that AWS\r\nwill be able to actually satisfy the conditions to provision the cluster node instances."]}),(0,r.jsx)(s.p,{children:"Unfortunately, AWS may not have enough distinct hardware available to satisfy\r\nyour requirements.  In this case, we recommend that you try another availability\r\nzone first and if that doesn't work try reducing the number of partitions which\r\ncan be as low as 1 partition."})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"defaultInstanceType"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Identifies the default AWS instance type to be provisioned for cluster nodes that don't\r\nspecify an instance type.  This defaults to ",(0,r.jsx)("b",{children:"c5.2xlarge"})," which includes 8 virtual cores and\r\n16 GiB RAM but can be overridden for specific cluster nodes."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{children:"NOTE:"})," NEONKUBE clusters cannot be deployed to ARM-based AWS instance types.  You must\r\nspecify an instance type using a Intel or AMD 64-bit processor."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{children:"NOTE:"})," NEONKUBE requires control-plane and worker instances to have at least 4 CPUs and 8GiB RAM.  Choose\r\nan AWS instance type that satisfies these requirements."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"defaultEbsOptimized"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"bool"}),": Specifies whether the cluster instances should be EBS-optimized by default.",(0,r.jsx)(s.br,{}),"\n","This defaults to ",(0,r.jsx)("b",{children:"false"})," and can be overidden for specific cluster nodes.\r\nSee this for more information: ",(0,r.jsx)("a",{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html",children:"Amazon EBS\ufffdoptimized instances"})]}),(0,r.jsx)(s.p,{children:"Non EBS optimized instances perform disk operation I/O to EBS volumes using the same\r\nnetwork used for other network operations.  This means that you may see some disk\r\nperformance issues when your instance is busy serving web traffic or running\r\ndatabase queries, etc."}),(0,r.jsx)(s.p,{children:"EBS optimization can be enabled for some instance types.  This provisions extra dedicated\r\nnetwork bandwidth exclusively for EBS I/O.  Exactly how this works, depends on the specific\r\nVM type."}),(0,r.jsx)(s.p,{children:"More modern AWS VM types enable EBS optimization by default and you won't incur any\r\nadditional charges for these instances and disabling EBS optimization won't have any\r\neffect."}),(0,r.jsx)(s.p,{children:"Some AWS instance types can be optimized but this is disabled by default.  When you\r\nenable this, you'll probably an additional AWS hourly fee for these instances."}),(0,r.jsx)(s.p,{children:"Some AWS instance types don't support EBS optimization.  You'll need to be sure that\r\nthis is disabled for those nodes."})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"defaultVolumeSize"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Specifies the default AWS volume size for the cluster node primary disks.\r\nThis defaults to ",(0,r.jsx)("b",{children:"128 GiB"})," but can be overridden for specific cluster nodes."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{children:"NOTE:"})," Node disks smaller than 32 GiB are not supported by NEONKUBE.  We'll\r\nautomatically round up the disk size when necessary."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"defaultVolumeType"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Specifies the default AWS volume type for cluster node primary disks.  This defaults\r\nto ",(0,r.jsx)("b",{children:"gp2"})," which is SSD based and offers a reasonable compromise between performance and cost.\r\nThis can be overriden for specific cluster nodes."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"defaultOpenEbsVolumeSize"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Specifies the default AWS volume size to be used when creating\r\nOpenEBS cStor disks.  This defaults to ",(0,r.jsx)("b",{children:"128 GiB"})," but can be overridden\r\nfor specific cluster nodes."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{children:"NOTE:"})," Node disks smaller than 32 GiB are not supported by NEONKUBE.",(0,r.jsx)(s.br,{}),"\n","We'll automatically round up the disk size when necessary."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"defaultOpenEbsVolumeType"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Specifies the default AWS volume type to use for OpenEBS cStor disks.  This defaults\r\nto ",(0,r.jsx)("b",{children:"gp2"})," which is SSD based and offers a reasonable compromise between performance and cost.\r\nThis can be overridden for specific cluster nodes."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"network"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"object"}),": Specifies the AWS related cluster network options."]}),(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Property"}),(0,r.jsx)("th",{children:"Description"})]}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"elasticIpEgressId"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Optionally specifies an existing Elastic IP address to be used by the cluster\r\nload balancer for receiving network traffic.  Set this to your Elastic IP allocation ID\r\n(something like ",(0,r.jsx)("b",{children:"eipalloc-080a1efa9c04ad72"}),").  This is useful for ensuring that your\r\ncluster is always provisioned with a known static IP."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{children:"NOTE:"})," When this isn't specified, the cluster will be configured with new Elastic IPs\r\nthat will be released when the cluster is deleted."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{children:"NOTE:"})," ",(0,r.jsx)("b",{children:"elasticIpIngressId"})," and ",(0,r.jsx)("b",{children:"ElasticIpEgressId"})," must be specified\r\ntogether or not at all."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"elasticIpIngressId"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Optionally specifies an existing Elastic IP address to be used by the cluster\r\nload balancer for sending network traffic.  Set this to your Elastic IP allocation ID\r\n(something like ",(0,r.jsx)("b",{children:"eipalloc-080a1efa9c04ad88"}),").  This is useful for ensuring that your\r\ncluster is always provisioned with a known static IP."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{children:"NOTE:"})," When this isn't specified, the cluster will be configured with new Elastic IPs\r\nthat will be released when the cluster is deleted."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{children:"NOTE:"})," ",(0,r.jsx)("b",{children:"elasticIpIngressId"})," and ",(0,r.jsx)("b",{children:"ElasticIpEgressId"})," must be specified\r\ntogether or not at all."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"vpcSubnet"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Specifies the subnet CIDR to used for AWS VPC (virtual private cloud) provisioned\r\nfor the cluster.  This must surround the ",(0,r.jsx)("b",{children:"nodeSubnet"})," and ",(0,r.jsx)("b",{children:"publicSubnet"})," subnets.\r\nThis defaults to ",(0,r.jsx)("b",{children:"10.100.0.0/16"}),"."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"privateSubnet"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Specifies the private subnet CIDR within ",(0,r.jsx)("b",{children:"vpcSubnet"})," ",(0,r.jsx)("see",{cref:""})," for the private subnet\r\nwhere the cluster node instances will be provisioned.  This defaults to ",(0,r.jsx)("b",{children:"10.100.0.0/24"}),"."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"publicSubnet"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Specifies the public subnet CIDR within ",(0,r.jsx)("b",{children:"vpcSubnet"})," for the public subnet where\r\nthe AWS network load balancer will be provisioned to manage inbound cluster traffic.  This defaults\r\nto ",(0,r.jsx)("b",{children:"10.100.255.0/16"}),"."]})})]})]})]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"resourceGroup"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),': Specifies the AWS resource group where all cluster components are to be provisioned.\r\nThis defaults to "neon-" plus the cluster name but can be customized as required.']})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"secretAccessKey"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Specifies the AWS secret used to authenticate the ",(0,r.jsx)("b",{children:"AccessKeyId"}),".\r\nThis is required."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"workerPlacementPartitions"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"integer"}),": Specifies the number of worker placement group partitions the cluster\r\nworker node instances will be deployed to.  This defaults to ",(0,r.jsx)("b",{children:"1"})," trading off\r\nresilience to hardware failures against increasing the chance that AWS will actually\r\nbe able to provision the cluster nodes.  AWS supports a maximum of 7 placement partitions."]}),(0,r.jsxs)(s.p,{children:["AWS provides three different types of ",(0,r.jsx)("b",{children:"placement groups"})," to user help manage\r\nwhere virtual machine instances are provisioned within an AWS availability zone\r\nto customize fault tolerance due to AWS hardware failures.  See:\r\n",(0,r.jsx)("a",{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html",children:"AWS Placement groups"})]}),(0,r.jsxs)(s.p,{children:["NEONKUBE provisions instances using two ",(0,r.jsx)("b",{children:"partition placement groups"}),", one for\r\nthe cluster control-plane nodes and the other for the workers.  The idea is that control-plane\r\nnodes should be deployed on separate hardware for fault tolerance because if the\r\nmajority of control-plane nodes go offline, the entire cluster will be dramatically impacted.\r\nIn general, the number of ",(0,r.jsx)("b",{children:"c>ontrolPlanePlacementPartitions"})," partitions should\r\nequal the number of control-plane nodes."]}),(0,r.jsxs)(s.p,{children:["Worker nodes are distributed across see ",(0,r.jsx)("b",{children:"WorkerPlacementPartitions"})," partitions\r\nin a separate placement group.  The number of worker partitions defaults to 1, potentially\r\nlimiting the resilience to AWS hardware failures while making it more likely that AWS\r\nwill be able to actually satisfy the conditions to provision the cluster node instances."]}),(0,r.jsx)(s.p,{children:"Unfortunately, AWS may not have enough distinct hardware available to satisfy\r\nyour requirements.  In this case, we recommend that you try another availability\r\nzone first and if that doesn't work try reducing the number of partitions which\r\ncan be as low as 1 partition."})]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"azure",children:"Azure"}),"\n",(0,r.jsx)(s.p,{children:"Here are the Azure related hosting options:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"hosting:\r\n  environment: azure\n"})}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Property"}),(0,r.jsx)("th",{children:"Description"})]}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"environment"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Deploys the cluster to Azure."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"azure"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Specifies the Amazon Web Services (AWS) hosting settings."]}),(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Property"}),(0,r.jsx)("th",{children:"Description"})]}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"enabled"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"bool"}),": Optionally installs Harbor. This defaults to ",(0,r.jsx)(s.code,{children:"false"}),"."]})})]})})]})]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"hyper-v",children:"Hyper-V"}),"\n",(0,r.jsx)(s.p,{children:"Here are the Hyper-V related hosting options:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"hosting:\r\n  environment: azure\n"})}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Property"}),(0,r.jsx)("th",{children:"Description"})]}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"environment"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Deploys the cluster to Azure."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"azure"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Specifies the Amazon Web Services (AWS) hosting settings."]}),(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Property"}),(0,r.jsx)("th",{children:"Description"})]}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"enabled"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"bool"}),": Optionally installs Harbor. This defaults to ",(0,r.jsx)(s.code,{children:"false"}),"."]})})]})})]})]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"xenserverxcp-ng",children:"XenServer/XCP-ng"}),"\n",(0,r.jsx)(s.p,{children:"Here are the XenServer/XCP-ng related hosting options:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"hosting:\r\n  environment: azure\n"})}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Property"}),(0,r.jsx)("th",{children:"Description"})]}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"environment"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Deploys the cluster to Azure."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"azure"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Specifies the Amazon Web Services (AWS) hosting settings."]}),(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Property"}),(0,r.jsx)("th",{children:"Description"})]}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"enabled"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"bool"}),": Optionally installs Harbor. This defaults to ",(0,r.jsx)(s.code,{children:"false"}),"."]})})]})})]})]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"common-options-for-hyper-v-and-xenserverxcp-ng",children:"Common options for Hyper-V and XenServer/XCP-ng"}),"\n",(0,r.jsx)(s.p,{children:"Specifies common hosting settings for on-premise hypervisor environments like Hyper-V and XenServer."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"hosting:\r\n  environment: hyperv/xenserver\n"})}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Property"}),(0,r.jsx)("th",{children:"Description"})]}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"environment"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Deploys the cluster to AWS."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"hypervisor"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Specifies the Amazon Web Services (AWS) hosting settings."]}),(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Property"}),(0,r.jsx)("th",{children:"Description"})]}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"enabled"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"bool"}),": Optionally installs Harbor. This defaults to ",(0,r.jsx)(s.code,{children:"false"}),"."]})})]})})]})]})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);