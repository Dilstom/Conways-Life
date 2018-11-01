(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},17:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},24:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(9),i=a.n(l),s=(a(22),a(4)),c=a(5),o=a(7),u=a(6),m=a(8),h=(a(24),a(3)),p=(a(10),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){a.props.handleClick(a.props.row,a.props.col)},a.state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.boxClassName,id:this.props.id,onClick:this.handleClick})}}]),t}(n.Component)),d=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){console.log("Grid props: ",this.props);for(var e=14*this.props.cols,t=[],a="",n=0;n<this.props.rows;n++)for(var l=0;l<this.props.cols;l++){var i=n+"-"+l;a=this.props.grid[n][l]?"cell black":"cell white",t.push(r.a.createElement(p,{boxClassName:a,key:i,boxId:i,row:n,col:l,handleClick:this.props.handleClick}))}return r.a.createElement("div",null,r.a.createElement("div",{className:"grid",style:{width:e}},t))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"thirtyPer displayFlex"},r.a.createElement("button",{className:"playB",onClick:this.props.handlePlay},"Play"),r.a.createElement("button",{className:"playB",onClick:this.props.handlePause},"Pause"),r.a.createElement("button",{className:"playB",onClick:this.props.handleStop},"Clear"))}}]),t}(n.Component);function b(e){return JSON.parse(JSON.stringify(e))}var E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handleClick=function(t,a){var n=b(e.state.grid);n[t][a]=!n[t][a],e.setState({grid:n})},e.handlePlay=function(){clearInterval(e.interval),e.interval=setInterval(e.start,e.speed),e.start()},e.start=function(){for(var t=e.state.grid,a=b(e.state.grid),n=0;n<e.rows;n++)for(var r=0;r<e.cols;r++){var l=0;n>0&&t[n-1][r]&&l++,n>0&&r>0&&t[n-1][r-1]&&l++,n>0&&r<e.cols-1&&t[n-1][r+1]&&l++,r<e.cols-1&&t[n][r+1]&&l++,r>0&&t[n][r-1]&&l++,n<e.rows-1&&t[n+1][r]&&l++,n<e.rows-1&&r>0&&t[n+1][r-1]&&l++,n<e.rows-1&&r<e.cols-1&&t[n+1][r+1]&&l++,t[n][r]&&(l<2||l>3)&&(a[n][r]=!1),t[n][r]||3!==l||(a[n][r]=!0)}e.setState({grid:a,generation:e.state.generation+1})},e.handlePause=function(){clearInterval(e.interval)},e.handleStop=function(){e.setState({grid:Array(e.rows).fill().map(function(){return Array(e.cols).fill(!1)}),generation:0})},e.continueAnimation=!0,e.speed=100,e.rows=30,e.cols=30,e.state={generation:0,grid:Array(e.rows).fill().map(function(){return Array(e.cols).fill(!1)})},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;requestAnimationFrame(function(t){e.onAnimFrame(t)})}},{key:"componentWillUnmount",value:function(){this.continueAnimation=!1}},{key:"onAnimFrame",value:function(e){var t=this;this.continueAnimation&&requestAnimationFrame(function(e){t.onAnimFrame(e)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,{grid:this.state.grid,rows:this.rows,cols:this.cols,handleClick:this.handleClick}),r.a.createElement(f,{handlePlay:this.handlePlay,handlePause:this.handlePause,handleStop:this.handleStop}),r.a.createElement("h4",null,"Generations: ",this.state.generation))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.b,{className:"containerWrapper"},r.a.createElement(h.c,null,r.a.createElement(h.a,null,r.a.createElement("h2",null,"Conway's Game of Life"))),r.a.createElement(h.c,{className:"displayFlex"},r.a.createElement(h.a,{xs:"6",className:"centerContent"},r.a.createElement("h3",null,"Generation: #")),r.a.createElement(h.a,{xs:"6",className:"centerContent"},r.a.createElement("h3",null,"Rules"))),r.a.createElement(h.c,{className:"displayFlex"},r.a.createElement(h.a,{xs:"3"},r.a.createElement(E,null)),r.a.createElement(h.a,{xs:"2",className:"dirColumn"},r.a.createElement("button",{className:"presetBut"},"Preset 1"),r.a.createElement("button",{className:"presetBut"},"Preset 2"),r.a.createElement("button",{className:"presetBut"},"Preset 3"),r.a.createElement("button",{className:"presetBut"},"Preset 4")),r.a.createElement(h.a,{xs:"7",className:"rulesArea"},r.a.createElement("ul",null,r.a.createElement("li",null,"If the cell is alive and has 2 or 3 neighbors, then it remains alive. Else it dies."),r.a.createElement("li",null,"If the cell is dead and has exactly 3 neighbors, then it comes to life. Else if remains dead.")))),r.a.createElement(h.c,null,r.a.createElement(h.a,{xs:"3",className:"thirtyPer displayFlex"}),r.a.createElement(h.a,{xs:"9"})),r.a.createElement(h.c,null,r.a.createElement(h.a,null,r.a.createElement("h3",null,"About this Algorithm:"))),r.a.createElement(h.c,null,r.a.createElement(h.a,null,r.a.createElement("quote",null,"The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. The game is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves, or, for advanced players, by creating patterns with particular properties."),r.a.createElement("p",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",className:"wikilink"},"wikipedia")))))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(v,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.f32d1a36.chunk.js.map