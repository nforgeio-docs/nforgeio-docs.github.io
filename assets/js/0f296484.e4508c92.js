"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[6920],{2766:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var r=n(4848),i=n(8453);const t={id:"neon-cli-reference",slug:"/references/neon-cli",sidebar_position:8,displayed_sidebar:"neonkube",title:"Cluster Definition Details",hide_title:!1,hide_table_of_contents:!1,description:"Describes the NEONKUBE cluster definition file format",keywords:["introduction"],last_update:{author:"NEONFORGE Team"}},c="Cluster Definition Details",d={id:"neonkube/cluster-definition-details/neon-cli-reference",title:"Cluster Definition Details",description:"Describes the NEONKUBE cluster definition file format",source:"@site/docs/neonkube/cluster-definition-details/index.mdx",sourceDirName:"neonkube/cluster-definition-details",slug:"/references/neon-cli",permalink:"/docs/references/neon-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/neonkube/cluster-definition-details/index.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"neon-cli-reference",slug:"/references/neon-cli",sidebar_position:8,displayed_sidebar:"neonkube",title:"Cluster Definition Details",hide_title:!1,hide_table_of_contents:!1,description:"Describes the NEONKUBE cluster definition file format",keywords:["introduction"],last_update:{author:"NEONFORGE Team"}},sidebar:"neonkube",previous:{title:"Security",permalink:"/docs/neonkube/security"},next:{title:"Container Options",permalink:"/docs/container"}},l={},o=[];function h(e){const s={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"cluster-definition-details",children:"Cluster Definition Details"}),"\n",(0,r.jsx)(s.p,{children:"This documentation section describes the cluster definition format in detail.  Here's the\r\ntop-level structure of a cluster definition:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"ClusterDefinition:\r\n  annotations: {}\r\n  container: {}\r\n  datacenter: false\r\n  deployment: {}\r\n  description:\r\n  features: {}\r\n  hosting: {}\r\n  isDesktop: false\r\n  jobs: {}\r\n  kubernetes: {}\r\n  latitude: \r\n  longitude: \r\n  monitor: {}\r\n  name: my-cluster\r\n  network: {}\r\n  nodeOptions: {}\r\n  nodes: {}\r\n  packageProxy: \r\n  purpose: \r\n  resourceTags: \r\n  security: {}\r\n  storage: {}\r\n  timeSources: []\n"})}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Property"}),(0,r.jsx)("th",{children:"Description"})]}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"annotations"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"map"}),": Optionally specifies cluster annotations.  Label names and values must follow the\r\n",(0,r.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/",children:"Kubernetes conventions"}),"\r\nand the ",(0,r.jsx)("b",{children:"neonkube.io/"})," prefix is reserved by NEONKUBE."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"container"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"object"}),": Customizes the cluster's container registry configuration."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"datacenter"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Identifies the datacenter.  This defaults to empty string for on-premise clusters\r\nor the region for clusters deployed to the cloud."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{children:"NOTE:"})," The name may include only letters, numbers, periods, dashes, and underscores."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"deployment"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"object"}),": Optionally used by ",(0,r.jsx)("b",{children:"ClusterFixture"})," and possibly custom tools for customizing\r\ncluster and node names to avoid conflicts."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"description"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Optionally describes the cluster for humans.  This may be a string up to 256 characters long."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"features"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"object"}),": Specifies optional features to be installed in the cluster."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"hosting"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"object"}),": Specifies hosting related settings (e.g. the cloud provider).  This defaults to\r\n",(0,r.jsx)(s.code,{children:"null"})," indicating that the cluster will be hosted on private servers."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"isDesktop"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"bool"}),": Indicates that the definition describes a NEONDESKTOP cluster.  This is set to ",(0,r.jsx)(s.code,{children:"true"}),"\r\nby NEONDESKTOP when it deploys a desktop cluster and isn't typically set by cluster operators."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"jobs"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"object"}),": Specifies the schedules for cluster jobs."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"kubernetes"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"object"}),": Specifies Kubernetes cluster options."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"latitude"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"decimal"}),": Optionally specifies the latitude of the cluster location.  This is a value\r\nbetween -90 and +90 degrees."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{children:"NOTE:"})," ",(0,r.jsx)("b",{children:"Latitude"})," and ",(0,r.jsx)("b",{children:"Longitude"})," must both be specified together or\r\nnot at all."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"longitude"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"decimal"}),": Optionally specifies the longitude of the cluster location.  This is a value\r\nbetween -180 and +180 degrees."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{children:"NOTE:"})," ",(0,r.jsx)("b",{children:"Latitude"})," and ",(0,r.jsx)("b",{children:"Longitude"})," must both be specified together or\r\nnot at all."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"monitor"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"object"}),": Specifies options for the cluster integrated monitoring stack."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"name"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Specifies the cluster name."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{children:"NOTE:"}),"\r\nNames may include only letters, numbers, periods, dashes, and underscores and\r\nmay be up to 24 characters long.  Some hosting environments enforce length limits\r\non resource names that we derive from the cluster name, so please limit your\r\ncluster name to 24 characters."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"network"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"object"}),": Describes the cluster's network configuration."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"nodeOptions"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"object"}),": Specifies host node options, including Linux package manager settings."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"nodes"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"map"}),": Describes the cluster nodes."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"packageProxy"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Optionally specifies one or more APT proxy/cache servers the cluster will use to install\r\nand update Linux packages.  These are endpoints like ",(0,r.jsxs)("b",{children:["HOSTNAME",":PORT"]})," or ",(0,r.jsx)("b",{children:"ADDRESS.PORT"}),"\r\nof a ",(0,r.jsx)("b",{children:"apt-cacher-ng"})," or other package proxy server.  The port is generally set to ",(0,r.jsx)("b",{children:"3142"}),"\r\nMultiple proxies may be specified by separating them with spaces.  This defaults to\r\nreferencing the ",(0,r.jsx)("b",{children:"apt-cacher-ng"})," instances running on the control-plane nodes."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{children:"NOTE:"}),"\r\nThe cluster nodes are configured to failover to different proxies or to hit the\r\ndefault Linux distribution package mirror directly if any or all of the caches\r\nspecified are unavailable."]}),(0,r.jsx)(s.p,{children:"The package caches will be tried in the order they are listed.  This essentially\r\nmakes the first cache primary, with the others acting as backups."})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"purpose"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"}),": Describes how the cluster is being used.  Supported values are: ",(0,r.jsx)("b",{children:"unspecified"}),",\r\n",(0,r.jsx)("b",{children:"development"}),", ",(0,r.jsx)("b",{children:"production"}),", ",(0,r.jsx)("b",{children:"stage"}),", and ",(0,r.jsx)("b",{children:"test"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"resourceTags"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"array"}),": Optionally specifies custom tags that will be attached to cluster resources in cloud\r\nhosting environments.  These tags are intended to help you manage your cloud resources\r\nas well as help organize your cost reporting."]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{children:"NOTE:"})," Currently, this is only supported for clusters deployed to AWS and Azure."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"security"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"object"}),": Specifies cluster security options."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"storage"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"object"}),": Specifies cluster storage related options."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"timeSources"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"array"}),": Specifies the NTP time sources to be configured for the cluster.  These are the\r\nFQDNs or IP addresses of the sources.  This defaults to ",(0,r.jsx)("b",{children:"pool.ntp.org"}),"."]}),(0,r.jsx)(s.p,{children:"The cluster control-plane nodes will be configured to synchronize their time with these\r\ntime sources and the worker nodes will be configured to synchronize their time\r\nwith the control-plane nodes."})]})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"The following pages will describe the more complex properties."})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);