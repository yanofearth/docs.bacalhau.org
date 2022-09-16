"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[2245],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||l;return a?n.createElement(d,r(r({ref:t},c),{},{components:a})):n.createElement(d,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},228:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(3117),o=(a(7294),a(3905));const l={sidebar_label:"Basic Template",sidebar_position:1},r="Title of Example",i={unversionedId:"examples/templates/basic-template/index",id:"examples/templates/basic-template/index",title:"Title of Example",description:"This notebook is a basic example of using notebooks to create examples. It demonstrates some of ipython's basic features to achieve common Bacalhau tasks. Other more advanced templates are available in the templates directory.",source:"@site/docs/examples/templates/basic-template/index.md",sourceDirName:"examples/templates/basic-template",slug:"/examples/templates/basic-template/",permalink:"/examples/templates/basic-template/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/templates/basic-template/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Basic Template",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Templates",permalink:"/examples/templates/"},next:{title:"Overview",permalink:"/running-node/overview"}},s={},p=[{value:"Why a Notebook?",id:"why-a-notebook",level:3},{value:"What Happens to This Notebook",id:"what-happens-to-this-notebook",level:3},{value:"Key Requirements",id:"key-requirements",level:3},{value:"Structure",id:"structure",level:3},{value:"Metadata",id:"metadata",level:3},{value:"Working With Bash",id:"working-with-bash",level:2},{value:"Working with Bacalhau",id:"working-with-bacalhau",level:2},{value:"Working With Images",id:"working-with-images",level:2},{value:"Working With Raw Text Files",id:"working-with-raw-text-files",level:2},{value:"Working With Files",id:"working-with-files",level:2}],c={toc:p};function h(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"title-of-example"},"Title of Example"),(0,o.kt)("p",null,"This notebook is a basic example of using notebooks to create examples. It demonstrates some of ipython's basic features to achieve common Bacalhau tasks. Other more advanced templates are available in the ",(0,o.kt)("a",{parentName:"p",href:".."},"templates")," directory."),(0,o.kt)("h3",{id:"why-a-notebook"},"Why a Notebook?"),(0,o.kt)("p",null,"Notebooks are great because:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Readers can "execute" the documentation. They can not only read the example, but try it!'),(0,o.kt)("li",{parentName:"ul"},"They are testable. We can run the notebook in CI and check that it works."),(0,o.kt)("li",{parentName:"ul"},"They are interactive. Readers can alter the notebooks and play with the code."),(0,o.kt)("li",{parentName:"ul"},"They are great for hackathons. Just point people to the notebook and get hacking.")),(0,o.kt)("h3",{id:"what-happens-to-this-notebook"},"What Happens to This Notebook"),(0,o.kt)("p",null,"There are a few CI scripts that operate on notebooks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Whenever you push to the main branch on this repository, a github action will automatically render your ipynb's into markdown and push them to the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/bacalhau-project/docs.bacalhau.org/"},"docs repository"),"."),(0,o.kt)("li",{parentName:"ul"},"Whenever you push, pytest will run to ensure that all notebooks execute without error.")),(0,o.kt)("h3",{id:"key-requirements"},"Key Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We use Python as the kernel for our notebooks. This is the most common kernel and is used in our tests."),(0,o.kt)("li",{parentName:"ul"},"Large datafiles should not be stored in the repo. Store data in either the GCS bucket or IPFS (depending on the example)."),(0,o.kt)("li",{parentName:"ul"},"Make sure all cells run successfully to pass tests. If a cell takes a very long time you may want to skip tests. See below.")),(0,o.kt)("h3",{id:"structure"},"Structure"),(0,o.kt)("p",null,"All examples must exist within a directory. The notebook should be called ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ipynb")," (so that it gets rendered as the index.html page in the docs). You may have other supporting files in the directory. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"basic-template\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 example-image.jpg\n\u251c\u2500\u2500 index.ipynb\n\u2514\u2500\u2500 small-toy-dataset.csv\n")),(0,o.kt)("h3",{id:"metadata"},"Metadata"),(0,o.kt)("p",null,"You can control some elements of the documentation rendering by adding metadata to the notebook. This is done by adding a raw cell at the top of the notebook. The metadata is in YAML format. See the top of this file for an example."),(0,o.kt)("h2",{id:"working-with-bash"},"Working With Bash"),(0,o.kt)("p",null,"The following demonstrates how to work with bash commands in a notebook. Note that these commands execute within the context of your kernel. If you don't have the required dependencies installed, you will need to install them first. Read more about ",(0,o.kt)("a",{parentName:"p",href:"https://ipython.readthedocs.io/en/stable/interactive/magics.html#magic-bash"},"working with bash in notebooks"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\n\n```bash\n%%bash\necho "This is one way of working with bash, which is good because it renders nicely in the documentation"\nls -l\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"This is one way of working with bash, which is good because it renders nicely in the documentation\ntotal 73640\n-rw-r--r-- 1 phil staff       47 Sep 16 10:16 Dockerfile\n-rw-r--r-- 1 phil staff       98 Sep 16 13:00 README.md\n-rwxr-xr-x 1 phil staff 75054546 Sep 16 13:01 bacalhau\n-rw-r--r-- 1 phil staff   137052 Sep 16 12:23 example-image.jpg\n-rw-r--r-- 1 phil staff   195696 Sep 16 12:59 index.ipynb\n-rw-r--r-- 1 phil staff       94 Sep 16 12:58 myfile.py\n-rw-r--r-- 1 phil staff       20 Sep 16 10:31 small-toy-dataset.csv\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'!echo "But this works too, but remember the ! is rendered in the docs"\n!curl https://ifconfig.me/\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"But this works too, but remember the ! is rendered in the docs\n92.4.101.140\n")),(0,o.kt)("h2",{id:"working-with-bacalhau"},"Working with Bacalhau"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Remember that the user's and CI context likely won't have Bacalhau installed, so you need to install it.")),(0,o.kt)("p",null,"Install Bacalhau with the following command and then hack the kernels PATH to include the installed location. This means we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau")," command as if someone had installed in globally"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"!(export BACALHAU_INSTALL_DIR=.; curl -sL https://get.bacalhau.org/install.sh | bash)\npath=!echo $PATH\n%env PATH=./:{path[0]}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Your system is darwin_arm64\n\nBACALHAU CLI is detected:\nClient Version: v0.2.3\nServer Version: v0.2.3\nReinstalling BACALHAU CLI - ./bacalhau...\nGetting the latest BACALHAU CLI...\nInstalling v0.2.3 BACALHAU CLI...\nDownloading https://github.com/filecoin-project/bacalhau/releases/download/v0.2.3/bacalhau_v0.2.3_darwin_arm64.tar.gz ...\nDownloading sig file https://github.com/filecoin-project/bacalhau/releases/download/v0.2.3/bacalhau_v0.2.3_darwin_arm64.tar.gz.signature.sha256 ...\nVerified OK\nExtracting tarball ...\nNOT verifying Bin\nbacalhau installed into . successfully.\nClient Version: v0.2.3\nServer Version: v0.2.3\nenv: PATH=./:/Users/phil/.pyenv/versions/3.9.7/bin:/opt/homebrew/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/bin:/Users/phil/.gvm/bin:/opt/homebrew/opt/findutils/libexec/gnubin:/opt/homebrew/opt/coreutils/libexec/gnubin:/opt/homebrew/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/bin:/Users/phil/.pyenv/shims:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/MacGPG2/bin:/Users/phil/.nexustools\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau version\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Client Version: v0.2.3\nServer Version: v0.2.3\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash\njob_id=$(bacalhau docker run ubuntu echo Hello World)\necho $job_id\necho "Note that bash is executed in a subprocess, so variables are only available within the same cell"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"12935a4b-c6c2-4ed3-b7da-c3b2f14941ab\nNote that bash is executed in a subprocess, so variables are only available within the same cell\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'print("We can also do this with Python")\njob_id = !bacalhau docker run --wait --wait-timeout-secs 100 ubuntu echo Hello World\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"We can also do this with Python\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'print("Which does work across cells", job_id[0])\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Which does work across cells b4246da6-b721-4c13-b32e-838a850eebd3\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"!bacalhau list --id-filter {job_id[0]}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\x1b[92;100m CREATED  \x1b[0m\x1b[92;100m ID       \x1b[0m\x1b[92;100m JOB                     \x1b[0m\x1b[92;100m STATE     \x1b[0m\x1b[92;100m VERIFIED \x1b[0m\x1b[92;100m PUBLISHED               \x1b[0m\n\x1b[97;40m 12:03:08 \x1b[0m\x1b[97;40m b4246da6 \x1b[0m\x1b[97;40m Docker ubuntu echo H... \x1b[0m\x1b[97;40m Published \x1b[0m\x1b[97;40m          \x1b[0m\x1b[97;40m /ipfs/bafybeidu4zm6w... \x1b[0m\n")),(0,o.kt)("h2",{id:"working-with-images"},"Working With Images"),(0,o.kt)("p",null,"You can either dump an image right in markdown like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1468).Z,width:"800",height:"601"})),(0,o.kt)("p",null,"Or resultant images can be displayed in the notebook using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Image")," class from ",(0,o.kt)("inlineCode",{parentName:"p"},"IPython.display"),". You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"display")," function to display other objects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import IPython.display as display\ndisplay.Image("example-image.jpg")\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"jpeg",src:a(6637).Z,width:"800",height:"601"})),(0,o.kt)("h2",{id:"working-with-raw-text-files"},"Working With Raw Text Files"),(0,o.kt)("p",null,"When working with raw text files like Dockerfiles, be sure to show these to the user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%cat Dockerfile\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'FROM example-dockerfile\nRUN echo "do something"\n')),(0,o.kt)("p",null,"You can even write files directly from your notebook for later use..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile myfile.py\n\nprint("This is code in a newly created python file. Use %%writefile -a to append to files.")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Overwriting myfile.py\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%run -i 'myfile.py'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"This is code in a newly created python file. Use %%writefile -a to append to files.\n")),(0,o.kt)("h2",{id:"working-with-files"},"Working With Files"),(0,o.kt)("p",null,"If your file is small, fine, shove it in git. But if it's big, use the production GCS bucket for http-accessible public data or IPFS, whichever makes more sense."),(0,o.kt)("p",null,"To access files in GCS, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"gsutil")," command line tool. You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"gcsfs")," library to access GCS from Python. You'll need to make sure you have the correct credentials to access the bucket. This can be done by executing ",(0,o.kt)("inlineCode",{parentName:"p"},"(cd ops/terraform; bash scripts/connect_workspace.sh production)")," from the root of the Bacalhau repository."),(0,o.kt)("p",null,"When uploading files, please use the same directory structure as this repository to keep things organised. For example, I uploaded a small-toy-dataset.csv using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gsutil cp templates/basic-template/small-toy-dataset.csv gs://bacalhau-examples/templates/basic-template/small-toy-example.csv\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncurl -s https://storage.googleapis.com/bacalhau-examples/templates/basic-template/small-toy-example.csv\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"a,very,small,dataset\n")))}h.isMDXComponent=!0},1468:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example-image-d9aef025bffb96c2107f3fdb46329d78.jpg"},6637:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_12_0-d9aef025bffb96c2107f3fdb46329d78.jpg"}}]);