(this["webpackJsonpfinancial-advisor"]=this["webpackJsonpfinancial-advisor"]||[]).push([[0],{144:function(e,t,c){},161:function(e,t,c){},162:function(e,t,c){},191:function(e,t,c){},308:function(e,t,c){},311:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(74),l=c.n(r),s=(c(161),c(30)),i=c(11),j=(c(162),c(22)),d=c(43);var o=c(8),b=(c(191),c(320)),h=c(3);var u=function(){var e=Object(i.f)(),t=Object(d.b)(),c=Object(n.useState)([]),a=Object(j.a)(c,2),r=a[0],l=a[1],s=Object(n.useState)(!0),u=Object(j.a)(s,2),O=u[0],x=u[1],m=Object(n.useState)(!1),p=Object(j.a)(m,2),f=p[0],v=p[1],g=Object(n.useState)([]),C=Object(j.a)(g,2),y=C[0],N=C[1],S=Object(n.useState)(),E=Object(j.a)(S,2),w=E[0],T=E[1];function k(){v(!f)}return Object(n.useEffect)((function(){l([[80,20,0,0,0],[70,15,15,0,0],[60,15,15,10,0],[50,20,20,10,0],[40,20,20,20,0],[35,25,5,30,5],[20,25,25,25,5],[10,20,40,20,10],[5,15,40,25,15],[0,5,25,30,40]])}),[]),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(o.Grid,{className:"display",centerAlign:!0,children:[Object(h.jsx)("h4",{className:"title",children:"Please Select A Risk Level For Your Investment Portfolio"}),Object(h.jsxs)(o.Cell,{small:10,medium:8,large:8,className:"info-container",children:[Object(h.jsx)("h5",{children:"Low"}),Object(h.jsx)("h5",{children:"High"})]}),Object(h.jsxs)(o.Cell,{small:10,medium:10,large:8,className:"buttons-container",children:[r.length>0&&r.map((function(e,c){return Object(h.jsx)(o.Button,{id:c,color:"secondary",className:"btn-risk ".concat(w===c&&"active"),isHollow:!0,onClick:function(){return function(e){var c=r[e],n=[{x:"Bonds",y:c[0]},{x:"Large Cap",y:c[1]},{x:"Mid Cap",y:c[2]},{x:"Foreign",y:c[3]},{x:"Small Cap",y:c[4]}];N(n),T(e),t({type:"NEW_RISK",payload:parseInt(e)+1}),x(!1)}(c)},children:c+1},c)})),Object(h.jsx)(o.Button,{color:"primary",id:"btn-continue",className:"btn-risk",isDisabled:O,onClick:O?null:function(){e.push("/calculator")},children:"Continue"})]}),Object(h.jsxs)(o.Cell,{small:10,medium:5,large:5,hidden:!f,children:[Object(h.jsx)(o.Button,{isExpanded:!0,color:"success",onClick:k,children:"Table View"}),y.length>0?Object(h.jsx)(b.a,{ariaDesc:"Average number of pets",ariaTitle:"Donut chart example",constrainToVisibleArea:!0,data:y,labels:function(e){var t=e.datum;return"".concat(t.x,": ").concat(t.y,"%")},subTitle:"PORTFOLIO",title:"INVESTMENT"}):Object(h.jsx)("h3",{children:"Please select a risk level"})]}),Object(h.jsxs)(o.Cell,{small:12,medium:10,large:8,hidden:f,children:[Object(h.jsx)(o.Button,{isExpanded:!0,color:"success",onClick:k,children:"Donut Chart View"}),Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Risk"}),Object(h.jsx)("th",{children:"Bonds %"}),Object(h.jsx)("th",{children:"Large Cap %"}),Object(h.jsx)("th",{children:"Mid Cap %"}),Object(h.jsx)("th",{children:"Foreign %"}),Object(h.jsx)("th",{children:"Small Cap %"})]})}),Object(h.jsx)("tbody",{children:r.length>0&&r.map((function(e,t){return Object(h.jsxs)("tr",{id:t,className:"".concat(w===t&&"active"),children:[Object(h.jsx)("td",{children:t+1}),e.map((function(e,t){return Object(h.jsx)("td",{children:e},t)}))]},t)}))})]})]})]})})};c(144);var O=function(e){var t=Object(n.useState)(Array.apply(null,Array(5)).map((function(){return"not"}))),c=Object(j.a)(t,2),r=c[0],l=c[1],s=Object(n.useState)(Array.apply(null,Array(5)).map((function(){return"not"}))),i=Object(j.a)(s,2),d=i[0],b=i[1],u=Object(n.useState)(""),O=Object(j.a)(u,2),x=O[0],m=O[1],p=["Bonds","Large Cap","Mid Cap","Foreign","Small Cap"];return Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsx)(o.Cell,{small:10,medium:8,large:8,children:Object(h.jsx)("h3",{children:"Please Enter Your Current Portfolio"})}),Object(h.jsx)(o.Cell,{small:12,medium:10,large:8,children:Object(h.jsx)("table",{children:Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Current Amount"}),Object(h.jsx)("th",{children:"Difference"}),Object(h.jsx)("th",{children:"New Amount"}),Object(h.jsx)("th",{children:"Recomended Transfers"})]})})})}),Object(h.jsxs)(o.Cell,{small:12,medium:10,large:8,children:[Object(h.jsxs)(o.Grid,{className:"display",children:[Object(h.jsx)(o.Cell,{small:4,medium:3,children:p.map((function(e,t){return Object(h.jsxs)("div",{className:"current",children:[Object(h.jsxs)("label",{children:[e," $:"]}),Object(h.jsx)("input",{className:"values",type:"number",min:0})]},t)}))}),Object(h.jsx)(o.Cell,{small:2,medium:3,children:d.map((function(e,t){return Object(h.jsx)("input",{className:void 0!==e&&e>=0?"difference":"difference-alt",type:"text",value:"not"!==e?e>=0?"+"+e:e:"",disabled:!0},t)}))}),Object(h.jsx)(o.Cell,{small:3,children:r.map((function(e,t){return Object(h.jsx)("input",{className:"new-amount",type:"text",disabled:!0,value:"not"!==e?e:""},t)}))}),Object(h.jsx)(o.Cell,{small:3,children:Object(h.jsx)("textarea",{disabled:!0,id:"recomended",name:"recomended",rows:"10",cols:"50",value:x})})]}),Object(h.jsx)(o.Button,{isExpanded:!0,color:"success",onClick:function(){var t=document.getElementsByClassName("values"),c=parseFloat(0),n=[];try{for(var a=0;a<t.length;a++){var r=parseFloat(t[a].value);if((r=Math.round(100*r)/100)<0)throw new Error("Only positive numbers >= 0");c+=r,n.push(r)}var s=function(e,t,c,n){var a=[],r=[],l=[];try{for(var s=0;s<e.length;s++){var i=c*(e[s]/100);i=Math.round(100*i)/100,r.push(i);var j=parseFloat(i-n[s]);j=Math.round(100*j)/100,a.push(j),l.push(j)}for(var d="",o=0;o<a.length;o++)if(a[o]>0)for(var b=0;b<a.length;b++)if(b!==o&&a[b]<0){var h=-1*a[b];h=Math.round(100*h)/100;var u=0;a[o]>=h?(u=a[o]-h,u=Math.round(100*u)/100,d+="Transfer ".concat(-1*a[b]," from ").concat(t[b]," to ").concat(t[o]," \n"),a[o]=u,a[b]=0):0!==a[o]&&(u=h-a[o],u=Math.round(100*u)/100,d+="Transfer ".concat(a[o]," from ").concat(t[b]," to ").concat(t[o]," \n"),a[o]=0,a[b]=-1*u)}return{difference:l,expected:r,text:d}}catch(O){alert(O.name+": "+O.message)}}(e.data,p,c,n);console.log(s),b(s.difference),l(s.expected),m(s.text)}catch(i){alert(i.name+": "+i.message)}},children:"Rebalance"})]})]})};var x=function(){var e=Object(d.c)((function(e){return e.risk})),t=Object(n.useState)([]),c=Object(j.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){r([[80,20,0,0,0],[70,15,15,0,0],[60,15,15,10,0],[50,20,20,10,0],[40,20,20,20,0],[35,25,5,30,5],[20,25,25,25,5],[10,20,40,20,10],[5,15,40,25,15],[0,5,25,30,40]][e-1])}),[e]),Object(h.jsx)("div",{className:"App",children:0===e?Object(h.jsxs)("h1",{children:["Select a ",Object(h.jsx)(s.b,{to:"/",children:"RISK LEVEL"})," before navigate to this page"]}):Object(h.jsxs)(o.Grid,{className:"display",centerAlign:!0,children:[Object(h.jsx)("h1",{className:"title",children:"Personalized Portfolio"}),Object(h.jsx)(o.Cell,{small:10,medium:8,large:8,children:Object(h.jsxs)("h3",{children:["Risk Level ",e]})}),Object(h.jsx)(o.Cell,{small:12,medium:10,large:8,children:Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Bonds"}),Object(h.jsx)("th",{children:"Large Cap"}),Object(h.jsx)("th",{children:"Mid Cap"}),Object(h.jsx)("th",{children:"Foreign"}),Object(h.jsx)("th",{children:"Small Cap"})]})}),Object(h.jsx)("tbody",{children:Object(h.jsx)("tr",{children:a.length>0&&a.map((function(e,t){return Object(h.jsxs)("td",{children:[e,"%"]},t)}))})})]})}),Object(h.jsx)(O,{data:a})]})})},m=(c(308),c.p+"static/media/home.0417ee9b.ico");var p=function(){return Object(h.jsxs)("header",{children:[Object(h.jsx)(s.b,{to:"/financial-advisor",children:Object(h.jsx)("img",{id:"top-logo",alt:"home-icon",src:m})}),Object(h.jsx)("div",{id:"app-title",children:"Financial Advisor"})]})};var f=function(){return Object(h.jsxs)(s.a,{children:[Object(h.jsx)(p,{}),Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{path:"/financial-advisor",exact:!0,component:u}),Object(h.jsx)(i.a,{path:"/calculator",exact:!0,component:x})]})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,321)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,l=t.getTTFB;c(e),n(e),a(e),r(e),l(e)}))},g=(c(309),c(310),c(41)),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_RISK":return t.payload;default:return e}},y=Object(g.b)({risk:C});l.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(d.a,{store:Object(g.c)(y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),children:Object(h.jsx)(f,{})})}),document.getElementById("root")),v()}},[[311,1,2]]]);
//# sourceMappingURL=main.051433db.chunk.js.map