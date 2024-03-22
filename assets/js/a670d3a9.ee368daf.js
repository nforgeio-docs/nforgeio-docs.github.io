"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[2646],{448:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var r=i(4848),n=i(8453);i(4182),i(1801),i(3012),i(7227),i(9489);const t={sidebar_position:2,displayed_sidebar:"neonkube",title:"Azure",hide_title:!1,hide_table_of_contents:!0,description:"Azure hosting options",last_update:{author:"NeonFORGE Team"}},d="Azure Hosting Options",o={id:"neonkube/cluster-definition/hosting-options/azure-hosting-options",title:"Azure",description:"Azure hosting options",source:"@site/docs/neonkube/cluster-definition/hosting-options/azure-hosting-options.mdx",sourceDirName:"neonkube/cluster-definition/hosting-options",slug:"/neonkube/cluster-definition/hosting-options/azure-hosting-options",permalink:"/docs/neonkube/cluster-definition/hosting-options/azure-hosting-options",draft:!1,unlisted:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/neonkube/cluster-definition/hosting-options/azure-hosting-options.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,displayed_sidebar:"neonkube",title:"Azure",hide_title:!1,hide_table_of_contents:!0,description:"Azure hosting options",last_update:{author:"NeonFORGE Team"}},sidebar:"neonkube",previous:{title:"AWS",permalink:"/docs/neonkube/cluster-definition/hosting-options/aws-hosting-options"},next:{title:"Hypervisor",permalink:"/docs/neonkube/cluster-definition/hosting-options/hypervisor-hosting-options"}},l={},a=[];function c(e){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"azure-hosting-options",children:"Azure Hosting Options"}),"\n",(0,r.jsxs)(s.p,{children:["Here's what the Azure related hosting options looks like, with the default\r\nvalues or ",(0,r.jsx)(s.strong,{children:"[required]"})," for property values that must be specified:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'hosting:\r\n  environment: azure\r\n  azure:\r\n    clientId:                     [required]\r\n    clientSecret:                 [required]\r\n    cloud:                        "global-cloud"\r\n    defaultDiskSize:              "128 GiB"\r\n    defaultOpenEbsDiskSize:       "128 GiB"\r\n    defaultOpenEbstorageType:     "standard-ssd"\r\n    defaultStorageType:           "standard-ssd"\r\n    defaultVmSize:                "Standard_D4as_v4"\r\n    disableProximityPlacement:    false\r\n    domainLabel:                  "neon-[UUID]"\r\n    faultDomains:                 3\r\n    network:                   \r\n      egressPublicIpAddressId:    null\r\n      egressPublicIpPrefixId:     null\r\n      egressPublicIpPrefixLength: 0\r\n      ingressPublicIpAddressId:   null\r\n      maxNatGatewayTcpIdle:       120\r\n      nodeSubnet:                 10.100.0.0/24\r\n      vnetSubnet:                 10.100.0.0/24\r\n    region:                       [required]\r\n    resourceGroup:                "neon-[CLUSTERNAME]"\r\n    subscriptionId:               [required]\r\n    tenantId:                     [required]\r\n    updateDomains:                20\n'})}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Property"}),(0,r.jsx)("th",{children:"Description"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"environment"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string:"})," Deploys the cluster to Azure."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"azure"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string:"})," Specifies the Amazon Web Services (AWS) hosting settings."]}),(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Property"}),(0,r.jsx)("th",{children:"Description"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"clientId"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string:"})," Client/Application ID for the application created to manage Azure access\r\nto NeonKUBE provisioning and management tools.  This is required."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"clientSecret"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string:"})," ClientSecret/AppPassword generated when creating the neon tool's Azure\r\nservice principal.  This is required."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"cloud"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string:"}),"  Optionally specifies the target Azure cloud environment.  Supported\r\nvalues are: ",(0,r.jsx)(s.strong,{children:"global-cloud"}),", ",(0,r.jsx)(s.strong,{children:"custom"}),", ",(0,r.jsx)(s.strong,{children:"china"}),", ",(0,r.jsx)(s.strong,{children:"german"}),", or ",(0,r.jsx)(s.strong,{children:"us-government"}),".\r\nThis defaults to ",(0,r.jsx)(s.strong,{children:"global-cloud"}),"."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"defaultDiskSize"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string:"})," Specifies the default Azure disk size to be used when cluster node primary disks.\r\nThis defaults to ",(0,r.jsx)("b",{children:"128 GiB"})," but this can be overridden for specific cluster nodes."]}),(0,r.jsx)(s.p,{children:"This table indicates the disk sizes that can be used for Azure storage types:"}),(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Storage Type"}),(0,r.jsx)("th",{children:"Valid Disk Sizes"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"standard\u2011hdd"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:"4GiB, 8GiB, 16GiB, 32GiB, 64GiB, 128GiB, 256GiB, 512GiB,\r\n1TiB, 2TiB, 4TiB, 8TiB, 16TiB, or 32TiB"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"standard\u2011ssd"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:"4GiB, 8GiB, 16GiB, 32GiB, 64GiB, 128GiB, 256GiB, 512GiB,\r\n1TiB, 2TiB, 4TiB, 8TiB, 16TiB, or 32TiB"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"premium\u2011ssd"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:"4GiB, 8GiB, 16GiB, 32GiB, 64GiB, 128GiB, 256GiB, 512GiB,\r\n1TiB, 2TiB, 4TiB, 8TiB, 16TiB, or 32TiB"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"premium\u2011ssd\u2011v2"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:"4GiB, 8GiB, 16GiB, 32GiB, 64GiB, 128GiB, 256GiB, 512GiB,\r\n1TiB, 2TiB, 4TiB, 8TiB, 16TiB, or 32TiB"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"ultra\u2011ssd"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:"4 GiB, 8 GiB, 16 GiB, 32 GiB, 64 GiB, 128 GiB, 256 GiB, 512 GiB,\r\nor from 1 TiB to 64TiB in increments of 1 TiB."})})]})]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"defaultOpenEbsDiskSize"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string:"})," Optionally specifies pecifies the default size for cluster node secondary data disks used for OpenEBS storage.\r\nThis defaults to ",(0,r.jsx)("b",{children:"128 GiB"})," but can be overridden for specific cluster nodes"]}),(0,r.jsx)(s.p,{children:"This table indicates the disk sizes that can be used for Azure storage types:"}),(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Storage Type"}),(0,r.jsx)("th",{children:"Valid Disk Sizes"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"standard\u2011hdd"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:"4GiB, 8GiB, 16GiB, 32GiB, 64GiB, 128GiB, 256GiB, 512GiB,\r\n1TiB, 2TiB, 4TiB, 8TiB, 16TiB, or 32TiB"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"standard\u2011ssd"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:"4GiB, 8GiB, 16GiB, 32GiB, 64GiB, 128GiB, 256GiB, 512GiB,\r\n1TiB, 2TiB, 4TiB, 8TiB, 16TiB, or 32TiB"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"premium\u2011ssd"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:"4GiB, 8GiB, 16GiB, 32GiB, 64GiB, 128GiB, 256GiB, 512GiB,\r\n1TiB, 2TiB, 4TiB, 8TiB, 16TiB, or 32TiB"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"premium\u2011ssd\u2011v2"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:"4GiB, 8GiB, 16GiB, 32GiB, 64GiB, 128GiB, 256GiB, 512GiB,\r\n1TiB, 2TiB, 4TiB, 8TiB, 16TiB, or 32TiB"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"ultra\u2011ssd"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:"4 GiB, 8 GiB, 16 GiB, 32 GiB, 64 GiB, 128 GiB, 256 GiB, 512 GiB,\r\nor from 1 TiB to 64TiB in increments of 1 TiB."})})]})]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"defaultOpenEbstorageType"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string:"})," Optionally specifies the default Azure storage type of be used for the cluster node secondary data disks\r\nused for OpenEBS storage.  Supported values are: ",(0,r.jsx)(s.strong,{children:"standard\u2011hhd"}),", ",(0,r.jsx)(s.strong,{children:"standard\u2011ssd"}),", ",(0,r.jsx)(s.strong,{children:"premium\u2011ssd"}),", ",(0,r.jsx)(s.strong,{children:"premium\u2011ssd\u2011v2"}),",\r\nor ",(0,r.jsx)(s.strong,{children:"ultravssd"}),"."]}),(0,r.jsxs)(s.p,{children:["This defaults ",(0,r.jsx)(s.strong,{children:"standard\u2011ssd"})," but this can be overridden for specific cluster nodes."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"defaultStorageType"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string:"})," Optionally specifies the default Azure storage type of be used for the cluster node primary OS disk.\r\nSupported values are: ",(0,r.jsx)(s.strong,{children:"standardvhhd"}),", ",(0,r.jsx)(s.strong,{children:"standardvssd"}),", ",(0,r.jsx)(s.strong,{children:"premium\u2011ssd"}),", ",(0,r.jsx)(s.strong,{children:"premiumvssdvv2"}),", or ",(0,r.jsx)(s.strong,{children:"ultra\u2011ssd"}),"."]}),(0,r.jsxs)(s.p,{children:["This defaults ",(0,r.jsx)(s.strong,{children:"standard\u2011ssd"})," but this can be overridden for specific cluster nodes."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"defaultVmSize"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string:"})," Optionally specifies the default Azure virtual machine size  to use for cluster nodes.\r\nThe available VM sizes are listed here: ",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-general",children:"Azure VM Sizes"})]}),(0,r.jsxs)(s.p,{children:["This defaults to ",(0,r.jsx)(s.strong,{children:"Standard_D4as_v4"}),"."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"disableProximityPlacement"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"bool:"})," Optionally disables VM proximity placement.  This defaults to ",(0,r.jsx)("c",{children:"false"}),"."]}),(0,r.jsxs)(s.p,{children:["NeonKUBE cluster VMs are all deployed within the same Azure ",(0,r.jsx)(s.a,{href:"https://azure.microsoft.com/en-us/blog/introducing-proximity-placement-groups/",children:"placement group"}),"\r\nby default.  This ensures the shortest possible network latency between the cluster VMs."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"NOTE:"})," Proximity placement groups have one downside: they make it more likely that Azure\r\nmay not be able to find enough unused VMs to satisfy the proximity constraints.  This\r\ncan happen when you first provision a cluster or later on when you try to scale one."]}),(0,r.jsx)(s.p,{children:"For NeonKUBE clusters the additional risk of an Azure provisioning failure is going\r\nto be very low due to how we use availability sets, which is as similar deployment\r\nconstraint: control-plane nodes are deployed to one availability set and workers to another.\r\nWithout a proximity placement group, Azure could deploy the control-plane nodes to one datacenter\r\nand the workers to another.  This wasn't that likely in the past but as Azure has\r\nadded more datacenters, the chance of this happening has increased."}),(0,r.jsx)(s.p,{children:"Adding the proximity placement constrain, requires that Azure deploy both the control-plane nodes\r\nand workers in the same datacenter.  So say your cluster has 3 control-plane nodes and 50 workers.\r\nWith proximity placement enabled, the Azure region will need to have a datacenter with\r\n53 VMs available with the specified sizes.  With proximity placement disabled, Azure\r\ncould deploy the 3 control-plane nodes in one datacenter and the 50 workers in another."})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"domainLabel"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string:"})," Optionally specifies the DNS domain prefix for the public IP address\r\nto be assigned to the cluster.  This defaults to ",(0,r.jsx)(s.strong,{children:"neon-UUID"})," where UUID is\r\ngenerated."]}),(0,r.jsx)(s.p,{children:"This must be unique across all services deployed to an Azure region (your\r\nservices as well as any other Azure cluster).  The IP address will be exposed\r\nby the Azure DNS like:"}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"DOMAINLABEL.AZURE-REGION.cloudapp.azure.com"})}),(0,r.jsxs)(s.p,{children:["For example, a public IP address with the ",(0,r.jsx)("b",{children:"mycluster"})," deployed to the\r\nAzure ",(0,r.jsx)(s.strong,{children:"westus"})," region would have this DNS name:"]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"mycluster.westus.cloudapp.azure.com"})}),(0,r.jsx)(s.p,{children:"Labels can be up to 80 characters in length and may include letters, digits,\r\ndashes, underscores, and periods."})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"faultDomains"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"integer:"})," Specifies the number of Azure fault domains the worker nodes should be\r\ndistributed across.  This defaults to ",(0,r.jsx)(s.strong,{children:"3"})," which should not be increased\r\nwithout making sure that your subscription supports the increase (most won't)."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"NOTE:"})," Manager nodes will always be provisioned in three fault domains to\r\nensure that there will always be a quorum after any single fault domain failure."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"network"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"object:"})," Specifies the Azure related cluster network options."]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)("u",{children:"network.egressPublicIpAddressId"})})}),(0,r.jsx)(s.p,{children:"Optionally specifies the ID of an existing public IPv4 address to be assigned\r\nto the NAT Gateway for sending outboung network traffic."}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"IMPORTANT:"})," This resource must be located in the same region as the cluster."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"NOTE:"})," Setting this is handy when clusters are reprovisioned because the cluster\r\nwill  end up using the same egress address as before, meaning you won't have to update\r\nwhitelist rules for other services, etc."]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)("u",{children:"network.egressPublicIpPrefixId"})})}),(0,r.jsx)(s.p,{children:"Optionally specifies the ID of an existing public IPv4 prefix to be assigned\r\nto the NAT Gateway to send outboung network traffic."}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"IMPORTANT:"})," This resource must be located in the same region as the cluster."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"NOTE:"})," Setting this is handy when clusters are reprovisioned because the cluster will\r\nend up using the same egress addresses as before, meaning you won't have to update\r\nwhitelist rules for other services, etc."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"NOTE:"})," Azure clusters support a maximum of 16 IP addresses per prefix."]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)("u",{children:"network.egressPublicIpPrefixLength"})})}),(0,r.jsx)(s.p,{children:"Optionally indicates that a public IPv4 prefix with the specified prefix length should\r\nbe created and assigned to the NAT Gateway for outbound traffic.  Set this to a one of\r\nthe following non-zero values to enable this:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"0"})," - ",(0,r.jsx)(s.strong,{children:"(default)"}),"   disables prefix creation for the cluster"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"31"})," - creates a public IPv4 prefix with ",(0,r.jsx)("b",{children:"2"})," public IP addresses"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"30"})," - creates a public IPv4 prefix with ",(0,r.jsx)("b",{children:"4"})," public IP addresses"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"29"})," - creates a public IPv4 prefix with ",(0,r.jsx)("b",{children:"8"})," public IP addresses"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"28"})," - creates a public IPv4 prefix with ",(0,r.jsx)("b",{children:"16"})," public IP addresses (the maximum supported by Azure)"]}),"\n"]}),(0,r.jsxs)(s.p,{children:["Larger clusters making lots of external network requests may need to select a prefix with additional IP addresses to avoid\r\n",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-outbound-connections#outboundrules",children:"SNAT Exhaustion"}),"."]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)("u",{children:"network.ingressPublicIpAddressId"})})}),(0,r.jsx)(s.p,{children:"Optionally specifies the ID of an existing public IPv4 address to be assigned\r\nto the load balancer to receive inbound network traffic.  A new address will\r\nbe created when this isn't specified."}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"IMPORTANT:"}),"> This resource must be located in the same region as the cluster."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"NOTE:"})," Setting this is handy when clusters are reprovisioned because the cluster will\r\nend up with the same public address as before, meaning you won't have to update your\r\nDNS configuration, etc."]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)("u",{children:"network.maxNatGatewayTcpIdle"})})}),(0,r.jsxs)(s.p,{children:["Optionally specifies the maximum time ",(0,r.jsx)(s.strong,{children:"in minutes"})," that the cluster's NAT gateway will\r\nretain an idle outbound TCP connection.  This may be set to between ",(0,r.jsx)(s.strong,{children:"4..120"})," minutes\r\ninclusive.  This defaults to ",(0,r.jsx)("b",{children:"120 minutes"}),"."]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)("u",{children:"network.nodeSubnet"})})}),(0,r.jsxs)(s.p,{children:["Specifies the subnet where the cluster nodes will be provisioned.  This defaults to ",(0,r.jsx)(s.strong,{children:"10.100.0.0/24"}),"."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"NOTE:"})," ",(0,r.jsx)(s.strong,{children:"nodeSubnet"})," must be the same or a subset of ",(0,r.jsx)(s.strong,{children:"vnetSubnet"}),"."]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)("u",{children:"network.vnetSubnet"})})}),(0,r.jsxs)(s.p,{children:["Optionally specifies the subnet for the Azure VNET.  This defaults to ",(0,r.jsx)(s.strong,{children:"10.100.0.0/24"}),"."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"NOTE:"})," ",(0,r.jsx)(s.strong,{children:"vnetSubnet"})," must be the same or a superset of ",(0,r.jsx)(s.strong,{children:"nodeSubnet"}),"."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"region"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string:"})," Identifies the target Azure region (e.g. ",(0,r.jsx)(s.strong,{children:"westus"}),").  This is required."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"resourceGroup"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string:"})," Optionally spoecifies the Azure resource group where all cluster components\r\nare to be provisioned.  This defaults to ",(0,r.jsx)(s.strong,{children:'"neon-"'})," plus the cluster name but can be\r\ncustomized as required."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"IMPORTANT:"})," Everything in this resource group will be deleted when the cluster is\r\nremoved.  This means that you must be very careful when adding other resources to this\r\ngroup because they will be deleted as well."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"subscriptionId"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string:"})," Specifies your Azure account subscription ID.  This is required."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"tenantId"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string:"})," Specifies your Azure accoount Tenant ID.  This is required."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"updateDomains"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"integer:"})," Optionally specifies the number of Azure update domains the cluster workers will\r\ndistributed across.  This defaults to ",(0,r.jsx)(s.strong,{children:"20"}),"  You may customize this with a value in the\r\nrange of: ",(0,r.jsx)(s.strong,{children:"2...20"})]}),(0,r.jsx)(s.p,{children:"Azure automatically distributes VMs across the specified number of update\r\ndomains and when it's necessary to perform planned maintenance on the underlying\r\nhardware or to relocate a VM to another host, Azure guarantees that it will\r\nreboot hosts in only one update domain at a time and then wait 30 minutes between\r\nupdate domains to give the application a chance to stabilize."}),(0,r.jsxs)(s.p,{children:["A value of ",(0,r.jsx)(s.strong,{children:"2"})," indicates that one half of the cluster servers may be rebooted\r\nat the same time during an update domain upgrade.  A value of ",(0,r.jsx)(s.strong,{children:"20"})," indicates\r\nthat one twentieth of your VMs may be rebooted in parallel."]}),(0,r.jsx)(s.p,{children:"There's no way to specifically assign cluster nodes to specific update domains\r\nin Azure.  This would have been nice for a cluster hosting replicated database\r\nnodes where we'd like to assign replica nodes to different update domains such\r\nthat all data would still be available while an update domain was being rebooted."}),(0,r.jsx)(s.p,{children:"I imagine Azure doesn't allow this due to the difficuilty of ensuring these\r\nconstraints across a very large number of customer deployments.  Azure also\r\nmentions that the disruption of a VM for planned maintenance can be slight\r\nbecause VMs can be relocated from one host to another while still running."}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"NOTE:"})," Manager nodes are always deployed with 20 update domains and since no cluster\r\nshould ever need anywhere close this number of managers, we'll be ensured\r\nthat only a single manager will be rebooted together during planned Azure\r\nmaintenance and the 30 minutes Azure waits after rebooting an update domain\r\ngives the rebooted manager a chance to rejoin the other managers and catch\r\nup on any changes that happened while it was offline."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"NOTE:"})," NeonKUBE deploys manager and worker nodes in separate Azure availability zones.\r\nThis means that there will always be a quorum of managers available as any one\r\nupdate zone is rebooted."]})]})]})]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);