"use strict";(self.webpackChunktwirphp_github_io=self.webpackChunktwirphp_github_io||[]).push([[993],{8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),o=n(2389),i=n(9443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(3039),s=n(6010),p="tabItem_1uMI";function c(e){var t,n,r,o=e.lazy,i=e.block,c=e.defaultValue,d=e.values,h=e.groupId,m=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,u.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),w=k.tabGroupChoices,T=k.setTabGroupChoices,N=(0,a.useState)(b),y=N[0],C=N[1],_=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var x=w[h];null!=x&&x!==y&&v.some((function(e){return e.value===x}))&&C(x)}var P=function(e){var t=e.currentTarget,n=_.indexOf(t),r=v[n].value;r!==y&&(E(t),C(r),null!=h&&T(h,r))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=_.indexOf(e.currentTarget)+1;n=_[r]||_[0];break;case"ArrowLeft":var a=_.indexOf(e.currentTarget)-1;n=_[a]||_[_.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},m)},v.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,s.Z)("tabs__item",p,{"tabs__item--active":y===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:Z,onFocus:P,onClick:P},null!=n?n:t)}))),o?(0,a.cloneElement)(f.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}function d(e){var t=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},6693:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(5064),l=n(8215),u=["components"],s={sidebar_position:60},p="Code generation",c={unversionedId:"code-generation",id:"code-generation",isDocsHomePage:!1,title:"Code generation",description:"To start building a Twirp service and generate the necessary code for it,",source:"@site/docs/code-generation.md",sourceDirName:".",slug:"/code-generation",permalink:"/docs/code-generation",editUrl:"https://github.com/twirphp/twirphp.github.io/edit/main/docs/code-generation.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"docs",previous:{title:"Protocol Buffers",permalink:"/docs/protocol-buffers"},next:{title:"Best practices",permalink:"/docs/best-practices"}},d=[],h={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"code-generation"},"Code generation"),(0,o.kt)("p",null,"To start building a Twirp service and generate the necessary code for it,\nyou are going to need three things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"protoc")," tool"),(0,o.kt)("li",{parentName:"ul"},"the TwirPHP ",(0,o.kt)("inlineCode",{parentName:"li"},"protoc")," plugin (",(0,o.kt)("inlineCode",{parentName:"li"},"protoc-gen-twirp_php"),")"),(0,o.kt)("li",{parentName:"ul"},"some proto file that contains service definitions (see the ",(0,o.kt)("a",{parentName:"li",href:"/docs/quickstart#create-a-new-service-definition"},"Quickstart guide")," for an example)")),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/installation"},"Installation guide")," for details about installing ",(0,o.kt)("inlineCode",{parentName:"p"},"protoc")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"protoc-gen-twirp_php"),"."),(0,o.kt)("p",null,"Based on where you installed ",(0,o.kt)("inlineCode",{parentName:"p"},"protoc-gen-twirp_php"),", you might have to invoke the ",(0,o.kt)("inlineCode",{parentName:"p"},"protoc")," tool differently:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"apple",label:"Plugin installed in PATH",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"protoc --twirp_php_out=generated/ --php_out=generated/ service.proto\n"))),(0,o.kt)(l.Z,{value:"orange",label:"Plugin installed in custom path",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"protoc \\\n  --plugin=protoc-gen-twirp_php=path/to/protoc-gen-twirp_php \\\n  --twirp_php_out=generated/ \\\n  --php_out=generated/ \\\n  service.proto\n")))),(0,o.kt)("p",null,"The resulting directory structure should look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 GPBMetadata                                   // Some protobuf specific files\n\u2502\xa0\xa0 \u2514\u2500\u2500 Service.php\n\u2514\u2500\u2500 Twitch\n    \u2514\u2500\u2500 Twirp\n        \u2514\u2500\u2500 Example\n            \u251c\u2500\u2500 Haberdasher.php                   // Service interface\n            \u251c\u2500\u2500 HaberdasherAbstractClient.php     // Most of the generated client code\n            \u251c\u2500\u2500 HaberdasherClient.php             // Protobuf client\n            \u251c\u2500\u2500 HaberdasherJsonClient.php         // JSON client\n            \u251c\u2500\u2500 HaberdasherServer.php             // Server implementation\n            \u251c\u2500\u2500 Hat.php                           // Message\n            \u251c\u2500\u2500 Size.php                          // Message\n            \u2514\u2500\u2500 TwirpError.php                    // Exception thrown for most Twirp errors\n")))}m.isMDXComponent=!0}}]);