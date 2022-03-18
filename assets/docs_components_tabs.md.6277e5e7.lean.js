import{_ as u,h,K as T,r as e,o as i,c as k,a as s,e as t,w as a,F as q,b as n,A as v,d as c}from"./app.2412929f.js";import"./index.56618267.js";import{_,a as y,b as w,c as f}from"./Angular-icon.63775078.js";const x={name:"TabExamples",components:{Button:h,Tabs:T},data(){return{disabledOptions:["tab-18","tab-20"]}}},P=s("h2",null,"Tabs",-1),B={class:"mbs24 mbe16"},A=n(" Tab 1 "),j=s("p",null,"Tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)",-1),I=s("p",null,[n(" Try tabbing into this. You'll be able to tab through the links, and then shift-tab back out. To get to the next tab you use the arrow key and enter|space to select. This is consistent with wai-aria practices "),s("a",{href:"https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html"}," aria manual activation example"),n(". ")],-1),C=s("p",null,[n("Random "),s("a",{href:"www.yahoo.com"},"yahoo link 1"),n(" and random "),s("a",{href:"www.yahoo.com"},"yahoo link 2"),n(". Just testing some links out :)")],-1),N=n(" Tab 2 "),V=s("p",null,[n("Random "),s("a",{href:"www.yahoo.com"},"yahoo link 1"),n(" and random "),s("a",{href:"www.yahoo.com"},"yahoo link 2"),n(". Just testing some links out :)")],-1),$=n(" Tab Foo "),S=n(" Panel Foo content (no padding or margins so consumer can control desired gutters) "),R=n(" Tab Bar "),U=n(" Panel Bar "),D={class:"mbs32 mbe16"},O=n(" Tab 1 "),Y=n(" Panel 1 "),E=n(" Tab 2 "),J=n(" Panel 2 "),M=s("h2",null,"Vertical Tabs",-1),z={class:"mbs48 mbe16"},F=n(" Tab 1 "),H=s("p",null,"Vertical tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)",-1),K=s("p",null,[n("Now you'll use the up and down arrows. Home and end still work the same. Random "),s("a",{href:"www.yahoo.com"},"yahoo link 1"),n(" and random "),s("a",{href:"www.yahoo.com"},"yahoo link 2"),n(". Just testing some links out :)")],-1),L=n(" Tab 2 "),G=n(" Vertical tab 2 content (no padding or margins so consumer can control desired gutters) "),X=s("h2",null,"Disabled Tabs",-1),Q={class:"mbs48 mbe16"},W=n(" Tab 1 "),Z=n(" Panel 1 "),nn=n(" Tab 1 "),an=n(" Panel 2 "),sn=s("h2",null,"Disabled Options",-1),tn={class:"mbs12 mbe16"},pn=n(" Tab 1 "),on=n(" Disabled options only make sense if you do NOT supply isDisabled (as that disabled all the tab buttons), and you wish to selectively disable certain buttons. Here we've disabled the second and fourth tabs. Keyboard navigation skips the disabled tabs. "),en=n(" Tab 2 "),cn=n(" Panel 2 "),ln=n(" Tab 3 "),un=n(" Panel 3 "),kn=n(" Tab 4 "),rn=n(" Panel 4 "),gn=n(" Tab 5 "),mn=n(" Panel 5 "),bn=s("h2",null,"Custom",-1),dn={class:"mbs12 mbe16"},hn=s("p",{class:"mbe12"}," Custom tabs using an AgnosticUI button requires two things: ",-1),Tn=s("ul",{class:"mbe24"},[s("li",null,[n("You need to use the "),s("code",null,'tabType="custom"'),n(" prop on the tab")]),s("li",null,[n("You need to use the "),s("code",null,'type="faux"'),n(" prop on the button. This is required because the tabs are already buttons so you'd have a nested button a11y violation otherwise.")])],-1),qn=n(" Tab One "),vn=s("p",null,"Tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)",-1),_n=s("p",null,[n(" Try tabbing into this. You'll be able to tab through the links, and then shift-tab back out. To get to the next tab you use the arrow key and enter|space to select. This is consistent with wai-aria practices "),s("a",{href:"https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html"}," aria manual activation example"),n(". ")],-1),yn=s("p",null,[n("Random "),s("a",{href:"www.yahoo.com"},"yahoo link 1"),n(" and random "),s("a",{href:"www.yahoo.com"},"yahoo link 2"),n(". Just testing some links out :)")],-1),wn=n(" Tab Two "),fn=n(" Tab 2 content (no padding or margins so consumer can control desired gutters) ");function xn(r,g,m,b,l,d){const p=e("Tabs"),o=e("Button");return i(),k(q,null,[P,s("div",B,[t(p,null,{"tab-1":a(()=>[A]),"panel-1":a(()=>[j,I,C]),"tab-2":a(()=>[N]),"panel-2":a(()=>[V]),"tab-foo":a(()=>[$]),"panel-foo":a(()=>[S]),"tab-bar":a(()=>[R]),"panel-bar":a(()=>[U]),_:1})]),s("div",D,[t(p,{size:"large"},{"tab-11":a(()=>[O]),"panel-11":a(()=>[Y]),"tab-12":a(()=>[E]),"panel-12":a(()=>[J]),_:1})]),M,s("div",z,[t(p,{"is-vertical":""},{"tab-13":a(()=>[F]),"panel-13":a(()=>[H,K]),"tab-14":a(()=>[L]),"panel-14":a(()=>[G]),_:1})]),X,s("div",Q,[t(p,{"is-disabled":""},{"tab-15":a(()=>[W]),"panel-15":a(()=>[Z]),"tab-16":a(()=>[nn]),"panel-16":a(()=>[an]),_:1})]),sn,s("div",tn,[t(p,{"disabled-options":l.disabledOptions},{"tab-17":a(()=>[pn]),"panel-17":a(()=>[on]),"tab-18":a(()=>[en]),"panel-18":a(()=>[cn]),"tab-19":a(()=>[ln]),"panel-19":a(()=>[un]),"tab-20":a(()=>[kn]),"panel-20":a(()=>[rn]),"tab-21":a(()=>[gn]),"panel-21":a(()=>[mn]),_:1},8,["disabled-options"])]),bn,s("div",dn,[s("div",null,[hn,Tn,t(p,{"tab-type":"custom"},{"tab-22":a(()=>[t(o,{type:"faux",mode:"primary","is-bordered":""},{default:a(()=>[qn]),_:1})]),"panel-22":a(()=>[vn,_n,yn]),"tab-23":a(()=>[t(o,{type:"faux",mode:"primary","is-bordered":""},{default:a(()=>[wn]),_:1})]),"panel-23":a(()=>[fn]),_:1})])])],64)}var Pn=u(x,[["render",xn]]);const Bn={components:{Alert:v,TabExamples:Pn}},Rn='{"title":"Tabs","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/tabs.md","lastUpdated":1647643714660}',An=c("",5),jn=c("",10),In=n("Note: Vue 2 is not supported"),Cn=c("",26);function Nn(r,g,m,b,l,d){const p=e("TabExamples"),o=e("Alert");return i(),k("div",null,[An,t(p),jn,t(o,{type:"warning"},{default:a(()=>[In]),_:1}),Cn])}var Un=u(Bn,[["render",Nn]]);export{Rn as __pageData,Un as default};