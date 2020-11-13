(window.webpackJsonp=window.webpackJsonp||[]).push([[3],[,,function(t,e,n){"use strict";n.r(e);var a=n(3),r=n.n(a),i=n(15),o=n.n(i),l=(n(19),n(4)),c=n(5),s=n(9),u=n(8),h=n(10),f=(n(20),n(23)),m=function(t){t.onClick,t.loading;return r.a.createElement("div",{className:"header",style:{backgroundColor:"#3f51b5",color:"#ffffff"}},"Pitch Detector")},d=n(21),v=n.n(d),p=function(t){var e=t.detectorName,n=t.sampleRate,a=t.windowSize,i=t.clarityThreshold,o=t.onParamChange,l=t.onStart,c=t.loading;return r.a.createElement("div",{className:"full",style:{backgroundColor:"#F5F5F5",position:"relative"}},r.a.createElement("div",{className:"content",style:{textAlign:"center"}},r.a.createElement("h2",null,"A Rust + WebAssembly Pitch Detector"),r.a.createElement("h3",null,"Author"),r.a.createElement("span",null,"Alessandro Genova"),r.a.createElement("h3",null,"Core Library"),r.a.createElement("span",null,r.a.createElement("a",{href:"https://github.com/alesgenova/pitch-detection",target:"_blank"},"Source"),r.a.createElement("br",null),"(rust)"),r.a.createElement("h3",null,"Demo App"),r.a.createElement("span",null,r.a.createElement("a",{href:"https://github.com/alesgenova/pitch-detection-app",target:"_blank"},"Source"),r.a.createElement("br",null),"(wasm, react)"),r.a.createElement("br",null),r.a.createElement("h3",null,"Detector"),r.a.createElement("select",{value:e,onChange:function(t){o("detectorName",t.target.value)}},r.a.createElement("option",{value:"mcleod"},"McLeod"),r.a.createElement("option",{value:"autocorrelation"},"Autocorrelation")),r.a.createElement("h3",null,"Sample Rate"),r.a.createElement("select",{value:n,onChange:function(t){o("sampleRate",t.target.value)}},r.a.createElement("option",{value:11025},"11025 Hz"),r.a.createElement("option",{value:22050},"22050 Hz"),r.a.createElement("option",{value:44100},"44100 Hz"),r.a.createElement("option",{value:48e3},"48000 Hz")),r.a.createElement("h3",null,"Window Size"),r.a.createElement("select",{value:a,onChange:function(t){o("windowSize",t.target.value)}},r.a.createElement("option",{value:512},"512 samples"),r.a.createElement("option",{value:1024},"1024 samples"),r.a.createElement("option",{value:2048},"2048 samples"),r.a.createElement("option",{value:4096},"4096 samples")),r.a.createElement("h3",null,"Clarity Threshold"),r.a.createElement("input",{value:i,type:"range",min:0,max:1,step:.01,onChange:function(t){o("clarityThreshold",t.target.value)}}),r.a.createElement("br",null),"(",i,")"),r.a.createElement("div",{className:"floating-container-center"},r.a.createElement("button",{disabled:c,onClick:l,className:"floating-button-large",style:{backgroundColor:c?"#757de8":"#3f51b5",color:"#ffffff"}},r.a.createElement("ion-icon",{src:v.a}))))},g=n(27),y=n(26),b=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],w=[[121,85,72],[158,158,158],[96,125,139],[76,175,80],[244,67,54],[33,150,243],[0,150,136],[255,235,59],[0,188,212]];function C(t){var e=Math.log(t/440)/Math.log(2)*12;return Math.round(e)+69}function E(t,e){return Math.floor(1200*Math.log(t/function(t){return 440*Math.pow(2,(t-69)/12)}(e))/Math.log(2))}function S(t){var e=Math.floor(t/12)-1,n=Math.min(e,w.length-1);return n=Math.max(0,n),w[n]}function x(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){l=!0,i=t},f:function(){try{o||null==n.return||n.return()}finally{if(l)throw i}}}}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var O=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15e3,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7e3;Object(l.a)(this,t),this.frequencies=[],this.background="#efefef",this.highlight="#888888",this.container=e,this.container.style.position="relative";var r="position: absolute; width: 100%; height: 100%;";this.bgCanvas=document.createElement("canvas"),this.bgCanvas.setAttribute("style",r),this.bgContext=this.bgCanvas.getContext("2d"),this.noteCanvas=document.createElement("canvas"),this.noteCanvas.setAttribute("style",r),this.noteContext=this.noteCanvas.getContext("2d"),this.container.appendChild(this.bgCanvas),this.container.appendChild(this.noteCanvas),this.timeSpan=n,this.timeOffset=a,this.resize()}return Object(c.a)(t,[{key:"resize",value:function(){var t=this.container.clientWidth,e=this.container.clientHeight;this.bgCanvas.width=t,this.bgCanvas.height=e,this.noteCanvas.width=t,this.noteCanvas.height=e,this.scaleX=Object(y.a)().domain([-this.timeOffset,-this.timeOffset+this.timeSpan]).range([0,t]);var n=e/(b.length+1);this.scaleY=Object(y.a)().domain([0,b.length-1]).range([e-n,n]),this.render()}},{key:"pushFrequency",value:function(t){this.frequencies.push(t)}},{key:"cleanupFrequencies",value:function(){var t=this;this.frequencies=this.frequencies.filter(function(e){return t.now-e.time<t.timeOffset})}},{key:"render",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.now=(new Date).getTime(),this.cleanupFrequencies(),t&&this.drawBackground(),this.drawNotes()}},{key:"setBackgroundColor",value:function(t){this.background=t,this.drawBackground()}},{key:"setHighlightColor",value:function(t){this.highlight=t,this.drawBackground()}},{key:"drawBackground",value:function(){var t=this.bgCanvas.width,e=this.bgCanvas.height;this.bgContext.fillStyle=this.background,this.bgContext.clearRect(0,0,t,e),this.bgContext.fillRect(0,0,t,e);for(var n=0;n<b.length;++n){var a=this.scaleY(n);this.bgContext.fillStyle=this.highlight+"55",this.bgContext.fillRect(0,a,t,1),this.bgContext.fillStyle=this.highlight,this.bgContext.font="14px Sans",this.bgContext.fillText(b[n],this.scaleX(0)+20,a-2),this.bgContext.fillText(b[n],20,a-2)}this.bgContext.fillStyle=this.highlight+"55",this.bgContext.fillRect(this.scaleX(0),0,1,e)}},{key:"drawNotes",value:function(){var t=this.noteCanvas.width,e=this.noteCanvas.height;this.noteContext.clearRect(0,0,t,e),this.noteContext.beginPath(),this.noteContext.strokeStyle="rgba(0, 0, 0, 0.1)";var n,a=[],r=x(this.frequencies);try{for(r.s();!(n=r.n()).done;){var i=n.value,o=i.time,l=i.frequency,c=i.clarity,s=C(l),u=E(l,s),h=this.scaleX(o-this.now),f=this.scaleY(s%12+u/100),m=S(s);a.push({time:o,x:h,y:f,clarity:c,color:m})}}catch(T){r.e(T)}finally{r.f()}this.noteContext.beginPath();for(var d=1;d<a.length;++d){var v=a[d],p=v.x,g=v.y;v.time-a[d-1].time>500?(this.noteContext.stroke(),this.noteContext.beginPath(),this.noteContext.moveTo(p,g)):this.noteContext.lineTo(p,g)}this.noteContext.stroke();for(var y=0,b=a;y<b.length;y++){var w=b[y],k=w.x,O=w.y,A=w.clarity,j=w.color;this.noteContext.fillStyle="rgba(".concat(j[0],", ").concat(j[1],", ").concat(j[2],", ").concat(.5*A,")"),this.noteContext.beginPath(),this.noteContext.arc(k,O,3,0,2*Math.PI),this.noteContext.fill()}}}]),t}(),A=n(22),j=n.n(A),T=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).quit=!1,n.mainLoop=function(){n.quit||(requestAnimationFrame(n.mainLoop),n.updatePitch())},n.onResize=function(){n.pitchDisplay.resize()},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){console.log("PitchComponent did mount",O),this.pitchDisplay=new O(this.displayElement,6e3,5e3),this.pitchDisplay.setBackgroundColor("#F5F5F5");var t=this.props,e=t.stream,n=t.detectorClass,a=t.windowSize;this.detector=n.new(a,a/2),this.buffer=new Float32Array(a),this.result=new Float32Array(2),this.audioContext=new AudioContext,this.mediaStreamSource=this.audioContext.createMediaStreamSource(e),this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=a,this.mediaStreamSource.connect(this.analyser),window.addEventListener("resize",this.onResize),this.mainLoop()}},{key:"componentWillUnmount",value:function(){console.log("PitchComponent will unmount"),window.removeEventListener("resize",this.onResize),this.quit=!0}},{key:"updatePitch",value:function(){var t=this.props,e=t.sampleRate,n=t.powerThreshold,a=t.clarityThreshold;this.analyser.getFloatTimeDomainData(this.buffer),this.detector.get_pitch(this.buffer,e,n,a,this.result);var r=Object(g.a)(this.result,2),i=r[0],o=r[1];if(i>0){var l=(new Date).getTime();this.pitchDisplay.pushFrequency({frequency:i,clarity:o,time:l})}this.pitchDisplay.render(!1)}},{key:"render",value:function(){var t=this,e=this.props.onStop;return r.a.createElement("div",{className:"full",style:{position:"relative"}},r.a.createElement("div",{className:"full",style:{position:"relative"},ref:function(e){t.displayElement=e}}),r.a.createElement("div",{className:"floating-container"},r.a.createElement("button",{onClick:e,className:"floating-button",style:{backgroundColor:"#9c27b0",color:"#ffffff"}},r.a.createElement("ion-icon",{src:j.a}))))}}]),e}(a.Component);function R(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){l=!0,i=t},f:function(){try{o||null==n.return||n.return()}finally{if(l)throw i}}}}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function z(t){switch(t){case"autocorrelation":return f.a;case"mcleod":default:return f.b}}var M=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).POWER_THRESHOLD=.15,n.onStart=function(){n.setState(function(t){return t.loading=!0,t});var t={audio:{echoCancellation:!0,autoGainControl:!0,sampleRate:n.SAMPLE_RATE}};navigator.mediaDevices.getUserMedia(t).then(function(t){n.setState(function(e){return e.loading=!1,e.loaded=!0,e.stream=t,e})}).catch(function(t){console.log(t),n.setState(function(t){return t.loading=!1,t.stream=null,t})})},n.onStop=function(){var t=n.state.stream;if(t){var e,a=R(t.getTracks());try{for(a.s();!(e=a.n()).done;){e.value.stop()}}catch(r){a.e(r)}finally{a.f()}}n.setState(function(t){return t.loaded=!1,t.stream=null,t})},n.onParamChange=function(t,e){n.setState(function(n){return n[t]=e,n})},n.state={loading:!1,loaded:!1,stream:null,detectorName:"mcleod",sampleRate:44100,windowSize:1024,clarityThreshold:.6},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.state,e=t.detectorName,n=t.sampleRate,a=t.windowSize,i=t.clarityThreshold,o=t.loading,l=t.loaded,c=t.stream;return r.a.createElement("div",{className:"app"},r.a.createElement(m,null),r.a.createElement("div",{className:"content-container"},!l&&r.a.createElement(p,{detectorName:e,sampleRate:n,windowSize:a,clarityThreshold:i,onParamChange:this.onParamChange,onStart:this.onStart,loading:o}),l&&r.a.createElement(T,{stream:c,detectorClass:z(e),sampleRate:n,windowSize:a,powerThreshold:this.POWER_THRESHOLD,clarityThreshold:i,onStop:this.onStop})))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){t.exports=n.p+"static/media/play.7674a1b6.svg"},function(t,e,n){t.exports=n.p+"static/media/stop.292a58fa.svg"},function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return m}),n.d(e,"b",function(){return d}),n.d(e,"c",function(){return v});var a=n(4),r=n(5),i=n(25),o=new("undefined"===typeof TextDecoder?(0,t.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});o.decode();var l=null;function c(t,e){return o.decode((null!==l&&l.buffer===i.i.buffer||(l=new Uint8Array(i.i.buffer)),l).subarray(t,t+e))}var s=null;function u(){return null!==s&&s.buffer===i.i.buffer||(s=new Float32Array(i.i.buffer)),s}var h=0;function f(t,e){var n=e(4*t.length);return u().set(t,n/4),h=t.length,n}var m=function(){function t(){Object(a.a)(this,t)}return Object(r.a)(t,[{key:"free",value:function(){var t=this.ptr;this.ptr=0,i.a(t)}},{key:"get_pitch",value:function(t,e,n,a,r){try{var o=f(t,i.d),l=h,c=f(r,i.d),s=h;i.e(this.ptr,o,l,e,n,a,c,s)}finally{r.set(u().subarray(c/4,c/4+s)),i.c(c,4*s)}}}],[{key:"__wrap",value:function(e){var n=Object.create(t.prototype);return n.ptr=e,n}},{key:"new",value:function(e,n){var a=i.f(e,n);return t.__wrap(a)}}]),t}(),d=function(){function t(){Object(a.a)(this,t)}return Object(r.a)(t,[{key:"free",value:function(){var t=this.ptr;this.ptr=0,i.b(t)}},{key:"get_pitch",value:function(t,e,n,a,r){try{var o=f(t,i.d),l=h,c=f(r,i.d),s=h;i.g(this.ptr,o,l,e,n,a,c,s)}finally{r.set(u().subarray(c/4,c/4+s)),i.c(c,4*s)}}}],[{key:"__wrap",value:function(e){var n=Object.create(t.prototype);return n.ptr=e,n}},{key:"new",value:function(e,n){var a=i.h(e,n);return t.__wrap(a)}}]),t}(),v=function(t,e){throw new Error(c(t,e))}}).call(this,n(24)(t))},,function(t,e,n){"use strict";var a=n.w[t.i];t.exports=a;n(23);a.j()}]]);
//# sourceMappingURL=3.328bab81.chunk.js.map