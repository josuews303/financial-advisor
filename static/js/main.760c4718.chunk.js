(this["webpackJsonpfinancial-advisor"]=this["webpackJsonpfinancial-advisor"]||[]).push([[0],{160:function(e,t,c){},161:function(e,t,c){},190:function(e,t,c){},307:function(e,t,c){},308:function(e,t,c){},311:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),l=c(74),a=c.n(l),r=(c(160),c(27)),i=c(11),j=(c(161),c(34)),d=c(43);var o=c(10),b=(c(190),c(320)),u=c(3);var h=function(){var e=Object(d.b)(),t=Object(s.useState)([]),c=Object(j.a)(t,2),n=c[0],l=c[1],a=Object(s.useState)(!0),i=Object(j.a)(a,2),h=i[0],m=i[1],O=Object(s.useState)(!1),x=Object(j.a)(O,2),p=x[0],v=x[1],f=Object(s.useState)([]),g=Object(j.a)(f,2),N=g[0],y=g[1];function C(t){var c=n[t],s=[{x:"Bonds",y:c[0]},{x:"Large Cap",y:c[1]},{x:"Mid Cap",y:c[2]},{x:"Foreign",y:c[3]},{x:"Small Cap",y:c[4]}];y(s),function(e){for(var t=document.getElementsByClassName("btn-risk"),c=document.getElementsByTagName("tr"),s=0;s<t.length;s++)t[s].classList.remove("active"),t[s].id===e&&t[s].classList.add("active");for(var n=0;n<c.length;n++)c[n].classList.remove("active"),c[n].id===e&&c[n].classList.add("active")}(t),e({type:"NEW_RISK",payload:parseInt(t)+1}),m(!1)}function E(){v(!p)}return Object(s.useEffect)((function(){l([[80,20,0,0,0],[70,15,15,0,0],[60,15,15,10,0],[50,20,20,10,0],[40,20,20,20,0],[35,25,5,30,5],[20,25,25,25,5],[10,20,40,20,10],[5,15,40,25,15],[0,5,25,30,40]])}),[]),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(o.Grid,{className:"display",centerAlign:!0,children:[Object(u.jsx)("h4",{className:"title",children:"Please Select A Risk Level For Your Investment Portfolio"}),Object(u.jsxs)(o.Cell,{small:10,medium:8,large:8,className:"info-container",children:[Object(u.jsx)("h5",{children:"Low"}),Object(u.jsx)("h5",{children:"High"})]}),Object(u.jsxs)(o.Cell,{small:10,medium:10,large:8,className:"buttons-container",children:[n.length>0&&n.map((function(e,t){return Object(u.jsx)(o.Button,{id:t,color:"secondary",className:"btn-risk",isHollow:!0,onClick:function(e){return C(e.target.id)},children:t+1},t)})),Object(u.jsx)(o.Button,{color:"primary",className:"btn-risk",isDisabled:h,children:Object(u.jsx)(r.b,{to:"/calculator",children:"Continue"})})]}),Object(u.jsxs)(o.Cell,{small:10,medium:5,large:5,hidden:!p,children:[Object(u.jsx)(o.Button,{isExpanded:!0,color:"success",onClick:E,children:"Table View"}),N.length>0?Object(u.jsx)(b.a,{ariaDesc:"Average number of pets",ariaTitle:"Donut chart example",constrainToVisibleArea:!0,data:N,labels:function(e){var t=e.datum;return"".concat(t.x,": ").concat(t.y,"%")},subTitle:"PORTFOLIO",title:"INVESTMENT"}):Object(u.jsx)("h3",{children:"Please select a risk level"})]}),Object(u.jsxs)(o.Cell,{small:12,medium:10,large:8,hidden:p,children:[Object(u.jsx)(o.Button,{isExpanded:!0,color:"success",onClick:E,children:"Donut Chart View"}),Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Risk"}),Object(u.jsx)("th",{children:"Bonds %"}),Object(u.jsx)("th",{children:"Large Cap %"}),Object(u.jsx)("th",{children:"Mid Cap %"}),Object(u.jsx)("th",{children:"Foreign %"}),Object(u.jsx)("th",{children:"Small Cap %"})]})}),Object(u.jsx)("tbody",{children:n.length>0&&n.map((function(e,t){return Object(u.jsxs)("tr",{id:t,children:[Object(u.jsx)("td",{children:t+1}),e.map((function(e,t){return Object(u.jsx)("td",{children:e},t)}))]},t)}))})]})]})]})})};c(307);var m=function(){var e=Object(d.c)((function(e){return e.risk})),t=Object(s.useState)([]),c=Object(j.a)(t,2),n=c[0],l=c[1];return Object(s.useEffect)((function(){l([[80,20,0,0,0],[70,15,15,0,0],[60,15,15,10,0],[50,20,20,10,0],[40,20,20,20,0],[35,25,5,30,5],[20,25,25,25,5],[10,20,40,20,10],[5,15,40,25,15],[0,5,25,30,40]][e-1])}),[e]),Object(u.jsx)("div",{className:"App",children:0===e?Object(u.jsxs)("h1",{children:["Select a ",Object(u.jsx)(r.b,{to:"/",children:"RISK LEVEL"})," before navigate to this page"]}):Object(u.jsxs)(o.Grid,{className:"display",centerAlign:!0,children:[Object(u.jsx)("h1",{className:"title",children:"Personalized Portfolio"}),Object(u.jsx)(o.Cell,{small:10,medium:8,large:8,children:Object(u.jsxs)("h3",{children:["Risk Level ",e]})}),Object(u.jsx)(o.Cell,{small:12,medium:10,large:8,children:Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Bonds"}),Object(u.jsx)("th",{children:"Large Cap"}),Object(u.jsx)("th",{children:"Mid Cap"}),Object(u.jsx)("th",{children:"Foreign"}),Object(u.jsx)("th",{children:"Small Cap"})]})}),Object(u.jsx)("tbody",{children:Object(u.jsx)("tr",{children:n.length>0&&n.map((function(e,t){return Object(u.jsxs)("td",{children:[e,"%"]},t)}))})})]})}),Object(u.jsx)(o.Cell,{small:10,medium:8,large:8,children:Object(u.jsx)("h3",{children:"Please Enter Your Current Portfolio"})}),Object(u.jsx)(o.Cell,{small:12,medium:10,large:8,children:Object(u.jsx)("table",{children:Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Current Amount"}),Object(u.jsx)("th",{children:"Difference"}),Object(u.jsx)("th",{children:"New Amount"}),Object(u.jsx)("th",{children:"Recomended Transfers"})]})})})}),Object(u.jsxs)(o.Cell,{small:12,medium:10,large:8,children:[Object(u.jsxs)(o.Grid,{className:"display",children:[Object(u.jsxs)(o.Cell,{small:4,medium:3,children:[Object(u.jsxs)("div",{className:"current",children:[Object(u.jsx)("label",{children:"Bonds $:"}),Object(u.jsx)("input",{className:"values",type:"number",min:0})]}),Object(u.jsxs)("div",{className:"current",children:[Object(u.jsx)("label",{children:"Large Cap $:"}),Object(u.jsx)("input",{className:"values",type:"number",min:0})]}),Object(u.jsxs)("div",{className:"current",children:[Object(u.jsx)("label",{children:"Mid Cap $:"}),Object(u.jsx)("input",{className:"values",type:"number",min:0})]}),Object(u.jsxs)("div",{className:"current",children:[Object(u.jsx)("label",{children:"Foreign $:"}),Object(u.jsx)("input",{className:"values",type:"number",min:0})]}),Object(u.jsxs)("div",{className:"current",children:[Object(u.jsx)("label",{children:"Small Cap $:"}),Object(u.jsx)("input",{className:"values",type:"number",min:0})]})]}),Object(u.jsxs)(o.Cell,{small:2,medium:3,children:[Object(u.jsx)("input",{className:"results",type:"text",disabled:!0}),Object(u.jsx)("input",{className:"results",type:"text",disabled:!0}),Object(u.jsx)("input",{className:"results",type:"text",disabled:!0}),Object(u.jsx)("input",{className:"results",type:"text",disabled:!0}),Object(u.jsx)("input",{className:"results",type:"text",disabled:!0})]}),Object(u.jsxs)(o.Cell,{small:3,children:[Object(u.jsx)("input",{className:"new-amount",type:"text",disabled:!0}),Object(u.jsx)("input",{className:"new-amount",type:"text",disabled:!0}),Object(u.jsx)("input",{className:"new-amount",type:"text",disabled:!0}),Object(u.jsx)("input",{className:"new-amount",type:"text",disabled:!0}),Object(u.jsx)("input",{className:"new-amount",type:"text",disabled:!0})]}),Object(u.jsx)(o.Cell,{small:3,children:Object(u.jsx)("textarea",{disabled:!0,id:"recomended",name:"recomended",rows:"10",cols:"50"})})]}),Object(u.jsx)(o.Button,{isExpanded:!0,color:"success",onClick:function(){var e=["Bonds","Large Cap","Mid Cap","Foreign","Small Cap"],t=document.getElementsByClassName("values"),c=n,s=parseFloat(0),l=[],a=[],r=[],i=[],j=0;try{for(var d=0;d<t.length;d++){if(j=parseFloat(t[d].value),(j=Math.round(100*j)/100)<0)throw new Error("Only positive numbers >= 0");s+=j,r.push(j)}for(var o=0;o<c.length;o++){var b=s*(c[o]/100);b=Math.round(100*b)/100,a.push(b),j=parseFloat(b-r[o]),j=Math.round(100*j)/100,l.push(j),i.push(j)}for(var u="",h=0;h<l.length;h++)if(l[h]>0)for(var m=0;m<l.length;m++)if(m!==h&&l[m]<0){var O=-1*l[m];O=Math.round(100*O)/100;var x=0;l[h]>=O?(x=l[h]-O,x=Math.round(100*x)/100,u+="Transfer ".concat(-1*l[m]," from ").concat(e[m]," to ").concat(e[h]," \n"),l[h]=x,l[m]=0):0!==l[h]&&(x=O-l[h],x=Math.round(100*x)/100,u+="Transfer ".concat(l[h]," from ").concat(e[m]," to ").concat(e[h]," \n"),l[h]=0,l[m]=-1*x)}for(var p=document.getElementsByClassName("new-amount"),v=document.getElementsByClassName("results"),f=0;f<p.length;f++)p[f].value=a[f],p[f].style.color="blue",i[f]>=0?(v[f].style.color="green",v[f].value="+"+i[f]):(v[f].style.color="red",v[f].value=i[f]);document.getElementById("recomended").value=u}catch(g){alert(g.name+": "+g.message)}},children:"Rebalance"})]})]})})},O=(c(308),c.p+"static/media/home.0417ee9b.ico");var x=function(){return Object(u.jsxs)("header",{children:[Object(u.jsx)(r.b,{to:"/",children:Object(u.jsx)("img",{id:"top-logo",alt:"home-icon",src:O})}),Object(u.jsx)("div",{id:"app-title",children:"Financial Advisor"})]})};var p=function(){return Object(u.jsxs)(r.a,{children:[Object(u.jsx)(x,{}),Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"/",exact:!0,component:h}),Object(u.jsx)(i.a,{path:"/calculator",exact:!0,component:m})]})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,321)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,l=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),l(e),a(e)}))},f=(c(309),c(41)),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_RISK":return t.payload;default:return e}},N=Object(f.b)({risk:g}),y=(c(310),Object(f.c)(N,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(d.a,{store:y,children:Object(u.jsx)(p,{})})}),document.getElementById("root")),v()}},[[311,1,2]]]);
//# sourceMappingURL=main.760c4718.chunk.js.map