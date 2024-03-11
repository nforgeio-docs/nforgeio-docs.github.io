"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[5310],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),g=o,f=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2972:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(4137));const a={sidebar_position:2,displayed_sidebar:"operatorsdk",title:"Getting Started",hide_title:!1,hide_table_of_contents:!1,description:"This guide will help you get an Operator up and running.",keywords:["operator","sdk","getting started"],last_update:{author:"Marcus Bowyer"}},i="Getting Started",s={unversionedId:"operator-sdk/getting-started",id:"operator-sdk/getting-started",title:"Getting Started",description:"This guide will help you get an Operator up and running.",source:"@site/docs/operator-sdk/getting-started.mdx",sourceDirName:"operator-sdk",slug:"/operator-sdk/getting-started",permalink:"/docs/operator-sdk/getting-started",draft:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/operator-sdk/getting-started.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,displayed_sidebar:"operatorsdk",title:"Getting Started",hide_title:!1,hide_table_of_contents:!1,description:"This guide will help you get an Operator up and running.",keywords:["operator","sdk","getting started"],last_update:{author:"Marcus Bowyer"}},sidebar:"operatorsdk",previous:{title:"Introduction",permalink:"/docs/operator-sdk"},next:{title:"Controllers",permalink:"/docs/operator-sdk/controllers"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Program.cs",id:"programcs",level:3},{value:"Startup.cs",id:"startupcs",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dotnet add package Neon.Operator --prerelease\n")),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("h3",{id:"programcs"},"Program.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public static partial class Program\n{\n    public static async Task Main(string[] args)\n    {\n        var operator = KubernetesOperatorHost\n            .CreateDefaultBuilder(args)\n            .ConfigureNeonKube() // for operators running in NeonKUBE clusters.\n            .UseStartup<Startup>()\n            .Build();\n\n        await operator.RunAsync();\n    }\n}\n")),(0,o.kt)("h3",{id:"startupcs"},"Startup.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public void ConfigureServices(IServiceCollection services)\n{\n    services.AddKubernetesOperator();\n}\n\npublic void Configure(IApplicationBuilder app)\n{\n    app.UseKubernetesOperator();\n}\n")),(0,o.kt)("p",null,"By default, all Controllers, Finalizers and Webhooks in your assembly will be\nadded to the operator."))}u.isMDXComponent=!0}}]);