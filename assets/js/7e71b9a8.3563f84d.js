"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[5738],{4137:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),b=o,m=u["".concat(l,".").concat(b)]||u[b]||d[b]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},6881:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(7462),o=(t(7294),t(4137));const a={sidebar_position:6,displayed_sidebar:"operatorsdk",title:"RBAC",hide_title:!1,hide_table_of_contents:!1,description:"How to configure RBAC rules.",keywords:["operator","sdk","rbac","security","access control"],last_update:{author:"Marcus Bowyer"}},i="RBAC",c={unversionedId:"operator-sdk/rbac",id:"operator-sdk/rbac",title:"RBAC",description:"How to configure RBAC rules.",source:"@site/docs/operator-sdk/rbac.mdx",sourceDirName:"operator-sdk",slug:"/operator-sdk/rbac",permalink:"/docs/operator-sdk/rbac",draft:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/operator-sdk/rbac.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,displayed_sidebar:"operatorsdk",title:"RBAC",hide_title:!1,hide_table_of_contents:!1,description:"How to configure RBAC rules.",keywords:["operator","sdk","rbac","security","access control"],last_update:{author:"Marcus Bowyer"}},sidebar:"operatorsdk",previous:{title:"Finalizers",permalink:"/docs/operator-sdk/finalizers"},next:{title:"Monitoring",permalink:"/docs/operator-sdk/monitoring"}},l={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Configuring RBAC rules",id:"configuring-rbac-rules",level:2},{value:"Example",id:"example",level:3},{value:"Generating RBAC manifests",id:"generating-rbac-manifests",level:3}],p={toc:s},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rbac"},"RBAC"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Role-based access control (RBAC) is a method of regulating access to your\nOperator. When debugging, the Operator will automatically apply configured RBAC\nrules, and use them. This allows you to verify configuration before deployment."),(0,o.kt)("h2",{id:"configuring-rbac-rules"},"Configuring RBAC rules"),(0,o.kt)("p",null,"RBAC rules are configured by appling ",(0,o.kt)("inlineCode",{parentName:"p"},"RbacRule")," annotations to classes within\nthe Operator project. They can be applied to any class including ",(0,o.kt)("inlineCode",{parentName:"p"},"Controllers"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"Finalizers")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Webhooks"),"."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"using Neon.Operator.Attributes;\nusing Neon.Operator.Rbac;\n\nnamespace ExampleOperator\n{\n    /// <summary>\n    /// Example controller\n    /// </summary>\n    [RbacRule<V1ExampleEntity>(\n      Verbs = RbacVerb.All,\n      Scope = EntityScope.Cluster)]\n    [RbacRule<V1ServiceAccount>(\n      Verbs = RbacVerb.List\n      | RbacVerb.Create,\n      Scope = EntityScope.Cluster)]\n    [RbacRule<V1Pod>(\n      Verbs = RbacVerb.Get\n      | RbacVerb.Watch\n      | RbacVerb.Patch,\n      Scope = EntityScope.Namespaced)]\n    [RbacRule<V1ConfigMap>(\n      Verbs = RbacVerb.Get\n      | RbacVerb.Watch,\n      Scope = EntityScope.Namespaced)]\n    public class ExampleController : ResourceControllerBase<V1ExampleEntity>\n    {\n        // your controller implementation\n    }\n}\n")),(0,o.kt)("h3",{id:"generating-rbac-manifests"},"Generating RBAC manifests"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Neon.Operator")," NuGet package includes analyzers to generate RBAC rules for\nyour Operator. You can disable this analyzer with the ",(0,o.kt)("inlineCode",{parentName:"p"},"NeonOperatorGenerateRbac"),"\nMSBuild property."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<PropertyGroup>\n  <NeonOperatorGenerateRbac>False</NeonOperatorGenerateRbac>\n</PropertyGroup>\n")))}d.isMDXComponent=!0}}]);