(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{wj8o:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stocks",function(){return n("y+LR")}])},"y+LR":function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),o=n("HaE+"),c=(n("rePB"),n("ODXe"),n("q1tI")),u=n.n(c),s=n("vcXL"),p=n.n(s),i=n("5Yp1"),l=n("y5Z8"),g=n("R8ch"),f=n("RBgG"),w=(n("obyI"),u.a.createElement);u.a.createContext();var d=function(e){var t=e.children,n=e.props;return Object(l.b)().getNews(n.data),w(u.a.Fragment,null,t)},b=function(e){console.log(typeof e.currentPage);var t=e.currentPage||1;return w(l.a,null,w(d,{props:e},w(i.a,null,w(g.a,null),w(f.a,{currentPage:t}))))};b.getInitialProps=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,o,c,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"stocks",n=+t.query.page||1,e.next=4,p()("http://newsapi.org/v2/everything?apiKey=baf3b32ef95d4cd0803dcc5d7a5bf9b1&q=".concat("stocks","&page=").concat(n,"&pageSize=10&from=2020-06-15&sortBy=publishedAt&language=en"));case 4:return a=e.sent,e.next=7,a.json();case 7:return o=e.sent,c=o.totalResults,u=Math.ceil(o.totalResults/10),e.abrupt("return",{totalCount:c,pageCount:u,currentPage:+t.query.page,perPage:10,data:o.articles});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.default=b}},[["wj8o",0,2,4,1,3]]]);