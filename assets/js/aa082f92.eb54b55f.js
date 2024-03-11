"use strict";(self.webpackChunkneon_docs=self.webpackChunkneon_docs||[]).push([[3075],{425:(e,t,l)=>{l.d(t,{Z:()=>r});var o=l(7294),a=l(6010);const n={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:l,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,r),hidden:l},t)}},3992:(e,t,l)=>{l.d(t,{Z:()=>v});var o=l(7462),a=l(7294),n=l(6010),r=l(2957),i=l(6550),s=l(5238),d=l(3609),u=l(2560);function p(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:l,attributes:o,default:a}}=e;return{value:t,label:l,attributes:o,default:a}}))}function c(e){const{values:t,children:l}=e;return(0,a.useMemo)((()=>{const e=t??p(l);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,l])}function h(e){let{value:t,tabValues:l}=e;return l.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:l}=e;const o=(0,i.k6)(),n=function(e){let{queryString:t=!1,groupId:l}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:t,groupId:l});return[(0,s._X)(n),(0,a.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(o.location.search);t.set(n,e),o.replace({...o.location,search:t.toString()})}),[n,o])]}function b(e){const{defaultValue:t,queryString:l=!1,groupId:o}=e,n=c(e),[r,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=l.find((e=>e.default))??l[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:n}))),[s,d]=m({queryString:l,groupId:o}),[p,b]=function(e){let{groupId:t}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,n]=(0,u.Nk)(l);return[o,(0,a.useCallback)((e=>{l&&n.set(e)}),[l,n])]}({groupId:o}),k=(()=>{const e=s??p;return h({value:e,tabValues:n})?e:null})();(0,a.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,n]),tabValues:n}}var k=l(1048);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:l,selectedValue:i,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),c=e=>{const t=e.currentTarget,l=u.indexOf(t),o=d[l].value;o!==i&&(p(t),s(o))},h=e=>{var t;let l=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;l=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;l=u[t]??u[u.length-1];break}}null==(t=l)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":l},t)},d.map((e=>{let{value:t,label:l,attributes:r}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:c},r,{className:(0,n.Z)("tabs__item",f.tabItem,null==r?void 0:r.className,{"tabs__item--active":i===t})}),l??t)})))}function g(e){let{lazy:t,children:l,selectedValue:o}=e;const n=(Array.isArray(l)?l:[l]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function y(e){const t=b(e);return a.createElement("div",{className:(0,n.Z)("tabs-container",f.tabList)},a.createElement(w,(0,o.Z)({},e,t)),a.createElement(g,(0,o.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return a.createElement(y,(0,o.Z)({key:String(t)},e))}},3937:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var o=l(7462),a=(l(7294),l(4137)),n=l(9319),r=l(3992),i=l(425);const s={sidebar_position:1,displayed_sidebar:"neonkube",title:"Hello World Example",hide_title:!1,hide_table_of_contents:!1,description:"Demonstrates how to deploy a simple application to a NeonKUBE cluster.",keywords:["helloworld","example","howto"],last_update:{author:"Marcus Bowyer"}},d="Hello World Example",u={unversionedId:"neonkube/how-to-guides/hello-world",id:"neonkube/how-to-guides/hello-world",title:"Hello World Example",description:"Demonstrates how to deploy a simple application to a NeonKUBE cluster.",source:"@site/docs/neonkube/how-to-guides/hello-world.mdx",sourceDirName:"neonkube/how-to-guides",slug:"/neonkube/how-to-guides/hello-world",permalink:"/docs/neonkube/how-to-guides/hello-world",draft:!1,editUrl:"https://github.com/nforgeio/documentation/edit/master/docs/neonkube/how-to-guides/hello-world.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"neonkube",title:"Hello World Example",hide_title:!1,hide_table_of_contents:!1,description:"Demonstrates how to deploy a simple application to a NeonKUBE cluster.",keywords:["helloworld","example","howto"],last_update:{author:"Marcus Bowyer"}},sidebar:"neonkube",previous:{title:"How To Guides",permalink:"/docs/category/how-to-guides"},next:{title:"Volumes and Storage",permalink:"/docs/neonkube/volumes-storage"}},p={},c=[{value:"Clone demo repository",id:"clone-demo-repository",level:2},{value:"Publish images",id:"publish-images",level:2},{value:"Deploy hello-world-operator",id:"deploy-hello-world-operator",level:2},{value:"Deploy hello-world",id:"deploy-hello-world",level:2},{value:"View Hello, World!",id:"view-hello-world",level:2},{value:"HelloWorldDemo Options",id:"helloworlddemo-options",level:2},{value:"<code>logLevel</code>",id:"loglevel",level:3},{value:"<code>helloWorldReplicas</code>",id:"helloworldreplicas",level:3},{value:"<code>loadGeneratorReplicas</code>",id:"loadgeneratorreplicas",level:3},{value:"<code>storageType</code>",id:"storagetype",level:3},{value:"<code>ssoEnabled</code>",id:"ssoenabled",level:3},{value:"<code>neonDashboardEnabled</code>",id:"neondashboardenabled",level:3}],h={toc:c},m="wrapper";function b(e){let{components:t,...l}=e;return(0,a.kt)(m,(0,o.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hello-world-example"},"Hello World Example"),(0,a.kt)("p",null,"This tutorial demonstrates how to deploy a simple application to a NeonKUBE\ncluster."),(0,a.kt)("h2",{id:"clone-demo-repository"},"Clone demo repository"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/nforgeio/neonKUBE-demos.git\n")),(0,a.kt)("h2",{id:"publish-images"},"Publish images"),(0,a.kt)("p",null,"NeonKUBE Clusters include a built-in container registry to store images for\ndeployment. In this step we'll publish the necessary container images to the\nCluster Registry."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can optionally build the containers yourself, rather than using the public\nimages. To do this, add the ",(0,a.kt)("inlineCode",{parentName:"p"},"-build")," flag to the following command. You'll need\nto have ",(0,a.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/"},"Visual Studio")," and the .NET SDK\ninstalled to do this.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"powershell -f publish.ps1\n")),(0,a.kt)("h2",{id:"deploy-hello-world-operator"},"Deploy hello-world-operator"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"neon apply -f hello-world-operator.yaml\n")),(0,a.kt)("h2",{id:"deploy-hello-world"},"Deploy hello-world"),(0,a.kt)("p",null,"You can edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world.yaml")," spec to change the deployment behaviour."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: demo.neonkube.io/v1alpha1\nkind: HelloWorldDemo\nmetadata:\n  name: hello-world\n  labels:\n    app: hello-world\nspec:\n  logLevel: debug\n  helloWorldReplicas: 2\n  loadGeneratorReplicas: 3\n  storageType: ephemeral # ephemeral or nfs\n  ssoEnabled: false\n  neonDashboardEnabled: false\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"neon apply -f hello-world.yaml\n")),(0,a.kt)("h2",{id:"view-hello-world"},"View Hello, World!"),(0,a.kt)("admonition",{title:"HTTPS!",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Every NeonKUBE Cluster comes with an SSL certificate to make it easy to deploy\nnew services. The Hello World demo is deployed using this certificate.")),(0,a.kt)(r.Z,{groupId:"deployment",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"desktop",label:"neonDESKTOP",mdxType:"TabItem"},"Open:"," ",(0,a.kt)("a",{href:"https://hello-world.desktop.neoncluster.io"},"https://hello-world.desktop.neoncluster.io"),"."),(0,a.kt)(i.Z,{value:"kube",label:"neonKUBE",mdxType:"TabItem"},"Use the following command to get the URL for Hello, World!, and open it in your browser.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(n.Z,{language:"bash",mdxType:"CodeBlock"},"powershell -c \"Write-Host (('https://hello-world.', (neon cluster info | ConvertFrom-Json).Domain) -join '')\""))),(0,a.kt)("h2",{id:"helloworlddemo-options"},"HelloWorldDemo Options"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"HelloWorldDemo")," Custom Resource ",(0,a.kt)("inlineCode",{parentName:"p"},"spec")," allows for configuration of the\ndemo. These options can be changed at any time by modifying the\n",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world.yaml")," manifest and applying the changes with\n",(0,a.kt)("inlineCode",{parentName:"p"},"neon apply -f hello-world.yaml"),"."),(0,a.kt)("h3",{id:"loglevel"},(0,a.kt)("inlineCode",{parentName:"h3"},"logLevel")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"logLevel")," can be set to the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CRITICAL"),(0,a.kt)("li",{parentName:"ul"},"ERROR"),(0,a.kt)("li",{parentName:"ul"},"WARNING"),(0,a.kt)("li",{parentName:"ul"},"INFORMATION"),(0,a.kt)("li",{parentName:"ul"},"DEBUG"),(0,a.kt)("li",{parentName:"ul"},"TRACE")),(0,a.kt)("h3",{id:"helloworldreplicas"},(0,a.kt)("inlineCode",{parentName:"h3"},"helloWorldReplicas")),(0,a.kt)("p",null,"This is the number of replicas that will be deployed for the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," web\napp."),(0,a.kt)("h3",{id:"loadgeneratorreplicas"},(0,a.kt)("inlineCode",{parentName:"h3"},"loadGeneratorReplicas")),(0,a.kt)("p",null,"This is the number of replicas for the load generator app. Increase this to\ngenerate more load."),(0,a.kt)("h3",{id:"storagetype"},(0,a.kt)("inlineCode",{parentName:"h3"},"storageType")),(0,a.kt)("p",null,"storageType can be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"ephemeral")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"nfs"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," app has a ",(0,a.kt)("inlineCode",{parentName:"p"},"/storage"),' page where users can update a text file.\nThis can be used to verify the behaviours described below. Try updating the text\nfile and killing some pods with the "Kill Pods" button to see what happens.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ephemeral")," does not create any Kubernetes\n",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"Persistent Volumes"),".\nEach pod has its own ephemeral volume, and any data stored on it will be lost\nwhen the pod is deleted."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nfs")," Creates a persistent volume that is shared between all ",(0,a.kt)("inlineCode",{parentName:"li"},"hello-world"),"\npods as described\n",(0,a.kt)("a",{parentName:"li",href:"http://localhost:3000/docs/neonkube/volumes-storage#network-file-system"},"here"),".\nIn this mode, any data stored on the Volume will be persisted.")),(0,a.kt)("h3",{id:"ssoenabled"},(0,a.kt)("inlineCode",{parentName:"h3"},"ssoEnabled")),(0,a.kt)("p",null,"If set to true, the Operator will configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," demo to use Neon\nSingle Sign On. Users will need cluster credentials to access the demo."),(0,a.kt)("h3",{id:"neondashboardenabled"},(0,a.kt)("inlineCode",{parentName:"h3"},"neonDashboardEnabled")),(0,a.kt)("p",null,"If set to true, the Operator will add a link to the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," dashboard to\nthe NeonKUBE dashboard."))}b.isMDXComponent=!0}}]);