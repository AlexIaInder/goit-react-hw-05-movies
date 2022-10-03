"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[980],{1687:function(n,e,t){t.d(e,{Hq:function(){return l},Hx:function(){return h},Tg:function(){return d},Y5:function(){return f},xc:function(){return x}});var r=t(5861),o=t(7757),i=t.n(o),a=t(4569),c=t.n(a),u=t(7105),p=t(3740);c().defaults.baseURL="https://api.themoviedb.org/3",c().defaults.params={api_key:"b6220ba3d0f86ae786d5e317fe9a944e",include_adult:!1};var s="https://image.tmdb.org/t/p/w500",d=function(){var n=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c().get("/trending/all/day?").then((function(n){return n.data.results.map((function(n){var e=n.id,t=n.title,r=n.poster_path;return{id:e,title:t||"No Name",poster:r?s+r:p}}))})).catch((function(n){console.log(n.message)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c().get("/search/movie?query=".concat(e)).then((function(n){var e,t=n.data.results;return null!==(e=null===t||void 0===t?void 0:t.map((function(n){var e=n.id,t=n.title,r=n.poster_path;return{id:e,title:t,poster:r?s+r:p}})))&&void 0!==e?e:[]})).catch((function(n){console.log(n.message)})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(n){return c().get("/movie/".concat(n,"?")).then((function(n){var e=n.data,t=e.id,r=e.poster_path,o=e.title,i=e.release_date,a=e.vote_average,c=e.overview,u=e.genres;return{id:t,poster:r?s+r:p,title:o,releaseYear:new Date(i).getFullYear(),userScore:Math.round(10*a),overview:c,genres:u}})).catch((function(n){console.log(n.message)}))},x=function(n){return c().get("/movie/".concat(n,"/credits?")).then((function(n){return n.data.cast.map((function(n){var e=n.id,t=n.name,r=n.character,o=n.profile_path;return{id:e,name:t,character:r,photo:o?s+o:u}}))})).catch((function(n){console.log(n.message)}))},h=function(n){return c().get("/movie/".concat(n,"/reviews?")).then((function(n){return n.data.results.map((function(n){return{id:n.id,author:n.author,content:n.content}}))})).catch((function(n){console.log(n.message)}))}},4980:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r,o,i,a,c,u,p,s,d,l=t(5861),f=t(885),x=t(7757),h=t.n(x),g=t(2791),m=t(6731),b=t(470),v=t(1687),w=t(168),y=t(6444),Z=y.ZP.div(r||(r=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),k=y.ZP.form(o||(o=(0,w.Z)(["\n  margin-top: 5px;\n  max-width: 600px;\n  display: flex;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n"]))),j=y.ZP.input(i||(i=(0,w.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    color: #3f51b550;\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),_=y.ZP.button(a||(a=(0,w.Z)(["\n  display: inline-block;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  color: #000;\n  &:hover {\n    opacity: 1;\n  }\n"]))),P=y.ZP.ul(c||(c=(0,w.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100%;\n  margin-top: 0;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  padding: 0;\n"]))),q=y.ZP.li(u||(u=(0,w.Z)(["\n  background: rgb(255, 255, 255);\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  width: 100%;\n  max-width: 200px;\n  margin: 10px;\n  border-radius: 5px;\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  transition-duration: 300ms;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.03);\n    box-shadow: rgb(0 0 0 / 8%) 0px 10px 25px;\n  }\n"]))),z=(0,y.ZP)(m.rU)(p||(p=(0,w.Z)(["\n  text-decoration: none;\n"]))),H=y.ZP.img(s||(s=(0,w.Z)(["\n  padding: 0px;\n  margin: 0px;\n  height: 260px;\n  width: 100%;\n  display: block;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n"]))),S=y.ZP.div(d||(d=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 5px;\n  margin: 0px;\n  font-size: 10px;\n  color: #000;\n"]))),C=t(184),Y=function(){var n=(0,g.useState)(""),e=(0,f.Z)(n,2),t=e[0],r=e[1],o=(0,g.useState)([]),i=(0,f.Z)(o,2),a=i[0],c=i[1],u=(0,m.lr)(""),p=(0,f.Z)(u,2),s=p[0],d=p[1],x=(0,b.TH)(),w=s.get("query");(0,g.useEffect)((function(){w&&(0,v.Hq)(w).then(c)}),[w]);var y=function(){var n=(0,l.Z)(h().mark((function n(e){var o;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t.trim()){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,(0,v.Hq)(t);case 5:o=n.sent,c(o),d({query:t}),r("");case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Z,{children:(0,C.jsxs)(k,{onSubmit:y,children:[(0,C.jsx)(j,{type:"text",value:t,onChange:function(n){r(n.target.value)}}),(0,C.jsx)(_,{type:"submit",children:"search"})]})}),a.length>0&&(0,C.jsx)(P,{children:a.map((function(n){var e=n.id,t=n.title,r=n.poster;return(0,C.jsx)(q,{children:(0,C.jsxs)(z,{to:"/movies/".concat(e),state:{from:x},children:[(0,C.jsx)(H,{src:r,alt:t}),(0,C.jsx)(S,{children:(0,C.jsx)("h3",{children:t})})]})},e)}))})]})}},7105:function(n,e,t){n.exports=t.p+"static/media/incognito-mode.5e64d02c8e7f95a9c741.jpg"},3740:function(n,e,t){n.exports=t.p+"static/media/movie.e8903061de5844df1f6e.jpg"}}]);
//# sourceMappingURL=980.f7155194.chunk.js.map