"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[8400],{3947:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=t(4848),r=t(8453);t(4182),t(1801),t(3012),t(7227),t(9489);const s={sidebar_position:1,displayed_sidebar:"operatorsdk",title:"Mutating Webhooks",hide_title:!1,hide_table_of_contents:!1,description:"Mutating Webhooks can modify resources when created/updated",keywords:["operator","sdk","resource","webhook","admission control","dynamic admission control","mutating webhook"],last_update:{author:"NeonFORGE Team"}},a="Mutating Webhooks",i={id:"operator-sdk/webhooks/mutating-webhooks",title:"Mutating Webhooks",description:"Mutating Webhooks can modify resources when created/updated",source:"@site/docs/operator-sdk/webhooks/mutating-webhooks.mdx",sourceDirName:"operator-sdk/webhooks",slug:"/operator-sdk/webhooks/mutating-webhooks",permalink:"/docs/operator-sdk/webhooks/mutating-webhooks",draft:!1,unlisted:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/operator-sdk/webhooks/mutating-webhooks.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"operatorsdk",title:"Mutating Webhooks",hide_title:!1,hide_table_of_contents:!1,description:"Mutating Webhooks can modify resources when created/updated",keywords:["operator","sdk","resource","webhook","admission control","dynamic admission control","mutating webhook"],last_update:{author:"NeonFORGE Team"}},sidebar:"operatorsdk",previous:{title:"Webhooks",permalink:"/docs/category/webhooks"},next:{title:"Validating Webhooks",permalink:"/docs/operator-sdk/webhooks/validating-webhooks"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Example Mutating Webhook",id:"example-mutating-webhook",level:2}];function l(e){const o={code:"code",h1:"h1",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"mutating-webhooks",children:"Mutating Webhooks"}),"\n",(0,n.jsx)(o.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(o.p,{children:"Mutating webhooks are most frequently used for setting default values. They can modify objects by creating a patch that\r\nwill be sent back in the admission response."}),"\n",(0,n.jsx)(o.mermaid,{value:"flowchart TD\r\n    A[User] -- kubectl apply resource.yaml --\x3e K[Kubernetes API] --\x3e M{MutatingWebhook} -- update state --\x3e K"}),"\n",(0,n.jsx)(o.h2,{id:"example-mutating-webhook",children:"Example Mutating Webhook"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-csharp",children:'[Webhook(\r\n    name: "pod-policy.neonkube.io",\r\n    admissionReviewVersions: "v1",\r\n    failurePolicy: "Ignore")]\r\n[WebhookRule(\r\n    apiGroups: V1Pod.KubeGroup,\r\n    apiVersions: V1Pod.KubeApiVersion,\r\n    operations: AdmissionOperations.Create | AdmissionOperations.Update,\r\n    resources: V1Pod.KubePluralName,\r\n    scope: "*")]\r\npublic class PodWebhook : MutatingWebhookBase<V1Pod>\r\n{\r\n    private bool modified = false;\r\n\r\n    public override async Task<MutationResult> CreateAsync(V1Pod entity, bool dryRun, CancellationToken cancellationToken = default)\r\n    {\r\n        if (modified)\r\n        {\r\n            return await Task.FromResult(MutationResult.Modified(entity));\r\n        }\r\n\r\n        return await Task.FromResult(MutationResult.NoChanges());\r\n    }\r\n\r\n    public override async Task<MutationResult> UpdateAsync(V1Pod entity, V1Pod oldEntity, bool dryRun, CancellationToken cancellationToken = default)\r\n    {\r\n        if (modified)\r\n        {\r\n            return await Task.FromResult(MutationResult.Modified(entity));\r\n        }\r\n\r\n        return await Task.FromResult(MutationResult.NoChanges());\r\n    }\r\n}\n'})})]})}function c(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);