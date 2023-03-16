"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[984],{4137:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),p=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return o.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(f,i(i({ref:r},l),{},{components:t})):o.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},200:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=t(7462),n=(t(7294),t(4137));const a={sidebar_position:6,displayed_sidebar:"operatorsdk",title:"Monitoring",hide_title:!1,hide_table_of_contents:!1,description:"Monitoring information.",keywords:["operator","sdk","metrics","prometheus","grafana","observability"],last_update:{author:"Marcus Bowyer"}},i="Monitoring",s={unversionedId:"operator-sdk/monitoring",id:"operator-sdk/monitoring",title:"Monitoring",description:"Monitoring information.",source:"@site/docs/operator-sdk/monitoring.mdx",sourceDirName:"operator-sdk",slug:"/operator-sdk/monitoring",permalink:"/docs/operator-sdk/monitoring",draft:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/operator-sdk/monitoring.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,displayed_sidebar:"operatorsdk",title:"Monitoring",hide_title:!1,hide_table_of_contents:!1,description:"Monitoring information.",keywords:["operator","sdk","metrics","prometheus","grafana","observability"],last_update:{author:"Marcus Bowyer"}},sidebar:"operatorsdk",previous:{title:"RBAC",permalink:"/docs/operator-sdk/rbac"},next:{title:"Best Practices",permalink:"/docs/operator-sdk/best-practices"}},c={},p=[{value:"Metrics",id:"metrics",level:2},{value:"Grafana Dashboard",id:"grafana-dashboard",level:3},{value:"Tracing",id:"tracing",level:2}],l={toc:p},d="wrapper";function u(e){let{components:r,...a}=e;return(0,n.kt)(d,(0,o.Z)({},l,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"monitoring"},"Monitoring"),(0,n.kt)("h2",{id:"metrics"},"Metrics"),(0,n.kt)("p",null,"By default, operators will emit a collection of performance metrics for each controller."),(0,n.kt)("h3",{id:"grafana-dashboard"},"Grafana Dashboard"),(0,n.kt)("p",null,"Here is a sample dashboard to get started: ",(0,n.kt)("a",{target:"_blank",href:t(5034).Z},"operator-dashboard.json")),(0,n.kt)("h2",{id:"tracing"},"Tracing"),(0,n.kt)("p",null,"To enable OpenTelemetry tracing, there is a ",(0,n.kt)("inlineCode",{parentName:"p"},"AddKubernetesOperatorInstrumentation")," extension method to the ",(0,n.kt)("inlineCode",{parentName:"p"},"TracerProviderBuilder")," class."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'using Neon.Kube.Operator;\nusing OpenTelemetry;\nusing OpenTelemetry.Resources;\n\nvar builder = Sdk.CreateTracerProviderBuilder()\n                  .SetResourceBuilder(ResourceBuilder.CreateDefault()\n                  .AddService("my-operator", serviceVersion: "1.0.0"))\n                  .AddKubernetesOperatorInstrumentation()\n                  .AddOtlpExporter(\n                      options =>\n                      {\n                          options.ExportProcessorType         = ExportProcessorType.Batch;\n                          options.BatchExportProcessorOptions = new BatchExportProcessorOptions<Activity>();\n                          options.Endpoint                    = new Uri("otel-collector-uri");\n                          options.Protocol                    = OpenTelemetry.Exporter.OtlpExportProtocol.Grpc;\n                      })\n                  .Build();\n')))}u.isMDXComponent=!0},5034:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/files/operator-dashboard-765e7573fcf8aa04929bd0a689e5c63d.json"}}]);