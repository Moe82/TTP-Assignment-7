(this.webpackJsonpassignment07=this.webpackJsonpassignment07||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),s=n.n(a),c=n(12),i=n.n(c),u=(n(38),n(3)),o=n(4),l=n(9),h=n(8),j=(n(39),n(13)),p=n(7),b=n(11),g=n(10),d=n.n(g),O=n(15),f=n(14),v=n(6),x=n.n(v),m="GOT_SEARCH_RESEULTS",y="GOT_TRENDING_GIFS",S={searchResults:[],trendingGifs:[],userHasSearched:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(b.a)(Object(b.a)({},e),{},{trendingGifs:t.payload});case m:return Object(b.a)(Object(b.a)({},e),{},{searchResults:t.payload,userHasSearched:!0});default:return e}},w=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).handleSubmit=function(e){console.log(r.state.rating),e.preventDefault(),r.props.getSearchResults(r.state.userSearchQuery,r.state.rating,r.state.language)},r.handleChange=function(e){r.setState(Object(j.a)({},e.target.name,e.target.value))},r.state={userSearchQuery:"",rating:"",language:""},r}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("form",{onSubmit:this.handleSubmit,class:"user-input",children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("br",{}),"Search: ",Object(r.jsx)("input",{name:"userSearchQuery",type:"text",value:this.state.userSearchQuery,onChange:this.handleChange})]}),"  ",Object(r.jsx)("br",{}),"Rating: ",Object(r.jsxs)("select",{name:"rating",value:this.state.rating,onChange:this.handleChange,children:[Object(r.jsx)("option",{value:"g",children:"g"}),Object(r.jsx)("option",{value:"pg",children:"pg"}),Object(r.jsx)("option",{value:"pg-13",children:"pg-13"}),Object(r.jsx)("option",{value:"r",children:"r"})]})," ",Object(r.jsx)("br",{}),"Language: ",Object(r.jsxs)("select",{name:"language",value:this.state.language,onChange:this.handleChange,children:[Object(r.jsx)("option",{value:"en",children:"English"}),Object(r.jsx)("option",{value:"ar",children:"Arabic"}),Object(r.jsx)("option",{value:"ru",children:"Russian"}),Object(r.jsx)("option",{value:"hi",children:"Hindi"}),Object(r.jsx)("option",{value:"th",children:"Thai"}),Object(r.jsx)("option",{value:"pt",children:"Portuguese"})]})," ",Object(r.jsx)("br",{})," ",Object(r.jsx)("br",{}),Object(r.jsx)("input",{class:"button",type:"submit",value:"Submit"})]})}}]),n}(s.a.Component),k=Object(p.b)((function(e){return{userSearchQuery:e.userSearchQuery}}),(function(e){return{getSearchResults:function(t,n,r){return e(function(e,t,n){return function(){var r=Object(f.a)(d.a.mark((function r(a){var s,c,i,u,o,l;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,s="https://api.giphy.com/v1/gifs/search?api_key=pvq2g64V6BqpkDUvs4eLGr9NO1wCc8Dw&limit=25&q="+e+"&rating="+t+"&lang"+n,console.log(s),r.next=5,x.a.get(s);case 5:c=r.sent,i=[],u=Object(O.a)(c.data.data);try{for(u.s();!(o=u.n()).done;)l=o.value,i.push(l.images.downsized.url)}catch(h){u.e(h)}finally{u.f()}console.log(c),a({type:m,payload:i}),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),console.error(r.t0);case 16:case"end":return r.stop()}}),r,null,[[0,13]])})));return function(e){return r.apply(this,arguments)}}()}(t,n,r))}}}))(w),G=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark((function e(){var t,n,r,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://api.giphy.com/v1/gifs/trending?api_key=pvq2g64V6BqpkDUvs4eLGr9NO1wCc8Dw&limit=25&rating=g");case 3:t=e.sent,n=[],r=Object(O.a)(t.data.data);try{for(r.s();!(a=r.n()).done;)s=a.value,n.push(s.images.downsized.url)}catch(c){r.e(c)}finally{r.f()}this.props.getTrendingGifs(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return!1===this.props.userHasSearched?Object(r.jsx)("div",{children:this.props.trendingGifs.map((function(e){return Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("img",{src:e})," ",Object(r.jsx)("br",{})," "]})}))}):Object(r.jsx)("div",{children:this.props.searchResults.map((function(e){return Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("img",{src:e})," ",Object(r.jsx)("br",{})," "]})}))})}}]),n}(a.Component),R=Object(p.b)((function(e){return{trendingGifs:e.trendingGifs,userHasSearched:e.userHasSearched,searchResults:e.searchResults}}),(function(e){return{getTrendingGifs:function(t){return e(function(e){return{type:y,payload:e}}(t))}}}))(G),T=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(k,{})," ",Object(r.jsx)("br",{}),Object(r.jsx)(R,{})]})}}]),n}(s.a.Component),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},E=n(5),H=n(30),L=n(31),Q=n.n(L),_=n(32),q=Object(E.createStore)(C,Object(H.composeWithDevTools)(Object(E.applyMiddleware)(_.a.withExtraArgument({axios:x.a}),Q.a)));i.a.render(Object(r.jsx)(p.a,{store:q,children:Object(r.jsx)(T,{})}),document.getElementById("root")),D()}},[[64,1,2]]]);
//# sourceMappingURL=main.8637f978.chunk.js.map