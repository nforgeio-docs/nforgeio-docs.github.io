"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[369],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var o=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=o.createContext({}),c=function(e){var r=o.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=c(e.components);return o.createElement(i.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},g=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=t,m=p["".concat(i,".").concat(g)]||p[g]||d[g]||l;return n?o.createElement(m,a(a({ref:r},u),{},{components:n})):o.createElement(m,a({ref:r},u))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=n.length,a=new Array(l);a[0]=g;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[p]="string"==typeof e?e:t,a[1]=s;for(var c=2;c<l;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},421:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var o=n(7462),t=(n(7294),n(3905));const l={sidebar_position:3,displayed_sidebar:"neonkube",title:"Controllers",hide_title:!1,hide_table_of_contents:!1,description:"Resource controllers.",keywords:["neonkube kubernetes operator sdk resource controllers"],last_update:{author:"Marcus Bowyer"}},a="Resource Controllers",s={unversionedId:"neonkube/operator-sdk/controllers",id:"neonkube/operator-sdk/controllers",title:"Controllers",description:"Resource controllers.",source:"@site/docs/neonkube/operator-sdk/controllers.mdx",sourceDirName:"neonkube/operator-sdk",slug:"/neonkube/operator-sdk/controllers",permalink:"/docs/neonkube/operator-sdk/controllers",draft:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/neonkube/operator-sdk/controllers.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,displayed_sidebar:"neonkube",title:"Controllers",hide_title:!1,hide_table_of_contents:!1,description:"Resource controllers.",keywords:["neonkube kubernetes operator sdk resource controllers"],last_update:{author:"Marcus Bowyer"}},sidebar:"neonkube",previous:{title:"Getting Started",permalink:"/docs/neonkube/operator-sdk/getting-started"},next:{title:"Finalizers",permalink:"/docs/neonkube/operator-sdk/finalizers"}},i={},c=[{value:"Example controller",id:"example-controller",level:2},{value:"Requeuing",id:"requeuing",level:2},{value:"Global defaults",id:"global-defaults",level:3},{value:"Per controller",id:"per-controller",level:3},{value:"Manual",id:"manual",level:3},{value:"Filtering",id:"filtering",level:2},{value:"Leader election",id:"leader-election",level:2}],u={toc:c};function p(e){let{components:r,...n}=e;return(0,t.kt)("wrapper",(0,o.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"resource-controllers"},"Resource Controllers"),(0,t.kt)("h2",{id:"example-controller"},"Example controller"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'public class ExampleController : IResourceController<V1ExampleEntity>\n{\n    private ILogger logger;\n\n    public ExampleController(ILogger logger)\n    {\n        this.logger = logger;\n    }\n\n    public static async Task StartAsync(IServiceProvider serviceProvider)\n    {\n        // Runs only once at startup. Use this to configure your operator if needed.\n\n        logger.LogInformation($"RECONCILED: {resource.Name()}");\n    }\n\n    public Task<ResourceControllerResult> ReconcileAsync(V1ExampleEntity resource)\n    {\n        logger.LogInformation($"RECONCILED: {resource.Name()}");\n\n        return ResourceControllerResult.Ok();\n    }\n\n    public async Task StatusModifiedAsync(V1ExampleEntity resource)\n    {\n        logger.LogInformation($"STATUS MODIFIED: {resource.Name()}");\n    }\n\n    public async Task DeletedAsync(V1ExampleEntity resource)\n    {\n        logger.LogInformation($"DELETED: {resource.Name()}");\n    }\n}\n')),(0,t.kt)("h2",{id:"requeuing"},"Requeuing"),(0,t.kt)("p",null,"If a function throws an error, the event will be requeued. You can configure requeue settings in two ways."),(0,t.kt)("h3",{id:"global-defaults"},"Global defaults"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},"services.AddKubernetesOperator(settings =>\n{\n    settings.ResourceManagerOptions = new ResourceManagerOptions()\n    {\n        ErrorMinRequeueInterval = TimeSpan.FromSeconds(1),\n        ErrorMaxRequeueInterval = TimeSpan.FromSeconds(1),\n        ErrorMaxRetryCount = 10,\n    };\n})\n")),(0,t.kt)("h3",{id:"per-controller"},"Per controller"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},"services.AddKubernetesOperator(options =>\n{\n    options.AssemblyScanningEnabled = false;\n})\n        .AddController<ExampleController>(options: new ResourceManagerOptions()\n        {\n            ErrorMinRequeueInterval = TimeSpan.FromSeconds(1),\n            ErrorMaxRequeueInterval = TimeSpan.FromSeconds(1),\n            ErrorMaxRetryCount      = 10,\n        })\n")),(0,t.kt)("h3",{id:"manual"},"Manual"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'public Task<ResourceControllerResult> ReconcileAsync(V1ExampleEntity resource)\n{\n    logger.LogInformation($"RECONCILED: {resource.Name()}");\n\n    return ResourceControllerResult.RequeueEvent(TimeSpan.FromSeconds(10));\n}\n')),(0,t.kt)("h2",{id:"filtering"},"Filtering"),(0,t.kt)("p",null,"To filter out resources, add the optional ",(0,t.kt)("inlineCode",{parentName:"p"},"Filter")," method to the controller."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'public bool Filter(V1Secret resource)\n{\n    return (resource.Name() == "foo");\n}\n\n')),(0,t.kt)("h2",{id:"leader-election"},"Leader election"),(0,t.kt)("p",null,"The following methods are provided for reacting to leadership events."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'public async Task OnPromotionAsync()\n{\n    logger.LogInformation($"PROMOTED");\n}\n\npublic async Task OnDemotionAsync()\n{\n    logger.LogInformation($"DEMOTED");\n}\n\npublic async Task OnNewLeaderAsyncc(string identity)\n{\n    logger.LogInformation($"NEW LEADER: {identity}");\n}\n')))}p.isMDXComponent=!0}}]);