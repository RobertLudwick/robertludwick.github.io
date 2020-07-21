(this["webpackJsonprobertludwick.github.io"]=this["webpackJsonprobertludwick.github.io"]||[]).push([[0],{57:function(e,t,a){},63:function(e,t,a){e.exports=a(76)},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l);a(57),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(12),i=a(13),u=a(16),s=a(15),m=a(33),d=a(32),b=a(43),h=(r.a.Component,a(102)),p=a(99),E=a(100),j=a(101),O=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{position:"static"},r.a.createElement(p.a,null,r.a.createElement(E.a,{variant:"h6"},"Robert Ludwick"),r.a.createElement(j.a,{color:"inherit",href:"https://drive.google.com/uc?export=download&id=18J0sZfvwXfM5uwHfaOoootrs-mYJP-6v"},"Resume"),r.a.createElement(j.a,{color:"inherit"},"Projects"),r.a.createElement(j.a,{color:"inherit",href:"https://github.com/RobertLudwick"},"Github"),r.a.createElement(j.a,{color:"inherit",href:"https://www.linkedin.com/in/robert-ludwick-473437151/"},"Likedin")))}}]),a}(r.a.Component),f=a(8),v=(r.a.Component,function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"distance"},r.a.createElement(f.a,{style:{width:"18rem"}},r.a.createElement(f.a.Img,{variant:"top",src:"holder.js/100px180"}),r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,this.props.title),r.a.createElement(f.a.Text,null,this.props.text))))}}]),a}(r.a.Component)),g=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"line"},r.a.createElement(v,{title:"Front end",text:"HTML5 CSS3 JavaScript React"}),r.a.createElement(v,{title:"Server",text:"NodeJS Flask Django"}),r.a.createElement(v,{title:"Database",text:"PostgresSQL mySQL MongoDB"}))}}]),a}(r.a.Component),w=a(26),k=(a(75),a(38)),x=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{className:"text-center"},r.a.createElement(f.a.Header,null,"Github"),r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,this.props.user),r.a.createElement(f.a.Text,null,"With supporting text below as a natural lead-in to additional content."),r.a.createElement(k.a,{variant:"primary"},"Go somewhere")),r.a.createElement(f.a.Footer,{className:"text-muted"},"2 days ago"))}}]),a}(r.a.Component),y=a(30),S=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(y.a,null,r.a.createElement(y.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"holder.js/800x400?text=First slide&bg=373940",alt:"First slide"}),r.a.createElement(y.a.Caption,null,r.a.createElement("h3",null,"First slide label"),r.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),r.a.createElement(y.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"holder.js/800x400?text=Second slide&bg=282c34",alt:"Third slide"}),r.a.createElement(y.a.Caption,null,r.a.createElement("h3",null,"Second slide label"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),r.a.createElement(y.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"holder.js/800x400?text=Third slide&bg=20232a",alt:"Third slide"}),r.a.createElement(y.a.Caption,null,r.a.createElement("h3",null,"Third slide label"),r.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."))))}}]),a}(r.a.Component);a(58);var C=function(){var e=Object(n.useState)(""),t=Object(w.a)(e,2),a=(t[0],t[1],Object(n.useState)("")),l=Object(w.a)(a,2),c=l[0],o=(l[1],Object(n.useState)("")),i=Object(w.a)(o,2),u=(i[0],i[1],Object(n.useState)("")),s=Object(w.a)(u,2),m=(s[0],s[1],Object(n.useState)("")),d=Object(w.a)(m,2),b=(d[0],d[1],Object(n.useState)("")),h=Object(w.a)(b,2),p=(h[0],h[1],Object(n.useState)("")),E=Object(w.a)(p,2),j=(E[0],E[1],Object(n.useState)(null)),f=Object(w.a)(j,2);return f[0],f[1],Object(n.useEffect)((function(){fetch("https://api.github.com/users/robertludwick").then((function(e){return e.json()})).then((function(e){console.log(e)}))}),[]),r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null),r.a.createElement(x,{user:c}),r.a.createElement(S,null),r.a.createElement(g,null))};c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.56d3297d.chunk.js.map