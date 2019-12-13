(this["webpackJsonpChromeBot-Website"]=this["webpackJsonpChromeBot-Website"]||[]).push([[0],{22:function(e,t,n){e.exports=n(34)},23:function(e,t,n){},24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(2),r=n(4),i=n(3),s=n(5),c=(n(23),n(24),n(0)),l=n.n(c),u=n(18),m=n.n(u),h=n(19),d=n(10),p=function(e){function t(e){var n;Object(a.a)(this,t);var o=!1,s="",c=(n=Object(r.a)(this,Object(i.a)(t).call(this,e))).unpress;return e.disabled&&(o=!0),e.destructive?s="destructive":e.important?s="important":e.special&&(s="special"),"function"===typeof e.onClick&&(c=e.onClick),n.state={pressed:!1,disabled:o,type:s,onClick:c},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"unpress",value:function(){this.setState({pressed:!1})}},{key:"render",value:function(){var e=this;return this.state.disabled?l.a.createElement("button",{className:"button disabled"},this.props.children):this.state.pressed?l.a.createElement("button",{className:"button pressed "+this.state.type},this.props.children):l.a.createElement("button",{onClick:function(){e.setState({pressed:!0}),e.state.onClick(e)},className:"button "+this.state.type},this.props.children)}}]),t}(c.Component),b=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={errorType:e.code,errorMessage:e.description},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"page one variant2"},l.a.createElement("div",{className:"textblock"},"Hey, that's an error ",this.state.errorType,".",l.a.createElement("br",null),this.state.errorMessage,"."),l.a.createElement(p,{important:!0,onClick:function(e){return window.location.href="/"}},"Back To Home"),l.a.createElement(p,{destructive:!0,onClick:function(e){return window.location.href="https://github.com/chromebot-websites/chromebot.cf/issues"}},"Report a bug if you believe this is in issue")),l.a.createElement("div",{className:"page two variant2"},l.a.createElement("div",{className:"textblock variant2"},"Website made by ",l.a.createElement("a",{href:"https://github.com/minion3665"},"@Minion3665")," on github"),l.a.createElement("div",{className:"textblock variant2"},"Discord server made by ",l.a.createElement("a",{href:"https://github.com/chromebook777"},"@Chromebook777")," on github"),l.a.createElement("div",{className:"textblock variant2"},"Minon's slave ",l.a.createElement("a",{href:"https://github.com/vilagamer999"},"@Vilagamer9999")," on github")))}}]),t}(c.Component),f=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={color:"grey",message:"getting the latest data",timeoutId:null},n.xmlhttp=new XMLHttpRequest,n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.xmlhttp.onreadystatechange=function(){if(4===e.xmlhttp.readyState&&200===e.xmlhttp.status){var t=!1;JSON.parse(e.xmlhttp.responseText).members.forEach((function(n){n.id===e.props.botId&&(t=!0,"idle"===n.status?e.setState({color:"#AF7E00",message:"experiencing a Minor Outage"}):"dnd"===n.status?e.setState({color:"#c65b29",message:"experiencing a Major Outage"}):e.setState({color:"#6CB83A",message:"operational"}))})),t||e.setState({color:"red",message:"Offline",height:9}),setTimeout((function(){e.xmlhttp.open("GET","https://discordapp.com/api/guilds/"+e.props.serverId+"/widget.json?timestamp="+(new Date).getTime(),!0),e.xmlhttp.send()}),5e3)}},this.xmlhttp.open("GET","https://discordapp.com/api/guilds/"+this.props.serverId+"/widget.json?timestamp="+(new Date).getTime(),!0),this.xmlhttp.send()}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.xmlhttp.abort()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"statusBox",style:{backgroundColor:this.state.color}},l.a.createElement("b",{className:"title status"},this.props.botName," is currently"," ",l.a.createElement("span",{className:"highlight"},this.state.message),".")))}}]),t}(c.Component),g=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={color:"#c23b3b",barColor:"grey",percentage:100,message:"Detecting the bots that are online..."},n.xmlhttp=new XMLHttpRequest,n.timeoutId=null,n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.xmlhttp.onreadystatechange=function(){if(4===e.xmlhttp.readyState&&200===e.xmlhttp.status){var t=0;JSON.parse(e.xmlhttp.responseText).members.forEach((function(n){e.props.searchForMembers.indexOf(n.id)>=0&&t++}));var n=t/e.props.searchForMembers.length*100;100===n?e.setState({percentage:n,barColor:"#10690d",color:"#10690d",message:n.toString()+"% of the bot is online"}):e.setState({percentage:n,barColor:"#10690d",color:"#c23b3b",message:n.toString()+"% of the bots are online"}),e.timeoutId=setTimeout((function(){e.xmlhttp.open("GET","https://discordapp.com/api/guilds/"+e.props.serverId+"/widget.json?timestamp="+(new Date).getTime(),!0),e.xmlhttp.send()}),5e3)}},this.xmlhttp.open("GET","https://discordapp.com/api/guilds/"+this.props.serverId+"/widget.json?timestamp="+(new Date).getTime(),!0),this.xmlhttp.send()}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.xmlhttp.abort()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"percentbarOuter",style:{backgroundColor:this.state.color}},l.a.createElement("div",{id:"percentbarInnerText"},this.state.message),l.a.createElement("div",{id:"percentbarInner",style:{width:this.state.percentage.toString()+"%",backgroundColor:this.state.barColor}})))}}]),t}(c.Component),v=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("b",{className:"title right"},"Bots"),l.a.createElement(g,{serverId:"480959345601937410",searchForMembers:["499262934715727872","555361766947815424","599743179608293398"]}),l.a.createElement("div",{className:"centerContainer"},l.a.createElement(f,{botName:"Chromebot",botId:"499262934715727872",serverId:"480959345601937410"}),l.a.createElement(f,{botName:"Chromebot Canary",botId:"555361766947815424",serverId:"480959345601937410"})),l.a.createElement("div",{className:"centerContainer"},l.a.createElement(f,{botName:"Chromebot Manager",botId:"599743179608293398",serverId:"480959345601937410"})),l.a.createElement("div",{id:"bot-invite",className:"link"}),l.a.createElement("b",{className:"title"},"Invite the bots"),l.a.createElement(p,{onClick:function(e){window.location.href="https://discordapp.com/oauth2/authorize?client_id=499262934715727872&permissions=2146958847&scope=bot",e.unpress()}},"Invite Chromebot"),l.a.createElement(p,{destructive:!0,onClick:function(e){window.location.href="https://discordapp.com/oauth2/authorize?client_id=555361766947815424&permissions=2146958847&scope=bot",e.unpress()}},"Invite Chromebot Canary (Chromebot Canary may be unstable)"))}}]),t}(c.Component),E=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={logo:null,sticky:null,allowStick:!1},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"stick",value:function(){if(console.log(window.pageYOffset),window.pageYOffset>=this.state.sticky){if(!this.state.allowStick)return;this.state.logo.parentElement.childNodes.forEach((function(e){e.classList.add("sticky")})),Array.from(document.getElementsByClassName("link")).forEach((function(e){e.classList.add("sticky")})),document.body.classList.add("sticky"),this.state.logo.parentElement.classList.add("stickyContainer")}else{if(!this.state.allowUnStick)return;this.state.logo.parentElement.childNodes.forEach((function(e){e.classList.remove("sticky")})),Array.from(document.getElementsByClassName("link")).forEach((function(e){e.classList.remove("sticky")})),document.body.classList.remove("sticky"),this.state.logo.parentElement.classList.remove("stickyContainer")}}},{key:"componentDidUpdate",value:function(){this.stick()}},{key:"componentDidMount",value:function(){var e=this;this.setState({logo:document.getElementById("logo"),sticky:document.getElementById("logo").offsetTop,allowStick:!0,allowUnStick:!0}),window.onscroll=function(){e.stick()}}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("video",{className:"logo",id:"logo",autoPlay:!0,loop:!0,muted:!0,playsInline:!0},l.a.createElement("source",{src:"videos/icon-rotate.webm.unreal",type:"video/webm"}),l.a.createElement("source",{src:"videos/icon-rotate.mp4.unreal",type:"video/mp4"})),l.a.createElement(p,{important:!0,onClick:function(e){window.location.href="https://discordapp.com/invite/77NM8VQ",e.unpress()}},"Join The Server"),l.a.createElement(p,{onClick:function(e){window.location.href="#bot-invite",e.unpress()}},"Invite The Bots")))}}]),t}(c.Component),y=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"feature"},l.a.createElement("div",{className:"emote"},this.props.icon),this.props.title,l.a.createElement("div",{className:"content"},this.props.description))}}]),t}(c.Component),k=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("b",{className:"title right"},"Features"),l.a.createElement(y,{icon:"\ud83d\udcad",title:"Knowledge",description:"Want to find out about a user? Just run the userinfo command and check out the information"}),l.a.createElement(y,{icon:"\ud83c\udfb2",title:"Fun",description:"Want to play dice? What about choosing an option from a set of them? Have fun with chromebot in your server"}),l.a.createElement(y,{icon:"\u2753",title:"Need help?",description:"Need more information? We have a dedicated bot to help you use chromebot. Join the support server and run ?support"}),l.a.createElement(y,{icon:"\ud83d\udcc8",title:"Uptime",description:"ChromeBot is almost always online to help your server. All issues are quickly reported to help you stay online even when we're down"}),l.a.createElement(y,{icon:"\u2699\ufe0f",title:"In Development",description:"New features are always being added and issues are being fixed quickly. This ensures that you have a useful, working, bot in your server"}))}}]),t}(c.Component),O=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement(v,null),l.a.createElement(k,null))}}]),t}(c.Component),w=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={error:null},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e})}},{key:"render",value:function(){return this.state.error?"Hi. I'm Minion3665. If you can see this then the website is dead. Properly dead. Please create a new issue at https://github.com/chromebook777-productions/chromebot.cf/issues with the title 'I got a supererror'. I am not going to link anywhere for fear of breaking stuff further, as if this error boundary breaks then I have nothing left. If you want to go back to the main page then go to https://chromebot.cf.Thanks, Minion3665/":l.a.createElement(j,null,this.props.children)}}]),t}(c.Component),j=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={error:null},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e})}},{key:"render",value:function(){return this.state.error?l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{code:"601",description:"An unknown error occured. Who knows what this one means..."})):this.props.children}}]),t}(c.Component),C=w;console.log("Welcome to the chromebot website. This is client build BR.0.01.");var N=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(C,null,l.a.createElement(h.a,null,l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:O}),l.a.createElement(d.a,{path:"/egg",render:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{destructive:!0},"Yay you found an easter egg..."),l.a.createElement(p,{destructive:!0},"Not much to see here though..."),l.a.createElement(p,{special:!0},":)"),l.a.createElement(p,{important:!0}," idk lol"))}}),l.a.createElement(d.a,{path:"/status ",render:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{destructive:!0,onClick:function(e){return window.location.href="https://chromebot.cf"}},"Go Back Home"),l.a.createElement(v,null))}}),l.a.createElement(d.a,{path:"/join",render:function(){return window.location.href="https://discordapp.com/invite/77NM8VQ",l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"textblock"},"We're redirecting you now..."),l.a.createElement(p,{important:!0,onClick:function(e){return window.location.href="https://discordapp.com/invite/77NM8VQ"}}," ","Not Being Redirected ?"," "))}}),l.a.createElement(d.a,{render:function(){return l.a.createElement(b,{code:"404",description:"The requested resource was not found on the chromebot support website"})}}))))}}]),t}(c.Component);m.a.render(l.a.createElement(N,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.29e8d0c6.chunk.js.map