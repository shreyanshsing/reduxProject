(this.webpackJsonpcolor=this.webpackJsonpcolor||[]).push([[0],{47:function(e,a,t){e.exports=t(64)},52:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),c=t.n(r),o=(t(52),t(19)),i=t(11),m=t(17),s=Object(m.b)({name:"color",initialState:{value:"white"},reducers:{change:function(e,a){"light"==a.payload&&(e.value="white"),"dark"==a.payload&&(e.value="black")}}}),u=s.actions.change,E=function(e){return e.c.value},d=s.reducer,p=t(67),h=t(72),b=t(68),f=(t(57),t(66)),v=t(73),g=t(14);t(58);var k=function(e){return l.a.createElement(f.a,{fluid:!0,className:"register"},l.a.createElement(g.a,null,l.a.createElement("h1",{id:"1"},"Hey! ",l.a.createElement("br",null),l.a.createElement("small",null,"Connect with us")),l.a.createElement(v.a,{className:"links"},l.a.createElement(g.b,{to:"/registershop",className:"link-list"},"  ",l.a.createElement(v.a.Item,{variant:"info"},"Register Shop")),l.a.createElement(g.b,{to:"/registerasuser",className:"link-list"}," ",l.a.createElement(v.a.Item,{variant:"warning"},"Register as User")),l.a.createElement(g.b,{to:"/help",className:"link-list"},"  ",l.a.createElement(v.a.Item,{variant:"danger"},"Need Assistance")))))},y=Object(m.b)({name:"shop",initialState:[{id:0,name:"Brisk-Official",location:"Kanpur(UP)"},{id:1,name:"Brisk-Official",location:"Lucknow(UP)"}],reducers:{addShop:function(e,a){e.push(a.payload)}}}),w=y.actions.addShop,j=function(e){return e.d},O=y.reducer;t(60);var N=function(){var e=Object(i.c)(j);console.log(e);var a=e.map((function(e){return l.a.createElement("div",{className:"shop-info",key:e.id},l.a.createElement("p",null,"Shop Name:",e.name),l.a.createElement("p",null,"Shop Location:",e.location))}));return l.a.createElement("div",{className:"shop"},l.a.createElement("h3",null,"Shop's with us:"),l.a.createElement("div",null," ",a))};function S(){Object(i.c)(E);var e=Object(i.b)(),a=Object(n.useState)(""),t=Object(o.a)(a,2),r=t[0],c=t[1];return l.a.createElement("div",null,l.a.createElement("div",null,"Theme:"),l.a.createElement("div",null,l.a.createElement("select",{value:r,onChange:function(e){return c(e.target.value)}},l.a.createElement("option",null,"select"),l.a.createElement("option",{value:"dark"},"Drak"),l.a.createElement("option",{value:"light"},"Light")),l.a.createElement(p.a,{onClick:function(){return e(u(r))}},"Change Theme"),l.a.createElement(h.a,{style:{backgroundColor:"powderblue",color:"black"}},l.a.createElement(h.a.Title,null,l.a.createElement(b.a,{className:"card-img",src:"dog.gif"}),l.a.createElement("h3",{style:{margin:"10px",padding:"5px"}},"AIM",l.a.createElement("small",null,"'S"),":")),l.a.createElement(h.a.Body,null,l.a.createElement("ul",null,l.a.createElement("li",null,"Get to know about your dog."),l.a.createElement("li",null,"Dog training tutorial's for most of the dog breed's."),l.a.createElement("li",null,"Nearby petshop's."),l.a.createElement("li",null,"Foods and toys liked by dog's"))),l.a.createElement(h.a.Footer,{style:{color:"red"}},"*We only show registered shop's with us. This list will update as more and more people's connect with us"))),l.a.createElement(k,null),l.a.createElement(N,null))}var x=t(70),C=t(71),L=t(69),B=t(5);t(61);var I=function(e){var a=Object(n.useState)(null),t=Object(o.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)(null),u=Object(o.a)(s,2),E=u[0],d=u[1],h=Object(i.b)();return l.a.createElement("div",{className:"shop-page"},l.a.createElement("h2",null,"Welcome Dear!",l.a.createElement("br",null),"Get your shop registered with us and give your shop fame."),l.a.createElement("b",null,"Fill the details below :)"),l.a.createElement(L.a,{onSubmit:function(e){e.preventDefalut(),r&&E&&(h(w({id:Object(m.c)(),name:r,location:E})),alert("added successfully!")),c(""),d("")}},l.a.createElement("label",null,"Enter Shop name:"),l.a.createElement(L.a.Control,{type:"text",placeholder:" shop name.",defaultValue:r,onChange:function(e){return c(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",null,"Enter Shop Location:"),l.a.createElement(L.a.Control,{type:"text",placeholder:"location",defaultValue:E,onChange:function(e){return d(e.target.value)}}),l.a.createElement("br",null),l.a.createElement(p.a,{type:"submit",variant:"danger"},l.a.createElement(g.b,{to:"/reduxProject"},"Submit"))))};var T=function(e){return l.a.createElement("div",null,"User")};var D=function(e){return l.a.createElement("div",null,"Help")};t(63);var P=function(){var e=Object(n.useState)("black"),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(i.c)(E);return Object(n.useEffect)((function(){r("black"==c?"white":"black")}),[c]),l.a.createElement("div",{className:"App",style:{backgroundColor:c,color:t}},l.a.createElement(f.a,{fluid:!0},l.a.createElement(g.a,null,l.a.createElement("header",null,l.a.createElement("h1",null,"Brisk.Com"),l.a.createElement(x.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},l.a.createElement(x.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(x.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(C.a,{className:"mr-auto justify-content-center"},l.a.createElement(C.a.Link,{href:"#menu"},l.a.createElement("i",{className:"material-icons"},"menu")),l.a.createElement(C.a.Link,{href:"#profile"},l.a.createElement("i",{className:"material-icons"},"perm_identity")),l.a.createElement(C.a.Link,{href:"#downloads"},l.a.createElement("i",{className:"material-icons"},"get_app"))),l.a.createElement(L.a,{inline:!0},l.a.createElement(L.a.Control,{type:"text",placeholder:"search",className:"mr-sm-2"}),l.a.createElement(p.a,{type:"submit",variant:"outline-info"},l.a.createElement("i",{className:"material-icons"},"search")))))),l.a.createElement(B.c,null,l.a.createElement(B.a,{exact:!0,path:"/reduxProject",component:S}),l.a.createElement(B.a,{exact:!0,path:"/registershop",component:I}),l.a.createElement(B.a,{exact:!0,path:"/registerasuser",component:T}),l.a.createElement(B.a,{exact:!0,path:"/help",component:D})))))},U=Object(m.a)({reducer:{c:d,d:O}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,{store:U},l.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.c5847d14.chunk.js.map