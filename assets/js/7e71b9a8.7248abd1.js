"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[1299],{8762:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(4848),t=n(8453);const a={sidebar_position:6,displayed_sidebar:"operatorsdk",title:"RBAC",hide_title:!1,hide_table_of_contents:!1,description:"How to configure RBAC rules.",keywords:["operator","sdk","rbac","security","access control"],last_update:{author:"Marcus Bowyer"}},s="RBAC",c={id:"operator-sdk/rbac",title:"RBAC",description:"How to configure RBAC rules.",source:"@site/docs/operator-sdk/rbac.mdx",sourceDirName:"operator-sdk",slug:"/operator-sdk/rbac",permalink:"/docs/operator-sdk/rbac",draft:!1,unlisted:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/operator-sdk/rbac.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,displayed_sidebar:"operatorsdk",title:"RBAC",hide_title:!1,hide_table_of_contents:!1,description:"How to configure RBAC rules.",keywords:["operator","sdk","rbac","security","access control"],last_update:{author:"Marcus Bowyer"}},sidebar:"operatorsdk",previous:{title:"Finalizers",permalink:"/docs/operator-sdk/finalizers"},next:{title:"Monitoring",permalink:"/docs/operator-sdk/monitoring"}},i={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Configuring RBAC rules",id:"configuring-rbac-rules",level:2},{value:"Example",id:"example",level:3},{value:"Generating RBAC manifests",id:"generating-rbac-manifests",level:3}];function d(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"rbac",children:"RBAC"}),"\n",(0,o.jsx)(r.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(r.p,{children:"Role-based access control (RBAC) is a method of regulating access to your\nOperator. When debugging, the Operator will automatically apply configured RBAC\nrules, and use them. This allows you to verify configuration before deployment."}),"\n",(0,o.jsx)(r.h2,{id:"configuring-rbac-rules",children:"Configuring RBAC rules"}),"\n",(0,o.jsxs)(r.p,{children:["RBAC rules are configured by appling ",(0,o.jsx)(r.code,{children:"RbacRule"})," annotations to classes within\nthe Operator project. They can be applied to any class including ",(0,o.jsx)(r.code,{children:"Controllers"}),",\n",(0,o.jsx)(r.code,{children:"Finalizers"})," and ",(0,o.jsx)(r.code,{children:"Webhooks"}),"."]}),"\n",(0,o.jsx)(r.h3,{id:"example",children:"Example"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-csharp",children:"using Neon.Operator.Attributes;\nusing Neon.Operator.Rbac;\n\nnamespace ExampleOperator\n{\n    /// <summary>\n    /// Example controller\n    /// </summary>\n    [RbacRule<V1ExampleEntity>(\n      Verbs = RbacVerb.All,\n      Scope = EntityScope.Cluster)]\n    [RbacRule<V1ServiceAccount>(\n      Verbs = RbacVerb.List\n      | RbacVerb.Create,\n      Scope = EntityScope.Cluster)]\n    [RbacRule<V1Pod>(\n      Verbs = RbacVerb.Get\n      | RbacVerb.Watch\n      | RbacVerb.Patch,\n      Scope = EntityScope.Namespaced)]\n    [RbacRule<V1ConfigMap>(\n      Verbs = RbacVerb.Get\n      | RbacVerb.Watch,\n      Scope = EntityScope.Namespaced)]\n    public class ExampleController : ResourceControllerBase<V1ExampleEntity>\n    {\n        // your controller implementation\n    }\n}\n"})}),"\n",(0,o.jsx)(r.h3,{id:"generating-rbac-manifests",children:"Generating RBAC manifests"}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"Neon.Operator"})," NuGet package includes analyzers to generate RBAC rules for\nyour Operator. You can disable this analyzer with the ",(0,o.jsx)(r.code,{children:"NeonOperatorGenerateRbac"}),"\nMSBuild property."]}),"\n",(0,o.jsx)(r.p,{children:"For example:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"<PropertyGroup>\n  <NeonOperatorGenerateRbac>False</NeonOperatorGenerateRbac>\n</PropertyGroup>\n"})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>c});var o=n(6540);const t={},a=o.createContext(t);function s(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);