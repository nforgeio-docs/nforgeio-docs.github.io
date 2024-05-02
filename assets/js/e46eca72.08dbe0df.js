"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[6820],{9452:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=r(4848),t=r(8453);const s={id:"neon-cli-reference",slug:"/references/neon-cli",sidebar_position:1,displayed_sidebar:"neonkube",title:"NeonCLI Commands",hide_title:!1,hide_table_of_contents:!1,description:"Demonstrates how to deploy a simple application to a NeonKUBE cluster.",keywords:["introduction"],last_update:{author:"NeonFORGE Team"}},a="NeonCLI Reference",i={id:"references/neon-cli-reference",title:"NeonCLI Commands",description:"Demonstrates how to deploy a simple application to a NeonKUBE cluster.",source:"@site/docs/references/neon-cli.mdx",sourceDirName:"references",slug:"/references/neon-cli",permalink:"/docs/references/neon-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/references/neon-cli.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"neon-cli-reference",slug:"/references/neon-cli",sidebar_position:1,displayed_sidebar:"neonkube",title:"NeonCLI Commands",hide_title:!1,hide_table_of_contents:!1,description:"Demonstrates how to deploy a simple application to a NeonKUBE cluster.",keywords:["introduction"],last_update:{author:"NeonFORGE Team"}},sidebar:"neonkube"},l={},c=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"neoncli-reference",children:"NeonCLI Reference"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"neon"})," is a command-line tool used to configure and manage the nodes of a\r\nNeonKUBE cluster. It is included with NeonDESKTOP."]}),"\n",(0,o.jsxs)(n.p,{children:["Run ",(0,o.jsx)(n.code,{children:"neon"})," to see the list of available commands."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-plain",children:'> neon\r\n\r\nneon [v1.24.0]\r\nCopyright c 2005-2023 by NeonFORGE LLC.  All rights reserved.\r\n\r\nUSAGE:\r\n\r\n    neon [OPTIONS] COMMAND [ARG...]\r\n\r\nNEON KUBECTL COMMANDS:\r\n\r\n    [neon-cli] supports all standard kubectl commands like (more help below):\r\n\r\n    neon apply -f my-manifest.yaml\r\n\r\nNEON CLUSTER LIFE-CYCLE COMMANDS:\r\n\r\n    neon cluster check\r\n    neon cluster dashboard\r\n    neon cluster health\r\n    neon cluster info\r\n    neon cluster islocked\r\n    neon cluster lock\r\n    neon cluster prepare    CLUSTER-DEF\r\n    neon cluster pause      [OPTIONS]\r\n    neon cluster delete     [OPTIONS]\r\n    neon cluster reset      [OPTIONS]\r\n    neon cluster setup      [OPTIONS] sysadmin@CLUSTER-NAME\r\n    neon cluster start\r\n    neon cluster stop       [OPTIONS]\r\n    neon cluster unlock\r\n    neon cluster verify     [CLUSTER-DEF]\r\n\r\n    neon login              COMMAND\r\n    neon logout\r\n\r\nNEON HELM COMMANDS:\r\n\r\n    The neon-cli supports all standard Helm commands by prefixing\r\n    them with [helm], like:\r\n\r\n    neon helm install -f my-values.yaml my-redis ./redis\r\n\r\nNEON UTILITY COMMANDS:\r\n\r\n    neon tool generate iso  SOURCE-FOLDER ISO-PATH\r\n    neon tool password      COMMAND\r\n    neon tool vault         COMMAND\r\n    neon tool version       [-n] [--git] [--minimum=VERSION]\r\n\r\nCLUSTER MANAGEMENT ARGUMENTS:\r\n\r\n    CLUSTER-DEF         - Path to a cluster definition file.  This is\r\n                          optional for some commands when logged in\r\n\r\n    COMMAND             - Subcommand and arguments\r\n\r\nNOTE: Command line arguments and options may include references to\r\n      profile values, secrets and environment variables, like:\r\n\r\n      ${profile:NAME}                   - profile value\r\n      ${secret:NAME}                    - "password" property value of NAME secret\r\n      ${secret:NAME:SOURCE}             - "password"  property value of NAME secret at SOURCE\r\n      ${secret:NAME[PROPERTY}           - PROPERTY value from NAME secret\r\n      ${secret:NAME[PROPERTY]:SOURCE}   - PROPERTY value from NAME secret at SOURCE\r\n      ${env:NAME}                       - environment variable\r\n\r\n      For Linux, you\'ll need to surround these references with single quotes\r\n      to prevent Bash from interpreting them as Bash variable references.\r\n\r\n===============================================================================\r\n\r\nkubectl controls the Kubernetes cluster manager.\r\n\r\n Find more information at: https://kubernetes.io/docs/reference/kubectl/overview/\r\n\r\nBasic Commands (Beginner):\r\n  create          Create a resource from a file or from stdin\r\n  expose          Take a replication controller, service, deployment or pod and expose it as a new Kubernetes service\r\n  run             Run a particular image on the cluster\r\n  set             Set specific features on objects\r\n\r\nBasic Commands (Intermediate):\r\n  explain         Get documentation for a resource\r\n  get             Display one or many resources\r\n  edit            Edit a resource on the server\r\n  delete          Delete resources by file names, stdin, resources and names, or by resources and label selector\r\n\r\nDeploy Commands:\r\n  rollout         Manage the rollout of a resource\r\n  scale           Set a new size for a deployment, replica set, or replication controller\r\n  autoscale       Auto-scale a deployment, replica set, stateful set, or replication controller\r\n\r\nCluster Management Commands:\r\n  certificate     Modify certificate resources.\r\n  cluster-info    Display cluster information\r\n  top             Display resource (CPU/memory) usage\r\n  cordon          Mark node as unschedulable\r\n  uncordon        Mark node as schedulable\r\n  drain           Drain node in preparation for maintenance\r\n  taint           Update the taints on one or more nodes\r\n\r\nTroubleshooting and Debugging Commands:\r\n  describe        Show details of a specific resource or group of resources\r\n  logs            Print the logs for a container in a pod\r\n  attach          Attach to a running container\r\n  exec            Execute a command in a container\r\n  port-forward    Forward one or more local ports to a pod\r\n  proxy           Run a proxy to the Kubernetes API server\r\n  cp              Copy files and directories to and from containers\r\n  auth            Inspect authorization\r\n  debug           Create debugging sessions for troubleshooting workloads and nodes\r\n\r\nAdvanced Commands:\r\n  diff            Diff the live version against a would-be applied version\r\n  apply           Apply a configuration to a resource by file name or stdin\r\n  patch           Update fields of a resource\r\n  replace         Replace a resource by file name or stdin\r\n  wait            Experimental: Wait for a specific condition on one or many resources\r\n  kustomize       Build a kustomization target from a directory or URL.\r\n\r\nSettings Commands:\r\n  label           Update the labels on a resource\r\n  annotate        Update the annotations on a resource\r\n  completion      Output shell completion code for the specified shell (bash, zsh or fish)\r\n\r\nOther Commands:\r\n  alpha           Commands for features in alpha\r\n  api-resources   Print the supported API resources on the server\r\n  api-versions    Print the supported API versions on the server, in the form of "group/version"\r\n  config          Modify kubeconfig files\r\n  plugin          Provides utilities for interacting with plugins\r\n  version         Print the client and server version information\r\n\r\nUsage:\r\n  kubectl [flags] [options]\r\n\r\nUse "kubectl <command> --help" for more information about a given command.\r\nUse "kubectl options" for a list of global command-line options (applies to all commands).\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);