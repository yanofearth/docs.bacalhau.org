"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_label:"Private Cluster",sidebar_position:5},a="Private Cluster",p={unversionedId:"next-steps/private-cluster",id:"next-steps/private-cluster",title:"Private Cluster",description:"It is possible to run Bacalhau completely disconnected from the main Bacalhau network, so that you can run private workloads without risking running on public nodes or inadvertantly sharing your data outside of your organization. The isolated network will not connect to the public Bacalhau network nor connect to the public IPFS network. To do this, we will run IPFS in-process rather than externally.",source:"@site/docs/next-steps/private-cluster.md",sourceDirName:"next-steps",slug:"/next-steps/private-cluster",permalink:"/next-steps/private-cluster",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/next-steps/private-cluster.md",tags:[],version:"current",lastUpdatedAt:1676283943,formattedLastUpdatedAt:"Feb 13, 2023",sidebarPosition:5,frontMatter:{sidebar_label:"Private Cluster",sidebar_position:5},sidebar:"documentationSidebar",previous:{title:"Networking",permalink:"/next-steps/networking"},next:{title:"Debugging Jobs",permalink:"/troubleshooting/debugging"}},s={},l=[{value:"Initial Requester Node",id:"initial-requester-node",level:2},{value:"Compute Nodes",id:"compute-nodes",level:2},{value:"Submitting Jobs",id:"submitting-jobs",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"private-cluster"},"Private Cluster"),(0,o.kt)("p",null,"It is possible to run Bacalhau completely disconnected from the main Bacalhau network, so that you can run private workloads without risking running on public nodes or inadvertantly sharing your data outside of your organization. The isolated network will not connect to the public Bacalhau network nor connect to the public IPFS network. To do this, we will run IPFS in-process rather than externally."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The in-process IPFS is easier to set up, but a separate IPFS server is better for production. The in-process IPFS will use a temporary directory for its repository and so the contents will be lost on shutdown.")),(0,o.kt)("h2",{id:"initial-requester-node"},"Initial Requester Node"),(0,o.kt)("p",null,"The first step is to start up the initial node, which we will use as the ",(0,o.kt)("inlineCode",{parentName:"p"},"requester node"),". This node will connect to nothing but will listen for connections."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau serve --node-type requester --private-internal-ipfs --peer none\n")),(0,o.kt)("p",null,"This will produce output similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'16:34:17.154 | INF pkg/libp2p/host.go:69 > started libp2p host [host-id:QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE] [listening-addresses:["/ip4/192.168.1.224/tcp/1235","/ip4/127.0.0.1/tcp/1235","/ip4/192.168.1.224/udp/1235/quic","/ip4/127.0.0.1/udp/1235/quic","/ip6/::1/tcp/1235","/ip6/::1/udp/1235/quic"]] [p2p-addresses:["/ip4/192.168.1.224/tcp/1235/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE","/ip4/127.0.0.1/tcp/1235/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE","/ip4/192.168.1.224/udp/1235/quic/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE","/ip4/127.0.0.1/udp/1235/quic/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE","/ip6/::1/tcp/1235/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE","/ip6/::1/udp/1235/quic/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE"]]\n16:34:17.555 | INF cmd/bacalhau/serve.go:506 > Internal IPFS node available [NodeID:QmWg7m5G] [ipfs_swarm_addresses:["/ip4/192.168.1.224/tcp/53291/p2p/QmdCLbe2pUoGjCzffd75U8w1LTiVpSap88rNjzXsBhWkL2","/ip4/127.0.0.1/tcp/53291/p2p/QmdCLbe2pUoGjCzffd75U8w1LTiVpSap88rNjzXsBhWkL2"]]\n\nTo connect another node to this private one, run the following command in your shell:\nbacalhau serve --private-internal-ipfs --peer /ip4/192.168.1.224/tcp/1235/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE --ipfs-swarm-addr /ip4/192.168.1.224/tcp/53291/p2p/QmdCLbe2pUoGjCzffd75U8w1LTiVpSap88rNjzXsBhWkL2\n\nTo use this requester node from the client, run the following commands in your shell:\nexport BACALHAU_IPFS_SWARM_ADDRESSES=/ip4/192.168.1.224/tcp/53291/p2p/QmdCLbe2pUoGjCzffd75U8w1LTiVpSap88rNjzXsBhWkL2\nexport BACALHAU_API_HOST=0.0.0.0\nexport BACALHAU_API_PORT=1234\n')),(0,o.kt)("h2",{id:"compute-nodes"},"Compute Nodes"),(0,o.kt)("p",null,"To connect another node to this private one, run the following command in your shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bacalhau serve --private-internal-ipfs --peer /ip4/<ip-address>/tcp/1235/p2p/<peer-id> --ipfs-swarm-addr /ip4/<ip-address>/tcp/<port>/p2p/<peer-id>\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The exact command will be different on each computer and is outputted by the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau serve --node-type requester ...")," command")),(0,o.kt)("p",null,"The command ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau serve --private-internal-ipfs --peer ...")," starts up a compute node and adds it to the cluster."),(0,o.kt)("h2",{id:"submitting-jobs"},"Submitting Jobs"),(0,o.kt)("p",null,"To use this cluster from the client, run the following commands in your shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export BACALHAU_IPFS_SWARM_ADDRESSES=/ip4/<ip-address>/tcp/<port>/p2p/<peer-id>\nexport BACALHAU_API_HOST=0.0.0.0\nexport BACALHAU_API_PORT=1234\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The exact command will be different on each computer and is outputted by the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau serve --node-type requester ...")," command")),(0,o.kt)("p",null,"The command ",(0,o.kt)("inlineCode",{parentName:"p"},"export BACALHAU_IPFS_SWARM_ADDRESSES=...")," sends jobs into the cluster from the command line client."))}c.isMDXComponent=!0}}]);