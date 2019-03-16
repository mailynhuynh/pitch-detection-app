(window.webpackJsonp=window.webpackJsonp||[]).push([[3],[,,function(t,e,n){"use strict";n.r(e);var a=n(3),i=n.n(a),r=n(12),o=n.n(r),l=(n(17),n(4)),s=n(5),c=n(9),h=n(7),u=n(10),f=(n(18),n(8)),m=function(t){t.onClick,t.loading;return i.a.createElement("div",{className:"header",style:{backgroundColor:"#3f51b5",color:"#ffffff"}},"Pitch Detector")},d=n(19),v=n.n(d),g=function(t){var e=t.detectorName,n=t.sampleRate,a=t.windowSize,r=t.clarityThreshold,o=t.onParamChange,l=t.onStart,s=t.loading;return i.a.createElement("div",{className:"full",style:{backgroundColor:"#F5F5F5",position:"relative"}},i.a.createElement("div",{className:"content",style:{textAlign:"center"}},i.a.createElement("h2",null,"A Rust + WebAssembly Pitch Detector"),i.a.createElement("br",null),i.a.createElement("h3",null,"Author"),i.a.createElement("span",null,"Alessandro Genova"),i.a.createElement("h3",null,"Core Library"),i.a.createElement("span",null,i.a.createElement("a",{href:"https://github.com/alesgenova/pitch-detection",target:"_blank"},"Source"),i.a.createElement("br",null),"(rust)"),i.a.createElement("h3",null,"Demo App"),i.a.createElement("span",null,i.a.createElement("a",{href:"https://github.com/alesgenova/pitch-detection-app",target:"_blank"},"Source"),i.a.createElement("br",null),"(wasm, react)"),i.a.createElement("br",null),i.a.createElement("h3",null,"Detector"),i.a.createElement("select",{value:e,onChange:function(t){o("detectorName",t.target.value)}},i.a.createElement("option",{value:"mcleod"},"McLeod"),i.a.createElement("option",{value:"autocorrelation"},"Autocorrelation")),i.a.createElement("h3",null,"Sample Rate"),i.a.createElement("select",{value:n,onChange:function(t){o("sampleRate",t.target.value)}},i.a.createElement("option",{value:11025},"11025 Hz"),i.a.createElement("option",{value:22050},"22050 Hz"),i.a.createElement("option",{value:44100},"44100 Hz"),i.a.createElement("option",{value:48e3},"48000 Hz")),i.a.createElement("h3",null,"Window Size"),i.a.createElement("select",{value:a,onChange:function(t){o("windowSize",t.target.value)}},i.a.createElement("option",{value:512},"512 samples"),i.a.createElement("option",{value:1024},"1024 samples"),i.a.createElement("option",{value:2048},"2048 samples"),i.a.createElement("option",{value:4096},"4096 samples")),i.a.createElement("h3",null,"Clarity Threshold"),i.a.createElement("input",{value:r,type:"range",min:0,max:1,step:.01,onChange:function(t){o("clarityThreshold",t.target.value)}}),i.a.createElement("br",null),"(",r,")"),i.a.createElement("div",{className:"floating-container-center"},i.a.createElement("button",{disabled:s,onClick:l,className:"floating-button-large",style:{backgroundColor:s?"#757de8":"#3f51b5",color:"#ffffff"}},i.a.createElement("ion-icon",{src:v.a}))))},p=n(23),b=n(22),y=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],C=[[121,85,72],[158,158,158],[96,125,139],[76,175,80],[244,67,54],[33,150,243],[0,150,136],[255,235,59],[0,188,212]];function w(t){var e=Math.log(t/440)/Math.log(2)*12;return Math.round(e)+69}function E(t,e){return Math.floor(1200*Math.log(t/function(t){return 440*Math.pow(2,(t-69)/12)}(e))/Math.log(2))}function k(t){var e=Math.floor(t/12)-1,n=Math.min(e,C.length-1);return n=Math.max(0,n),C[n]}var x=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15e3,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7e3;Object(l.a)(this,t),this.frequencies=[],this.background="#efefef",this.highlight="#888888",this.container=e,this.container.style.position="relative";var i="position: absolute; width: 100%; height: 100%;";this.bgCanvas=document.createElement("canvas"),this.bgCanvas.setAttribute("style",i),this.bgContext=this.bgCanvas.getContext("2d"),this.noteCanvas=document.createElement("canvas"),this.noteCanvas.setAttribute("style",i),this.noteContext=this.noteCanvas.getContext("2d"),this.container.appendChild(this.bgCanvas),this.container.appendChild(this.noteCanvas),this.timeSpan=n,this.timeOffset=a,this.resize()}return Object(s.a)(t,[{key:"resize",value:function(){var t=this.container.clientWidth,e=this.container.clientHeight;this.bgCanvas.width=t,this.bgCanvas.height=e,this.noteCanvas.width=t,this.noteCanvas.height=e,this.scaleX=Object(b.a)().domain([-this.timeOffset,-this.timeOffset+this.timeSpan]).range([0,t]);var n=e/(y.length+1);this.scaleY=Object(b.a)().domain([0,y.length-1]).range([e-n,n]),this.render()}},{key:"pushFrequency",value:function(t){this.frequencies.push(t)}},{key:"cleanupFrequencies",value:function(){var t=this;this.frequencies=this.frequencies.filter(function(e){return t.now-e.time<t.timeOffset})}},{key:"render",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.now=(new Date).getTime(),this.cleanupFrequencies(),t&&this.drawBackground(),this.drawNotes()}},{key:"setBackgroundColor",value:function(t){this.background=t,this.drawBackground()}},{key:"setHighlightColor",value:function(t){this.highlight=t,this.drawBackground()}},{key:"drawBackground",value:function(){var t=this.bgCanvas.width,e=this.bgCanvas.height;this.bgContext.fillStyle=this.background,this.bgContext.clearRect(0,0,t,e),this.bgContext.fillRect(0,0,t,e);for(var n=0;n<y.length;++n){var a=this.scaleY(n);this.bgContext.fillStyle=this.highlight+"55",this.bgContext.fillRect(0,a,t,1),this.bgContext.fillStyle=this.highlight,this.bgContext.font="14px Sans",this.bgContext.fillText(y[n],this.scaleX(0)+20,a-2),this.bgContext.fillText(y[n],20,a-2)}this.bgContext.fillStyle=this.highlight+"55",this.bgContext.fillRect(this.scaleX(0),0,1,e)}},{key:"drawNotes",value:function(){var t=this.noteCanvas.width,e=this.noteCanvas.height;this.noteContext.clearRect(0,0,t,e),this.noteContext.beginPath(),this.noteContext.strokeStyle="rgba(0, 0, 0, 0.1)";var n=[],a=!0,i=!1,r=void 0;try{for(var o,l=this.frequencies[Symbol.iterator]();!(a=(o=l.next()).done);a=!0){var s=o.value,c=s.time,h=s.frequency,u=s.clarity,f=w(h),m=E(h,f),d=this.scaleX(c-this.now),v=this.scaleY(f%12+m/100),g=k(f);n.push({time:c,x:d,y:v,clarity:u,color:g})}}catch(j){i=!0,r=j}finally{try{a||null==l.return||l.return()}finally{if(i)throw r}}this.noteContext.beginPath();for(var p=1;p<n.length;++p){var b=n[p];d=b.x,v=b.y;b.time-n[p-1].time>500?(this.noteContext.stroke(),this.noteContext.beginPath(),this.noteContext.moveTo(d,v)):this.noteContext.lineTo(d,v)}this.noteContext.stroke();for(var y=0;y<n.length;y++){var C=n[y],x=C.x,S=C.y,O=C.clarity,R=C.color;this.noteContext.fillStyle="rgba(".concat(R[0],", ").concat(R[1],", ").concat(R[2],", ").concat(.5*O,")"),this.noteContext.beginPath(),this.noteContext.arc(x,S,3,0,2*Math.PI),this.noteContext.fill()}}}]),t}(),S=n(20),O=n.n(S),R=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(c.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).quit=!1,n.mainLoop=function(){n.quit||(requestAnimationFrame(n.mainLoop),n.updatePitch())},n.onResize=function(){n.pitchDisplay.resize()},n}return Object(u.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){console.log("PitchComponent did mount",x),this.pitchDisplay=new x(this.displayElement,6e3,5e3),this.pitchDisplay.setBackgroundColor("#F5F5F5");var t=this.props,e=t.stream,n=t.detectorClass,a=t.windowSize;this.detector=n.new(a,a/2),this.buffer=new Float32Array(a),this.result=new Float32Array(2),this.audioContext=new AudioContext,this.mediaStreamSource=this.audioContext.createMediaStreamSource(e),this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=a,this.mediaStreamSource.connect(this.analyser),window.addEventListener("resize",this.onResize),this.mainLoop()}},{key:"componentWillUnmount",value:function(){console.log("PitchComponent will unmount"),window.removeEventListener("resize",this.onResize),this.quit=!0}},{key:"updatePitch",value:function(){var t=this.props,e=t.sampleRate,n=t.powerThreshold,a=t.clarityThreshold;this.analyser.getFloatTimeDomainData(this.buffer),this.detector.get_pitch(this.buffer,e,n,a,this.result);var i=Object(p.a)(this.result,2),r=i[0],o=i[1];if(r>0){var l=(new Date).getTime();this.pitchDisplay.pushFrequency({frequency:r,clarity:o,time:l})}this.pitchDisplay.render(!1)}},{key:"render",value:function(){var t=this,e=this.props.onStop;return i.a.createElement("div",{className:"full",style:{position:"relative"}},i.a.createElement("div",{className:"full",style:{position:"relative"},ref:function(e){t.displayElement=e}}),i.a.createElement("div",{className:"floating-container"},i.a.createElement("button",{onClick:e,className:"floating-button",style:{backgroundColor:"#9c27b0",color:"#ffffff"}},i.a.createElement("ion-icon",{src:O.a}))))}}]),e}(a.Component);function j(t){switch(t){case"autocorrelation":return f.a;case"mcleod":default:return f.b}}var T=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(c.a)(this,Object(h.a)(e).call(this,t))).POWER_THRESHOLD=.25,n.onStart=function(){n.setState(function(t){return t.loading=!0,t});var t={audio:{echoCancellation:!0,autoGainControl:!0,sampleRate:n.SAMPLE_RATE}};navigator.mediaDevices.getUserMedia(t).then(function(t){n.setState(function(e){return e.loading=!1,e.loaded=!0,e.stream=t,e})}).catch(function(t){console.log(t),n.setState(function(t){return t.loading=!1,t.stream=null,t})})},n.onStop=function(){var t=n.state.stream;if(t){var e=!0,a=!1,i=void 0;try{for(var r,o=t.getTracks()[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){r.value.stop()}}catch(l){a=!0,i=l}finally{try{e||null==o.return||o.return()}finally{if(a)throw i}}}n.setState(function(t){return t.loaded=!1,t.stream=null,t})},n.onParamChange=function(t,e){n.setState(function(n){return n[t]=e,n})},n.state={loading:!1,loaded:!1,stream:null,detectorName:"mcleod",sampleRate:44100,windowSize:1024,clarityThreshold:.6},n}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state,e=t.detectorName,n=t.sampleRate,a=t.windowSize,r=t.clarityThreshold,o=t.loading,l=t.loaded,s=t.stream;return i.a.createElement("div",{className:"app"},i.a.createElement(m,null),i.a.createElement("div",{className:"content-container"},!l&&i.a.createElement(g,{detectorName:e,sampleRate:n,windowSize:a,clarityThreshold:r,onParamChange:this.onParamChange,onStart:this.onStart,loading:o}),l&&i.a.createElement(R,{stream:s,detectorClass:j(e),sampleRate:n,windowSize:a,powerThreshold:this.POWER_THRESHOLD,clarityThreshold:r,onStop:this.onStop})))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},,,,,,function(t,e,n){"use strict";n.d(e,"b",function(){return h}),n.d(e,"a",function(){return u}),n.d(e,"c",function(){return v});var a=n(4),i=n(5),r=n(21),o=null;function l(){return null!==o&&o.buffer===r.i.buffer||(o=new Float32Array(r.i.buffer)),o}var s=0;function c(t){var e=r.d(4*t.length);return l().set(t,e/4),s=t.length,e}var h=function(){function t(){Object(a.a)(this,t)}return Object(i.a)(t,[{key:"free",value:function(){var t=this.ptr;this.ptr=0,function(t){r.b(t)}(t)}},{key:"get_pitch",value:function(t,e,n,a,i){var o=c(t),h=s,u=c(i),f=s;try{return r.g(this.ptr,o,h,e,n,a,u,f)}finally{r.c(o,4*h),i.set(l().subarray(u/4,u/4+f)),r.c(u,4*f)}}}],[{key:"__wrap",value:function(e){var n=Object.create(t.prototype);return n.ptr=e,n}},{key:"new",value:function(e,n){return t.__wrap(r.h(e,n))}}]),t}();var u=function(){function t(){Object(a.a)(this,t)}return Object(i.a)(t,[{key:"free",value:function(){var t=this.ptr;this.ptr=0,function(t){r.a(t)}(t)}},{key:"get_pitch",value:function(t,e,n,a,i){var o=c(t),h=s,u=c(i),f=s;try{return r.e(this.ptr,o,h,e,n,a,u,f)}finally{r.c(o,4*h),i.set(l().subarray(u/4,u/4+f)),r.c(u,4*f)}}}],[{key:"__wrap",value:function(e){var n=Object.create(t.prototype);return n.ptr=e,n}},{key:"new",value:function(e,n){return t.__wrap(r.f(e,n))}}]),t}(),f=new TextDecoder("utf-8"),m=null;function d(t,e){return f.decode((null!==m&&m.buffer===r.i.buffer||(m=new Uint8Array(r.i.buffer)),m).subarray(t,t+e))}function v(t,e){throw new Error(d(t,e))}},,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){t.exports=n.p+"static/media/play.7674a1b6.svg"},function(t,e,n){t.exports=n.p+"static/media/stop.292a58fa.svg"},function(t,e,n){"use strict";var a=n.w[t.i];t.exports=a;n(8);a.j()}]]);
//# sourceMappingURL=3.eb3bfa99.chunk.js.map