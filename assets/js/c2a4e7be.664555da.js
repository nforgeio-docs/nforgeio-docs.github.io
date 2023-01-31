"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[846],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),b=r,m=c["".concat(u,".").concat(b)]||c[b]||p[b]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},3831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:5,displayed_sidebar:"neonkube",title:"Mutating Webhooks",hide_title:!1,hide_table_of_contents:!1,description:"Mutating Webhooks can modify resources when created/updated.",keywords:["neonkube kubernetes operator sdk resource mutating webhooks"],last_update:{author:"Marcus Bowyer"}},i="Mutating Webhooks",s={unversionedId:"neonkube/operator-sdk/mutating-webhooks",id:"neonkube/operator-sdk/mutating-webhooks",title:"Mutating Webhooks",description:"Mutating Webhooks can modify resources when created/updated.",source:"@site/docs/neonkube/operator-sdk/mutating-webhooks.mdx",sourceDirName:"neonkube/operator-sdk",slug:"/neonkube/operator-sdk/mutating-webhooks",permalink:"/docs/neonkube/operator-sdk/mutating-webhooks",draft:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/neonkube/operator-sdk/mutating-webhooks.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,displayed_sidebar:"neonkube",title:"Mutating Webhooks",hide_title:!1,hide_table_of_contents:!1,description:"Mutating Webhooks can modify resources when created/updated.",keywords:["neonkube kubernetes operator sdk resource mutating webhooks"],last_update:{author:"Marcus Bowyer"}},sidebar:"neonkube",previous:{title:"Finalizers",permalink:"/docs/neonkube/operator-sdk/finalizers"},next:{title:"Validating Webhooks",permalink:"/docs/neonkube/operator-sdk/validating-webhooks"}},u={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Example Mutating Webhook",id:"example-mutating-webhook",level:2}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mutating-webhooks"},"Mutating Webhooks"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Mutating webhooks are most frequently used for setting default values.\nThey can modify objects by creating a patch that will be sent back in the admission response."),(0,r.kt)("mermaid",{value:"flowchart TD\n    A[User] -- kubectl apply resource.yaml --\x3e K[Kubernetes API] --\x3e M{MutatingWebhook} -- update state --\x3e K"}),(0,r.kt)("h2",{id:"example-mutating-webhook"},"Example Mutating Webhook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'[Webhook(\n    name: "pod-policy.neonkube.io",\n    serviceName: "example-operator",\n    @namespace: "default",\n    admissionReviewVersions: "v1",\n    failurePolicy: "Ignore")]\n[WebhookRule(\n    apiGroups: V1Pod.KubeGroup,\n    apiVersions: V1Pod.KubeApiVersion, \n    operations: AdmissionOperations.Create | AdmissionOperations.Update, \n    resources: V1Pod.KubePluralName,\n    scope: "*")]\npublic class PodWebhook : IMutatingWebhook<V1Pod>\n{\n    private Ilogger logger { get; set; }\n\n    private bool modified = false;\n\n    public PodWebhook(Ilogger logger)\n        : base()\n    {\n        this.logger = logger;\n    }\n\n    public async Task<MutationResult> CreateAsync(V1Pod entity, bool dryRun)\n    {\n        logger.LogInformation($"Received create request for pod {entity.Namespace()}/{entity.Name()}");\n\n        if (modified)\n        {\n            return await Task.FromResult(MutationResult.Modified(entity));\n        }\n\n        return await Task.FromResult(MutationResult.NoChanges());\n    }\n\n    public async Task<MutationResult> UpdateAsync(V1Pod entity, V1Pod oldEntity, bool dryRun)\n    {\n        logger.LogInformation($"Received update request for pod {entity.Namespace()}/{entity.Name()}");\n\n        if (modified)\n        {\n            return await Task.FromResult(MutationResult.Modified(entity));\n        }\n\n        return await Task.FromResult(MutationResult.NoChanges());\n    }\n')))}c.isMDXComponent=!0}}]);