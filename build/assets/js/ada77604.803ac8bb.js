"use strict";(self.webpackChunkkin_docs=self.webpackChunkkin_docs||[]).push([[8536],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>N});var n=a(7294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,p=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=m(a),d=p,N=s["".concat(o,".").concat(d)]||s[d]||k[d]||r;return a?n.createElement(N,i(i({ref:t},u),{},{components:a})):n.createElement(N,i({ref:t},u))}));function N(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[s]="string"==typeof e?e:p,i[1]=l;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9254:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=a(7462),p=(a(7294),a(3905));const r={sidebar_position:1},i="Common activities",l={unversionedId:"modules/kin-cloud-module-common-v1-0",id:"modules/kin-cloud-module-common-v1-0",title:"Common activities",description:"Name: kin.cloud/module/common",source:"@site/docs/modules/kin-cloud-module-common-v1-0.md",sourceDirName:"modules",slug:"/modules/kin-cloud-module-common-v1-0",permalink:"/docs/modules/kin-cloud-module-common-v1-0",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/docs/category/modules"},next:{title:"Use Cases",permalink:"/docs/category/use-cases"}},o={},m=[{value:"Connections",id:"connections",level:2},{value:"Shared Secret",id:"shared-secret",level:3},{value:"Fields",id:"fields",level:4},{value:"Actions",id:"actions",level:2},{value:"ApplyJqFilter",id:"applyjqfilter",level:3},{value:"Authentication methods",id:"authentication-methods",level:4},{value:"Inputs",id:"inputs",level:4},{value:"Outputs",id:"outputs",level:4},{value:"Apply Jq Tranform",id:"apply-jq-tranform",level:3},{value:"Authentication methods",id:"authentication-methods-1",level:4},{value:"Inputs",id:"inputs-1",level:4},{value:"Outputs",id:"outputs-1",level:4},{value:"Csv To Json",id:"csv-to-json",level:3},{value:"Authentication methods",id:"authentication-methods-2",level:4},{value:"Inputs",id:"inputs-2",level:4},{value:"Outputs",id:"outputs-2",level:4},{value:"Json To Csv",id:"json-to-csv",level:3},{value:"Authentication methods",id:"authentication-methods-3",level:4},{value:"Inputs",id:"inputs-3",level:4},{value:"Outputs",id:"outputs-3",level:4},{value:"Convert currency (Fixer API)",id:"convert-currency-fixer-api",level:3},{value:"Authentication methods",id:"authentication-methods-4",level:4},{value:"Inputs",id:"inputs-4",level:4},{value:"Outputs",id:"outputs-4",level:4},{value:"Prepare Upload Url",id:"prepare-upload-url",level:3},{value:"Authentication methods",id:"authentication-methods-5",level:4},{value:"Inputs",id:"inputs-5",level:4},{value:"Outputs",id:"outputs-5",level:4},{value:"Simple HTTP GET request",id:"simple-http-get-request",level:3},{value:"Authentication methods",id:"authentication-methods-6",level:4},{value:"Inputs",id:"inputs-6",level:4},{value:"Outputs",id:"outputs-6",level:4},{value:"HTTP Request",id:"http-request",level:3},{value:"Authentication methods",id:"authentication-methods-7",level:4},{value:"Inputs",id:"inputs-7",level:4},{value:"Outputs",id:"outputs-7",level:4},{value:"Clear all data",id:"clear-all-data",level:3},{value:"Authentication methods",id:"authentication-methods-8",level:4},{value:"Inputs",id:"inputs-8",level:4},{value:"Outputs",id:"outputs-8",level:4},{value:"Delete using key",id:"delete-using-key",level:3},{value:"Authentication methods",id:"authentication-methods-9",level:4},{value:"Inputs",id:"inputs-9",level:4},{value:"Outputs",id:"outputs-9",level:4},{value:"List all keys",id:"list-all-keys",level:3},{value:"Authentication methods",id:"authentication-methods-10",level:4},{value:"Inputs",id:"inputs-10",level:4},{value:"Outputs",id:"outputs-10",level:4},{value:"Load persistent stored value in JSON format",id:"load-persistent-stored-value-in-json-format",level:3},{value:"Authentication methods",id:"authentication-methods-11",level:4},{value:"Inputs",id:"inputs-11",level:4},{value:"Outputs",id:"outputs-11",level:4},{value:"Load persistent store value in MSGPACK format",id:"load-persistent-store-value-in-msgpack-format",level:3},{value:"Authentication methods",id:"authentication-methods-12",level:4},{value:"Inputs",id:"inputs-12",level:4},{value:"Outputs",id:"outputs-12",level:4},{value:"Persistent store value in JSON format",id:"persistent-store-value-in-json-format",level:3},{value:"Authentication methods",id:"authentication-methods-13",level:4},{value:"Inputs",id:"inputs-13",level:4},{value:"Outputs",id:"outputs-13",level:4},{value:"Persistent store value in MSGPACK format",id:"persistent-store-value-in-msgpack-format",level:3},{value:"Authentication methods",id:"authentication-methods-14",level:4},{value:"Inputs",id:"inputs-14",level:4},{value:"Outputs",id:"outputs-14",level:4},{value:"Triggers",id:"triggers",level:2},{value:"<code>webhook</code>",id:"webhook",level:3},{value:"Authentication Methods",id:"authentication-methods-15",level:4},{value:"Fields",id:"fields-1",level:4}],u={toc:m},s="wrapper";function k(e){let{components:t,...a}=e;return(0,p.kt)(s,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"common-activities"},"Common activities"),(0,p.kt)("p",null,"Name: ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"kin.cloud/module/common"))),(0,p.kt)("p",null,"Version: ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"v1.0"))),(0,p.kt)("p",null,"This module include simple http request activity and credential extraction"),(0,p.kt)("h2",{id:"connections"},"Connections"),(0,p.kt)("h3",{id:"shared-secret"},"Shared Secret"),(0,p.kt)("p",null,"Method: ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"common"))),(0,p.kt)("h4",{id:"fields"},"Fields"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"shared_secret")),": ",(0,p.kt)("em",{parentName:"p"},"Shared secret")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},'Description: Shared secret to pass to "K-Shared-Secret" header'))),(0,p.kt)("h2",{id:"actions"},"Actions"),(0,p.kt)("h3",{id:"applyjqfilter"},"ApplyJqFilter"),(0,p.kt)("p",null,"Source: ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"kin.cloud/module/common/batch.ApplyJqFilter"))),(0,p.kt)("p",null,"Apply jq filter on input file"),(0,p.kt)("h4",{id:"authentication-methods"},"Authentication methods"),(0,p.kt)("p",null,"No authentication method required"),(0,p.kt)("h4",{id:"inputs"},"Inputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"input")),": ",(0,p.kt)("em",{parentName:"p"},"input")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"io.Reader")),(0,p.kt)("p",{parentName:"li"},"Description: Input file")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"exp")),": ",(0,p.kt)("em",{parentName:"p"},"exp")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: JQ expression"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},'""'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"out")),": ",(0,p.kt)("em",{parentName:"p"},"out")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: Output object name, if empty, return jq filter result, if not empty, result will be put to object storage"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},'""')))),(0,p.kt)("h4",{id:"outputs"},"Outputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"out")),": ",(0,p.kt)("em",{parentName:"p"},"out")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"interface {}")),(0,p.kt)("p",{parentName:"li"},"Description: JQ result if out is empty, url to result if out is not empty"))),(0,p.kt)("h3",{id:"apply-jq-tranform"},"Apply Jq Tranform"),(0,p.kt)("p",null,"Source: ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"kin.cloud/module/common/batch.ApplyJqTransform"))),(0,p.kt)("p",null,"Apply jq transform on each element of input file"),(0,p.kt)("h4",{id:"authentication-methods-1"},"Authentication methods"),(0,p.kt)("p",null,"No authentication method required"),(0,p.kt)("h4",{id:"inputs-1"},"Inputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"input")),": ",(0,p.kt)("em",{parentName:"p"},"input")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"io.Reader")),(0,p.kt)("p",{parentName:"li"},"Description: Input file")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"exp")),": ",(0,p.kt)("em",{parentName:"p"},"exp")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: JQ expression"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},'""'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"out")),": ",(0,p.kt)("em",{parentName:"p"},"out")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: Result will be put to object storage with this key"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},'""')))),(0,p.kt)("h4",{id:"outputs-1"},"Outputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"out")),": ",(0,p.kt)("em",{parentName:"p"},"out")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"interface {}")),(0,p.kt)("p",{parentName:"li"},"Description: url to result"))),(0,p.kt)("h3",{id:"csv-to-json"},"Csv To Json"),(0,p.kt)("p",null,"Source: ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"kin.cloud/module/common/batch.Csv2Json"))),(0,p.kt)("p",null,"Convert csv file to json"),(0,p.kt)("h4",{id:"authentication-methods-2"},"Authentication methods"),(0,p.kt)("p",null,"No authentication method required"),(0,p.kt)("h4",{id:"inputs-2"},"Inputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"input")),": ",(0,p.kt)("em",{parentName:"p"},"input")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"io.Reader")),(0,p.kt)("p",{parentName:"li"},"Description: Input file")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"output")),": ",(0,p.kt)("em",{parentName:"p"},"output")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: Output object name"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},'""'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"has_header")),": ",(0,p.kt)("em",{parentName:"p"},"Has header")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"bool")),(0,p.kt)("p",{parentName:"li"},"Description: Is first row of csv file is header row?"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},"false"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"headers")),": ",(0,p.kt)("em",{parentName:"p"},"headers")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"[]string")),(0,p.kt)("p",{parentName:"li"},"Description: Headers if has_header is false"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},'""')))),(0,p.kt)("h4",{id:"outputs-2"},"Outputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"url")),": ",(0,p.kt)("em",{parentName:"p"},"url")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: Output object url"))),(0,p.kt)("h3",{id:"json-to-csv"},"Json To Csv"),(0,p.kt)("p",null,"Source: ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"kin.cloud/module/common/batch.Json2Csv"))),(0,p.kt)("p",null,"Convert json file to csv"),(0,p.kt)("h4",{id:"authentication-methods-3"},"Authentication methods"),(0,p.kt)("p",null,"No authentication method required"),(0,p.kt)("h4",{id:"inputs-3"},"Inputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"input")),": ",(0,p.kt)("em",{parentName:"p"},"input")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"io.Reader")),(0,p.kt)("p",{parentName:"li"},"Description: Input file")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"output")),": ",(0,p.kt)("em",{parentName:"p"},"output")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: Output object name"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},'""'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"write_header")),": ",(0,p.kt)("em",{parentName:"p"},"Write header")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"bool")),(0,p.kt)("p",{parentName:"li"},"Description: Write csv header row?"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},"false"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"headers")),": ",(0,p.kt)("em",{parentName:"p"},"headers")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"[]string")),(0,p.kt)("p",{parentName:"li"},"Description: If specified, use this as headers and override field name in json input file"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},'""')))),(0,p.kt)("h4",{id:"outputs-3"},"Outputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"url")),": ",(0,p.kt)("em",{parentName:"p"},"url")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: Output object url"))),(0,p.kt)("h3",{id:"convert-currency-fixer-api"},"Convert currency (Fixer API)"),(0,p.kt)("p",null,"Source: ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"kin.cloud/module/common/currency.(*FixerCurrency).ConvertCurrency"))),(0,p.kt)("p",null,"Convert currency using Fixer API"),(0,p.kt)("h4",{id:"authentication-methods-4"},"Authentication methods"),(0,p.kt)("p",null,"No authentication method required"),(0,p.kt)("h4",{id:"inputs-4"},"Inputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"from")),": ",(0,p.kt)("em",{parentName:"p"},"From")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: "),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},'""'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"to")),": ",(0,p.kt)("em",{parentName:"p"},"to")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: "),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},'""')))),(0,p.kt)("h4",{id:"outputs-4"},"Outputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"result")),": ",(0,p.kt)("em",{parentName:"p"},"result")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"interface {}")),(0,p.kt)("p",{parentName:"li"},"Description: "))),(0,p.kt)("h3",{id:"prepare-upload-url"},"Prepare Upload Url"),(0,p.kt)("p",null,"Source: ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"kin.cloud/module/common/file.PrepareUploadURL"))),(0,p.kt)("p",null,"Prepare url for upload file as result of some process"),(0,p.kt)("p",null,"Metadata: "),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'{\n  "icon": "\\u003curl_to_activity_icon\\u003e"\n}\n')),(0,p.kt)("h4",{id:"authentication-methods-5"},"Authentication methods"),(0,p.kt)("p",null,"No authentication method required"),(0,p.kt)("h4",{id:"inputs-5"},"Inputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"key")),": ",(0,p.kt)("em",{parentName:"p"},"Key")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: Key"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},'""')))),(0,p.kt)("h4",{id:"outputs-5"},"Outputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"url")),": ",(0,p.kt)("em",{parentName:"p"},"URL")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: URL"))),(0,p.kt)("h3",{id:"simple-http-get-request"},"Simple HTTP GET request"),(0,p.kt)("p",null,"Source: ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"kin.cloud/module/common/http.Get"))),(0,p.kt)("p",null,"Simple HTTP GET request"),(0,p.kt)("h4",{id:"authentication-methods-6"},"Authentication methods"),(0,p.kt)("p",null,"No authentication method required"),(0,p.kt)("h4",{id:"inputs-6"},"Inputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"url")),": ",(0,p.kt)("em",{parentName:"p"},"url")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: Request URL"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},'""'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"headers")),": ",(0,p.kt)("em",{parentName:"p"},"headers")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"map","[string]","string")),(0,p.kt)("p",{parentName:"li"},"Description: Optional, extra headers in form of key-value pairs attached to this GET request"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},"null")))),(0,p.kt)("h4",{id:"outputs-6"},"Outputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"status")),": ",(0,p.kt)("em",{parentName:"p"},"status")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: HTTP response status")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"status_code")),": ",(0,p.kt)("em",{parentName:"p"},"status_code")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"int")),(0,p.kt)("p",{parentName:"li"},"Description: HTTP response status code")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"headers")),": ",(0,p.kt)("em",{parentName:"p"},"headers")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"map","[string]","string")),(0,p.kt)("p",{parentName:"li"},"Description: HTTP response headers")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"body")),": ",(0,p.kt)("em",{parentName:"p"},"body")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"interface {}")),(0,p.kt)("p",{parentName:"li"},"Description: HTTP response body"))),(0,p.kt)("h3",{id:"http-request"},"HTTP Request"),(0,p.kt)("p",null,"Source: ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"kin.cloud/module/common/http.Request"))),(0,p.kt)("p",null,"Simple http request"),(0,p.kt)("h4",{id:"authentication-methods-7"},"Authentication methods"),(0,p.kt)("p",null,"No authentication method required"),(0,p.kt)("h4",{id:"inputs-7"},"Inputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"method")),": ",(0,p.kt)("em",{parentName:"p"},"method")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: HTTP request method"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},'""'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"url")),": ",(0,p.kt)("em",{parentName:"p"},"url")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: HTTP request URL"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},'""'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"headers")),": ",(0,p.kt)("em",{parentName:"p"},"headers")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"map","[string]","string")),(0,p.kt)("p",{parentName:"li"},"Description: HTTP request headers"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},"null"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"body")),": ",(0,p.kt)("em",{parentName:"p"},"body")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"interface {}")),(0,p.kt)("p",{parentName:"li"},"Description: HTTP request body"))),(0,p.kt)("h4",{id:"outputs-7"},"Outputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"status")),": ",(0,p.kt)("em",{parentName:"p"},"status")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: HTTP response status")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"status_code")),": ",(0,p.kt)("em",{parentName:"p"},"status_code")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"int")),(0,p.kt)("p",{parentName:"li"},"Description: HTTP response status code")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"headers")),": ",(0,p.kt)("em",{parentName:"p"},"headers")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"map","[string]","string")),(0,p.kt)("p",{parentName:"li"},"Description: HTTP response headers")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"body")),": ",(0,p.kt)("em",{parentName:"p"},"body")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"interface {}")),(0,p.kt)("p",{parentName:"li"},"Description: HTTP response body"))),(0,p.kt)("h3",{id:"clear-all-data"},"Clear all data"),(0,p.kt)("p",null,"Source: ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"kin.cloud/module/common/kvstore.Clear"))),(0,p.kt)("p",null,"Clear all data"),(0,p.kt)("h4",{id:"authentication-methods-8"},"Authentication methods"),(0,p.kt)("p",null,"No authentication method required"),(0,p.kt)("h4",{id:"inputs-8"},"Inputs"),(0,p.kt)("h4",{id:"outputs-8"},"Outputs"),(0,p.kt)("h3",{id:"delete-using-key"},"Delete using key"),(0,p.kt)("p",null,"Source: ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"kin.cloud/module/common/kvstore.Delete"))),(0,p.kt)("p",null,"Delete using key"),(0,p.kt)("h4",{id:"authentication-methods-9"},"Authentication methods"),(0,p.kt)("p",null,"No authentication method required"),(0,p.kt)("h4",{id:"inputs-9"},"Inputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"key")),": ",(0,p.kt)("em",{parentName:"p"},"key")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: Key"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},'""')))),(0,p.kt)("h4",{id:"outputs-9"},"Outputs"),(0,p.kt)("h3",{id:"list-all-keys"},"List all keys"),(0,p.kt)("p",null,"Source: ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"kin.cloud/module/common/kvstore.Keys"))),(0,p.kt)("p",null,"List all keys"),(0,p.kt)("h4",{id:"authentication-methods-10"},"Authentication methods"),(0,p.kt)("p",null,"No authentication method required"),(0,p.kt)("h4",{id:"inputs-10"},"Inputs"),(0,p.kt)("h4",{id:"outputs-10"},"Outputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"keys")),": ",(0,p.kt)("em",{parentName:"p"},"keys")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"[]string")),(0,p.kt)("p",{parentName:"li"},"Description: Keys"))),(0,p.kt)("h3",{id:"load-persistent-stored-value-in-json-format"},"Load persistent stored value in JSON format"),(0,p.kt)("p",null,"Source: ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"kin.cloud/module/common/kvstore.LoadJson"))),(0,p.kt)("p",null,"Load persistent store value in JSON format"),(0,p.kt)("h4",{id:"authentication-methods-11"},"Authentication methods"),(0,p.kt)("p",null,"No authentication method required"),(0,p.kt)("h4",{id:"inputs-11"},"Inputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"key")),": ",(0,p.kt)("em",{parentName:"p"},"key")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: Key"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},'""')))),(0,p.kt)("h4",{id:"outputs-11"},"Outputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"val")),": ",(0,p.kt)("em",{parentName:"p"},"val")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"interface {}")),(0,p.kt)("p",{parentName:"li"},"Description: Value")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"updated_at")),": ",(0,p.kt)("em",{parentName:"p"},"updated_at")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"time.Time")),(0,p.kt)("p",{parentName:"li"},"Description: Last update time"))),(0,p.kt)("h3",{id:"load-persistent-store-value-in-msgpack-format"},"Load persistent store value in MSGPACK format"),(0,p.kt)("p",null,"Source: ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"kin.cloud/module/common/kvstore.LoadMsgPack"))),(0,p.kt)("p",null,"Load persistent store value in MSGPACK format"),(0,p.kt)("h4",{id:"authentication-methods-12"},"Authentication methods"),(0,p.kt)("p",null,"No authentication method required"),(0,p.kt)("h4",{id:"inputs-12"},"Inputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"key")),": ",(0,p.kt)("em",{parentName:"p"},"key")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: Key"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},'""')))),(0,p.kt)("h4",{id:"outputs-12"},"Outputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"val")),": ",(0,p.kt)("em",{parentName:"p"},"val")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"interface {}")),(0,p.kt)("p",{parentName:"li"},"Description: Value")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"updated_at")),": ",(0,p.kt)("em",{parentName:"p"},"updated_at")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"time.Time")),(0,p.kt)("p",{parentName:"li"},"Description: Last update time"))),(0,p.kt)("h3",{id:"persistent-store-value-in-json-format"},"Persistent store value in JSON format"),(0,p.kt)("p",null,"Source: ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"kin.cloud/module/common/kvstore.StoreJson"))),(0,p.kt)("p",null,"Persistent store value in JSON format"),(0,p.kt)("h4",{id:"authentication-methods-13"},"Authentication methods"),(0,p.kt)("p",null,"No authentication method required"),(0,p.kt)("h4",{id:"inputs-13"},"Inputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"key")),": ",(0,p.kt)("em",{parentName:"p"},"key")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: Key"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},'""'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"val")),": ",(0,p.kt)("em",{parentName:"p"},"val")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"interface {}")),(0,p.kt)("p",{parentName:"li"},"Description: Value"))),(0,p.kt)("h4",{id:"outputs-13"},"Outputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"updated_at")),": ",(0,p.kt)("em",{parentName:"p"},"updated_at")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"time.Time")),(0,p.kt)("p",{parentName:"li"},"Description: Last update time"))),(0,p.kt)("h3",{id:"persistent-store-value-in-msgpack-format"},"Persistent store value in MSGPACK format"),(0,p.kt)("p",null,"Source: ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"kin.cloud/module/common/kvstore.StoreMsgPack"))),(0,p.kt)("p",null,"Persistent store value in MSGPACK format"),(0,p.kt)("h4",{id:"authentication-methods-14"},"Authentication methods"),(0,p.kt)("p",null,"No authentication method required"),(0,p.kt)("h4",{id:"inputs-14"},"Inputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"key")),": ",(0,p.kt)("em",{parentName:"p"},"key")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"li"},"Description: Key"),(0,p.kt)("p",{parentName:"li"},"Default value: ",(0,p.kt)("inlineCode",{parentName:"p"},'""'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"val")),": ",(0,p.kt)("em",{parentName:"p"},"val")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"interface {}")),(0,p.kt)("p",{parentName:"li"},"Description: Value"))),(0,p.kt)("h4",{id:"outputs-14"},"Outputs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"updated_at")),": ",(0,p.kt)("em",{parentName:"p"},"updated_at")),(0,p.kt)("p",{parentName:"li"},"Type: ",(0,p.kt)("em",{parentName:"p"},"time.Time")),(0,p.kt)("p",{parentName:"li"},"Description: Last update time"))),(0,p.kt)("h2",{id:"triggers"},"Triggers"),(0,p.kt)("h3",{id:"webhook"},(0,p.kt)("inlineCode",{parentName:"h3"},"webhook")),(0,p.kt)("p",null,"Simple webhook"),(0,p.kt)("h4",{id:"authentication-methods-15"},"Authentication Methods"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"strong"},"common")))),(0,p.kt)("h4",{id:"fields-1"},"Fields"))}k.isMDXComponent=!0}}]);