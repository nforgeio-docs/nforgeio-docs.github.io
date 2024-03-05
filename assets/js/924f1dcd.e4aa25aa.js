"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[9321],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(4137));const a={slug:"/operator-sdk",sidebar_position:1,displayed_sidebar:"operatorsdk",title:"Introduction",hide_title:!1,hide_table_of_contents:!1,description:"Introduction.",keywords:["introduction"],last_update:{author:"Marcus Bowyer"}},i="Introduction",s={unversionedId:"operator-sdk/intro",id:"operator-sdk/intro",title:"Introduction",description:"Introduction.",source:"@site/docs/operator-sdk/intro.mdx",sourceDirName:"operator-sdk",slug:"/operator-sdk",permalink:"/docs/operator-sdk",draft:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/operator-sdk/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/operator-sdk",sidebar_position:1,displayed_sidebar:"operatorsdk",title:"Introduction",hide_title:!1,hide_table_of_contents:!1,description:"Introduction.",keywords:["introduction"],last_update:{author:"Marcus Bowyer"}},sidebar:"operatorsdk",next:{title:"Getting Started",permalink:"/docs/operator-sdk/getting-started"}},c={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"NeonKUBE is a Full Stack Kubernetes Distribution which includes Kubernetes Core,\nopensource and custom add-ons, as well as a other tools like neon-desktop and\nneon-cli. Not only can NeonKUBE clusters be deployed directly on local servers\nor the cloud, you can also deploy full stack clusters on a laptop or\nworkstation."),(0,o.kt)("p",null,"NeonKUBE requires a 4-core computer with at least 16 GiB RAM and about 75 GiB of\nfree disk space when deploying a local cluster. The local cluster runs on a\nHyper-V virtual machine with 8 GiB RAM and currently Kubernetes and NeonKUBE are\nconsuming about 5.5 gig of memory, leaving 2.5 gig for user applications."),(0,o.kt)("p",null,"NeonKUBE clusters can be suspended at any time to quickly release this memory\nwhen the cluster isn\u2019t needed. This only takes a few seconds."))}p.isMDXComponent=!0}}]);