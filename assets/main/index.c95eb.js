window.__require=function t(i,r,o){function e(s,a){if(!r[s]){if(!i[s]){var c=s.split("/");if(c=c[c.length-1],!i[c]){var u="function"==typeof __require&&__require;if(!a&&u)return u(c,!0);if(n)return n(c,!0);throw new Error("Cannot find module '"+s+"'")}s=c}var h=r[s]={exports:{}};i[s][0].call(h.exports,function(t){return e(i[s][1][t]||t)},h,h.exports,t,i,r,o)}return r[s].exports}for(var n="function"==typeof __require&&__require,s=0;s<o.length;s++)e(o[s]);return e}({GobangScript:[function(t,i,r){"use strict";cc._RF.push(i,"dd3caReUS5ID4B+m5cbm0Aa","GobangScript");var o=this&&this.__extends||function(){var t=function(i,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)i.hasOwnProperty(r)&&(t[r]=i[r])})(i,r)};return function(i,r){function o(){this.constructor=i}t(i,r),i.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),e=this&&this.__decorate||function(t,i,r,o){var e,n=arguments.length,s=n<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,i,r,o);else for(var a=t.length-1;a>=0;a--)(e=t[a])&&(s=(n<3?e(s):n>3?e(i,r,s):e(i,r))||s);return n>3&&s&&Object.defineProperty(i,r,s),s};Object.defineProperty(r,"__esModule",{value:!0});var n=cc._decorator,s=n.ccclass,a=n.property,c=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.gridSuu=9,i.grid=null,i.kuro=null,i.siro=null,i.play=null,i.top=null,i.margin=30,i.isKuro=1,i.ngAnim=null,i.playMode=0,i.gridArray=[],i.kuroIsi=null,i.siroIsi=null,i}return o(i,t),i.prototype.onLoad=function(){this.ngAnim=this.node.getComponent(cc.Animation)},i.prototype.start=function(){var t=this;this.play.on(cc.Node.EventType.MOUSE_DOWN,function(){t.top.active=!1,t.gamePlay()})},i.prototype.gamePlay=function(){var t=this;this.interval=(this.node.width-2*this.margin)/this.gridSuu,this.changeGrid(this.gridSuu,this.interval,this.margin);for(var i=0;i<=this.gridSuu;i++){var r=new Array(this.gridSuu+1);r.fill(0),this.gridArray.push(r)}this.kuroIsi=cc.instantiate(this.kuro),this.kuroIsi.setContentSize(cc.size(Math.floor(this.interval),Math.floor(this.interval))),this.kuroIsi.active=!1,this.kuroIsi.opacity=100,this.node.addChild(this.kuroIsi),this.siroIsi=cc.instantiate(this.siro),this.siroIsi.setContentSize(cc.size(Math.floor(this.interval),Math.floor(this.interval))),this.siroIsi.active=!1,this.siroIsi.opacity=100,this.node.addChild(this.siroIsi),this.node.on(cc.Node.EventType.MOUSE_MOVE,function(i){var r=t.node.convertToNodeSpaceAR(i.getLocation()),o=t.getGridIndex(r),e=t.getOffsetPoint(o);(1===t.isKuro?t.kuroIsi:t.siroIsi).setPosition(e)}),this.node.on(cc.Node.EventType.MOUSE_ENTER,function(i){(1===t.isKuro?t.kuroIsi:t.siroIsi).active=!0}),this.node.on(cc.Node.EventType.MOUSE_LEAVE,function(i){(1===t.isKuro?t.kuroIsi:t.siroIsi).active=!1}),this.node.on(cc.Node.EventType.TOUCH_START,function(i){var r=t.node.convertToNodeSpaceAR(i.getLocation()),o=t.getGridIndex(r);if(t.putGoisi(o)){var e=JSON.stringify({isi:t.isKuro,x:o.x,y:o.y});console.log("send: "+e),t.isKuro=1===t.isKuro?2:1,(1===t.isKuro?t.kuroIsi:t.siroIsi).active=!0}})},i.prototype.putGoisi=function(t){if(0!==this.getMasu(this.gridArray,t.x,t.y))return!1;if(1===this.isKuro){for(var i=[],r=0;r<=this.gridSuu;r++)i.push(this.gridArray[r].concat());if(!this.checkKinjite(i,t.x,t.y))return this.ngAnim.play(),!1}var o=this.getOffsetPoint(t),e=cc.instantiate(1===this.isKuro?this.kuro:this.siro);return e.setContentSize(cc.size(Math.floor(this.interval),Math.floor(this.interval))),e.setPosition(o),this.node.addChild(e),this.gridArray[t.x][t.y]=this.isKuro,this.checkGameOver(this.gridArray),!0},i.prototype.checkKinjite=function(t,i,r){var o=0,e=0,n={};t[i][r]=1;for(var s=-1;s<=1;s++)for(var a=-1;a<=1;a++)if((0!==s||0!==a)&&1!==n[-1*s+", "+-1*a])for(var c=0;c<2;c++){var u=[0,0,0,0,0,0,0];u[0]=this.getMasu(t,i+(-1-c)*s,r+(-1-c)*a),u[1]=this.getMasu(t,i+(0-c)*s,r+(0-c)*a),u[2]=this.getMasu(t,i+(1-c)*s,r+(1-c)*a),u[3]=this.getMasu(t,i+(2-c)*s,r+(2-c)*a),u[4]=this.getMasu(t,i+(3-c)*s,r+(3-c)*a),u[5]=this.getMasu(t,i+(4-c)*s,r+(4-c)*a),u[6]=this.getMasu(t,i+(5-c)*s,r+(5-c)*a);var h=u.slice(1,6).filter(function(t,i,r){return 1===t}),f=u.slice(1,5).filter(function(t,i,r){return 1===t});if(this.checkChoren(t,i,r,s,a))return console.log("\u9577\u9023\u306e\u7981\u3058\u624b: 1, ("+i+", "+r+")"),!1;if(this.checkNatuDome(t,i,r,s,a)){n[s+", "+a]=1;break}if(1!==u[0]&&1!==u[6]&&4===h.length){o++,n[s+", "+a]=1;break}if(1!==u[0]&&1!==u[5]&&3===f.length){e++,n[s+", "+a]=1;break}}return o>=2?(console.log("\u56db\u56db\u7981\u3058\u624b: 1, ("+i+", "+r+"), yonYonCnt="+o),!1):!(e>=2)||(console.log("\u4e09\u4e09\u7981\u3058\u624b: 1, ("+i+", "+r+"), sanSanCnt="+e),!1)},i.prototype.checkChoren=function(t,i,r,o,e){var n=0,s=0;for(n=1;n<6;n++){if(1!==this.getMasu(t,i+n*o,r+n*e))break}for(s=1;s<=6-n;s++){if(1!==this.getMasu(t,i+s*(-1*o),r+s*(-1*e)))break}return n+s>6},i.prototype.checkNatuDome=function(t,i,r,o,e){var n=0,s=!1;for(n=1;n<6;n++){if(-1===(c=this.getMasu(t,i+n*o,r+n*e))||2===c){s=!0;break}}if(!s)return!1;s=!1;for(var a=1;a<=6-n;a++){var c;if(-1===(c=this.getMasu(t,i+a*(-1*o),r+a*(-1*e)))||2===c){s=!0;break}}return!!s},i.prototype.checkGameOver=function(t){for(var i=0,r=0;r<=this.gridSuu;r++)for(var o=0;o<=this.gridSuu;o++){var e=t[r][o];0!==e&&(0!==(i=this.checkSanRen(t,r,o))&&console.log("\u4e09\u9023\u30ea\u30fc\u30c1: "+e+", ("+r+", "+o+"), count="+i),0!==(i=this.checkTobiSan(t,r,o))&&console.log("\u98db\u3073\u4e09\u30ea\u30fc\u30c1: "+e+", ("+r+", "+o+"), count="+i),0!==(i=this.checkYonRen(t,r,o))&&console.log("\u56db\u9023\u30ea\u30fc\u30c1: "+e+", ("+r+", "+o+"), count="+i),0!==(i=this.checkTobiYon(t,r,o))&&console.log("\u98db\u3073\u56db\u30ea\u30fc\u30c1: "+e+", ("+r+", "+o+"), count="+i))}},i.prototype.checkSanRen=function(t,i,r){for(var o=t[i][r],e=0,n=-1;n<=1;n++)for(var s=-1;s<=1;s++)0===n&&0===s||this.getMasu(t,i-1*n,r-1*s)!==o&&this.getMasu(t,i+1*n,r+1*s)===o&&this.getMasu(t,i+2*n,r+2*s)===o&&0===this.getMasu(t,i+3*n,r+3*s)&&0===this.getMasu(t,i+4*n,r+4*s)&&e++;return e},i.prototype.checkTobiSan=function(t,i,r){for(var o=t[i][r],e=0,n=-1;n<=1;n++)for(var s=-1;s<=1;s++)0===n&&0===s||this.getMasu(t,i-1*n,r-1*s)!==o&&this.getMasu(t,i+1*n,r+1*s)===o&&0===this.getMasu(t,i+2*n,r+2*s)&&this.getMasu(t,i+3*n,r+3*s)===o&&0===this.getMasu(t,i+4*n,r+4*s)&&e++;return e},i.prototype.checkYonRen=function(t,i,r){for(var o=t[i][r],e=0,n=-1;n<=1;n++)for(var s=-1;s<=1;s++)0===n&&0===s||this.getMasu(t,i-1*n,r-1*s)!==o&&this.getMasu(t,i+1*n,r+1*s)===o&&this.getMasu(t,i+2*n,r+2*s)===o&&this.getMasu(t,i+3*n,r+3*s)===o&&0===this.getMasu(t,i+4*n,r+4*s)&&e++;return e},i.prototype.checkTobiYon=function(t,i,r){for(var o=t[i][r],e=0,n=-1;n<=1;n++)for(var s=-1;s<=1;s++)0===n&&0===s||this.getMasu(t,i-1*n,r-1*s)!==o&&this.getMasu(t,i+1*n,r+1*s)===o&&this.getMasu(t,i+2*n,r+2*s)===o&&0===this.getMasu(t,i+3*n,r+3*s)&&this.getMasu(t,i+4*n,r+4*s)===o&&e++;return e},i.prototype.getMasu=function(t,i,r){return 0<=i&&i<=this.gridSuu&&0<=r&&r<=this.gridSuu?t[i][r]:-1},i.prototype.getGridIndex=function(t){for(var i=t.x,r=t.y,o=0;o<=this.gridSuu;o++){var e=o*this.interval+this.margin;e-.5*this.interval<=t.x&&t.x<=e+.5*this.interval&&(i=e),e-.5*this.interval<=t.y&&t.y<=e+.5*this.interval&&(r=e)}var n=new cc.Vec2(Math.floor(i),Math.floor(r));return new cc.Vec2(Math.floor(n.x/this.interval),Math.floor(n.y/this.interval))},i.prototype.getOffsetPoint=function(t){return new cc.Vec2(t.x*this.interval+this.margin,t.y*this.interval+this.margin)},i.prototype.changeGrid=function(t,i,r){for(var o=r+t*i,e=0;e<=t;e++){var n=r+e*i;this.grid.moveTo(r,n),this.grid.lineTo(o,n),this.grid.moveTo(n,r),this.grid.lineTo(n,o)}var s=(o-r)/2+r;this.grid.circle(s,s,3);for(e=-1;e<=1;e++)for(var a=-1;a<=1;a++)0!==e&&0!==a&&this.grid.circle(s+e*i*4,s+a*i*4,3.1);this.grid.close(),this.grid.stroke(),this.grid.fill()},e([a()],i.prototype,"gridSuu",void 0),e([a(cc.Graphics)],i.prototype,"grid",void 0),e([a(cc.Prefab)],i.prototype,"kuro",void 0),e([a(cc.Prefab)],i.prototype,"siro",void 0),e([a(cc.Node)],i.prototype,"play",void 0),e([a(cc.Node)],i.prototype,"top",void 0),i=e([s],i)}(cc.Component);r.default=c,cc._RF.pop()},{}]},{},["GobangScript"]);