(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(23)},17:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),i=(a(17),a(7)),c=a.n(i),s=a(10),d=a(2),u=a(3),h=a(5),b=a(4),m=a(6),p=a(1),v=(a(21),{"5x5":[[[1],[2,1],[3],[3],[3],[1],[1,1],[3],[3],[3,1]],[[3],[1],[3],[2],[4],[2],[1,1,1],[1,3],[3],[1]]],"10x10":[[[1,7],[6],[7],[7],[9],[1,3],[7],[1],[1],[1],[1,1],[2],[2],[5],[5,1],[5,3],[5,1],[7],[3,3,1],[3,2]]]}),f=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={board:"",boardId:"",painter:"",isBoardSolved:!1},a.drawBoard=a.drawBoard.bind(Object(p.a)(Object(p.a)(a))),a.cellCheck=a.cellCheck.bind(Object(p.a)(Object(p.a)(a))),a.isSolved=a.isSolved.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){this.setState({board:e.label,boardId:Math.floor(Math.random()*(v[e.label]?v[e.label].length:0))},this.drawBoard)}},{key:"componentDidMount",value:function(){this.setState({board:this.props.label,boardId:Math.floor(Math.random()*(v[this.props.label]?v[this.props.label].length:0))},this.drawBoard)}},{key:"drawBoard",value:function(){for(var e=0,t=++this.props.label.split("x")[0],a="",n=0;n<t;n++){a+="<tr>";for(var r=0;r<t;r++)a+="<td id=".concat(n,"-").concat(r,' class="empty" style="').concat(1===n&&0===r?"width: 100px":"",'">\n    ').concat(n||r?n&&r?"":v[this.props.label][this.state.boardId][e++].toString().replace(/,/g,""):"","\n  </td>");a+="</tr>"}this.setState({painter:a})}},{key:"cellCheck",value:function(e){var t=this,a=e.target.id,n=document.getElementById(a)&&document.getElementById(a).classList.value;n&&!a.split("-").some(function(e){return"0"===e})&&"board"!==a&&(document.getElementById(a).classList.value="empty"===n?"doubtful":"doubtful"===n?"fill":"empty");var r=this.isSolved();this.setState({isBoardSolved:r},function(){return console.log(t.state.isBoardSolved)}),r&&this.props.handleWinner(r)}},{key:"isSolved",value:function(){var e=this.state,t=e.board,a=e.boardId,n=[].slice.call(document.getElementsByClassName("fill"));n=n.map(function(e){return e.id});var r=+t.split("x")[0],l=+t.split("x")[1],o=v[t][a].map(function(e){return e.reduce(function(e,t){return e+t},0)}),i=new Array(r+l).fill(0);return n.forEach(function(e){var t=e.split("-");i[--t[0]+r]++,i[--t[1]]++}),i.every(function(e,t){return e===o[t]})}},{key:"render",value:function(){return r.a.createElement("table",{id:"board",onClick:this.cellCheck,dangerouslySetInnerHTML:{__html:this.state.painter},style:{margin:"0 auto",border:"none"}})}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={label:Object.keys(v)[0],winner:!1},a.handleBoardChange=a.handleBoardChange.bind(Object(p.a)(Object(p.a)(a))),a.handleWinner=a.handleWinner.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleBoardChange",value:function(){var e=Object(s.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({label:t.target.value});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleWinner",value:function(e){this.setState({winner:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Nonogram, Solve the Japanese Puzzle!"),r.a.createElement("div",{className:"game custom-select"},r.a.createElement("label",{className:"settings"},"Select Level:",r.a.createElement("select",{id:"levels",onChange:this.handleBoardChange,style:{marginBottom:15}},Object.keys(v).map(function(e){return r.a.createElement("option",{value:e,key:e},e)}))),r.a.createElement(f,{label:this.state.label,handleWinner:this.handleWinner})),r.a.createElement("div",{className:"winner",style:{display:this.state.winner?"initial":"none"}},r.a.createElement("p",null,"You're Winner ",r.a.createElement("span",{role:"img","aria-label":"rocket"},"\ud83d\ude80")),r.a.createElement("p",null,"\u3042\u306a\u305f\u306f\u52dd\u8005\u3067\u3059 ",r.a.createElement("span",{role:"img","aria-label":"rocket"},"\ud83d\ude80")),r.a.createElement("button",{onClick:function(){return window.location.reload()}},"Play Again?")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.0c68f918.chunk.js.map