"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[9877],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8990:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"Onboard WebAssembly Workload",sidebar_position:3},i="Onboarding Your WebAssembly Workloads",l={unversionedId:"getting-started/wasm-workload-onboarding",id:"getting-started/wasm-workload-onboarding",title:"Onboarding Your WebAssembly Workloads",description:"Bacalhau supports running programs that are compiled to WebAssembly (WASM).",source:"@site/docs/getting-started/wasm-workload-onboarding.md",sourceDirName:"getting-started",slug:"/getting-started/wasm-workload-onboarding",permalink:"/getting-started/wasm-workload-onboarding",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/getting-started/wasm-workload-onboarding.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Onboard WebAssembly Workload",sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Onboard Docker Workload",permalink:"/getting-started/docker-workload-onboarding"},next:{title:"Specifying Hardware Requirements",permalink:"/getting-started/resources"}},s={},p=[{value:"Prerequisites and Limitations",id:"prerequisites-and-limitations",level:2},{value:"Onboarding",id:"onboarding",level:2},{value:"Step 1: Replace network operations with filesystem reads and writes",id:"step-1-replace-network-operations-with-filesystem-reads-and-writes",level:3},{value:"Step 2: Configure your compiler to output WASI-compliant WebAssembly",id:"step-2-configure-your-compiler-to-output-wasi-compliant-webassembly",level:3},{value:"Step 3: Upload the input data to IPFS (optional)",id:"step-3-upload-the-input-data-to-ipfs-optional",level:3},{value:"Step 4: Run your program",id:"step-4-run-your-program",level:3},{value:"Program arguments",id:"program-arguments",level:4},{value:"Environment variables",id:"environment-variables",level:4},{value:"Examples",id:"examples",level:2},{value:"Support",id:"support",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"onboarding-your-webassembly-workloads"},"Onboarding Your WebAssembly Workloads"),(0,r.kt)("p",null,"Bacalhau supports running programs that are compiled to ",(0,r.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly (WASM)"),". "),(0,r.kt)("p",null,"WASM programs can be uploaded using the Bacalhau client or can be retrieved from IPFS. They can read and write data, receive program arguments and access environment variables."),(0,r.kt)("h2",{id:"prerequisites-and-limitations"},"Prerequisites and Limitations"),(0,r.kt)("p",null,"Bacalhau can run compiled WASM programs that expect the WebAssembly System Interface (WASI) Snapshot 1. Through this interface, WebAssembly programs can access data, environment variables and program arguments."),(0,r.kt)("p",null,"All ingress/egress networking is disabled \u2013 you won't be able to pull data/code/weights/etc from an external source. Instead, data input and output is implemented using ",(0,r.kt)("a",{parentName:"p",href:"/about-bacalhau/architecture#input--output-volumes"},"Bacalhau's input/output volumes"),". WASM jobs can say what data they need using URLs or IPFS CIDs and can then access the data by reading from the filesystem."),(0,r.kt)("p",null,"There is no multi-threading as WASI does not expose any interface for it."),(0,r.kt)("h2",{id:"onboarding"},"Onboarding"),(0,r.kt)("h3",{id:"step-1-replace-network-operations-with-filesystem-reads-and-writes"},"Step 1: Replace network operations with filesystem reads and writes"),(0,r.kt)("p",null,"If your program would normally read and write to network endpoints, you'll need to replace this with filesystem operations."),(0,r.kt)("p",null,"For example, instead of making an HTTP request to ",(0,r.kt)("inlineCode",{parentName:"p"},"example.com"),", instead read from the ",(0,r.kt)("inlineCode",{parentName:"p"},"/inputs")," folder. You can then specify the URL to Bacalhau when you run the job using ",(0,r.kt)("inlineCode",{parentName:"p"},"--input-urls example.com"),"."),(0,r.kt)("p",null,"You can write results to standard out or standard error pipes or to the filesystem into an output mount. For example, WASM jobs by default will have access to a folder at ",(0,r.kt)("inlineCode",{parentName:"p"},"/outputs")," that will be persisted when the job ends."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can specify more or different output mounts using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-o")," flag.")),(0,r.kt)("h3",{id:"step-2-configure-your-compiler-to-output-wasi-compliant-webassembly"},"Step 2: Configure your compiler to output WASI-compliant WebAssembly"),(0,r.kt)("p",null,"You will need to compile your program to WebAssembly that expects WASI. Check the instructions for your compiler to see how to do this."),(0,r.kt)("p",null,"For example, Rust users can specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm32-wasi")," target to ",(0,r.kt)("inlineCode",{parentName:"p"},"rustup")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo")," to get programs compiled for WASI WebAssembly. See ",(0,r.kt)("a",{parentName:"p",href:"/examples/workload-onboarding/rust-wasm/"},"the Rust example")," for more information on this."),(0,r.kt)("h3",{id:"step-3-upload-the-input-data-to-ipfs-optional"},"Step 3: Upload the input data to IPFS (optional)"),(0,r.kt)("p",null,"We recommend uploading your data to IPFS for persistent storage, because:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bacalhau is designed to perform the computation next to the data"),(0,r.kt)("li",{parentName:"ul"},"Distributing data across the solar system with IPFS distributes the Bacalhau computation"),(0,r.kt)("li",{parentName:"ul"},"Distributing computation improves performance by scaling, and improves resiliency via redundancy"),(0,r.kt)("li",{parentName:"ul"},"Using IPFS CIDs as inputs enables repeatable and cacheable execution")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The following guides explain how to store data on the IPFS network."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Leverage an IPFS \u201cpinning service\u201d such as:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://web3.storage/account/"},"Web3.Storage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://estuary.tech/sign-in"},"Estuary")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.ipfs.io/how-to/pin-files/"},"Manually pin your files to IPFS")," with your own IPFS server."))),(0,r.kt)("li",{parentName:"ul"},"If uploading a folder of input files, consider ",(0,r.kt)("a",{parentName:"li",href:"https://web3.storage/docs/#create-the-upload-script"},"uploading with this script"),". However, please note that any content uploaded to Web3.storage is ",(0,r.kt)("a",{parentName:"li",href:"https://web3.storage/docs/how-tos/store/#directory-wrapping"},"also wrapped in a parent directory"),". You will need to take care to reference the inner directory CID in your bacalhau command."))),(0,r.kt)("h3",{id:"step-4-run-your-program"},"Step 4: Run your program"),(0,r.kt)("p",null,"You can run a WebAssembly program on Bacalhau using the ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau wasm run")," command."),(0,r.kt)("p",null,"To run a locally compiled WASM program, specify it as an argument. For example, running ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau wasm run main.wasm")," will upload and execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.wasm")," program."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The program you specify will be uploaded to a Bacalhau IPFS node and will be publicly available.")),(0,r.kt)("p",null,"Alternatively, you can specify a WASM program already on IPFS by using a CID, like ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau wasm run Qmajb9T3jBdMSp7xh2JruNrqg3hniCnM6EUVsBocARPJRQ"),"."),(0,r.kt)("p",null,"Make sure to specify any input data using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--input-volumes")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--input-urls")," flags."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--input-urls")," flag can only be used once, and will make the contents of the URL available at the ",(0,r.kt)("inlineCode",{parentName:"p"},"/inputs")," directory.")),(0,r.kt)("h4",{id:"program-arguments"},"Program arguments"),(0,r.kt)("p",null,"You can give the WASM program arguments by specifying them after the program path or CID. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"bacalhau wasm run echo.wasm hello world\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Write your program to use program arguments to specify input and output paths. This makes your program more flexible at handling different configurations of input and output volumes."),(0,r.kt)("p",{parentName:"admonition"},"For example, instead of hard-coding your program to read from ",(0,r.kt)("inlineCode",{parentName:"p"},"/inputs/data.txt"),", accept a program argument that should contain the path and then specify the path as an argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau wasm run"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"bacalhau wasm run prog.wasm /inputs/data.txt\n")),(0,r.kt)("p",{parentName:"admonition"},"Your language of choice should contain a standard way of reading program arguments that will work with WASI.")),(0,r.kt)("h4",{id:"environment-variables"},"Environment variables"),(0,r.kt)("p",null,"You can also specify environment variables using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-e")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"bacalhau wasm run prog.wasm -e HELLO=world\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/examples/workload-onboarding/rust-wasm/"},"the Rust example")," for a workload that leverages WebAssembly support."),(0,r.kt)("h2",{id:"support"},"Support"),(0,r.kt)("p",null,"Please reach out to the ",(0,r.kt)("a",{parentName:"p",href:"https://filecoinproject.slack.com/archives/C02RLM3JHUY"},"Bacalhau team via Slack")," if you would like help pinning data to IPFS for your job or for any issues you encounter."))}m.isMDXComponent=!0}}]);