"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[6820],{9452:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=o(4848),t=o(8453);const s={id:"neon-cli-reference",slug:"/references/neon-cli",sidebar_position:1,displayed_sidebar:"neonkube",title:"NeonCLI Commands",hide_title:!1,hide_table_of_contents:!1,description:"Demonstrates how to deploy a simple application to a NeonKUBE cluster.",keywords:["introduction"],last_update:{author:"NeonFORGE Team"}},a="NeonCLI Reference",i={id:"references/neon-cli-reference",title:"NeonCLI Commands",description:"Demonstrates how to deploy a simple application to a NeonKUBE cluster.",source:"@site/docs/references/neon-cli.mdx",sourceDirName:"references",slug:"/references/neon-cli",permalink:"/docs/references/neon-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/references/neon-cli.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"neon-cli-reference",slug:"/references/neon-cli",sidebar_position:1,displayed_sidebar:"neonkube",title:"NeonCLI Commands",hide_title:!1,hide_table_of_contents:!1,description:"Demonstrates how to deploy a simple application to a NeonKUBE cluster.",keywords:["introduction"],last_update:{author:"NeonFORGE Team"}},sidebar:"neonkube"},l={},c=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"neoncli-reference",children:"NeonCLI Reference"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"neon"})," is a command-line tool used to configure and manage the nodes of a\nNeonKUBE cluster. It is included with NeonDESKTOP."]}),"\n",(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"neon"})," to see the list of available commands."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",children:'> neon\n\nneon [v1.24.0]\nCopyright c 2005-2023 by NeonFORGE LLC.  All rights reserved.\n\nUSAGE:\n\n    neon [OPTIONS] COMMAND [ARG...]\n\nNEON KUBECTL COMMANDS:\n\n    [neon-cli] supports all standard kubectl commands like (more help below):\n\n    neon apply -f my-manifest.yaml\n\nNEON CLUSTER LIFE-CYCLE COMMANDS:\n\n    neon cluster check\n    neon cluster dashboard\n    neon cluster health\n    neon cluster info\n    neon cluster islocked\n    neon cluster lock\n    neon cluster prepare    CLUSTER-DEF\n    neon cluster pause      [OPTIONS]\n    neon cluster delete     [OPTIONS]\n    neon cluster reset      [OPTIONS]\n    neon cluster setup      [OPTIONS] root@CLUSTER-NAME\n    neon cluster start\n    neon cluster stop       [OPTIONS]\n    neon cluster unlock\n    neon cluster verify     [CLUSTER-DEF]\n\n    neon login              COMMAND\n    neon logout\n\nNEON HELM COMMANDS:\n\n    The neon-cli supports all standard Helm commands by prefixing\n    them with [helm], like:\n\n    neon helm install -f my-values.yaml my-redis ./redis\n\nNEON UTILITY COMMANDS:\n\n    neon tool generate iso  SOURCE-FOLDER ISO-PATH\n    neon tool password      COMMAND\n    neon tool vault         COMMAND\n    neon tool version       [-n] [--git] [--minimum=VERSION]\n\nCLUSTER MANAGEMENT ARGUMENTS:\n\n    CLUSTER-DEF         - Path to a cluster definition file.  This is\n                          optional for some commands when logged in\n\n    COMMAND             - Subcommand and arguments\n\nNOTE: Command line arguments and options may include references to\n      profile values, secrets and environment variables, like:\n\n      ${profile:NAME}                   - profile value\n      ${secret:NAME}                    - "password" property value of NAME secret\n      ${secret:NAME:SOURCE}             - "password"  property value of NAME secret at SOURCE\n      ${secret:NAME[PROPERTY}           - PROPERTY value from NAME secret\n      ${secret:NAME[PROPERTY]:SOURCE}   - PROPERTY value from NAME secret at SOURCE\n      ${env:NAME}                       - environment variable\n\n      For Linux, you\'ll need to surround these references with single quotes\n      to prevent Bash from interpreting them as Bash variable references.\n\n===============================================================================\n\nkubectl controls the Kubernetes cluster manager.\n\n Find more information at: https://kubernetes.io/docs/reference/kubectl/overview/\n\nBasic Commands (Beginner):\n  create          Create a resource from a file or from stdin\n  expose          Take a replication controller, service, deployment or pod and expose it as a new Kubernetes service\n  run             Run a particular image on the cluster\n  set             Set specific features on objects\n\nBasic Commands (Intermediate):\n  explain         Get documentation for a resource\n  get             Display one or many resources\n  edit            Edit a resource on the server\n  delete          Delete resources by file names, stdin, resources and names, or by resources and label selector\n\nDeploy Commands:\n  rollout         Manage the rollout of a resource\n  scale           Set a new size for a deployment, replica set, or replication controller\n  autoscale       Auto-scale a deployment, replica set, stateful set, or replication controller\n\nCluster Management Commands:\n  certificate     Modify certificate resources.\n  cluster-info    Display cluster information\n  top             Display resource (CPU/memory) usage\n  cordon          Mark node as unschedulable\n  uncordon        Mark node as schedulable\n  drain           Drain node in preparation for maintenance\n  taint           Update the taints on one or more nodes\n\nTroubleshooting and Debugging Commands:\n  describe        Show details of a specific resource or group of resources\n  logs            Print the logs for a container in a pod\n  attach          Attach to a running container\n  exec            Execute a command in a container\n  port-forward    Forward one or more local ports to a pod\n  proxy           Run a proxy to the Kubernetes API server\n  cp              Copy files and directories to and from containers\n  auth            Inspect authorization\n  debug           Create debugging sessions for troubleshooting workloads and nodes\n\nAdvanced Commands:\n  diff            Diff the live version against a would-be applied version\n  apply           Apply a configuration to a resource by file name or stdin\n  patch           Update fields of a resource\n  replace         Replace a resource by file name or stdin\n  wait            Experimental: Wait for a specific condition on one or many resources\n  kustomize       Build a kustomization target from a directory or URL.\n\nSettings Commands:\n  label           Update the labels on a resource\n  annotate        Update the annotations on a resource\n  completion      Output shell completion code for the specified shell (bash, zsh or fish)\n\nOther Commands:\n  alpha           Commands for features in alpha\n  api-resources   Print the supported API resources on the server\n  api-versions    Print the supported API versions on the server, in the form of "group/version"\n  config          Modify kubeconfig files\n  plugin          Provides utilities for interacting with plugins\n  version         Print the client and server version information\n\nUsage:\n  kubectl [flags] [options]\n\nUse "kubectl <command> --help" for more information about a given command.\nUse "kubectl options" for a list of global command-line options (applies to all commands).\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);