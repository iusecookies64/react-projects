(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(3),a=n.n(r),i=(n(12),n(4)),o=n(5),h=n(7),l=n(6),d=(n(13),n(14),n(15),n(0)),j=function(e){var t=e.monster,n=e.searchField;if(""===n)return Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180")}),Object(d.jsx)("h1",{children:t.name}),Object(d.jsx)("p",{children:t.email})]},t.id);var s=t.name.toLowerCase().indexOf(n),c=t.name.slice(0,s),r=t.name.slice(s,s+n.length),a=t.name.slice(s+n.length);return Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180")}),Object(d.jsxs)("h1",{children:[Object(d.jsx)("span",{children:c}),Object(d.jsx)("span",{className:"highlight",children:r}),Object(d.jsx)("span",{children:a})]}),Object(d.jsx)("p",{children:t.email})]},t.id)},u=function(e){return Object(d.jsx)("div",{className:"card-list",children:e.monsters.map((function(t){return Object(d.jsx)(j,{monster:t,searchField:e.searchField},t.id)}))})},m=(n(17),n(1),function(e){return Object(d.jsx)("input",{className:"search-box",type:"search",placeholder:e.placeholder,onChange:e.handleChange})}),b=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:"",value:0},e}return Object(o.a)(n,[{key:"render",value:function(){this.thisValue(this.handleChange);var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Monsters PhoneBook"}),Object(d.jsx)(m,{placeholder:"Search Monster",handleChange:this.handleChange}),Object(d.jsx)(u,{monsters:s,searchField:n.toLowerCase()})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}}]),n}(c.a.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),x()}],[[18,1,2]]]);
//# sourceMappingURL=main.1f36ef4d.chunk.js.map