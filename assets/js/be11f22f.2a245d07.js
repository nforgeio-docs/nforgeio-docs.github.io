"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[170],{9210:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>o,metadata:()=>h,toc:()=>c});var n=i(4848),r=i(8453);i(4182),i(1801),i(3012),i(7227),i(9489);const o={sidebar_position:3,displayed_sidebar:"neonkube",title:"Hypervisor",hide_title:!1,hide_table_of_contents:!0,description:"Common on-premise hypervisior hosting options",last_update:{author:"NeonFORGE Team"}},t="Common Hypervisor Hosting Options",h={id:"neonkube/cluster-definition/hosting-options/hypervisor-hosting-options",title:"Hypervisor",description:"Common on-premise hypervisior hosting options",source:"@site/docs/neonkube/cluster-definition/hosting-options/hypervisor-hosting-options.mdx",sourceDirName:"neonkube/cluster-definition/hosting-options",slug:"/neonkube/cluster-definition/hosting-options/hypervisor-hosting-options",permalink:"/docs/neonkube/cluster-definition/hosting-options/hypervisor-hosting-options",draft:!1,unlisted:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/neonkube/cluster-definition/hosting-options/hypervisor-hosting-options.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,displayed_sidebar:"neonkube",title:"Hypervisor",hide_title:!1,hide_table_of_contents:!0,description:"Common on-premise hypervisior hosting options",last_update:{author:"NeonFORGE Team"}},sidebar:"neonkube",previous:{title:"Azure",permalink:"/docs/neonkube/cluster-definition/hosting-options/azure-hosting-options"},next:{title:"Hyper-V",permalink:"/docs/neonkube/cluster-definition/hosting-options/hyperv-hosting-options"}},d={},c=[];function l(e){const s={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"common-hypervisor-hosting-options",children:"Common Hypervisor Hosting Options"}),"\n",(0,n.jsxs)(s.p,{children:["The NeonKUBE on-premise ",(0,n.jsx)(s.strong,{children:"xenserver"})," hosting environment relies on the ",(0,n.jsx)(s.strong,{children:"hypervisorOptions"})," to locate the host\nhypervisor servers where the cluster node VMs will be provisioned, including their ",(0,n.jsx)(s.strong,{children:"hostname"})," (or ip addresses),\n",(0,n.jsx)(s.strong,{children:"username"})," and ",(0,n.jsx)(s.strong,{children:"password"})," as well default VM settings such as the number of ",(0,n.jsx)(s.strong,{children:"vCPUs"}),", ",(0,n.jsx)(s.strong,{children:"memory"}),", and ",(0,n.jsx)(s.strong,{children:"disk"}),"\nrespources to be assigned. This can be overriden for specific nodes."]}),"\n",(0,n.jsxs)(s.p,{children:["Here's what the common on-premise Hypervisor related hosting options looks like, with the default values or\n",(0,n.jsx)(s.strong,{children:"[required]"})," for property values that must be specified:"]}),"\n","\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"hosting:\n  hypervisor:\n    diskLocation: null\n    hosts:        [required]\n    - address:    [required]\n      name:       [required]\n      username:   [required]\n      password:   [required]\n    hostUsername: null\n    hostPassword: null\n    memory:       16 GiB\n    namePrefix:   [CLUSTERNAME-]\n    openEbsDisk:  128 GiB\n    osDisk:       128 GiB\n    vcpus:        4\n"})}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("thead",{children:[(0,n.jsx)("th",{children:"Property"}),(0,n.jsx)("th",{children:"Description"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"hypervisor"})}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"string:"})," Specifies common on-premise hypervisor server settings."]}),(0,n.jsxs)("table",{children:[(0,n.jsxs)("thead",{children:[(0,n.jsx)("th",{children:"Property"}),(0,n.jsx)("th",{children:"Description"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"diskLocation"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"string:"})," Specifies the path to the location where virtual machine hard disk will be created.\nThis defaults to the local Hyper-V folder for Windows."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"hosts"})}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"array:"})," Specifies one or more target hypervisor servers for XenServer cluster deployments.\nCluster nodes will reference these hosts by name indicating that the node should be deployed\non the target hyoervisor.  This is required for XenServer deployments."]}),(0,n.jsx)("u",{children:(0,n.jsx)(s.strong,{children:"address"})}),(0,n.jsx)(s.p,{children:"Specifies the IP address or FQDN of the hypervisor machine."}),(0,n.jsx)("u",{children:(0,n.jsx)(s.strong,{children:"name"})}),(0,n.jsxs)(s.p,{children:["Specifies the hypervisor host name.  This is used to by ",(0,n.jsx)("see",{cref:"NodeDefinition"})," instances\nto specify where a cluster node is to be provisioned."]}),(0,n.jsx)("u",{children:(0,n.jsx)(s.strong,{children:"password"})}),(0,n.jsxs)(s.p,{children:["Specifies the custom password to use when connecting to the hypervisor machine.  This\noverrides ",(0,n.jsx)(s.strong,{children:"hosting.hypervisor.hostPassword"}),"."]}),(0,n.jsx)("u",{children:(0,n.jsx)(s.strong,{children:"username"})}),(0,n.jsxs)(s.p,{children:["Specifies the custom username to use when connecting to the hypervisor machine.  This\noverrides ",(0,n.jsx)(s.strong,{children:"hosting.hypervisor.hostUsername"}),"."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"hostUsername"})}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"string:"})," Specifies the default username to use for connecting to hypervisor host machines\nspecified by ",(0,n.jsx)(s.strong,{children:"hosts"}),".   This may be overridden for specific hypervisor machines."]}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"NOTE:"})," This defaults to ",(0,n.jsx)(s.strong,{children:"root"})," for XenServer based environments, ",(0,n.jsx)(s.strong,{children:"null"})," otherwise."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"hostPassword"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"string:"}),"  Specifies the default password to use for connecting to hypervisor host machines\nspecified by ",(0,n.jsx)(s.strong,{children:"hosts"}),".  This may be overridden for specific hypervisor machines within ",(0,n.jsx)(s.strong,{children:"hosts"}),"\nitems.  This defaults to ",(0,n.jsx)(s.strong,{children:"null"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"memory"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"string:"})," Specifies the default amount of memory to allocate to each cluster virtual machine.\nThis is specified as a string that can be a byte count or a number with units like ",(0,n.jsx)("b",{children:"512MiB"}),",\n",(0,n.jsx)("b",{children:"0.5GiB"}),", ",(0,n.jsx)("b",{children:"2iGB"}),", or ",(0,n.jsx)("b",{children:"1TiB"}),".  This defaults to ",(0,n.jsx)("b",{children:"4GiB"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"namePrefix"})}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"string:"})," The prefix to be prepended to virtual machine provisioned to hypervisors for the\n",(0,n.jsx)(s.strong,{children:"xenserver"})," enmvironment.  This is used to avoid VM naming conflicts between different clusters."]}),(0,n.jsxs)(s.p,{children:["When this is ",(0,n.jsx)(s.strong,{children:"null"})," (the default), the cluster name followed by a dash will\nprefix the provisioned virtual machine names.  When this is a non-empty string, the\nvalue followed by a dash will be used.  If this is an empty string or whitespace then\nthe machine names will not be prefixed."]}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"NOTE:"})," Virtual machine name prefixes will always be converted to lowercase."]}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"NOTE:"})," This property is ignored for cloud hosting environments because cluster VMs will be\nisolated in their own resource groups and private networks."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"openEbsDisk"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"string:"})," Specifies the default size of the second block device to be created for nodes\nenabled for OpenEBS.  This is specified as a string that can be a byte count or a number with\nunits like ",(0,n.jsx)("b",{children:"512MiB"}),", ",(0,n.jsx)("b",{children:"0.5GiB"}),", ",(0,n.jsx)("b",{children:"2iGB"}),", or ",(0,n.jsx)("b",{children:"1TiB"}),".  This defaults\nto ",(0,n.jsx)("b",{children:"128GiB"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"osDisk"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"string:"})," Specifies the default size of the operating system disk for cluster virtual machines.\nThis is specified as a string that can be a long byte count or a byte count or a number with units\nlike ",(0,n.jsx)("b",{children:"512MiB"}),", ",(0,n.jsx)("b",{children:"0.5GiB"}),", ",(0,n.jsx)("b",{children:"2GiB"}),", or ",(0,n.jsx)("b",{children:"1TiB"}),".  This defaults to ",(0,n.jsx)("b",{children:"128GiB"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"vcpus"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"integer:"})," Specifies default number of VCPUs to assign to each cluster node virtual machine.\nThis defaults to ",(0,n.jsx)("b",{children:"4"}),"."]})})]})]})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);