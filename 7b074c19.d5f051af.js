(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{154:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return i})),n.d(e,"rightToc",(function(){return s})),n.d(e,"default",(function(){return d}));var o=n(1),r=n(9),a=(n(0),n(174)),c={id:"initializing_dapps",title:"Initializing Dapps",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Main_Concepts/Initializing_Dapps.md"},i={id:"portal/Main_Concepts/initializing_dapps",title:"Initializing Dapps",description:"Once you have your basic dev environment [set up](./Getting_Started.md), you are",source:"@site/docs/en/portal/Main_Concepts/Initializing_Dapps.md",permalink:"/conflux-portal-docs/docs/portal/Main_Concepts/initializing_dapps",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Main_Concepts/Initializing_Dapps.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1584589253,sidebar:"docs",previous:{title:"Common Terms",permalink:"/conflux-portal-docs/docs/portal/Main_Concepts/common_terms"},next:{title:"Accessing Accounts",permalink:"/conflux-portal-docs/docs/portal/Main_Concepts/accessing_accounts"}},s=[{value:"The Contract Network",id:"the-contract-network",children:[]},{value:"The Contract Address",id:"the-contract-address",children:[]},{value:"The Contract ABI",id:"the-contract-abi",children:[]},{value:"The Contract Bytecode",id:"the-contract-bytecode",children:[]},{value:"The Contract Source Code",id:"the-contract-source-code",children:[]}],l={rightToc:s};function d(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Once you have your basic dev environment ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/conflux-portal-docs/docs/portal/Main_Concepts/getting_started"}),"set up"),", you are\nready to start interacting with some smart contracts. There are some basic\nthings you'll need regardless of what convenience library you're using, when\ncommunicating with a smart contract: "),Object(a.b)("h2",{id:"the-contract-network"},"The Contract Network"),Object(a.b)("p",null,"If you aren't connected to the right network, you aren't going to have any luck\nsending transactions to your contract, so make sure you have this right! "),Object(a.b)("p",null,'Many clever dapps will recognize the user\'s current network, and actually adapt\nto it! For example, if you detect a test network, you could deliberately connect\nto a test-network version of your smart contract, which makes it easy for users\nto "try out" your system without using real money! '),Object(a.b)("h2",{id:"the-contract-address"},"The Contract Address"),Object(a.b)("p",null,"Every account in Conflux has an address, whether it's an external key-pair\naccount, or a smart contract. In order for any smart contract library to\ncommunicate with your contracts, they'll need to know its exact address. "),Object(a.b)("h2",{id:"the-contract-abi"},"The Contract ABI"),Object(a.b)("p",null,"In Conflux, ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://solidity.readthedocs.io/en/develop/abi-spec.html"}),"The ABI\nSpecification")," is a\nway to encode the interface of a smart contract in a way that your user\ninterface can make sense of. It is an array of method-describing objects, and\nwhen you feed this and the address into a contract-abstraction library like\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.npmjs.com/package/js-conflux-sdk"}),"js-conflux-sdk"),",\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/liuis/conffle#readme"}),"conffle"),", or others, this ",Object(a.b)("inlineCode",{parentName:"p"},"ABI")," tells\nthose libraries about what methods to provide, and how to compose transactions\nto call those methods.  "),Object(a.b)("h2",{id:"the-contract-bytecode"},"The Contract Bytecode"),Object(a.b)("p",null,"If your web app is going to publish a new smart contract that is pre-compiled,\nit may need to include some ",Object(a.b)("inlineCode",{parentName:"p"},"bytecode"),". In this case, you will not know the\ncontract address in advance, but instead will have to publish, watch for the\ntransaction to be processed, and then extract the final contract's address from\nthe completed transaction. "),Object(a.b)("p",null,"If publishing a contract from bytecode, you will still want an ",Object(a.b)("inlineCode",{parentName:"p"},"ABI")," if you want\nto interact with it! The bytecode does not describe how to interact with the\nfinal contract. "),Object(a.b)("h2",{id:"the-contract-source-code"},"The Contract Source Code"),Object(a.b)("p",null,"If your website is going to allow users to edit smart contract source code and\ncompile it, like ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"http://remix.conflux.org/"}),"Remix"),", you may import a whole\ncompiler, in which case you're going to derive your bytecode and ABI from that\nsource code, and eventually you will derive the contract's address from the\ncompleted transaction publishing that bytecode. "))}d.isMDXComponent=!0},174:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=r.a.createContext({}),d=function(t){var e=r.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i({},e,{},t)),n},p=function(t){var e=d(t.components);return r.a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},h=Object(o.forwardRef)((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=d(n),h=o,b=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return n?r.a.createElement(b,i({ref:e},l,{components:n})):r.a.createElement(b,i({ref:e},l))}));function b(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,c=new Array(a);c[0]=h;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);