(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{15:function(e,t,a){e.exports=a(28)},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),s=a.n(i),c=(a(20),a(12)),o=a(7),l=a(8),u=a(2),m=a(14),d=a(13),h=(a(21),a(22),a(9)),p=a(10);var v=function(e){var t=e.items.map((function(t){return r.a.createElement("div",{className:"list",key:t.key},r.a.createElement("p",null,r.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(a){e.setUpdate(a.target.value,t.key)}}),r.a.createElement("span",null,r.a.createElement(h.a,{className:"faicons",icon:"trash",onClick:function(){return e.deleteItem(t.key)}}))))}));return r.a.createElement("div",null,r.a.createElement(p.a,{duration:300,easing:"ease-in-out"},t))},f=a(4),k=a(11);f.b.add(k.a);var y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={items:[],currentItem:{text:"",key:""}},e.handleInput=e.handleInput.bind(Object(u.a)(e)),e.addItem=e.addItem.bind(Object(u.a)(e)),e.deleteItem=e.deleteItem.bind(Object(u.a)(e)),e.setUpdate=e.setUpdate.bind(Object(u.a)(e)),e}return Object(l.a)(a,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){var a=[].concat(Object(c.a)(this.state.items),[t]);this.setState({items:a,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"setUpdate",value:function(e,t){var a=this.state.items;a.map((function(a){a.key===t&&(a.text=e)})),this.setState({items:a})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},r.a.createElement("input",{type:"text",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handleInput}),r.a.createElement("button",{type:"Submit"}," Add "))),r.a.createElement(v,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate}," "))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.c0f3adba.chunk.js.map