(this["webpackJsonpreact-d3-sankey"]=this["webpackJsonpreact-d3-sankey"]||[]).push([[0],{83:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var c=n(35),a=(n(51),n(24)),r=n(5),o=n(9),s=n.n(o),i=n(2),l=(n(84),n(36)),u=n.n(l),d=n(37),b=n.n(d),f=n(90),j=n(1);function h(e){return[e.source.x1,e.y0]}function v(e){return[e.target.x0,e.y1]}function O(e){var t=e.link,n=e.color,c=e.setHoveredLinkValue,a=t.width,r=Object(f.a)().source(h).target(v)(t);return Object(j.jsx)("path",{d:r,style:{fill:"none",stroke:n,strokeWidth:a&&!isNaN(a)?a:0},onMouseEnter:function(){return c(t.value)},onMouseLeave:function(){return c("")},children:Object(j.jsxs)("title",{children:[t.source.name," -> ",t.target.name,": ",t.value]})})}function p(e){var t=e.node,n=t.x0,c=t.x1,a=t.y0,r=t.y1,o=t.value,s=e.color,i=e.name,l=e.width,u=e.height,d=e.setHoveredNodeValue,b=r-a,f=l||c-n,h=u||b,v=n,O=u?a+b/2-u/2:a,p=n,x=u?O+u/2+6:a+h/2+6;return Object(j.jsxs)("g",{style:{pointerEvents:"all"},onMouseEnter:function(){return d(o)},onMouseLeave:function(){return d("")},children:[Object(j.jsx)("rect",{x:v,y:O,width:f,height:h,fill:s,children:Object(j.jsx)("title",{children:i})}),Object(j.jsx)("text",{x:p+5,y:x,width:f,fill:"black",style:{userSelect:"none",overflowX:"hidden"},children:i})]})}var x=n(39),m=n(91);function g(e){var t=e.data,n=e.nodeWidth,c=e.nodePadding,a=e.children,o=Object(m.a)(),s=o.width,l=o.height,u=s-100,d=l-100,b=Object(i.useState)({nodes:[],links:[]}),f=Object(r.a)(b,2),h=f[0],v=f[1];return Object(i.useEffect)((function(){v(Object(x.a)().nodeWidth(n).nodePadding(c).extent([[0,0],[u,d-50]])(t))}),[c,n,u,d,t]),a?Object(j.jsx)("svg",{width:u,height:d,children:a({graph:h})}):Object(j.jsx)("g",{})}var k,y=n(17),D="0x0000000000000000000000000000000000000000",w=[{name:"Mint",color:"purple"},{name:"Polkastarter",color:"blue"},{name:"PancakeSwap",color:"red"},{name:"Jump 1",color:"yellow"},{name:"HODL",color:"green"}],E=(k={},Object(y.a)(k,"0x72571d815dd31fbde52be0b9d7ffc8344aede616",0),Object(y.a)(k,"0xee62650fa45ac0deb1b24ec19f983a8f85b727ab",1),Object(y.a)(k,"0xd6d206f59cc5a3bfa4cc10bc8ba140ac37ad1c89",2),k);n(83);function S(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],o=Object(i.useState)(""),l=Object(r.a)(o,2),d=l[0],f=l[1],h=Object(i.useState)(""),v=Object(r.a)(h,2),x=v[0],m=v[1];Object(i.useEffect)(Object(a.a)(s.a.mark((function e(){var t,n,a,o,i,l,d,b;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./quidd-bsc-transfers-0x7961Ade0a767c0E5B67Dd1a1F78ba44F727642Ed.csv");case 2:return n=e.sent,e.next=5,n.text();case 5:a=e.sent,(o=null===(t=u.a.parse(a))||void 0===t?void 0:t.data).shift(),i={},l=0,o.forEach((function(e,t){var n=Object(r.a)(e,8),c=(n[0],n[1],n[2],n[3],n[4]),a=n[5],o=n[6],s=(n[7],void 0===E[c]?3:E[c]),u=void 0===E[a]?3:E[a];if(s!==u){var d=parseFloat(o.replace(/,/g,""));if(c!==D)if(a!==D){var b="".concat(s).concat(u);if(s<u){var f=i[b]||0;i[b]=f+d}else{b="".concat(u).concat(s);var j=i[b]||0;i[b]=j-d}}else l-=d;else l+=d}})),(d={})[0]=l,b=Object.keys(i).filter((function(e){return 0!==i[e]})).map((function(e){var t=e[0],n=e[1],c=i[e];return c<0&&(t=e[1],n=e[0],c=-i[e]),d[t]=d[t]?d[t]-c:-c,d[n]=d[n]?d[n]+c:+c,{source:Number(t),target:Number(n),value:c}})),Object.keys(d).filter((function(e){return d[e]>0})).map((function(e){var t=e,n=d[e],c={source:Number(t),target:Number(4),value:n};0!=t&&3!=t||b.push(c)})),c(b);case 16:case"end":return e.stop()}}),e)}))),[]);var k=Object(i.useState)("--"),y=Object(r.a)(k,2),S=y[0],N=y[1];return Object(i.useEffect)((function(){var e=null;new Promise(function(){var t=Object(a.a)(s.a.mark((function t(n,c){var a,r,o,i,l,u,d;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=QUIDD&convert=USD",{headers:{"X-CMC_PRO_API_KEY":"8983c5f8-9c66-49ca-94ef-f8a9fee70f5c"}});case 3:e=t.sent,t.next=11;break;case 6:t.prev=6,t.t0=t.catch(0),e=null,console.log(t.t0),c(t.t0);case 11:e&&(u=e.data,d=(null===u||void 0===u||null===(a=u.data)||void 0===a||null===(r=a.QUIDD)||void 0===r||null===(o=r.quote)||void 0===o||null===(i=o.USD)||void 0===i||null===(l=i.price)||void 0===l?void 0:l.toFixed(8))||"--",N(d),n(u));case 12:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e,n){return t.apply(this,arguments)}}())}),[]),0===n.length||0===w.length?Object(j.jsx)("div",{children:"loading"}):Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)("div",{className:"mb-8 text-center",children:[Object(j.jsx)("h3",{children:"Summary"}),Object(j.jsxs)("p",{children:["Total Value QUIDD - This displays the total lifetime sum of transfer value in QUIDD tokens",Object(j.jsx)("br",{}),"Total number of transactions - This displays the total number of transactions being displayed."]}),Object(j.jsx)("p",{children:d&&"QUIDD tokens transferred: ".concat(d)}),Object(j.jsx)("p",{children:x&&"QUIDD tokens in USD: ".concat(+x*S)})]}),Object(j.jsx)(g,{data:{nodes:w,links:n},nodeWidth:100,nodePadding:40,children:function(e){var t=e.graph;return Object(j.jsxs)("g",{children:[t&&t.links.map((function(e,t){return Object(j.jsx)(O,{link:e,color:"rgba(0, 0, 0, 0.2)",setHoveredLinkValue:f},"sankey-link-".concat(t))})),t&&t.nodes.map((function(e,t){return Object(j.jsx)(p,{node:e,color:e.color,name:e.name,setHoveredNodeValue:m},"sankey-node-".concat(t))}))]})}})]})}var N=document.getElementById("root");Object(c.render)(Object(j.jsx)(S,{}),N)}},[[85,1,2]]]);
//# sourceMappingURL=main.c9512e80.chunk.js.map