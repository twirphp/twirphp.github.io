"use strict";(self.webpackChunktwirphp_github_io=self.webpackChunktwirphp_github_io||[]).push([[202],{3010:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),s=["components"],a={sidebar_position:50},c="Best practices",p={unversionedId:"best-practices",id:"best-practices",isDocsHomePage:!1,title:"Best practices",description:"This page contains some best practices related to using TwirPHP.",source:"@site/docs/best-practices.md",sourceDirName:".",slug:"/best-practices",permalink:"/docs/best-practices",editUrl:"https://github.com/twirphp/twirphp.github.io/edit/main/docs/best-practices.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation"}},l=[{value:"Folder/Package structure",id:"folderpackage-structure",children:[],level:2},{value:"Build tool for code generation",id:"build-tool-for-code-generation",children:[],level:2}],u={toc:l};function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"best-practices"},"Best practices"),(0,i.kt)("p",null,"This page contains some best practices related to using TwirPHP."),(0,i.kt)("h2",{id:"folderpackage-structure"},"Folder/Package structure"),(0,i.kt)("p",null,"There are three types of software artifacts involved in a project using TwirPHP:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"proto files"),(0,i.kt)("li",{parentName:"ul"},"generated code"),(0,i.kt)("li",{parentName:"ul"},"service implementation")),(0,i.kt)("p",null,"Based on common PHP packaging practices, here is a recommended folder structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/generated\n    /<namespace>\n        // generated files\n/src\n    /<namespace>\n        // service implementation\n/proto\n    service.proto\n")),(0,i.kt)("p",null,"Projects with multiple services might have different ways of structuring proto files."),(0,i.kt)("h2",{id:"build-tool-for-code-generation"},"Build tool for code generation"),(0,i.kt)("p",null,"Make sure to properly document how the code generation works."),(0,i.kt)("p",null,"Even better: use a build tool to collect all proto generation commands."),(0,i.kt)("p",null,"In case of PHP, that tool can be ",(0,i.kt)("a",{parentName:"p",href:"https://getcomposer.org/"},"Composer")," itself:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="composer.json"',title:'"composer.json"'},'{\n    // ...\n\n    "scripts": {\n        "proto": [\n            "protoc -I . --twirp_out=generated --php_out=generated proto/service.proto"\n        ]\n    }\n}\n')),(0,i.kt)("p",null,"Then you can simply run the code generator using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"composer proto\n")))}d.isMDXComponent=!0}}]);