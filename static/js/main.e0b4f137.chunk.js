(this["webpackJsonprobertludwick.github.io"]=this["webpackJsonprobertludwick.github.io"]||[]).push([[0],{57:function(e,t,a){},63:function(e,t,a){e.exports=a(77)},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c);a(57),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(12),i=a(13),u=a(16),s=a(15),m=a(32),p=a(31),b=a(42),h=(r.a.Component,a(103)),j=a(100),f=a(101),O=a(102),d=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{position:"static"},r.a.createElement(j.a,null,r.a.createElement(f.a,{variant:"h6"},"Robert Ludwick"),r.a.createElement(O.a,{color:"inherit",href:"https://drive.google.com/uc?export=download&id=1SZKGe93ndXtP52V0cufovE6sEC2lkP1J"},"Resume"),r.a.createElement(O.a,{color:"inherit"},"Projects"),r.a.createElement(O.a,{color:"inherit",href:"https://github.com/RobertLudwick"},"Github"),r.a.createElement(O.a,{color:"inherit",href:"https://www.linkedin.com/in/robert-ludwick-473437151/"},"Likedin")))}}]),a}(r.a.Component),E=a(8),v=(r.a.Component,function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"distance"},r.a.createElement(E.a,{style:{width:"18rem"}},r.a.createElement(E.a.Img,{variant:"top",src:"holder.js/100px180"}),r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,null,this.props.title),r.a.createElement(E.a.Text,null,this.props.text))))}}]),a}(r.a.Component)),w=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"line"},r.a.createElement(v,{title:"Front end",text:"HTML5 CSS3 JavaScript React"}),r.a.createElement(v,{title:"Server",text:"NodeJS Flask Django"}),r.a.createElement(v,{title:"Database",text:"PostgresSQL mySQL MongoDB"}))}}]),a}(r.a.Component),g=a(26),k=(a(75),a(55)),y=a(37),S=(a(76),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(E.a.Header,null,"Github"),r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,null,this.props.user),r.a.createElement(E.a.Img,{variant:"left",className:"profile",src:this.props.avatar}),r.a.createElement(E.a.Text,{className:"profile"},this.props.repos),r.a.createElement(y.a,{variant:"primary",className:"button1"},"Go somewhere")))}}]),a}(r.a.Component)),x=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(k.a,null,r.a.createElement(k.a.Item,null,r.a.createElement(S,{user:this.props.user,repos:this.props.repos,avatar:this.props.avatar})))}}]),a}(r.a.Component);a(58);var C=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)(""),o=Object(g.a)(c,2),l=o[0],i=o[1],u=Object(n.useState)(""),s=Object(g.a)(u,2),m=(s[0],s[1]),p=Object(n.useState)(""),b=Object(g.a)(p,2),h=(b[0],b[1]),j=Object(n.useState)(""),f=Object(g.a)(j,2),O=f[0],E=f[1],v=Object(n.useState)(""),k=Object(g.a)(v,2),y=k[0],S=k[1],C=Object(n.useState)(""),L=Object(g.a)(C,2),N=(L[0],L[1],Object(n.useState)(null)),B=Object(g.a)(N,2);B[0],B[1],Object(n.useEffect)((function(){fetch("https://api.github.com/users/robertludwick").then((function(e){return e.json()})).then((function(e){console.log(e),J(e)}))}),[]);var J=function(e){var t=e.name,n=e.login,r=e.followers,c=e.following,o=e.public_repos,l=e.avatar_url;a(t),i(n),m(r),h(c),E(o),S(l)};return r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null),r.a.createElement(x,{user:l,repos:O,avatar:y}),r.a.createElement(w,null))};o.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.e0b4f137.chunk.js.map