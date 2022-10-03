"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[251],{1687:function(n,e,t){t.d(e,{Hq:function(){return p},Hx:function(){return x},Tg:function(){return d},Y5:function(){return f},xc:function(){return h}});var r=t(5861),o=t(7757),i=t.n(o),a=t(4569),c=t.n(a),s=t(7105),u=t(3740);c().defaults.baseURL="https://api.themoviedb.org/3",c().defaults.params={api_key:"b6220ba3d0f86ae786d5e317fe9a944e",include_adult:!1};var l="https://image.tmdb.org/t/p/w500",d=function(){var n=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c().get("/trending/all/day?").then((function(n){return n.data.results.map((function(n){var e=n.id,t=n.title,r=n.poster_path;return{id:e,title:t||"No Name",poster:r?l+r:u}}))})).catch((function(n){console.log(n.message)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c().get("/search/movie?query=".concat(e)).then((function(n){var e,t=n.data.results;return null!==(e=null===t||void 0===t?void 0:t.map((function(n){var e=n.id,t=n.title,r=n.poster_path;return{id:e,title:t,poster:r?l+r:u}})))&&void 0!==e?e:[]})).catch((function(n){console.log(n.message)})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(n){return c().get("/movie/".concat(n,"?")).then((function(n){var e=n.data,t=e.id,r=e.poster_path,o=e.title,i=e.release_date,a=e.vote_average,c=e.overview,s=e.genres;return{id:t,poster:r?l+r:u,title:o,releaseYear:new Date(i).getFullYear(),userScore:Math.round(10*a),overview:c,genres:s}})).catch((function(n){console.log(n.message)}))},h=function(n){return c().get("/movie/".concat(n,"/credits?")).then((function(n){return n.data.cast.map((function(n){var e=n.id,t=n.name,r=n.character,o=n.profile_path;return{id:e,name:t,character:r,photo:o?l+o:s}}))})).catch((function(n){console.log(n.message)}))},x=function(n){return c().get("/movie/".concat(n,"/reviews?")).then((function(n){return n.data.results.map((function(n){return{id:n.id,author:n.author,content:n.content}}))})).catch((function(n){console.log(n.message)}))}},251:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r,o,i,a,c,s,u,l,d=t(885),p=t(2791),f=t(470),h=t(1687),x=t(168),v=t(6444),m=t(6731),g=v.ZP.button(r||(r=(0,x.Z)(["\n  border: none;\n  background-color: transparent;\n  margin: 20px 0 0 35px;\n  padding: 0;\n  font-weight: 700;\n  cursor: pointer;\n"]))),j=v.ZP.div(o||(o=(0,x.Z)(["\n  display: flex;\n  padding: 30px;\n  background-color: rgb(240, 240, 240);\n  margin: 20px 30px 30px;\n  border-radius: 4px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n"]))),b=v.ZP.img(i||(i=(0,x.Z)(["\n  width: 300px;\n"]))),w=v.ZP.div(a||(a=(0,x.Z)(["\n  padding-left: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]))),Z=v.ZP.h2(c||(c=(0,x.Z)(["\n  margin-left: 0;\n"]))),k=v.ZP.h3(s||(s=(0,x.Z)(["\n  margin-left: 35px;\n  margin-bottom: 0;\n"]))),_=v.ZP.ul(u||(u=(0,x.Z)(["\n  text-decoration: none;\n  margin-left: 0;\n  margin-top: 0;\n"]))),y=(0,v.ZP)(m.OL)(l||(l=(0,x.Z)(["\n  text-decoration: none;\n  color: black;\n  text-decoration: none;\n  font-weight: 600;\n  &.active {\n    color: #3f3f3f;\n    font-weight: 700;\n    transform: scale(1.1);\n  }\n"]))),P=t(184),Y=function(){var n,e,t,r,o=(0,p.useState)(null),i=(0,d.Z)(o,2),a=i[0],c=i[1],s=(0,f.UO)().movieId,u=(0,f.TH)(),l=(0,f.s0)(),x=null!==(n=null===(e=u.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies",v=null!==a&&void 0!==a?a:{},m=v.poster,Y=v.title,C=v.releaseYear,S=v.userScore,H=v.overview,O=v.genres;(0,p.useEffect)((function(){(0,h.Y5)(s).then(c)}),[s]);return(0,P.jsxs)("div",{children:[(0,P.jsx)(g,{type:"button",onClick:function(){l(x)},children:"Back to movies"}),a&&(0,P.jsxs)("div",{children:[(0,P.jsxs)(j,{children:[(0,P.jsx)(b,{src:m,alt:Y}),(0,P.jsxs)(w,{children:[(0,P.jsxs)(Z,{children:[Y," (",C,")"]}),(0,P.jsxs)("p",{children:["User Score: ",S,"%"]}),(0,P.jsx)("h3",{children:"Overview"}),(0,P.jsx)("p",{children:H}),(0,P.jsx)("h3",{children:"Genres"}),(0,P.jsx)("p",{children:O.map((function(n){return n.name})).join(" ")})]})]}),(0,P.jsx)(k,{children:"Additional information"}),(0,P.jsxs)(_,{children:[(0,P.jsx)("li",{children:(0,P.jsx)(y,{to:"cast",state:{from:null===u||void 0===u||null===(t=u.state)||void 0===t?void 0:t.from},children:"Cast"})}),(0,P.jsx)("li",{children:(0,P.jsx)(y,{to:"reviews",state:{from:null===u||void 0===u||null===(r=u.state)||void 0===r?void 0:r.from},children:"Reviews"})})]}),(0,P.jsx)(f.j3,{})]})]})}},7105:function(n,e,t){n.exports=t.p+"static/media/incognito-mode.5e64d02c8e7f95a9c741.jpg"},3740:function(n,e,t){n.exports=t.p+"static/media/movie.e8903061de5844df1f6e.jpg"}}]);
//# sourceMappingURL=251.dc58db57.chunk.js.map