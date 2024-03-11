"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[8400],{3947:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var n=t(4848),s=t(8453);const i={sidebar_position:1,displayed_sidebar:"operatorsdk",title:"Mutating Webhooks",hide_title:!1,hide_table_of_contents:!1,description:"Mutating Webhooks can modify resources when created/updated.",keywords:["operator","sdk","resource","webhook","admission control","dynamic admission control","mutating webhook"],last_update:{author:"Marcus Bowyer"}},a="Mutating Webhooks",r={id:"operator-sdk/webhooks/mutating-webhooks",title:"Mutating Webhooks",description:"Mutating Webhooks can modify resources when created/updated.",source:"@site/docs/operator-sdk/webhooks/mutating-webhooks.mdx",sourceDirName:"operator-sdk/webhooks",slug:"/operator-sdk/webhooks/mutating-webhooks",permalink:"/docs/operator-sdk/webhooks/mutating-webhooks",draft:!1,unlisted:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/operator-sdk/webhooks/mutating-webhooks.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"operatorsdk",title:"Mutating Webhooks",hide_title:!1,hide_table_of_contents:!1,description:"Mutating Webhooks can modify resources when created/updated.",keywords:["operator","sdk","resource","webhook","admission control","dynamic admission control","mutating webhook"],last_update:{author:"Marcus Bowyer"}},sidebar:"operatorsdk",previous:{title:"Webhooks",permalink:"/docs/category/webhooks"},next:{title:"Validating Webhooks",permalink:"/docs/operator-sdk/webhooks/validating-webhooks"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Example Mutating Webhook",id:"example-mutating-webhook",level:2}];function c(e){const o={code:"code",h1:"h1",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"mutating-webhooks",children:"Mutating Webhooks"}),"\n",(0,n.jsx)(o.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(o.p,{children:"Mutating webhooks are most frequently used for setting default values. They can\nmodify objects by creating a patch that will be sent back in the admission\nresponse."}),"\n",(0,n.jsx)(o.mermaid,{value:"flowchart TD\n    A[User] -- kubectl apply resource.yaml --\x3e K[Kubernetes API] --\x3e M{MutatingWebhook} -- update state --\x3e K"}),"\n",(0,n.jsx)(o.h2,{id:"example-mutating-webhook",children:"Example Mutating Webhook"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-csharp",children:'[Webhook(\n    name: "pod-policy.neonkube.io",\n    admissionReviewVersions: "v1",\n    failurePolicy: "Ignore")]\n[WebhookRule(\n    apiGroups: V1Pod.KubeGroup,\n    apiVersions: V1Pod.KubeApiVersion,\n    operations: AdmissionOperations.Create | AdmissionOperations.Update,\n    resources: V1Pod.KubePluralName,\n    scope: "*")]\npublic class PodWebhook : MutatingWebhookBase<V1Pod>\n{\n    private bool modified = false;\n\n    public override async Task<MutationResult> CreateAsync(V1Pod entity, bool dryRun)\n    {\n        if (modified)\n        {\n            return await Task.FromResult(MutationResult.Modified(entity));\n        }\n\n        return await Task.FromResult(MutationResult.NoChanges());\n    }\n\n    public override async Task<MutationResult> UpdateAsync(V1Pod entity, V1Pod oldEntity, bool dryRun)\n    {\n        if (modified)\n        {\n            return await Task.FromResult(MutationResult.Modified(entity));\n        }\n\n        return await Task.FromResult(MutationResult.NoChanges());\n    }\n}\n'})})]})}function l(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>r});var n=t(6540);const s={},i=n.createContext(s);function a(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);