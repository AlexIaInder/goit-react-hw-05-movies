"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{1687:function(e,t,n){n.d(t,{Hq:function(){return l},Hx:function(){return m},Tg:function(){return f},Y5:function(){return p},xc:function(){return h}});var r=n(5861),a=n(7757),o=n.n(a),i=n(4569),c=n.n(i),u=n(7105),s=n(3740);c().defaults.baseURL="https://api.themoviedb.org/3",c().defaults.params={api_key:"b6220ba3d0f86ae786d5e317fe9a944e",include_adult:!1};var d="https://image.tmdb.org/t/p/w500",f=function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c().get("/trending/all/day?").then((function(e){return e.data.results.map((function(e){var t=e.id,n=e.title,r=e.poster_path;return{id:t,title:n||"No Name",poster:r?d+r:s}}))})).catch((function(e){console.log(e.message)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c().get("/search/movie?query=".concat(t)).then((function(e){var t,n=e.data.results;return null!==(t=null===n||void 0===n?void 0:n.map((function(e){var t=e.id,n=e.title,r=e.poster_path;return{id:t,title:n,poster:r?d+r:s}})))&&void 0!==t?t:[]})).catch((function(e){console.log(e.message)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){return c().get("/movie/".concat(e,"?")).then((function(e){var t=e.data,n=t.id,r=t.poster_path,a=t.title,o=t.release_date,i=t.vote_average,c=t.overview,u=t.genres;return{id:n,poster:r?d+r:s,title:a,releaseYear:new Date(o).getFullYear(),userScore:Math.round(10*i),overview:c,genres:u}})).catch((function(e){console.log(e.message)}))},h=function(e){return c().get("/movie/".concat(e,"/credits?")).then((function(e){return e.data.cast.map((function(e){var t=e.id,n=e.name,r=e.character,a=e.profile_path;return{id:t,name:n,character:r,photo:a?d+a:u}}))})).catch((function(e){console.log(e.message)}))},m=function(e){return c().get("/movie/".concat(e,"/reviews?")).then((function(e){return e.data.results.map((function(e){return{id:e.id,author:e.author,content:e.content}}))})).catch((function(e){console.log(e.message)}))}},9779:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r,a=n(885),o=n(1687),i=n(470),c=n(2791),u=n(168),s=n(6444).ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  padding: 30px;\n  background-color: rgb(240, 240, 240);\n  margin: 20px 30px 30px;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 4px;\n"]))),d=n(184),f=function(){var e=(0,i.UO)("movieId").movieId,t=(0,c.useState)([]),n=(0,a.Z)(t,2),r=n[0],u=n[1];return(0,c.useEffect)((function(){(0,o.Hx)(e).then(u)}),[e]),(0,d.jsx)(s,{children:r.length>0?(0,d.jsx)("ul",{children:r.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,d.jsxs)("li",{children:[(0,d.jsx)("h3",{children:n}),(0,d.jsx)("p",{children:r})]},t)}))}):(0,d.jsx)("p",{children:"We don`t have any reviews for this movie"})})}},7105:function(e,t,n){e.exports=n.p+"static/media/incognito-mode.5e64d02c8e7f95a9c741.jpg"},3740:function(e,t,n){e.exports=n.p+"static/media/movie.e8903061de5844df1f6e.jpg"}}]);
//# sourceMappingURL=779.de162645.chunk.js.map