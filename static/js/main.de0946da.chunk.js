(this["webpackJsonpmyy-app"]=this["webpackJsonpmyy-app"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Goku Super Saiyan","image":"https://liquipedia.net/commons/images/a/a5/Son-goku-super-saiyan.jpg","count":0},{"id":2,"name":"Vegeta","image":"https://www.screenja.com/static/img/thumbs/majin-vegeta-normal-636.png","count":0},{"id":3,"name":"Gohan","image":"https://i.pinimg.com/originals/e7/73/87/e773878ef993bd497330ac4f0f6d38a3.jpg","count":0},{"id":4,"name":"Trunks","image":"https://dbz-shop.com/wp-content/uploads/2019/07/400px-Ftrunks2.jpg","count":0},{"id":5,"name":"piccolo","image":"https://cdn.shopify.com/s/files/1/0039/8668/6063/products/blouson-dbz-piccolo-4214559211631_2048x.gif?v=1561502258","count":0},{"id":6,"name":"Tien","image":"https://pbs.twimg.com/profile_images/827770072827584513/PQlqD4JJ_400x400.jpg","count":0},{"id":7,"name":"Master Roshi","image":"https://imgix.ranker.com/user_node_img/50088/1001748303/original/the-turtle-hermit-way-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces","count":0},{"id":8,"name":"Android 17 & 18","image":"https://fsb.zobj.net/crop.php?r=vrOjLOa201G_b8az_pRmwyw9s3ltBy0Kk3-HGWb901O5g3Z0EEbNd-R6O5IGsDpKSihQybObDVN1qXiSuSCthf3lA4l9NP7la9jB8xNZjBp5rrZ3dUu-y34paBfjO_5c0bIsZzHIIcTCw5u6","count":0},{"id":9,"name":"Bulma","image":"https://vignette.wikia.nocookie.net/dragonball/images/e/eb/Bulma_-_Blood_Rubies_-_000.png/revision/latest?cb=20191109020452","count":0},{"id":10,"name":"Chi Chi","image":"https://vignette.wikia.nocookie.net/dragonball/images/5/5c/ChiChiEp109.png/revision/latest/scale-to-width-down/340?cb=20110901221756","count":0},{"id":11,"name":"Whis","image":"https://66.media.tumblr.com/d61544071e1b7465707f6e7081825798/tumblr_oipi4iPajS1r2c5f9o1_500.gifv","count":0},{"id":12,"name":"Frieza","image":"https://vignette2.wikia.nocookie.net/dragonball/images/1/1b/Golden_Frieza_full.png/revision/latest?cb=20170403224005","count":0}]')},,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(3),o=n.n(c),s=n(4),r=n(5),m=n(7),u=n(6),l=n(8),p=(n(14),function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.clickCount(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))}),g=(n(15),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),h=(n(16),function(e){return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"title"},e.children),i.a.createElement("div",{className:"scores"},"Score: ",e.score," Highscore: ",e.highscore))}),d=n(1),f=(n(17),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={cards:d,score:0,highscore:0},n.gameOver=function(){return n.state.score>n.state.highscore&&n.setState({highscore:n.state.score},(function(){console.log(this.state.highscore)})),n.state.cards.forEach((function(e){e.count=0})),alert("Game Over :( \nscore: ".concat(n.state.score)),n.setState({score:0}),!0},n.clickCount=function(e){n.state.cards.find((function(t,a){if(t.id===e){if(0===d[a].count)return d[a].count=d[a].count+1,n.setState({score:n.state.score+1},(function(){console.log(this.state.score)})),n.state.cards.sort((function(){return Math.random()-.5})),!0;n.gameOver()}}))},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(g,null,i.a.createElement(h,{score:this.state.score,highscore:this.state.highscore},"Clicky Game"),this.state.cards.map((function(t){return i.a.createElement(p,{clickCount:e.clickCount,id:t.id,key:t.id,image:t.image})})))}}]),t}(a.Component));n(18);o.a.render(i.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.de0946da.chunk.js.map